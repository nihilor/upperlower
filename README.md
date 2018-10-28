# upperlower

Capitalizes, titlecases, camelizes, kebabcases, pascalizes or hyphenates strings.

<p/>
<img src="https://nodei.co/npm/upperlower.png?downloads=true&stars=true" alt=""/>

<p/>
<img src="https://david-dm.org/nihilor/upperlower.png" alt=""/>

## Abstract

Upperlower converts strings and lists of strings into different notations as used in the field of information technology and software engineering. This is necessary to be able to quickly adapt different styles in different contexts.

## Rationale

Depending on the context, the spelling of identifiers varies. In order to avoid conflicts that can arise with multiple different definitions of identifiers, Upperlower converts these identifiers generically into different equivalents.

## Notations

- **Capitalize**: The first letter is capitalized.
- **Title Case**: The first letter of each major word is capitalized.
- **camelCase**/**lowerCamelCase**: The first letter of each word except the first one is capitalized and blank characters are removed.
- **PascalCase**/**UpperCamelCase**: The first letter of each word is capitalized and blank characters are removed.
- **kebap-case**: All words are written in lower case and blank characters are replaced with hyphens.
- **Hyphenate**: All words are concatenated with a hyphen.
- **WikiCase**: *Not yet implemented*.

## Installation

```
$ npm install upperlower
```

## Usage

```
<string> upperlower(<string|array> source[, <string> notation[, <boolean> isHyphenated]])
```

You may provide a string or an array of strings as the `source`. An array will be treated like a string with blank spaced words. By default `source` will capitalized. If `isHyphenated` equals true, upperlower will split strings by dashes, not by whitespace.

## Examples

```javascript
const upperlower = require("upperlower");

let capitalized = upperlower("hello");                     // -> Hello
let titlecased  = upperlower("hello world", "titlecase");  // -> Hello World
let camelcased  = upperlower("hello world", "camelcase");  // -> helloWorld
let pascalcased = upperlower("hello world", "pascalcase"); // -> HelloWorld
let kebapcased  = upperlower("hello world", "kebapcase");  // -> hello-world
let hyphenated  = upperlower("Hello World", "hyphenate");  // -> Hello-World
```

## License

Copyright (c) 2018 Mark Lubkowitz (http://www.mark-lubkowitz.de/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
