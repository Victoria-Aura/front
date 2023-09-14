import React from "react";

import Brand from '../Components/Brand/Brand';
import News from "../Components/News/News";
import Disciplines from "../Components/Disciplines/Disciplines";
import Footer from "../Components/Footer/Footer";



const Home = () => {
    return (
        <>
            <Brand />
            <News />
            <Disciplines />
            <Footer />
        </>
    );
};

export default Home;