import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-regular-svg-icons";

export default function AboutMe() {
	return (
		<div className='about-me'>
			<h1 className='section-label mt-5'>About Me</h1>
			<Container
				className='col-lg-8 min-vh-100 d-flex flex-column justify-content-center align-items-center'
				id='about-me'>
				<Row className='mt-5 mt-md-0 pt-5 d-flex flex-column flex-md-row'>
					<div>
						<h2 className='about-me__small-section-label mb-3'>Beginning</h2>
						<p>
							My journey into programming began two years ago. At first, it was more about challenging myself and
							stepping out of my comfort zone. Each new problem I solved and every line of code I wrote not only
							improved my technical skills but also strengthened my patience, creativity, and logical thinking.
							<br />
							Over time, creating websites transformed from just a hobby into a potential career path. I started to
							appreciate the possibilities that frontend development offers, especially the ability to create intuitive,
							aesthetically pleasing, and user-friendly applications. I realized that I could combine my passion for
							technology with work that has a real impact on people daily lives. Today, I am determined to continue down
							this path, enhance my skills, and fully immerse myself in the world of software development.
						</p>
					</div>
					<Col>
						<div>
							<h2 className='about-me__small-section-label mb-3'>Career</h2>
							<p>
								A self-taught frontend developer passionate about web development and modern technologies. My skills
								include working with React, JavaScript, TypeScript, and SCSS, and I enjoy creating efficient,
								user-friendly, and visually appealing applications. Currently I am looking for an entry-level role to
								contribute to a dynamic team by tackling challenges, delivering innovative solutions, and gaining
								valuable experience in a collaborative environment. My key attributes include strong self-assurance, the
								ability to remain composed under pressure and a discipline, ready to make difficult decisions when
								required.
							</p>
						</div>
					</Col>
					<Col>
						<div>
							<h2 className='about-me__small-section-label mb-3'>Free time</h2>
							<p>
								Generally sport passionate, especially run and football. Self-developing is also very important,
								particularly when it comes to leading a healthy lifestyle, which includes regular physical activity,
								balanced nutrition, and mindfulness. I strongly believe that consistent small steps lead to big changes,
								whether in sports or personal growth. Staying active not only boosts physical health but also
								strengthens mental resilience and discipline. A hard running workout defines discipline and allow me to
								understand my limits, teaching me how to embrace discomfort and push beyond my perceived boundaries.
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
