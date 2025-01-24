import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'A basic functional interface of a basketball scoreboard, using HTML, CSS and Js',
    image: '/images/bball-scoreboard.png',
    link: 'https://basketball-scoreboard-iota.vercel.app',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'A React-based task organizer',
    image: '/images/under-construction.png',
    link: 'https://www.jimdo.com/blog/under-construction-page/',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'An animated portfolio site',
    image: '/images/under-construction.png',
    link: 'https://www.jimdo.com/blog/under-construction-page/',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="mb-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="p-6 rounded-lg bg-gray-800 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05, cursor: 'pointer' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => window.open(project.link)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            <h3 className="text-xl font-semibold mb-2 relative z-10">{project.title}</h3>
            <p className="text-gray-300 relative z-10">{project.description}</p>
            <div className="pt-8 relative w-full h-48 overflow-hidden rounded-lg">
              {/* Wrapper div for the blur effect */}
              <div className="absolute inset-0 backdrop-blur-sm group-hover:backdrop-blur-none transition-all duration-300">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill // This makes the image fill the container
                  className="h-auto max-w-lg mx-auto"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
