import Image from "next/image";

interface Project {
  Title: string;
  Description: string;
  TechStack: string[];
  Tag: string;
  Github_Link: string;
  Live: string;
  img: string;
}

// Inline custom SVG icons to avoid bundler or version issues with lucide-react
const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

export default function Card({ project }: { project: Project }) {
  // Convert relative path like "./hackJudge.png" to "/hackJudge.png" for Next.js public directory routing
  const imageSrc = project.img.startsWith("./") ? project.img.slice(1) : project.img;

  return (
    <div className="group h-full bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 hover:border-teal-500/30 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,184,166,0.03)] hover:scale-[1.01]">
      <div>
        {/* Project Image Container */}
        <div className="relative w-full h-48 overflow-hidden rounded-2xl mb-5 bg-zinc-950">
          <Image
            src={imageSrc}
            alt={project.Title}
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 400px"
          />
          {/* Tag Overlay */}
          <div className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-teal-400 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
            {project.Tag}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors duration-300">
          {project.Title}
        </h3>

        {/* Description */}
        <p className="text-zinc-400 text-sm leading-relaxed mb-5 min-h-[96px]">
          {project.Description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.TechStack.map((tech, idx) => (
            <span
              key={idx}
              className="text-[11px] font-medium px-2.5 py-0.5 rounded bg-zinc-800/40 border border-zinc-800 text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-auto">
        {/* Github Button */}
        <a
          href={project.Github_Link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 hover:bg-zinc-800/20 transition-all duration-300"
        >
          <GithubIcon className="w-4 h-4" />
          Github
        </a>

        {/* Live Button */}
        {project.Live ? (
          <a
            href={project.Live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white shadow-[0_0_15px_rgba(20,184,166,0.15)] hover:shadow-[0_0_20px_rgba(20,184,166,0.25)] transition-all duration-300"
          >
            <ExternalLinkIcon className="w-4 h-4" />
            Live
          </a>
        ) : (
          <button
            disabled
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border border-zinc-950 bg-zinc-950/40 text-zinc-600 cursor-not-allowed"
          >
            <ExternalLinkIcon className="w-4 h-4" />
            Live
          </button>
        )}
      </div>
    </div>
  );
}