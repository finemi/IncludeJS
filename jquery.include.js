/*!
 * jquery.include.js, by @Finemi
 * Copyright (c) 2019 Finemi
 * Licensed under http://opensource.org/licenses/MIT
 *
 * https://github.com/finemi/IncludeJS
 */

(function ($) {
    /**
     * Include File 到指定元素
     * @author 卢有佳
     * @param uri 要引入的html文件路径
     *          例：1. 'header.html'  - 引入header.html文件的内容
     *              2. 'header.html #content' - 引入header.html中id为content的元素的html（包括该元素自身）
     * @param replaceDest（可空） dest的行为，false：加入到dest元素内，true：替换dest元素（默认false）
     */
    $.fn.include = function (uri,replace) {
        return include(uri,$(this),replace);
    };

    /**
     * Include File
     * @author 卢有佳
     * @param uri 要引入的html文件路径
     *          例：1. 'header.html'  - 引入header.html文件的内容
     *              2. 'header.html #content' - 引入header.html中id为content的元素的html（包括该元素自身）
     *
     * @param dest（可空） 目标 jQuery元素 或 选择器
     *          空：直接写入当前位置
     *          非空：默认加入到指定选择器的元素内
     *
     * @param replaceDest（可空） dest的行为，false：加入到dest元素内，true：替换dest元素（默认false）
     */
    window.include = function(uri,dest,replaceDest){
        var path = uri, r = /\s+/.exec(uri), selector;
        if(r){
            path = uri.substr(0,r.index);
            selector = uri.substr(r.index + r[0].length,uri.length);
        }

        var h = $.ajax({url:path, dataType:'html', async:false,}).responseText;
        if(selector){
            h = $('<div>').append($('<div>').append(h).find(selector)).html();
        }

        if(dest){
            var $dest = dest instanceof jQuery?dest:$(dest);
            if(replaceDest){
                $dest.replaceWith(h);
            }else{
                $dest.append(h);
            }
        }else{
            document.write(h);
        }
        return h;
    }
})(jQuery);