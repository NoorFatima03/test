
 function sum(x,y){
    return x+y;
 }

 
 function sum1(x,y,z){
    return x+y+z;
 }
 function sum2(x,y,z,a){
    return x+y+z+a;
 }
 function minus(x,y){
    return x-y;
 }
 function minus1(x,y,z){
    return x-y-z;
 }
 function multi(x,y){
    return x*y;
 }
 function multi1(x,y,z){
    return x*y*z;
 }
 function multi2(x,y,z,a){
    return x*y*z*a;
 }
 function mod(x,y){
    return x%y;
 }
 function did(x,y){
    return x/y;
 }
 console.log(did(2,5));
 console.log(mod(2,3));
 console.log(multi2(2,3,2,4));
 console.log(multi1(2,3,2));
 console.log(multi(2,3));
 console.log(minus(2,3));
 console.log(sum2(2,3,11,12));
 console.log(sum(2,3,11));
  console.log(sum1(2,3,11));

  function table6(x){
    let sum = 0;
    for(let i =0;i<=10;i++){
         sum = x*i;
         console.log(x+"*"+i+"="+sum)
    }
  }
  table6(6);