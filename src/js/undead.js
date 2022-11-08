import Character from './character.js';

export default class Undead extends Character {
  constructor(name, type = 'Undead', attack = 25, defence = 25) {
    super(name, type);
    this.attack = attack;
    this.defence = defence;
  }
}
