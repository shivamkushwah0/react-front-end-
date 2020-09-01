import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle , CardImgOverlay
} from 'reactstrap';



function RenderMenuItem({dish , onClick} )
{
  return (
    <div className="card" key={dish.id}  onClick={() =>onClick(dish.id)}>
    <CardImg width="100%"  src={dish.image} alt={dish.name} />
    <CardImgOverlay>
    <CardTitle>
    {dish.name}
    </CardTitle>
    </CardImgOverlay>
  </div>
  );
}

function Menu(props) {
    
      


        const menu = props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} onClick={props.onClick} />
              </div>
            );
        });
        
        
        

        return (
          <div className="row">
              {menu}
            </div>
            );
    
   }



export default Menu;