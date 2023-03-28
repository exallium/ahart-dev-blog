import React, {ReactNode} from "react";
import NavigationBar from "@/components/organisms/NavigationBar";

const Layout: React.FC<{
  children: ReactNode
}> = ({children}) => {
  return (
    <div className="container flex flex-col max-w-screen-lg	mx-auto bg-white h-full dark:bg-gray-900">
      <NavigationBar/>
      <main className="flex">
        {children}
      </main>
    </div>
  )
}

export default Layout