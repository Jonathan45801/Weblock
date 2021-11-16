import React from 'react'
import gambarbella from '../BellaAdultReady.png'
import { Button } from '../ButtonElement'
import { InfoContainer,InfoWrapper,InfoRow,Colum1,TextWrapper,TopLine,HeaderLine,TextLine,BtnWrapper,Colum2,ImgWrap,Img } from './infoelement'
import Countdowntime from '../countdown/countdowntime'

 const infocountdown = ({lightBg,id,imgStart,topLine,lightText,headLine,darkText,
    description,buttonLabel,alt,img,dark,dark2,primary}) => {
        const test = {Day : 1,Hours : 1,Min : 20,Secs:60};
    return (
        <>
            <InfoContainer lightbg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow>
                    <Colum1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <HeaderLine lighttext={lightText}>{headLine}</HeaderLine>
                        <Countdowntime DayHoursMinSecs={test}/>
                        {/* <BtnWrapper>
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
                        </BtnWrapper> */}
                    </TextWrapper>
                    </Colum1>
                    <Colum2>
                    <ImgWrap>
                    <Img src={gambarbella} alt={alt}/>
                    </ImgWrap>
                    </Colum2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}
export default infocountdown
