import React,{useState} from 'react';
import Sidebar from '../SIdeBar/SideBar';
import Navbar from '../Navbar';
import Buy from '../pages/Buy';
import Info from '../info/infoSection';
import  Info2  from '../info/info2';
import { homeObjOne,homeObjtwo,homeObjthree } from '../info/Data';
const Home = () => {
    const [isOpen,setIsOpen] = useState(false);
    const toggle=()=>{
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Buy />
            <Info {...homeObjOne}/>
            <Info {...homeObjtwo}/>
            <Info2 {...homeObjthree}/>
        </>
    )
}

export default Home;