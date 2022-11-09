export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;

    if ((name.length <= 2 || name.length >= 10)) {
      throw new Error('Name length must be in [2;10] interval!');
    }
    if (!Character.types.includes(type)) {
      throw new Error('Not valid character type!');
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
