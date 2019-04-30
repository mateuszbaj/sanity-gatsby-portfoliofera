export default {
  widgets: [
    {name: 'sanity-tutorials'},
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              sites: [
                {
                  buildHookId: '5cc81cf17d8bfbbfd6910acc',
                  name: 'Content Studio',
                  siteId: 'd1c02775-3bca-4a21-9beb-093252601c84'
                },
                {
                  buildHookId: '5cc81cf1d2ad0ad6bc8e725b',
                  name: 'Portfolio Website',
                  siteId: '8007d387-a1cc-4a9e-ab27-adf22a7d51e5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mateuszbaj/sanity-gatsby-portfoliofera',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https:&#x2F;&#x2F;sanity-gatsby-portfoliofera.netlify.com', category: 'apps'}
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
