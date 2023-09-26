import supaInit from "./supaconfig"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import { useState, useEffect, useRef } from "react"
import { Auth } from "@supabase/auth-ui-react"
import App from "../App"
import { Button, TextField } from "@mui/material"

export function SignInWmail(){
let [email, setMail] = useState();
let [pwd, setPwd]= useState();
let targeter = useRef();

async function albedo(){
const { data, error } = await supaInit.auth.signInWithPassword({
  email: email,
  password: pwd,
  options:{
    emailRedirectTo: "https://barrysdummystore.netlify.app/home"
  }
}
)
if(error){
  console.log(error)
}

}


return(
  <>
  <TextField label="Email Address" autoFocus variant="outlined" onChange={(e)=> {
    setMail(e.target.value);
  }} style={{display: "block"}}/>
  <TextField type="password" label="Password" variant="outlined" onChange={(e)=> {
    setPwd(e.target.value);
  } }/>
  <Button onClick={albedo}>Sign In</Button>
  <p>Don't have an account? <a href={'/sign-up'}>Sign Up</a></p>
  </>
)
}
export function SignUp(){
  let [email, setMail] = useState();
  let [pwd, setPwd]= useState();

  const creator = async()=>{
    const { data, error } = await supaInit.auth.signUp({
  email: email,
  password: pwd,
})
  }

  return(
    <>
    <TextField label="Email Address" autoFocus variant="outlined" onChange={(e)=> {
      setMail(e.target.value);
    }} style={{display: "block"}}/>
    <TextField type="password" label="Password" variant="outlined" onChange={(e)=> {
      setPwd(e.target.value);
    } }/>
    <Button onClick={creator}>Sign Up!</Button>
    <a href={'/'}>Back To Sign In</a>
    </>
  )
}

export async function SignOut(){
  const { error } = await supaInit.auth.signOut()
}
