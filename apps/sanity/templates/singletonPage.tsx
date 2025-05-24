import { type FieldDefinition, defineType, defineField } from 'sanity';
import { FileTextIcon, SearchIcon, type LucideIcon } from 'lucide-react';
import { defineSlugForDocument } from '../utils/define-slug-for-document';

type Page = 'PrivacyPolicy_Page' | 'NotFound_Page';

type Props = {
  name: Page;
  title: string;
  slug: string;
  icon: LucideIcon | React.FC | string;
  withComponents?: boolean;
  additionalFields?: FieldDefinition<
    | 'string'
    | 'number'
    | 'boolean'
    | 'object'
    | 'array'
    | 'block'
    | 'date'
    | 'datetime'
    | 'document'
    | 'file'
    | 'geopoint'
    | 'image'
    | 'reference'
    | 'crossDatasetReference'
    | 'globalDocumentReference'
    | 'slug'
    | 'text'
    | 'url'
    | 'email',
    undefined
  >[];
};

export const defineSingletonPage = ({
  name,
  title,
  slug,
  icon,
  withComponents = true,
  additionalFields = [],
}: Props) =>
  defineType({
    type: 'document',
    name,
    title,
    icon,
    options: { documentPreview: true },
    fields: [
      ...defineSlugForDocument({ slug }).map(field => ({ ...field, group: 'content' })),
      ...additionalFields,
      ...(withComponents
        ? [
            defineField({
              name: 'components',
              type: 'components',
              title: 'Page Components',
              group: 'content',
            }),
          ]
        : []),
      defineField({
        name: 'seo',
        type: 'seo',
        title: 'SEO',
        group: 'seo',
      }),
    ],
    groups: [
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
      prepare: () => ({
        title,
        subtitle: slug,
      }),
    },
  });
