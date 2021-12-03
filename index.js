
let calc={

    'sum_apply':function(a,b,c){
        let result=a +b +c;
        console.log(result);
        
        

    },

    'mul_apply':function(a,b,c){
        let result=a * b  *c;
        console.log(result);
        
        

    },

    'sum':function(){
        let  result=this.num1+this.num2;
        console.log(result);
    },
    'mul':function(){
        let  result=this.num1*this.num2;
        console.log(result);
    },
    'div':function(){
        let  result=this.num1/this.num2;
        console.log(result);
    },
    'diff':function(){
        let  result=this.num1-this.num2;
        console.log(result);
    },
    'mod':function(){
        let  result=this.num1%this.num2;
        console.log(result);
    }
};
//THIS VAR SET IS FOR  USE CALL FUNCTIONS
var set1={
    'num1':25,

    'num2':15,
};

//THIS VAR SET IS FOR  USE APPLY  FUNCTIONS
var set2={
     array:[20,30,40],
};

//THIS VAR SET IS FOR  USE BIND FUNCTIONS
var set3={
    'num1':65,

    'num2':35,


}

//USE OF CALL 
console.log("=====================THIS ALL ARE THE FUNCTIONS USING CALL==================== ");
console.log("sum of 25 and 15");
calc.sum.call(set1);
console.log("multipy of 25 and 15");
calc.mul.call(set1);
console.log("substraction of 25 and 15");
calc.diff.call(set1);
console.log("module of 25 and 15");
calc.mod.call(set1);


//USE OF APPLY
console.log("=====================THIS ALL ARE THE FUNCTIONS APPLY CALL==================== ");
console.log("sum of 20 and 30 and 40");
calc.sum_apply.apply(set2,set2.array);
console.log("multiply of 20 and 30 and 40");
calc.mul_apply.apply(set2,set2.array);



//USE OF BIND
console.log("=====================THIS ALL ARE THE FUNCTIONS BIND CALL==================== ");
console.log("sum of 65 and 35 using bind");
let new_sum=calc.sum.bind(set3);
new_sum();
console.log("multiply of 65 and 35 using bind");
let new_mul=calc.mul.bind(set3);
new_mul();
console.log("substraction of 65 and 35 using bind");
let new_diff=calc.diff.bind(set3);
new_diff();
console.log("mod of 65 and 35 using bind");
let new_mod=calc.mod.bind(set3);
new_mod();