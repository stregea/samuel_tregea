import styles from "./About.module.css";
import FadeIn from "../FadeIn/FadeIn";


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
    <p className="about-intro">
      Hi, I’m <strong>Sam Tregea</strong>, a {getMyCurrentAge()} software engineer passionate about building scalable, user-focused solutions
      across the tech stack. With professional experience in both front-end and back-end development, I specialize in
      creating responsive applications and architecting robust RESTful microservices.
    </p>
  );

  const languages = ["Java", "Python", "JavaScript", "TypeScript", "C#", "C/C++"];
  const frameworks = ["Spring Boot", "React", "Angular", "Django", "Flask", ".NET MVC"];
  const tools = ["Docker", "Kubernetes", "Git", "AWS", "Azure", "OracleDB", "MongoDB"];

  return (
    <FadeIn>
      <section className={styles.about} id="aboutMe">
        <h2 className="heading">
            {"// About me"}
        </h2>
        <div>
          {intro}
          <br />
          <p>
            Here are some of the languages, frameworks, and tools I work with:
          </p>
          <br />
          <ul className={styles.skillsList}>
            <li><strong>Languages:</strong> {languages.join(", ")}</li>
            <li><strong>Frameworks:</strong> {frameworks.join(", ")}</li>
            <li><strong>Tools:</strong> {tools.join(", ")}</li>
          </ul>
        </div>
      </section>
    </FadeIn>
  );
}