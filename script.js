var canvas = document.getElementById('GameMap');
var ctx = canvas.getContext("2d");

var deltaX = 0;
var deltaY = 0;

window.addEventListener("keydown", keysPressed, false);
window.addEventListener("keyup", keysReleased, false);

var keys = [];

/* Test Character */
function drawTriangle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // the triangle
    ctx.beginPath();
    ctx.moveTo(200 + deltaX, 100 + deltaY);
    ctx.lineTo(170 + deltaX, 150 + deltaY);
    ctx.lineTo(230 + deltaX, 150 + deltaY);
    ctx.closePath();

    // the outline
    ctx.lineWidth = 10;
    ctx.strokeStyle = "rgba(102, 102, 102, 1)";
    ctx.stroke();

    // the fill color
    ctx.fillStyle = "rgba(255, 204, 0, 1)";
    ctx.fill();
}
drawTriangle();


/* Movement */
function keysPressed(e) {
    // store an entry for every key pressed
    keys[e.keyCode] = true;

    // left
    if (keys[37]) {
        deltaX -= 2;
    }

    // right
    if (keys[39]) {
        deltaX += 2;
    }

    // down
    if (keys[38]) {
        deltaY -= 2;
    }

    // up
    if (keys[40]) {
        deltaY += 2;
    }

    e.preventDefault();
    drawTriangle();
}

/*function keysReleased(e) {
    // mark keys that were released
    keys[e.keyCode] = false;
}
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
}*/
