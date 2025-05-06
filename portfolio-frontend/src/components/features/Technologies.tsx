import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import {
	backendTechnologies,
	frontendTechnologies,
	languagesTechnologies,
	otherTechnologies,
} from "./technologiesArrays";

export default function Technologies() {
	return (
		<div className='technologies'>
			<h1 className='section-label mt-5'>Technologies</h1>
			<Container
				className='col-sm-10 col-lg-8 col-xxl-6 min-vh-100 d-flex flex-column justify-content-center align-items-center'
				id='technologies'>
				<Row className='mt-5 mt-md-0 pt-5 pt-md-0 w-100 d-block d-md-flex'>
					<Col className="me-md-3">
						<h3 className="mb-3">Frontend</h3>
						<div>
							<ul className='technologies__items-list'>
								{frontendTechnologies.map(frontend => (
									<li
										className='technologies__technology-item mt-2 d-flex justify-content-between align-items-center'
										key={frontend.label}>
										{frontend.label}
										<div className='technologies__technology-item-range'>
											{Array(5)
												.fill(0)
												.map((_, index) => (
													<FontAwesomeIcon
														className={index < frontend.value ? "gold" : "white"}
														key={index}
														icon={index < frontend.value ? solidStar : regularStar}
													/>
												))}
										</div>
									</li>
								))}
							</ul>
						</div>
					</Col>
					<Col>
						<h3 className="mb-3">Backend</h3>
						<div>
							<ul className='technologies__items-list'>
								{backendTechnologies.map(backend => (
									<li
										className='technologies__technology-item mt-2 d-flex justify-content-between align-items-center'
										key={backend.label}>
										{backend.label}
										<div className='technologies__technology-item-range'>
											{Array(5)
												.fill(0)
												.map((_, index) => (
													<FontAwesomeIcon
														className={index < backend.value ? "gold" : "white"}
														key={index}
														icon={index < backend.value ? solidStar : regularStar}
													/>
												))}
										</div>
									</li>
								))}
							</ul>
						</div>
					</Col>
				</Row>
				<Row className='w-100 d-block d-md-flex'>
					<Col className="me-md-3">
						<h3 className="mb-3">Other</h3>
						<div>
							<ul className='technologies__items-list'>
								{otherTechnologies.map(other => (
									<li
										className='technologies__technology-item mt-2 d-flex justify-content-between align-items-center'
										key={other.label}>
										{other.label}{" "}
										<div className='technologies__technology-item-range'>
											{Array(5)
												.fill(0)
												.map((_, index) => (
													<FontAwesomeIcon
														className={index < other.value ? "gold" : "white"}
														key={index}
														icon={index < other.value ? solidStar : regularStar}
													/>
												))}
										</div>
									</li>
								))}
							</ul>
						</div>
					</Col>
					<Col>
						<h3 className="mb-3">Languages</h3>
						<div>
							<ul className='technologies__items-list'>
								{languagesTechnologies.map(language => (
									<li
										className='technologies__technology-item mt-2 d-flex justify-content-between align-items-center'
										key={language.label}>
										{language.label}
										<div className='technologies__technology-item-range languages-color fw-bold'>{language.value}</div>
									</li>
								))}
							</ul>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
