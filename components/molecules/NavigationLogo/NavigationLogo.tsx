import React from "react";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from "next/link";

const NavigationLogo: React.FC = () => {
  return (
    <NavigationMenu.Item>
      <NavigationMenu.Link asChild>
        <Link href='/'>
          AHART.DEV
        </Link>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
}

export default NavigationLogo