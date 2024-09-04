const Dragon = require('./classes/dragon');
const EvilDragon = require('./classes/evil-dragon');
const FriendlyDragon = require('./classes/friendly-dragon');
//////////////


let falkor = new FriendlyDragon ("Falkor", "white", ["save Atreyu from the swamp", "scare the local bullies into a dumpster"], "Bastian");
let smaug = new EvilDragon ("Smaug", "black", ["take over your mountain kingdom", "steal all your dwarven gold", "burn down your floating village"], "Dwarf King"); 

console.log(Dragon.getDragons(falkor, smaug));


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

module.exports = {
  falkor,
  smaug,
};

try {
  module.exports.falkor = falkor;
  module.exports.smaug = smaug;
} catch {
  module.exports = null;
}
