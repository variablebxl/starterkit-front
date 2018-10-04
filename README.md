# Front-end starterkit
We are [Variable](http://variable.club/) (a small but good web design/dev studio in Brussels) and this is a set of default rules and styles that starts everything we do.

## Things to modify first
- .env : project name
- gulpfile.js : browserSync > proxy name


## Requirements and Use

### Requirements

- [Node.js](https://nodejs.org/en/)

```bash
$ npm install
```

### Use

```bash
$ git clone https://github.com/variablebxl/starterkit-front
$ cd starterkit-front/ && npm install
$ cd resources/patternlab && composer install && cd ../..
$ gulp frontlab
```



## Project files & folders

```

resources/assets/front/css/screen.scss          # top level, @imports and @includes all other files
resources/assets/front/css/_variables.scss      # file for setting global variables and settings
resources/assets/front/css/utils/               # Folder for shared utility functions and mixins.
resources/assets/front/css/components/          # Folder for component level styles
resources/assets/front/css/templates/           # Folder for template-specific stylings and overrides
resources/assets/front/css/external/            # Folder for external style sheets

```
