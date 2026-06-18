const regBtn = document.getElementById("reg-button")
//console.log(regBtn)
regBtn.addEventListener("click",function (){
//alert("button clicked")
event.preventDefault()
let name=document.getElementById("name").value
let email=document.getElementById("email").value
let password=document.getElementById("password").value
let repassword=document.getElementById("repassword").value
console.log(password)
if (password!=repassword){
    alert("password mismatched")
    return
}
if (password===repassword){
    alert("password succesfull")

}

const user={
    name:name,
    email:email,
    password:password,

}
let users =JSON.parse(localStorage.getItem("user")) || []
users.push(user)
console.log(users)
localStorage.setItem("users",JSON.stringify(users))



})
