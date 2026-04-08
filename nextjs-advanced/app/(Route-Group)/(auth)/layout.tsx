import { ReactNode } from "react";

export default function AuthLayout ({children}:{children:ReactNode}){
    return <div>
        <h1> Header - Navbar</h1>
        {children}
        <h1> Footer - Section</h1>
    </div>
}