import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import EmailContact from "./EmailContact";

export default function Contact() {
	return (
		<div className='contact scroll-animate-view'>
			<div className='contact__background-img'></div>
			<h1 className='section-label mt-5'>Contact</h1>
			<Container id='contact'>
				<Row className='pt-5 pb-xl-3 d-flex flex-column flex-lg-row justify-content-center align-items-center align-items-lg-start'>
					<Col className='scroll-animate-view col-md-10 col-lg-8 col-xl-6 pt-5 pb-5 mt-5'>
						<h3 className='mb-3'>Send a message</h3>
						<EmailContact />
					</Col>
					<Col className='scroll-animate-view col-md-10 col-lg-8 col-xl-6 pt-xl-5 pb-5 mt-xl-5'>
						<h3 className='mb-3'>Get in touch</h3>

						<div>
							<span className='contact__small-title fs-5 d-flex'>Get resume</span>
							<a
								className='contact__download-cv'
								href='../../../public/Bartosz Bogucki CV Frontend.pdf'
								download='Bartosz Bogucki CV Frontend'>
								Click to download a CV
							</a>
						</div>
						<div>
							<span className='contact__small-title fs-5 d-flex'>Email</span>
							<span>bbogucki7@gmail.com</span>
						</div>
						<div>
							<span className='contact__small-title fs-5 d-flex'>Location</span>
							<span>Katowice, Silesian</span>
						</div>
						<div className='pe-3'>
							<span className='contact__small-title fs-5 d-flex'>GitHub</span>
							<a className='fs-3' href='https://github.com/bartusrm7' target="blank">
								<FontAwesomeIcon className='contact__link-btn' icon={faGithub} />
							</a>
						</div>
						<div>
							<span className='contact__small-title fs-5 d-flex'>Linkedin</span>
							<a className='fs-3' href='https://www.linkedin.com/in/bartosz-bogucki-545196304/' target="blank">
								<FontAwesomeIcon className='contact__link-btn' icon={faLinkedin} />
							</a>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
