import { defineType } from 'sanity';
import HeroSection from './components/HeroSection';
import Faq from './components/Faq';
import ContactForm from './components/ContactForm';

export default defineType({
  name: 'components',
  type: 'array',
  title: 'Components',
  description:
    'Build your page by adding customizable components. Drag and drop to reorder, each component renders sequentially to create your landing page layout.',
  of: [HeroSection, Faq, ContactForm],
  options: {
    insertMenu: {
      filter: true,
      showIcons: true,
      views: [
        { name: 'grid', previewImageUrl: schemaTypeName => `/static/components/${schemaTypeName}.webp` },
        { name: 'list' },
      ],
    },
  },
});
