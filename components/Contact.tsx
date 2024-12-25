import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function Contact() {
  return (
    <section className="py-16 bg-background dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-foreground dark:text-gray-100">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-foreground dark:text-gray-300">Name</label>
                <Input id="name" required className="dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-foreground dark:text-gray-300">Email</label>
                <Input id="email" type="email" required className="dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-foreground dark:text-gray-300">Message</label>
                <Textarea id="message" required className="dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700" />
              </div>
              <Button type="submit" className="dark:bg-blue-600 dark:text-gray-100 dark:hover:bg-blue-700">Send Message</Button>
            </form>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-foreground dark:text-gray-100">Connect with me</h3>
            <div className="space-y-4">
              <a href="https://github.com/RLAlpha49" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-foreground dark:text-gray-300 hover:underline">
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-foreground dark:text-gray-300 hover:underline">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:your.email@example.com" className="flex items-center space-x-2 text-foreground dark:text-gray-300 hover:underline">
                <Mail size={20} />
                <span>your.email@example.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

