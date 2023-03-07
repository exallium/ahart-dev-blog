import React from "react";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import NavigationLogo from "@/components/molecules/NavigationLogo/NavigationLogo";

const NavigationBar: React.FC = () => {
  return (
    <NavigationMenu.Root className='relative flex w-full'>
      <NavigationMenu.List>
        <NavigationLogo />
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}

export default NavigationBar