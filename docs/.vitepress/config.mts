import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Medical Resources",
  description: "A list of commonly used medical resources in Thailand",
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/ittipatken/medical-resources/edit/main/docs/:path'
    },
    search: {
      provider: 'local'
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is this?', link: '/what-is-this' },
        ]
      },
      {
        text: 'General',
        items: [
          { text: 'Classification', link: '/classification' },
          { text: 'Dietetics', link: '/dietetics' },
          { text: 'Government Agency', link: '/government-agency' },
          { text: 'Genetics', link: '/genetics' },
          { text: 'Microbiology', link: '/microbiology' },
        ]
      },
      {
        text: 'Guidelines',
        items: [
          {
            text: 'Internal Medicine',
            items: [
              { text: 'Allergy and Immunology', link: '/allergy-immunology' },
              { text: 'Cardiology', link: '/cardiology' },
              { text: 'Endocrinology', link: '/endocrinology' },
              { text: 'Gastroenterology', link: '/gastroenterology' },
              { text: 'Hematology', link: '/hematology' },
              { text: 'Infectious Disease', link: '/infectious-disease' },
              { text: 'Nephrology', link: '/nephrology' },
              { text: 'Neurology', link: '/neurology' },
              { text: 'Oncology', link: '/oncology' },
              { text: 'Respiratory Medicine', link: '/respiratory-medicine' },
              { text: 'Rheumatology', link: '/rheumatology' },
            ]
          },
          // { text: 'Radiology', link: '/radiology' },
          { text: 'Psychiatry', link: '/psychiatry' },
          { text: 'Pediatrics', link: '/pediatrics' },
          // { text: 'Obstetrics and Gynecology', link: '/obstetrics-gynecology' },
          { text: 'Otolaryngology', link: '/otolaryngology' },
          // { text: 'Palliative Care', link: '/palliative-care' },
          { text: 'Emergency Medicine', link: '/emergency-medicine' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ittipatken/medical-resources' }
    ]
  }
})
