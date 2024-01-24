let input;
let total = 0;

while ((input = prompt("Введіть число:")) !== null) {
    const number = parseFloat(input);

    if (!isNaN(number)) {
        total += number;
    } else {
        alert("Було введено не число, спробуйте ще раз");
    }
}

alert(`Загальна сума чисел дорівнює ${total}`);
