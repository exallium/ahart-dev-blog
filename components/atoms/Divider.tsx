import React from "react";
import classname from 'classnames';

const Divider: React.FC<{
  className?: string
}> = ({className}) => {
  return <div className={classname('h-[1px] bg-gray-700 dark:bg-gray-300', className)} />
}

export default Divider;