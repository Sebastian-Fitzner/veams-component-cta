<p align="right">
    <a href="https://badge.fury.io/bo/veams-component-cta"><img src="https://badge.fury.io/bo/veams-component-cta.svg" alt="Bower version" height="20"></a>
    <a href="https://gitter.im/Sebastian-Fitzner/Veams?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge"><img src="https://badges.gitter.im/Sebastian-Fitzner/Veams.svg" alt="Gitter Chat" /></a>
</p>


# Call-To-Action

## Description

The CTA component is a powerful one. It can be used as simple link or button component. 
But it can also be used as `data-js-atom` in other components or as `data-js-module`.

When you are using this component as `data-js-module` the component can fire global events. 
That means you can just listen in other modules on this event and work with the provided data. 

Nice examples for the cta component as `data-js-module` are: 

- a simple toggler (mobile navigation, search toggler)
- overlay opener with custom data 

-----------

## Installation 

### Installation with Veams

`veams install vc cta`

### Installation with Bower

`bower install cta --save`

----------- 

## Fields

### `c-cta.hbs`

#### Settings

- settings.ctaButton {`Boolean`} [a] - _Define a button or link as cta._
- settings.ctaContextClass {`String`} [default] - _Context class of the cta._
- settings.ctaClass {`String`} - _Modifier classes for the cta._
- settings.ctaTarget {`String`} - _You can define a target when using an a-tag._
- settings.ctaJsAtom {`String`} - _You can add this component as data-js-atom._
- settings.ctaJsModule {`Boolean`} - _You can add this component as data-js-module._
- settings.ctaJsOptions {`Object`} - _You can add options to the cta. This object get stringified in your mark-up._

#### Content 

- content.ctaTitle {`String`} - _You should define a title when using an a-tag._

### `c-cta__content.hbs`

#### Settings

- settings.ctaIcon {`Boolean`} - _Renders `.cta__icon` into the mark-up if set to true._

#### Content

- content.ctaContent {`String`} - _Content of the cta._

------------

## JavaScript Options

- activeClass {`String`} [is-active] - _Active class for cta if its clicked._
- clickHandler {`String`} [click] - _Click handler like touchstart._
- globalEvent {`String`} [cta:click] - _Global event triggered on click._