let x = 10;
{            
    console.log(x);   //it looks for x within scope if declared with let
    let x=20;         // we assume that the line let x = 20 may result in error because x is already declared , and redeclaring the declared variable may cause error but its false
    console.log(x);
}

//line 4 will not result in error because we are using 'let' where let belongs to block scope so if within the block scope(2-5) x is not declared writing let x=20 will not give error
//When you use var to declare a variable, it has function scope or global scope, and it does not have block scope so if above question is written using var it prints without any error because var is declared in global scope


// In JavaScript, variable declarations with var are hoisted to the top of their scope, meaning that the declaration is processed before the code is executed.
// However, variables declared with let and const are hoisted,but they are not initialized until the JavaScript engine reaches their declaration in the code.

//Inside the block, we attempt to log the value of x. However, since let variables are hoisted but not initialized 
//until their declaration is reached, accessing x before its declaration results in a ReferenceError. This is because x is still in the TDZ.


// Hoisting: Variable declarations are moved to the top of their scope during the compilation phase of the JavaScript code. This allows you to use a variable before it's formally declared in your code.

// Not Initialized: While var declarations are initialized with a default value of undefined during hoisting, let and const declarations remain uninitialized until their declaration statement is reached. This means that accessing them before their declaration results in a ReferenceError
//Example

//var x = undefined when hoisted , let x; for "let" when hoisted

console.log(y);
var y=10;

console.log(z);  //now if we use y we get already declared because environment is a block scope and y is already declared but if we use z we get " Cannot access 'z' before initialization" because let is not by default with undefined var y=undefined , let z;
let z=10;


"###############################################################################################################################################################"

console.log(a);  //undefined because var a is hoisted to the top with var a = undefined with default initialisation hence a =undefined
{ 
    var a=2;   //hoisted to top with default initialization
    {
        let a=5;  //let has block scope hence it checks if a was declared within that scope since a was not declared within that scope it hoists a to the top of block scope with no default value
    }
    console.log(a);//var a is now initialised with value 2 and not 5 because let a=5 is available only within that scope and not outside and var is hoisted to top  
}
console.log(a);

"###############################################################################################################################################################"



