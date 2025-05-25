import { CircleXIcon } from 'lucide-react';
import { definePage } from '../../templates/page';
import { defineSlugForDocument } from '../../utils/define-slug-for-document';

export default definePage({
  name: 'NotFound_Page',
  title: 'Not Found Page (404)',
  icon: CircleXIcon,
  additionalFields: [
    ...defineSlugForDocument({ slug: '/404' }).map(field => ({ ...field, group: 'content' })),
  ],
});
