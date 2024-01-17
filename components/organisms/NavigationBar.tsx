import React from "react";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import NavigationLinkItem from "@/components/molecules/NavigationLinkItem";

const NavigationBar: React.FC = () => {
  return (
    <NavigationMenu.Root className='relative flex w-full h-12 items-center'>
      <NavigationMenu.List className='flex p-1'>
        <NavigationLinkItem href='/'>
          AHART.DEV
        </NavigationLinkItem>
      </NavigationMenu.List>
      <div className="flex-grow" />
      <NavigationMenu.List className='flex p-1'>
        <NavigationLinkItem href='/' className='mr-4'>
          BLOG
        </NavigationLinkItem>
        <NavigationLinkItem href='/about' className='mr-4'>
          ABOUT
        </NavigationLinkItem>
        <NavigationLinkItem href='/now'>
          NOW
        </NavigationLinkItem>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}

export default NavigationBar