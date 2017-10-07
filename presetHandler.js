// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (requestType, index, newPresetArray) => {
  if (!index) return [404]; // Invalid index
  if (index) {
    if (requestType === 'GET') {
      return [200, presets];
    } else if (requestType === 'POST') {
        presets[i] = newPresetArray;
        return [200, presets];
      } else return [400]; // Bad request
  }
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
