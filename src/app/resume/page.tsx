import type { Metadata } from "next";
import Image from "next/image";


export const metadata: Metadata = {
	title: "Resume - Amaan Bhati",
	description:
		"Amaan Bhati is a result driven final year Computer Science student with a strong aptitude for development and proficiency in modern frameworks. Eager to contribute technical skills and innovation to a dynamic software engineering role in a cutting-edge tech environment. Recognized for being a quick learner with the ability to swiftly adapt to new technology stacks.",
	openGraph: {
		type: "article",
		url: `https://amaanbhati.tech`,
		title: "Amaan Bhati’s Resume",
		description:
			"Digital version of of Amaan Bhati's resume in the form of a static and performance optimised webpage which can be downloaded as a pdf with clickable links as well.",
		images: [
			{
				url: `/ogs/og-bg.png`,
				width: 1200,
				height: 630,
				alt: "Amaan Bhati Resume",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Resume Amaan Bhati",
		description:
			"Digital version of of Amaan Bhati's resume in the form of a static and performance optimised webpage which can be downloaded as a pdf with clickable links as well.",
		images: ["/ogs/og-bg.png"],
	},
};

const resumeData = {
	workExperience: [
		{
			company: "KIIT Digital",
			// logo: ,
			role: "Web and Software Dev Intern",
			period: "Feb 2024 - May 2024",
			location: "On-site, Bbsr",
			website: "https://kiit.ac.in/", // Add the website link
			technologies: ["NextJS", "React", "TypeScript", "Tailwind CSS", "SCSS", "AWS", "HTML","CSS"],
			responsibilities: [
				"",
				
			],
		},
		{
			company: "Zivri",
			// logo: ,
			role: "Threejs Developer",
			period: "Jun 2023 - May 2023",
			location: "Remote",
			workType: "Freelance",
			website: "https://zivri.me",
			technologies: ["ReactJS", "Three.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React 3 Fiber"],
			responsibilities: [
				"",
				
			],
		},
		{
			company: "Microsoft Learn Student Ambassador, KIIT Chapter",
			// logo: ,
			role: "Web and Tech Lead",
			period: "May 2023 - August 2024",
			location: "On-Site, Bbsr",
			workType: "Leadership",
			website: "https://mlsakiit.com", // Add the website link
			technologies: ["React", "Node.js", "MongoDB", "Express.js", "TypeScript"],
			responsibilities: [
				"",
				
			],
		},
		
	],
	education: [
		{
			institution:
				"KIIT University, Bhubaneswar",
			// logo: ,
			degree: "B.Tech in Computer Science and Engineering",
			period: "2021 - 2025",
			location: "Bhubaneswar, India",
		},
		
	],
	volunteering: [
		{
			organization: "TEDXKIITUNIVERSITY",
			// logo: ,
			role: "Web Developer and OC member",
			period: "Apr 2023",
			location: "Bhubaneswar, India",
			responsibilities: [
				"",
				
			],
		},
	],
};

export default function WorkPage() {
	return (
		<section>
			<div className="flex">
				<h1 className='font-medium text-xl mb-0 mt-0 tracking-tight font-["monospace"]'>
					Amaan Bhati's Resume
				</h1>
			</div>

			{/* Work Section */}
			<div className="prose prose-neutral dark:prose-invert mt-0 mb-0">
				<h2 className="font-medium text-l mb-0 mt-0 ">Work Experience</h2>
				{resumeData.workExperience.map((job, index) => (
					<div key={index}>
						<h3 className="font-medium text-xl mb-0 mt-0 tracking-tighter flex items-center">
							{/*<Image
								src={job.logo}
								alt={job.company}
								width={20}
								height={20}
								className="mr-4"
							/>
							 Add website link */}
							<a
								target="_blank"
								rel="noopener noreferrer"
								className="ml-2"
								href={job.website}
							>
								{job.company}
							</a>
						</h3>
						<p className="text-neutral-600 dark:text-neutral-400 text-sm mb-0">
							{job.role} | {job.period} | {job.location}
							{job.workType && ` | ${job.workType}`}{" "}
							{/* Conditionally render Freelance */}
						</p>

						{/* Technologies used */}
						{job.technologies && (
							<p className="text-neutral-500 dark:text-neutral-400 text-sm mt-0 mb-0">
								<strong>Technologies:</strong> {job.technologies.join(", ")}
							</p>
						)}

						<ul className="mt-0 text-sm">
							{job.responsibilities.map((responsibility, rIndex) => (
								<li key={rIndex}>{responsibility}</li>
							))}
						</ul>
					</div>
				))}
			</div>

			<hr className="my-6 border-neutral-100 dark:border-neutral-800" />

			{/* Education Section */}
			<div className="prose prose-neutral dark:prose-invert">
				<h2 className="font-medium text-2xl mb-4">Education</h2>
				{resumeData.education.map((edu, index) => (
					<div key={index}>
						<h3 className="font-medium text-xl mb-1 tracking-tighter flex items-center">
							{edu.logo && (
								<Image
									src={edu.logo}
									alt={edu.institution}
									width={20}
									height={20}
									className={"mr-4"}
								/>
							)}
							<span className={edu.logo ? "ml-2" : ""}>{edu.institution}</span>
						</h3>
						<p className="text-neutral-600 dark:text-neutral-400 text-sm">
							{edu.degree} | {edu.period} | {edu.location}
						</p>
					</div>
				))}
			</div>

			<hr className="my-6 border-neutral-100 dark:border-neutral-800" />

			{/* Volunteering Section */}
			<div className="prose prose-neutral dark:prose-invert">
				<h2 className="font-medium text-2xl mb-4">Volunteering</h2>
				{resumeData.volunteering.map((volunteer, index) => (
					<div key={index}>
						<h3 className="font-medium text-xl mb-1 tracking-tighter flex items-center">
							{/*<Image
								src={volunteer.logo}
								alt={volunteer.organization}
								width={20}
								height={20}
								className="mr-4"
							/>*/}
							<span className={volunteer.logo && "ml-2"}>
								{volunteer.organization}
							</span>
						</h3>
						<p className="text-neutral-600 dark:text-neutral-400 text-sm">
							{volunteer.role} | {volunteer.period} | {volunteer.location}
						</p>
						<ul>
							{volunteer.responsibilities.map((responsibility, rIndex) => (
								<li key={rIndex}>{responsibility}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
