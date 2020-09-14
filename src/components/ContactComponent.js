import React, { Component } from 'react';
import {Breadcrumb , BreadcrumbItem , FormGroup ,Row ,Col , Label ,Input , Form , Button, FormFeedback} from 'reactstrap';
import  {Link} from 'react-router-dom';
import {Control , LocalForm , Errors, controls} from 'react-redux-form';

class Contact extends Component {
    constructor(props){
        super(props);
        
        };
       
        
        
    

  

    

    

    // validate(firstname , lastname , email ,tel ){
    //     const errors = {
    //         firstname: '',
    //         lastname: '',
    //         tel: '',
    //         email : '' ,
    //     };
    //     if(this.state.touched.firstname && (firstname.length<3 || firstname.length > 10 ) )
    //     errors.firstname = "The First Name should be between 3 to 10 letters";

    //     if(this.state.touched.lastname && (lastname.length<3 || lastname.length > 10 ) )
    //     errors.lastname = "The Second Name should be between 3 to 10 letters";

    //     if(this.state.touched.email && (email.indexOf("@")==-1) )
    //     errors.email= "The Email should contain a @ symbol";


    //     const reg = /^\d+$/;
    //     if(this.state.touched.tel && !reg.test(tel))
    //     errors.tel = "The telephone number should contain only numeric digits";

    //     return errors;

    // }

    handleSubmit (values) {
        console.log("the given data is : " + JSON.stringify(values));
        alert("the given data is : " + JSON.stringify(values));
        //event.preventDefault();
    }
    

    render(){

        //const errors = this.validate (this.state.firstname , this.state.lastname , this.state.email , this.state.tel );
    return(
        <div className="container">
             <div className="row">
            <div className="col-12">
              <h2> You are Here </h2>
            </div>
            <div className="col-12">
              
              <Breadcrumb>
              <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
              <BreadcrumbItem>Contact Us</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Send US Your Feedback</h3>
                </div>
                <div className="col-12 col-md-9">
                    <LocalForm onSubmit={this.handleSubmit}>
                    <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name" className="form-control"
                                         />
                                        
                                </Col>
                                
                                </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name" 
                                        className="form-control"
                                         />
                                         
                                </Col>
                                
                                </Row>
                            <Row className="form-group">
                                <Label htmlFor="tel" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".tel" id="tel" name="tel"
                                        placeholder="Telephone Number"
                                        className =" form-control"  
                                         />
                                         
                                </Col>
                                
                                </Row>  
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email" 
                                        className="form-control" 
                                        />
                                         
                                </Col>
                               
                                </Row>
                            <Row className="form-group">
                            <Col md={{size: 6, offset: 2}}>
                                   <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree"
                                                name="agree" className="form-check-input"
                                                 /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                        </div> 
                                </Col>
                                <Col md={{size: 3 , offset:1}}>
                                   <Control.select model=".contactType" name="contactType" className="form-control">
                                    <option>
                                        Tel
                                    </option>
                                    <option>
                                        Email
                                    </option>   
                                    </Control.select> 
                                </Col>  
                                </Row>    
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        placeholder="Your Feedback"  
                                        rows="6" className="form-control"
                                         />
                                </Col>
                                </Row>
                            <Row className="form-group">
                                <Col md={{size:10 , offset:2}}>
                                    <Button type="submit" disabled={false}>  Submit Feedback</Button>
                                </Col>
                                </Row>
                            

                    </LocalForm>
                </div>
            </div>
        </div>
    );
    }
}

export default  Contact;