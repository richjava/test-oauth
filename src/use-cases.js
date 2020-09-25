let useCases = {
  "useCases": [{
    "displayName": "Make contact",
    "slug": "make-contact",
    "pages": [{
      "displayName": "Home",
      "name": "home",
      "slug": "home",
      "title": "Home",
      "fileName": "index",
      "path": "/",
      "depth": 0,
      "description": "",
      "imageUrl": "",
      "repoUrl": ""
    },{
      "displayName": "Contact",
      "name": "contact",
      "slug": "contact",
      "title": "Contact",
      "fileName": "contact",
      "path": "/",
      "depth": 0,
      "description": "",
      "imageUrl": "",
      "repoUrl": ""
    }],
    "pageComponents": [
      {
        "displayName": "Simple home landing",
        "slug": "simple-home-landing",
        "fileName": "simple-home-landing",
        "cmpName": "SimpleHomeLanding",
        "pageFileName": "index",
        "rank": "U",
        "description": "",
        "imageUrl": "",
        "repoUrl": ""
      },
      {
        "displayName": "Simple contact landing",
        "slug": "simple-contact-landing",
        "fileName": "simple-contact-landing",
        "cmpName": "SimpleContactLanding",
        "pageFileName": "contact",
        "rank": "U",
        "description": "",
        "imageUrl": "",
        "repoUrl": ""
      }
    ]
  },
  {
    "displayName": "View blog",
    "slug": "view-blog",
    "pages": [{
      "displayName": "Home",
      "slug": "home",
      "name": "home",
      "title": "Home",
      "fileName": "index",
      "path": "/",
      "depth": 0,
      "description": "",
      "imageUrl": "",
      "repoUrl": ""
    }, {
      "displayName": "Simple blog",
      "slug": "simple-blog",
      "title": "Blog",
      "name": "simpleBlog",
      "fileName": "blog",
      "path": "/",
      "depth": 0,
      "description": "",
      "imageUrl": "",
      "repoUrl": ""
    },{
      "displayName": "Simple blog detail",
      "slug": "simple-blog-detail",
      "name": "simpleBlogDetail",
      "fileName": "[slug]",
      "path": "/posts/",
      "depth": 1,
      "description": "",
      "imageUrl": "",
      "repoUrl": "",
      "isDetail": true
    }],
    "pageComponents": [
      {
        "displayName": "Simple blog teaser",
        "slug": "simple-blog-teaser",
        "fileName": "simple-blog-teaser",
        "cmpName": "SimpleBlogTeaser",
        "pageFileName": "index",
        "rank": "l",
        "description": "",
        "imageUrl": "",
        "repoUrl": ""
      },{
        "displayName": "Simple blog landing",
        "slug": "simple-blog-landing",
        "fileName": "simple-blog-landing",
        "cmpName": "SimpleBlogLanding",
        "pageFileName": "blog",
        "rank": "U",
        "description": "",
        "imageUrl": "",
        "repoUrl": ""
      },{
        "displayName": "Simple blog detail landing",
        "slug": "simple-blog-detail-landing",
        "fileName": "simple-blog-detail-landing",
        "cmpName": "SimpleBlogDetailLanding",
        "pagePath": "/posts/",
        "pageFileName": "[slug]",
        "rank": "U",
        "description": "",
        "imageUrl": "",
        "repoUrl": ""
      }
    ]
  }

  ]
}

module.exports = useCases;