let username=document.getElementById('username')
let password=document.getElementById('password')
let log_btn=document.getElementById('btn_log')
let message=document.getElementById('msg')


log_btn.addEventListener('click', function(e){
    e.preventDefault()
    if(username.value=="" || password.value==""){
        message.innerHTML="Please fill in all  fields"
        message.style.color="white"
    }
    

    else{
        message.innerHTML="Login successful!"
        message.style.color="green"

        setTimeout(()=>{
            window.location.href="/services"
        },4000)
        
    }
})