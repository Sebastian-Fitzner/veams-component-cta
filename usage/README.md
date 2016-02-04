# Call-To-Action

This blueprint is based on the blueprint of Veams-Components.

## Usage

### Include: Page

``` hbs
// @INSERT :: START @id: component, @tag: component
{{#with cta-bp}}
	{{> c-cta}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @id: scss-import, @tag: component
@import "components/_c-cta";
// @INSERT :: END
```

### Include: JavaScript

#### Import
``` js
// @INSERT :: START @id: js-import, @tag: component
import Call-To-Action from './modules/cta/cta';
// @INSERT :: END
```

#### Initializing in Veams V2
``` js
// @INSERT :: START @id: js-init-v2, @tag: component
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
// @INSERT :: START @id: js-init-v3, @tag: component
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
