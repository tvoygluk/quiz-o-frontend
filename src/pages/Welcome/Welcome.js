import React from 'react';
import classes from './Welcome.module.scss'
import Button from "../../components/UI/Button/Button";
import {Link} from "react-router-dom";

const Welcome = () => {

    return (
        <div className={classes.Welcome}>
            <h1>&#60;Quiz-o-FrontEnd&#47;&#62;</h1>
            <Link to="/quiz">
                <Button cls={'ButtonMain'} >START</Button>
            </Link>
        </div>
    );
};

export default Welcome;