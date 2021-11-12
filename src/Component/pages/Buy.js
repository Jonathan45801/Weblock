import React,{useState}from 'react'
import logoWeblock from '../logoWeblock.png'
import { BuyContainer,BuyBg,BuyContent,BuyH1,BuyP,BuyBtnWrapper,ArrowForward,ArrowRight,BuyPImg,ImgWrapBuy,ImgBuy,Colum1Buy,Colum2Buy } from './BuyElements'
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
                    <BuyPImg imgstart={true}>
                        <Colum1Buy>
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
                        </Colum1Buy>
                        <Colum2Buy>
                            <ImgWrapBuy>
                                <ImgBuy src={logoWeblock} alt={''}/>
                            </ImgWrapBuy>
                        </Colum2Buy>
                     </BuyPImg>          
             </BuyContent>

            
             </BuyContainer>   
        </>
    )
}

export default Buy
