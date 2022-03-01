function addNav() {
    try {
        document.getElementById("navli").remove();
    }
    catch(err) {

    }

    var readerBottom = document.getElementById("pv-bottombar");
    var navli = document.createElement("li");
    navli.setAttribute("class","bar-left bar-label");
    navli.setAttribute("id","navli");
    
    var selector = document.createElement("select");
    selector.onchange = function () {
        window.location = this.value;
    }
    selector.setAttribute("id","md_nav");
    navli.appendChild(selector);
    readerBottom.appendChild(navli);

    var navOptions = genNav();
    var SelectorItems = new Array(navOptions.length);
    for(i=0;i<navOptions.length;i++) {
        SelectorItems[i] = document.createElement("option");
        SelectorItems[i].setAttribute("value","#" + navOptions[i]);
        SelectorItems[i].innerHTML = navOptions[i];
        document.getElementById("md_nav").appendChild(SelectorItems[i]);
    }
    
    
}

function genNav() {
    var txt = document.getElementById("pv-content-txt");
    var headings = [];
    var tag_names = {
        h1:1,
        h2:1,
        h3:1,
        h4:1,
        h5:1,
        h6:1
    };

    function walk( root ) {
        if( root.nodeType === 1 && root.nodeName !== 'script' ) {
            if( tag_names.hasOwnProperty(root.nodeName.toLowerCase()) ) {
                headings.push( root );
            } else {
                for( var i = 0; i < root.childNodes.length; i++ ) {
                    walk( root.childNodes[i] );
                }
            }
        }
    }

    walk(txt);
    
    for(i=0;i<headings.length;i++) {
        headings[i] = headings[i].innerHTML;
    }

    return headings;
}

function isParent (obj,parentObj){
    while (obj != undefined && obj != null && obj.tagName.toUpperCase() != 'BODY'){
    if (obj == parentObj){
    return true;
    }
    obj = obj.parentNode;
    }
    return false;
}