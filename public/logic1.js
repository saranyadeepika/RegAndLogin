// Check if the script is loaded

let loginform = document.getElementById("loginform");
let emailinplogin = document.getElementById("loginmail");
let passwordinplogin = document.getElementById("loginpass");
let sublogbtn=document.getElementById('sublogbtn')
let errorele=document.querySelector('.error')
let regbtncreate=document.getElementById('createregbtn')
let count1=0;
function redirecttocreate()
{
    document.location.href="/register"
}

emailinplogin.addEventListener('change', (event) => {
   if(emailinplogin.value.length>0)
   {
    count1++
   }
});

passwordinplogin.addEventListener('change', (event) => {
    if(passwordinplogin.value.length>0)
    {
        count1++
    }
});
loginform.addEventListener('submit', (e) => {
   
    if(count1!=2)
    {
        e.preventDefault();
      errorele.innerText="Oops,something went wrong!!";
       errorele.style.color="red";
       errorele.style.fontSize = "18px"
       sublogbtn.style.animation = "slideIn 0.2s  linear 2";
    
    }
    
});




