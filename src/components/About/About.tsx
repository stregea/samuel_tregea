import styles from "./About.module.css";
import Section from "@/components/utils/Section/Section";
import Header from "@/components/utils/Header/Header";
import FadeIn from "@/components/utils/FadeIn/FadeIn";
import Highlight from "@/components/utils/Highlight/Highlight";

/**
 * Renders the About section of the application, introducing myself and highlighting
 * professional experience, technical skills, and areas of expertise.
 *
 * @component
 * @example
 * <About />
 * 
 * @returns {JSX.Element} The rendered About section component.
 */
export default function About() {


	/**
	 * Calculates the current age based on a fixed birthday (July 28, 1997).
	 *
	 * @returns {number} The absolute value of the calculated age.
	 */
	const getMyCurrentAge = () => {
		// Convert the input string into a Date object
		const birthDate = new Date("1997-07-28");
		const today = new Date();

		let age = today.getFullYear() - birthDate.getFullYear();
		const monthDiff = today.getMonth() - birthDate.getMonth();
		const dayDiff = today.getDate() - birthDate.getDate();

		// Adjust age if birthday hasn't occurred yet this year.
		if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
			age--;
		}

		return age;
	};

	const intro = (
		<p>
			Hi, I’m <Highlight>Sam Tregea</Highlight> <span className={styles.namePronunciation}>(tree-gay)</span>, a {getMyCurrentAge()} year old software engineer passionate about building scalable, user-focused solutions
			across the tech stack. With professional experience in both front-end and back-end development, I specialize in
			creating responsive applications and architecting robust RESTful microservices.
		</p>
	);

	const hobbies = (
		<p>
			Outside of work, I enjoy training <Highlight>Brazilian Jiu Jitsu</Highlight>, playing <Highlight>Soccer</Highlight>, and spending time with my friends and family.
		</p>
	);

	const languages = ["Java", "Python", "JavaScript", "TypeScript", "C#", "C/C++"];
	const frameworks = ["Spring Boot", "React", "Angular", "Django", "Flask", ".NET MVC"];

	return (
		<Section id="aboutMe">
			<Header>{"// about me"}</Header>
			<div className={styles.about}>
				{intro}
				<p>
					{"Here are some of the languages, frameworks, and tools I work with:"}
				</p>
				<div className={styles.skills}>
					<div>
						{"Languages:"}
						<FadeIn delay={0.2}>
							<ul className={styles.skillsList}>
							{languages.map((language) => (
								<li key={language}>{language}</li>
							))}
							</ul>
						</FadeIn>
					</div>
					<div>
						{"Frameworks:"}
						<FadeIn delay={0.5}>
							<ul className={styles.skillsList}>
							{frameworks.map((framework) => (
								<li key={framework}>{framework}</li>
							))}
							</ul>
						</FadeIn>
					</div>
				</div>
				{hobbies}
			</div>
		</Section>
	);
};