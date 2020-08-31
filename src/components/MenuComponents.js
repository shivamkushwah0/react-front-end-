import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle , CardImgOverlay
} from 'reactstrap';





class Menu extends Component {
    
       constructor(props){
        super(props);
        this.state = {
           selectedDish:null
          }
        }
      
  
  

    render(){


        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card key={dish.id}  onClick={() => this.props.onClick(dish.id)}>
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
        
        //console.log(this.state.selectedDish);
        

        return (
          
          
            <div className="row">
              {menu}
            </div>
            
            
          
          
        );
    
   }
}


export default Menu;