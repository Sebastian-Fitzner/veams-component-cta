# Call-To-Action

This blueprint is based on the blueprint of Veams-Components.

## Version

Latest version is ```v2.0.0```

## Requirements

### JavaScript
- `Veams-JS >= v3.6.0`

## Usage

### Options:

#### closeLabel
`Type: string` | `Default: false`

Optional toggle button label for closed state

#### globalEvent
`Type: string` | `Default: 'cta:click'`

Global event triggered on click

#### openLabel
`Type: string` | `Default: false`

Optional toggle button label for opened state

### Include: Page

``` hbs
{{! @INSERT :: START @id: cta, @tag: component-partial }}
{{#with cta-bp.simple}}
	{{> c-cta}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import
@import "components/_c-cta";
// @INSERT :: END
```

### Include: JavaScript

#### Import
``` js
// @INSERT :: START @tag: js-import
import CTA from './modules/cta/cta';
// @INSERT :: END
```

#### Initializing in Veams V2
``` js
// @INSERT :: START @tag: js-init-v2
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
// @INSERT :: START @tag: js-init-v3
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