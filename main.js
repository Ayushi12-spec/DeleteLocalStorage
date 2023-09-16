function addUser(event){
    event.preventDefault()
    let email=document.getElementById("exampleInputEmail1").value
    let phone=document.getElementById("exampleInputPassword1").value
    let obj={
        email,
        phone
    }
    let strObj=JSON.stringify(obj)
    localStorage.setItem("userDetail",strObj)
    let a=localStorage.getItem("userDetail")
    console.log(a)
let parentElement=document.getElementById("item")
let childElement=document.createElement("li") 
childElement.textContent=obj.email +"---"+obj.phone
 
let deleteButton=document.createElement("button")
deleteButton.appendChild(document.createTextNode("delete"))
let editButton=document.createElement("button")
editButton.appendChild(document.createTextNode("edit"))
childElement.appendChild(editButton)
parentElement.appendChild(childElement)
childElement.appendChild(deleteButton)
deleteButton.onclick=()=>{
    parentElement.removeChild(childElement)
    localStorage.removeItem("userDetail")
}
editButton.onclick=()=>{
    parentElement.removeChild(childElement)
    localStorage.removeItem("userDetail")
    document.getElementById("exampleInputEmail1").value=obj.email
    document.getElementById("exampleInputPassword1").value=obj.phone
}


}