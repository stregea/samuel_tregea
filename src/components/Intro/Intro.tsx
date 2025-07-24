import { Typewriter } from "react-simple-typewriter";

export default function Intro() {
  return (
    <div style={{ margin: "1rem 0", fontSize: "2.5rem" }}>
      {"hi, im "}
      <span style={{ color: "var(--blue-bright)" }}>
        <Typewriter
          words={["an Engineer", "a creator", "sam"]}
          loop={1}
          cursor
          typeSpeed={100}
        />
      </span>
    </div>
  );
}