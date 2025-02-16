'use client';
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Merriweather, Poppins, IBM_Plex_Mono } from 'next/font/google';

const merriweather = Merriweather({
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const poppins = Poppins({
  weight: ['300', '400'],
  subsets: ['latin'],
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['300', '400'],
  subsets: ['latin'],
});

export default function Home() {
  const [showEmailHero, setShowEmailHero] = useState(false);
  const [showEmailContact, setShowEmailContact] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrollY } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      const windowHeight = window.innerHeight;
      setScrollProgress(latest / windowHeight);
    });

    return () => unsubscribe();
  }, [scrollY]);

  // Reveal animation configuration
  const revealVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 }
  };

  // Configurações de animação
  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header */}
      <motion.header
        className="fixed w-full top-0 p-6 bg-black/50 backdrop-blur-sm z-50"
        style={{
          opacity: 1 - (scrollProgress * 0.5), // Header fades out slower
        }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-gray-400">{'{'}</span>
            <span className="text-[#3ccf91]">A</span>
            <span className="text-gray-400">{'}'}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link href="/" className={`hover:text-[#3ccf91] transition-colors ${ibmPlexMono.className} font-light`}>Home</Link>
            <Link href="#projects" className={`hover:text-[#3ccf91] transition-colors ${ibmPlexMono.className} font-light`}>Projects</Link>
            <Link href="#blog" className={`hover:text-[#3ccf91] transition-colors ${ibmPlexMono.className} font-light`}>Blog</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl relative w-6 h-6"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen
              ? "rotate-45 top-3"
              : "rotate-0 top-1"
              }`} />
            <div className={`absolute w-6 h-0.5 bg-white top-3 transition-all duration-300 ${isMobileMenuOpen
              ? "opacity-0"
              : "opacity-100"
              }`} />
            <div className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen
              ? "-rotate-45 top-3"
              : "rotate-0 top-5"
              }`} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-40 md:hidden pt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.2,
              ease: "easeOut"
            }}
          >
            <nav className="flex flex-col items-center gap-8 p-6">
              <Link
                href="/"
                className={`text-xl hover:text-[#3ccf91] ${ibmPlexMono.className} font-light`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#projects"
                className={`text-xl hover:text-[#3ccf91] ${ibmPlexMono.className} font-light`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#blog"
                className={`text-xl hover:text-[#3ccf91] ${ibmPlexMono.className} font-light`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.section
        className="pt-32 px-6 min-h-screen flex items-center relative"
        style={{
          opacity: 1 - scrollProgress,
          transform: `translateY(${scrollProgress * 50}px)` // Slight parallax effect
        }}
      >
        <div className="max-w-7xl mx-auto w-full relative">
          {/* Dot Pattern */}
          <div className="absolute -left-4 top-20 w-48 h-48 dot-pattern opacity-20" />

          <motion.p
            className="text-[#3ccf91] text-xl mb-4"
            {...fadeInUp}
          >
            Hey there! I'm-
          </motion.p>
          <motion.h1
            className="text-4xl md:text-7xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Andrey Rosa.
          </motion.h1>

          <div className="space-y-2 mb-8">
            <h2 className="text-2xl md:text-3xl">Back-end Software Engineer.</h2>
            <p className={`text-gray-400 text-lg md:text-xl ${ibmPlexMono.className}`}>
              Building reliable and efficient Back-end applications.
              <br />
            </p>
          </div>

          <div className="space-y-2 sm:space-y-3 mb-8 sm:mb-12 text-gray-400 px-4 sm:px-0">
            <p className="flex items-center gap-2 text-sm sm:text-base">
              <span className="text-base sm:text-lg">🚀</span>
              <span className="flex-1">Exploring opportunities and side projects.</span>
            </p>
            <p className="flex items-center gap-2 text-sm sm:text-base">
              <span className="text-base sm:text-lg">💻</span>
              <span className="flex-1">Currently building{" "}
                <Link href="/" className="text-[#3ccf91] hover:underline">
                  personal projects
                </Link>.
              </span>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-3 max-w-full">
            <Link
              href="https://github.com/andreyrosa"
              target="_blank"
              className={`social-button flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base ${poppins.className}`}
            >
              <i className="fa-brands fa-github text-lg sm:text-xl"></i>
              Github
            </Link>
            <Link
              href="https://www.linkedin.com/in/andrey-rosa-887b8733a"
              target="_blank"
              className={`social-button flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base ${poppins.className}`}
            >
              <i className="fa-brands fa-linkedin text-lg sm:text-xl"></i>
              Linkedin
            </Link>
            <button
              onClick={() => setShowEmailHero(!showEmailHero)}
              className={`social-button flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base ${poppins.className}`}
            >
              <i className="fa-solid fa-envelope text-lg sm:text-xl"></i>
              Email
            </button>
          </div>

          {showEmailHero && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute mt-2 w-80 p-4 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-700 shadow-xl"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-gray-400 text-xs mb-1">Meu email</p>
                  <p className="text-[#3ccf91] font-medium text-sm">andrey19rosa951@gmail.com</p>
                </div>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('andrey19rosa951@gmail.com');
                    setShowEmailHero(false);
                    setShowAlert(true);
                    setTimeout(() => setShowAlert(false), 3000);
                  }}
                  className="px-3 py-1.5 bg-[#3ccf91]/10 hover:bg-[#3ccf91]/20 text-[#3ccf91] rounded-md transition-colors duration-200 flex items-center gap-1.5 text-sm"
                >
                  <i className="fa-regular fa-copy"></i>
                  Copiar
                </button>
              </div>
            </motion.div>
          )}

          {/* Alerta personalizado */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: showAlert ? 1 : 0, x: showAlert ? 0 : 100 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-6 right-6 z-50"
          >
            {showAlert && (
              <div className="bg-black/80 backdrop-blur-sm border-t-2 border-[#3ccf91] px-6 py-4 rounded-md shadow-lg">
                <div className="flex items-center gap-2">
                  <i className="fa-regular fa-circle-check text-[#3ccf91]"></i>
                  <p className="text-white">Email copiado com sucesso!</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Scroll Down Arrow */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <button
            className="text-green-400 hover:text-[#3ccf91] transition-colors duration-300"
            aria-label="Scroll down"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </button>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="px-6 py-20 relative"
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={revealVariants}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div
              className="w-full md:w-2/3"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={`text-2xl md:text-3xl font-bold mb-8 ${poppins.className}`}>⚡ About Me</h2>
              <div className="space-y-8 text-gray-300">
                <p className="font-['Merriweather'] italic text-lg md:text-xl leading-loose">
                  Hello! My name is <span className="text-[#3ccf91] font-normal not-italic">Andrey Rosa</span> and I'm a technology enthusiast and Computer Science student.
                </p>
                <p className="font-['Merriweather'] italic text-lg md:text-xl leading-loose">
                  Since 2020, I have been exploring the world of <span className="text-[#3ccf91] font-normal not-italic">Software Development</span>, gaining experience with languages
                  like Python, JavaScript, and currently, I am diving deeper into Java.
                </p>
                <p className="font-['Merriweather'] italic text-lg md:text-xl leading-loose">
                  Although I started my academic journey recently, I already have a solid foundation in <span className="text-[#3ccf91] font-normal not-italic">software development</span> and code versioning
                  using <span className="text-[#3ccf91] font-normal not-italic">Git</span>.
                </p>
                <p className="text-gray-400 text-base md:text-lg mt-8 leading-relaxed font-light tracking-wide">
                  I am constantly striving to learn new technologies and improve my skills to become a more well-rounded developer.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="w-full md:w-1/3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-64 h-64 mx-auto">
                <Image
                  src="https://i.ibb.co/XxyM4hw2/profile.jpg"
                  alt="Andrey Rosa"
                  fill
                  className="rounded-full object-cover object-center"
                  style={{ objectPosition: "50% 50%" }}
                />
                <div className="absolute -right-2 bottom-4 dot-pattern w-24 h-24 opacity-20" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="px-6 py-20 relative"
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={revealVariants}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-2xl md:text-3xl font-bold mb-8 ${poppins.className}`}>
            <span className="text-[#3ccf91]">&lt;</span> Projects <span className="text-[#3ccf91]">/&gt;</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Card 1 */}
            <motion.div
              className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 hover:border-[#3ccf91] transition-colors duration-300"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-48 w-full bg-gray-800">
                <Image
                  src="/project1.jpg"
                  alt="Project 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${poppins.className}`}>Project Name 1</h3>
                <p className="text-gray-400 mb-4">
                  Description of your first project. Explain what it does and what technologies were used.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`text-sm px-3 py-1 rounded-full bg-[#3ccf91]/10 text-[#3ccf91] ${ibmPlexMono.className}`}>
                    React
                  </span>
                  <span className={`text-sm px-3 py-1 rounded-full bg-[#3ccf91]/10 text-[#3ccf91] ${ibmPlexMono.className}`}>
                    Node.js
                  </span>
                  <span className={`text-sm px-3 py-1 rounded-full bg-[#3ccf91]/10 text-[#3ccf91] ${ibmPlexMono.className}`}>
                    MongoDB
                  </span>
                </div>
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/yourusername/project1"
                    target="_blank"
                    className="social-button flex items-center gap-2 px-4 py-2"
                  >
                    <i className="fa-brands fa-github"></i>
                    Code
                  </Link>
                  <Link
                    href="https://project1.com"
                    target="_blank"
                    className="social-button flex items-center gap-2 px-4 py-2"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    Live Demo
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Project Card 2 */}
            <motion.div
              className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 hover:border-[#3ccf91] transition-colors duration-300"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative h-48 w-full bg-gray-800">
                <Image
                  src="/project2.jpg"
                  alt="Project 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${poppins.className}`}>Project Name 2</h3>
                <p className="text-gray-400 mb-4">
                  Description of your second project. Explain what it does and what technologies were used.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`text-sm px-3 py-1 rounded-full bg-[#3ccf91]/10 text-[#3ccf91] ${ibmPlexMono.className}`}>
                    Python
                  </span>
                  <span className={`text-sm px-3 py-1 rounded-full bg-[#3ccf91]/10 text-[#3ccf91] ${ibmPlexMono.className}`}>
                    Django
                  </span>
                  <span className={`text-sm px-3 py-1 rounded-full bg-[#3ccf91]/10 text-[#3ccf91] ${ibmPlexMono.className}`}>
                    PostgreSQL
                  </span>
                </div>
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/yourusername/project2"
                    target="_blank"
                    className="social-button flex items-center gap-2 px-4 py-2"
                  >
                    <i className="fa-brands fa-github"></i>
                    Code
                  </Link>
                  <Link
                    href="https://project2.com"
                    target="_blank"
                    className="social-button flex items-center gap-2 px-4 py-2"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    Live Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* View More Projects Button */}
          <div className="text-center mt-12">
            <Link
              href="https://github.com/andreyrosa"
              target="_blank"
              className={`inline-block px-6 py-3 border border-[#3ccf91] text-[#3ccf91] rounded-md hover:bg-[#3ccf91] hover:text-black transition-colors duration-300 ${poppins.className}`}
            >
              View More on GitHub
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Keep In Touch Section */}
      <motion.section
        className="px-6 py-20 text-center relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={revealVariants}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Keep In Touch.</h2>
        <p className="mb-8 text-gray-300">
          I'm currently specializing in <span className="text-[#3ccf91]">Back-end Development</span>.<br />
          Feel free to get in touch and talk more about your projects.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-full">
          <Link
            href="https://github.com/andreyrosa"
            target="_blank"
            className={`social-button flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base ${poppins.className}`}
          >
            <i className="fa-brands fa-github text-lg sm:text-xl"></i>
            Github
          </Link>
          <Link
            href="https://www.linkedin.com/in/andrey-rosa-887b8733a"
            target="_blank"
            className={`social-button flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base ${poppins.className}`}
          >
            <i className="fa-brands fa-linkedin text-lg sm:text-xl"></i>
            Linkedin
          </Link>
          <button
            onClick={() => setShowEmailContact(!showEmailContact)}
            className={`social-button flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base ${poppins.className}`}
          >
            <i className="fa-solid fa-envelope text-lg sm:text-xl"></i>
            Email
          </button>
        </div>

        {showEmailContact && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute mt-2 left-1/2 transform -translate-x-1/2 w-80 p-4 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-700 shadow-xl"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-gray-400 text-xs mb-1">Meu email</p>
                <p className="text-[#3ccf91] font-medium text-sm">andrey19rosa951@gmail.com</p>
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText('andrey19rosa951@gmail.com');
                  setShowEmailContact(false);
                  setShowAlert(true);
                  setTimeout(() => setShowAlert(false), 3000);
                }}
                className="px-3 py-1.5 bg-[#3ccf91]/10 hover:bg-[#3ccf91]/20 text-[#3ccf91] rounded-md transition-colors duration-200 flex items-center gap-1.5 text-sm"
              >
                <i className="fa-regular fa-copy"></i>
                Copiar
              </button>
            </div>
          </motion.div>
        )}
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="px-6 py-8 border-t border-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={revealVariants}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-2">Designed and Developed by Andrey Rosa.</p>
          <p className="text-gray-400">
            Built with{" "}
            <span className="text-[#3ccf91]">Nextjs</span>{" "}
          </p>
        </div>
      </motion.footer>
    </main>
  );
}
