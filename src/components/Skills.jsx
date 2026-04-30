import {
  FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub, FaPython
} from "react-icons/fa";
import {
  SiJavascript, SiTailwindcss, SiC, SiCplusplus, SiVite
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
  { name: "React", icon: <FaReact />, color: "text-cyan-400" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-teal-400" },
  { name: "Python", icon: <FaPython />, color: "text-blue-400" },
  { name: "C", icon: <SiC />, color: "text-blue-600" },
  { name: "C++", icon: <SiCplusplus />, color: "text-blue-700" },
  { name: "Git", icon: <FaGitAlt />, color: "text-orange-600" },
  { name: "GitHub", icon: <FaGithub />, color: "text-gray-400" },
  { name: "Vite", icon: <SiVite />, color: "text-purple-400" },
];

function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-black text-white">

      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-3">
          My <span className="text-blue-500">Skills</span>
        </h2>

        <p className="text-center text-gray-400 mb-12 text-sm">
          Technologies I use for frontend development
        </p>

        {/* Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center gap-2 bg-gray-900 border border-gray-800 rounded-xl py-6 px-3 hover:border-blue-500 transition"
            >
              <div className={`text-4xl ${skill.color}`}>
                {skill.icon}
              </div>

              <p className="text-gray-300 text-sm font-medium text-center">
                {skill.name}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;