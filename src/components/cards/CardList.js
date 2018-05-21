import React, { Component } from 'react'
import './Card.css'

export class CardList extends Component {


    handleClick = value => e => {
        alert('You are clicking : ' + value + ' color')
    }
    render() {
        return (
            <div>
                {this.props.colorList.map(colors => {
                    return <div key={colors.id}
                        className='cardlist'
                        style={{ backgroundColor: colors.color }}

                        onClick={this.handleClick(colors.color)}
                    >
                    </div>
                })}
            </div>
        )
    }
}