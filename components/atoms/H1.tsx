import React, {ReactNode} from "react";
import classname from "classnames";

const H1: React.FC<{
  className?: string,
  children: ReactNode
}> = ({className, children}) => {
  return <h1 className={classname("text-4xl", className)}>{children}</h1>
}

export default H1