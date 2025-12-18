import { AI_SUPPORT_LINE, CONTACTS, POLICIES } from '@/ultis/constants';
import { Mail, MapPin, Smartphone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.scss';

const ICON_MAP = {
	phone: <Smartphone className="h-4 w-4" />,
	email: <Mail className="h-4 w-4" />,
	address: <MapPin className="h-4 w-4" />
};

export const Footer = () => {
	return (
		<>
			<div id="instagram" className="p-[15px]">
				<div className="w-full">
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-[10px] md:gap-[15px]">
						<div>
							<Image src="/images/home/instagram-1.png" width={300} height={300} alt="instagram" />
						</div>
						<div>
							<Image src="/images/home/instagram-2.webp" width={300} height={300} alt="instagram" />
						</div>
						<div>
							<Image src="/images/home/instagram-3.webp" width={300} height={300} alt="instagram" />
						</div>
						<div>
							<Image src="/images/home/instagram-4.webp" width={300} height={300} alt="instagram" />
						</div>
						<div>
							<Image src="/images/home/instagram-5.webp" width={300} height={300} alt="instagram" />
						</div>
						<div>
							<Image src="/images/home/instagram-6.webp" width={300} height={300} alt="instagram" />
						</div>
						<div className="hidden lg:block">
							<Image src="/images/home/instagram-7.webp" width={300} height={300} alt="instagram" />
						</div>
					</div>
				</div>
			</div>
			<div className={styles.footer} role="contentinfo">
				<div className={styles.footerLeft}>
					<div className={styles.content}>
						<div className="w-full flex flex-col justify-center items-start gap-4 m-auto md:m-0 md:mr-auto">
							<Link href="/">
								<Image
									src="/images/home/logo.webp"
									width={1000}
									height={2000}
									alt=""
									loading="eager"
									className="!object-contain"
								/>
							</Link>
							<p>
								Blue Ocean Nails Bar is a top-notch nail salon in Malden, MA 02148. Come to our nail
								salon and enjoy the most relaxing moment.
							</p>
						</div>
						<div>
							<h6>Policies</h6>
							{POLICIES.map((policy, index) => (
								<p key={index}>
									<Link href="#" className="hover:text-(--color-my-pink) duration-300">
										{policy}
									</Link>
								</p>
							))}
						</div>
						<div>
							<h6>AI Support Line</h6>
							{AI_SUPPORT_LINE.map((support, index) => (
								<p key={index}>{support}</p>
							))}
						</div>
						<div>
							<h6>Contacts</h6>
							{CONTACTS.map((item, index) => (
								<p key={index} className="flex items-center justify-center gap-1">
									{ICON_MAP[item.type]}
									{item.value}
								</p>
							))}
						</div>
					</div>
					<div className="flex flex-col md:flex-row items-end gap-[40px] lg:gap-[20px]">
						<div className="w-full flex-1">
							<h5>Stay Updated</h5>
							<div className="w-full flex flex-col md:flex-row items-center text-center gap-[16px] md:gap-[20px] mt-4">
								<input
									type="text"
									name="email"
									className="w-full bg-white !px-[10px]"
									placeholder="Enter Your Email"
								/>
								<button className="w-full md:w-[150px] uppercase border border-(--color-my-green) text-(--color-my-green) hover:bg-(--color-my-green) hover:text-white duration-300">
									Subscribe
								</button>
							</div>
						</div>
						<div className="w-full flex-1">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11778.908769394187!2d-71.03943498910365!3d42.43354142389836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e373fa19cf53cd%3A0x41a260e371bfc0d5!2sBlue%20Ocean%20Nail%20Salon!5e0!3m2!1sen!2s!4v1746654816875!5m2!1sen!2s"
								width="100%"
								height="300"
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						</div>
					</div>
					<div className="hidden min-[1025px]:block w-full text-right font-medium">
						<p>All Rights Reserved. Copyright ©2025 Blue Ocean Nails Bar</p>
					</div>
				</div>
				<div className={styles.footerRight}>
					<h5 className="!text-white">Contact Us</h5>
					<form className="flex flex-col gap-[30px]">
						<div className="w-full grid grid-cols-1 gap-[20px]">
							<input type="text" name="name" placeholder="Enter Your Name" />
							<input type="text" name="phone" placeholder="Enter Your Phone" />
							<input type="text" name="email" placeholder="Enter Your Email" />
							<textarea type="text" name="comment" placeholder="Enter Your Message"></textarea>
						</div>
						<button className="w-full bg-white border border-white text-black uppercase hover:bg-(--color-my-pink) hover:text-white">
							Contact now
						</button>
					</form>
				</div>
				<div className="min-[1025px]:hidden w-full text-center font-medium p-2">
					<p>All Rights Reserved. Copyright ©2025 Blue Ocean Nails Bar</p>
				</div>
			</div>
		</>
	);
};
