// - หาผลรวมตัวเลขทุกตัว
// - หาผลรวมเฉพาะเลขคู่ และผลรวมเฉพาะเลขคี่
// - หาผลรวมของเลขที่หาร 2 ลงตัว ยกกำลังสอง (2^2 + 4^2 + ...) ลบด้วยผลรวมของเลขที่หาร 3 ลงตัว ยกกำลัง 2 (3^2 + 6^2 + ...)


let sum_all = 0
let sum_even = 0
let sum_odd =0
let powertwo = 0
let sum_powertwo=0
let powerthree = 0
let sum_powerthree=0
let output_power=0

for ( index = 1; index <= 100; index++) {
    sum_all+=index
  
    
    if(index%2==1){
        sum_odd+=index
    }

    if(index%2==0){
       
        sum_even+=index
       
    }
   
    if(index%2==0){
        powertwo=index
         
        sum_powertwo+= powertwo**2
      
    }
    if(index%3==0){
        powerthree=index
       
        sum_powerthree+= powerthree**2
   
    }
    output_power=sum_powertwo-sum_powerthree
}




console.log("Sum_all :"+sum_all)
console.log("Odd Number :" + sum_odd)
console.log("Event Number :"+sum_even)
console.log("Power :"+output_power)
