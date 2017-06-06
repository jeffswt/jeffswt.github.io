(function(e){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=e()}else if(typeof define==="function"&&define.amd){define([],e)}else{var t;if(typeof window!=="undefined"){t=window}else if(typeof global!=="undefined"){t=global}else if(typeof self!=="undefined"){t=self}else{t=this}t.renderMathInElement=e()}})(function(){var e,t,r;return function n(e,t,r){function a(o,l){if(!t[o]){if(!e[o]){var f=typeof require=="function"&&require;if(!l&&f)return f(o,!0);if(i)return i(o,!0);var d=new Error("Cannot find module '"+o+"'");throw d.code="MODULE_NOT_FOUND",d}var s=t[o]={exports:{}};e[o][0].call(s.exports,function(t){var r=e[o][1][t];return a(r?r:t)},s,s.exports,n,e,t,r)}return t[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)a(r[o]);return a}({1:[function(e,t,r){var n=e("./splitAtDelimiters");var a=function(e,t){var r=[{type:"text",data:e}];for(var a=0;a<t.length;a++){var i=t[a];r=n(r,i.left,i.right,i.display||false)}return r};var i=function(e,t){var r=a(e,t);var n=document.createDocumentFragment();for(var i=0;i<r.length;i++){if(r[i].type==="text"){n.appendChild(document.createTextNode(r[i].data))}else{var o=document.createElement("span");var l=r[i].data;try{katex.render(l,o,{displayMode:r[i].display})}catch(f){if(!(f instanceof katex.ParseError)){throw f}console.error("KaTeX auto-render: Failed to parse `"+r[i].data+"` with ",f);n.appendChild(document.createTextNode(r[i].rawData));continue}n.appendChild(o)}}return n};var o=function(e,t,r){for(var n=0;n<e.childNodes.length;n++){var a=e.childNodes[n];if(a.nodeType===3){var l=i(a.textContent,t);n+=l.childNodes.length-1;e.replaceChild(l,a)}else if(a.nodeType===1){var f=r.indexOf(a.nodeName.toLowerCase())===-1;if(f){o(a,t,r)}}}};var l={delimiters:[{left:"$$",right:"$$",display:true},{left:"\\[",right:"\\]",display:true},{left:"\\(",right:"\\)",display:false}],ignoredTags:["script","noscript","style","textarea","pre","code"]};var f=function(e){var t;var r;for(var n=1,a=arguments.length;n<a;n++){t=arguments[n];for(r in t){if(Object.prototype.hasOwnProperty.call(t,r)){e[r]=t[r]}}}return e};var d=function(e,t){if(!e){throw new Error("No element provided to render")}t=f({},l,t);o(e,t.delimiters,t.ignoredTags)};t.exports=d},{"./splitAtDelimiters":2}],2:[function(e,t,r){var n=function(e,t,r){var n=r;var a=0;var i=e.length;while(n<t.length){var o=t[n];if(a<=0&&t.slice(n,n+i)===e){return n}else if(o==="\\"){n++}else if(o==="{"){a++}else if(o==="}"){a--}n++}return-1};var a=function(e,t,r,a){var i=[];for(var o=0;o<e.length;o++){if(e[o].type==="text"){var l=e[o].data;var f=true;var d=0;var s;s=l.indexOf(t);if(s!==-1){d=s;i.push({type:"text",data:l.slice(0,d)});f=false}while(true){if(f){s=l.indexOf(t,d);if(s===-1){break}i.push({type:"text",data:l.slice(d,s)});d=s}else{s=n(r,l,d+t.length);if(s===-1){break}i.push({type:"math",data:l.slice(d+t.length,s),rawData:l.slice(d,s+r.length),display:a});d=s+r.length}f=!f}i.push({type:"text",data:l.slice(d)})}else{i.push(e[o])}}return i};t.exports=a},{}]},{},[1])(1)});

function processMathInGitmentElement(elem)
{
    // Exception handling
    if (!elem)
        return ;
    // Works for inline equations
    function dfs_elem(elem, callback)
    {
        var l = []
        for (var i = 0; i < elem.childNodes.length; i++) {
            var e = elem.childNodes[i];
            if (e.tagName) {
                if (e.tagName != 'PRE' && e.tagName != 'CODE')
                    callback(e);
                l.push(e);
            } else {
                var p = /(\$[^$]+\$)/g;
                var s = e.textContent.split(p);
                for (var j = 0; j < s.length; j++) {
                    var t = s[j];
                    var el;
                    if (!p.exec(t)) {
                        el = document.createTextNode(t);
                    } else {
                        el = document.createElement('span');
                        el.classList.add('math');
                        el.classList.add('inline');
                        el.innerText = t.replace(/^\$([^$]*)\$$/, '\\($1\\)');
                    }
                    l.push(el);
                }
            }
        }
        while (elem.childNodes.length > 0)
            elem.removeChild(elem.childNodes[0]);
        for (var i = 0; i < l.length; i++)
            elem.appendChild(l[i]);
        return ;
    }
    // Call for every paragraph in element
    for (var i = 0; i < elem.children.length; i++) {
        var e = elem.children[i];
        if (e.tagName != 'P' && e.tagName != 'BLOCKQUOTE')
            continue;
        // Process block equation
        var t = '';
        for (var j = 0; j < e.childNodes.length; j++) {
            var el = e.childNodes[j];
            if (el.tagName != 'BR')
                t += el.textContent.replace('\n', '').replace(/([^\\])\\$/, '$1\\\\');
            else
                t += ' ';
        }
        if (/^\$\$[^$]*\$\$$/.exec(t)) {
            var el = document.createElement('span');
            el.classList.add('math');
            el.classList.add('display');
            el.innerText = t.replace(/^\$\$([^$]*)\$\$$/, '\\[$1\\]');
            // Injecting element
            while (e.childNodes.length > 0)
                e.removeChild(e.childNodes[0]);
            e.appendChild(el);
            continue;
        }
        // Process inline equation(s)
        dfs_elem(e, dfs_elem);
    }
    // Finished processing
    renderMathInElement(elem);
    return ;
}
