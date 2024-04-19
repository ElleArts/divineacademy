let username=document.getElementById('username')
let email=document.getElementById('email')
let password=document.getElementById('password')
let cpassword=document.getElementById('cpassword')
let reg_btn=document.getElementById('btn_reg')
let message=document.getElementById('msg')


reg_btn.addEventListener('click', function(e){
    e.preventDefault()
    if(username.value=="" || email.value==""|| password.value=="" || cpassword.value==""){
        message.innerHTML="Please fill in all  fields"
        message.style.color="white"
    }
    else if(password.value==cpassword.value){
        message.innerHTML="Hi " + username.value  + " login successful"
        message.style.color="white"

        setTimeout(()=>{
            window.location.href="/login"
        },4000)
    }
    else{
        message.innerHTML="Ooops! passwords don't match!!!"
        message.style.color="maroon"

        setTimeout(()=>{
            window.location.reload(true)
        },4000)
        
    }
})