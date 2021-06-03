import React from "react";
import { useAuth } from "../context/auth.tsx";
import { Button, Navbar, Nav } from "react-bootstrap";

export default function NavbarCustom() {
  const { signOut } = useAuth();
  return (
    <Navbar
      className="justify-content-between"
      style={{
        backgroundColor: "rgb(0, 0, 0)",
        paddingRight: "10px",
      }}
    >
      <Nav></Nav>

      <Button
        variant="primary"
        onClick={() => signOut()}
        style={{ margin: "10px" }}
      >
        Sign Out
      </Button>
    </Navbar>
  );
}
