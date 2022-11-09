import Swordsman from '../swordsman.js';

test('correct swordsman character', () => {
  const swordsman = new Swordsman('swordsman');
  const standard = {
    name: 'swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(swordsman).toEqual(standard);
});
