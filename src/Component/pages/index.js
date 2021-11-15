import React,{useState} from 'react';
import Sidebar from '../SIdeBar/SideBar';
import Navbar from '../Navbar';
import Buy from '../pages/Buy';
import Info from '../info/infoSection';
import  Info2  from '../info/info2';
import InfoCountdown from'../info/infocountdown';
import { homeObjOne,homeObjtwo,homeObjthree } from '../info/Data';
import CountDownTimer from '../countdown/countdowntime'
const Home = () => {
    const [isOpen,setIsOpen] = useState(false);
    const toggle=()=>{
        setIsOpen(!isOpen)
    }
    const test = {Day : 1,Hours : 1,Min : 20,Secs:60};
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Buy />
            <Info {...homeObjOne}/>
            <InfoCountdown {...homeObjtwo}/>
            {/* <CountDownTimer DayHoursMinSecs={test} /> */}
            <Info2 {...homeObjthree}/>
        </>
    )
}

export default Home;