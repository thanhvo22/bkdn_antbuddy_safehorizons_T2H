import { Redirect } from "react-router-dom";
//import Cookies from "js-cookie";
//import axios from "axios";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { BsFillCartCheckFill } from "react-icons/bs";

function Main() {
  const user = window.localStorage.getItem("user");
  if (!user) {
    return <Redirect to="/login" />;
  }
  // const valid = Cookies.get("jwt");
  // if (!valid) {
  //   return <Redirect to="/login" />;
  // }

  const logOut = async () => {
    await fetch("http://localhost:9000/auth/logout", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      credentials: "include",
    });
  };
  return (
    <div>
      <Navbar color="secondary"
    container
    dark
    expand
    fixed=""
    full>
        <NavbarBrand href="/">T2H </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/admin/customer">Customer</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin/products">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin/statistics">Statistics</NavLink>
            </NavItem>

            
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
          {/* giohang */}
          <BsFillCartCheckFill />
          {/* ... */}
          <NavbarText>
            <UncontrolledDropdown>
              <DropdownToggle caret nav>
                {window.localStorage.getItem("user")}
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <a className="logout_btn" onClick={logOut} href="/login">
                      Logout
                    </a>{" "}
                  </DropdownItem>
                </DropdownMenu>
              </DropdownToggle>
            </UncontrolledDropdown>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Main;
