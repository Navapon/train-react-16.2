import React, { Component } from 'react'
import {
    InputGroup, InputGroupAddon, Input, Button
} from 'reactstrap'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch'
export class SearchBox extends Component {

    render() {

        return (
            <InputGroup size="md">
                <InputGroupAddon addonType="prepend" >
                    <Button >
                        <FontAwesomeIcon icon={faSearch} className="mr-1" />
                        Search
                    </Button>
                </InputGroupAddon>
                <Input onChange={this.props.onSearch(this.props.searchText)} value={this.props.searchText} />
            </InputGroup>
        )
    }
}