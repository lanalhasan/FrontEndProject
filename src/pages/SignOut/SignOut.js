import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../Contexts/AuthContext"
import SignIn from "../SignIn/SignIn"



const SignOut =()=>{
    const {signOut} = useContext(AuthContext)
    const nav =useNavigate()
    useEffect(()=>{
        signOut()
        nav('/signin')
    },[])
    return(
        <></>
        )
}
export default SignOut