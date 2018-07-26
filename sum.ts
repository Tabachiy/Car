export class Car {
  amountOfFuel: number;
  fuelСonsumption: number;

    constructor(carAmountOfFuel: number,
      carFuelСonsumption: number) {
        this.amountOfFuel = carAmountOfFuel;
        this.fuelСonsumption = carFuelСonsumption;
      }

      distanceСalculation(): number {
        return (this.amountOfFuel / this.fuelСonsumption)*100;
    }
}

export class Bentley extends Car {
  }

export class Zhiguli extends Car {
  }
