/**
 * Javascript utilities function
 * 
 * Generate function for a reusable actions
 * Adding more dynamic function to be reusable
 * 
 * Requires jQuery to work for this version
 * 
*/

/**
 * Clone and Add function
 * 
 * clone an element and add element to destination
 * 
*/
function cloneAndReplace(clone, replace, $, hidedefault) {
    if (typeof $ == "undefined")
        throw new Error("Function requires jQuery to work");

    $clone = $(clone);
    $replace = $(replace);
    _clone = $clone.clone();
        $replace.prepend(_clone);

    if (typeof hidedefault != "undefined" && hidedefault === true)
        $clone.hide();
}