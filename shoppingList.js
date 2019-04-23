var list= ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];
list.push('fruit loops');
list[4] =  'fair trade coffee';
list.splice(2,2,'rice', 'beans')
var cart=[];
cart.push(list.pop());
cart.push(list.shift());
while(list.length!=0)
{
   cart.push(list.pop());
}
console.log(cart.join(','));
cart.sort().reverse();
console.log(cart.join(','));