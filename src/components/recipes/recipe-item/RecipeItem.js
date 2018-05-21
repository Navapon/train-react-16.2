import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';

export class RecipeItem extends Component {
    render() {
        const blogList = this.props.blogs.filter(fil => (this.props.searchTxt === '') || (new RegExp(this.props.searchTxt, 'i')).test(fil.title)).map(blog => (
            <React.Fragment>
                <Col md="4">
                    <Card key={blog.title}>
                        <CardImg top width="100%" src={blog.image} alt="Card image cap" />
                        <CardBody>
                            <CardTitle className="text-left">{blog.title}</CardTitle>
                            <CardSubtitle className="text-left">{blog.instruction}</CardSubtitle>
                            <CardText className="pt-3">
                                <ul>
                                    {blog.ingredient.map(ingre => (
                                        <li>
                                            {ingre}
                                        </li>
                                    ))}
                                </ul>
                            </CardText>
                            <Button color='danger' onClick={this.props.onDelete(blog.title)}> Delete</Button>
                        </CardBody>
                    </Card>
                </Col>
            </React.Fragment >
        ))

        return blogList
    }
}
