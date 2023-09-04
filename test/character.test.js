import { Character } from "../character";


describe('Character', () => {
 const character = new Character('demik', 100, 10, 10, 1);

 describe('levelUp', () => {
  test('повышение уровня', () => {
   character.levelUp();
   expect(character.level).toBe(2);
  });

  test('увеличение атаки на 20%', () => {
   character.levelUp();
   expect(character.attack).toBe(12);
  });

  test('увеличиение защиты на 20%', () => {
   character.levelUp();
   expect(character.defence).toBe(12);
  });

  test('восполняет здоровья до 100%', () => {
   character.health = 50;
   character.levelUp();
   expect(character.health).toBe(100);
  });

  test('нельзя повысить уровень мертвого персонажа', () => {
   character.health = 0;
   expect(() => character.levelUp()).toThrow('нельзя повысить уровень мертвого персонажа');
  });
 });

 describe('damage', () => {
  test('дамага 50 единиц', () => {
   character.damage(50);
   expect(character.health).toBe(55);
  });

  test('поглощение 50% урона', () => {
   character.defence = 50;
   character.damage(50);
   expect(character.health).toBe(75);
  });

  test('уровень здоровья не может быть меньше нуля', () => {
   character.damage(200);
   expect(character.health).toBe(0);
  });
 });
});