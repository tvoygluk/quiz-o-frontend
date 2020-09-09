import React from 'react';
import classes from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={classes.Footer}>
            <span className={classes.author}>By Maxim Medyanik : <a className={classes.link} href="https://github.com/tvoygluk/quiz-o-frontend">github.com/tvoygluk/quiz-o-frontend</a></span>
            <span className={classes.version}>v.0.7.2</span>
        </footer>
    );
};

export default Footer;