function f1(val)
{
document.getElementById("txt").value+=val;
}
function addition(x,y){
    return x+y;
}
function subtract(x,y){
    return x-y;
}
function multi(x,y){
    return x*y;
}
function divi(x,y){
    return x/y;
}
function per(x,y){
    return x%y;
}
function solve()
{
 x = document.getElementById("txt").value;
 ar=x.split(" "); 
if(ar.length==3){
switch(ar[1]){
    case '+':
        ans=addition(parseInt(ar[0]),parseInt(ar[2]));
        break;
    case '-':
        ans=subtract(parseInt(ar[0]),parseInt(ar[2]));
        break;
    case '*':
        ans=multi(parseInt(ar[0]),parseInt(ar[2]));
        break;
    case '/':
        ans=divi(parseInt(ar[0]),parseInt(ar[2]));
        break;
    case '%':
        ans=per(parseInt(ar[0]),parseInt(ar[2]));
        break;
}
document.getElementById("txt").value = ans;
}
else{
    document.getElementById("txt").value = invalid;
}

}
function sqrt(){
    let x = document.getElementById("txt").value;
    var y=Math.sqrt(x)
    if (y === parseInt(y, 10)){
        document.getElementById("txt").value = y;
    }
    else{
        var y=y.toFixed(3);
        document.getElementById("txt").value = y;
    }
       return
}

function abs()
{
let x = document.getElementById("txt").value;
document.getElementById("txt").value =Math.abs(x) ;
}
function clr()
{
document.getElementById("txt").value = "";
}

function palindrome(ab){
     r=true;
    for(let i=0, j=ab.length-1;i<=j;i++,j--){
      if(ab[i] !== ab[j]){
          r=false;
          break;
      }
    }
    return r;
}
function stringvalidation1(){
    ab=document.getElementById("t1").value;
    x=palindrome(ab);
    alert(x);
    return x;
}
function sortString(a){
    return a.split("").sort().join("");
}
function anagram(a,b){
    c=sortString(a);
    d=sortString(b);
    if(c == d){
        return true;
    }
    else{
        return false;
    }
}
function stringvalidation2(){
    a=document.getElementById("t2").value;
    b=document.getElementById("t3").value;
    x=anagram(a,b);
    alert(x);
    return x;
}
function namevalid(name){

    if(name == ""){
    alert("enter the name");
    return false;
    }
     f=name[0]
    if(Number(f)){
    alert("start with letter");
    return false;
    }
    return true;
    }
    
    function phonevalid(ph){
    
    if(ph == ""){
    alert("enter the phone number");
    return false;
    }
    
    if(ph.length!=10){
    alert("enter valid number");
    return false;
    }
    if(!Number(ph)){
    alert("enter proper number");
    return false;
    }
    return true;
    }
    function mailvalid(mail){
    
    if(mail == ""){
    alert("enter the mail");
    return false;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
     {
     
    return true;
     }
     else{
    alert("You have entered an invalid email address!");
    return false;
    }
    
    }
    
    function validation(){
    var name=document.getElementById("name").value;
    var ph=document.getElementById("phn").value;
    var mail=document.getElementById("mail").value; 
    checkname= namevalid(name);
    checkphone=phonevalid(ph);
    checkmail=mailvalid(mail);
    if(checkname && checkphone && checkmail){
        alert("success");
        return true;
    }
    }

    function surive(){
        a=Math.random()*1000;
        b=Math.random()*1000;
        a=Math.floor(a);
        b=Math.floor(b);
        document.getElementById("z1").value=a;
        document.getElementById("z2").value=b;
        x=parseInt(a)%3;
        y=parseInt(b)%3;
        if(x==0&&y==1||x==1&&y==0){
            ans="Human Survives";
        }
        else if(x==1&&y==2 || x==2&&y==1){
            ans="CoakRoach Survives";
        }
        else if(x==2&&y==0 || x==0&&y==2){
            ans="Human Dies";
        }
        else if(x==j){
            ans="Tie";
        }
        
        document.getElementById("s1").value=ans;
        return x;
    }
    