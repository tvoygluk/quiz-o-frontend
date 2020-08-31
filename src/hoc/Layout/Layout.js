import React from 'react';
import classes from './Layout.module.scss'
import {Helmet} from "react-helmet";
import Favicon from "../../favicon.ico";

const Layout = props => {
    return (
        <div className={classes.Layout}>

            <Helmet>
                <meta charSet='UTF-8' />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='discription' content='Awesome Quiz for Frontend developers' />
                <meta name="theme-color" content="#000000" />

                <link rel="icon" href={Favicon} />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
                      integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
                      crossOrigin="anonymous" />
                <link rel='preload' href='../../style/fonts/RubikMonoOne-Regular.woff2' as={"font"} type='font/woff2' crossOrigin />
                <link rel='preload' href='../../style/fonts/PressStart2P-Regular.woff2' as={"font"} type='font/woff2' crossOrigin />
                <link rel='preload' href='../../style/fonts/NotoSansTC-Regular.woff2' as={"font"} type='font/woff2' crossOrigin />


                <title>Quiz-o-Frontend</title>
            </Helmet>

            <main>
                {props.children}
            </main>
        </div>
    );
};

export default Layout;