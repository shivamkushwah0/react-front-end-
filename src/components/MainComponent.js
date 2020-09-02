import React ,{Component} from 'react';
import Menu from './MenuComponents';
import {DISHES} from "../shared/dishes";
import  DishDetail  from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Route , Redirect ,Switch } from 'react-router-dom';
import Home from './HomeComponent';
import Contact from "./ContactComponent";
import {PROMOTIONS} from "../shared/promotions";
import {COMMENTS} from "../shared/comments";
import {LEADERS} from "../shared/leaders";
class Main extends Component {

  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
      promotions:PROMOTIONS,
      leaders:LEADERS,
      comments:COMMENTS
      
    };
  }
  
  
  render(){
    
    const HomePage = () => {
      return(
          <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }
   
  return (
      
    <div className="App">
      <Header />
      <div className="container">
      <Switch>
              <Route path='/home' component={HomePage} />
              <Route path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Route path = "/contact" component ={Contact} />
              <Redirect to="/home" />
      </Switch>
      </div>
      < Footer />

    </div>
  );
}
}
export default Main;
