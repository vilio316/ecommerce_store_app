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
    redirectTo: "https://barrysdummystore.netlify.app/home"
  }
}
)
if(error){
  console.log(error)
}
else{
 console.log(targeter.current)
}
}
return(
  <>
  <TextField label="Email Address" autoFocus variant="outlined" onChange={(e)=> {
    setMail(e.target.value);
    console.log(email)
  }} style={{display: "block"}}/>
  <TextField label="Password" variant="outlined" onChange={(e)=> {
    setPwd(e.target.value);
    console.log(pwd)
  } }/>
  <Button onClick={albedo}><a ref={targeter} href="">Sign In</a> </Button>
  </>
)

}
export async function SignOut(){
  const { error } = await supaInit.auth.signOut()
}
