var upperlower = function (source, notation = "capitalize") {
    if (!(typeof source === "string" || Array.isArray(source)))
        throw new Error('[upperlower] source has to be a string or an array.')

    if (typeof source === "string")
        source = source.split(' ');

    let output = ""
    switch (notation) {

        case "hyphenate":
            output = source.join('-')
            break;

        case "kebapcase":
            source = source.map(token => {
                return token.toLowerCase()
            })
            output = source.join('-')
            break;

        case "pascalcase":
            output = source.shift()
            output = output.charAt(0).toUpperCase() + output.substring(1);
            source = source.map(token => {
                return token.charAt(0).toUpperCase() + token.substring(1);
            })
            output = output + source.join('')
            break;

        case "camelcase":
            output = source.shift()
            source = source.map(token => {
                return token.charAt(0).toUpperCase() + token.substring(1);
            })
            output = output + source.join('')
            break;

        case "titlecase":
            source = source.map(token => {
                return token.charAt(0).toUpperCase() + token.substring(1);
            })
            output = source.join(' ')
            break;

        case "capitalize":
        default:
            source[ 0 ] = source[ 0 ].charAt(0).toUpperCase() + source[ 0 ].substring(1);
            output = source.join(' ')
    }

    return output
}

module.exports = upperlower;