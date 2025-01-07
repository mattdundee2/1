import NavButton from '../ui/nav-button';

export default function NavigationLinks() {
	return (
		<>
			<NavButton
				href="/"
				className="sm:hidden">
				Home
			</NavButton>
			<NavButton href="/solutions">Solutions</NavButton>
			<NavButton href="/about-us">About Us</NavButton>
			<NavButton href="/careers">Careers</NavButton>
			<NavButton
				primary
				href="/contact-us">
				Connect
			</NavButton>
		</>
	);
}
