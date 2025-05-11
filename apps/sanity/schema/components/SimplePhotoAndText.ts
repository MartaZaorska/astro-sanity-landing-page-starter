import { ImageIcon } from 'lucide-react';
import { defineField } from 'sanity';
import { toPlainText } from '../../utils/to-plain-text';
import { sectionPreview } from '../../utils/section-preview';
import sectionId from '../ui/sectionId';

const name = 'SimplePhotoAndText';
const title = 'Component with text and image';
const icon = ImageIcon;

export default defineField({
  name,
  title,
  icon,
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      type: 'Heading',
      title: 'Heading',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'content',
      type: 'PortableText',
      title: 'Content',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'imagePosition',
      type: 'string',
      title: 'Image Position',
      description: 'Choose on which side the image should appear: left or right.',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
        ],
        layout: 'radio',
      },
      initialValue: 'left',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'cta',
      type: 'cta',
      title: 'Call To Action',
      validation: Rule => Rule.required(),
    }),
    ...sectionId,
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare: ({ heading }) => ({
      title,
      subtitle: toPlainText(heading),
      ...sectionPreview({ imgUrl: `/static/components/${name}.webp`, icon }),
    }),
  },
});
