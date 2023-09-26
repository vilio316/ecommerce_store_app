import supaInit from "./supaconfig"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import { useState, useEffect } from "react"
import { Auth } from "@supabase/auth-ui-react"
import App from "../App"
import { Button, TextField } from "@mui/material"

function SignInWmail(){
let [email, setMail] = useState();
let [pwd, setPwd]= useState();

async function albedo(){
const { data, error } = await supaInit.auth.signInWithPassword({
  email: email,
  password: pwd
}
)
console.log(data)
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
  <Button onClick={albedo}>Sign In </Button>
  </>
)

}
export async function SignOut(){
  const { error } = await supaInit.auth.signOut()
}
export default function Authorise(){
  return(
    <>
    <SignInWmail/>
    </>
  )
}