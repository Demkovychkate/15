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


