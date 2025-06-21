import { Twitter, Linkedin, Github, FileText, Mail, CodeXml } from "lucide-react";

export default function Footer({ className }) {
  const links = [
    // {
    //   name: "x",
    //   href: "https://x.com/_martinsit",
    //   icon: Twitter,
    // },
    {
      name: "linkedin",
      href: "https://www.linkedin.com/in/andrei-ilinescu/",
      icon: Linkedin,
    },
    {
      name: "github",
      href: "https://github.com/andreiilinescu",
      icon: Github,
    },
    {
      name: "email",
      href: "mailto:andreiilinescu19@gmail.com",
      icon: Mail,
    },
    {
      name: "repo",
      href: "https://github.com/andreiilinescu/portfolio-website-2",
      icon: CodeXml,
    }
  ];

  return (
    <footer className={`flex flex-col gap-4 text-sm text-[var(--foreground)] ${className}`}>
      <div className="flex flex-row justify-left gap-4">
        <div className="flex flex-wrap gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="group flex items-center 0 "
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon && (
                <>
                  <link.icon className="w-5 h-5 hover:scale-110 md:hover:scale-110 transition-transform duration-500 ease-out" />
                  <span className="hidden md:inline-block md:w-0 md:overflow-hidden md:group-hover:w-auto md:group-hover:ml-2 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 ease-out">
                    {link.name}
                  </span>
                </>
              )}
              {!link.icon && (
                <span>{link.name}</span>
              )}
            </a>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <a href="https://mateidumitrescu.org" target="_blank" className="text-[var(--foreground)] ransition-transform duration-200 hover:scale-130 ">
            ←
          </a>
          <a
            href="https://tudelft.nl"
            target="_blank"
          >
            <img
              src="/tudelft.png"
              alt="TuDelft Logo"
              className="w-6 h-auto opacity-80  invert-img ransition-transform duration-200 hover:scale-140"
              style={{ 
                filter: 'var(--theme-filter)',
            }}
            />
          </a>
          <a href="https://mateidumitrescu.org" target="_blank" className="text-[var(--foreground)] ransition-transform duration-200 hover:scale-130">
            →
          </a>
        </div>
      </div>
      <p>{new Date().getFullYear()} &copy; Andrei Ilinescu</p>
    </footer>
  );
}