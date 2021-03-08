import React, { Component } from 'react'
import './style.css'
export default class HigherOrderComponent extends Component {
    constructor(){
        super();
        this.state={
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

             ]                

        }
    }
    renderItems = () => {
        
        const data = this.state.userData;
        const mapRows = data.map((person,index) =>
            <div>
              <h5><li>id:{person.id}  name: {person.name} UserType:{person.user_type}</li> </h5>
               
            </div>
            
        );
        return mapRows;
    };
    renderType=()=>{
        const data = this.state.userData;
        
        const mapRows=data.filter((name,index)=>name.user_type.includes('Designer')).map((filtered,index)=>
    (
        
            <h5><li key={index}>id:{filtered.id} Name:{filtered.name} User Type:{filtered.user_type} </li></h5>
       
    ));
    return mapRows;
    }
    renderJ=()=>{
        const data = this.state.userData;
        const mapRows=data.filter((value,index)=>value.name.includes('J')).map((filtered,index)=>
        <h5 key={index} > <li>id:{filtered.id} Name:{filtered.name} User Type:{filtered.user_type} </li></h5>
          );
        return mapRows; 
    }
   renderAge=()=>{
    const data = this.state.userData;
    const mapRows=data.filter((value,index)=>value.age>28 && value.age<=50).map((filtered,index)=>(
        <h5  key={index}><li> id:{filtered.id} Name:{filtered.name} User Type:{filtered.user_type}</li></h5>
    ))
return mapRows;
   }
  
    render() {
        return (
           <div>
               <h1 >Display all items</h1>
              <div className="border" style={{color:"blue"}}>{this.renderItems()}</div> 
               <h1 >Display based on your type </h1>
                <div className="border" style={{color:"blue"}}>{this.renderType()}</div>
                <h1> Filter all data starting with J</h1>
               <div className="border" style={{color:"blue"}}> {this.renderJ()}</div>
                <h1>Filter all data based on age greater than 28 and age less than or equal to 50</h1>
               <div className="border" style={{color:"blue"}}> {this.renderAge()}</div>
  
            </div>
        )
    }
}
