# Site Institucional

Site institucional moderno e responsivo desenvolvido com Next.js 14, TypeScript, e Tailwind CSS, rodando em um contêiner Docker Alpine.

## Tecnologias Utilizadas

- **Next.js 14**: Framework React para renderização híbrida e SSG
- **TypeScript**: Tipagem estática para JavaScript
- **Tailwind CSS**: Framework CSS utilitário
- **Framer Motion**: Biblioteca para animações
- **Docker**: Contêiner baseado em Alpine Linux
- **React Icons**: Biblioteca de ícones

## Estrutura do Projeto

```
├── src/
│   ├── app/              # Arquivos do App Router do Next.js
│   ├── components/       # Componentes reutilizáveis
│   ├── lib/              # Funções e utilitários
│   └── styles/           # Estilos globais e componentes
├── public/               # Arquivos estáticos (imagens, fontes)
├── Dockerfile            # Configuração do Docker
├── docker-compose.yml    # Configuração do Docker Compose
└── package.json          # Dependências e scripts
```

## How to Run

### Using Docker (Recommended)

1. Make sure you have Docker and Docker Compose installed on your system
2. Clone this repository
3. Run the command:

```bash
docker compose up
```

The site will be available at [http://localhost:3000](http://localhost:3000)

### Without Docker (Local Development)

1. Make sure you have Node.js installed (version 18+)
2. Clone this repository
3. Run:

```bash
npm install
npm run dev
```

## Customization

- Replace sample texts with your own information in each component
- Add your own images in the `public/` folder
- Customize colors and themes in the `tailwind.config.js` file
- Adjust sections to meet your specific needs

## Features

- ✅ Responsive design (mobile-first)
- ✅ Automatic light/dark mode
- ✅ Smooth animations with Framer Motion
- ✅ Optimized SEO
- ✅ Smooth anchor navigation
- ✅ Functional contact form (add your backend logic)
- ✅ Reusable components

## License

This project is free for personal and commercial use.
