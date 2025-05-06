import { Cross as Hamburger } from "hamburger-react";
import { Container, Nav, NavItem, NavLink } from "react-bootstrap";
import { navLinks } from "./navLinks";
import { useState } from "react";

export default function Navigation() {
	const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

	return (
		<Container className='navigation'>
			<div className='navigation__menu p-3 p-md-5 d-flex justify-content-end'>
				<Hamburger toggled={isOpenMenu} toggle={() => setIsOpenMenu(!isOpenMenu)} />
			</div>

			<Nav
				className={`navigation__nav-menu vh-100 vw-100 d-flex flex-column justify-content-evenly align-items-center ${
					isOpenMenu ? "opened-menu" : ""
				}`}>
				{navLinks.map(navLink => (
					<NavItem key={navLink.label}>
						<NavLink className='navigation__nav-item fs-3' href={navLink.href} onClick={() => setIsOpenMenu(false)}>
							{navLink.label}
						</NavLink>
					</NavItem>
				))}
			</Nav>
		</Container>
	);
}
