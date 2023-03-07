import {ReactNode} from "react";
import NavigationBar from "@/components/organisms/NavigationBar/NavigationBar";

const Layout: React.FC<{
  children: ReactNode
}> = ({children}) => {
  return (
    <div className="container mx-auto bg-white h-full dark:bg-gray-900">
      <NavigationBar/>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout