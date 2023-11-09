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
        c.fillStyle = 'green'
        c.fillRect(this.position.x, this.position.y, 30, 100)
    }
};

const player = new Sprite({
    x: 0,
    y: 0
});

player.draw()
console.log(player)

function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.draw()
}

animate()


window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'c':
            player.position.y = 1
            break;
    }

console.log(event.key)
})

