var b =10;
{
    console.log(b);  //10
    var b=20;
    console.log(b);  //20
}
//In JavaScript, variables declared with var are scoped to the function in which they are declared, or if declared outside of any function, 
//they become global variables scoped to the entire script. Unlike let and const, variables declared with var are not block-scoped, meaning they are accessible throughout the entire function or script regardless of the block they are declared in

// var b=20 This re-declares the variable b and assigns it the value 20. Since var declarations are not block-scoped, 
//this declaration does not create a new block-scoped variable b; instead, it modifies the existing variable b in the same scope.

// the var keyword allows the re-declaration of variables within the same scope, which is why the code does not throw an error for declaring b twice 
// Cannot redeclare block-scoped variable 'b' if we use let
"###############################################################################################################################################################"

function initialiseA(){
    //When you declare variables using multiple var statements separated by commas, each variable is declared and initialized separately within the function's scope.

    var var1=1,var2=1;
}

function initialiseB(){
    var var1=var2=1;
}
//try calling each method to check the implementation

// initialiseA();
// console.log(var1);  //reference error var1 is not defined   THROWS REFERENCE ERROR
// console.log(var2);   //THROWS REFERENCE ERROR

initialiseB();
// console.log(var1);    //THROWS REFERENCE ERROR
console.log("Value of var2"+ var2); //var2 is undeclared variable
// In JS undeclared variable gets added in the window scope

//initialiseA() executes, but var1 and var2 are scoped to the function, so they are not accessible outside of it.
//initialiseB() executes, and var1 is scoped to the function, but var2 becomes a global variable because it's not declared with the var keyword. This is known as accidental global variable creation.
"###############################################################################################################################################################"



greet("John"); //prints Hello Mr John because functions are hoisted to top and in var only declaration is hoisted not assignment , In addition arrow functions are not hoisted

var greet=(name)=>{ //are compiled 2nd hence overrides  1st declared function
    console.log("Hello",name);
}

function greet(name){  //are hoisted and assigned 1st becuase of hoisting property of Javascript
    console.log("Hello Mr",name);
}

greet("John");  // during second call of greet , arrow functions becomes the function that is recently declared hence it overrides the already hoisted function and prints Hello John

//1 st statement is Hello Mr John
//2nd is Hello John
//In JavaScript, when you declare multiple functions with the same name, the last declaration overrides the previous ones hence the second greet() prints Hello John
//Function are hoisted to top , Variable declarations using var are also hoisted to the top of their scope. However, variable assignments are not hoisted; only the declaration part is moved to the top



"###############################################################################################################################################################"