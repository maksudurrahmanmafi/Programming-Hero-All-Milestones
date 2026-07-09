class Student {
  #gender; //private variable declear
  constructor(name, roll, gender) {
    this.name = name;
    this.roll = roll;
    this.#gender = gender;
  }
}

class Human extends Student {
  constructor(name, roll, gender) {
    super(name, roll, gender);
  }
}

const human = new Human("mafi", 1, "male");
console.log(human);
