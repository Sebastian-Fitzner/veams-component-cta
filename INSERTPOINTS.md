
### Include: Page

``` hbs
{{! @INSERT :: START @id: cta, @tag: component-partial }}
{{#with cta-bp.variations.simple}}
    {{! WrapWith START: CTA }}
    {{#wrapWith "c-cta" settings=this.settings content=this.content}}
        {{> c-cta__content this.content}}
    {{/wrapWith}}
    {{! WrapWith END: CTA }}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import //
@import "components/_c-cta";
// @INSERT :: END

// @INSERT :: START @tag: scss-import-self-contained // 
@import "../templating/partials/components/cta/scss/_c-cta";
// @INSERT :: END
```

### Include: JavaScript

#### Import
``` js
// @INSERT :: START @tag: js-import //
import CTA from './modules/cta/cta';
// @INSERT :: END

// @INSERT :: START @tag: js-import-self-contained //
import CTA from '../templating/partials/components/cta/js/cta';
// @INSERT :: END
```

#### Initializing in Veams V2
``` js
// @INSERT :: START @tag: js-init-v2 // 
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

#### Initializing in Veams V3 or V4
``` js
// @INSERT :: START @tag: js-init-v3 // 
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