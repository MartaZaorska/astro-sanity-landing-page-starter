// Single Types
import global from '../schema/singleTypes/global/settings';
import navigation from '../schema/singleTypes/global/navigation';
import redirects from '../schema/singleTypes/global/redirects';
import socialMedia from '../schema/singleTypes/global/socialMedia';
import NotFound_Page from '../schema/singleTypes/NotFound_Page';
import PrivacyPolicy_Page from '../schema/singleTypes/PrivacyPolicy_Page';

const singleTypes = [global, redirects, navigation, socialMedia, NotFound_Page, PrivacyPolicy_Page];

// Collections Types
import Faq_Collection from '../schema/collectionTypes/Faq_Collection';
import Page_Collection from '../schema/collectionTypes/Page_Collection';

const collectionTypes = [Faq_Collection, Page_Collection];

// Components
import Components from '../schema/Components';

const components = [Components];

// UI Components
import cta from '../schema/ui/cta';
import PortableText from '../schema/ui/PortableText';
import Heading from '../schema/ui/PortableText/Heading';
import seo from '../schema/ui/seo';
import formStates from '../schema/ui/formStates';

const ui = [cta, seo, formStates, PortableText, Heading];

export const schemaTypes = [...singleTypes, ...collectionTypes, ...components, ...ui];

export const singletonActions = new Set(['publish', 'discardChanges', 'restore']);
export const singletonTypes = new Set(singleTypes.map(type => type.name as string));
