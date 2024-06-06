// setTimeout() = function in JavaScript that allows you to schedule
//                            the execution of a function after an amount of time 
//                            Times are approximate
//                            setTimeout(callback, delay);

// ---------- EXAMPLE 1 ----------
function hello() {
    window.alert("Hello");
}
 
setTimeout(hello, 3000);

// ---------- EXAMPLE 2 ----------
// clearTimeout() = can cancel a timeout before it triggers

// const timeoutId = setTimeout(() => window.alert("Hello"), 3000);

clearTimeout(timeoutId);

// ---------- EXAMPLE 3 ----------

let timeoutId;

function showAlert() {
    window.alert("Hello");
}

function startTimer() {
    timeoutId = setTimeout(showAlert, 3000);
    console.log("STARTED");
}

function clearTime() {
    clearTimeout(timeoutId);
    console.log("CLEARED");
}

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="styles.css">
// </head>
// <body>
//     <button onclick="startTimer()">START</button>
//     <button onclick="clearTimer()">CLEAR</button>
//     <script src="index.js"></script>
// </body>
// </html>

// console.time() = tool that allows you to measure the time it takes
//                              for a section of code or process to execute
//                              Great for identifying performance "bottlenecks"

// function loadData(){

//     console.time("loadData");

//     for(let i = 0; i < 1000000000; i++){
//         //pretend to load some data
//     }

//     console.timeEnd("loadData");
// }

// function processData(){

//     console.time("processData");

//     for(let i = 0; i < 1000000; i++){
//         //pretend to process some data
//     }
    
//     console.timeEnd("processData");
// }

// loadData();
// processData();