// src/game/engine/GameLoop.ts

export class GameLoop {
  private lastTime = 0;

  start(update: (delta: number) => void) {
    const loop = (time: number) => {
      const delta = time - this.lastTime;
      this.lastTime = time;

      update(delta);

      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);
  }
}