import AboutMe from "./components/features/AboutMe";
import Contact from "./components/features/Contact";
import MainPage from "./components/features/MainPage";
import Projects from "./components/features/Projects";
import Technologies from "./components/features/Technologies";
import Navigation from "./components/navigation/Navigation";

export default function App() {
	return (
		<>
			<Navigation />
			<MainPage />
			<AboutMe />
			<Projects />
			<Technologies />
			<Contact />
		</>
	);
}
