import Daemon from '../daemon.js';

test('correct daemon character', () => {
  const daemon = new Daemon('daemon');
  const standard = {
    name: 'daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(daemon).toEqual(standard);
});
