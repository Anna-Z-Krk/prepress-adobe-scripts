#target Illustrator
#include '../.lib/commons.js'

var typenames = ''
selection.forEach(function(it) {
    typenames += it.typename + '\n'
})
if (typenames == '') {
    typenames = 'No selection.'
}

alert(typenames)