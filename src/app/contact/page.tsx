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
		
	);
}
