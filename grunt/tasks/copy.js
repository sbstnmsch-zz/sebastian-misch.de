module.exports = {
  app: {
    files: [
      {
        src: '<%= paths.src.images %>/*.ico',
        dest: '<%= paths.dist.default %>',
        expand: true,
        flatten: true
      },
      {
        cwd: '<%= paths.src.images %>',
        src: '**/*',
        dest: '<%= paths.dist.images %>',
        expand: true
      },
      {
        src: '<%= paths.src.config %>/robots.txt',
        dest: '<%= paths.dist.default %>/robots.txt'
      }
    ]
  }
};
