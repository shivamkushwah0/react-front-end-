import React ,{Component} from 'react';
import Menu from './MenuComponents';
import  DishDetail  from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Route , Redirect ,Switch , withRouter } from 'react-router-dom';
import Home from './HomeComponent';
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import {connect} from 'react-redux';
import {AddComment} from '../redux/ActionCreators'

const mapStateToProps = state => {
  
  return {
    leaders : state.leaders ,
    promotions : state.promotions,
    dishes : state.dishes,
    comments : state.comments
  }
  
}

const mapDispatchToProps = (dispatch) =>
{
  return {
    addcomment: (dishId , rating , author , comment)=> dispatch(AddComment(dishId , rating , author , comment))
  }
}




class Main extends Component {

  
  render(){
    //console.log(this.props);
    //console.log(this);
    const HomePage = () => {
      return(
          <Home 
              dish={this.props.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }
    const Dishdetail = ({match}) =>{
      return (
        < DishDetail dish={this.props.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId , 10))[0]} 
        comments = {this.props.comments.filter((cmt) => cmt.dishId=== parseInt(match.params.dishId,10))}
        addcomment = {this.props.addcomment}
        />
      );
    }
   
  return (
      
    <div className="App">
      <Header />
      <div className="container">
      <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
              <Route path="/menu/:dishId" component={Dishdetail}></Route>
              <Route path = "/contact" component ={Contact} />
              <Route path = "/about" component = {() => <About leaders={this.props.leaders}/>} />
              <Redirect to="/home" />
      </Switch>
      </div>
      < Footer />

    </div>
  );
}
}
export default withRouter(connect(mapStateToProps , mapDispatchToProps)(Main));
