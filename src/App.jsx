import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCard from './components/TechCard';
import StackSidebar from './components/StackSidebar';
import Footer from './components/Footer';

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  // Fetch technologies from local JSON
  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading technologies:', error);
        toast.error('Failed to load technologies data.');
        setLoading(false);
      });
  }, []);

  // Add item to stack
  const handleAddToStack = (tech) => {
    const isAlreadyAdded = selectedStack.some((item) => item.id === tech.id);

    if (isAlreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`, {
        position: 'top-right',
        autoClose: 3000,
      });
      return;
    }

    setSelectedStack([...selectedStack, tech]);
    toast.success(`${tech.name} added to your stack!`, {
      position: 'top-right',
      autoClose: 2500,
    });
  };

  // Remove single item from stack
  const handleRemoveFromStack = (id) => {
    const itemToRemove = selectedStack.find((item) => item.id === id);
    const updatedStack = selectedStack.filter((item) => item.id !== id);
    setSelectedStack(updatedStack);

    if (itemToRemove) {
      toast.info(`${itemToRemove.name} removed from stack.`, {
        position: 'top-right',
        autoClose: 2000,
      });
    }
  };

  // Clear all items
  const handleClearAll = () => {
    if (selectedStack.length === 0) return;
    setSelectedStack([]);
    toast.error('Cleared all technologies from stack.', {
      position: 'top-right',
      autoClose: 2500,
    });
  };

  // Categories list for filtering
  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Styling', 'Language', 'DevOps', 'Tools'];

  const filteredTechnologies =
    selectedCategory === 'All'
      ? technologies
      : technologies.filter((tech) => tech.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <ToastContainer theme="dark" />

      {/* Navbar */}
      <Navbar selectedCount={selectedStack.length} />

      {/* Hero Section */}
      <Hero />

      {/* Main Content Area */}
      <main id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow w-full">
        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 custom-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === category
                  ? 'brand-bg-gradient text-white shadow-lg shadow-indigo-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid Layout: Tech Cards & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Tech Cards (2 Columns on large screens) */}
          <div className="lg:col-span-2">
            {loading ? (
              <div className="text-center py-20 text-slate-500">Loading technologies...</div>
            ) : filteredTechnologies.length === 0 ? (
              <div className="text-center py-20 text-slate-500">No technologies found in this category.</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredTechnologies.map((tech) => (
                  <TechCard
                    key={tech.id}
                    tech={tech}
                    onAdd={handleAddToStack}
                    isAdded={selectedStack.some((item) => item.id === tech.id)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Selected Stack Sidebar (1 Column) */}
          <div className="lg:col-span-1">
            <StackSidebar
              stackItems={selectedStack}
              onRemove={handleRemoveFromStack}
              onClearAll={handleClearAll}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;