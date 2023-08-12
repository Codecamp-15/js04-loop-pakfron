// program-1 : input - User-1
// let num = prompt("Enter your magic number")//=>null,string:"","  ","sdklfjskldf"."2324"
// let isNull = ansnumber === null;
// let isEmpty = ansnumber.trim() === "";
// let isNan = isNaN(ansnumber);
// let outOfRange = Number(ansnumber)<1||Number(ansnumber)>99
// let inInRange = Number(ansnumber)>=1&&Number(ansnumber)<=99
// let isValid = ansnumber === null || ansnumber.trim() === "" || isNaN(ansnumber);
// if (isValid) {
//     alert("Invalid Input");

// } else if (Number(ansnumber) < 1 || Number(ansnumber) > 99) {
//     alert('Invalid Range')
// }else if (inInRange){
//     alert('Try to guess number')
// }

//v2: รับ input ได้เรื่อยๆจนกว่าจะพิมพ์ถูก / แต่ให้กด ESC เพื่อจบโปรแกรมได้

let ansNumber = '';
let isEmpty;
let isNan;
let outOfRange;

do {
    ansNumber = prompt('Enter your magic number') || ''
    // if(ansNumber !==null){
    //     isEmpty = ansNumber.trim()==='';
    //     isNan= isNaN(ansNumber);

    // }
    isEmpty = ansNumber.trim() === '';//null||''
    isNan = isNaN(ansNumber)
    outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99
    if (isEmpty || isNan) {
        alert('Invalid Range, try1-99')
    } else if (outOfRange) {
        alert('Invalid Range, Try1-99')
    };
} while (isEmpty || isNan)

//Program 2 : Guess
//ทายซ้ำ 
// hint OutofRange
// Hint invalid Range
// ทายได้ไม่เกิน ห้า ครั้ง


do {
    guessNumber = prompt("Enter") || ''
    isEmpty = guessNumber.trim() === '';//null||''
    isNan = isNaN(guessNumber)
    outOfRange = Number(guessNumber) < 1 || Number(guessNumber) > 99
    if (isEmpty || isNan) {
        alert('Invalid Range, try1-99')
    } else if (outOfRange) {
        alert('Invalid Range, Try1-99')
    } else if (+guessNumber > +ansNumber) {
        alert('Too High');
    } else if (+guessNumber < +ansNumber) {
        alert('Too Low')
    } else if (+guessNumber === +ansNumber) {
        alert('Correct')
    }
}
while (+guessNumber != +ansNumber)

