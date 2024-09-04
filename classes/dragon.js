//DRAGONS!!!

class Dragon {
  constructor(name, color) {
    this.name = name; 
    this.color = color;
  }

  breathesFire(){
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }

static getDragons(...dragons) {
  return dragons.map(dragon => dragon.name);
  }
}

/*
const dragon1 = new Dragon('Smaug', 'Red');
const dragon2 = new Dragon('Toothless', 'Black');
const dragon3 = new Dragon('Falkor', 'White');

const names = Dragon.getDragons(dragon1, dragon2, dragon3);

console.log(names);*/
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
