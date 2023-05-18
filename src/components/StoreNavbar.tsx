import { useState } from 'react';
import {
    Collapse,
    Navbar,
    Nav,
    NavItem,
    NavLink,
    NavbarBrand,
    NavbarToggler,
} from 'reactstrap';
import { BagFill } from 'react-bootstrap-icons';

export const StoreNavbar = ({
    ...props
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="dark" expand="lg" dark {...props}>
            <NavbarBrand href="/">
                My Store
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/products">Products</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
            <Nav className="me-auto" navbar>
                <NavLink href="/signup">Sign up</NavLink>
                <NavLink href="/login">Login</NavLink>
                <NavLink href="/cart">
                    <BagFill color="white" />
                </NavLink>
            </Nav>
        </Navbar>
    );
};
