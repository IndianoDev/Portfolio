🧠 Masterclass: Arquitetura do Portfólio Juan.dev
1. O Motor: React + Vite + Tailwind v4
Você saiu do Next.js para o Vite porque precisava de velocidade. No Vite, o carregamento é instantâneo (HMR - Hot Module Replacement).

Tailwind v4: A grande diferença que usamos aqui foi o @import "tailwindcss"; no CSS. Na v4, o Tailwind não precisa mais de um arquivo de configuração gigante para funcionar; ele detecta automaticamente suas classes no HTML.

PostCSS: É o "tradutor". Ele pega o código Tailwind e transforma em CSS que qualquer navegador entende.

2. O Design "Brutalista Clean" (Preto, Branco, Vermelho)
Para fugir da "cara de IA", usamos conceitos de design de revistas:

Tipografia Fluida: Usamos text-[12vw]. O vw significa Viewport Width. Isso faz a letra crescer e diminuir conforme o tamanho da tela, mantendo sempre o impacto visual.

Mix-Blend-Difference: Essa classe do Tailwind (mix-blend-difference) é o que faz o menu "inverter" a cor. Se o fundo é preto, o texto fica branco. Se passar por algo branco, o texto fica preto automaticamente.

Espaçamento (Padding/Margin): Usamos py-32 e py-40. Portfólios profissionais precisam de "respiro". Espaços grandes passam uma sensação de luxo e calma.

3. Framer Motion (A Alma do Projeto)
Essa é a biblioteca que remove a "estática" do site. Aprendemos 3 propriedades principais:

initial: Como o elemento começa (ex: invisível e 30px abaixo: opacity: 0, y: 30).

whileInView: O estado final quando o usuário faz o scroll até o elemento.

viewport: { once: true }: Isso faz a animação acontecer apenas na primeira vez que você desce a página, para não ficar repetitivo.

transition: Controlamos o duration (tempo) e o ease (suavidade). O easeOut faz a animação começar rápida e parar suavemente.

4. Tailwind Aprofundado (Truques de Mestre)
Aqui estão as classes "secretas" que usei para dar o toque humano:

backdrop-blur-md: Cria o efeito de "vidro fosco" no menu.

selection:bg-red-600/40: Isso muda a cor de quando você seleciona um texto com o mouse. É um detalhe que 99% dos devs esquecem, mas que mostra capricho.

grayscale hover:grayscale-0: Usamos na sua foto. Ela começa em preto e branco (estético) e ganha vida (cor) quando o usuário interage.

border-white/5: Em vez de usar cinza, usamos branco com apenas 5% de opacidade. Isso cria bordas elegantes que só aparecem sutilmente sobre o fundo preto.

5. Estrutura de Componentes
Header: Fixo (fixed) com alta prioridade de camada (z-50).

Hero: Onde usamos min-h-screen para garantir que seu nome ocupe a tela toda do usuário, independente do dispositivo.

Layout Assimétrico: No "Sobre Mim", usamos um grid de 2 colunas, mas com elementos desalinhados (o badge flutuante e a borda torta) para quebrar a geometria perfeita e parecer feito à mão.

🛠️ Como Estudar este Código? (Seu Próximo Passo)
Para você realmente dizer que domina isso, faça estes 3 testes:

Mude a Física: No CustomCursor, mude o stiffness (rigidez) de 250 para 50. Você vai ver o cursor ficar muito "pesado" e lento. Isso te ensina sobre física de animação.

Mude a Cor Primária: Dê um Ctrl + F e substitua todos os red-600 por blue-600. Veja como o site muda de "agressivo/criativo" para "corporativo/tech".

Crie um Novo Card: Tente duplicar o componente de Projeto, mas inverta a ordem (Texto na esquerda, Imagem na direita).

Você agora tem o código e o mapa da mina. Esse projeto não é só um portfólio, é o seu laboratório.

Quer que eu te explique mais algum ponto específico sobre como o TypeScript está validando esses componentes ou está pronto para começar a preencher com seus dados reais?