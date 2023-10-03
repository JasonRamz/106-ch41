// jQuery is a library that work with JS
//jQuery handles events
let isImportant = false;
let isVisible = false;
//bootlean//global/state variables we want to preserve information we dont have a way to store into memory


function saveTask(){
    console.log("saveTask")
}
//at the moment i refresh the page it will be set to false and if its true it will be set to true
function toggleImportant(){
    const nonImportantIcon ="fa-regular fa-bookmark fa-beat"
    const importantIcon ="fa-solid fa-bookmark fa-beat";
    if(isImportant){
        $("#iImportant").removeClass(importantIcon).addClass(nonImportantIcon);
        isImportant = false;
    }else{
        $("#iImportant").removeClass(nonImportantIcon).addClass(importantIcon);
        isImportant = true;
    }
}
//create a button in the html that catch the click event and call a function called(toggle details)
//create a GLOBAL (state)variable isVisible on the toggle and update the state

function saveTask(){
//get values
const title = $("#txtTitle").val();
const desc = $("#txtDescription").val();
const color = $("#selColor").val();
const date = $("#selDate").val();
const status = $("#selStatus").val();
const budget = $("#numBudget").val();
console.log(title, desc, color, date, status, budget);


//build an object
let taskToSave = new Task(isImportant, title, desc, color, date, status, budget);

console.log(taskToSave);
//save to server
$.ajax({
    type: "POST",
    url: "http://fsdiapi.azurewebsites.net/api/tasks/",
    data: JSON.stringify(taskToSave),
    contentType: "application/json",
    success: function(response){
        console.log(response);
    },
    error: function(error){
        console.log(error);
    },
});
//display the task
//render the object into the list
displayTask(taskToSave);
clearForm();
}
function loadTask(){
$.ajax({
    type:"GET",
    url: "http://fsdiapi.azurewebsites.net/api/tasks",
    success: function(response){
        let data = JSON.parse(response);
        //console.log(response);
        console.log(data);
        for(let i=0; i < data.length; i++){
            let task = data[i];
            if(task.name == "Jason"){
                console.log(task);
            }
        }
    },
    error: function(error){
        console.log(error);
    },

});
}
function clearForm(){
$("#txtTitle").val("");
$("#txtDescription").val("");
$("#selColor").val("");
$("#selDate").val("#000000");
$("#selStatus").val("");
$("#numBudget").val("");
}

function displayTask(task){
    let syntax =`
    <div class="task">
        <div class="info"
            <h5>${task.title}</h5>
            <p>${task.desc}</p>
            <label>${task.status}</label>
        </div>
        
        <div class="date-budget">
            
            <label>${task.date}</label>
            <label>${task.budget}</label>
        </div>
    </div>
    `;

    $(".pending-task").append(syntax);

}

function toggleVisibility(){
    if(isVisible){
        $("#form").fadeOut();// fadeout
        isVisible = false;
    }
    else{
        $("#form").fadeIn();//fadein
        isVisible = true;
    }
}

function testRequest(){
    $.ajax({
        type: "GET",//Reads
        url: "https://fsdiapi.azurewebsites.net/",//reach
        success: function(response){
            console.log(response);
        },
        error: function(error){
            console.log(error);
        },

    });

}


function init(){
    //load data
    loadTask();
    // hook events
    $("#btnSave").click(saveTask);
    $("#iImportant").click(toggleImportant);
    $("#btnDetails").click(toggleVisibility);
    
    //create a function name toggle important, just console.log
    //a message when a user clicks it

    //document.getElementById("btnSave").click();''
}


window.onload = init;