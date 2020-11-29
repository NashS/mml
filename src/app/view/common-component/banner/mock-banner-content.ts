import { BannerContent } from './banner-content';

export const BANNERCONTENTS: Map<string, BannerContent> = new Map([
  [
    'summary',
    { title: 'Welcome To Milton Music Studios',
    content: ''
    }
  ],
  [
    'inquiry',
    {
      title: 'Would you like more information about the program or schedule a free trial lesson?',
      content: 'Then please use the contact form below. I will try to reach you within 24-48 hours.'
    }
  ],
  [
    'aboutUs',
    {
      title: 'About Milton Music Studios',
      content: ''
    }
  ]
]);
