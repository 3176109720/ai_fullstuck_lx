Car.prototype = {
    name: 'BMW',
    long: 4900,
    height: 1400
  }
  function Car(owner, color) {
    this.owner = owner
    this.color = color
  }

  let car = new Car('李总', 'red')
  let car2 = new Car('戴总', 'pink')
  
//   car.name = '奔驰'
delete Car.prototype.name

  console.log(car);