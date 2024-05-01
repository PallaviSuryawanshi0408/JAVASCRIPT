/*// JavaScript Code Execution

JavaScript is a synchronous (Moves to the next line only when the execution of the current line is completed) and single-threaded (Executes one command at a time in a specific order one after another serially) language. To know behind the scene of how JavaScript code gets executed internally, we have to know something called Execution Context and its role in the execution of JavaScript code. */
/*
//javascript execution context
Execution Context: Everything in JavaScript is wrapped inside Execution Context, which is an abstract concept (can be treated as a container) that holds the whole information about the environment within which the current JavaScript code is being executed. */
/*
{js code}=> 1)Global Execution Context
The value of `this` keyword refer to Global Execution Context (which is an empty Object in NODE environment, & window object in browser environment)
2)functional execution Context
3)eval execution context  */
/*
an Execution Context has two components and JavaScript code gets executed in two phases.

@)Memory Allocation Phase: In this phase, all the functions and variables of the JavaScript code get stored as a key-value pair inside the memory component of the execution context. In the case of a function, JavaScript copied the whole function into the memory block but in the case of variables, it assigns undefined as a placeholder.
@)Code Execution Phase: In this phase, the JavaScript code is executed one line at a time inside the Code Component (also known as the Thread of execution) of Execution Context. 
example:- 
var number = 2; 
function Square (n) { 
    var res = n * n; 
    return res; 
} 
var newNumber = Square(3);

So when we run this program, first Global Execution Context is created.

So, in the Memory Allocation phase, the memory will be allocated for these variables and functions like this.
___MEMORY COMPONENT____
number : undefined
Square : function Square (n) { 
    var res = n * n; 
    return res; 
} 
newNumber : undefined 

In the Code Execution Phase, JavaScript being a single thread language again runs through the code line by line and updates the values of function and variables which are stored in the Memory Allocation Phase in the Memory Component.

So in the code execution phase, whenever a new function is called, a new Execution Context is created. So, every time a function is invoked in the Code Component, a new Execution Context is created inside the previous global execution context.


---CODE EXECUTION PHASE 
number :2
newNumber : ------------>    ________NEW EXECUTION CONTEXT _________
                                ___MEMORY COMPONENT_  n: undefined 
                                                      res: undefined
                                ____CODE EXECUTION_   n : 3
                                            --MEMORY--   --CODE--
                                             res: 9       res: n*n


the values are assigned in the memory component after executing the code line by line, i.e. number: 2, res: 4, newNumber: 4.

After the return statement of the invoked function, the returned value is assigned in place of undefined in the memory allocation of the previous execution context. After returning the value, the new execution context (temporary) gets completely deleted. Whenever the execution encounters the return statement, It gives the control back to the execution context where the function was invoked.




Call Stack: When a program starts execution JavaScript pushes the whole program as global context into a stack which is known as Call Stack and continues execution. Whenever JavaScript executes a new context and just follows the same process and pushes to the stack. When the context finishes, JavaScript just pops the top of the stack accordingly.

     EXECUTION CONTEXT 2
           ^
           |
           |   
     EXECUTION CONTEXT 1
           ^
           |
           |  
     GLOBAL EXECUTION CONTEXT