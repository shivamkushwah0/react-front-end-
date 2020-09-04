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
import About from "./AboutComponent";
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
    const Dishdetail = ({match}) =>{
      return (
        < DishDetail dish={this.state.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId , 10))[0]} 
        comments = {this.state.comments.filter((cmt) => cmt.id=== parseInt(match.params.dishId,10))}
        />
      );
    }
   
  return (
      
    <div className="App">
      <Header />
      <div className="container">
      <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Route path="/menu/:dishId" component={Dishdetail}></Route>
              <Route path = "/contact" component ={Contact} />
              <Route path = "/about" component = {() => <About leaders={this.state.leaders}/>} />
              <Redirect to="/home" />
      </Switch>
      </div>
      < Footer />

    </div>
  );
}
}
export default Main;
