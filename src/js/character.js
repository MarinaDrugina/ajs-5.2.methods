export default class Character {
  constructor(name, type, attack, defence, health = 100, level = 1) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;

    if ((name.length <= 2 || name.length >= 10) && Character.types.includes(type)) {
      throw new Error('Name length must be in [2;10] interval!');
    }
    if ((name.length >= 2 && name.length <= 10) && !Character.types.includes(type)) {
      throw new Error('Not valid character type!');
    }
    if ((name.length <= 2 || name.length >= 10) && !Character.types.includes(type)) {
      throw new Error('Not valid character name & type!');
    }
  }

  levelUp() {
    if (this.health >= 0) {
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
    } else {
      throw new Error('You are dead!');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('You are dead!');
    }
  }
}

Character.types = [
  'Bowman',
  'Swordsman',
  'Magician',
  'Undead',
  'Zombie',
  'Daemon',
];
