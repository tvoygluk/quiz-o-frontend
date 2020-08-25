import React from 'react';
import Welcome from "./pages/Welcome/Welcome";
import Layout from "./hoc/Layout/Layout";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import Quiz from "./pages/Quiz/Quiz";

function App() {

    const routes = (
        <BrowserRouter>
            <Switch>
                <Route path={'/'} exact component={Welcome}/>
                <Route path={'/quiz'} exact component={Quiz}/>
            </Switch>
        </BrowserRouter>
    )

    return (
        <Layout>
            {routes}
        </Layout>
    );
}

export default App;
