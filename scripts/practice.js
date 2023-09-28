function sayHello(name,lastName){
    console.log("Hello!"+ name+ lastName);
}

function sum(num1,num2){
    var res = num1 + num2;
    return res;
}


function printNumbers(){
    //print numbers from 1-10
    //except the three and seven because i dont like it.
    list = [121,1515,534,115,54,854,9752,3654,21,54,162,158];

    //print every number seperatly
    //print the sum of all numbers
    // print the numbers that are greater than 200


    let sum = 0;
    for (let i=0; i<list.length; i++)
    {
        let num =list[i];
        if(num >= 200)
        {
            console.log(num);
        }
            sum += num;// this are equal too sum = sum + num
    }
    console.log(sum);


    for(let i = 1; i <= 10; i++)
    if(i != 3 && i != 7)
    {
        console.log(i);
    }
    /*
    ! = not 
    && = and
    || = or
    */
    
}


// DRY (DONT REPEAT YOURSELF) - JQuery 
// SRP (SINGLE REPONSABILITY PRINCIPLES) 
// KISS (KEEP IT SIMPLE)

function init() {
    const name="Jason";
    console.log("Hello World!");
    sayHello(name ," Ramirez");
    sayHello("Joe"," Gomez");
    printNumbers();

    console.log(result);
}

window.onload = init;

// reasons we use init is to make the page wait . because the time the server is running it could be different timing than in the browser
//if something doesnt work the other wont work 


//in the sayHello function pass your name and some other random name


//variables does not have to much. we are passing the value and not the variable name.