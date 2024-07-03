function createCar(manufacturer, modelName, ...options) {
    let car = {
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
export {};
