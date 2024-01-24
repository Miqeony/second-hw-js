const credits = 23580;
const pricePerDroid = 3000;
const numberOfTVs = prompt('Введіть кількість телевізорів, які ви хочете придбати:');
let message;
if (  numberOfTVs === null) {
    console.log('Операцію скасовано!');
  
}else{
    const quantity = Number(numberOfTVs);
    const totalPrice = quantity * pricePerDroid;
    if(totalPrice > credits){
        console.log('Недостатньо коштів на рахунку!');
    }else{
        const remainingCredits = credits - totalPrice;
        console.log(`Ви купили ${quantity} телевізорів. На рахунку залишилось ${remainingCredits} кредитів.`);
    }
}