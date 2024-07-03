function sandwich(...item) {
    console.log(`this is going to be in your sandwich`);
    for (let i = 0; i < item.length; i++) {
        console.log(`-/ ${item[i]}`);
    }
}
sandwich('bread', 'cheese', 'tomatoes', 'lettuce', 'cucumber', 'tomatoes', 'bread');
sandwich('bread', "Turkey", "Avocado", "Beef", 'bread');
sandwich('bread', "Peanut Butter", "Jelly", 'bread');
export {};
