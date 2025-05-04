import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";
import Navigation from "../navigation/Navigation";

export default function MainPage() {
	return (
		<div className='main-page' id='home'>
			<Container className='vh-100 d-flex justify-content-center align-items-center'>
				<Row>
					<Col className='text-center'>
						<div className='main-page__main-description'>
							<h1 className='p-3 ps-4 pe-4 rounded-4'>
								<b>FRONTEND DEVELOPER</b>
							</h1>
							<p className='fs-3'>
								Hi, my name is Bartosz Bogucki
								<br />
								Webstie creator
							</p>
						</div>

						<div className='mt-5'>
							<p>Check my resume below</p>
							<Button className='main-page__check-resume-btn m-0 rounded-4 fs-1'>
								<FontAwesomeIcon className='main-page__fa-hand-icon' icon={faHandPointer} />
							</Button>
						</div>
						<Navigation />
					</Col>
				</Row>
			</Container>
		</div>
	);
}
