import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import users from "../../DataBase/DataBase"


function Login(){
    const [input , setInput] = useState({
        email : "",
        password : ""
    })
    const navigate = useNavigate()

    // useEffect(()=>{
    //     const currentUser = localStorage.getItem("currentUser")
    //     if(currentUser){
    //         navigate('/products')
    //     }
    // },[])

    const handleClick = () => {
        if(input.email === ""){
            alert("Email ID ako Lowda")
            return
        }
        if(input.password === ""){
            alert("Password ako Lowda")
            return
        }
        for(let user of users){
            if(user.email === input.email && user.password === input.password){
                localStorage.setItem("currentUser" , input.email)
                navigate('/products' , {state : input.email})
                break
            }
        }
    }
    return(
        <div>
            <h1>SHOPPING LOGIN PAGE</h1>
            <input value={input.email} onChange={event=>setInput({...input , email : event.target.value})}></input><br/><br/>
            <input value={input.password} onChange={event=>setInput({...input , password : event.target.value})}></input><br/><br/>
            <button onClick={handleClick}>LOGIN</button>
        </div>
    )
}

export default Login