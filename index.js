// for player 1

randomNumber1 = Math.floor(Math.random()*6) + 1;

document.querySelector("img").setAttribute("src","images/dice" + randomNumber1 + ".png");

// for player 2

randomNumber2 = Math.floor(Math.random()*6) + 1;

document.querySelectorAll("img")[1].setAttribute("src","images/dice" + randomNumber2 + ".png");

//player 1 wins

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else
{
    document.querySelector("h1").innerHTML = "Draw";
}