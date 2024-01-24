const userCountry = prompt('Введіть країну доставки:');
const country = userCountry.toLowerCase();
let deliveryCosts  = { китай: 100,
    чилі: 250, 
    австралія: 170,
    індія: 80,
    ямайка: 120
};
if (deliveryCosts.hasOwnProperty(country)) {
    let deliveryCost = deliveryCosts[country];
    console.log(`Доставка в ${country} буде коштувати ${deliveryCost} кредитів.`);
}
else{
    alert('Ваші дані введені неправильно або доставка недоступна.');
}





