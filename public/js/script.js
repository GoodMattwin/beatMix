const BEATS = 16;
const createEmptyDrumArray = () => new Array(BEATS).fill(false);

// Drum sounds
let  kicks = createEmptyDrumArray();
let  snares = createEmptyDrumArray();
let  hiHats = createEmptyDrumArray();
let  rideCymbals = createEmptyDrumArray();

const getDrumArrayByName = (name) => {
  switch (name) {
    case 'kicks':
      return kicks;
    case 'snares':
      return snares;
    case 'hiHats':
      return hiHats;
    case 'rideCymbals':
      return rideCymbals;
    default:
      return;
  }
};

function toggleDrum(sound, i) {
  sound = getDrumArrayByName(sound);
  if (!sound || i > BEATS || i < 0) return;
  sound[i] = !sound[i];
}

function clear(sound) {
  sound = getDrumArrayByName(sound);
  if (sound) sound.fill(false);
}

function invert(sound) {
  sound = getDrumArrayByName(sound);
  if (sound) {
    for (let i = 0; i < sound.length; i++) {
      sound[i] = !sound[i];
    }
  }
}

function getNeighborPads(x, y, size) {
  neighborPads = [];

  if (x >= size || y >= size || x < 0 || y < 0) return neighborPads;

  neighborPads.push([x - 1, y]);
  neighborPads.push([x, y - 1]);
  neighborPads.push([x + 1, y]);
  neighborPads.push([x, y + 1]);
  return neighborPads.filter((neighbor) => {
    return neighbor.every((val) => {
      return val >= 0 && val < size;
    });
  })
}
