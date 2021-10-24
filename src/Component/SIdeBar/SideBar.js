import React from 'react'
import { SideBarContainer,Icon,CloseIcon,SidebarMenu,SidebarWrapper,SidebarLink,
SideBtnWrap,SideBarRoute } from './SideBarElemets'
const SideBar = ({isOpen,toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        Features
                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>
                        Blog
                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>
                        Whitepaper
                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>
                        Transparency
                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>
                        RoadMap
                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>
                        Tokenomics
                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>
                        News
                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>
                        FAQ
                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>
                        Terms
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SideBarRoute to="/login">
                        Login
                    </SideBarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
