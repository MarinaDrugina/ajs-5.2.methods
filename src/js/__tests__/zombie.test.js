import Zombie from '../zombie.js';

test('correct zombie character', () => {
  const zombie = new Zombie('zombie');
  const standard = {
    name: 'zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(zombie).toEqual(standard);
});
