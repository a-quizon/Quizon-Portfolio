import { About } from './components/About'
import { BeyondCoding } from './components/BeyondCoding'
import { Connect } from './components/Connect'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Projects } from './components/Projects'
import { TechStack } from './components/TechStack'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="mx-auto min-h-screen bg-page px-4 py-8 md:max-w-[768px]">
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main className="mt-6 grid grid-cols-1 gap-2.5 md:grid-cols-8">
        <About />
        <Experience />
        <Education />
        <TechStack />
        <BeyondCoding />
        <Projects />
        <Connect />
      </main>

      <Footer />
    </div>
  )
}
