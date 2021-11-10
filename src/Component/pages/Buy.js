import React,{useState}from 'react'
import { BuyContainer,BuyBg,BuyContent,BuyH1,BuyP,BuyBtnWrapper,ArrowForward,ArrowRight } from './BuyElements'
import {Button } from '../ButtonElement'

const Buy = () => {
    const [hover,setHover]= useState(false);
    const onHover =()=>
    {
        setHover(!hover);
    }
    return (
        <>
         <BuyContainer>
             <BuyBg >
             </BuyBg>
             <BuyContent>
                 <BuyH1> Block Farm Club</BuyH1>
                     <BuyP>
                     BFC is a decentralized game where anyone can earn tokens
                     and NFTs through farm the game or leisure.
                     </BuyP>
                <BuyBtnWrapper>
                    <Button to="buy" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' green='true'>
                    Buy {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </BuyBtnWrapper>
             </BuyContent>

            
             </BuyContainer>   
        </>
    )
}

export default Buy
