import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-regular-svg-icons";

export default function AboutMe() {
	return (
		<div className='about-me'>
			<h1 className='section-label mt-3 mt-md-5'>About Me</h1>
			<Container className='col-lg-8 min-vh-100 d-flex justify-content-center align-items-center' id='about-me'>
				<Row className='mt-5 mt-md-0 d-flex flex-column flex-md-row'>
					<Col>
						<div>
							<h2 className='about-me__small-section-label mb-3'>Career</h2>
							<p>
								A self-taught frontend developer passionate about web development and modern technologies. Particularly
								skilled in React, JavaScript, TypeScript, and SCSS, with a keen interest in creating efficient,
								user-friendly, and visually appealing applications. Currently seeking an entry-level role to contribute
								to a dynamic team by tackling challenges, delivering innovative solutions, and gaining valuable
								experience in a collaborative environment. Key attributes include strong self-assurance, the ability to
								remain composed under pressure and a discipline, ready to take on difficult decisions.
							</p>
						</div>
					</Col>
					<div className='break-between-sections d-none d-md-flex'></div>
					<Col>
						<div>
							<h2 className='about-me__small-section-label mb-3'>Free time</h2>
							<p>
								Generally sport passionate, especially run and football. Self-developing is also very important,
								particularly when it comes to leading a healthy lifestyle, which includes regular physical activity,
								balanced nutrition, and mindfulness. I strongly believe that consistent small steps lead to big changes,
								whether in sports or personal growth. Staying active not only boosts physical health but also
								strengthens mental resilience and discipline. A hard running workout defines discipline and provides an
								opportunity to understand the limits of human endurance, teaching how to embrace discomfort and push
								beyond perceived boundaries.
							</p>
						</div>
					</Col>
				</Row>
			</Container>
			<FontAwesomeIcon className='about-me__background-detail1' icon={faSquare} />
			<FontAwesomeIcon className='about-me__background-detail2' icon={faSquare} />
		</div>
	);
}
