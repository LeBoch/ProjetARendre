export class Drawer {
  private ctx: CanvasRenderingContext2D;
  private scale: number;
  private canvas: HTMLCanvasElement

  constructor(width: number, height: number, scale: number = 10) {
    this.scale = scale;
    this.canvas = document.createElement('canvas');
    this.setSize(width, height);
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    document.body.appendChild(this.canvas);
  }

  public clear(): void {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  public setSize(width: number, height: number): void {
    this.canvas.width = width * this.scale;
    this.canvas.height = height * this.scale;
  }

  public drawRectangle(x: number, y: number, color: string, size = 1): void {
    this.ctx.beginPath();
    this.ctx.fillStyle = color;
    const width = size * this.scale;
    this.ctx.fillRect(x * this.scale + ((this.scale - width) / 2), y * this.scale + ((this.scale - width) / 2), width, width);
  }

  public drawCircle(x: number, y: number, color: string, size = 1): void {
    this.ctx.beginPath();
    this.ctx.fillStyle = color;
    this.ctx.arc(x * this.scale + this.scale / 2, y * this.scale + this.scale / 2, (size * this.scale) / 2, 0, 2 * Math.PI);
    this.ctx.fill();
  }
}