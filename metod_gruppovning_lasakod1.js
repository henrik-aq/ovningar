
function ValueClass (value)
{

 this.val = value + 2;

 this.GetValue = function ()
 {
 return this.val;
 }
 this.AddValue = function(addValue)
 {
 val += this.addValue;
 }
}

 var number;
 var valClass = new ValueClass (54);
 valClass.AddValue(20);
 number = valClass.GetValue(); 

 console.log(number);