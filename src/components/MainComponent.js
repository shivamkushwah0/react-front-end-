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
import {fetchDishes ,fetchComments ,fetchPromos , postComment}  from '../redux/ActionCreators'
import {actions} from 'react-redux-form'
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
    postcomment: (dishId , rating , author , comment)=> dispatch(postComment(dishId , rating , author , comment)),
    fetchDishes: () => {dispatch(fetchDishes())},
    handlereset : () => {dispatch(actions.reset('user'))},
    fetchComments: () => {dispatch(fetchComments())},
    fetchPromos: () => {dispatch(fetchPromos())}
  
  }
}






class Main extends Component {
  

  componentDidMount() {
    this.props.fetchPromos();
    this.props.fetchDishes();
    this.props.fetchComments();
    
  }

  render(){
   console.log(this.props);
    const HomePage = () => {
      return(
          <Home 
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrMess={this.props.dishes.err}
              promotion={this.props.promotions.promos.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
              promosLoading={this.props.promotions.isLoading}
              promosErrMess={this.props.promotions.err}
          />
      );
    }
    const Dishdetail = ({match}) =>{
      return (
        < DishDetail dish={this.props.dishes.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId , 10))[0]} 
        isLoading={this.props.dishes.isLoading}
        errMess={this.props.dishes.err}
        comments = {this.props.comments.comments.filter((cmt) => cmt.dishId=== parseInt(match.params.dishId,10))}
        postcomment = {this.props.postcomment}

        />
      );
    }
   
  return (
      
    <div className="App">
      <Header />
      <div className="container">
        <TransitionGroup>
          <CSSTransition key={this.props.location.key } classNames="page" timeout={300}>
      <Switch >
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes.dishes} isLoading={this.props.dishes.isLoading} err={this.props.dishes.err}/>} />
              <Route path="/menu/:dishId" component={Dishdetail}></Route>
              <Route path = "/contact" component = {() => <Contact handlereset={this.props.handlereset} />} />
              <Route path = "/about" component = {() => <About leaders={this.props.leaders}/>} />
              <Redirect to="/home" />
      </Switch>
      </CSSTransition>
      </TransitionGroup>
      </div>
      < Footer />

    </div>
  );
}
}
export default withRouter(connect(mapStateToProps , mapDispatchToProps)(Main));
