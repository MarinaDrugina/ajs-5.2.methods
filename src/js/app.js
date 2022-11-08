import Bowman from './bowman.js';
import Daemon from './daemon.js';
import Magician from './magician.js';
import Swordsman from './swordsman.js';
import Undead from './undead.js';
import Zombie from './zombie.js';

class Game {
  constructor() {
    this.chars = [];
    this.chars.push(
      new Bowman('bowman'),
      new Daemon('daemon'),
      new Magician('magician'),
      new Swordsman('swordsman'),
      new Undead('undead'),
      new Zombie('zombie'),
    );
  }
}

const game = new Game();
game.chars.forEach((newCh) => {
  newCh.levelUp();
  newCh.damage(10);
  console.log(newCh);
});
