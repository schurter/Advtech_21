document.onmousemove = function(evt){
    makeACircle(evt);
}
/**
 * this method generate a red circle div
 * where the user clicks
 *
 *@param evt    the info about the click
 */
function makeACircle(evt){
    //alert(evt.clientX);
    //generate a div
    var circ = document.createElement("div");
    //set its horizontal position to that of the cursor:
    circ.style.left = evt.clientX+'px';
    //set its vertical position to that of the cursor:
    circ.style.top = evt.clientY+'px';
    //adds it to the HTML as child of <body>
    document.body.appendChild(circ);
}