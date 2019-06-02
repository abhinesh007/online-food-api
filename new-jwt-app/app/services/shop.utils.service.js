// const jwt = require('jsonwebtoken');

module.exports = {
  generateRestId: () => {
    let letters = "ABCDEFGHJKMNPQRSTUXY";
    let text = "";
    for (var i = 0; i < 5; i++) {
      text += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return '011-' + text;
  }
};