import React, { Component } from 'react'
import {
    Input, Form, FormGroup, Label, Button, Jumbotron
} from 'reactstrap';

const initialState = {
    title: '',
    instruction: '',
    ingredient: [''],
    image: '',
};

export class RecipeForm extends Component {

    handleInputChange = e => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleInputArray = (name, index) => (e) => {
        this.setState({
            [name]: this.state[name].map((value, i) => (i === index ? e.target.value : value))
        })
    }
    reset = () => {
        this.setState(initialState)
    }

    addIngredient = e => {
        this.setState({
            ingredient: [...this.state.ingredient, '']
        })
        console.log(this.state.ingredient)
    }

    saveRecipe = value => e => {
        e.preventDefault()
    }

    state = (initialState)

    render() {
        return (
            < Jumbotron >
                <Form onSubmit={this.saveRecipe}>
                    <legend className="text-center">ADD RECIPE</legend>
                    <Button color="danger" className="float-right mb-3" onClick={this.props.onShowNew} >Close</Button>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input type="text" name="title" id="title"
                            value={this.state.title} onChange={this.handleInputChange}
                            placeholder="put your title ..." />
                    </FormGroup>
                    <FormGroup>
                        <Label for="instruction">Instruction</Label>
                        <Input type="text" name="instruction" id="instruction"
                            value={this.state.instruction} onChange={this.handleInputChange}
                            placeholder="put your instruction ..." />
                    </FormGroup>
                    <FormGroup>
                        <Label for="ingredient">Ingredient</Label>
                        {this.state.ingredient.map((ingre, index) => (
                            <Input key={index} type="text" name="ingredient{index}" id="ingredient{index}"
                                value={ingre} onChange={this.handleInputArray("ingredient", index)}
                                placeholder="put your ingredient ..." />
                        ))}
                        <Button color="danger" type="button" onClick={this.addIngredient} className="float-right my-2" >
                            +
                        </Button>
                    </FormGroup>
                    <FormGroup>
                        <Label for="image">Image</Label>
                        <Input type="text" name="image" id="image"
                            value={this.state.image} onChange={this.handleInputChange}
                            placeholder="put your image ..." />
                    </FormGroup>
                    <div style={{ textAlign: 'center' }}>
                        <Button color="warning"
                            onClick={this.props.onAddRecipe(this.state, this.reset)}>Submit
                        </Button>
                    </div>
                </Form>
            </Jumbotron >
        )
    }
}