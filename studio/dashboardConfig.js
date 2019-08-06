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
                  buildHookId: '5d48e1530b0e7b6f6c4fe67b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-tifce6et',
                  apiId: '53f138dc-455b-4a54-be90-59799a011a63'
                },
                {
                  buildHookId: '5d48e153904e06421028e20e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-op1uewnb',
                  apiId: 'b10ae0b4-f9c7-4bb3-87ec-aa85f29ae82b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/geekpulp/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-op1uewnb.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
