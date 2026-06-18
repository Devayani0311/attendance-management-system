const lgnbtn=document.getElementById("lgn-btn")
//console.log(1gbtn)
lgnbtn.addEventListener("click",function(){
    event.preventDefault()
    const email= document.getElementById("email").value
     const password= document.getElementById("password").value
console.log(password)
if (email==="" || password===""){
    alert("please fill all the fields")
    
}
})