import supaInit from "./supaconfig"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import { useState, useEffect, useRef } from "react"
import { Auth } from "@supabase/auth-ui-react"
import App from "../App"
import { Button, Card, Grid, TextField, Typography } from "@mui/material"

export function SignInWmail(){
let [email, setMail] = useState();
let [pwd, setPwd]= useState();
async function albedo(){
const { data, error } = await supaInit.auth.signInWithPassword({
  email: email,
  password: pwd,
}
)
console.log(data)
}

async function insertUser(){
const {data, err} = await supaInit.from("cart_updated").insert(
  { 
    total_price : "0", 
    cart: [], 
    item_number: "0",
  }
  )
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
    setPwd(e.target.value)
  } }/>
  <Button onClick={async()=> {albedo()}}><a href={'/home'}>Sign In</a></Button>
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
    <Grid container justifyContent={"center"} alignContent={"center"}>
      <Card>
  <Typography>The DummyStore!</Typography>
  <Typography>Welcome!</Typography>     
          <TextField label="Email Address" autoFocus variant="outlined" onChange={(e)=> {
      setMail(e.target.value);
    }} style={{display: "block"}}/>
    <TextField type="password" label="Password" variant="outlined" onChange={(e)=> {
      setPwd(e.target.value);
    } }/>
    <Button onClick={()=> {creator(); insertUser()}}>Sign Up!</Button>
   <p style={{display:"block"}}>Already have an account?
    </p>
    <p className="center_text"><a href={'/sign-in'}><u>Sign in here</u></a></p>
    </Card>
    </Grid>
    </>
  )
}

export async function signOut(){
  const { error } = await supaInit.auth.signOut()
}
