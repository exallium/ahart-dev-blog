import React, {ReactNode} from "react";
import classname from "classnames";

const H2: React.FC<{
  className?: string,
  children: ReactNode
}> = ({className, children}) => {
  return <h2 className={classname("text-2xl", className)}>{children}</h2>
}

export default H2