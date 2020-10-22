import React , {Component, useState} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, Modal , ModalBody ,ModalHeader,ModalFooter, Label ,Form
  } from 'reactstrap'; 
  import {Link} from 'react-router-dom';
  import {Breadcrumb ,BreadcrumbItem } from 'reactstrap';
  import {LocalForm , Control , Errors} from 'react-redux-form';
   

  function RenderComments(props)
  {
    
    const [modal , setModal ] = useState(false);

  const toggle= () => setModal(!modal);
  const handleSubmit = (values) => 
  {
    toggle();
    //console.log(props);
    props.addcomment(props.dish.id , values.rating , values.name ,values.comment);
  }

  var com = props.cmt.map((cmt)=> {
    return ( 
    <div key={cmt.id} className="m-4">
                        
    <div>
       {cmt.comment}
    </div>
    <div>
        <cite>--{cmt.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cmt.date)))}</cite>
    </div>
    
</div>
    )
  });
 
    return (
      <div>
      {com}
      <Button className="btn-primary-outline" onClick={toggle} className="m-2">
        <i className="fa fa-pencil" />{" "}Submit Comment
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}> <strong> Submit Comment </strong></ModalHeader>
        <ModalBody>
          
          <LocalForm model="value" onSubmit={ (v) => handleSubmit(v)} addcomment= {props.addcomment} dish={props.dish}>
          
            <Label className="form-check" htmlFor="rating">Rating</Label>
            <Control.select  model=".rating" name="rating" id ="rating" className="form-control">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Control.select>
            <Label className="form-check" htmlFor="name">Name</Label>
            <Control.text className="form-control" placeholder="Your Name..." name="name" model=".name" id="name" 
            validators={{max : (val)=> !(val&&val.length>15) , min : (val)=> !(val&&val.length<2) }}
            validateOn="blur"
            />
            <Errors
            model =".name"
            show="touched"
            className="text-danger"
            messages = {{
                max: "Name should be less than 16 characters",
                min: "Name should be more than two characters "
            }}
            />

            <Label className="form-check" htmlFor="comment">Comment</Label>
            <Control.textarea className="form-control" model=".comment" for="comment" id ="comment" rows="5" />


            <Button className="btn-info mt-3" type="submit" >Submit</Button>
            
          </LocalForm>
          
    
        </ModalBody>
        <ModalFooter>
          
          <Button className="btn-primary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
      </div>

    )
  }

  function RenderDish({dish} )
  {
    return(
        <Card>
          <CardImg top src={dish.image} alt={dish.name}/>
          <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
        );
      }
      function DishDetail (props) {
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
      <div className="row">
        <div className="col-12 col-sm-6">
      <RenderDish dish={props.dish} />
      </div>
      <div className="col-12 col-sm-6">
      <RenderComments cmt={props.comments} addcomment={props.addcomment} dish={props.dish} />
      </div>
       </div>
      </div>
        );
      }
  

  export default DishDetail;