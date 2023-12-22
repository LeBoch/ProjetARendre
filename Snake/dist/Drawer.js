export class Drawer {
    constructor(width, height, scale = 10) {
        this.scale = scale;
        const canvas = document.createElement('canvas');
        canvas.width = width * this.scale;
        canvas.height = height * this.scale;
        this.ctx = canvas.getContext('2d');
        document.body.appendChild(canvas);
    }
    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
    drawRectangle(x, y, color) {
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * this.scale, y * this.scale, this.scale, this.scale);
    }
    drawCircle(x, y, color) {
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.arc(x * this.scale + this.scale / 2, y * this.scale + this.scale / 2, this.scale / 2, 0, 2 * Math.PI);
        this.ctx.fill();
    }
}
