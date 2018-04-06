function tempString(tplString, attributes) {
    for (var i in attributes) {
        if (attributes.hasOwnProperty(i)) {
            console.log(i)
            tplString = tplString.replace('{{'+i+'}}', attributes[i]);
        }
    }
    return tplString;
}