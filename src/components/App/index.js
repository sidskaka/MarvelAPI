// Les packages � importer pour g�rer les route sur la page apr�s avoir install� react-router-dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import '../../App.css';
import Header from "../Header"
import Footer from "../Footer"
import Landing from "../Landing"
import Welcome from "../Welcome"
import Login from "../Login"
import Signup from "../Signup"
import ErrorPage from "../ErrorPage"

function App() {
    return (
        <Router>
            <Header />

            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/welcome" component={Welcome} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route component={ErrorPage} />
            </Switch>

            <Footer />
        </Router>
    );
}

export default App;