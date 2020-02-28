import React , {Component} from "react"
import FormComponent from './FormComponent'

class Form extends Component {
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            isVegan: "",
            isKosher: "",
            isLactoseFree: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const { name, value, type, checked} = event.target
        type === checked ?
        this.setSate({
            [name]: checked
        }) :
        this.setState({
            [name]: value
        })

    }

    render(){
        return(
            <FormComponent 
              handleChange  = {this.handleChange}   
              data = {this.state}       
            />
        )
    }
}
export default Form