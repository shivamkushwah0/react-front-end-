import React , {Component} from 'react';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle , CardImgOverlay
  } from 'reactstrap'; 
  import {Link} from 'react-router-dom';
  import {Breadcrumb ,BreadcrumbItem } from 'reactstrap'


  function RenderComments({cmt})
  {
    return (
      <div key={cmt.id} className="m-4">
                        
      <div>
         {cmt.comment}
      </div>
      <div>
          <cite>--{cmt.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cmt.date)))}</cite>
      </div>
  </div>
    );
  }

  function RenderDish({dish ,com })
  {
    
      if(dish!=null)
      {
      return(
        <div className="row">
        <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg top src={dish.image} alt={dish.name}/>
          <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
        </div>
        <div className="col-12 col-md-5 m-1">
        <h3>Comments</h3>
            {com}
        </div>
        </div>
      );
      }
        else 
        return (
          <div></div>
        );
  }

  function DishDetail (props) {
   

      
        var com = {};
        
          if(props.dish!=null){
          
            com =
             props.comments.map((cmt) => 
             {
                 return(
                  < RenderComments cmt={cmt} /> 
                 );
             });
            }
            //console.log(com);

      return(
        <div className="container">
        <div className="row">
            <div className="col-12">
              <h2> You are Here </h2>
            </div>
            <div className="col-12">
              
              <Breadcrumb>
              <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
              <BreadcrumbItem>{props.dish.name}</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </div>
      <div>
      <RenderDish dish={props.dish} com={com} />
       </div>
      </div>
        );
      }
  

  export default DishDetail;