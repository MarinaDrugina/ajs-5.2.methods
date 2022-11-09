import Undead from '../undead.js';

test('test for correct undead character', () => {
  const undead = new Undead('undead');
  const standard = {
    name: 'undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(undead).toEqual(standard);
});
