// let input = +prompt()
// let degit =  Number(String(input).length)
// let sating  = (String(input))
// sum= 0
// // let sum = 0
// let i=0
// // console.log(sating.charAt(1))
// while (i++<degit) {
//     // console.log("i:"+i)
    
//     sum= sum+ Number(sating.charAt(i-1))
//     if (i===degit){
//         alert("Output"+" "+sum)
//     }
// }
//  console.log(sum)

//-------------------------------------------------------------------
let n =+prompt()
// let n= 78910245
let sum=0
count=0
while (n) {

    let remainder = n%10;
    
    n=(n-remainder) /10;
    sum+=remainder;
    count++
}
console.log(count,sum)

