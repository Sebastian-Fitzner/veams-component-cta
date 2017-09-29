## Usage

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

### Include: JavaScript

#### Initializing in Veams V5

``` js
// @INSERT :: START @tag: js-init-v5 //
 	,
 	// Init Call-To-Action
 	{
 		namespace: 'cta',
 		module: CTA
 	}
// @INSERT :: END //
```