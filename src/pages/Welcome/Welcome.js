import React from 'react';
import classes from './Welcome.module.scss'
import Button from "../../components/UI/Button/Button";
import {Link} from "react-router-dom";
import Footer from "./Footer/Footer";

const Welcome = () => {

    return (
        <div className={classes.Welcome}>
            <h1>&#60;Quiz-o-FrontEnd&#47;&#62;</h1>
            <Link to="/quiz">
                <Button cls={'ButtonMain'} >START</Button>
            </Link>
            <Footer />
        </div>
    );
};

export default Welcome;