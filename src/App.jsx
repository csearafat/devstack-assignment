import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Sample tech data matching the Figma layout
const technologies = [
  { id: 1, name: 'React', category: 'Frontend', badge: 'Popular', difficulty: 'Beginner-Friendly', rating: 4.9, icon: '⚛️', desc: 'A declarative, component-based JavaScript library for building user interfaces.' },
  { id: 2, name: 'Vue.js', category: 'Frontend', badge: 'Versatile', difficulty: 'Beginner-Friendly', rating: 4.8, icon: '💚', desc: 'An approachable, performant, and versatile framework for building web interfaces.' },
  { id: 3, name: 'Svelte', category: 'Frontend', badge: 'Fast', difficulty: 'Intermediate', rating: 4.8, icon: '🔥', desc: 'Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.' },
  { id: 4, name: 'Next.js', category: 'Full-stack', badge: 'Standard', difficulty: 'Intermediate', rating: 4.9, icon: '▲', desc: 'The React framework for full-stack web applications with hybrid static & server rendering.' },
  { id: 5, name: 'Node.js', category: 'Backend', badge: 'Standard', difficulty: 'Intermediate', rating: 4.8, icon: '🟢', desc: 'Asynchronous event-driven JavaScript runtime designed for building scalable network apps.' },
  { id: 6, name: 'PostgreSQL', category: 'Database', badge: 'Top SQL', difficulty: 'Advanced', rating: 4.9, icon: '🐘', desc: 'A powerful, open-source object-relational database system with proven reliability.' },
  { id: 7, name: 'Redis', category: 'Database', badge: 'Cache', difficulty: 'Intermediate', rating: 4.8, icon: '🔴', desc: 'In-memory data structure store used as a database, cache, and message broker.' },
  { id: 8, name: 'JavaScript', category: 'Language', badge: 'Ubiquitous', difficulty: 'Beginner-Friendly', rating: 4.9, icon: '💛', desc: 'The versatile, ubiquitous scripting language powering dynamic interactivity across the web.' },
  { id: 9, name: 'TypeScript', category: 'Language', badge: 'Essential', difficulty: 'Intermediate', rating: 4.9, icon: '💙', desc: 'A strongly typed programming language that builds on JavaScript, giving you better tooling.' },
  { id: 10, name: 'Java', category: 'Language', badge: 'Robust', difficulty: 'Intermediate', rating: 4.8, icon: '☕', desc: 'A secure, object-oriented programming language designed for portability and scale.' },
  { id: 11, name: 'Tailwind CSS', category: 'Styling', badge: 'Modern', difficulty: 'Beginner-Friendly', rating: 4.9, icon: '🎨', desc: 'A utility-first CSS framework packed with classes that can be composed to build any design.' },
  { id: 12, name: 'Docker', category: 'DevOps', badge: 'Container', difficulty: 'Intermediate', rating: 4.9, icon: '🐳', desc: 'A platform designed to build, ship, and run containerized applications in any locality.' },
];

