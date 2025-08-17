export default function Resume() {
  return (
    <section
      id="resume"
      className="space-y-4"
    >
      <h2 className="text-3xl font-heading text-primary mb-4 border-l-4 border-primary pl-3">
	Resume
      </h2>

      <div className="flex justify-center">
	<a
	  href="/Kelvin_CV.pdf"
	  target="_blank"
	  rel="noopener noreferrer"
	  className="
	    inline-block
	    bg-primary text-white
	    px-6 py-3
	    rounded-lg
	    shadow
	    hover:bg-primary/90
	    transition
	  "
	>
	  Download my CV
	</a>
      </div>
    </section>
  );
}
