

function flipit() {
    var audio = new Audio("Single-Coin-Drop-On-Table-www.fesliyanstudios.com.mp3");
    audio.play();
    
    setTimeout(() => {
        var randomNumber = Math.floor((Math.random() * 2) + 1);
if (randomNumber == 1) {
    document.querySelector(".flip").innerHTML = "🎉 Its Heads";
}
else {
    document.querySelector(".flip").innerHTML = "🎉 Its Tails";
        }
    }, 1000);
    
    setTimeout("location.reload(true);", 5000);
}