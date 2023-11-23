Car.prototype.run = function() {
    console.log(running);
}
Car.add =function() {
    console.log('加油中');
}
function Car() {
    this.name = 'BMW'
}

let Car = new Car ()
// Car.run()
// Car.add()


