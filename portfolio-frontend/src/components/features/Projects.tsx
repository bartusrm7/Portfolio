import { Button, Col, Container, Row } from "react-bootstrap";

export default function Projects() {
	return (
		<div className='projects scroll-animate-view'>
			<h1 className='section-label mt-3 mt-md-5'>Projects</h1>
			<Container
				className='col-sm-10 col-lg-8 col-xxl-6 min-vh-100 pt-5 d-flex flex-column justify-content-between align-items-center'
				id='projects'>
				<Row className='scroll-animate-view w-100 mt-5 pt-5'>
					<Col className='mb-5'>
						<div className='projects__project-item text-center text-md-start d-md-flex justify-content-between'>
							<div className='projects__project-description-container'>
								<h4 className='text-center text-md-start'>RunBoost</h4>
								<div className='projects__project-description'>
									Simple page about running equipments like shoes, watches etc.
								</div>
								<div className='projects__project-technologies mt-3 mb-3 m-md-0'>
									<span className='projects__technologies-used fw-bold'>Technologies</span>
									<div>React + Vite, SCSS</div>
								</div>
							</div>
							<div className='projects__project-img-container ms-md-3'>
								<div className='projects__project-img runboost m-auto'></div>
								<div className='d-flex mt-3'>
									<a
										href='https://runboost.onrender.com/'
										target='blank'
										className='projects__links-to-move me-3 w-100'>
										<Button className='projects__links-btn rounded-0 w-100'>Preview</Button>
									</a>
									<a
										href='https://github.com/bartusrm7/RunBoost'
										target='blank'
										className='projects__links-to-move w-100'>
										<Button className='projects__links-btn rounded-0 w-100'>GitHub</Button>
									</a>
								</div>
							</div>
						</div>
					</Col>
				</Row>
				<Row className='scroll-animate-vieww-100'>
					<Col className='mb-5'>
						<div className='projects__project-item text-center text-md-end d-md-flex flex-row-reverse justify-content-between'>
							<div className='projects__project-description-container'>
								<h4 className='text-center text-md-end'>WorkTracker</h4>
								<div className='projects__project-description'>
									WorkTracker is an application for managing tasks and monitoring progress. Application allows users
									add, edit, mark and remove tasks. Users can tracks their progress daily.
								</div>
								<div className='projects__project-technologies mt-3 mb-3 m-md-0'>
									<span className='projects__technologies-used fw-bold'>Technologies</span>
									<div>React + Vite, TypeScript, NodeJS, Redux, MySQL, SCSS, Bootstrap, JWT, Material UI</div>
								</div>
							</div>
							<div className='projects__project-img-container me-md-3'>
								<div className='projects__project-img worktracker m-auto'></div>
								<div className='d-flex mt-3'>
									<a href='' target='blank' className='projects__links-to-move me-3 w-100'>
										<Button className='projects__links-btn rounded-0 w-100'>Preview</Button>
									</a>
									<a
										href='https://github.com/bartusrm7/WorkTracker'
										target='blank'
										className='projects__links-to-move w-100'>
										<Button className='projects__links-btn rounded-0 w-100'>GitHub</Button>
									</a>
								</div>
							</div>
						</div>
					</Col>
				</Row>
				<Row className='scroll-animate-view w-100'>
					<Col className='mb-5'>
						<div className='projects__project-item text-center text-md-start d-md-flex justify-content-between'>
							<div className='projects__project-description-container'>
								<h4 className='text-center text-md-start'>CarService</h4>
								<div className='projects__project-description'>
									Single page about car services, how the mechanic can help fixed car and solve potencial problems.
								</div>
								<div className='projects__project-technologies mt-3 mb-3 m-md-0'>
									<span className='projects__technologies-used fw-bold'>Technologies</span>
									<div>React + Vite, SCSS</div>
								</div>
							</div>
							<div className='projects__project-img-container ms-md-3'>
								<div className='projects__project-img carservice m-auto'></div>
								<div className='d-flex mt-3'>
									<a
										href='https://carservice-4nvl.onrender.com/'
										target='blank'
										className='projects__links-to-move me-3 w-100'>
										<Button className='projects__links-btn rounded-0 w-100'>Preview</Button>
									</a>
									<a
										href='https://github.com/bartusrm7/CarService'
										target='blank'
										className='projects__links-to-move w-100'>
										<Button className='projects__links-btn rounded-0 w-100'>GitHub</Button>
									</a>
								</div>
							</div>
						</div>
					</Col>
				</Row>
				<Row className='scroll-animate-view w-100 mb-5 pb-5'>
					<Col>
						<div className='projects__project-item text-center text-md-end d-md-flex flex-row-reverse justify-content-between'>
							<div className='projects__project-description-container'>
								<h4 className='text-center text-md-end'>FitGuardian</h4>
								<div className='projects__project-description'>
									FitGuardian is a project designed to help users track calories, promote a healthy lifestyle and
									generally care of our health.
								</div>
								<div className='projects__project-technologies mt-3 mb-3 m-md-0'>
									<span className='projects__technologies-used fw-bold'>Technologies</span>
									<div>React + Vite, SCSS, Node.JS, SQLite</div>
								</div>
							</div>
							<div className='projects__project-img-container me-md-3'>
								<div className='projects__project-img fitguardian m-auto'></div>
								<div className='d-flex mt-3'>
									<a href='' target='blank' className='projects__links-to-move me-3 w-100'>
										<Button className='projects__links-btn rounded-0 w-100'>Preview</Button>
									</a>
									<a
										href='https://github.com/bartusrm7/FitGuardian'
										target='blank'
										className='projects__links-to-move w-100'>
										<Button className='projects__links-btn rounded-0 w-100'>GitHub</Button>
									</a>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
