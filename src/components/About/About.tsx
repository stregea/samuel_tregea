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
   * Determines whether a given year is a leap year.
   *
   * A leap year is divisible by 4, except for years that are divisible by 100,
   * unless they are also divisible by 400.
   *
   * @param year - The year to check.
   * @returns `true` if the year is a leap year, otherwise `false`.
   */
  const isLeapYear = (year: number) => {
      return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
  };


  /**
   * Calculates the current age based on a fixed birthday (July 28, 1997).
   * The calculation considers leap years for the current year.
   * If today is the birthday, the age is rounded; otherwise, it is floored.
   *
   * @returns {number} The absolute value of the calculated age.
   */
  const getMyCurrentAge = () => {
      const today = new Date()
      const birthday = new Date('1997-07-28');
      const seconds = 60;
      const minutes = 60;
      const hours = 24;
      const days = isLeapYear(today.getFullYear()) ? 366 : 365;

      const mathFunction = today.getMonth() === birthday.getMonth() && today.getDate() === birthday.getDate() ? Math.round : Math.floor

      const yearDifference = (((today.getTime() - birthday.getTime()) / 1000) / (seconds * minutes * hours)) / days;
      const age = mathFunction(yearDifference);

      return Math.abs(age);
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
      <div className={styles.body}>
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
            <FadeIn delay={0.4}>
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
}