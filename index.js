/*!

upperlower -- Convert strings and arrays to upper and lower case combinations
Copyright (c) 2018 Mark Lubkowitz <mail@mark-lubkowitz.de>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

function capitalize (token) {
    token = String(token)
    return token.charAt(0).toUpperCase() + token.substring(1)
}

var upperlower = function (source, notation = "capitalize", isHyphenated = false) {
    // only convert strings and arrays
    if (!(typeof source === "string" || Array.isArray(source))) {
        console.error(`[upperlower] Source must be a <string> or an <array>, instead a <${typeof source}> was given.`)
        return
    }

    if (typeof source === "string")
        source = source.split(isHyphenated ? "-" : /\s/)

    let output = ""
    switch (notation) {

        case "hyphenate":
            output = source.join('-')
            break

        case "kebapcase":
            source = source.map(token => token.toLowerCase())
            output = source.join('-')
            break

        case "pascalcase":
            source = source.map(token => capitalize(token))
            output = output + source.join('')
            break

        case "camelcase":
            output = source.shift()
            source = source.map(token => capitalize(token))
            output = output + source.join('')
            break

        case "titlecase":
            source = source.map(token => capitalize(token))
            output = source.join(' ')
            break

        case "capitalize":
        default:
            source[ 0 ] = capitalize(source[ 0 ])
            output = source.join(' ')
    }

    return output
}

module.exports = upperlower