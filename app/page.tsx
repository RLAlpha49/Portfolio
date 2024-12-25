'use client'

import { useRef } from 'react'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Spinner } from '@/components/Spinner'
import dynamic from 'next/dynamic'

const Projects = dynamic(() => import('@/components/Projects').then((mod) => mod.Projects), {
  loading: () => <Spinner />,
});
const TechStack = dynamic(() => import('@/components/Skills').then(mod => mod.TechStack), {
  loading: () => <Spinner />,
})

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const techStackRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col min-h-screen bg-background dark:bg-gray-900">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75 dark:bg-gray-800 dark:border-gray-700">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          <div className="flex items-center space-x-4">
            <a className="flex items-center space-x-2">
              <span className="font-bold text-xl dark:text-gray-100">Alex Pettigrew</span>
            </a>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <button onClick={() => scrollTo(aboutRef)} className="text-muted-foreground hover:text-gray-300 dark:hover:text-gray-100 transition-colors">About</button>
            <button onClick={() => scrollTo(projectsRef)} className="text-muted-foreground hover:text-gray-300 dark:hover:text-gray-100 transition-colors">Projects</button>
            <button onClick={() => scrollTo(techStackRef)} className="text-muted-foreground hover:text-gray-300 dark:hover:text-gray-100 transition-colors">Tech Stack</button>
            <button onClick={() => scrollTo(contactRef)} className="text-muted-foreground hover:text-gray-300 dark:hover:text-gray-100 transition-colors">Contact</button>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <Hero scrollTo={scrollTo} projectsRef={projectsRef} />
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={techStackRef}>
          <TechStack />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>

      <footer className="border-t border-border bg-background dark:border-gray-700 text-muted-foreground dark:text-gray-300">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose md:text-left">
              Built by Alex Pettigrew. The source code is available on{" "}
              <a href="https://github.com" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4 hover:text-gray-900 dark:hover:text-gray-100">
                GitHub
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

