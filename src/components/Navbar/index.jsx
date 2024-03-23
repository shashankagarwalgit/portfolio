import React from "react";
import { Link as LinkR} from "react-router-dom";
import styled from "styled-components";

    const Nav = styled.div`
    background-color: ${({ theme }) => theme.card_light};
    height: 80px;
    display: flex;
    font-size: 1rem;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;'
    z-index: 10;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
    `;

    const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1200px;
    `;

    const NavLogo = styled(LinkR)`
    width: 80%;
    padding: 0 6px;
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
    text-decoration: none;
    align-items: center;
    @media screen and (max-width: 640px) {
        padding: 0 0px;
    }
    `;

    const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 640px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 50%);
        font-size: 1.8rem;
        cursor: pointer;
        color: ${({ theme }) => theme.text_primary};
    }
    `;
    const NavItems = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    list-style: none;

    @media screen and (max-width: 760px) {
        display: none;
    }
    `;

    const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    &:hover {
        color: ${({ theme }) => theme.primary};
    }
    `;

    const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 100%;
    padding: 0 6px;
    @media screen and (max-width: 640px) {
        display: none;
    }
    `;
    const GitHubButton = styled.button`
    background-color: transparent;
    color: ${({ theme }) => theme.primary};
    border: 1.8px solid ${({ theme }) => theme.primary};
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    height: 70%;
    :hover {
        background-color: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.white};
    }
    `;
    
    export const Span = styled.span`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18;
    `;

const Navbar = () => {
    return (
    <Nav>
        <NavContainer>
            <NavLogo>
                <a href="/"
                style={
                    {
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                        marginBottom: "20",
                        cursor: "pointer",
                    }
                }
                ><Span>Shashank.</Span></a>
            </NavLogo>
            <MobileIcon></MobileIcon>
            <NavItems>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#education">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Education</NavLink>
            </NavItems>
        <ButtonContainer>
            <GitHubButton>Github Profile</GitHubButton>
        </ButtonContainer>
    </NavContainer>
    </Nav>
    );
}

export default Navbar;