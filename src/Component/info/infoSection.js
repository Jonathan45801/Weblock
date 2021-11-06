import React from 'react'
import { Button } from '../ButtonElement'
import { InfoContainer,InfoWrapper,InfoRow,Colum1,TextWrapper,TopLine,HeaderLine,TextLine,BtnWrapper,Colum2,ImgWrap,Img } from './infoelement'
import gambargras from '../cross.png'
const infoSection = ({lightBg,id,imgStart,topLine,lightText,headLine,darkText,
description,buttonLabel,alt,img,dark,dark2,primary}) => {
    return (
        <>
            <InfoContainer lightbg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow>
                    <Colum1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <HeaderLine lighttext={lightText}>{headLine}</HeaderLine>
                        <TextLine darktext={darkText}>{description}</TextLine>
                        <BtnWrapper>
                            <Button to="home"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            primary={primary?1:0}
                            dark={dark ? 1:0}
                            dark2={dark2 ? 1:0}
                            >{buttonLabel}</Button>
                        </BtnWrapper>
                    </TextWrapper>
                    </Colum1>
                    <Colum2>
                    <ImgWrap>
                    <Img src={gambargras} alt={alt}/>
                    </ImgWrap>
                    </Colum2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>

    )
}

export default infoSection
