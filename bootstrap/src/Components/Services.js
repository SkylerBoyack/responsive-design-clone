import {Component} from 'react'

class Services extends Component{
    constructor(){
        super()
            this.state = {

            }
    }
    render(){
        return(<div className="ContainerSer">
            <div id="services">
                <h5 id="serviceH1">Services</h5>
                <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
            
            <div className="row-text">
           
            <div class="text-box"> 
                <img class ="shopping-cart" src="https://cdn.iconscout.com/icon/free/png-256/shopping-cart-452-1163339.png" alt="shopping-cart"/> 
                    <h4>E-Commerce</h4>
                        <p class="servText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>

            <div class="text-box"> 
                <img class ="computer" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Blue_computer_icon.svg/1024px-Blue_computer_icon.svg.png" alt="computer"/> 
                    <h4>Responsive Desgin</h4>
                        <p class="servText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>

            <div class="text-box"> 
                <img class ="lock" src="https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/lock-512.png" alt="lock"/>
                    <h4>Web Security</h4>
                        <p class="servText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
             </div>

            </div>

        </div>)
    }
}

export default Services 
