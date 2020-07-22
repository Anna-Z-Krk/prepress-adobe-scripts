﻿/**
 * Create 2,5mm trim marks with 2,5mm bleed around the selected path item.
 * The marks are created with clockwise ordering.
 * The selected item will be deleted afterwards.
 */

#target Illustrator
#include '../.lib/colors.jsx'
#include '../.lib/preconditions.jsx'
#include '../.lib/trim_marks.jsx'
#include '../.lib/units.jsx'

checkActiveDocument()

var document = app.activeDocument
var selection = document.selection

checkSingleSelection(selection)

var selectedItem = selection[0]

checkTypename(selectedItem, 'PathItem')

var offsetAndLength = fromMm(2.5)
createTrimMarks(selectedItem, offsetAndLength, offsetAndLength, DEFAULT_TRIM_MARK_WEIGHT, registrationColor(), MARK_ALL)

selectedItem.filled = false
selectedItem.guides = true

document.selection = null