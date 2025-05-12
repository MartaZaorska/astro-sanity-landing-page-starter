import { PanelsTopLeft, FileTextIcon, SearchIcon, SettingsIcon } from 'lucide-react';
import { defineField, defineType } from 'sanity';
import { defineSlugForDocument } from '../../utils/define-slug-for-document';
import { getNavigationFields } from '../singleTypes/global/navigation';

const icon = PanelsTopLeft;

export default defineType({
  name: 'page',
  title: 'Landing',
  type: 'document',
  icon,
  options: { documentPreview: true },
  fields: [
    defineField({
      name: 'localSettings',
      title: 'Local Settings',
      description: 'Override global settings specifically for this page',
      type: 'object',
      group: 'localSettings',
      options: { collapsible: true },
      fields: [
        defineField({
          name: 'email',
          type: 'string',
          title: 'Email',
          validation: Rule => Rule.email(),
        }),
        defineField({
          name: 'tel',
          type: 'string',
          title: 'Phone number (optional)',
          validation: Rule =>
            Rule.regex(/^(?:\+(?:\d{1,3}))?(?:[ -]?\(?\d{1,4}\)?[ -]?\d{1,5}[ -]?\d{1,5}[ -]?\d{1,6})$/).error(
              'Invalid phone number'
            ),
        }),
        ...getNavigationFields({ isRequired: false }),
      ],
    }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'Individual name for this landing page, used for Sanity Display Name',
      validation: Rule => Rule.required(),
      group: 'content',
    }),
    ...defineSlugForDocument({ source: 'name', checkSlugMatch: false }).map(field => ({ ...field, group: 'content' })),
    defineField({
      name: 'components',
      type: 'components',
      title: 'Page Components',
      group: 'content',
    }),
    defineField({
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    }),
  ],
  groups: [
    {
      name: 'localSettings',
      title: 'Local Settings',
      icon: () => <SettingsIcon size={18} />,
    },
    {
      name: 'content',
      title: 'Content',
      icon: () => <FileTextIcon size={18} />,
    },
    {
      name: 'seo',
      title: 'SEO',
      icon: () => <SearchIcon size={18} />,
    },
  ],
  preview: {
    select: {
      title: 'seo.title',
      slug: 'slug.current',
    },
    prepare({ title, slug }) {
      return {
        title,
        subtitle: slug,
        icon,
      };
    },
  },
});
