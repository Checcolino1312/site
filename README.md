# Portfolio Francesco Paolo Ragusa - Next.js

Portfolio moderno convertito da HTML statico a Next.js per deployment su Vercel.

## Tecnologie Utilizzate

- **Next.js 15** - Framework React per applicazioni web
- **TypeScript** - Type safety e migliore developer experience
- **CSS Modules** - Stili modulari e scoped per componenti
- **React 19** - Libreria UI

## Struttura del Progetto

```
portfolio-nextjs/
├── app/                    # App router di Next.js
│   ├── layout.tsx         # Layout principale
│   ├── page.tsx           # Home page
│   └── globals.css        # Stili globali
├── components/            # Componenti React
│   ├── Header.tsx         # Header con navigazione
│   ├── Hero.tsx           # Sezione hero
│   ├── About.tsx          # Sezione chi sono
│   ├── Services.tsx       # Sezione competenze
│   ├── Portfolio.tsx      # Griglia progetti con filtri
│   ├── PortfolioModal.tsx # Modal dettagli progetto
│   ├── Contact.tsx        # Sezione contatti
│   └── Footer.tsx         # Footer con social links
├── public/                # Asset statici
│   ├── images/            # Immagini del portfolio
│   ├── fonts/             # Web fonts
│   ├── universita/        # Materiale universitario
│   └── FRANCESCO PAOLO RAGUSA CV.pdf
└── package.json

```

## Caratteristiche

- ✅ **100% Responsive** - Design ottimizzato per tutti i dispositivi
- ✅ **Static Export** - Generazione di sito statico per performance ottimali
- ✅ **Animazioni Smooth** - Animazioni on-scroll per una UX moderna
- ✅ **Portfolio Filtrato** - Sistema di filtri per progetti web e universitari
- ✅ **Modal Interattivi** - Dettagli progetti in modal overlay
- ✅ **SEO Optimized** - Metadata e structure per ottimizzazione SEO

## Installazione e Sviluppo Locale

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Compila per la produzione
npm run build

# Visualizza la build di produzione localmente
npm run start
```

Il sito sarà disponibile su [http://localhost:3000](http://localhost:3000)

## Deploy su Vercel

### Metodo 1: Deploy via GitHub (Consigliato)

1. **Crea un repository GitHub:**
   ```bash
   cd C:\Users\cicci\OneDrive\Desktop\site\portfolio-nextjs
   git init
   git add .
   git commit -m "Initial commit: Next.js portfolio"
   ```

2. **Carica su GitHub:**
   - Crea un nuovo repository su [github.com](https://github.com/new)
   - Segui le istruzioni per collegare il repository locale
   ```bash
   git remote add origin https://github.com/tuo-username/portfolio-nextjs.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy su Vercel:**
   - Vai su [vercel.com](https://vercel.com)
   - Clicca su "Add New Project"
   - Importa il repository GitHub
   - Vercel rileverà automaticamente Next.js e configurerà tutto
   - Clicca su "Deploy"

### Metodo 2: Deploy via Vercel CLI

```bash
# Installa Vercel CLI globalmente
npm install -g vercel

# Login a Vercel
vercel login

# Deploy
cd C:\Users\cicci\OneDrive\Desktop\site\portfolio-nextjs
vercel

# Per deploy in produzione
vercel --prod
```

### Metodo 3: Deploy via Drag & Drop

1. Compila il progetto localmente:
   ```bash
   npm run build
   ```

2. Vai su [vercel.com/new](https://vercel.com/new)
3. Trascina l'intera cartella `portfolio-nextjs` nell'area di drop
4. Vercel farà il deploy automaticamente

## Configurazione Custom Domain (Opzionale)

Dopo il deploy, puoi configurare un dominio personalizzato:

1. Vai nelle impostazioni del progetto su Vercel
2. Clicca su "Domains"
3. Aggiungi il tuo dominio personalizzato
4. Segui le istruzioni per configurare i DNS

## Note Tecniche

- Il progetto usa `output: 'export'` in `next.config.js` per generare un sito completamente statico
- Le immagini usano `unoptimized: true` per compatibilità con static export
- I componenti sono client-side (`'use client'`) per gestire interattività e animazioni
- CSS Modules sono utilizzati per evitare conflitti di stili

## Ottimizzazioni Future

- [ ] Convertire `<img>` a `next/image` dove possibile
- [ ] Aggiungere sitemap.xml generata automaticamente
- [ ] Implementare lazy loading per componenti pesanti
- [ ] Aggiungere analytics (Google Analytics, Vercel Analytics)
- [ ] Implementare PWA features (Service Worker, manifest.json)

## Licenza

© 2025 Francesco Paolo Ragusa. Tutti i diritti riservati.
