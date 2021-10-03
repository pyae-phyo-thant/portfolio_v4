import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import { useUser } from "@auth0/nextjs-auth0";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => {
  const { user, error, isLoading } = useUser();

  return (
    <Container>
      <Div1>
        <Link href="/">
          <a style={{ display: "flex", alignItems: "center", color: "white" }}>
            <DiCssdeck size="3rem" /> <span>Portfolio</span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="/projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        {!user && (
          <li>
            <Link href="/api/auth/login" passHref>
              <NavLink>Login</NavLink>
            </Link>
          </li>
        )}
        {user && (
          <>
            <li className="pr-4">{user.name}</li>
            <li>
              <Link href="/api/auth/logout" passHref>
                <NavLink>Logout</NavLink>
              </Link>
            </li>
          </>
        )}
      </Div3>
    </Container>
  );
};

export default Header;
