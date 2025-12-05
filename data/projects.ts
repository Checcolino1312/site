export type Project = {
  id: string;
  category: 'web' | 'university';
  image: string;
  categoryLabel: string;
  year: string;
  title: string;
  description: string;
  tech: string[];
  status: string;
  statusIcon: 'star' | 'exclamation-triangle' | 'book';
  link?: string;
  modalContent: {
    category: string;
    title: string;
    description: string[];
    tech: string[];
    link?: string;
  };
};

export const projects: Project[] = [
  {
    id: 'palio',
    category: 'web',
    image: '/images/works/screen1.svg',
    categoryLabel: 'Web Design',
    year: '2023',
    title: 'Palio di Oria',
    description: 'Sito web con e-commerce integrato per la storica manifestazione oritana.',
    tech: ['WordPress', 'Web Design', 'E-commerce', 'WooCommerce'],
    status: 'Offline',
    statusIcon: 'exclamation-triangle',
    modalContent: {
      category: 'Siti Web',
      title: 'Sito Web - Palio di Oria',
      description: [
        'Ho lavorato al progetto del Palio di Oria, raccontando la tradizione locale in modo coinvolgente e implementando uno shop online e una sezione premi. Il progetto è stato un successo e mi rende orgoglioso di aver contribuito alla promozione della mia città.',
        'ATTENZIONE: Attualmente il sito non è più visibile poichè sostituito da un altro non prodotto da me.'
      ],
      tech: ['HTML5', 'CSS3', 'JavaScript', 'E-commerce']
    }
  },
  {
    id: 'martina',
    category: 'web',
    image: '/images/works/screen2.svg',
    categoryLabel: 'Web Design',
    year: '2023',
    title: 'Martina Ingegneria',
    description: 'Portfolio professionale per studio di ingegneria strutturale e geotecnica.',
    tech: ['WordPress', 'Web Design', 'SEO'],
    status: 'Offline',
    statusIcon: 'exclamation-triangle',
    modalContent: {
      category: 'Siti Web',
      title: 'Sito Web - Martina Ingegneria',
      description: [
        'Sono stato molto soddisfatto di aver lavorato al sito web Martina Ingegneria, che ho realizzato per l\'ingegner Martina. In particolare, ho dedicato molto tempo e impegno alla realizzazione del portfolio di progetti, che è risultato molto efficace nel presentare al meglio l\'esperienza e le competenze dell\'ingegner Martina.',
        'ATTENZIONE: Attualmente il sito non è più online per problemi legati al rinnovo del dominio.'
      ],
      tech: ['WordPress', 'Custom Theme', 'SEO']
    }
  },
  {
    id: 'casina',
    category: 'web',
    image: '/images/works/screen3.svg',
    categoryLabel: 'Web Design',
    year: '2022',
    title: 'Casina dei Nonni',
    description: 'Sito web per agriturismo con sistema di prenotazioni online e galleria fotografica.',
    tech: ['WordPress', 'Web Design', 'Booking'],
    status: 'Offline',
    statusIcon: 'exclamation-triangle',
    modalContent: {
      category: 'Siti Web',
      title: 'Sito Web - Casina dei Nonni',
      description: [
        'Sono molto contento di aver lavorato al sito web Casina dei Nonni, un agriturismo situato nella meravigliosa città di Oria, in provincia di Brindisi. Questo progetto mi ha permesso di mettere in pratica le mie competenze di sviluppo web e di design, creando un sito web moderno e accattivante, che ha suscitato grande interesse tra i visitatori.',
        'ATTENZIONE: Attualmente il sito non è più online per problemi legati al rinnovo del dominio.'
      ],
      tech: ['WordPress', 'Booking', 'Gallery']
    }
  },
  {
    id: 'spazio',
    category: 'web',
    image: '/images/works/screen4.svg',
    categoryLabel: 'Web Design',
    year: '2022',
    title: 'Spazio Libero',
    description: 'Piattaforma web per associazione di animazione e inclusione sociale.',
    tech: ['WordPress', 'Web Design', 'Events'],
    status: 'Offline',
    statusIcon: 'exclamation-triangle',
    modalContent: {
      category: 'Siti Web',
      title: 'Sito Web - Spazio Libero',
      description: [
        'Sono molto felice di aver lavorato al sito web di Spazio Libero, un team di professionisti che si occupano di animazione, divertimento e inclusione sociale. Questo progetto mi ha permesso di mettere in pratica le mie competenze di sviluppo web, creando un sito moderno e accattivante che rispecchia perfettamente lo spirito e la mission dell\'azienda.',
        'ATTENZIONE: Attualmente il sito non è più online per problemi legati al rinnovo del dominio.'
      ],
      tech: ['CMS', 'Events', 'Community']
    }
  },
  {
    id: 'homa',
    category: 'web',
    image: '/images/works/screen5.svg',
    categoryLabel: 'Web Design',
    year: '2021',
    title: 'Homa Artigiani',
    description: 'E-commerce specializzato in prodotti artigianali e rievocazione storica.',
    tech: ['WordPress', 'Web Design', 'WooCommerce'],
    status: 'Offline',
    statusIcon: 'exclamation-triangle',
    modalContent: {
      category: 'Siti Web',
      title: 'Sito Web - Homa Artigiani',
      description: [
        'Sono stato orgoglioso di aver lavorato al sito web del progetto Homa Artigiani, un\'azienda che nasce dalla passione per la storia e la rievocazione storica. Ho lavorato con cura alla creazione di un sito web moderno e accattivante, che trasmettesse l\'idea di un\'azienda che si dedica completamente alla creazione di prodotti di alta qualità artigianale e ricostruttiva.',
        'ATTENZIONE: Attualmente il sito non è più online per problemi legati al rinnovo del dominio.'
      ],
      tech: ['WooCommerce', 'Payments', 'Inventory']
    }
  },
  {
    id: 'mr',
    category: 'web',
    image: '/images/works/screen6.svg',
    categoryLabel: 'Web Design',
    year: '2021',
    title: 'MR Technology Systems',
    description: 'Sito corporate per azienda specializzata in controlli dimensionali e servizi topografici.',
    tech: ['WordPress', 'Web Design', 'B2B'],
    status: 'Live',
    statusIcon: 'star',
    link: 'https://www.mrtechnology.it/',
    modalContent: {
      category: 'Siti Web',
      title: 'Sito Web - MR Technology Systems',
      description: [
        'Sono contento di aver lavorato al sito web di M.R. Technology Systems, una realtà aziendale specializzata in controlli e collaudi dimensionali, servizi topografici e consulenza tecnica. Ho creato un sito web moderno ed efficiente, che trasmettesse la professionalità e l\'esperienza che caratterizzano l\'azienda.'
      ],
      tech: ['Corporate', 'B2B', 'Lead Gen'],
      link: 'https://www.mrtechnology.it/'
    }
  },
  {
    id: 'prog1',
    category: 'university',
    image: '/images/works/screen7.svg',
    categoryLabel: 'Programmazione',
    year: '2023',
    title: 'Programmazione 1',
    description: 'Esercizi e progetti in linguaggio C con algoritmi fondamentali e strutture dati per il corso universitario.',
    tech: ['C Language', 'Algorithms', 'Data Structures'],
    status: 'Materiale',
    statusIcon: 'book',
    link: '/universita/programmazione1',
    modalContent: {
      category: 'Università',
      title: 'Materiale - Programmazione 1',
      description: [
        'Qui una raccolta di esercizi svolti da me, presi dal libro "Il linguaggio C. Fondamenti e tecniche di programmazione."'
      ],
      tech: ['C Language', 'Algorithms', 'Data Structures'],
      link: '/universita/programmazione1'
    }
  },
  {
    id: 'prog2',
    category: 'university',
    image: '/images/works/screen8.svg',
    categoryLabel: 'Programmazione',
    year: '2023',
    title: 'Programmazione 2',
    description: 'Materiali didattici per programmazione orientata agli oggetti in Java con design patterns e architetture software.',
    tech: ['Java', 'OOP', 'Patterns'],
    status: 'Appunti',
    statusIcon: 'book',
    link: '/universita/programmazione2',
    modalContent: {
      category: 'Università',
      title: 'Materiale - Programmazione 2',
      description: [
        'Qui una raccolta di appunti da cui studiare le basi della programmazione orientata agli oggetti ed esercitazioni in Java da cui prendere spunto.'
      ],
      tech: ['Java', 'OOP', 'Patterns'],
      link: '/universita/programmazione2'
    }
  },
  {
    id: 'reti',
    category: 'university',
    image: '/images/works/screen9.svg',
    categoryLabel: 'Networking',
    year: '2022',
    title: 'Reti di Calcolatori',
    description: 'Progetti su protocolli di rete, applicazioni client-server e architetture di rete con esempi pratici in C.',
    tech: ['TCP/IP', 'Sockets', 'Protocols'],
    status: 'Teoria',
    statusIcon: 'book',
    link: '/universita/reti-di-calcolatori',
    modalContent: {
      category: 'Università',
      title: 'Materiale - Reti di Calcolatori',
      description: [
        'Qui una raccolta di appunti da cui studiare Reti di Calcolatori e realizzare un applicazione in C client-server.'
      ],
      tech: ['TCP/IP', 'Sockets', 'Protocols'],
      link: '/universita/reti-di-calcolatori'
    }
  },
  {
    id: 'db',
    category: 'university',
    image: '/images/works/screen10.svg',
    categoryLabel: 'Database',
    year: '2022',
    title: 'Progettazione di Basi di Dati',
    description: 'Documentazione per progettazione database con modellazione ER, SQL e ottimizzazione query con case studies.',
    tech: ['SQL', 'ER Model', 'Optimization'],
    status: 'Appunti',
    statusIcon: 'book',
    link: '/universita/basi-di-dati',
    modalContent: {
      category: 'Università',
      title: 'Materiale - Progettazione di Basi di Dati',
      description: [
        'Qui una raccolta di appunti da cui studiare Progettazione di Basi di Dati e svolgere alcune query in SQL.'
      ],
      tech: ['SQL', 'ER Model', 'Optimization'],
      link: '/universita/basi-di-dati'
    }
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Marco Rossi',
    role: 'CEO, MR Technology Systems',
    content: 'Francesco ha realizzato il nostro sito aziendale con grande professionalità. Attento ai dettagli e sempre disponibile per modifiche e aggiornamenti.',
    image: '/images/testimonials/testimonial1.svg'
  },
  {
    id: 2,
    name: 'Anna Martina',
    role: 'Ing. Strutturista',
    content: 'Un lavoro eccellente per il mio studio di ingegneria. Il portfolio progetti è risultato molto efficace per presentare la mia esperienza ai clienti.',
    image: '/images/testimonials/testimonial2.svg'
  },
  {
    id: 3,
    name: 'Giuseppe Bianchi',
    role: 'Presidente Palio di Oria',
    content: 'Il sito web del Palio ha contribuito enormemente alla promozione della nostra manifestazione storica. Professionalità e creatività al top.',
    image: '/images/testimonials/testimonial3.svg'
  }
];

