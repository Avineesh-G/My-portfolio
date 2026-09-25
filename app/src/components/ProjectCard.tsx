import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  name: string;
  description: string;
  image: string;
  techStack: string[];
  link?: string;
  githubLink?: string;
  zoomOut?: boolean;
}

export function ProjectCard({
  name,
  description,
  image,
  techStack,
  link,
  githubLink,
  zoomOut = false,
}: ProjectCardProps) {
  return (
    <div className="bg-white border border-parchment rounded-lg overflow-hidden shadow-card transition-all duration-300 ease-out hover:shadow-card-hover hover:-translate-y-1 hover:border-[#D5CFC5] group flex flex-col h-full">
      <div className="aspect-video overflow-hidden -m-0 mb-0 bg-charcoal/5 relative shrink-0">
        <img
          src={image}
          alt={name}
          className={`w-full h-full transition-all duration-500 ease-out group-hover:scale-[1.03] ${
            zoomOut
              ? "object-contain p-2.5 bg-[#120B24]"
              : "object-cover object-top"
          }`}
        />
      </div>
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="font-display text-xl text-charcoal tracking-[0.03em] mb-2">
            {name}
          </h3>
          <p className="font-body text-sm text-mist leading-relaxed mb-4">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="bg-parchment/30 rounded px-3 py-1 font-body text-xs text-charcoal tracking-[0.02em]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-parchment/40">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-coral text-white rounded-full px-5 py-2 font-body text-[13px] tracking-[0.05em] transition-all duration-200 ease-out hover:bg-coral-hover hover:scale-[1.02]"
            >
              Live Demo
              <ExternalLink size={14} />
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-charcoal/5 text-charcoal border border-charcoal/15 rounded-full px-5 py-2 font-body text-[13px] tracking-[0.05em] transition-all duration-200 ease-out hover:bg-charcoal hover:text-white hover:scale-[1.02]"
            >
              GitHub Code
              <Github size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

