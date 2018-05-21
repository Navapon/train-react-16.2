import React, { Component } from 'react'
import './RandomBox.css'
import { Jumbotron, Container } from 'reactstrap'
export class RandomBox extends Component {
    render() {

        const boxColor = ['red', 'blue', 'green', 'purple', 'pink']
        const randomColor = boxColor => {
            let rand = Math.floor(Math.random() * boxColor.length)
            return boxColor[rand]
        }
        const randomSize = (min, max) => (
            Math.random() * (max - min) + min
        )
        console.log(randomSize(20, 40))
        // var rand = myArray[Math.floor(Math.random() * myArray.length)];

        return (
            <div>
                <Jumbotron fluid style={{ backgroundColor: randomColor(boxColor) }}>
                    <Container fluid>
                        <h1 className="display-3" style={{ fontSize: randomSize(20, 40) }}>Random Box</h1>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}