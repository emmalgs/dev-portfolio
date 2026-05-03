// src/game/engine/GameLoop.ts

export class GameLoop {
  private lastTime = 0;
  private rafId: number | null = null;

  start(update: (delta: number) => void) {
    const loop = (time: number) => {
      const delta = time - this.lastTime;
      this.lastTime = time;

      update(delta);

      this.rafId = requestAnimationFrame(loop);
    };

    this.rafId = requestAnimationFrame(loop);
  }

  stop() {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }
}