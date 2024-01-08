let str= "I REALLY LIKE TO EAT PIZZA ";
let vowels = ["A", "E", "I", "O", "U"];
let count =0;
for ( let i of str.toUpperCase ())
{
    if( vowels.includes(i)){
        count++
    }
}
console.log(count);