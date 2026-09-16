import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const technologies = [
  { 
    id: 1, 
    name: 'React', 
    category: 'Frontend', 
    badge: 'Popular', 
    difficulty: 'Beginner-Friendly', 
    rating: 4.9, 
    icon: (
      <svg className="w-6 h-6 text-sky-500" viewBox="0 0 115.5 100" fill="currentColor">
        <path d="M57.5 22.5C71.3 22.5 82.5 26.2 82.5 30.8C82.5 35.4 71.3 39.1 57.5 39.1C43.7 39.1 32.5 35.4 32.5 30.8C32.5 26.2 43.7 22.5 57.5 22.5Z"/>
        <path d="M72.9 44.5C79.8 56.5 81.3 67.5 77.2 69.9C73.1 72.3 62.9 67.9 54.4 59.4C45.9 50.9 41.5 40.7 43.9 36.6C46.3 32.5 57.3 34 69.3 40.9C70.5 41.6 71.7 43 72.9 44.5Z" fill="none" stroke="currentColor" strokeWidth="8"/>
        <path d="M42.6 55.5C35.7 43.5 34.2 32.5 38.3 30.1C42.4 27.7 52.6 32.1 61.1 40.6C69.6 49.1 74 59.3 71.6 63.4C69.2 67.5 58.2 66 46.2 59.1C45 58.4 43.8 57 42.6 55.5Z" fill="none" stroke="currentColor" strokeWidth="8"/>
      </svg>
    ), 
    desc: 'A declarative, component-based JavaScript library for building user interfaces.' 
  },
  { 
    id: 2, 
    name: 'Vue.js', 
    category: 'Frontend', 
    badge: 'Versatile', 
    difficulty: 'Beginner-Friendly', 
    rating: 4.8, 
    icon: (
      <svg className="w-6 h-6 text-emerald-500" viewBox="0 0 256 221" fill="currentColor">
        <path d="M204.8 0H256L128 220.8L0 0H52.8L128 131.2L204.8 0Z" fill="#41B883"/>
        <path d="M52.8 0L128 131.2L203.2 0H153.6L128 44.8L102.4 0H52.8Z" fill="#35495E"/>
      </svg>
    ), 
    desc: 'An approachable, performant, and versatile framework for building web interfaces.' 
  },
  { 
    id: 3, 
    name: 'Svelte', 
    category: 'Frontend', 
    badge: 'Fast', 
    difficulty: 'Intermediate', 
    rating: 4.8, 
    icon: (
      <svg className="w-6 h-6 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.8 3.5c-.8-.7-2-.9-3-.4-1.2.6-2 1.8-2.2 3.1-.3 1.9.9 3.8 2.7 4.5l1.3.5c1.8.7 3 2.5 2.7 4.5-.4 2.3-2.3 4.1-4.7 4.4-2.8.3-5.2-1.7-5.7-4.4-.1-.5-.6-.9-1.1-.8-.5.1-.9.6-.8 1.1.7 3.8 4 6.6 7.9 6.2 3.3-.3 6-2.9 6.4-6.2.5-3.3-1.6-6.2-4.8-7.3l-1.3-.5c-1-.4-1.7-1.4-1.5-2.5.2-1.1 1.2-1.9 2.3-1.9 1 0 1.9.7 2.2 1.6.2.5.7.8 1.2.6.5-.2.8-.7.6-1.2-1-2.6-3.4-4.3-6.2-4.3z"/>
      </svg>
    ), 
    desc: 'Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.' 
  },
  { 
    id: 4, 
    name: 'Next.js', 
    category: 'Full-stack', 
    badge: 'Standard', 
    difficulty: 'Intermediate', 
    rating: 4.9, 
    icon: (
      <svg className="w-6 h-6 text-gray-900" viewBox="0 0 180 180" fill="currentColor">
        <path d="M148.3 157.6L42.2 21.3H29.1V158.7H43V43.2L135.5 161.7C139.7 161 144 159.4 148.3 157.6Z"/>
        <path d="M150.8 147.2C150.8 147.2 150.8 147.2 150.8 147.2ZM138.8 21.3H151.9V158.7H138.8V21.3Z"/>
      </svg>
    ), 
    desc: 'The React framework for full-stack web applications with hybrid static & server rendering.' 
  },
  { 
    id: 5, 
    name: 'Node.js', 
    category: 'Backend', 
    badge: 'Standard', 
    difficulty: 'Intermediate', 
    rating: 4.8, 
    icon: (
      <svg className="w-6 h-6 text-green-600" viewBox="0 0 256 296" fill="currentColor">
        <path d="M128 0L256 74V222L128 296L0 222V74L128 0Z" fill="#339933"/>
        <path d="M128 26.6L233 87.2V208.6L128 269.4L23 208.6V87.2L128 26.6Z" fill="#215732"/>
      </svg>
    ), 
    desc: 'Asynchronous event-driven JavaScript runtime designed for building scalable network apps.' 
  },
  { 
    id: 6, 
    name: 'PostgreSQL', 
    category: 'Database', 
    badge: 'Top SQL', 
    difficulty: 'Advanced', 
    rating: 4.9, 
    icon: (
      <svg className="w-6 h-6 text-blue-700" viewBox="0 0 128 128" fill="currentColor">
        <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0z"/>
      </svg>
    ), 
    desc: 'A powerful, open-source object-relational database system with proven reliability.' 
  },
  { 
    id: 7, 
    name: 'Redis', 
    category: 'Database', 
    badge: 'Cache', 
    difficulty: 'Intermediate', 
    rating: 4.8, 
    icon: (
      <svg className="w-6 h-6 text-red-600" viewBox="0 0 256 195" fill="currentColor">
        <path d="M128 0L256 64L128 128L0 64L128 0ZM0 93.3L128 157.3V195L0 130.7V93.3ZM256 93.3V130.7L128 195V157.3L256 93.3Z"/>
      </svg>
    ), 
    desc: 'In-memory data structure store used as a database, cache, and message broker.' 
  },
  { 
    id: 8, 
    name: 'JavaScript', 
    category: 'Language', 
    badge: 'Ubiquitous', 
    difficulty: 'Beginner-Friendly', 
    rating: 4.9, 
    icon: (
      <svg className="w-6 h-6 text-yellow-500" viewBox="0 0 630 630" fill="currentColor">
        <rect width="630" height="630" fill="#f7df1e"/>
        <path d="M423.2 492.1c12.7 20.2 23.4 35.8 45.4 35.8 20.3 0 33.5-10.2 33.5-31.5 0-23.7-14.7-32.6-43.7-45.7-14.8-6.6-32.3-14.6-47.5-24.9-20.7-14-36.9-33.1-36.9-66.2 0-35.9 28.8-62.8 71.7-62.8 33.1 0 54.8 13.9 71.4 39.7l-35.4 23.1c-9.2-15-20.3-21.7-36-21.7-14 0-23.8 8.9-23.8 21.6 0 13.8 8.8 21.2 29.4 30.3 18.5 8.1 41.5 17.5 57.5 30.9 20.4 17.2 31.9 40.7 31.9 76.5 0 45.8-31 77.3-79.6 77.3-43.3 0-69.6-18.1-87-46.7l35.8-23.3zM182.2 477.5c0-43.2 0-86.4 0-129.6h48.3c0 43.1 0 86.2 0 129.3 0 15 3.3 22.8 14.8 22.8 9.5 0 16-5.8 16-22.3 0-43.3 0-86.6 0-129.9h48.5c0 58.7-18.7 87.2-61.2 87.2-22.7 0-38.3-7.5-47.3-25.2v25.2h-19.1z"/>
      </svg>
    ), 
    desc: 'The versatile, ubiquitous scripting language powering dynamic interactivity across the web.' 
  },
  { 
    id: 9, 
    name: 'TypeScript', 
    category: 'Language', 
    badge: 'Essential', 
    difficulty: 'Intermediate', 
    rating: 4.9, 
    icon: (
      <svg className="w-6 h-6 text-blue-600" viewBox="0 0 128 128" fill="currentColor">
        <path d="M0 0h128v128H0z" fill="#007acc"/>
        <path d="M85.7 75.3h-12V105h-10V75.3h-12V66.8h34.1v8.5zm-45.5-8.5h-15V105h-10V66.8h-15V58.3h40v8.5z" fill="#fff"/>
      </svg>
    ), 
    desc: 'A strongly typed programming language that builds on JavaScript, giving you better tooling.' 
  },
  { 
    id: 10, 
    name: 'Java', 
    category: 'Language', 
    badge: 'Robust', 
    difficulty: 'Intermediate', 
    rating: 4.8, 
    icon: (
      <svg className="w-6 h-6 text-red-700" viewBox="0 0 256 256" fill="currentColor">
        <path d="M73.4 207.2c-15.1-4.7-25.2-14.5-25.5-29.3-.3-14.8 10-23.7 28.7-28.7 18.7-5 44-7.2 73.4-7.2 29.4 0 54.7 2.2 73.4 7.2 18.7 5 29 13.9 28.7 28.7-.3 14.8-10.4 24.6-25.5 29.3-15.1 4.7-46.7 7.2-76.6 7.2-29.9 0-61.5-2.5-76.6-7.2zm76.6-96.2c-42.3 0-76.6-3.8-76.6-8.5s34.3-8.5 76.6-8.5 76.6 3.8 76.6 8.5-34.3 8.5-76.6 8.5z"/>
      </svg>
    ), 
    desc: 'A secure, object-oriented programming language designed for portability and scale.' 
  },
  { 
    id: 11, 
    name: 'Tailwind CSS', 
    category: 'Styling', 
    badge: 'Modern', 
    difficulty: 'Beginner-Friendly', 
    rating: 4.9, 
    icon: (
      <svg className="w-6 h-6 text-sky-400" viewBox="0 0 54 33" fill="currentColor">
        <path d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.8-4.9 9.4-3.9 2 .5 3.4 2 5 3.6 2.6 2.6 5.6 5.5 12.1 5.5 7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.8 4.9-9.4 3.9-2-.5-3.4-2-5-3.6-2.6-2.6-5.6-5.5-12.1-5.5zM13.5 16.5C6.3 16.5 1.8 20.1 0 27.3c2.7-3.6 5.8-4.9 9.4-3.9 2 .5 3.4 2 5 3.6 2.6 2.6 5.6 5.5 12.1 5.5 7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.8 4.9-9.4 3.9-2-.5-3.4-2-5-3.6-2.6-2.6-5.6-5.5-12.1-5.5z"/>
      </svg>
    ), 
    desc: 'A utility-first CSS framework packed with classes that can be composed to build any design.' 
  },
  { 
    id: 12, 
    name: 'Docker', 
    category: 'DevOps', 
    badge: 'Container', 
    difficulty: 'Intermediate', 
    rating: 4.9, 
    icon: (
      <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 7h2v2h-2V7zm0 3h2v2h-2v-2zm4-3h2v2h-2V7zm0 3h2v2H2v-2zM9 7h2v2H9V7zm0 3h2v2H9v-2zm-4 3h2v2H5v-2zm4 0h2v2H9v-2zm4 0h2v2H9v-2zm4 0h2v2H9v-2zm-12 3h2v2H5v-2zm4 0h2v2H9v-2zm4 0h2v2H9v-2zm4 0h2v2H9v-2zm-16-1c-0.6 0-1 0.4-1 1s0.4 1 1 1h1v-2H5zm20 3H3c-0.6 0-1 0.4-1 1s0.4 1 1 1h22c0.6 0 1-0.4 1-1s-0.4-1-1-1zm-1-6H12v2h11.1c0.5 0 0.9-0.4 0.9-0.9v-0.2c0-0.5-0.4-0.9-0.9-0.9z"/>
      </svg>
    ), 
    desc: 'A platform designed to build, ship, and run containerized applications in any locality.' 
  },
];

