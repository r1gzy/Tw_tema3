const compress = (a, b = true) => {
    if (typeof a !== 'string' && !(a instanceof String)) {
        throw new Error('InvalidType');
    }

    if (b) {
        // Compresie RLE pentru string-uri nevide
        if (a === '') return '';
        return a.match(/(.)\1*/g).map(group => group[0] + group.length).join('');
    } else {
        // Decompresie RLE
        return a.replace(/([a-zA-Z])(\d+)/g, (match, char, count) => char.repeat(parseInt(count)));
    }
}

module.exports = compress;
