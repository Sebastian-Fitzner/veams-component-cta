# slider

This component is based on the blueprint of Veams-Components.

## Usage

### Include: Page

``` hbs
// @INSERT :: START @id: component, @tag: veams-component
{{#with cta-bp}}
	{{> c-cta}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @id: scss-import, @tag: veams-component
@import "components/_c-cta";
// @INSERT :: END
```

### Include: JavaScript

#### Import
``` js
// @INSERT :: START @id: js-import, @tag: veams-component
import CTA from './modules/cta/cta';
// @INSERT :: END
```

#### Initializing
``` js
// @INSERT :: START @id: js-init, @tag: veams-component
/**
 * Init Slider
 */
Helpers.loadModule({
	domName: 'cta',
	module: CTA,
	context: context
});
// @INSERT :: END
```
