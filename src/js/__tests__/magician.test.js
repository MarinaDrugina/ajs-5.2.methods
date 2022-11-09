import Magician from '../magician.js';

test('correct magician character', () => {
  const magician = new Magician('magician');
  const standard = {
    name: 'magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(magician).toEqual(standard);
});
