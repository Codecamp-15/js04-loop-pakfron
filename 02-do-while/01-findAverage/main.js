output=0
count=0
aver = 0
do {
    ansNumber = prompt('Enter your magic number') || ''
    // if(ansNumber !==null){
    //     isEmpty = ansNumber.trim()==='';
    //     isNan= isNaN(ansNumber);

    // }
    num = Number(ansNumber)
    isEmpty = ansNumber.trim() === '';//null||''
    isNan = isNaN(ansNumber)
    // o
 
    
    output=output+num
    
    if(isEmpty || isNan){
        aver=output/count
        console.log("Sum "+output)
        console.log("average "+aver)
    }else {
        count++
        // console.log("ever "+ever)
        
    }
    // console.log(ever)
    
    


} while (ansNumber!=="" || ansNumber.trim()!=="")

//Program 2 : Guess
//ทายซ้ำ 
// hint OutofRange
// Hint invalid Range
// ทายได้ไม่เกิน ห้า ครั้ง


