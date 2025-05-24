import { LockKeyholeIcon } from 'lucide-react';
import { defineField } from 'sanity';
import { PortableText } from '../ui/PortableText';
import { defineSingletonPage } from '../../templates/singletonPage';

export default defineSingletonPage({
  name: 'PrivacyPolicy_Page',
  title: 'Privacy Policy',
  slug: '/polityka-prywatnosci',
  icon: LockKeyholeIcon,
  withComponents: false,
  additionalFields: [
    defineField({
      name: 'heading',
      type: 'Heading',
      title: 'Heading',
      group: 'content',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'paragraph',
      type: 'PortableText',
      title: 'Paragraph (optional)',
      group: 'content',
    }),
    PortableText({
      name: 'content',
      title: 'Content',
      allowHeadings: true,
      linkTypes: ['external', 'internal'],
      useCustomInput: false,
      components: [],
      additionalFields: {
        group: 'content',
      },
    }),
  ],
});
