const projects = [
  {
    title: "SokoFresh",
    description: "It connects rural area farmers with a ready market for their goods.",
    tech: ["Python"],
    link: "https://github.com/Tinayo001/sokofreshh.git"
  },
  {
    title: "JIJENGE Budget tracker",
    description: "An app aimed at helping people manage their finances better.",
    tech: ["Python"],
    link: "https://github.com/Muthommi/JIJENGE-Budget-tracker.git"
  }
];

export default function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="space-y-4">
        {projects.map((project, idx) => (
	  <div key={idx} className="border p-4 rounded dark:border-gray-700">
	    <h3 className="text-xl font-bold">{project.title}</h3>
	    <p>{project.description}</p>
	    <p className="text-sm text-gray-500">Tech: {project.tech.join(', ')}</p>
	    <a href={project.link} className="text-blue-underline" target="_blank" rel="noreferrer">
	      View on GitHub
	    </a>
	  </div>
	))}
      </div>
    </section>
  );
}
