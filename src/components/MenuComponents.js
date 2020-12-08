import React  from 'react';
import {
  CardImg, CardTitle , CardImgOverlay
} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Breadcrumb , BreadcrumbItem } from 'reactstrap';
import {Loading} from './LoadingComponent';
import { baseUrl } from '../shared/baseURL';
import { FadeTransform } from 'react-animation-components';

function RenderMenuItem(props)
{
  return (
    <FadeTransform
    in
    transformProps={{
        exitTransform: 'scale(0.5) translateY(-50%)'
    }}>
    <div className="card" key={props.dish.id}  >
     <Link to = {`/menu/${props.dish.id}`}>
    <CardImg width="100%"  src={baseUrl + props.dish.image} alt={props.dish.name} />
    <CardImgOverlay>
    <CardTitle>
    {props.dish.name}
    </CardTitle>
    </CardImgOverlay>
    </Link>
  </div>
  </FadeTransform>
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
    
  if(props.isLoading)
  return <Loading />

  else if (props.err)
  {
      return (
          <div>
              <h4>{props.err}</h4>
          </div>
      )
  }
      else
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