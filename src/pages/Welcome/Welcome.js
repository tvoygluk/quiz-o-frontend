import React from 'react';
import classes from './Welcome.module.scss'
import Button from "../../components/UI/Button/Button";
import {Link} from "react-router-dom";

const Welcome = () => {

    return (
        <div className={classes.Welcome}>
            <h1>Добро пожаловать в &#60;Quiz-o-FrontEnd &#47;&#62;!</h1>
            <h2>Проверь свои знания, докажи, что ты уже не junior ;)</h2>
            <Link to="/quiz">
                <Button>Жми сюда!</Button>
            </Link>
        </div>
    );
};

export default Welcome;