import  {Component} from 'react'

class Header extends Component{
    constructor(){
        super()
            this.state = {

            }
    }

    render(){
        return( 
                 <div className="header-inner">               
                 <div className="subDescription"><h2>Welcome To Our Studio!</h2>
                 </div>
                 <div className="largeDescription">
                    <h1>IT'S NICE TO MEET YOU</h1>
                    </div>
                    <a href="#services"><button id="tellmore">TELL MORE</button></a>
                 </div> 
           

         )
    }
}

export default Header 