function multipliceraTal(tal1, tal2) {
	var summa = tal1 * tal2;
	return summa;
}


var returSumma = multipliceraTal(2, 6);
console.log(returSumma);

////////////////////////////////////////////

//const takeOrder = (topping, crustType) => {
//  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
  
//};

//takeOrder('mushrooms', 'thin crust');
//takeOrder('salami', 'cheese');
//takeOrder('ham', 'thick crust');

///////////////////////////////////////////

var orderCount = 0;

function takeOrder(topping, crustType) {
  orderCount++;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

function getSubTotal(itemCount) {
  return itemCount * 7.5;
};

takeOrder('mushrooms', 'thin crust');
takeOrder('salami', 'cheese');
takeOrder('ham', 'thick crust');
takeOrder('cheese', 'super thin');

console.log(getSubTotal(orderCount));