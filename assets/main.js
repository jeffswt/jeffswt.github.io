
class PkjellBlog
{
    constructor()
    {
        this.katex_hook = undefined;
        this.args = {};
        return this;
    }
    parse_args()
    {
        var uri = window.location.href;
        var dict = {};
        if (uri.lastIndexOf('?') > 0) {
            var params_list = uri.substring(uri.lastIndexOf("?") + 1, uri.length);
            var params = params_list.split('&');
            for (var i = 0; i < params.length; i++) {
                var tuple = params[i].split('=');
                tuple[0] = decodeURIComponent(tuple[0]);
                tuple[1] = decodeURIComponent(tuple[1]);
                dict[tuple[0]] = tuple[1];
            }
        }
        this.args = dict;
        return dict;
    }
    hook_katex()
    {
        // Store katex hook to local area
        blog.katex_hook = katex.render;
        // Destroy remote function
        katex.render = null;
        // Create desired hook function
        function remote_hook(rend_str, target, cfg) {
            rend_str = rend_str.replace('\n', ' ');
            var rend_arr = rend_str.split('\\\\');
            console.log(rend_arr);
            if (rend_arr.length <= 1) {
                blog.katex_hook(rend_str, target, cfg);
            } else if (rend_arr.length > 1) {
                for (var i = 0; i < rend_arr.length; i++) {
                    var rend_s = rend_arr[i];
                    var elem = document.createElement('p');
                    blog.katex_hook(rend_s, elem, cfg);
                    target.appendChild(elem);
                }
            }
            return ;
        }
        // Join to global function
        katex.render = remote_hook;
        // Succeeded
        return ;
    }
    preload_img(src)
    {
        var img = new Image();
        img.src = src;
        return ;
    }
    preload_images()
    {
        var elems = document.getElementsByTagName('img');
        for (var i = 0; i < elems.length; i++) {
            var elem = elems[i];
            // preloader
            if (elems[i].classList.contains('thumb')) {
                var img = new Image();
                var scope_protector = function(img) {
                    var elem_ = elem;
                    img.onload = function() {
                        elem_.src = img.src;
                        elem_.classList.remove('thumb');
                        elem_.classList.add('small');
                        return ;
                    }
                    return ;
                };
                scope_protector(img);
                img.src = elem.dataset['small'];
            }
            // high-res
            if (elem.dataset['src'] != '') {
                elem.onclick = function() {
                    if (!this.classList.contains('small'))
                        return ;
                    var img = new Image();
                    this.classList.add('preload-src');
                    var scope_protector = function(img, elem) {
                        var elem_ = elem;
                        img.onload = function() {
                            elem_.src = img.src;
                            elem_.classList.remove('small');
                            elem_.classList.remove('preload-src');
                            return ;
                        }
                        return ;
                    };
                    scope_protector(img, this);
                    img.src = this.dataset['src'];
                    return ;
                }
            }
        }
        return ;
    }
    preload_eqn()
    {
        renderMathInElement(document.body);
        return ;
    }
    match_archive_regex()
    {
        var inpelem = document.getElementById('regex-filter');
        var errelem = document.getElementById('regex-error');
        var s_patt = inpelem.value.toLowerCase();
        var patt = RegExp();
        var err_info = '';
        // compiling
        if (s_patt == '')
            s_patt = '.*'
        try {
            patt.compile(s_patt);
        } catch (err) {
            err_info = err.message;
        }
        // displaying errors
        if (err_info != '') {
            inpelem.classList.add('error');
            errelem.classList.add('error');
            errelem.innerText = err_info;
            return ;
        } else {
            inpelem.classList.remove('error');
            errelem.classList.remove('error');
        }
        // matching all entries
        var elems = document.getElementsByClassName('archive-entry hideable');
        for (var i = 0; i < elems.length; i++) {
            var elem = elems[i];
            if (patt.test(elem.dataset['keywords'].toLowerCase())) {
                elem.classList.remove('hidden');
            } else {
                elem.classList.add('hidden');
            }
        }
        // matching all months
        var elems = document.getElementsByClassName('title hideable');
        for (var i = 0; i < elems.length; i++) {
            var elem = elems[i];
            var found = false;
            var chld = elem.nextElementSibling.children;
            for (var j = 0; j < chld.length; j++)
                if (!chld[j].classList.contains('hidden'))
                    found = true;
            if (found) {
                elem.parentNode.classList.remove('hidden');
            } else {
                elem.parentNode.classList.add('hidden');
            }
        }
        return ;
    }
    filter_archive(patt)
    {
        var inpelem = document.getElementById('regex-filter');
        inpelem.value = patt;
        blog.match_archive_regex();
        return ;
    }
    load_comments()
    {
        var elem = document.getElementById('comments-section');
        if (!elem)
            return ;
        var gitment = new Gitment({
            id: elem.dataset['id'],
            owner: 'jeffswt',
            repo: 'jeffswt-comments',
            oauth: {
                client_id: '229c3aeefc021dc7d5f9',
                client_secret: 'd9e10656f57f44acd81abedd7c578d10e344d5fd',
            },
        });
        gitment.render(elem);
        return ;
    }
    wait_dom_load()
    {
        document.body.onload = function() {
            document.body.hidden = false;
            blog.preload_images();
            blog.load_comments();
            return ;
        }
        return ;
    }
}

const blog = new PkjellBlog();

blog.parse_args();
blog.preload_eqn();
blog.wait_dom_load();
