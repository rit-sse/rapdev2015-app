module.exports = {
  paths: {
    client_root: './app/',
    js_root: './app/js/',
    js_files: './app/**/*.@(js|jsx)',
    js_entrypoint: './js/main.js',
    other_files: './app/**/*.!(js|jsx|css|less)',
    less_files:'./app/**/*.@(less)',
    material_less: './node_modules/material-ui/src/less/', 
    build_dir: './dist/',
    test_files: './test/**/*-test.js'
  }
};