export default function App() {
  const [stack, setStack] = useState([technologies[0], technologies[5]]); // Default initial stack

  const addToStack = (tech) => {
    if (!stack.some((item) => item.id === tech.id)) {
      setStack([...stack, tech]);
      toast.success(`${tech.name} added to your stack!`);
    } else {
      toast.info(`${tech.name} is already in your stack.`);
    }
  };

  const removeFromStack = (id) => {
    const item = stack.find((t) => t.id === id);
    setStack(stack.filter((tech) => tech.id !== id));
    if (item) toast.warn(`${item.name} removed from stack.`);
  };

  const removeAll = () => {
    setStack([]);
    toast.error('All items removed from stack.');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <ToastContainer position="top-right" autoClose={2000} />

      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 border-b border-gray-100 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="bg-purple-600 text-white px-2.5 py-1.5 rounded-lg font-bold text-sm">DS</div>
          <span className="font-bold text-lg tracking-tight">Dev Stack</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#home" className="hover:text-purple-600">Home</a>
          <a href="#technologies" className="hover:text-purple-600">Technologies</a>
          <a href="#projects" className="hover:text-purple-600">Projects</a>
          <a href="#about" className="hover:text-purple-600">About</a>
          <a href="#contact" className="hover:text-purple-600">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-gray-700 hover:text-black">Sign In</button>
          <button className="bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium px-4 py-2 rounded-full shadow-sm">
            Sign Up
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 leading-tight mb-6">
            Build Your Ideal <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">
              Development Stack
            </span>
          </h1>
          <p className="text-gray-600 text-base mb-8 max-w-lg leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>
          <div className="flex items-center gap-4">
            <a href="#technologies" className="bg-orange-600 hover:bg-orange-700 text-white font-medium px-6 py-3 rounded-xl shadow-md transition">
              Explore Technologies
            </a>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 font-medium px-6 py-3 rounded-xl transition">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          {/* 3D Isometric Illustration Placeholder */}
          <div className="w-80 h-80 bg-gradient-to-tr from-purple-100 to-pink-50 rounded-3xl flex items-center justify-center shadow-inner border border-purple-50">
            <span className="text-7xl animate-pulse">📦</span>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar Layout */}
      <section id="technologies" className="max-w-7xl mx-auto px-8 py-12">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            Explore the <span className="text-purple-600">Technologies</span>
          </h2>
          <p className="text-gray-500 text-sm mt-1">Pick one technology per category to build your ideal stack</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Technologies Cards Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {technologies.map((tech) => (
              <div key={tech.id} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-2xl p-2 bg-gray-50 rounded-xl border border-gray-100">{tech.icon}</span>
                    <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 bg-sky-50 text-sky-600 rounded-full">
                      {tech.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{tech.name}</h3>
                  <p className="text-gray-500 text-xs mb-4 leading-relaxed">{tech.desc}</p>
                </div>

                <div>
                  <div className="flex justify-between items-center text-[11px] text-gray-500 bg-gray-50 px-3 py-2 rounded-lg mb-4">
                    <span>{tech.category}</span>
                    <span>{tech.difficulty}</span>
                    <span className="flex items-center gap-1 font-medium text-amber-600">★ {tech.rating}</span>
                  </div>
                  <button
                    onClick={() => addToStack(tech)}
                    className="w-full bg-gray-900 hover:bg-black text-white text-xs font-semibold py-2.5 rounded-xl transition shadow-sm"
                  >
                    Add to Stack
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Sidebar: Your Stack */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm sticky top-6">
              <h3 className="font-bold text-gray-900 text-sm mb-1">Your Stack</h3>
              <p className="text-xs text-gray-400 mb-4">{stack.length} Technology Selected</p>

              <div className="space-y-3 mb-6 min-h-[150px]">
                {stack.length === 0 ? (
                  <p className="text-xs text-gray-400 text-center py-8">No technology added yet.</p>
                ) : (
                  stack.map((item) => (
                    <div key={item.id} className="flex items-center justify-between bg-gray-50 border border-gray-100 px-3 py-2 rounded-xl text-xs">
                      <div className="flex items-center gap-2">
                        <span>{item.icon}</span>
                        <span className="font-medium text-gray-800">{item.name}</span>
                      </div>
                      <button
                        onClick={() => removeFromStack(item.id)}
                        className="text-gray-400 hover:text-red-500 font-bold px-1.5"
                      >
                        ✕
                      </button>
                    </div>
                  ))
                )}
              </div>

              {stack.length > 0 && (
                <button
                  onClick={removeAll}
                  className="w-full border border-gray-200 hover:bg-gray-50 text-gray-600 text-xs font-semibold py-2.5 rounded-xl transition"
                >
                  Remove All
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 mt-20">
        <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-xs text-gray-500">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-purple-600 text-white px-2 py-1 rounded font-bold text-xs">DS</div>
              <span className="font-bold text-gray-900 text-sm">Dev Stack</span>
            </div>
            <p className="leading-relaxed mb-4">
              Curated tools, technologies, and resources for developers building modern web apps.
            </p>
            <div className="flex gap-4 text-gray-400">
              <a href="#github" className="hover:text-gray-600">GitHub</a>
              <a href="#twitter" className="hover:text-gray-600">Twitter</a>
              <a href="#linkedin" className="hover:text-gray-600">LinkedIn</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-3">Product</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-gray-900">Home</a></li>
              <li><a href="#tech" className="hover:text-gray-900">Technologies</a></li>
              <li><a href="#projects" className="hover:text-gray-900">Projects</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-3">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-gray-900">About</a></li>
              <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
              <li><a href="#careers" className="hover:text-gray-900">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-3">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#privacy" className="hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-gray-900">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 py-6 border-t border-gray-50 flex justify-between items-center text-xs text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-gray-600">Privacy</a>
            <a href="#terms" className="hover:text-gray-600">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}