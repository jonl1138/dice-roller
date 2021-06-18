var num1 = Math.floor(Math.random() * 6) + 1
console.log(num1);
var path1 = "images/dice" + num1 + ".png"
console.log(path1)
var img1 = document.querySelector(".img1")
img1.setAttribute("src", path1);

var num2 = Math.floor(Math.random() * 6) + 1
var path2 = "images/dice" + num2 + ".png"
var img2 = document.querySelector(".img2")
img2.setAttribute("src", path2);

if (num1 > num2) {
    document.querySelector("h1").innerText = "Player 1 Wins!"
}

if (num2 > num1) { 
    document.querySelector("h1").innerText = "Player 2 Wins!"
}

if (num2 == num1) { 
    document.querySelector("h1").innerText = "Everybody Loses!"
}