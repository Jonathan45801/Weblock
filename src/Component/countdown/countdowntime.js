import React from 'react'
import { CountContainer,TimerContainer,TimerWrapped,DateStyled, CounterStyled} from './countdownelement';

const Countdowntime = ({DayHoursMinSecs}) => {
    const {Day = 0,Hours = 0,Min = 0,Secs=60}=DayHoursMinSecs;
    const [[days,hrs,mins,secs],setTime] = React.useState([Day,Hours,Min,Secs]);
    
    const ticks=()=>
    {
        if(days === 0 && hrs ===0 && mins ===0 && secs ===0)
        {
            
        }
        else if(hrs === 0 && mins ===0 && secs ===0)
        {
            setTime([days -1,23,59,59]);
        }
        else if(mins === 0 && secs ===0)
        {
            setTime([days,hrs - 1,59,59]);
        }
        else if(secs === 0)
        {
            setTime([days,hrs,mins - 1,59]);
        }
        else
        {
            setTime([days,hrs,mins,secs - 1]);
        }
    }
    React.useEffect(()=>{
        const timeid = setInterval(()=>ticks(),1000);
        return ()=>clearInterval(timeid);
    })
    return (
        <>
            <CountContainer>
               <TimerContainer>
                   <DateStyled>Hitung Mundur</DateStyled>
                   <TimerWrapped>
                   <CounterStyled><h2>{"Hari"}</h2>{days}</CounterStyled>
                   <CounterStyled><h2>{"Jam"}</h2>{Hours.toString().padStart(2,'0')}</CounterStyled>
                   <CounterStyled><h2>{"Menit"}</h2>{Min.toString().padStart(2,'0`')}</CounterStyled>
                   <CounterStyled><h2>{"Detik"}</h2>{secs}</CounterStyled>
                   </TimerWrapped>
               </TimerContainer>
            </CountContainer>
        </>
    )
}

export default Countdowntime
