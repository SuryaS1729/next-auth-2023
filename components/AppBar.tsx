"use client"
import { useRouter } from "next/navigation"
import { signIn, signOut, useSession } from "next-auth/react"

export const AppBar= ()=>{

    const session = useSession()
    return <div>
        <button onClick={()=>{
            signIn()
        }}>signin</button>

<button onClick={()=>{
            signOut()
        }}>Logout</button>

        {JSON.stringify(session)}
    </div>
}