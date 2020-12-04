import React ,{Component} from 'react';
import Menu from './MenuComponents';
import DishDetail  from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Route , Redirect ,Switch , withRouter } from 'react-router-dom';
import Home from './HomeComponent';
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import {connect} from 'react-redux';
import {AddComment ,fetchDishes}  from '../redux/ActionCreators'
import {actions} from 'react-redux-form'
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
    addcomment: (dishId , rating , author , comment)=> dispatch(AddComment(dishId , rating , author , comment)),
    fetchDishes: () => {dispatch(fetchDishes())},
    handlereset : () => {dispatch(actions.reset('user'))}
  
  }
}






class Main extends Component {
  

  componentDidMount() {
    this.props.fetchDishes()
  }

  render(){
    console.log(this.props);
    const HomePage = () => {
      return(
          <Home 
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrMess={this.props.dishes.errMess}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }
    const Dishdetail = ({match}) =>{
      return (
        < DishDetail dish={this.props.dishes.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId , 10))[0]} 
        isLoading={this.props.dishes.isLoading}
        errMess={this.props.dishes.errMess}
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
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes.dishes} isLoading={this.props.dishes.isLoading} errMess={this.props.dishes.errMess}/>} />
              <Route path="/menu/:dishId" component={Dishdetail}></Route>
              <Route path = "/contact" component = {() => <Contact handlereset={this.props.handlereset} />} />
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
