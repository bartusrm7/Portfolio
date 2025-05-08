import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function EmailContact() {
	const form = useRef<HTMLFormElement | null>(null);
	const [isEmailSent, setIsEmailSent] = useState<boolean>(false);

	const handleSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (form.current) {
			try {
				await emailjs.sendForm("service_xx39h54", "template_5s2iouk", form.current, "pXop66MwuaVy55jkL");
				form.current.reset();
				setIsEmailSent(true);
			} catch (error) {
				console.error("Error during send the message!", error);
			}
		}
	};

	return (
		<div>
			<Form className='mb-3' ref={form} onSubmit={handleSendEmail}>
				<div className='d-md-flex align-items-center'>
					<Form.Group className='w-100 me-md-3'>
						<Form.Label className='m-0'>Email</Form.Label>
						<Form.Control className='rounded-0' type='email' name='email_form' required />
					</Form.Group>
					<br />
					<Form.Group className='w-100'>
						<Form.Label className='m-0'>Subject</Form.Label>
						<Form.Control className='rounded-0' type='text' name='subject_form' required />
					</Form.Group>
				</div>
				<br />
				<Form.Group>
					<Form.Label className='m-0'>Message</Form.Label>
					<Form.Control className='rounded-0' as='textarea' rows={5} name='message_form' required />
				</Form.Group>
				<Button className='contact__send-btn w-100 mt-4 rounded-0' type='submit'>
					Send
				</Button>
			</Form>
			{isEmailSent && <div>Message sent successfully!</div>}
		</div>
	);
}
