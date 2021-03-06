import styled from "styled-components";
import {MdKeyboardArrowRight,MdArrowForward}from 'react-icons/md';
export const BuyContainer=styled.div
`
background:black;
dsplay:flex;
justify-content:center;
align-item:center;
padding:0 30px;
height:500px;
position:relative;
z-index:1;

:before{
    content:'';
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:linear-gradient(180deg,rgba(0,0,0,0.2)0%,rgba(0,0,0,0.6)100%),linear-gradient(180deg,rgba(0,0,0,0.2)0%,transparent 100%);
}
`
export const BuyBg= styled.div
`
position:absolute;
top:0;
right:0;
bottom:0;
left:0;
width:50%;
height:50%;
overflow:hidden;
`
export const VideoBg = styled.video
`
width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
background:black;  
`

export const BuyContent= styled.div
`
z-index:3;
max-width:1200px;
position:absolute;
padding:8px 24px;
display:flex;
flex-direction:column;
align-items:center;
`

export const BuyH1 = styled.h1
`
margin-top:80px;
color:#fff;
font-size:48px;
text-align:center;

@media screen and (max-width:768px)
{
    font-size:40px;
}
@media screen and (max-width:480px)
{
    font-size:32px;
}

`
export const BuyP = styled.p`

margin-top:24px;
color:#fff;
font-size:24px;
text-align:center;
max-width:600px;     

@media screen and (max-width:768px)
{
    font-size:40px;
}
@media screen and (max-width:480px)
{
    font-size:32px;
}
`
export const BuyPImg = styled.div
`
display:grid;
grid-auto-colums:minmax(auto,1fr);
align-items:center;
grid-template-areas:${({imgstart})=>(imgstart ? `'col2 col1'`:`'col1 col2'`)};
@media screen and (max-width:768px)
{
    grid-template-areas:${({imgstart})=>(imgstart ? `'col2 col1'`:`'col1 col1' 'col2 col2'`)};  
}
`

export const ImgBuy = styled.img
`
width:100%;
margin:0 0 10px 0;
padding-right:0;
`

export const ImgWrapBuy = styled.div
`
max-width:555px;
height:100%;
`
export const Colum1Buy = styled.div
`
margin-bottom:15px;
padding:0 15px;
grid-area:col1;
`
export const Colum2Buy = styled.div
`
margin-bottom:15px;
padding:0 15px;
grid-area:col2;
`

export const BuyBtnWrapper = styled.div
`
margin-top:32px;
display:flex;
flex-direction:column;
align-items:center;
`
export const ArrowForward = styled(MdArrowForward)
`
margin-left:8px;
font-size:20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)
`
margin-left:8px;
font-size:20px;
`
