// eventListener = Listen for specific events to create interactive web pages
//                             events: click, mouseover, mouseout
//                            .addEventListener(event, callback);

const myBox = document.getElementById("myBox");

myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH! ";
});

myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it ";
});

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me ";
});

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="styles.css">
// </head>
// <body>

//     <div id="myBox">
//         Click Me 
//     </div>

//     <script src="index.js"></script>
// </body>
// </html>

// #myBox{
//     background-color: lightgreen;
//     width: 300px;
//     height: 300px;
//     font-size: 4.1rem;
//     font-weight: bold;
//     display: flex;
//     align-items: center;
//     text-align: center;
// }