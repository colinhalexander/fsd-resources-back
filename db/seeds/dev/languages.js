
exports.seed = function(knex) {
  return knex('languages').del()
    .then(function () {
      return knex('languages').insert([
        {
          name: 'Ruby',
          image_url: 'http://pngimg.com/uploads/ruby/ruby_PNG44.png'
        },
        {
          name: 'Rails',
          image_url: 'https://cdn.freebiesupply.com/logos/thumbs/1x/rails-1-logo.png'
        },
        {
          name: 'SQL',
          image_url: 'http://www.acuitytraining.co.uk/wp-content/uploads/2015/05/SQL-logo-transparent.png'
        },
        {
          name: 'HTML & CSS',
          image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg/800px-CSS3_and_HTML5_logos_and_wordmarks.svg.png'
        },
        {
          name: 'JavaScript',
          image_url: 'https://cdn.freebiesupply.com/logos/thumbs/1x/logo-javascript-logo.png'
        },
        {
          name: 'React',
          image_url: 'https://cdn-images-1.medium.com/max/1200/1*3SVfBkNZI2f-sspiq59xcw.png'
        },
        {
          name: 'Node',
          image_url: 'https://cdn.freebiesupply.com/logos/thumbs/2x/nodejs-1-logo.png'
        },
        {
          name: 'Vue',
          image_url: 'https://cdn.freebiesupply.com/logos/large/2x/vue-9-logo-png-transparent.png'
        }
      ])
    });
};
