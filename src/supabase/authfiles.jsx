import supaInit from "./supaconfig"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import { useState, useEffect, useRef } from "react"
import { Auth } from "@supabase/auth-ui-react"
import App from "../App"
import { Button, Card, Grid, TextField, Typography } from "@mui/material"
import { updateID, deleteID} from "../features/cart/idSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { refreshState } from "../features/cart/cartSlice"

export function SignInWmail(){
let [email, setMail] = useState('');
const dispatch = useDispatch();
let [pwd, setPwd]= useState();
let navigate = useNavigate();
let error_txt = useRef("")

async function albedo(){
const { data, error } = await supaInit.auth.signInWithPassword({
  email: email,
  password: pwd,
}
)
if(data.user){
error_txt.current.innerHTML = ""
console.log(data)
dispatch(updateID(data.user.id))
navigate('/home')
}
else{
  error_txt.current.innerHTML = "Incorrect Email or Password"
}
}

return(
  <>
  <Grid container justifyContent={"center"} alignContent={"center"}>
  <Card>
  <Typography>The DummyStore!</Typography>
  <Typography>Welcome!</Typography>         
  <TextField label="Email Address" autoFocus variant="outlined"  style={{display: "block"}} onChange={(e)=> {
    setMail(e.target.value)
  }}/>
  <TextField type="password" label="Password" variant="outlined" onChange={(e)=> {
    setPwd(e.target.value)
  } }/>

  <Button onClick={()=> {albedo()}}><a>Sign In</a></Button>
  <p ref={error_txt} style={{color: "red", fontSize:"1.5rem", fontWeight:"bold"}}></p>
  <p>Don't have an account? <a href='/sign-up'>Sign Up</a></p>
  </Card>
  </Grid>
  </>
)
}


export function SignUp(){
  let [email, setMail] = useState();
  let [pwd, setPwd]= useState();
  let navigate = useNavigate();

  const creator = async()=>{
    const { data, error } = await supaInit.auth.signUp({
  email: email,
  password: pwd,
})
  }

  async function insertUser(){
    const {data, err} = await supaInit.from("cart_updated").insert(
      { 
        total_price : "0", 
        cart: [], 
        item_number: "0",
      }
      )
      navigate('/')
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
    <Button onClick={()=> {
      creator(); 
      insertUser();
      }}>Sign Up!</Button>
   <p style={{display:"block", textAlign:"center"}}>Already have an account?
    </p>
    <p className="center_text"><a href={'/sign-in'}><u>Sign in here</u></a></p>
    </Card>
    </Grid>
    </>
  )
}
 export async function signOut(){
  const { data , error } = await supaInit.auth.signOut()
}
