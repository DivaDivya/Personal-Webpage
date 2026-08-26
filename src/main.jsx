import React from 'react'
import ReactDOM from 'react-dom/client'
import { Github, Linkedin, Mail, ArrowUpRight, Download, Code2, Brain, Database, Menu, X } from 'lucide-react'
import './styles.css'

const projects = [
  {
    title: 'Marketplace Web Application',
    subtitle: 'Washington State University',
    description:
      'Built a full-stack marketplace app with product listings, dynamic templating, and RESTful routing using Node.js, Express, and EJS.',
    stack: ['Node.js', 'Express', 'SQLite', 'EJS', 'Bootstrap'],
    icon: Code2,
    github: 'https://github.com/DivaDivya/Marketplace',
  },
  {
    title: 'Nowcasting Localized Air Temperature Using Deep Learning',
    subtitle: 'Washington State University',
    description:
      'Trained and compared a Feedforward Neural Network (FNN) and hybrid CNN-LSTM model to predict orchard air temperature up to 6 hours ahead at 5-minute intervals using 5 years of real-world weather data.',
    stack: ['Python', 'TensorFlow', 'NumPy', 'Pandas', 'Matplotlib', 'Jupyter Notebook'],
    icon: Brain,
    github: 'https://github.com/DivaDivya/ml-deeplearning-project',
  },
  {
    title: 'Social Media Platform Popularity Analysis by GDP',
    subtitle: 'Data Analysis Project',
    description:
      'Analyzed correlations between per capita GDP and social media adoption rates across 100+ countries using multi-source datasets.',
    stack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    icon: Database,
    github: 'https://github.com/DivaDivya',
  },
]

const skills = [
  'Python', 'SQL', 'JavaScript', 'HTML', 'CSS', 'NumPy', 'Pandas',
  'scikit-learn', 'TensorFlow', 'PyTorch', 'Matplotlib', 'Seaborn',
  'Jupyter Notebook', 'Git', 'GitHub', 'React JS', 'Node.js', 'Express', 'EJS', 'RDBMS Design'
]

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div>
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#home" onClick={closeMenu}>DS<span>.</span></a>

          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero container">
          <div className="hero-grid">
        
            <div className="hero-content">
              <div className="eyebrow">
                AI/ML ·SOFTWARE ENGINEERING ·FULL STACK
              </div>
        
              <h1>
                Hi, I’m <span>Divya Sinha.</span>
              </h1>
        
              <p className="hero-copy">
                I'm a Master's in Computer Science graduate focused on machine learning, 
                full-stack development and data-driven projects. I enjoy turning
                complex problems into clean, practical user experiences.
              </p>
        
              <div className="hero-actions">
                <a className="button primary" href="#projects">
                  View my work <ArrowUpRight size={18} />
                </a>
        
                <a
                  className="button secondary"
                  href="/Divya-Sinha-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume <Download size={17} />
                </a>
              </div>
        
              <div className="social-row">
                <a
                  href="https://github.com/DivaDivya"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
        
                <a
                  href="https://www.linkedin.com/in/divyasinha28/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
        
                <a href="mailto:sdivya28@gmail.com" aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>
        
            <div className="hero-photo">
              <img
                src="/divya-profile-pic.jpeg"
                alt="Divya Sinha"
              />
            </div>
        
          </div>
        </section>

        <section id="about" className="section container">
          <div className="section-kicker">01 / ABOUT</div>
          <div className="about-grid">
            <h2>I combine software engineering with data and intelligent systems.</h2>
            <div className="about-copy">
              <p>
                I completed my Master’s in Computer Science at Washington State University,
                where I built projects spanning web applications, machine learning,
                databases, security, and data analysis.
              </p>
              <p>
                My strongest interests are software engineering, AI/ML, and building
                products that make complicated workflows simpler and more intuitive.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="section container">
          <div className="section-heading">
            <div>
              <div className="section-kicker">02 / SELECTED WORK</div>
              <h2>Projects with real depth.</h2>
            </div>
          </div>

          <div className="project-grid">
            {projects.map(({ title, subtitle, description, stack, icon: Icon, github }) => (
              <article className="project-card" key={title}>
                <div className="project-top">
                  <div className="project-icon"><Icon size={24} /></div>
                  <a href={github} aria-label={`${title} GitHub`}><ArrowUpRight size={20} /></a>
                </div>
                <p className="project-number">{subtitle}</p>
                <h3>{title}</h3>
                <p className="project-description">{description}</p>
                <div className="stack-list">
                  {stack.map(item => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section container">
          <div className="section-kicker">03 / SKILLS</div>
          <div className="skills-grid">
            <h2>Tools I use to build.</h2>
            <div className="skills-list">
              {skills.map(skill => <span key={skill}>{skill}</span>)}
            </div>
          </div>
        </section>

        <section id="experience" className="section container">
          <div className="section-kicker">04 / EXPERIENCE & EDUCATION</div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-meta">WASHINGTON STATE UNIVERSITY</div>
              <div>
                <h3>Master of Science in Computer Science</h3>
                <p>
                  Graduate coursework and projects across software engineering, machine learning,
                  web development, security, scientific computing, and data-driven systems.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-meta">SOFTWARE & DATA PROJECTS</div>
              <div>
                <h3>Full-Stack Development · Machine Learning · Analytics</h3>
                <p>
                  Built end-to-end applications and ML systems using React, Node.js,
                  Express, SQL, Python, TensorFlow, PyTorch, and modern development workflows.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-meta">PREVIOUS EDUCATION</div>
              <div>
                <h3>B.Tech. in Electrical & Electronics Engineering</h3>
                <p>Manipal Institute of Technology</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-inner">
            <div className="section-kicker light">05 / CONTACT</div>
            <h2>Have a role, project, or idea in mind?</h2>
            <p>I’m always interested in thoughtful software, AI, and data opportunities.</p>
            <a className="button contact-button" href="mailto:sdivya28@gmail.com">
              Let’s connect <Mail size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <span>© 2026 Divya Sinha</span>
        <span>Designed & built with React.</span>
      </footer>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
