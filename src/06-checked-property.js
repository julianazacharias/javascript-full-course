// .checked = property that determines the checked state of an 
//                     HTML checkbox or radio button element

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){

    if(myCheckBox.checked){
        subResult.textContent = `You are subscribed!`;
    }
    else{
        subResult.textContent = `You are NOT subscribed!`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with Visa`;
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = `You are paying with MasterCard`;
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = `You are paying with PayPal`;
    }
    else{
        paymentResult.textContent = `You must select a payment type`;
    }
}

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My website</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
//     <input type="checkbox" id="myCheckBox">
//     <label for="myCheckBox">subscribe</label><br><br>

//     <input type="radio" id="visaBtn" name="card">
//     <label for="visaBtn">Visa</label><br>
//     <input type="radio" id="masterCardBtn" name="card">
//     <label for="masterCardBtn">MasterCard</label><br>
//     <input type="radio" id="payPalBtn" name="card">
//     <label for="payPalBtn">PayPal</label><br><br>

//     <button type="submit" id="mySubmit">submit</button>

//     <p id="subResult"></p>
//     <p id="paymentResult"></p>

//     <script src="index.js"></script>
// </body>
// </html>

// body{
//     font-family: Verdana;
//     font-size: 2em;
// }
// #mySubmit{
//     font-size: 1em;
// }