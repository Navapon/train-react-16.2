import React, { Component } from 'react';
import { RecipeItem } from './recipe-item/RecipeItem'
import { RecipeForm } from './recipe-form/RecipeForm'
import { SearchBox } from '../../components/utilities/SearchBox'
import {
    Container, Col, Row, Button
} from 'reactstrap';
export class Recipes extends Component {

    blogs = [
        {
            "title": "Curry Pot",
            "instruction": "this pot if you want to to much more than this please see inside",
            "ingredient": ["item1", "item2"],
            "image": "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=KPTNrvis"
        },
        {
            "title": "Grill style",
            "instruction": "this pot if you want to to much more than this please see inside",
            "ingredient": ["item1", "item2"],
            "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/31/73/20/picJ0oxvD.jpg"
        },
        {
            "title": "Blog Title 3",
            "instruction": "this pot if you want to to much more than this please see inside",
            "ingredient": ["item1", "item2"],
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa7cM1Hu1UIlUSvx-humAsgYMK7xjihNDO1nA-Pu_wejGKKOYc"
        },
    ]

    handleShowNew = () => {
        this.setState({
            showNew: !this.state.showNew
        })
    }

    addRecipe = (recipe, reset) => e => {
        this.setState({
            blogs: [...this.state.blogs, {
                "title": recipe.title,
                "instruction": recipe.instruction,
                "ingredient": recipe.ingredient,
                "image": recipe.image
            }],
            showNew: false
        })
        reset()
        alert('add complete')
    }

    deleteRecipe = name => e => {
        this.setState({
            blogs: this.state.blogs.filter(blog => blog.title !== name)
        });
    }

    searchRecipe = value => e => {
        this.setState({
            search: e.target.value
        })
    }

    state = {
        blogs: this.blogs,
        showNew: false,
        search: ''
    }

    render() {
        return (
            <div>
                <Container>
                    <Row style={{ display: this.state.showNew ? 'flex' : 'none' }}>
                        <Col sm='12' md={{ size: 8, offset: 2 }} >
                            <RecipeForm onAddRecipe={this.addRecipe} onShowNew={this.handleShowNew} />
                        </Col>
                    </Row>
                    <Row className='pt-4 pb-4 App'>
                        <Col sm='12' md={{ size: 8, offset: 2 }} >
                            {/* <input type='text' onChange={this.handleChange} value={this.state.search} /> */}
                            {/* <SearchBox onSearch={this.searchRecipe} searchText={this.state.search} /> */}
                        </Col>
                        <Col sm='12' md={{ size: 2 }} >
                            <Button color='success' onClick={this.handleShowNew} >New</Button>
                        </Col>
                    </Row>
                    <Row>
                        <RecipeItem blogs={this.state.blogs} onDelete={this.deleteRecipe} searchTxt={this.state.search} />
                    </Row>
                </Container>
            </div >
        );
    }
}
