const BEATS = 4;

// Drum object with sound arrays
let drumSounds = {
  kicks: [],
  snares: [],
  hiHats: [],
  rideCymbals: [],
}

// Populates each array in drumSounds with correct number of beats. Default is 'false'
for (let props in drumSounds) {
  for (let i = 0; i < BEATS; i++) {
    drumSounds[props].push(false);
  }
}

function toggleDrum(sound, i) {
  drumSounds[sound][i] = !drumSounds[sound][i];
  console.log(drumSounds);
}

console.log(drumSounds);
toggleDrum('kicks', 2);
