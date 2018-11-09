
# Finest Form
### Form inputs design and animation for websites

Finest-form provides a lightweight standalone style and animation for input, select, label, radio and checkboxes. The project is currently work in progress, not all input elements are supported and is not meant to be used in production.

## Installation

<!-- - [Download the latest release.](https://github.com/viralk/finest-form/archive/master.zip) -->
- Clone the repo: `git clone https://github.com/viralk/finest-form.git`
<!-- - Install with [npm](https://www.npmjs.com/): `npm install finest-form` -->
<!-- - Install with [yarn](https://yarnpkg.com/): `yarn add ` -->

## Getting Started

```
finest-form/
├── dist/
|   ├── finest-form.css
|   ├── finest-form.min.css
|   ├── finest-form.js
|   └── finest-form.min.js
└── src/
    ├── scss/
    |   └── finest-form.scss
    └── js/
        └── finest-form.js
```

To start using Finest-Form you need to include the relative css and js files in your project. The files ready to be included are located inside the `dist/` folder. The files are available in standard and minified version. In the `src` folder you can find the sass file in which you can customize the sizing and appearance of the elements. Further instructions are located in the sass file.

## Usage

### Input

For the `<input>` elements you need to include a wrapper with `input-group` class and the relative label after the input element

```html
<div class="input-group">
  <input type="text" name="text">
  <label for="text">Text</label>
</div>
```


### Select

For the `<select>` element you need to include the `select-group` class wrapper with the relative label after the element

```html
<div class="select-group">
  <select name="select">
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
  </select>
  <label for="select">Select</label>
</div>
```


For the `type="radio"` and `type="checkbox"` input elements you need to include their relative special wrapper instead of the regular input wrapper class as stated below

### Radio
include the `radio-group` class. 

```html
<div class="radio-group">
    <input type="radio" name="radio" id="radio1" checked>
    <label for="radio1">radio1</label>
    <input type="radio" name="radio" id="radio2">
    <label for="radio2">radio2</label>
</div>
```

### Checkbox
include the `checkbox-group` class.

```html
<div class="checkbox-group">
  <input type="checkbox" name="check" id="check1">
  <label for="check1">check1</label>
  <input type="checkbox" name="check" id="check2">
  <label for="check2">check2</label>
</div>
```

##

## Compatibility

- Internet Explorer 10+
- Edge
- Chrome 63+
- Firefox 55+
- Opera 48+
- Safari

Testing supported by<br>
<a href="https://www.browserstack.com">
<img width="160" src="https://live.browserstack.com/images/opensource/browserstack-logo.svg" alt="BrowserStack"/>
</a>