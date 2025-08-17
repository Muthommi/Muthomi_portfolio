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
    <section
      id="projects"
      className="space-y-6"
    >
      <h2 className="text-3xl font-heading text-primary mb-4 border-l-4 border-primary pl-3">
	Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
	{projectList.map((project, idx) => (
	  <div
            key={idx}
            className="
	      p-6
	      bg-bg-light dark:bg-bg-dark
	      border border-gray-200 dark:border=gray-800
	      rounded-lg shadow hover:shadow-md
	      transition
	    "
	  >
	    <h3 className="text-2xl font-semibold mb-2">
	      {project.title}
	    </h3>

	    <p className="mb-4">

	    <div className="mb-4"
	      {project.tech.map((techItem) => (
	        <span
		  key={techItem}
		  className="
		    inline-block
		    bg-primary/10 text-primary
		    text-sm font-medium
		    px-2 py-1
		    rounded-full
		    mr-2
		  "
		>
	          {techItem}
	        </span>
	      ))}
	    </div>

	    <a
	      href={project.link}
	      target="_blank"
	      rel="noopener noreferrer"
	      className="
		inline-block
		bg-primary text-white
		px-4 py-2
		rounded
		hover:bg-primary/90
		transition
	      "
	    >
	      View on Github
	    </a>
	  </div>
	))}
      </div>
    </section>
  );
}
