export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61bb30c1fae0db83848016ac',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-9wfu6kgp',
                  apiId: '39c1d0e3-1188-4a6b-8f7e-f26236787da8'
                },
                {
                  buildHookId: '61bb30c2e9ea2571a8f4524f',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-yf6rxabm',
                  apiId: 'dded1ae9-e857-47f1-808a-ad83f0af84d2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tbjorkan/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-yf6rxabm.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
