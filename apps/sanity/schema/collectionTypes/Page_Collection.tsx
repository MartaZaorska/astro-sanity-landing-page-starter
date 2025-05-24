import { PanelsTopLeft, SettingsIcon } from 'lucide-react';
import { defineField } from 'sanity';
import { defineSlugForDocument } from '../../utils/define-slug-for-document';
import { getNavigationFields } from '../singleTypes/global/navigation';
import { definePage } from '../../templates/page';

export default definePage({
  name: 'page',
  title: 'Landing',
  icon: PanelsTopLeft,
  additionalFields: [
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
            Rule.regex(
              /^(?:\+(?:\d{1,3}))?(?:[ -]?\(?\d{1,4}\)?[ -]?\d{1,5}[ -]?\d{1,5}[ -]?\d{1,6})$/
            ).error('Invalid phone number'),
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
    ...defineSlugForDocument({ source: 'name', checkSlugMatch: false }).map(field => ({
      ...field,
      group: 'content',
    })),
  ],
  additionalGroups: [
    {
      name: 'localSettings',
      title: 'Local Settings',
      icon: () => <SettingsIcon size={18} />,
    },
  ],
});
