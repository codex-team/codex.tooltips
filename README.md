# codex.tooltips

Lightweight JavaScript module for adding tooltips with custom content
to any HTML element on DOM

# Installation

## install via NPM/Yarn

```shell
npm install codex.tooltips
```

```shell
yarn add codex.tooltips
```

To include tooltips to your script follow the instructions below:

```js
const tooltip = require('codex.tooltips');
```

or 

```js
import tooltip from 'codex.tooltips';
```

## Usage

There are two main methods: 

#### Show

Method shows tooltip with custom content on passed element
 
```js
tooltip.show(element, content, options);
``` 

* `element` — existed HTML in your DOM
* `content` — HTML Node, fragment or Element that will be put inside the tooltip
* `options` - additional tooltip behavioral options

#### Hide

Method hides tooltip
```js
tooltip.hide();
```

#### Example

```js
const myDiv = document.getElementById('#myDiv');

myDiv.addEventListener('mouseenter', (event) => {
  const text = 'Element description'
  const tooltipContent = document.createTextNode(text);

  tooltip.show(myDiv, tooltipContent);
});

myDiv.addEventListener('mouseleave', (event) => {
  tooltip.hide();
});
```

In example above we show tooltip on #myDiv element on "mouseenter" and hide on "mouseleave"
