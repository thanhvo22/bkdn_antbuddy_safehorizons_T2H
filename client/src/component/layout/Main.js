import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown
, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';

function Main(){
    return(
        <div>
            <Navbar
                color="light"
                expand="md"
                light
            >
                <NavbarBrand href="/">T2H </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck(){}} />
                <Collapse navbar>
                <Nav
                    className="me-auto"
                    navbar
                >
                    <NavItem>
                    <NavLink href="/customer/">
                        Customer
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">
                        GitHub
                    </NavLink>
                    </NavItem>
                    
                </Nav>
                <NavbarText>
                    <UncontrolledDropdown  >
                        <DropdownToggle caret nav > {window.localStorage.getItem('user')}
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                                </DropdownItem>
                                <DropdownItem>
                                    Option 2
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Logout
                                </DropdownItem>
                            </DropdownMenu>
                        </DropdownToggle>
                    
                    </UncontrolledDropdown>
                    
                </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Main;