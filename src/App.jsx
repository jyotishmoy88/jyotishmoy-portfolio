import { motion } from 'framer-motion'
import { Mail, Phone, FileText, PenTool, Globe } from 'lucide-react'

const SERVICES = [
  {
    icon: <FileText className="w-5 h-5" />,
    title: "Content Writing",
    desc: "Well-researched articles and blog posts tailored to your audience.",
  },
  {
    icon: <PenTool className="w-5 h-5" />,
    title: "Article Writing",
    desc: "Long-form, SEO-friendly articles that engage and convert.",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Website & Mobile App Development",
    desc: "Full-stack website and mobile app development services tied to clear product messaging.",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "SEO",
    desc: "On-page SEO and content optimization to improve discoverability.",
  },
]

const PROJECTS = [
  { title: "Mediaxay", link: "https://mediaxay.com" },
  { title: "MmartWeb", link: "https://mmartweb.mediaxay.com" },
  { title: "TheUpay", link: "https://theupay.com" },
  { title: "TheUpay Bank", link: "https://theupay.com/bank" },
]

export default function App() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-12">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-2"
      >
        <h1 className="text-4xl font-bold text-gray-900">Jyotishmoy Hazarika</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          I am Jyotishmoy Hazarika — a content writer, article writer, and software developer. 
          I provide clear, engaging content and technical writing that helps products resonate with their audience.
        </p>
        <div className="flex justify-center gap-6 text-gray-700 mt-4">
          <a href="mailto:jyotishmoy88@gmail.com" className="flex items-center gap-2 hover:text-blue-600">
            <Mail className="w-5 h-5" /> jyotishmoy88@gmail.com
          </a>
          <a href="tel:+917002769913" className="flex items-center gap-2 hover:text-blue-600">
            <Phone className="w-5 h-5" /> +91 7002769913
          </a>
        </div>
      </motion.header>

      {/* Services */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-white rounded-2xl shadow"
            >
              <div className="flex items-center gap-3 mb-2">
                {s.icon}
                <h3 className="font-semibold text-lg">{s.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-sm text-blue-600">{p.link}</p>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  )
}