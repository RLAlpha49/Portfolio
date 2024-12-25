import { useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Code, Server, Database, PenToolIcon as Tool } from 'lucide-react'
import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiPython,
  SiGraphql, SiFlask, SiNpm, SiReact,
  SiNodedotjs, SiVuedotjs, SiMongodb, SiPostgresql,
  SiNextdotjs, SiTailwindcss, SiSpotify
} from 'react-icons/si'
import { DiMsqlServer, DiJava } from "react-icons/di"
import { TbBrandCSharp } from "react-icons/tb"
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const techStack = [
  {
    category: 'Frontend',
    icon: Tool,
    color: 'text-violet-500',
    technologies: [
      {
        name: 'HTML',
        icon: SiHtml5,
        projects: [
          { name: 'AniCards', link: 'https://anicards.alpha49.com' },
          { name: 'AniList List Manager', link: 'http://anilist-list-manager.alpha49.com' },
          { name: 'AniSearch', link: 'https://anisearch.alpha49.com' }
        ]
      },
      {
        name: 'CSS',
        icon: SiCss3,
        projects: [
          { name: 'AniCards', link: 'https://anicards.alpha49.com' },
          { name: 'AniList List Manager', link: 'http://anilist-list-manager.alpha49.com' },
          { name: 'AniSearch', link: 'https://anisearch.alpha49.com' }
        ]
      },
      {
        name: 'JavaScript',
        icon: SiJavascript,
        projects: [
          { name: 'AniCards', link: 'https://anicards.alpha49.com' },
          { name: 'AniList List Manager', link: 'http://anilist-list-manager.alpha49.com' }
        ]
      },
      {
        name: 'TypeScript',
        icon: SiTypescript,
        projects: [
          { name: 'AniSearch', link: 'https://anisearch.alpha49.com' }
        ]
      },
      {
        name: 'React',
        icon: SiReact,
        projects: [
          { name: 'AniSearch', link: 'https://anisearch.alpha49.com' }
        ]
      },
      {
        name: 'Next.js',
        icon: SiNextdotjs,
        projects: [
          { name: 'AniSearch', link: 'https://anisearch.alpha49.com' }
        ]
      },
      {
        name: 'Vue.js',
        icon: SiVuedotjs,
        projects: [
          { name: 'AniList List Manager', link: 'http://anilist-list-manager.alpha49.com' }
        ]
      },
      {
        name: 'Tailwind CSS',
        icon: SiTailwindcss,
        projects: [
          { name: 'AniSearch', link: 'https://anisearch.alpha49.com' }
        ]
      }
    ]
  },
  {
    category: 'Backend',
    icon: Server,
    color: 'text-blue-500',
    technologies: [
      {
        name: 'Python',
        icon: SiPython,
        projects: [
          { name: 'Anilist Manga Updater', link: 'https://github.com/RLAlpha49/Anilist-Manga-Updater' },
          { name: 'AniCards', link: 'https://anicards.alpha49.com' },
          { name: 'AniSearchModel', link: 'https://github.com/RLAlpha49/AniSearchModel' },
          { name: 'Spotify Skip Tracker', link: 'https://github.com/RLAlpha49/SpotifySkipTracker' }
        ]
      },
      {
        name: 'Flask',
        icon: SiFlask,
        projects: [
          { name: 'AniCards', link: 'https://anicards.alpha49.com' },
          { name: 'AniSearchModel', link: 'https://github.com/RLAlpha49/AniSearchModel' }
        ]
      },
      {
        name: 'Node.js',
        icon: SiNodedotjs,
        projects: []
      },
      {
        name: 'GraphQL',
        icon: SiGraphql,
        projects: [
          { name: 'AniCards', link: 'https://anicards.alpha49.com' }
        ]
      }
    ]
  },
  {
    category: 'Database',
    icon: Database,
    color: 'text-green-500',
    technologies: [
      {
        name: 'PostgreSQL',
        icon: SiPostgresql,
        projects: [
          { name: 'AniCards', link: 'https://anicards.alpha49.com' }
        ]
      },
      {
        name: 'MongoDB',
        icon: SiMongodb,
        projects: []
      },
      {
        name: 'MySQL',
        icon: DiMsqlServer,
        projects: []
      }
    ]
  },
  {
    category: 'Other',
    icon: Code,
    color: 'text-yellow-500',
    technologies: [
      {
        name: 'npm',
        icon: SiNpm,
        projects: []
      },
      {
        name: 'Java',
        icon: DiJava,
        projects: []
      },
      {
        name: 'C#',
        icon: TbBrandCSharp,
        projects: []
      },
      {
        name: 'Spotify API',
        icon: SiSpotify,
        projects: [
          { name: 'Spotify Skip Tracker', link: 'https://github.com/RLAlpha49/SpotifySkipTracker' }
        ]
      },
      {
        name: 'AniList API',
        icon: SiGraphql,
        projects: [
          { name: 'Anilist Manga Updater', link: 'https://github.com/RLAlpha49/Anilist-Manga-Updater' },
          { name: 'AniList List Manager', link: 'http://anilist-list-manager.alpha49.com' }
        ]
      }
    ]
  }
]

export function TechStack() {
  const ref = useRef<HTMLDivElement>(null)
  const isIntersecting = useIntersectionObserver({ ref, threshold: 0.1, triggerOnce: true })

  return (
    <section ref={ref} className="py-16 bg-background dark:bg-gray-900">
      <div className={`container mx-auto px-4`}>
        <h2 className={`text-4xl font-bold mb-12 text-center text-foreground dark:text-gray-100 transition-all duration-600 ease-out ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((techStackSet, index) => {
            const Icon = techStackSet.icon
            return (
              <Card key={index} className={`bg-card dark:bg-gray-800 border-border dark:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-card-foreground dark:text-gray-100 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                    <Icon className={`w-6 h-6 ${techStackSet.color}`} />
                    <span>{techStackSet.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {techStackSet.technologies.map((tech, techIndex) => (
                      <AccordionItem key={techIndex} value={`item-${index}-${techIndex}`}>
                        <AccordionTrigger className="hover:no-underline">
                          <div 
                            className={`flex items-center space-x-2 p-2 rounded-lg bg-secondary dark:bg-gray-600 text-secondary-foreground dark:text-gray-900 hover:bg-primary dark:hover:bg-blue-600 hover:text-primary-foreground dark:hover:text-gray-100 transition-all duration-300 transform hover:scale-105 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                            style={{ transitionDelay: `${(index * 5 + techIndex) * 50}ms` }}
                          >
                            <tech.icon className="w-8 h-8" />
                            <span className="text-sm">{tech.name}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pl-4 mt-2">
                            <h4 className="text-sm font-semibold text-primary dark:text-blue-400 mb-2">Projects using {tech.name}:</h4>
                            <ul className="list-disc list-inside">
                              {tech.projects.map((project, projectIndex) => (
                                <li key={projectIndex} className="text-foreground dark:text-gray-100 transition-colors">
                                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="underline">
                                    {project.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

