import {ReactNode} from "react";
import NavigationBar from "@/components/organisms/NavigationBar/NavigationBar";

const Layout: React.FC<{
  children: ReactNode
}> = ({children}) => {
  return (
    <div className="container mx-auto">
      <NavigationBar/>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout