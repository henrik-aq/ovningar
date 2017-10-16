 function Metod1(x,y) // 3. 25, 5
 {
 return x* (y + 2); // 4. 25 x 7 = 175.
 }
 function Metod2(a, b)
 {
 a = a * b;				// 2. 5 x 5 = 25
 return Metod1(a, 5);   
 }
 function Metod3(x, y)
 {
 let returnValue = x + y;
 return returnValue;
 }

 var number = Metod2(Metod3(2,3), 5); //1. Metod 2 kallas med 5, 5.

 console.log(number);
 
