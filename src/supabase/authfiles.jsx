import supaInit from "./supaconfig"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import { useState, useEffect, useRef } from "react"
import { Auth } from "@supabase/auth-ui-react"
import App from "../App"
import { Button, Card, Grid, TextField, Typography } from "@mui/material"

export function SignInWmail(){
  let [isValid, validState] = useState(false)
let [email, setMail] = useState();
let [pwd, setPwd]= useState();

async function albedo(){
const { data, error } = await supaInit.auth.signInWithPassword({
  email: email,
  password: pwd,
}
)
console.log(data);

const {err} = await supaInit.from("cart_updated").insert({id : data.user.id, total_price : "0", cart: [], item_number: "0"})
console.log(err)
if(error){
  console.log(error);
}
console.log(data, err)


}


return(
  <>
  <Grid container justifyContent={"center"}>
  <Card>
  <Typography>The DummyStore!</Typography>
  <Typography>Welcome!</Typography>
  <TextField label="Email Address" autoFocus variant="outlined" onChange={(e)=> {
    setMail(e.target.value);
  }} style={{display: "block"}}/>
  <TextField type="password" label="Password" variant="outlined" onChange={(e)=> {
    setPwd(e.target.value);
  } }/>
  <Button onClick={()=> albedo()}><a href='/home'>Sign In</a></Button>
  <p>Don't have an account? <a href='/'>Sign Up</a></p>
  </Card>
  </Grid>
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
   <p style={{display:"block"}}>Already have an account?
    <a href={'/sign-in'}><u>Sign in here</u></a>
    </p>
    </>
  )
}

export async function SignOut(){
  const { error } = await supaInit.auth.signOut()
}
