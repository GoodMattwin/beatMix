// Drum sounds
let  kicks = new Array(16).fill(false);
let  snares = new Array(16).fill(false);
let  hiHats = new Array(16).fill(false);
let  rideCymbals = new Array(16).fill(false);

function toggleDrum(sound, i) {
  sound = window[sound];
  sound[i] = !sound[i];
}

function clear(sound) {
  sound = window[sound];
  sound.fill(false);
}

function invert(sound) {
  sound = window[sound];
  for (let i = 0; i < sound.length; i++) {
    sound[i] = !sound[i];
  }
}

function getNeighborPads(x, y, size) {
  neighbors = [];

  for (var row = Math.max(0, x-1); row <= Math.min(x+1, size); row++) {
    for (var col = Math.max(0, y-1); col <= Math.min(y+1, size); col++) {
      if (row !== x || col !== y) {
        neighbors.push([row, col]);
      }
    }
  }
}
