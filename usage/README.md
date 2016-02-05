# Call-To-Action

This blueprint is based on the blueprint of Veams-Components.

## Usage

### Include: Page

``` hbs
{{! @INSERT :: START @id: component, @tag: component-partial }}
{{#with cta-bp}}
	{{> c-cta}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @id: scss-import
@import "components/_c-cta";
// @INSERT :: END
```

### Include: JavaScript

#### Import
``` js
// @INSERT :: START @id: js-import
import CTA from './modules/cta/cta';
// @INSERT :: END
```

#### Initializing in Veams V2
``` js
// @INSERT :: START @id: js-init-v2
/**
 * Init Call-To-Action
 */
Helpers.loadModule({
	el: '[data-js-module="cta"]',
	module: CTA,
	context: context
});
// @INSERT :: END
```

#### Initializing in Veams V3
``` js
// @INSERT :: START @id: js-init-v3
/**
 * Init Call-To-Action
 */
Helpers.loadModule({
	domName: 'cta',
	module: CTA,
	context: context
});
// @INSERT :: END
```
