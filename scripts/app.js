// jQuery is a library that work with JS
//jQuery handles events
function saveTask(){
    console.log("saveTask")
}

function toggleImportant(){
    const nonImportantIcon ="fa-regular fa-bookmark fa-beat"
    const ImportantIcon ="fa-solid fa-bookmark fa-beat";

    $("#iImportant").removeClass(nonImportantIcon).addClass(ImportantIcon);
}

function init(){
    //load data

    // hook events
    $("#btnSave").click(saveTask);
    $("#iImportant").click(toggleImportant);
    //create a function name toggle important, just console.log
    //a message when a user clicks it

    //document.getElementById("btnSave").click();''
}


window.onload = init;