import React, { Component } from 'react'
import './Card.css'
import { CardList } from './CardList.js'

export class Card extends Component {


    color = ['red', 'blue', 'green', 'pink', 'purple']

    generateCard = (list, number) => {
        let resultList = []
        let id = 0
        list.map((color, index) => {
            for (let i = 0; i < number; i++) {
                resultList.push(
                    { id: id++, color: color }
                )
            }
        })
        return resultList
    }

    handleShuffer = ([...arr]) => {
        let m = arr.length;
        while (m) {
            const i = Math.floor(Math.random() * m--);
            [arr[m], arr[i]] = [arr[i], arr[m]];
        }
        return arr;
    };

    handleSufferState = () => {
        this.setState({
            colorList: this.handleShuffer(this.generateCard(this.color, 2))
        })
    }

    state = {
        colorList: this.handleShuffer(this.generateCard(this.color, 2))
    }

    render() {
        return (
            <div>
                <CardList colorList={this.state.colorList} />
                <div style={{ textAlign: 'center' }}>
                    <input type='submit'
                        onClick={this.handleSufferState} value='shuffle me'
                        style={{ backgroundColor: 'aquablue', padding: 3 }}
                    />
                </div>
            </div>
        );
    }
}