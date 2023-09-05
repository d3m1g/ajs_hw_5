const heroes = [
 "Bowerman",
 "Swordsman",
 "Magician",
 "Daemon",
 "Undead",
 "Zombie",
];

export default class Character {
 constructor(name, type) {
  if (name.length < 2 || name.length > 10) {
   throw new Error('Некорректное имя');
  }
  if (!type.includes(type)) {
   throw new Error('Неизвестный тип персонажа');
  }
  this.name = name;
  this.type = type;
  this.health = 100;
  this.level = 1;
 }

 levelUp() {
  if (this.health === 0) {
   throw new Error('нельзя повысить уровень мертвого персонажа');
  } else {
   this.level += 1;
   this.health = 100;
   this.attack += this.attack * 0.2;
   this.defence += this.defence * 0.2;   
  }
 }

 damage(points) {
  this.health = Math.max(this.health - points * (1 - this.defence / 100), 0);
 }
}