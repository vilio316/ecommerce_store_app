import supaInit from "./supaconfig"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import { useState, useEffect, useRef } from "react"
import { Auth } from "@supabase/auth-ui-react"
import App from "../App"
import { Button, Card, Grid, TextField, Typography } from "@mui/material"
import { updateID, deleteID} from "../features/cart/idSlice"
import { useDispatch } from "react-redux"
import { useFindFoodQuery } from "./supaSlice"


export function SignInWmail(){
let [email, setMail] = useState();
const {data} = useFindFoodQuery("Apple")
console.log(data)
const dispatch = useDispatch();
let [id, switchState]= useState("")
let [pwd, setPwd]= useState();

async function albedo(){
const { data, error } = await supaInit.auth.signInWithPassword({
  email: email,
  password: pwd,
}
)
switchState(data.user.id)
console.log(data)
}
dispatch(updateID(id))


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

  <Button onClick={()=> {
    albedo(); 
   
    }}><a>Sign In</a></Button>
  <p>Don't have an account? <a href='/'>Sign Up</a></p>


  <p className="center_text"><a href={'/home'}><u>To Home</u></a></p>

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
  const { error } = await supaInit.auth.signOut();
  dispatch(deleteID())
}
