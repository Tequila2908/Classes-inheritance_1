
export default class Character {
  constructor(name) {
    if (!name) {
      throw new Error('name отсутствует');
    } else if (String(name).length < 2 || String(name).length > 10) {
      throw new Error('Поле name должно содержать от 2 до 10 символов');
    } else {
      this.name = String(name);
    }
    this.health = 100;
    this.level = 1;
  }
}
