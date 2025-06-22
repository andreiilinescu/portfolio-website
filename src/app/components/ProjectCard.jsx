"use client";
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function ProjectCard({ project, slug }) {
  const { theme } = useTheme();
  return (
    <div className="block p-4 rounded-lg  transition-all duration-300 shadow-lg bg-[var(--background)] hover:scale-105">
      <article className="space-y-4">
        {/* Project Image */}
        {project.image && (
          <div className="w-full h-48 rounded-lg overflow-hidden bg-[var(--muted)] bg-opacity-10">
            <a  href={project.url} target="_blank">
                <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </a>
          </div>
        )}
        
        {/* Project Title */}
        <a  target="_blank" href={project.url}>
            <h2 className="text-xl font-semibold text-[var(--foreground)] hover:text-primary transition-colors">
            {project.title}
            </h2>
        </a>
        
        {/* Project Description */}
        <p className="text-[var(--muted)] text-sm leading-relaxed mt-2">
          {project.description}
        </p>
        
        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs rounded-md  text-[var(--foreground)] "
                style={{ backgroundColor: "var(--dimmed)" }} // Adjust background color based on theme
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {/* Links */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-3">
            {/* GitHub Link */}
            {project.github && (
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-sm"
                aria-label="View on GitHub"
              >
                <Github className="h-4 w-4" />
                <span>Code</span>
              </a>
            )}
            
            {/* Live Demo Link */}
            {project.deployment && (
              <a 
                href={project.deployment}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-sm"
                aria-label="View live demo"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Demo</span>
              </a>
            )}
            
            {/* External URL (if different from GitHub/deployment) */}
            {project.url && project.url !== project.github && project.url !== project.deployment && (
              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-sm"
                aria-label="Visit project"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Visit</span>
              </a>
            )}
          </div>
          
          {/* View Details Link */}
          {slug && (
            <Link 
              href={`/writing/${slug}`}
              className="text-sm text-primary hover:underline font-medium"
            >
              View Details →
            </Link>
          )}
        </div>
      </article>
    </div>
  );
}
