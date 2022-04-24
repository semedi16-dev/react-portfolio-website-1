import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
		<section id="contact">
			<h5>Get In Out</h5>
			<h2>Contact Me</h2>

			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<MdOutlineEmail />
						<h4>Email</h4>
						<h5>bayuchandra.s@gmail.com</h5>
						<a href="mailto:bayuchandra.s@gmail.com" target="_blank">
							Send a message
						</a>
					</article>
					<article className="contact__option">
						<RiMessengerLine />
						<h4>Messager</h4>
						<h5>Bayu Candra</h5>
						<a href="https://m.me/bayuchandrasemedhi" target="_blank">
							Send a message
						</a>
					</article>
					<article className="contact__option">
						<BsWhatsapp />
						<h4>WhatsApp</h4>
						<h5>+6288801902885</h5>
						<a
							href="https://api.whatsapp.com/send?phone=+6288801902885"
							target="_blank"
						>
							Send a message
						</a>
					</article>
				</div>
			</div>
		</section>
	);
}

export default Contact
