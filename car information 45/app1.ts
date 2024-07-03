interface Car {
    manufacturer: string;
    modelName: string;
    [key: string]: any;
}

function createCar(manufacturer: string, modelName: string, ...options: { [key: string]: any }[]): Car {
    let car: Car = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    for (let option of options) {
        for (let key in option) {
            car[key] = option[key];
        }
    }

    return car;
}

let myCar = createCar("Toyota", "Camry", { color: "blue", year: 2023 });

console.log(myCar);
