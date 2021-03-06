// Rename file link with auto-relink.
// Only tested on images, not documents.

#target Illustrator
#include '../.lib/commons.js'

checkSingleSelection()

var item = selection.first()
checkTypename(selection.first(), 'PlacedItem')
checkNotNull(item.file)

var currentFileName = unescape(item.file.name)
var currentName = currentFileName.substringBefore('.')
var currentExt = currentFileName.substringAfter('.')

var input = prompt('New file name:', currentName, 'Rename File & Relink')

if (input == null || input == '') {
    alert('Invalid input.', 'Rename Link')
} else if (input == currentName) {
    alert('Unchanged.', 'Rename Link')
} else {
    var newName = input + '.' + currentExt
    var parent = item.file.parent // reference will be unavailable after rename
    var success = item.file.rename(newName)
    if (!success) {
        alert("Can't rename.", 'Rename Link')
    } else {
        item.relink(parent.getFiles()
            .filter(function(file) { return unescape(file.name) == newName })
            .first())
    }
}