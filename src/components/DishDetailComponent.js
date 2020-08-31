import React , {Component} from 'react';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle , CardImgOverlay
  } from 'reactstrap'; 

  class DishDetail extends Component{
   

      render()
      
      { 
        var com = {};
        
          if(this.props.dish!=null){
            //console.log(this.props.dish.comments);
            com =
             this.props.dish.comments.map((cmt) => 
             {
                 return(
                     <div key={cmt.id} className="m-4">
                        
                         <div>
                            {cmt.comment}
                         </div>
                         <div>
                             <cite>--{cmt.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cmt.date)))}</cite>
                         </div>
                     </div>
                 );
             });
            }
                  
           // console.log((this.props.d)[0]);
  
    if(this.props.dish!=null)
    {
      return(
          <div className="row">
          <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg top src={this.props.dish.image} alt={this.props.dish.name}/>
          <CardBody>
          <CardTitle>{this.props.dish.name}</CardTitle>
          <CardText>{this.props.dish.description}</CardText>
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
      return (<div></div>);
  
    
      }
  }

  export default DishDetail;