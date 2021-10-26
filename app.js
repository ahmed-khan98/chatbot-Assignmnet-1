function convert(){
  let value = document.getElementById("value")
  let plus = value.value * 175;
  
  let  dol = document.getElementById("dollar");
  dol.innerText = value.value;
  let  rupee= document.getElementById("rupee")
  rupee.innerText = plus;
  value.value = "";
}

let plus=()=>{
  let array=[];
  let array1=[];
  let a=1 ;
  let b=10
  let store;
  let ans = document.getElementById("ans")
  for(i=0; i<9; i++)
  {
    array[i] = +document.getElementById(a).value
    a++
  }
  for(j=0; j<9; j++)
  {
    array1[j] = +document.getElementById(b).value
    b++
  }
  let c=19;
  let storem=[];
  for(i=0; i<9;i++){
     storem[i]=array[i]+array1[i];
     console.log(storem[i])
     document.getElementById(c).value=storem[i]
     c++
  }
} 
let sub=()=>{
  let array=[];
  let array1=[];
  let a=1 ;
  let b=10
  let store;
  let ans = document.getElementById("ans")
  for(i=0; i<9; i++)
  {
    array[i] = +document.getElementById(a).value
    a++
  }
  for(j=0; j<9; j++)
  {
    array1[j] = +document.getElementById(b).value
    b++
  }
  let c=19;
  let storem=[];
  for(i=0; i<9;i++){
     storem[i]=array[i]-array1[i];
     console.log(storem[i])
     document.getElementById(c).value=storem[i]
     c++
  }
} 

let mul=()=>{
  let array=[];
  let array1=[];
  let a=1 ;
  let b=10
  let store;
  let ans = document.getElementById("ans")
  for(i=0; i<9; i++)
  {
    array[i] = +document.getElementById(a).value
    a++
  }
  for(j=0; j<9; j++)
  {
    array1[j] = +document.getElementById(b).value
    b++
  }
  let c=19;
  let storem=[];
  for(i=0; i<9;i++){
     storem[i]=array[i]*array1[i];
     console.log(storem[i])
     document.getElementById(c).value=storem[i]
     c++
  }
} 
let divd=()=>{
  let array=[];
  let array1=[];
  let a=1 ;
  let b=10
  let store;
  let ans = document.getElementById("ans")
  for(i=0; i<9; i++)
  {
    array[i] = +document.getElementById(a).value
    a++
  }
  for(j=0; j<9; j++)
  {
    array1[j] = +document.getElementById(b).value
    b++
  }
  let c=19;
  let storem=[];
  for(i=0; i<9;i++){
     storem[i]=array[i]/array1[i];
     console.log(storem[i])
     document.getElementById(c).value=storem[i]
     c++
  }
} 