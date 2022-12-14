import Character from '../character.js';

test('character is created', () => {
  const newCh = new Character('bowman1', 'Bowman');
  expect(newCh.name).toBe('bowman1');
  expect(newCh.type).toBe('Bowman');
});

test('error name', () => {
  expect(() => {
    const ch1 = new Character('b', 'Bowman');
    console.log(ch1);
  }).toThrow(new Error('Name length must be in [2;10] interval!'));
});

test('error type', () => {
  expect(() => {
    const ch1 = new Character('bowman1', 'bowmann');
    console.log(ch1);
  }).toThrow(new Error('Not valid character type!'));
});

test('test for correct levelUp method', () => {
  const newCh = new Character('bowman1', 'Bowman');
  newCh.attack = 40;
  newCh.defence = 20;
  newCh.levelUp();
  const standard = {
    name: 'bowman1',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 48,
    defence: 24,
  };
  expect(newCh).toEqual(standard);
});

test('test for correct damage method', () => {
  const newCh = new Character('bowman1', 'Bowman');
  newCh.attack = 40;
  newCh.defence = 20;
  newCh.damage(10);
  const standard = {
    name: 'bowman1',
    type: 'Bowman',
    health: 92,
    level: 1,
    attack: 40,
    defence: 20,
  };
  expect(newCh).toEqual(standard);
});

test('test for levelUp method with fatal health level', () => {
  expect(() => {
    const newCh = new Character('bowman1', 'Bowman');
    newCh.health = -1;
    newCh.levelUp();
    return newCh;
  }).toThrow(new Error('You are dead!'));
});

test('test for damage method with fatal health level', () => {
  expect(() => {
    const newCh = new Character('bowman1', 'Bowman');
    newCh.health = -1;
    newCh.damage(10);
    return newCh;
  }).toThrow(new Error('You are dead!'));
});
