import React from 'react';

function App() {
  return (
    <main className="p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-4xl font-bold">Santosh Kumar Kunta</h1>
        <p className="text-lg mt-2 text-gray-600">
          MS in Computer Science | Aspiring Software Developer
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://github.com/santoshkunta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/santosh-kunta-5a5326210/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* About */}
      <section className="bg-white p-4 rounded shadow">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p>
          I am a Master's student in Computer Science at AUM, currently in my
          third semester. I’m passionate about frontend development, data
          structures, and cloud computing.
        </p>
      </section>

      {/* Skills */}
      <section className="bg-white p-4 rounded shadow">
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc list-inside grid grid-cols-2 gap-2">
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML & CSS</li>
          <li>Tailwind CSS</li>
          <li>Bootstrap</li>
          <li>SQL</li>
          <li>Python</li>
          <li>AWS</li>
          <li>Git & GitHub</li>
          <li>Data Structures</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="bg-white p-4 rounded shadow">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <ul className="space-y-4">
          <li>
            <strong>Password Manager System</strong>
            <p>
              A React-based app to store and manage passwords locally with encryption.
            </p>
          </li>
          <li>
            <strong>Dynamic Project Gallery</strong>
            <p>
              A responsive page that loads tasks dynamically from JSON using iframe.
            </p>
          </li>
        </ul>
      </section>

      {/* Contact */}
      <section className="bg-white p-4 rounded shadow">
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p>Email: santoshkunta@example.com</p>
      </section>
    </main>
  );
}

export default App;
