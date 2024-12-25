import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface HeroProps {
  scrollTo: (ref: React.RefObject<HTMLDivElement>) => void
  projectsRef: React.RefObject<HTMLDivElement>
}

export function Hero({ scrollTo, projectsRef }: HeroProps) {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 bg-background dark:bg-gray-900 overflow-hidden relative">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-foreground dark:text-gray-100 animate-[float_3s_ease-in-out_infinite]">
          Alex Pettigrew
        </h1>
        <h2 className="text-3xl mb-8 text-primary dark:text-blue-400 animate-[pulse_3s_cubic-bezier(0.4,0,0.6,1)_infinite]">
          Software Developer
        </h2>
        <p className="max-w-lg mb-8 text-lg text-muted-foreground dark:text-gray-300 animate-[float_3s_ease-in-out_infinite]" style={{animationDelay: '0.5s'}}>
          A passionate developer with a keen interest in building innovative solutions. 
          Specializing in web development and always eager to learn new technologies.
        </p>
        <Button 
          onClick={() => scrollTo(projectsRef)}
          className="bg-primary dark:bg-blue-600 text-primary-foreground dark:text-gray-100 hover:bg-primary/90 dark:hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          View My Projects <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <div 
        className="absolute bottom-0 left-0 w-full h-32 opacity-20"
        style={{
          background: 'linear-gradient(270deg, #667eea, #764ba2, #6B8DD6, #8E37D7)',
          backgroundSize: '200% 200%',
          animation: 'gradientBG 15s ease infinite',
        }}
      />
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  )
}

