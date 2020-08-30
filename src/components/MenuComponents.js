import React, { Component } from 'react';
//import { Media } from 'reactstrap';
//import { DISHES } from './shared/dishes.js';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle , CardImgOverlay
} from 'reactstrap';
import  DishDetail  from './DishDetailComponent';




class Menu extends Component {
    
       constructor(props){
        super(props);
        this.state = {
           selectedDish:null
          }
        }
      
  onDishSelect(dish)
  {
    this.setState({selectedDish:dish});
  }
  

    render(){


        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card key={dish.id} onClick={()=> this.onDishSelect(dish)}>
                  <CardImg width="100%"  src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                  <CardTitle>
                  {dish.name}
                  </CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });
        
        console.log(this.state.selectedDish);
        

        return (
          
          <div className="container">
            <div className="row">
              {menu}
            </div>
            
            {
              <DishDetail  dish={this.state.selectedDish} />
            // this.renderDish(this.state.selectedDish)
            }
            
          </div>
          
        );
    
   }
}


export default Menu;