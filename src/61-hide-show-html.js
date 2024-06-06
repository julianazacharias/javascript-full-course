const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click", event => {
   
    // ----- DISPLAY -----
    if(myImg.style.display === "none"){
        myImg.style.display = "block";
        myButton.textContent = "Hide";
    }
    else{
        myImg.style.display = "none";
        myButton.textContent = "Show";
    }
   
    // ----- VISIBILITY -----
    if(myImg.style.visibility === "hidden"){
        myImg.style.visibility = "visible";
        myButton.textContent = "Hide";
    }
    else{
        myImg.style.visibility = "hidden";
        myButton.textContent = "Show";
    }
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

//     <img id="myImg" src="car.jpg" width="400px"><br>

//     <button id="myButton">Hide</button><br>

//     <script src="index.js"></script>
// </body>
// </html>