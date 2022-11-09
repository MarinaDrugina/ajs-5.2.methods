import Bowman from '../bowman.js';

test('correct bowman character', () => {
  const bowman = new Bowman('bowman');
  const standard = {
    name: 'bowman',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(bowman).toEqual(standard);
});
