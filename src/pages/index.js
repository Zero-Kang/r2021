import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import HelloPage from "./HelloPage";
import Board from "./Board/";
import TestPage from "./TestPage";


export default () => {
    return (
        <Router>
            <Switch>
                <Route path={"/board"} component={Board}></Route>
                <Route path={"/test"} component={TestPage}></Route>
                <Route path={"/"} component={HelloPage} exact={true}></Route>
            </Switch>
        </Router>
    )
}