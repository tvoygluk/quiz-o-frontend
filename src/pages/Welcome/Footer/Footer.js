import React from 'react';
import classes from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={classes.Footer}>
            <span>By Maxim Medyanik : <a href="https://github.com/tvoygluk/quiz-o-frontend">github.com/tvoygluk/quiz-o-frontend</a></span>
            <span>v.0.2.0</span>
        </footer>
    );
};

export default Footer;