import React, {useState, useEffect} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {Button} from '../../globalStyles'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    MobileMenu,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
} from './Navbar.elements'

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
            <Nav>
               <NavbarContainer>
                    <NavLogo to ='/'>
                        <NavIcon />
                        Virtual Study Resources
                    </NavLogo>
                    <MobileMenu onClick ={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileMenu>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/'>
                                Home
                            </NavLinks>
                        </NavItem>                    
                       <NavItem>
                            <NavLinks to='/Courses'>
                                Courses
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/meetings'>
                                Meetings
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/Library'>
                                Library
                            </NavLinks>
                        </NavItem>
                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to='/sign-up'>
                                    <Button primary>SIGN UP</Button>
                                </NavBtnLink>
                            ): (
                                <NavBtnLink to='/sign-up'>
                                    <Button fontBig primary>SIGN UP</Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