export type BlogPostContent = {
  type: 'heading' | 'paragraph' | 'code' | 'list';
  text?: string;
  items?: string[];
};

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content?: BlogPostContent[];
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'introduzione-nextjs-15',
    title: 'Introduzione a Next.js 15',
    excerpt: 'Scopri le novità di Next.js 15 e come migrare i tuoi progetti alla nuova versione del framework React.',
    category: 'Web Development',
    date: '2024-12-01',
    readTime: '5 min',
    image: '/images/blog/nextjs.svg',
    content: [
      { type: 'paragraph', text: 'Next.js 15 rappresenta un importante passo avanti per il framework React più popolare. Con questa nuova versione, il team di Vercel ha introdotto numerose migliorie che rendono lo sviluppo web ancora più efficiente e performante.' },
      { type: 'heading', text: 'Le Principali Novità' },
      { type: 'paragraph', text: 'La nuova versione porta con sé diversi miglioramenti significativi che ogni sviluppatore dovrebbe conoscere.' },
      { type: 'list', items: [
        'Supporto migliorato per React 19 e le sue nuove API',
        'Nuovo sistema di caching più intelligente e prevedibile',
        'Miglioramenti alle performance di compilazione',
        'Nuove API per la gestione delle form',
        'Supporto nativo per Partial Prerendering'
      ]},
      { type: 'heading', text: 'Come Migrare' },
      { type: 'paragraph', text: 'La migrazione da Next.js 14 a 15 è relativamente semplice. Il primo passo è aggiornare le dipendenze nel tuo package.json:' },
      { type: 'code', text: 'npm install next@15 react@19 react-dom@19' },
      { type: 'paragraph', text: 'Dopo l\'aggiornamento, verifica che tutte le tue pagine funzionino correttamente e controlla eventuali warning nella console.' },
      { type: 'heading', text: 'Conclusioni' },
      { type: 'paragraph', text: 'Next.js 15 è un aggiornamento che vale la pena fare. Le nuove funzionalità e i miglioramenti alle performance renderanno i tuoi progetti più veloci e il tuo codice più pulito.' }
    ]
  },
  {
    id: 2,
    slug: 'tailwind-css-best-practices',
    title: 'Best Practices con Tailwind CSS',
    excerpt: 'Guida alle migliori pratiche per scrivere codice Tailwind CSS pulito e manutenibile nei tuoi progetti.',
    category: 'CSS',
    date: '2024-11-15',
    readTime: '7 min',
    image: '/images/blog/tailwind.svg',
    content: [
      { type: 'paragraph', text: 'Tailwind CSS ha rivoluzionato il modo in cui scriviamo CSS. Tuttavia, senza le giuste pratiche, il codice può diventare rapidamente difficile da mantenere. Ecco le best practices che utilizzo nei miei progetti.' },
      { type: 'heading', text: 'Organizza le Classi' },
      { type: 'paragraph', text: 'Mantieni un ordine consistente nelle tue classi Tailwind. Io seguo questo schema: layout → spacing → sizing → typography → colors → effects.' },
      { type: 'code', text: '<div class="flex items-center gap-4 p-4 w-full text-lg font-bold text-gray-900 bg-white rounded-lg shadow-md">' },
      { type: 'heading', text: 'Usa @apply con Moderazione' },
      { type: 'paragraph', text: 'La direttiva @apply può essere utile, ma usala solo per pattern che si ripetono frequentemente:' },
      { type: 'code', text: '.btn-primary {\n  @apply px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors;\n}' },
      { type: 'heading', text: 'Crea Componenti Riutilizzabili' },
      { type: 'paragraph', text: 'Invece di ripetere le stesse classi, crea componenti React riutilizzabili che incapsulano gli stili.' },
      { type: 'list', items: [
        'Crea un componente Button con varianti',
        'Usa props per controllare dimensioni e colori',
        'Documenta i componenti per il tuo team'
      ]},
      { type: 'heading', text: 'Conclusioni' },
      { type: 'paragraph', text: 'Seguendo queste pratiche, il tuo codice Tailwind sarà più pulito, manutenibile e facile da comprendere per tutto il team.' }
    ]
  },
  {
    id: 3,
    slug: 'react-19-nuove-features',
    title: 'Le Nuove Feature di React 19',
    excerpt: 'Un\'analisi approfondita delle nuove funzionalità introdotte in React 19 e come utilizzarle.',
    category: 'React',
    date: '2024-11-01',
    readTime: '8 min',
    image: '/images/blog/react.svg',
    content: [
      { type: 'paragraph', text: 'React 19 è finalmente arrivato, portando con sé alcune delle funzionalità più attese dalla community. Vediamo insieme cosa c\'è di nuovo e come sfruttare al meglio queste novità.' },
      { type: 'heading', text: 'Actions e useActionState' },
      { type: 'paragraph', text: 'Una delle novità più importanti è il nuovo hook useActionState, che semplifica la gestione dello stato durante le form submissions:' },
      { type: 'code', text: 'const [state, submitAction, isPending] = useActionState(\n  async (prevState, formData) => {\n    const result = await saveData(formData);\n    return result;\n  },\n  initialState\n);' },
      { type: 'heading', text: 'use() Hook' },
      { type: 'paragraph', text: 'Il nuovo hook use() permette di leggere risorse come Promise e Context in modo più flessibile, anche all\'interno di condizionali.' },
      { type: 'list', items: [
        'Può essere usato dentro if statements',
        'Funziona con Promise per il data fetching',
        'Sostituisce useContext in molti casi',
        'Migliora la leggibilità del codice'
      ]},
      { type: 'heading', text: 'Server Components Migliorati' },
      { type: 'paragraph', text: 'I Server Components sono ora più stabili e performanti. Permettono di ridurre significativamente il bundle JavaScript inviato al client.' },
      { type: 'heading', text: 'Conclusioni' },
      { type: 'paragraph', text: 'React 19 rappresenta un\'evoluzione naturale del framework, con un focus sulla semplicità e sulle performance. È il momento giusto per iniziare a sperimentare con queste nuove funzionalità.' }
    ]
  }
];
