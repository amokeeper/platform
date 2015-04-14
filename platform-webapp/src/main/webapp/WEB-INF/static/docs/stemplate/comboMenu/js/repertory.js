// JavaScript Document

    $("[data-widget='collapse']").click(function() {
        //Find the box parent        
        var box = $(this).parents(".panel").first();
        //Find the body and the footer
        var bf = box.find(".panel-body, .panel-footer");
        if (!box.hasClass("collapsed-box")) {
            box.addClass("collapsed-box");
            //Convert minus into plus
            $(this).children(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
            bf.slideUp();
        } else {
            box.removeClass("collapsed-box");
            //Convert plus into minus
            $(this).children(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
            bf.slideDown();
        }
    });
	
//    $("[data-widget='collapse']").click(function() {
//        //Find the box parent        
//        var box = $(this).parents(".tabbox").first();
//        //Find the body and the footer
//        var bf = box.find(".tab-content");
//        if (!box.hasClass("collapsed-box")) {
//            box.addClass("collapsed-box");
//            //Convert minus into plus
//            $(this).children(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
//            bf.slideUp();
//        } else {
//            box.removeClass("collapsed-box");
//            //Convert plus into minus
//            $(this).children(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
//            bf.slideDown();
//        }
//    });
//	
	
		
	$("[data-widget='remove']").click(function() {
        //Find the box parent        
        var box = $(this).parents(".panel").first();
        box.slideUp();
    });
//	
//$("[data-widget='remove']").click(function() {
//        //Find the box parent        
//        var box = $(this).parents(".tabbox").first();
//        box.slideUp();
//    });

	

    $('[data-toggle="maximize"]').on("click", function (event) {
        event.preventDefault();
        var widget = $(this).parents(".panel").eq(0);
        var button = $(this).find("i").eq(0);
        var compress = "fa-compress";
        var expand = "fa-expand";
        if (widget.hasClass("maximized")) {
            if (button) {
                button.addClass(expand).removeClass(compress);
            }
            widget.removeClass("maximized");
            widget.find(".panel-body").css("height", "auto");
        } else {
            if (button) {
                button.addClass(compress).removeClass(expand);
            }
            widget.addClass("maximized");
            maximize(widget);
        }
    });
	



//Add Classes Function
function addClass(elem, cls) {
    var oldCls = elem.className;
    if (oldCls) {
        oldCls += " ";
    }
    elem.className = oldCls + cls;
}

//Remove Classes Function
function removeClass(elem, cls) {
    var str = " " + elem.className + " ";
    elem.className = str.replace(" " + cls, "").replace(/^\s+/g, "").replace(/\s+$/g, "");
}

//Has Classes Function
function hasClass(elem, cls) {
    var str = " " + elem.className + " ";
    var testCls = " " + cls + " ";
    return (str.indexOf(testCls) != -1);
}

