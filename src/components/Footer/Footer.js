import React from 'react'
import { Button } from '../../globalStyles'
import {
    FaFacebook,
    FaInstagram,
    FaGithub,
    FaYoutube
} from 'react-icons/fa'
import { 
        FooterContainer, 
        FooterSubscription, 
        FooterSubHeading, 
        FooterSubText,
        Form,
        FormInput,
        FooterLinksContainer,
        FooterLinkWrapper,
        FooterLinkTitle,
        FooterLinksItem,
        FooterLink,
        SocialMedia,
        SocialMediaWrap,
        SocialLogo,
        SocialIcon,
        SocialIconLink,
        SocialIcons,
        WebsiteRight,

} from './Footer.elements'
const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterSubscription>
                    <FooterSubHeading>
                        Join our exclusive membership to recieve the latest news and trends
                    </FooterSubHeading>
                    <FooterSubText>You can unsubscribe at any time.</FooterSubText>
                    <Form>
                        <FormInput name='email' type='email' placeholder='Your Email' />
                        <Button fontBig>Subscribe</Button>
                    </Form>
                    </FooterSubscription>
            <FooterLinksContainer>
            <FooterLinkWrapper>
                    <FooterLinksItem>
                       <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testiomonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Instructor</FooterLink>
                        <FooterLink to='/'>Terms of Services</FooterLink>
                    </FooterLinksItem>
                    <FooterLinksItem>
                       <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testiomonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Instructor</FooterLink>
                        <FooterLink to='/'>Terms of Services</FooterLink>
                    </FooterLinksItem>
                    </FooterLinkWrapper>
                    <FooterLinkWrapper>
                    <FooterLinksItem>
                       <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testiomonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Instructor</FooterLink>
                        <FooterLink to='/'>Terms of Services</FooterLink>
                    </FooterLinksItem>
                    <FooterLinksItem>
                       <FooterLinkTitle>Social Media</FooterLinkTitle> 
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testiomonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Instructor</FooterLink>
                        <FooterLink to='/'>Terms of Services</FooterLink>
                    </FooterLinksItem>
            </FooterLinkWrapper>
            </FooterLinksContainer>
           <SocialMedia>
           <SocialMediaWrap>
                <SocialLogo to='/'>
                    <SocialIcon />
                    VSR
                </SocialLogo>
                <WebsiteRight>VIRTUAL STUDY RESOURCES &copy; 2020</WebsiteRight>
                <SocialIcons>
                <SocialIconLink href='/' target='_blank' arial-label="Facebook">
                    <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href='/' target='_blank' arial-label="Github">
                    <FaGithub />
                </SocialIconLink>
                <SocialIconLink href='/' target='_blank' arial-label="Instagram">
                    <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href='/' target='_blank' arial-label="Youtube"
                rel='noopener noreffer'
                >
                    <FaYoutube />
                </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
           </SocialMedia>
            </FooterContainer>
        </>
    )
}

export default Footer
