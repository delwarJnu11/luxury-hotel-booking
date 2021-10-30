import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddService from './components/AddService/AddService';
import Home from './components/Homepage/Home/Home';
import SignIn from './components/Loginpage/SignIn/SignIn';
import SignUp from './components/Loginpage/SignUp/SignUp';
import ManageOrders from './components/ManageOrders/ManageOrders';
import MyOrders from './components/MyOderders/MyOrders';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/place-order/:id">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <Route path="/my-bookings">
            <MyOrders></MyOrders>
          </Route>
          <Route path="/add-service">
            <AddService></AddService>
          </Route>
          <Route path="/manage-bookings">
            <ManageOrders></ManageOrders>
          </Route>
          <Route path="/signin">
            <SignIn></SignIn>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
