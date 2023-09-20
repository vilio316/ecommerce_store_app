import supaInit from "./supaconfig"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import { useState, useEffect } from "react"
import { Auth } from "@supabase/auth-ui-react"
export default function Runner() {
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
      return (<div>Logged in!</div>)
    }
  }