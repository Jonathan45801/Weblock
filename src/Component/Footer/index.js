import React from 'react'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="about">Features</FooterLink>
                            <FooterLink to="/signin">Blog</FooterLink>
                            <FooterLink to="/signin">Whitepaper</FooterLink>
                            <FooterLink to="/signin">Transparency</FooterLink>
                        
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
