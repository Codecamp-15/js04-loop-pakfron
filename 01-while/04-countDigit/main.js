let input = +prompt()

// let digit = String(input).length

// let i = 0

// // while (i<digit){
// //     i=i+1
// //     if(i=digit)
// //     {alert(digit)}
    
// // }

let count=0;
if (input<0) input= -input;
while (input>=1){
    count++;
    input=input/10;
    
}
console.log(count)

// console.log(digit)
// let sum=0
// while (input) {

//     let remainder = n%10;
//     n=(n-remainder) /10;
//     sum+=remainder;
//     count++
// }
// console.log(count,sum)