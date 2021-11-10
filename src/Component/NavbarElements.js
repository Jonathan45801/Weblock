
import { Link as LinkR } from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import styled from 'styled-components';
  
export const Nav = styled.nav`
background:linear-gradient(90deg, #dde6e0 0%, rgb(198, 240, 220) 100%);;
height:80px;
// margin-top:-80px;
display:flex;
justify-content:center;
align-items:center;
font-size:1rem;
position:sticky;
top:0;
z-index:10;

@media screen and(max-width:960px)
{
  transition:0.8s all ease;
}
`
export const NavbarContainer=styled.div`
display:flex;
justify-content:space-between;
height:80px;
z-index:1;
width:100%;
padding:0 24px;
max-width:1100px;
`
export const NavLogo = styled(LinkR)`
justify-self:flex-start;
cursor:pointer;
font-size:1.5 rem;
display:flex;
align-items:center;
font-weight:bold;
text-decoration:none;
`
export const MobileIcon=styled.div`
display:none;
@media screen and (max-width:760px)
{
  display:block;
  position: absolute;
  top:0;
  right:0;
  transform: translate(-100%,60%);
  font-size:1.8rem;
  cursor:pointer;
  color:#fff;
}
`;
export const NavMenu = styled.ul`
display:flex;
align-items:center;
list-style:none;
text-align:center;
margin-right:-22px;
padding: 0 1rem;
@media screen and (max-width : 768px)
{
  display:none;
}
`;
export const NavItem = styled.li`
height:80px;
`;
export const NavLinks=styled(LinkS)`
  color:rgb(94, 92, 92);
  margin-top:10px;
  display:flex;
  align-items:center;
  text-decoration:none;
  padding: 0 1rem;
  height:100%;
  cursor:pointer;
  font-weight:bold;
  &.active{
    border-bottom:3px solid #01bf71;
  }
&:hover{
  border-bottom: 2px solid #26e40d;
    transition: all 0.2s ease-out;
    height: 60px;
    color:black;
    background:white;
    border-radius:20px;
}
`;

export const NavBtn = styled.nav`
display:flex;
align-items:center;
padding:0 1rem;
margin-left:100px;
@media screen and (max-width:768px)
{
  display:none;
}
`
export const NavBtnLink = styled(LinkR)`
margin-top:10px;
margin-left:5px;
border-radius:50px;
background:lightgreen;
margin-right:10px;
white-space:nowrap;
padding:10px 22px;
color:#010606;
font-size:16px;
outline:none;
border:none;
cursor:pointer;
transition:all 0.2s ease-in-out;
text-decoration:none;
&:hover
{
  transition:all 0.2s ease-in-out;
  background:#fff;
  color: #010606;
}`