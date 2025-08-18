const projectList = [
  {
    title: "SokoFresh",
    description: "Connects rural farmers with urban markets via a RESTful API.",
    tech: ["Python"],
    link: "https://github.com/Tinayo001/sokofreshh.git"
  },
  {
    title: "JIJENGE Budget Tracker",
    description: "Helps users plan budgets and track expenses with ease.",
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
        {projectList.map((project) => (
          <div
            key={project.title}
            className="
              p-6
              bg-bg-light dark:bg-bg-dark
              border border-gray-200 dark:border-gray-800
              rounded-lg shadow hover:shadow-md
              transition
            "
          >
            <h3 className="text-2xl font-semibold mb-2">
              {project.title}
            </h3>

            <p className="mb-4">{project.description}</p>

            <div className="mb-4">
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
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
