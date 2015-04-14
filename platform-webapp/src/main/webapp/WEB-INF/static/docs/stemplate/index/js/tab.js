
// Dynamic tabs
var tabs = $( "#tabs" ).tabs();
$(document).ready(function(e) {
  tabs.tabs( 'url' , 0 , "./table.html" );  
});

// actual addTab function: adds new tab using the input from the form above
function addTab(tabId,tabTitle,tabContentSrc) {
	var isExist = false;
	tabs.children().each(function (n, i) {
        if (i.id == tabId){
        	isExist = true;
            tabs.tabs('select', n-1);
            return;
        } 
    });
    if(!isExist){
    	var label = tabTitle || "无标题",
    	id = tabId;
    	var tabTemplate = "<li tabindex='1'><a href='#{href}' tabindex='1'>#{label}</a> <span class='ui-icon ui-icon-close'>Remove Tab</span></li>";
    	
    	li = $( tabTemplate.replace( /#\{href\}/g, "#" + id ).replace( /#\{label\}/g, label ) ),
    	iframeId="iframe-"+tabId;
    	var	tabContent = "<iframe src='"+ tabContentSrc +"' width=100%  id='"+iframeId+"' frameborder='0' fit='true' >";
    	var tabContentHtml = tabContent || "";
    	
    	tabs.find( ".ui-tabs-nav" ).append( li );
    	tabs.find( ".tab-content" ).append( "<div id='" + id + "'>" + tabContentHtml + "</div>" );
    	//IFrame高度
    	$('#'+iframeId).iFrameResize({
    		//log : true
    	});
    	
    	tabs.tabs( "refresh" );
    	tabs.tabs('select', tabs.children().length-2);
		tabs.tabs('select', "#" + id );
		
    }
}

// close icon: removing the tab on click
$( "#tabs" ).on( "click",'span.ui-icon-close', function() {
    var panelId = $( this ).closest( "li" ).remove().attr( "aria-controls" );
    $( "#" + panelId ).remove();
    tabs.tabs( "refresh" );
});

