import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import React , {Component} from 'react';


class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            isNavOpen:false
            
        };
        this.toggleNav = this.toggleNav.bind(this);
        
    }

    toggleNav(){
        this.setState(
            {isNavOpen:!this.state.isNavOpen
            });
    }
    render () {
    return(
        <React.Fragment>
        <Navbar dark expand="md">
      <div className="container">
        <NavbarToggler onClick={this.toggleNav} />
      <NavbarBrand className="ml-auto" href="/">
      Ristorante Con Fusion</NavbarBrand>
      <Collapse isOpen={this.state.isNavOpen} navbar>
      <Nav navbar>
          <NavItem>
              <NavLink  className ="nav-link" to="/home">
                  <span className="fa fa-home fa-lg mr-1"></span> 
                  Home
              </NavLink>
          </NavItem>
          <NavItem>
              <NavLink className ="nav-link" to="/">
                  <span className="fa fa-info fa-lg mr-1"></span>
                  About Us
              </NavLink>
          </NavItem>
          <NavItem>
              <NavLink className ="nav-link" to="/menu">
                  <span className="fa fa-list fa-lg mr-1"></span>
                  Menu
              </NavLink>
          </NavItem>
          <NavItem>
              <NavLink className ="nav-link" to="/">
                  <span className="fa fa-addres-card fa-lg mr-1"></span>
                  Contact Us
              </NavLink>
          </NavItem>
      </Nav>
      </Collapse>
      </div>
      </Navbar>
      <Jumbotron>
      <div className="container">
      <div className="row">
      <div className="col-12 col-sm-6">
      <h1>Ristorante ConFusion</h1>
      <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
      </div>
      </div>
      
      </div>
      
      </Jumbotron>
      
      </React.Fragment>
    );
    }
}

export default Header;
