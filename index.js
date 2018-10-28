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
        source = source.split(isHyphenated ? /[_.\-]+/ : /\s+/)

    let output = []
    let separator = ""
    switch (notation) {

        case "hyphenate":
            separator = "-"
            output = source
            break

        case "kebapcase":
            separator = "-"
            output = source.map(token => token.toLowerCase())
            break

        case "pascalcase":
            output = source.map(token => capitalize(token))
            break

        case "camelcase":
            output = output.concat(
                source.shift(),
                source.map(token => capitalize(token))
            )
            break

        case "allcaps":
            separator = " "
            output = source.map(token => capitalize(token))
            break

        case "titlecase":
            separator = " "
            let trivials = [
                "a", "an", "the",
                "and", "or", "but", /* "nor", "for", "so", "yet" */
                "on", "in", "at", "by", "for", "of", "off", "to", "up"
            ]
            output = output.concat(
                capitalize(source.shift()),
                source.map(token => {
                    return token.length > 3 || !trivials.includes(token.toLowerCase())
                        ? capitalize(token)
                        : token.toLowerCase()
                })
            )
            break

        case "capitalize":
        default:
            separator = " "
            source[ 0 ] = capitalize(source[ 0 ])
            output = source
    }

    return output.join(separator)
}

module.exports = upperlower