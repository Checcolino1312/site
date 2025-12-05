import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCalendar, faClock, faTag, faShare, faTwitter, faLinkedin } from '@fortawesome/free-solid-svg-icons';
import { faTwitter as faTwitterBrand, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { blogPosts } from '@/data/projects';
import styles from './article.module.css';

type Props = {
  params: Promise<{ slug: string }>;
};

// Genera i path statici per tutti gli articoli
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Genera i metadata per SEO
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Articolo non trovato',
    };
  }

  return {
    title: `${post.title} | Francesco Paolo Ragusa`,
    description: post.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString('it-IT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className={styles.articlePage}>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/blog" className={styles.backLink}>
            <FontAwesomeIcon icon={faArrowLeft} />
            Torna al Blog
          </Link>
        </div>
      </header>

      <article className={styles.article}>
        <div className={styles.container}>
          <div className={styles.articleHeader}>
            <span className={styles.category}>{post.category}</span>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.excerpt}>{post.excerpt}</p>
            <div className={styles.meta}>
              <span className={styles.metaItem}>
                <FontAwesomeIcon icon={faCalendar} />
                {formattedDate}
              </span>
              <span className={styles.metaItem}>
                <FontAwesomeIcon icon={faClock} />
                {post.readTime}
              </span>
            </div>
          </div>

          <div className={styles.featuredImage}>
            <div className={styles.imagePlaceholder}>
              <FontAwesomeIcon icon={faTag} />
            </div>
          </div>

          <div className={styles.content}>
            {post.content ? (
              post.content.map((section, index) => (
                <div key={index} className={styles.section}>
                  {section.type === 'heading' && (
                    <h2 className={styles.sectionHeading}>{section.text}</h2>
                  )}
                  {section.type === 'paragraph' && (
                    <p className={styles.paragraph}>{section.text}</p>
                  )}
                  {section.type === 'code' && (
                    <pre className={styles.codeBlock}>
                      <code>{section.text}</code>
                    </pre>
                  )}
                  {section.type === 'list' && (
                    <ul className={styles.list}>
                      {section.items?.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))
            ) : (
              <div className={styles.comingSoon}>
                <h2>Contenuto in arrivo!</h2>
                <p>Questo articolo è ancora in fase di scrittura. Torna presto per leggerlo!</p>
              </div>
            )}
          </div>

          <div className={styles.shareSection}>
            <span className={styles.shareLabel}>Condividi:</span>
            <div className={styles.shareButtons}>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://francescopaoloragusa.it/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.shareBtn}
                aria-label="Condividi su Twitter"
              >
                <FontAwesomeIcon icon={faTwitterBrand} />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://francescopaoloragusa.it/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.shareBtn}
                aria-label="Condividi su LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>

          <div className={styles.authorSection}>
            <div className={styles.authorAvatar}>F</div>
            <div className={styles.authorInfo}>
              <h3 className={styles.authorName}>Francesco Paolo Ragusa</h3>
              <p className={styles.authorBio}>
                Web Developer & IT Consultant. Appassionato di tecnologie moderne e soluzioni innovative.
              </p>
            </div>
          </div>
        </div>
      </article>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <Link href="/blog" className={styles.footerLink}>
            <FontAwesomeIcon icon={faArrowLeft} />
            Torna a tutti gli articoli
          </Link>
        </div>
      </footer>
    </div>
  );
}
