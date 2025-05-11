import type { StructureResolver } from 'sanity/structure';
import { Settings2Icon } from 'lucide-react';
import { createSingleton } from '../utils/create-singleton';
import { createCollection } from '../utils/create-collection';

export const structure: StructureResolver = S =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.listItem()
        .title('Configuration')
        .icon(Settings2Icon)
        .child(
          S.list()
            .title('Configuration')
            .items([
              createSingleton(S, 'global'),
              createSingleton(S, 'navigation'),
              createSingleton(S, 'socials'),
              createSingleton(S, 'redirects'),
            ])
        ),
      S.divider(),
      createCollection(S, 'page'),
      createSingleton(S, 'PrivacyPolicy_Page'),
      createSingleton(S, 'NotFound_Page'),
      S.divider(),
      createCollection(S, 'Faq_Collection'),
    ]);
