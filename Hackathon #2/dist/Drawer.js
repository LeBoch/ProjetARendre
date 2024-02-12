export class Drawer {
    constructor(width, height, scale = 10) {
        this.scale = scale;
        this.canvas = document.createElement('canvas');
        this.setSize(width, height);
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
    }
    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
    setSize(width, height) {
        this.canvas.width = width * this.scale;
        this.canvas.height = height * this.scale;
    }
    drawRectangle(x, y, color, size = 1) {
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        const width = size * this.scale;
        this.ctx.fillRect(x * this.scale + ((this.scale - width) / 2), y * this.scale + ((this.scale - width) / 2), width, width);
    }
    drawCircle(x, y, color, size = 1) {
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.arc(x * this.scale + this.scale / 2, y * this.scale + this.scale / 2, (size * this.scale) / 2, 0, 2 * Math.PI);
        this.ctx.fill();
    }
}
