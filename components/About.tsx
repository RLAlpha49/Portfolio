import { useRef } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const styles = {
  animateOnScroll: 'text-foreground dark:text-gray-100 transition-all duration-300',
  isVisible: 'opacity-100 translate-y-0'
}

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isIntersecting = useIntersectionObserver({ ref, threshold: 0.1, triggerOnce: true })

  return (
    <section ref={ref} className="py-16 bg-secondary dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold mb-8 text-foreground dark:text-gray-100 text-center transition-all duration-600 ease-out ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>About Me</h2>
        <div className="max-w-2xl mx-auto">
          {['Hello! I\'m a passionate software developer with a love for creating elegant solutions to complex problems. My journey in tech started in 2020, and since then, I\'ve been constantly learning and growing in this ever-evolving field.',
            'I specialize in full-stack web development, with a particular interest in React, Node.js, and cloud technologies. When I\'m not coding, you can find me contributing to open-source projects, writing tech blogs, or exploring the latest in AI and machine learning.',
            'I\'m always open to new opportunities and collaborations. Feel free to reach out if you\'d like to discuss a project or just chat about tech!'
          ].map((paragraph, index) => (
            <p key={index} className={`text-foreground dark:text-gray-100 ${styles.animateOnScroll} ${isIntersecting ? styles.isVisible : ''} mb-4`} style={{transitionDelay: `${(index + 1) * 200}ms`}}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

