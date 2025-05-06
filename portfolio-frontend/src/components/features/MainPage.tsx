import { Col, Container, Row } from "react-bootstrap";

export default function MainPage() {
	return (
		<div className='main-page' id='home'>
			<div className='main-page__background-img'></div>
			<Container className='vh-100 d-flex justify-content-center align-items-center'>
				<Row>
					<Col className='text-center ps-3 pe-3'>
						<div
							className='main-page__main-description p-4 ps-2 pe-2 ps-md-5 pe-md-5 rounded-4'>
							<h1 className='fw-bold'>FRONTEND DEVELOPER</h1>
							<p className='fs-3 mb-0'>
								Hi, my name is Bartosz Bogucki
								<br />I creating websites and frontend applications
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
