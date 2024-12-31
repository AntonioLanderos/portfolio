import { motion } from 'framer-motion'

const skills = [
    { name: 'Python', level: 95 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'C/C++', level: 85 },
    { name: 'Node.js', level: 90 },
    { name: 'React', level: 80 },
    { name: 'TypeScript', level: 80 },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="mb-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="space-y-6">
        {skills.map((skill) => (
          <div key={skill.name} className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-blue-200 text-blue-800">
                  {skill.name}
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-blue-600">
                  {skill.level}%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
              <motion.div
                style={{ width: `${skill.level}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

