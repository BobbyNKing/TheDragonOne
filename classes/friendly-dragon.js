const Dragon = require('./dragon');

class FriendlyDragon extends Dragon {
    constructor(name, color, lifeGoals = [], friend) {
        super(name, color);
        this.lifeGoals = lifeGoals; 
        this.friend = friend;
    }

    hasLifeGoals() {
        for (let i = 0; i < this.lifeGoals.length; i++) {
           console.log(`${this.name} likes to ${this.lifeGoals[i]}`);
        }

        //this.lifeGoals.forEach(lifeGoal => console.log(`${this.name} likes to ${this.lifeGoals}`));
    }

    helpsPeople() {
        return `${this.name} helps their friend ${this.friend}`;
    }
}


///////////////////////////////

try {
    module.exports = FriendlyDragon;
  } catch {
    module.exports = null;
  }