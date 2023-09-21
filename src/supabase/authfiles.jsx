import supaInit from "./supaconfig"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import { useState, useEffect } from "react"
import { Auth } from "@supabase/auth-ui-react"
import App from "../App"

export function SignInUp() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supaInit.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supaInit.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (<Auth supabaseClient={supaInit} appearance={{ theme: ThemeSupa }} />)
  }
  else {
    console.log("fuck")
  }
}

export async function SignOut(){
  const { error } = await supaInit.auth.signOut()
}
export default function Authorise(){
  return(
    <>
    <SignInUp/>
    </>
  )
}