import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from  '../shared/dishes'
import Dishdetail from './DishdetailComponent';


class Main extends Component{
    constructor(props){
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onDishSelect(dishId){
        this.setState({selectedDish: dishId});
        console.log("this.state.selectedDish:");
        console.log(this.state.selectedDish);
    }

    render() {
        console.log('I\'m in MainComponent');

        console.log('props->dish:');
        console.log(this.state.dishes.filter((dish)=>{dish.id === this.state.selectedDish}).map((filteredDish)=>{<li>{filteredDish}</li>}))

        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} 
                    onClick={(dishId)=>this.onDishSelect(dishId)}/>
                {/* <Dishdetail dish={this.state.dishes.filter((dish)=>{dish.id === this.state.selectedDish})[0]}/> */}
            </div>
    );
    }
}

export default Main;
