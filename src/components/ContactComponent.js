import React, { Component } from 'react';
import {Breadcrumb , BreadcrumbItem , FormGroup  ,Col , Label ,Input , Form , Button, FormFeedback} from 'reactstrap';
import  {Link} from 'react-router-dom';

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            tel: '',
            email : '',
            message : '',
            agree : false ,
            touched : {
                firstname: false,
                lastname: false,
                tel: false,
                email : false
            }
        };
        this.handleInput=this.handleInput.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleBlur=this.handleBlur.bind(this);
        this.handleFocus=this.handleFocus.bind(this);
    }

    handleInput(event) {
       const target = event.target ;
       const value = target.type==='checkbox' ? target.checked : target.value;
       const name = target.name;
       this.setState ( {
        [name]  : value
       });
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched : { ...this.state.touched , [field] : true}
        });
        console.log("now");
    }

    handleFocus = (field) => (evt) => {
        this.setState({
            touched : { ...this.state.touched , [field] : false}
        });
        console.log("now2");
    }

    validate(firstname , lastname , email ,tel ){
        const errors = {
            firstname: '',
            lastname: '',
            tel: '',
            email : '' ,
        };
        if(this.state.touched.firstname && (firstname.length<3 || firstname.length > 10 ) )
        errors.firstname = "The First Name should be between 3 to 10 letters";

        if(this.state.touched.lastname && (lastname.length<3 || lastname.length > 10 ) )
        errors.lastname = "The Second Name should be between 3 to 10 letters";

        if(this.state.touched.email && (email.indexOf("@")==-1) )
        errors.email= "The Email should contain a @ symbol";


        const reg = /^\d+$/;
        if(this.state.touched.tel && !reg.test(tel))
        errors.tel = "The telephone number should contain only numeric digits";

        return errors;

    }

    handleSubmit (event) {
        console.log("the given data is : " + JSON.stringify(this.state));
        alert("the given data is : " + JSON.stringify(this.state));
        event.preventDefault();
    }
    

    render(){

        const errors = this.validate (this.state.firstname , this.state.lastname , this.state.email , this.state.tel );
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
                    <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname"
                                        placeholder="First Name" value={this.state.firstname} onChange={this.handleInput}
                                        onBlur={this.handleBlur('firstname')}
                                        valid ={errors.firstname==='' && this.state.touched.firstname}
                                        invalid = {!(errors.firstname==='') && this.state.firstname.length>0}
                                        onFocus={this.handleFocus('firstname')}
                                         />
                                         <FormFeedback> {errors.firstname} </FormFeedback>
                                </Col>
                                
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname"
                                        placeholder="Last Name" value={this.state.lastname} onChange={this.handleInput}
                                        onBlur={this.handleBlur('lastname')}
                                        valid ={errors.lastname==='' && this.state.touched.lastname}
                                        invalid = {!(errors.lastname==='') && this.state.lastname.length>0}
                                        onFocus={this.handleFocus('lastname')}
                                         />
                                         <FormFeedback> {errors.lastname} </FormFeedback>
                                </Col>
                                
                            </FormGroup> 
                            <FormGroup row>
                                <Label htmlFor="tel" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="tel" id="tel" name="tel"
                                        placeholder="Telephone Number"  value={this.state.tel}  onChange={this.handleInput}
                                        onBlur={this.handleBlur('tel')}
                                        valid ={errors.tel==='' && this.state.touched.tel}
                                        invalid = {!(errors.tel==='') && this.state.tel.length>0}
                                        onFocus={this.handleFocus('tel')}
                                         />
                                         <FormFeedback> {errors.tel} </FormFeedback>
                                </Col>
                                
                            </FormGroup>   
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"  value={this.state.email} onChange={this.handleInput}
                                        onBlur={this.handleBlur('email')}
                                        valid ={errors.email==='' && this.state.touched.email}
                                        invalid = {!(errors.email==='') && this.state.email.length>0}
                                        onFocus={this.handleFocus('email')}
                                        />
                                         <FormFeedback> {errors.email} </FormFeedback>
                                </Col>
                               
                            </FormGroup>
                            <FormGroup row>
                            <Col md={{size: 6, offset: 2}}>
                                   <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"
                                                name="agree"  checked={this.state.agree} onChange={this.handleInput}
                                                 /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup> 
                                </Col>
                                <Col md={{size: 3 , offset:1}}>
                                   <Input type="select" name="contactType" value={this.state.contactType} onChange={this.handleInput}>
                                    <option>
                                        Tel
                                    </option>
                                    <option>
                                        Email
                                    </option>   
                                    </Input> 
                                </Col>  
                            </FormGroup>    
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message"
                                        placeholder="Your Feedback"  value={this.state.message} onChange={this.handleInput}
                                        rows="6"
                                         />
                                </Col>
                            </FormGroup> 
                            <FormGroup row>
                                <Col md={{size:10 , offset:2}}>
                                    <Button type="submit" disabled={false}>  Submit Feedback</Button>
                                </Col>
                            </FormGroup>

                    </Form>
                </div>
            </div>
        </div>
    );
    }
}

export default  Contact;