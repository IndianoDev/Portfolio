import { motion, useScroll, useSpring } from 'framer-motion';
import { RiExternalLinkLine, RiGithubFill, RiLinkedinBoxFill, RiMailFill, } from 'react-icons/ri';

export default function App() {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="bg-[#050505] text-white selection:bg-red-600/40 selection:text-white overflow-x-hidden">
      {/* Barra de Progresso Vermelha */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-red-600 origin-left z-[100]" style={{ scaleX }} />

      <nav className="fixed top-0 w-full z-50 p-4 md:p-6 mix-blend-difference">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.span
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-lg md:text-xl font-black tracking-tighter"
          >
            JUAN<span className="text-red-600">.</span>DEV
          </motion.span>
          <div className="flex flex-wrap justify-end gap-3 md:gap-6 text-[9px] md:text-[10px] uppercase tracking-widest font-bold">
            <a href="#projetos" className="hover:text-red-500 transition-all">Projetos</a>
            <a href="#sobre" className="hover:text-red-500 transition-all">Sobre</a>
            <a href="#stack" className="hover:text-red-500 transition-all">Stack</a>
            <a href="#contato" className="hover:text-red-500 transition-all text-red-600">Contato</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 relative overflow-hidden bg-[#050505] pt-20 md:pt-0">
        <div className="absolute top-1/2 -left-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* COLUNA DA ESQUERDA: TEXTOS */}
          <div className="flex flex-col space-y-8 md:space-y-12 mt-10 md:mt-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-[15vw] md:text-[10vw] lg:text-[7vw] font-black leading-[0.85] md:leading-[0.8] tracking-tighter uppercase mt-8 md:mt-0">
                FULL STACK <br />
                <span className="text-red-600 italic">DEVELOPER</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="max-w-md text-slate-400 text-base md:text-xl font-light leading-relaxed md:leading-tight"
            >
              Estudante de Engenharia de Software na UnB. <br className="hidden md:block" />
              Transformando lógica complexa em experiências visuais brutais.
            </motion.p>

            {/* BARRA "ABOUT ME" */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-2 w-full max-w-[200px] md:max-w-sm"
            >
              <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">About me</span>
              <div className="h-[1px] w-full bg-white/10 relative overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "0%" }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                  className="absolute inset-0 bg-red-600 w-1/3"
                />
              </div>
            </motion.div>

            {/* ÍCONES SOCIAIS */}
            <div className="flex gap-4 md:gap-6 items-center pt-2 md:pt-4">
            <RiGithubFill href="https://github.com/IndianoDev" className="hover:text-red-600 cursor-pointer transition-all hover:scale-110" size={28} />
            <RiLinkedinBoxFill href="https://www.linkedin.com/in/juan-costa-indiano-8747a2239/"className="hover:text-red-600 cursor-pointer transition-all hover:scale-110" size={28} />
            <RiMailFill  href="mailto:juan75indiano@gmail.com" className="hover:text-red-600 cursor-pointer transition-all hover:scale-110" size={28} />
          </div>
          </div>

          {/* COLUNA DA DIREITA: NOTEBOOK */}
          <div className="relative flex justify-center items-center mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
              transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 1 } }}
              className="relative z-10 w-full flex justify-center"
            >
              <div className="absolute inset-0 bg-red-600/10 blur-3xl rounded-full" />
              <img
                src="/laptop (1).png"
                alt="Tech Element"
                className="w-[80%] md:w-full max-w-[300px] md:max-w-[500px] h-auto relative z-10 drop-shadow-2xl"
              />
            </motion.div>

            <div className="absolute -right-10 flex-col gap-4 text-[10px] font-mono text-white/20 hidden xl:flex">
              <span className="text-red-600">01</span><span>02</span><span>03</span><span>04</span>
            </div>
          </div>
        </div>

        <div className="absolute right-4 md:right-10 bottom-10 hidden md:block">
          <p className="rotate-90 origin-right text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold">
            Scroll Down —
          </p>
        </div>
      </section>

      {/* SOBRE MIM */}
      <section id="sobre" className="py-20 md:py-32 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group w-full max-w-[350px] mx-auto md:max-w-none md:mx-0"
          >
            <div className="absolute -inset-4 border-2 border-red-600/30 rounded-[2rem] md:group-hover:rotate-3 transition-transform duration-500" />
            <div className="relative overflow-hidden rounded-[2rem] bg-neutral-900 aspect-square">
              <img
                src="/juan.jpg"
                alt="Juan Indiano"
                className="w-full h-full object-cover grayscale md:hover:grayscale-0 transition-all duration-700 md:scale-110 md:group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-red-600/10 mix-blend-multiply md:group-hover:opacity-0 transition-opacity" />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-white text-black p-4 md:p-6 rounded-2xl shadow-2xl scale-90 md:scale-100 origin-bottom-right"
            >
              <span className="text-[10px] md:text-xs font-black uppercase tracking-widest leading-none">Status:</span>
              <p className="text-sm md:text-lg font-bold text-red-600 leading-tight">Disponível</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-center md:text-left mt-8 md:mt-0"
          >
            <h2 className="text-xs md:text-sm font-mono text-red-600 uppercase tracking-[0.5em]">01. A Trajetória</h2>
            <h3 className="text-3xl md:text-5xl font-black leading-tight tracking-tighter uppercase">
              Do código estruturado <br className="hidden md:block" /> ao design <span className="italic">brutalista</span>.
            </h3>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              Meu nome é Juan e minha mente funciona em dois tempos: a precisão acadêmica da <span className="text-white">UnB</span> e a velocidade de entrega do mercado.
            </p>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              Não acredito em "apenas funcionar". Acredito que o backend deve ser uma fortaleza e o frontend um espetáculo visual. Se o código não for elegante, ele ainda não está pronto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO DE PROJETOS */}
      <section id="projetos" className="py-20 md:py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs md:text-sm font-mono text-red-600 mb-12 md:mb-20 uppercase tracking-[0.5em] text-center md:text-left">// Projetos Selecionados</h2>

          <div className="space-y-24 md:space-y-60">
            {/* PROJETO 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative flex flex-col md:flex-row gap-8 md:gap-12 items-center"
            >
              <div className="w-full md:w-2/3 h-[250px] sm:h-[350px] md:h-[450px] bg-neutral-900 rounded-2xl md:rounded-3xl overflow-hidden border border-white/5 relative shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                <div className="relative h-full w-full overflow-hidden">
                  <video
                    src="/videoportal.mp4"
                    autoPlay loop muted playsInline
                    className="w-full h-full object-cover opacity-80 md:opacity-50 md:group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/40 md:via-transparent to-transparent opacity-90 md:opacity-80 pointer-events-none" />
                </div>
              </div>

              <div className="w-full md:w-1/3 space-y-4 md:space-y-6 text-center md:text-left">
                <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">Portal <br className="hidden md:block" /><span className="text-red-600">Deputados</span></h3>
                <p className="text-slate-400 text-sm md:text-lg font-light leading-relaxed">
                  Plataforma robusta para monitoramento de dados públicos. Utilizei Axios para integração com a API da Câmara, focando em performance e filtragem dinâmica de dados.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  <span className="text-[9px] md:text-[10px] px-3 py-1 bg-red-600/10 border border-red-600/30 text-red-500 rounded-full font-bold">NEXT.JS</span>
                  <span className="text-[9px] md:text-[10px] px-3 py-1 bg-white/5 border border-white/10 text-white rounded-full font-bold">AXIOS</span>
                  <span className="text-[9px] md:text-[10px] px-3 py-1 bg-white/5 border border-white/10 text-white rounded-full font-bold">REST API</span>
                </div>
                <a
                  href="https://portal-deputados.netlify.app/" target="_blank" rel="noreferrer"
                  className="inline-flex items-center justify-center md:justify-start gap-3 text-white hover:text-red-600 transition-colors uppercase font-black text-xs md:text-sm tracking-widest pt-4 border-b border-red-600 pb-2 mx-auto md:mx-0"
                >
                  Ver Live Project <RiExternalLinkLine size={18} />
                </a>
              </div>
            </motion.div>

            {/* PROJETO 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center"
            >
              <div className="w-full md:w-2/3 h-[250px] sm:h-[350px] md:h-[450px] bg-neutral-900 rounded-2xl md:rounded-3xl overflow-hidden border border-white/5 relative shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tl from-red-600/20 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                <div className="relative h-full w-full overflow-hidden">
                  <video
                    src="/videojecalhas.mp4"
                    autoPlay loop muted playsInline
                    className="w-full h-full object-cover opacity-80 md:opacity-50 md:group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/40 md:via-transparent to-transparent opacity-90 md:opacity-80 pointer-events-none" />
                </div>
              </div>

              <div className="w-full md:w-1/3 space-y-4 md:space-y-6 text-center md:text-right md:items-end flex flex-col">
                <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">JE <br className="hidden md:block" /><span className="text-red-600">Calhas</span></h3>
                <p className="text-slate-400 text-sm md:text-lg font-light leading-relaxed">
                  Landing page corporativa de alta performance. Desenvolvida para conversão, unindo a velocidade do Next.js com uma interface limpa e profissional para o setor industrial.
                </p>
                <div className="flex flex-wrap justify-center md:justify-end gap-2">
                  <span className="text-[9px] md:text-[10px] px-3 py-1 bg-red-600/10 border border-red-600/30 text-red-500 rounded-full font-bold">NEXT.JS</span>
                  <span className="text-[9px] md:text-[10px] px-3 py-1 bg-white/5 border border-white/10 text-white rounded-full font-bold">TAILWIND</span>
                  <span className="text-[9px] md:text-[10px] px-3 py-1 bg-white/5 border border-white/10 text-white rounded-full font-bold">SEO OPTIMIZED</span>
                </div>
                <a
                  href="https://jecalhas.com.br" target="_blank" rel="noreferrer"
                  className="inline-flex items-center justify-center md:justify-start gap-3 text-white hover:text-red-600 transition-colors uppercase font-black text-xs md:text-sm tracking-widest pt-4 border-b border-red-600 pb-2 mx-auto md:mx-0"
                >
                  Ver Live Project <RiExternalLinkLine size={18} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MINHAS STACKS */}
      <section id="stack" className="py-20 md:py-32 px-6 bg-[#080808] overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl md:text-8xl font-black text-white/5 absolute left-0 right-0 top-10 md:top-0 pointer-events-none select-none break-all"
          >
            TECNOLOGIAS
          </motion.h2>

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-16 md:mt-20">
            {[
              { name: "React", level: "Expert" }, { name: "Node.js", level: "Advanced" },
              { name: "Python", level: "Lover" }, { name: "TypeScript", level: "Standard" },
              { name: "PostgreSQL", level: "Logic" }, { name: "Tailwind", level: "V4" },
              { name: "Firebase", level: "Realtime" }, { name: "Git", level: "Flow" },
            ].map((stack, i) => (
              <motion.div
                key={stack.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, borderColor: "#dc2626" }}
                transition={{ delay: i * 0.05 }}
                className="p-4 md:p-8 border border-white/5 bg-neutral-900/50 backdrop-blur-sm rounded-xl text-left group transition-all"
              >
                <span className="text-red-600 font-mono text-[10px] md:text-xs block mb-1 md:mb-2">// {stack.level}</span>
                <h4 className="text-lg md:text-2xl font-bold md:group-hover:text-red-600 transition-colors uppercase">{stack.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contato" className="py-12 md:py-20 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-black italic">VAMOS CRIAR?</h2>
          <a href="mailto:juan75indiano@gmail.com" className="text-lg md:text-2xl hover:text-red-600 transition-all font-light border-b border-red-600 break-all">
            juan75indiano@gmail.com
          </a>
          <div className="flex gap-4 md:gap-6 items-center pt-2 md:pt-4">
            <RiGithubFill href="https://github.com/IndianoDev" className="hover:text-red-600 cursor-pointer transition-all hover:scale-110" size={28} />
            <RiLinkedinBoxFill href="https://www.linkedin.com/in/juan-costa-indiano-8747a2239/"className="hover:text-red-600 cursor-pointer transition-all hover:scale-110" size={28} />
            <RiMailFill  href="mailto:juan75indiano@gmail.com" className="hover:text-red-600 cursor-pointer transition-all hover:scale-110" size={28} />
          </div>
        </div>
      </footer>
    </div>
  );
}