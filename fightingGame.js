let canvas = document.querySelector('canvas');
let c = canvas.getContext('2d');

canvas.width = 1050;
canvas.height = 800;

c.fillRect(0, 0, canvas.width, canvas.height);

class Sprite {
	constructor(position) {
		this.position = position;
	}
	draw() {
		c.fillStyle = 'green';
		c.fillRect(this.position.x, this.position.y, 30, 100);
	}
}

const player = new Sprite({
	x: 0,
	y: 0,
});

player.draw();
console.log(player);

let isMoving = false;

const keys = {
    f: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    },
    e: {
        pressed: false
    }
}

function animate() {
	window.requestAnimationFrame(animate);
	c.fillStyle = 'black';
	c.fillRect(0, 0, canvas.width, canvas.height);
    player.draw();
    
    if (keys.f.pressed) {
        player.position.x = 2
    } else if (keys.s.pressed) {
        player.position.x = -2
    } else if (keys.d.pressed) {
        player.position.y = 2
    } else if (keys.e.pressed) {
        player.position.y = -2
    }
}

animate();

window.addEventListener('keydown', (event) => {
	if (!isMoving) {
		isMoving = true;
		switch (event.key) {
			case 'f':
				moveRight();
				break;
			case 's':
				moveLeft();
				break;
			case 'd':
				moveDown();
				break;
			case 'e':
				moveUp();
				break;
		}
	}
});

window.addEventListener('keyup', (event) => {
    if (['f', 's', 'd', 'e'].includes(event.key)) {
        isMoving = false;
    }
});

function moveRight() {
	if (isMoving) {
		player.position.x += 2;
		animate();
		setTimeout(moveRight, 16);
	}
}

function moveLeft() {
	if (isMoving) {
		player.position.x -= 2;
		animate();
		setTimeout(moveLeft, 16);
	}
}

function moveDown() {
	if (isMoving) {
		player.position.y += 2;
		animate();
		setTimeout(moveDown, 16);
	}
}

function moveUp() {
	if (isMoving) {
		player.position.y -= 2;
		animate();
		setTimeout(moveUp, 16);
	}
}
