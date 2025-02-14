'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Merriweather } from 'next/font/google';

const merriweather = Merriweather({
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function Home() {
  const [showEmail, setShowEmail] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Configurações de animação
  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed w-full top-0 p-6 bg-black/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-gray-400">{'{'}</span>
            <span className="text-[#3ccf91]">A</span>
            <span className="text-gray-400">{'}'}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="hover:text-[#3ccf91] transition-colors">Home</Link>
            <Link href="#projects" className="hover:text-[#3ccf91] transition-colors">Projects</Link>
            <Link href="#blog" className="hover:text-[#3ccf91] transition-colors">Blog</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 md:hidden pt-20">
          <nav className="flex flex-col items-center gap-8 p-6">
            <Link href="/" className="text-xl hover:text-[#3ccf91]">Home</Link>
            <Link href="#projects" className="text-xl hover:text-[#3ccf91]">Projects</Link>
            <Link href="#blog" className="text-xl hover:text-[#3ccf91]">Blog</Link>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <motion.section
        className="pt-32 px-6 min-h-screen flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto w-full relative">
          {/* Dot Pattern */}
          <div className="absolute -left-4 top-20 w-48 h-48 dot-pattern opacity-20" />

          <motion.p
            className="text-[#3ccf91] text-xl mb-4"
            {...fadeInUp}
          >
            Hey there!, I'm-
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
            <p className="text-gray-400 text-lg md:text-xl">
              Construindo soluções back-end eficientes e seguras<br />
            </p>
          </div>

          <div className="space-y-2 mb-12 text-gray-400">
            <p className="flex items-center gap-2">
              <span>🚀</span> Exploring opportunities and side projects.
            </p>
            <p className="flex items-center gap-2">
              <span>💻</span> Currently building{" "}
              <Link href="/" className="text-[#3ccf91] hover:underline">
                personal projects
              </Link>.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4">
            <Link href="https://github.com/andreyrosa" target="_blank" className="social-button">
              <i className="fa-brands fa-github"></i>
              Github
            </Link>
            <Link href="https://www.linkedin.com/in/andrey-rosa-b04660251/" target="_blank" className="social-button">
              <i className="fa-brands fa-linkedin"></i>
              Linkedin
            </Link>
            <button onClick={() => setShowEmail(!showEmail)} className="social-button">
              <i className="fa-solid fa-envelope"></i>
              Email
            </button>
          </div>

          {showEmail && (
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
                    setShowEmail(false);
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
      </motion.section>

      {/* About Section */}
      <motion.section
        className="px-6 py-20 relative"
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
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
              <h2 className="text-2xl md:text-3xl font-bold mb-8">⚡ About Me</h2>
              <div className="space-y-8 text-gray-300">
                <p className="font-['Merriweather'] italic text-lg md:text-xl leading-loose">
                  Olá! Meu nome é <span className="text-[#3ccf91] font-normal not-italic">Andrey Rosa</span> e sou um entusiasta da tecnologia e estudante de Ciências da Computação.
                </p>
                <p className="font-['Merriweather'] italic text-lg md:text-xl leading-loose">
                  Desde 2020, tenho explorado o mundo do <span className="text-[#3ccf91] font-normal not-italic">Desenvolvimento de software</span>, adquirindo experiência com linguagens
                  como Python, JavaScript e, atualmente, estou me aprofundando em Java.
                </p>
                <p className="font-['Merriweather'] italic text-lg md:text-xl leading-loose">
                  Apesar de ter começado minha jornada acadêmica recentemente, já possuo uma base sólida em <span className="text-[#3ccf91] font-normal not-italic">desenvolvimento de software</span> e versionamento de código
                  utilizando <span className="text-[#3ccf91] font-normal not-italic">Git</span>.
                </p>
                <p className="text-gray-400 text-base md:text-lg mt-8 leading-relaxed font-light tracking-wide">
                  Estou constantemente buscando aprender novas tecnologias e aprimorar minhas habilidades para me tornar um desenvolvedor mais completo.
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

      {/* Keep In Touch Section */}
      <motion.section
        className="px-6 py-20 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Keep In Touch.</h2>
        <p className="mb-8 text-gray-300">
          I'm currently specializing in <span className="text-[#3ccf91]">Back-end Development</span>.<br />
          Feel free to get in touch and talk more about your projects.
        </p>
        <div className="flex justify-center gap-4 flex-wrap relative">
          <Link href="https://github.com/andreyrosa" target="_blank" className="social-button">
            <i className="fa-brands fa-github"></i>
            Github
          </Link>
          <Link href="https://www.linkedin.com/in/andrey-rosa-887b8733a/" target="_blank" className="social-button">
            <i className="fa-brands fa-linkedin"></i>
            Linkedin
          </Link>
          <button onClick={() => setShowEmail(!showEmail)} className="social-button">
            <i className="fa-solid fa-envelope"></i>
            Email
          </button>

          {showEmail && (
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
                    setShowEmail(false);
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
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="px-6 py-8 border-t border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
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
