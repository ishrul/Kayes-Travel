import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import Header from "./Components/Shared/header/Header";
import Footer from "./Components/Shared/Footer/Footer";
import LogIn from "./Components/LogIn/LogIn";
import AuthProvider from "./Context/AuthProvider";
import MyOrders from "./MyOrders/MyOrders";
import ManageAllOrders from "./ManageAllOrders/ManageAllOrders";
import NewService from "./NewService/NewService";
import PlaceOrder from "./PlaceOrder/PlaceOrder";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="/myOrders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route path="/NewService">
              <NewService></NewService>
            </Route>
            <PrivateRoute path="/placeOrder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
