const player = $("#character");

const speed = 5;

$(window).on("keydown", function(event)
{
    let key = event.keyCode
    event.preventDefault();
    key === 37 ? (console.log("Left"), moveLeft()) : 
    key === 38 ? (console.log("Up"), moveUp()) : 
    key === 39 ? (console.log("Right"), moveRight()) : 
    key === 40 ? (console.log("Down"), moveDown()) : 
    console.log("not in registry");
})

function moveLeft()
{
    player.x -= speed;
}

function moveRight()
{
    player.x += speed;
}

function moveUp()
{
    player.y += speed;
}

function moveDown()
{
    player.y -= speed;
}