export default function App() {
  const [stack, setStack] = useState([technologies[2], technologies[6]]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">
      <ToastContainer position="top-right" autoClose={2000} />

      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-2.5 py-1.5 rounded-lg font-bold text-xs tracking-wider">DS</div>
            <span className="font-bold text-base tracking-tight text-gray-900">Dev Stack</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#home" className="hover:text-purple-600">Home</a>
            <a href="#technologies" className="hover:text-purple-600">Technologies</a>
            <a href="#projects" className="hover:text-purple-600">Projects</a>
            <a href="#about" className="hover:text-purple-600">About</a>
            <a href="#contact" className="hover:text-purple-600">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-gray-700 hover:text-black">Sign In</button>
            <button className="bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium px-5 py-2 rounded-full shadow-sm">
              Sign Up
            </button>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 focus:outline-none p-1"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="md:hidden sticky top-[65px] z-40 bg-white border-b border-gray-100 px-6 py-4 space-y-3 shadow-lg">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-gray-700">Home</a>
          <a href="#technologies" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-gray-700">Technologies</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-gray-700">Projects</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-gray-700">About</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-gray-700">Contact</a>
          <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
            <button className="text-sm font-medium text-gray-700">Sign In</button>
            <button className="bg-pink-600 text-white text-sm font-medium px-4 py-2 rounded-full">Sign Up</button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.15] mb-6">
            Build Your Ideal <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">
              Development Stack
            </span>
          </h1>
          <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto md:mx-0 leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a href="#technologies" className="w-full sm:w-auto text-center bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium px-6 py-3 rounded-xl shadow-md transition">
              Explore Technologies
            </a>
            <button className="w-full sm:w-auto border border-gray-200 hover:border-gray-300 text-gray-700 text-sm font-medium px-6 py-3 rounded-xl transition">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Hero 3D Illustration Placeholder / Image Area */}
        <div className="flex justify-center">
          <div className="w-72 h-72 sm:w-80 sm:h-80 bg-gray-50 rounded-3xl flex items-center justify-center shadow-sm border border-gray-100 relative">
            <div className="text-center text-gray-400 text-xs">
              {/* চাইলে এখানে <img src="/hero-illustration.png" /> ব্যবহার করতে পারেন */}
              <span className="text-4xl mb-2 block">💻</span>
              Layered UI Illustration
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section id="technologies" className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-900 flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-2">
            <span>Explore the</span> <span className="text-purple-600">Technologies</span>
          </h2>
          <p className="text-gray-400 text-xs mt-1">Pick one technology per category to build your ideal stack</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Cards Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {technologies.map((tech) => (
              <div key={tech.id} className="bg-white border border-gray-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="p-2 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center">
                      {tech.icon}
                    </span>
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 bg-sky-50 text-sky-600 rounded-full">
                      {tech.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-1">{tech.name}</h3>
                  <p className="text-gray-500 text-xs mb-4 leading-relaxed line-clamp-2">{tech.desc}</p>
                </div>

                <div>
                  <div className="flex justify-between items-center text-[11px] text-gray-500 bg-gray-50/80 px-3 py-2 rounded-lg mb-4">
                    <span className="font-medium">{tech.category}</span>
                    <span className="text-gray-400">{tech.difficulty}</span>
                    <span className="flex items-center gap-0.5 font-semibold text-amber-500">★ {tech.rating}</span>
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

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200/80 rounded-2xl p-5 shadow-sm static lg:sticky top-24">
              <h3 className="font-bold text-gray-900 text-base mb-1">Your Stack</h3>
              <p className="text-xs text-gray-400 mb-5">{stack.length} Technology Selected</p>

              <div className="space-y-3 mb-6 min-h-[140px]">
                {stack.length === 0 ? (
                  <p className="text-xs text-gray-400 text-center py-8">No technology added yet.</p>
                ) : (
                  stack.map((item) => (
                    <div key={item.id} className="flex items-center justify-between bg-white border border-gray-200 p-3 rounded-xl text-xs shadow-sm">
                      <div className="flex items-center gap-3">
                        <span className="p-1.5 bg-gray-50 rounded-lg flex items-center justify-center">
                          {item.icon}
                        </span>
                        <div>
                          <h4 className="font-bold text-gray-900 text-xs">{item.name}</h4>
                          <p className="text-[10px] text-gray-400">{item.category}</p>
                        </div>
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
                  className="w-full border border-red-200 hover:bg-red-50 text-red-600 text-xs font-semibold py-2.5 rounded-xl transition"
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
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-xs text-gray-500">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-2 py-1 rounded font-bold text-xs">DS</div>
              <span className="font-bold text-gray-900 text-sm">Dev Stack</span>
            </div>
            <p className="leading-relaxed mb-4 text-gray-400">
              Curated tools, technologies, and resources for developers building modern web apps.
            </p>
            <div className="flex gap-4 text-gray-400 font-medium">
              <a href="#github" className="hover:text-gray-600">GitHub</a>
              <a href="#twitter" className="hover:text-gray-600">Twitter</a>
              <a href="#linkedin" className="hover:text-gray-600">LinkedIn</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-3 text-[11px]">Product</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-gray-900">Home</a></li>
              <li><a href="#technologies" className="hover:text-gray-900">Technologies</a></li>
              <li><a href="#projects" className="hover:text-gray-900">Projects</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-3 text-[11px]">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-gray-900">About</a></li>
              <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
              <li><a href="#careers" className="hover:text-gray-900">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-3 text-[11px]">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#privacy" className="hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-gray-900">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 border-t border-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
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