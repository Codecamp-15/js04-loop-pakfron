

// for (let index = 2; index <=100 ; index++) {
    
//     if(index===2||index===3||index===5||index===7){
//         console.log(index)
//     }
    
//     if(index%2!==0&&index%3!==0&&index%5!==0&&index%7!==0){
//         console.log(index)
//     }
// }

// for(let i=1;i<=100;i++){
    
// }

// for (let i = 1; i <= 100; i++) {
//     let count = 0;
//     for (let j = 1; j <= 100; j++) {
//       if (i % j === 0) {
//         count++;
        
//       }
//     }
//     if (i !== 1 && count <= 2) console.log(i);}





 
   
for (let n=2;n<=1000000;n++){
  let isPrime = true;

    for(let divider=2;divider<n;divider++)
    {
      if (n%divider==0) {
        isPrime = false;
        break;
      }
      
    }
    if (isPrime)console.log(n);
  }
    // if(isPrime)console.log(`number ${n} is prime number`);
    // else console.log(`number${n} not prime number`);