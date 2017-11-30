"use strict"
function userInfo(){
	let info = prompt();
	return info;
}
//let trial = userInfo();
//console.log(trial);

function happyNumbers(userInput){
	let input = userInput;
	let changeArray = input.split("");
	let answer = [];
	let exponent1;
	//let changeBack = changeArray.toString("");
	//let change = Number(input);
	for(let i = 0; i < input.length; i++){
        exponent1 = changeArray[i] * changeArray[i];
       answer[i] = exponent1;

    }
	return answer;
}

function happNumbersPart2(happyNumb){
	 let secondCall = happyNumbers;
	 let secondAnswer = []
	 for(let i = 0; i < secondCall.length; i++){
	   let adding = happyNumb[i] + happyNumb[i + 1]
	   secondAnswer[i] = adding
    }
	 return secondAnswer;

}

function happyNumbersPart3(happNumbersPart2){
	let thirdCall = 
}
let userInput = userInfo();
let happyNumb = happyNumbers(userInput);
let happynumb2 = happNumbersPart2(happyNumb);
let happynumb3 = happyNumbersPart3(happyNumb);
console.log(trial);

