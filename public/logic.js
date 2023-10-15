let regform = document.querySelector("#regform");
let nameinp = document.getElementById("name");
let emailinp = document.getElementById("email");
let passwordinp = document.getElementById("password");
let emailval = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let nameval = /^[A-Za-z\s]{1,50}$/;
let createregbtn=document.getElementById("regcreatebtn")
let count = 0;
let errorele=document.querySelector('.error')


function redirecttologin()
{
    document.location.href="/login"
}



nameinp.addEventListener('change', (event) => {
    
    let ismatch = nameval.test(event.target.value);
    if (ismatch) {
        
        

        count++;
    } else {
        
        count--;
    }
});

emailinp.addEventListener('change', (event) => {
    let isMatch = emailval.test(event.target.value);
    if (isMatch) {
    
        count++;
    } else {
        
        count--;
    }
});

passwordinp.addEventListener('change', (event) => {
    const passwordValue = event.target.value;
    if (passwordValue.length > 8) {
       
        count++;
    } else {
        
        count--;
    }
});

regform.addEventListener('submit', (e) => {
    if(count!=3)
    {
      e.preventDefault();
      errorele.innerText="Oops,something went wrong!!";
       errorele.style.color="red";
       errorele.style.fontSize = "18px"
       createregbtn.style.animation = "slideIn 0.2s  linear 2";
       
    }
});
createregbtn.addEventListener('click',(e)=>
{  if(count!=3){
    createregbtn.style.animation = "slideIn 0.2s  linear 2";
}
})

