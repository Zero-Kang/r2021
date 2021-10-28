import React from 'react';
import PageWrapper from "../../template/PageWrapper";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

import ListPage from "./ListPage";
import RegisterPage from "./RegisterPage";

export default () => {
    return (
        <PageWrapper>
            <h1>Board Module...</h1>
            <Router>
                <Switch>
                    <Route path={"/board/list"} component={ListPage}></Route>
                    <Route path={"/register"} component={RegisterPage}></Route>
                </Switch>
            </Router>

        </PageWrapper>

    );
};
