
//every single layout is going to accept children as a prop and children is of the type React.ReactNode
import React from "react";

const Layout = ({children}:{children : React.ReactNode}) => {
    return (
        <main className="min-h-screen text-gray-400">
            <div className="container py-10">
                {children}
            </div>
        </main>
    )
}

export default Layout;