module.exports = {
  app: {
    files: [
      {
        cwd: '<%= paths.src.images %>',
        src: '**/*',
        dest: '<%= paths.dist.images %>',
        expand: true
      }
    ]
  }
};
