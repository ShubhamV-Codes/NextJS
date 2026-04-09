"use client";

import {SessionProvider, signOut, useSession, signIn} from "next-auth/react";

export default function Home() {
  return (
   <SessionProvider>
    <Auth />
   </SessionProvider>
  );
}

function Auth(){
  const session = useSession();

  return(
    <div>
      {session.status==="authenticated" && <button onClick = {()=> signOut()}>Sign Out</button> }
      {session.status==="unauthenticated" && <button onClick = {()=> signIn()}>Sign In</button> }
    </div>
  )
}