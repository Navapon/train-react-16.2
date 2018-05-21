import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

export class NavbarHeader extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="secondary" dark expand="md">
                    <NavbarBrand href="/">My React Tutorial Website</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink to="/day7-2,3/recipe" className="nav-link" activeClassName="selected" >
                                    Recipe
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/day7-1/card" className="nav-link" activeClassName="selected">
                                    Card
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/day8-1,2/bitcoin" className="nav-link" activeClassName="selected" >
                                    Bitcoin
                                </NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    My Bitcoin
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <NavLink to="/day8-1,2/bitcoin/USD" >
                                            USD
                                        </NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink to="/day8-1,2/bitcoin/GBP" >
                                            GBP
                                         </NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink to="/day8-1,2/bitcoin/EUR" >
                                            EUR
                                         </NavLink>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Logout
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink to="/day8-3/antform" className="nav-link" activeClassName="selected" >
                                    AntForm
                                </NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    My Profile
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <NavLink to="/contact" >
                                            Option 1
                                        </NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink to="/contact" >
                                            Option 2
                                         </NavLink>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Logout
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}