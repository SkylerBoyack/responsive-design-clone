import {Component} from 'react'

class Nav extends Component{
    constructor(){
        super()
         this.state = {
            showMenu: false
         }
    }

    toggleMenu = () => {
        this.setState({showMenu: !this.state.showMenu})
    }

   


    render(){
    return (
        <nav>
              <a class="navbar-brand" href="#Page"> <img class ="logo" src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg" alt="logo"/></a>
   
                 <ul class="navMain">
                     <li class="nav-item"><a href="#services">Service</a></li>
                     <li class="nav-item"><a href="#portfolio">Portfolio</a></li>
                     <li class="nav-item"><a href="#about">About</a></li>
                     <li class="nav-item"><a href="#team">Team</a></li>
                     <li class="nav-item"><a href="#contact">Contact</a></li>
            </ul>
                <ul class="navDrop">
                     <li class="nav-item"><a href="#services">Service</a></li>
                     <li class="nav-item"><a href="#portfolio">Portfolio</a></li>
                     <li class="nav-item"><a href="#about">About</a></li>
                     <li class="nav-item"><a href="#team">Team</a></li>
                     <li class="nav-item"><a href="#contact">Contact</a></li>
                </ul>
                <button onClick={this.toggle}>Burger</button>
    </nav>  
       
    )};
  }
  
  export default Nav;
  