new class{constructor(){var e=jQuery;this.request,this.searchForm=e(".betterdocs-searchform"),this.searchField=e(".betterdocs-search-field"),this.searchCategory=e(".betterdocs-search-category"),this.popularSearch=e(".betterdocs-popular-search-keyword .popular-keyword"),this.searchClose=e(".docs-search-close"),this.liveSearch()}liveSearch(){var e=jQuery,t=this;this.popularSearch.on("click",(function(t){t.preventDefault();let r=e(this).text();e(this).parent(".betterdocs-popular-search-keyword").siblings(".betterdocs-searchform").find(".betterdocs-search-field").val(r).trigger("propertychange")})),this.searchForm.on("keyup keypress",(function(e){if(13===(e.keyCode||e.which))return e.preventDefault(),!1})),this.searchField.on("input propertychange paste",(function(r){let s=e(this),a=e(this).val(),c=s.parent(".betterdocs-searchform-input-wrap").siblings(".betterdocs-search-category").find(":selected").val(),i=s.parent().parent(".betterdocs-searchform"),o=s.parent().parent(".betterdocs-searchform").find(".betterdocs-search-kbslug").val();if(!a.length){var h=s.parents(".betterdocs-live-search").find(".betterdocs-search-result-wrap");h.length>0&&h.each((function(t){e(h[t]).remove()}))}t.liveSearchAction(r,s,a,c,i,o)})),this.searchCategory.on("change",(function(r){let s=e(this),a=s.siblings(".betterdocs-searchform-input-wrap").children(".betterdocs-search-field").val(),c=e(this).find(":selected").val(),i=s.parent(".betterdocs-searchform"),o=s.parent(".betterdocs-searchform").find(".betterdocs-search-kbslug").val();t.liveSearchAction(r,s,a,c,i,o)})),this.liveSearchAction=function(e,r,s,a,c,i){jQuery;let o=r.parent(".betterdocs-searchform").find(".betterdocs-search-result-wrap"),h=r.parent().find(".docs-search-loader"),n=r.parent().find(".docs-search-close"),d=betterdocsSearchConfig.search_letter_limit;"a"!=e.key&&17!=e.keyCode&&91!=e.keyCode&&s.length>=d?t.delay((function(){t.ajaxLoad(s,a,i,c,o,h,n,r)}),400):s.length||(r.parent().parent(".betterdocs-live-search").find(".betterdocs-search-result-wrap").addClass("hideArrow"),r.parent().parent(".betterdocs-live-search").find(".docs-search-result").slideUp(300),h.hide(),n.hide())},this.searchClose.on("click",(function(){e(this).hide(),e(this).parent().parent().find(".betterdocs-search-result-wrap").addClass("hideArrow"),e(this).parent().parent().find(".docs-search-result").slideUp(300),e(this).siblings(".betterdocs-search-field").val("")})),this.delay=function(e,t){let r=0;return function(e,t){return clearTimeout(r),r=setTimeout(e,t),r}}(),this.ajaxLoad=function(e,t,r,s,a,c,i,o){var h=jQuery;let n;n&&n.abort(),n=h.ajax({url:betterdocsSearchConfig.ajax_url,type:"post",data:{action:"betterdocs_get_search_result",search_input:e,search_cat:t,kb_slug:r},beforeSend:function(){c.show(),i.hide(),a.addClass("hideArrow"),h(".betterdocs-live-search .docs-search-result").slideUp(400)},success:function(e){a.remove(),c.hide(),i.show();let t=betterdocsSearchConfig.search_letter_limit;if(o.val().length<t){var r=h(".betterdocs-live-search").find(".betterdocs-search-result-wrap");return r.length>0&&r.each((function(e){h(r[e]).slideUp(400)})),void i.hide()}s.append(e.data.post_lists)}})}}};