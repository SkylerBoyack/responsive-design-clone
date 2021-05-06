import  {Component} from 'react'
import Header from './Header'
import Services from './Services'
import Nav from './Nav'


class Page extends Component{
    constructor(){
        super()
            this.state = {

            }
    }
    render(){
        return(<div id="Page">
            <Nav/>  
            <header>
            <Header/>
            </header>
            <section className="page-section">
            <Services/>
            </section>
        </div>)
    }
}

export default Page

