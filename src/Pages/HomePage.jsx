import React from "react";

import Brand from '../Components/Brand/Brand';
import News from "../Components/News/News";
import Disciplines from "../Components/Disciplines/Disciplines";
import Footer from "../Components/Footer/Footer";
import { NavPanel } from "../Components/NavPanel/NavPanel";



const Home = () => {
    return (
        <>
            <NavPanel />
            <Brand />
            <News />
            <Disciplines />
        </>
    );
};

export default Home;    