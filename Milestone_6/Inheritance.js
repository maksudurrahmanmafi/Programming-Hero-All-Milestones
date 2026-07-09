class Student {
  constructor(name, roll) {
    this.name = name;
    this.roll = roll;
  }
}

class Human extends Student {
  constructor(name, roll, gender) {
    super(name, roll);
    this.gender = gender;
  }
}
class Female extends Human {
  constructor(name, roll, gender) {
    super(name, roll, gender);
  }
}

const human = new Human("YO", 2, "male");
console.log(human);

const female = new Female("Fabiha", 1, "Female");
console.log(female);
