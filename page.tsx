'use client'

import { Mail, Phone, MapPin, Linkedin, Github, Calendar, Award, BookOpen } from 'lucide-react'

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Header Section */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">Gargi Ubarhande</h1>
              <p className="text-primary mt-2 text-lg">Undergrad | Information Technology</p>
            </div>
            <div className="hidden md:flex gap-3">
              <a href="mailto:gargi.ubarhande@gmail.com" className="p-2 hover:bg-muted rounded-lg transition-colors" title="Email">
                <Mail className="w-6 h-6 text-primary" />
              </a>
              <a href="tel:+919876543210" className="p-2 hover:bg-muted rounded-lg transition-colors" title="Phone">
                <Phone className="w-6 h-6 text-primary" />
              </a>
              <a href="https://linkedin.com" className="p-2 hover:bg-muted rounded-lg transition-colors" title="LinkedIn">
                <Linkedin className="w-6 h-6 text-primary" />
              </a>
              <a href="https://github.com" className="p-2 hover:bg-muted rounded-lg transition-colors" title="GitHub">
                <Github className="w-6 h-6 text-primary" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Contact Information */}
        <section className="grid md:grid-cols-2 gap-4">
          <div className="bg-card rounded-lg p-6 border border-border hover:border-primary transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <Mail className="w-5 h-5 text-primary" />
              <p className="text-sm text-muted-foreground">Email</p>
            </div>
            <p className="text-foreground font-medium">gargi.ubarhande@google.com</p>
          </div>
          <div className="bg-card rounded-lg p-6 border border-border hover:border-primary transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <Phone className="w-5 h-5 text-primary" />
              <p className="text-sm text-muted-foreground">Phone</p>
            </div>
            <p className="text-foreground font-medium">+91 98765 43210</p>
          </div>
          <div className="bg-card rounded-lg p-6 border border-border hover:border-primary transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="w-5 h-5 text-primary" />
              <p className="text-sm text-muted-foreground">Location</p>
            </div>
            <p className="text-foreground font-medium">Navi Mumbai, Maharashtra, India</p>
          </div>
          <div className="bg-card rounded-lg p-6 border border-border hover:border-primary transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="w-5 h-5 text-primary" />
              <p className="text-sm text-muted-foreground">Roll Number</p>
            </div>
            <p className="text-foreground font-medium">Roll No: 5023163</p>
          </div>
        </section>

        {/* Professional Summary */}
        <section className="bg-card rounded-lg p-8 border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded-full"></span>
            About Me
          </h2>
          <p className="text-foreground leading-relaxed text-lg">
            I am a dedicated and passionate student pursuing my education with a strong focus on academic excellence. 
            With a keen interest in problem-solving and learning new technologies, I am committed to developing skills 
            that will help me become a valuable professional. I am eager to apply my knowledge to real-world projects 
            and contribute meaningfully to the field.
          </p>
           <p className="text-foreground leading-relaxed text-lg">
           i am grateful
          </p>
        </section>

        {/* Education Section */}
        <section className="bg-card rounded-lg p-8 border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            Educational Qualifications
          </h2>
          <div className="space-y-6">
            {/* Degree 1 */}
            <div className="pb-6 border-b border-border last:border-0 last:pb-0">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Bachelor of Technology</h3>
                  <p className="text-primary font-medium">FR. C. Rodrigues Institute of Technology/Mumbai University</p>
                </div>
                <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">2021 - 2025</span>
              </div>
              <p className="text-muted-foreground">Branch: IT: Engineering</p>
              <p className="text-muted-foreground mt-2">CGPA: 9.69/10.0</p>
            </div>

            {/* Degree 2 */}
            <div className="pb-6 border-b border-border last:border-0 last:pb-0">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Senior Secondary (XII)</h3>
                  <p className="text-primary font-medium">Your School Name</p>
                </div>
                <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">2018 - 2020</span>
              </div>
              <p className="text-muted-foreground">Science Stream | Percentage: 92%</p>
            </div>

            {/* Degree 3 */}
            <div>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Secondary (X)</h3>
                  <p className="text-primary font-medium">Your School Name</p>
                </div>
                <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">2016 - 2018</span>
              </div>
              <p className="text-muted-foreground">Percentage: 95%</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="bg-card rounded-lg p-8 border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-primary" />
            Skills & Competencies
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3 text-primary">Technical Skills</h3>
              <ul className="space-y-2">
                <li className="text-foreground">• Programming Languages: C++, Python, JavaScript</li>
                <li className="text-foreground">• Web Development: HTML, CSS, React, Node.js</li>
                <li className="text-foreground">• Databases: MySQL, MongoDB</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3 text-primary">Soft Skills</h3>
              <ul className="space-y-2">
                <li className="text-foreground">• Problem Solving</li>
                <li className="text-foreground">• Team Collaboration</li>
                <li className="text-foreground">• Communication</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3 text-primary">Tools & Platforms</h3>
              <ul className="space-y-2">
                <li className="text-foreground">• Git & GitHub</li>
                <li className="text-foreground">• VS Code</li>
                <li className="text-foreground">• Docker</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="bg-card rounded-lg p-8 border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-primary" />
            Certifications & Achievements
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-foreground">Certification Name</h3>
                <p className="text-sm text-muted-foreground">Issuing Organization • 2024</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-foreground">Achievement or Award</h3>
                <p className="text-sm text-muted-foreground">Details and year • 2024</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-foreground">Project or Leadership Role</h3>
                <p className="text-sm text-muted-foreground">Description and year • 2023</p>
              </div>
            </div>
          </div>
        </section>

        {/* Languages Section */}
        <section className="bg-card rounded-lg p-8 border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded-full"></span>
            Languages
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {['English', 'Hindi', 'French'].map((lang) => (
              <div key={lang} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <span className="text-foreground font-medium">{lang}</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className={`w-2 h-2 rounded-full ${i <= 4 ? 'bg-primary' : 'bg-border'}`}></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interests Section */}
        <section className="bg-card rounded-lg p-8 border border-border mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-accent rounded-full"></span>
            Interests & Hobbies
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              'Web Development',
              'Machine Learning',
              'Open Source',
              'Reading',
              'Gaming',
              'Traveling',
              'Photography',
              'Music'
            ].map((interest) => (
              <span
                key={interest}
                className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium border border-primary/20 hover:bg-primary/20 transition-colors cursor-pointer"
              >
                {interest}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-muted-foreground">
          <p>This resume was created using modern web technologies | © 2024</p>
        </div>
      </footer>
    </main>
  )
}
