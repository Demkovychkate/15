//Task 1
 let res1=document.querySelector('.res1');
 let btn1=document.querySelector('.btn1');

 let firstmass = ['Ann','Kate',10,15,98,35,85,'Sofi'];
 function FirstTask(){
    let sum= 0;
    let AVG=0;

   for(i=0; i < firstmass.length; i++){
    if (typeof firstmass[i] === 'number' ){   
     sum +=firstmass[i];    
     AVG ++;   
    }
    let AVG1 = sum/AVG;
    res1.innerHTML = AVG1;
   }
   } 

 btn1.onclick = FirstTask; 

//Task 2
let res2=document.querySelector('.res2');
let btn2=document.querySelector('.btn2');

function doMath(x, znak, y) {
x = +prompt("Введіть перше число");
y = +prompt("Введіть друге число");
znak = prompt("Виберіть операцію +, -, *, /, %, ^ ");
  switch (znak) {
      case "+":
          res2.innerHTML = x + y;
          break;
      case "-":
        res2.innerHTML = x - y;
          break;
      case "*":
        res2.innerHTML= x * y;
          break;
      case "/":
        res2.innerHTML = x / y;
          break;  
      case "%":
        res2.innerHTML = x % y;
          break;
      case "^":
        res2.innerHTML = Math.pow(x,y);
          break;    
  }

  return res2;
}
btn2.onclick=doMath;