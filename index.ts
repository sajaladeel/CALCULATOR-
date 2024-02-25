import inquirer from "inquirer";

const answers :{
    numberOne :number,
    numberTwo :number,
    operator:string
}=await inquirer.prompt([
    {
        type:"number",
        name:"numberOne",
        message: "ENTER YOUR FIRST NUMBER:"
    },
    {
        type:"number",
        name:"numberTwo",
        message: "ENTER YOUR SECOND NUMBER:"
    },
    {
        type:"list",
        name:"operator",
        choices:["add","substract","multiply","divide"],
        message: "SELECT OPERATOR:"
    }
]);

const{numberOne,numberTwo,operator}=answers;
if(numberOne && numberTwo && operator){
    let result :number=0 ;
    if(operator === "add"){
        result = numberOne+numberTwo;
}

else    if(operator === "substract"){
     result = numberOne-numberTwo;
 }
 
 if(operator === "multiply"){
     result  = numberOne*numberTwo;
   } 
   
   if(operator === "divide"){
             result  = numberOne/numberTwo;
   }

   
   console.log('YOUR ANSWER :',result)

}else{
    console.log('KINDLY ENTER CORRECT INPUT')
}