import React, { useState, useEffect } from 'react'
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import useLocalStorage from 'react-use-localstorage';
import {Tooltip} from "@nextui-org/react";

import BrandHover from './BrandHover';

const NavbarComp = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "about",
    "skills",
    "projects",
    "experience"
  ];

  const colors = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "foreground",
  ];

  const [currTheme, setcurrTheme] = useLocalStorage('color-theme', 'dark')

  useEffect(() => {
    document.documentElement.setAttribute('color-theme', currTheme);
  }, [currTheme]);

  const handleTheme = () => {
    if(currTheme==='dark'){
      setcurrTheme('light')
      window.location.reload()
    }
    else{
      setcurrTheme('dark')
      window.location.reload()
    }
  }

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
      <Button color="foreground" href="#" className='ml-20' onClick={handleTheme}>
            <span className="material-symbols-outlined">
              {currTheme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </Button>
          <Tooltip className="capitalize p-5" content={<BrandHover/>} color="default">
        <NavbarBrand>
          <p className="text-xl align-center portfolio-name cursor-pointer">Aditya Godara</p>
        </NavbarBrand>
        </Tooltip>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Tooltip className="capitalize p-5" content={<BrandHover/>} color="default">
        <NavbarBrand>
          <p className="text-xl text-inherit ml-5 portfolio-name cursor-pointer">Aditya Godara</p>
        </NavbarBrand>
        </Tooltip>
        <NavbarItem className='ml-20 mr-10'>
          <Link color={props.page==='about' ? "success" : "foreground"} href="/">
            About
          </Link>
        </NavbarItem>
        <NavbarItem className='mr-10'>
          <Link href="/skills " color={props.page==='skills' ? "success" : "foreground"}>
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem className='mr-10'>
          <Link color={props.page==='projects' ? "success" : "foreground"} href="/projects">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color={props.page==='experience' ? "success" : "foreground"} href="/experience">
            Experience
          </Link>
        </NavbarItem>

        <NavbarItem>
        <Button color="foreground" href="#" className='ml-20' onClick={handleTheme}>
            <span className="material-symbols-outlined">
              {currTheme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                item===props.page ? "success" : "foreground"
              }
              href={`/${item}`}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavbarComp
