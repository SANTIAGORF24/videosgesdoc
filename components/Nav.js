import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";

export function Nav() {
  return (
    <Navbar shouldHideOnScroll className="bg-transparent ">
      <NavbarBrand>
        <AcmeLogo />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-white" href="#basicos">
            Capacitacion
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#">
            Errores
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="https://gesdoc.mindeporte.gov.co/SGD_WEB/main/login.jsp?gMessage=INVALID_SESSION"
            variant="flat"
          >
            GESDOC
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
