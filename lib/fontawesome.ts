import { library } from '@fortawesome/fontawesome-svg-core';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Prevent fontawesome from adding its CSS since we did it manually above
config.autoAddCss = false;

// Solid icons
import {
  faRocket,
  faDownload,
  faEnvelope,
  faCode,
  faBrain,
  faChartLine,
  faPalette,
  faGraduationCap,
  faLightbulb,
  faTh,
  faGlobe,
  faEye,
  faExternalLinkAlt,
  faStar,
  faBook,
  faExclamationTriangle,
  faBars,
  faTimes,
  faQuoteLeft,
  faArrowRight,
  faPaperPlane,
  faUser,
  faPhone,
  faComment,
  faCheck,
  faSpinner,
  faNewspaper,
  faCalendar,
  faClock,
  faTag,
} from '@fortawesome/free-solid-svg-icons';

// Brand icons
import {
  faFacebookF,
  faInstagram,
  faGithub,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

// Add icons to library
library.add(
  // Solid
  faRocket,
  faDownload,
  faEnvelope,
  faCode,
  faBrain,
  faChartLine,
  faPalette,
  faGraduationCap,
  faLightbulb,
  faTh,
  faGlobe,
  faEye,
  faExternalLinkAlt,
  faStar,
  faBook,
  faExclamationTriangle,
  faBars,
  faTimes,
  faQuoteLeft,
  faArrowRight,
  faPaperPlane,
  faUser,
  faPhone,
  faComment,
  faCheck,
  faSpinner,
  faNewspaper,
  faCalendar,
  faClock,
  faTag,
  // Brands
  faFacebookF,
  faInstagram,
  faGithub,
  faLinkedinIn,
  faTwitter
);

export { library };
