"use client"
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo.jsx";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit text-zinc-500 text-2xl align">UGFORUG</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6 " justify="center">
        <NavbarItem>
          <Link className="text-zinc-700 mr-4" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-zinc-700">
            Customers
          </Link>
        </NavbarItem>

        <NavbarItem isActive>
          <Link href="#" aria-current="page" className="text-zinc-700">
            Customers
          </Link>
        </NavbarItem>


        <NavbarItem>
          <Link className="text-zinc-700" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex ">
          <Link href="#" className="border-solid border-1 border-zinc-600 p-3 rounded-2xl text-black">Join waitlist</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} className="bg-zinc-900 rounded-xl text-white p-6" href="#" variant="flat">
          Get Access
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
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
