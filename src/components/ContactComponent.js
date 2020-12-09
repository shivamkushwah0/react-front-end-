import React, { Component } from 'react';
import {Breadcrumb , BreadcrumbItem  ,Row ,Col , Label , Button} from 'reactstrap';
import  {Link} from 'react-router-dom';
import {Control , Form , Errors} from 'react-redux-form';

const required =(val)=> val && val.length;
const maxlength =(len)=>(val)=>  val &&  (val.length<=len);
const minlength =(len)=>(val) => val && (val.length >=len);
const validemail = (val) => val && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const isNum = (val) => {
    return /^\d+$/.test(val);
                        };
                        
class Contact extends Component {

    
    
    
    
     
    render(){

       const handleSubmit = (values) => {
        
        this.props.postfeedback(values.feedback ,values.firstname + " " +values.lastname , values.email , values.ContactType , values.TelNo , values.agree);
            this.props.handlereset();
            
        }
        
    
       
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
                    <Form model ="user" onSubmit={handleSubmit}>
                    <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model="user.firstname" id="firstname" name="firstname"
                                        placeholder="First Name" className="form-control"
                                        validators={{required , maxlength: maxlength(15),minlength: minlength(2)}}
                                         />
                                        
                                </Col>
                                <Errors model="user.firstname" 
                                        show="touched"
                                        className="text-danger col-md-10 offset-md-2"
                                        messages={{
                                            required :" this is a required field",
                                            maxlength: " max length should be 12",
                                            minlength: " min length should be 2" 
                                        }}
                                        />
                                
                                </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model="user.lastname" id="lastname" name="lastname"
                                        placeholder="Last Name" 
                                        className="form-control"
                                        validators={{required , maxlength: maxlength(15),minlength: minlength(2)}}
                                         />
                                         
                                </Col>
                                <Errors model="user.lastname" 
                                        show="touched"
                                        className="text-danger col-md-10 offset-md-2"
                                        messages={{
                                            required :" this is a required field",
                                            maxlength: " max length should be 12",
                                            minlength: " min length should be 2" 
                                        }}
                                        />
                                
                                
                                </Row>
                            <Row className="form-group">
                                <Label htmlFor="tel" md={2}>Tel No.</Label>
                                <Col md={10}>
                                    <Control.text model="user.TelNo" id="tel" name="tel"
                                        placeholder="Telephone Number"
                                        className =" form-control"  
                                        validators={{required , maxlength: maxlength(15) ,minlength: minlength(2), isNum:isNum
                                        }}
                                        
                                         />
                                         
                                </Col>
                                <Errors model="user.TelNo" 
                                        show = "touched"
                                        className="text-danger col-md-10 offset-md-2"
                                        messages={{
                                            required :" this is a required field",
                                            maxlength: " max length should be 12",
                                            minlength: " min length should be 2",
                                            isNum:" telephone number should contain only number"

                                        }}
                                        />
                                
                                
                                </Row>  
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model="user.email" id="email" name="email"
                                        placeholder="Email" 
                                        className="form-control" 
                                        validators={{required ,
                                        isEmail: validemail 
                                        }}
                                       
                                        />
                                         
                                </Col>
                                <Errors model="user.email" 
                                        show="touched"
                                        className="text-danger col-md-10 offset-md-2"
                                        messages={{
                                            required :" this is a required field",
                                            isEmail:" invalid email"

                                        }}
                                        />
                                
                               
                                </Row>
                            <Row className="form-group">
                            <Col md={{size: 6, offset: 2}}>
                                   <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model="user.agree"
                                                name="agree" className="form-check-input"
                                                
                                                 /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                        </div> 
                                </Col>
                                <Col md={{size: 3 , offset:1}}>
                                   <Control.select model="user.ContactType" name="contactType" className="form-control">
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
                                    <Control.textarea model="user.feedback" id="message" name="message"
                                        placeholder="Your Feedback"  
                                        rows="6" className="form-control"
                                        required
                                         />
                                </Col>
                                </Row>
                            <Row className="form-group">
                                <Col md={{size:10 , offset:2}}>
                                    <Button type="submit" disabled={false}>  Submit Feedback</Button>
                                </Col>
                                </Row>
                            

                    </Form>
                </div>
            </div>
        </div>
    );
    }
}

export default Contact;