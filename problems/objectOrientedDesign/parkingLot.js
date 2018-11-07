/** Parking Lot
 * Design a parking lot using object oriented principles
 */

class ParkingLot {
  constructor(spaces) {
    this.limit = spaces;
    this.availableSpaces = 0;
    this.cars = {}
  }
  park(car) {
    if(this.availableSpaces < this.limit) {
      if(this.cars[car.name]) {
        console.log('Car is already parked');
      } else {
        this.cars[car.name] = car;
        this.availableSpaces++;
      }
    } else {
      console.log('The parking lot is full');
    }
  }
  exit(car) {
    if(!this.number) {
      console.log('There are no cars in the parking lot');
    } else if(!this.cars[car.name]) {
      console.log('The ar is not in the parking lot');
    } else {
      delete this.cars[car.name];
      this.number--;
    }
  }
  isFull() {
    return this.number < this.limit;
  }
  availableSpaces() {
    return this.availableSpaces;
  }
}