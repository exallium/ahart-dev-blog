import React, {ReactNode} from "react";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from "next/link";

const NavigationLinkItem: React.FC<{
  href: string,
  className?: string,
  children: ReactNode
}> = ({href, className, children}) => {
  return (
    <NavigationMenu.Item className={className}>
      <NavigationMenu.Link asChild>
        <Link href={href}>
          {children}
        </Link>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
}

export default NavigationLinkItem