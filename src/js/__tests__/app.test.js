
import Bowman from '../Bowman';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Undead from '../Undead';
import Zombie from '../Zombie';

test('Bowman health', () => {
  const bowman = new Bowman('test');
  expect(bowman.health).toBe(100);
});

test('Bowman level', () => {
  const bowman = new Bowman('test');
  expect(bowman.level).toBe(1);
});

test('Bowman name', () => {
  const bowman = new Bowman('test');
  expect(bowman.name).toBe('test');
});

test('Bowman no name', () => {
  expect(() => new Bowman()).toThrowError('name отсутствует');
});

test('Bowman name > 10', () => {
  expect(() => new Bowman('uuuuuuuuuuu')).toThrowError('Поле name должно содержать от 2 до 10 символов');
});

test('Bowman name < 2', () => {
  expect(() => new Bowman('u')).toThrowError('Поле name должно содержать от 2 до 10 символов');
});
