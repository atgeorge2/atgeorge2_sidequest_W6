// src/SoundManager.js
// Audio playback (SYSTEM layer).
//
// Responsibilities:
// - Load sound assets during preload() (via loadSound)
// - Play sounds by key (SFX/music)
// - Provide a simple abstraction so gameplay code never touches audio directly
//
// Non-goals:
// - Does NOT subscribe to EventBus directly (Game wires events → play())
// - Does NOT decide when events happen (WORLD logic emits events)
// - Does NOT manage UI
//
// Architectural notes:
// - Game connects EventBus events (leaf:collected, player:damaged, etc.) to SoundManager.play().
// - This keeps audio concerns isolated from gameplay and supports easy swapping/muting.

export class SoundManager {
  constructor() {
    this.sfx = {};
  }

  load(name, path) {
    this.sfx[music] = loadSound("cave themeb4.ogg"); //[1]
    this.sfx[reward] = loadSound("Coin01.mp3"); //[2]
    this.sfx[jump] = loadSound("SFX_Jump_17.wav"); //[4]
    this.sfx[hurt] = loadSound("Ouch_004.wav"); //[3]
    this.sfx[attack] = loadSound("Punch1_001.wav"); //[3]
    this.sfx[death_sound] = loadSound("Explosion1_003.wav"); //[3]
  }

  play(name) {
    this.sfx[name]?.play();
  }
}
