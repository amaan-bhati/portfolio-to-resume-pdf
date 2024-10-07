import { Metadata } from "next";
import Image from "next/image";

const socials = [
	{
		name: "Email",
		url: "mailto:amaanbhati49@gmail.com",
		display: "amaanbhati49@gmail.com",
		logo: "", // Path to the email logo
	},
	{
		name: "GitHub",
		url: "https://github.com/amaan-bhati",
		display: "github.com/amaan-bhati",
		logo: "", // Path to the GitHub logo
	},
	{
		name: "X",
		url: "https://x.com/front_end_er",
		display: "x.com/front_end_Er",
		logo: "", // Path to the X logo
	},
	{
		name: "Peerlist",
		url: "https://peerlist.io/amaanbhati",
		display: "peerlist.io/amaanbhati",
		logo: "", // Path to the Peerlist logo
	},
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/amaan-bhati",
		display: "linkedin.com/in/amaan-bhati",
		logo: "/logos/linkedin.svg", // Path to the LinkedIn logo
	},

];

export const metadata: Metadata = {
	title: "Contact - Amaan Bhati",
	description:
		"Get in touch with Amaan Bhati via email, GitHub, Peerlist, LinkedIn, and more.",
	openGraph: {
		title: "Contact - Amaan Bhati",
		description:
			""
		url: "",
		siteName: "Amaan Bhati's resume",
		images: [
			{
				url: "", // Add a relevant Open Graph image for social sharing
				width: 1200,
				height: 630,
				alt: "Contact - Amaan Bhati",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Contact - Amaan Bhati",
		description:
			"",
		images: [""],
	},
};

export default function ContactPage() {
	return (
		<section>
			<h1 className='font-medium text-2xl mb-6 tracking-tight font-["monospace"]'>
				Contact 📧
			</h1>

			{/* Social Links */}
			<div className="prose prose-neutral dark:prose-invert">
				<p>Feel free to reach out to me via any of the following platforms:</p>

				<ul className="pl-0">
					{socials.map((social, index) => (
						<li key={index} className="flex items-center mb-4">
							<Image
								src={social.logo}
								alt={social.name}
								width={24}
								height={24}
								className="!mr-2"
							/>

							<div className="flex items-center not-prose">
								<strong>{social.name}:</strong>{" "}
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={social.url}
									className="ml-2 underline"
								>
									{social.display}
								</a>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
