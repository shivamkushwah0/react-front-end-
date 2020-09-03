import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle , CardImgOverlay
} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Breadcrumb , BreadcrumbItem } from 'reactstrap';




function RenderMenuItem({dish} )
{
  return (
    <div className="card" key={dish.id}  >
     <Link to = {`/menu/${dish.id}`}>
    <CardImg width="100%"  src={dish.image} alt={dish.name} />
    <CardImgOverlay>
    <CardTitle>
    {dish.name}
    </CardTitle>
    </CardImgOverlay>
    </Link>
  </div>
  );
}

function Menu(props) {
    
      


        const menu = props.dishes.map((dish) => {
            return (
              
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} />
              </div>
              
            );
        });
        
        
        

        return (
          <React.Fragment>
          <div className="row">
            <div className="col-12">
              <h2> You are Here </h2>
            </div>
            <div className="col-12">
              
              <Breadcrumb>
              <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
              <BreadcrumbItem>Menu</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </div>
          <div className="row">
              {menu}
            </div>
            </React.Fragment>
            );
    
   }



export default Menu;