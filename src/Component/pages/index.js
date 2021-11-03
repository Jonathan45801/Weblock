import React,{useState} from 'react';
import Sidebar from '../SIdeBar/SideBar';
import Navbar from '../Navbar';
import Buy from '../pages/Buy';

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
        </>
    )
}

export default Home;