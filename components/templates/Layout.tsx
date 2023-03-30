import React, {ReactNode} from "react";
import NavigationBar from "@/components/organisms/NavigationBar";
import Footer from "@/components/organisms/Footer";
import Divider from "@/components/atoms/Divider";

const Layout: React.FC<{
  children: ReactNode
}> = ({children}) => {
  return (
    <div className="container flex flex-col max-w-screen-lg	mx-auto h-full px-4">
      <NavigationBar/>
      <Divider className='my-4'/>
      <main className="flex">
        {children}
      </main>
      <Divider className="my-4"/>
      <Footer/>
    </div>
  )
}

export default Layout