<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="description" content="">
<meta name="author" content="">
<title>零智平台</title>
<!--第三方css，包括bootstrap、highcharts、echarts等-->
<link rel="stylesheet" type="text/css" href="http://docker.jd.com/resource/soneui/third-party.min.css">
<!--ui标准化组件样式-->
<link rel="stylesheet" type="text/css" href=" http://docker.jd.com/resource/soneui/sone-ui.min.css">
<!-- ECharts单文件引入 -->
<script src=" http://docker.jd.com/resource/soneui/echarts-plain-map.js">
</script>
<!-- HighCharts单文件引入 -->
<script src=" http://docker.jd.com/resource/soneui/highcharts-all.js">
</script>

<!-- third party--> 
<script type="text/javascript" src=" http://docker.jd.com/resource/soneui/vendors.min.js">
</script> 
<!--ui标准化组件core  包括leftMenu、Header-->
<script type="text/javascript" src=" http://docker.jd.com/resource/soneui/sone-ui.min.js">
</script> 
<!--ui标准化 通用插件 包括daterangepicker、combo等插件-->
<script type="text/javascript" src=" http://docker.jd.com/resource/soneui/sone-widget.min.js">
</script> 
<!--ui标准化组件 example等-->

<script type="text/javascript" src=" http://docker.jd.com/resource/soneui/iframeResizer.js">
</script> 
<script type="text/javascript" src=" http://docker.jd.com/resource/soneui/rs-init.js">
</script> 

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
	<script src="/resources/soneui/js/third-party/html5patch/html5shiv.js">
</script>
      <script src="/resources/soneui/js/third-party/html5patch/respond.js">
</script>
<![endif]-->
<script>
global_userName='$nick';
</script>
<style type="text/css">.jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}</style>
</head>
<body style="min-width: 1300px;">
<div id="header">
	<div class="header-main"> <div class="logo">零智平台</div>
		<div class="nav" id="navlist" style="width: 550px;">
			<ul id="navfouce" style="width: 0px;">
</ul>
</div>
				<div class="nav-option" style="display: none;">
					<a href="javascript:;" class="prev">&lt;</a> 
					<a href="javascript:;" class="next" style="left: 800px;">&gt;</a>
					 </div> <div class="navbar-right">
<form onsubmit="return false;" class="navbar-form navbar-left search-bar " role="search">
<div class="form-group">	<input id="search" class="form-control" type="text" placeholder="Search...">	</div>	<button id="serachButton" class="btn btn-default" type="submit" data-original-title="Search">
<span class="glyphicon glyphicon-search">
</span>
</button>
</form> <ul class=" navbar-nav"> <li id="noticeList" class="dropdown  messages-menu">
<a class="dropdown-toggle" data-toggle="dropdown" href="http://docker.jd.com/#">
<i class="glyphicon glyphicon-envelope">
</i> <span class="label  label-success">0</span>
</a>
</li> <li id="taskList" class="dropdown projects-menu">
<a class="dropdown-toggle" data-toggle="dropdown" href="http://docker.jd.com/#">
<i class="glyphicon glyphicon-list">
</i> <span class="label  label-success">0</span>
</a>
</li> <li class="dropdown user-menu">
<a class="dropdown-toggle" data-toggle="dropdown" href="http://docker.jd.com/#">
<i class="glyphicon glyphicon-user">
</i>&nbsp;<i style="font-style:normal ">$nick</i>  <i class="caret">
</i>
</a>  <ul class="dropdown-menu fore3 " role="menu">
<li class="text-center user-header ">
<div style="background:(url(./img/avatar3.png)">
</div>
<h4 class="text-center">$nick</h4>
<p class="text-center">2014-12-05 12:34:25</p>
</li>
<li class="user-footer">
<div class="pull-right">
<a class="btn btn-default btn-flat" href="javascript:;;">注销</a>
</div>
</li>
</ul> </li> </ul>
</div>
<div class="box" id="navbox" style="height:0px;opacity:0;overflow:hidden;">
</div> </div>
</div>
<div id="left-menu" class="wrap" style="display: none;"> </div>
<div id="wrapper"> 
    <!-- center iframe-->
    <div id="page-wrapper" style="margin-left: 0px;"> 

        <iframe frameborder="no" width="100%" scrolling="no" src=" http://docker.jd.com/resource/soneui/home.html" id="iFrameResizer0" style="overflow: hidden; height: 1037px;">
</iframe>

    </div>
</div>


<div style="display:none"> 
	 </div>
	 <div style="display:none"> 
	 </div>
	 <div class="ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable ui-dialog-buttons" tabindex="-1" role="dialog" aria-labelledby="ui-id-1" style="display: none; outline: 0px; z-index: 1000; position: fixed;">
	 <div class="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix">
<span id="ui-id-1" class="ui-dialog-title">营销通知:</span>
<a href="http://docker.jd.com/#" class="ui-dialog-titlebar-close ui-corner-all" role="button">
<span class="ui-icon ui-icon-closethick">close</span>
</a>
</div>
<div id="sales_message" class="ui-dialog-content ui-widget-content"> </div>
	 	<div class="ui-resizable-handle ui-resizable-n" style="z-index: 1000;">
</div>
	 	<div class="ui-resizable-handle ui-resizable-e" style="z-index: 1000;">
</div>
	 	<div class="ui-resizable-handle ui-resizable-s" style="z-index: 1000;">
</div>
	 	<div class="ui-resizable-handle ui-resizable-w" style="z-index: 1000;">
</div>
	 	<div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se ui-icon-grip-diagonal-se" style="z-index: 1000;">
</div>
	 	<div class="ui-resizable-handle ui-resizable-sw" style="z-index: 1000;">
</div>
	 	<div class="ui-resizable-handle ui-resizable-ne" style="z-index: 1000;">
</div>
<
	 	div class="ui-resizable-handle ui-resizable-nw" style="z-index: 1000;">
</div>
	 	<div class="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix">
	 		<div class="ui-dialog-buttonset">
<button type="button">关闭</button>
</div>
	 		</div>
</div>
<div class="ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable ui-dialog-buttons" tabindex="-1" role="dialog" aria-labelledby="ui-id-2" style="display: none; outline: 0px; z-index: 1000; position: fixed;">
<div class="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix">
<span id="ui-id-2" class="ui-dialog-title">您所有的营销通知:</span>
<a href="http://docker.jd.com/#" class="ui-dialog-titlebar-close ui-corner-all" role="button">
<span class="ui-icon ui-icon-closethick">close</span>
</a>
</div>
	 		<div id="sales_message_list" class="ui-dialog-content ui-widget-content"> </div>
<div class="ui-resizable-handle ui-resizable-n" style="z-index: 1000;">
</div>
<div class="ui-resizable-handle ui-resizable-e" style="z-index: 1000;">
</div>
<div class="ui-resizable-handle ui-resizable-s" style="z-index: 1000;">
</div>
<div class="ui-resizable-handle ui-resizable-w" style="z-index: 1000;">
</div>
<div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se ui-icon-grip-diagonal-se" style="z-index: 1000;">
</div>
<div class="ui-resizable-handle ui-resizable-sw" style="z-index: 1000;">
</div>
<div class="ui-resizable-handle ui-resizable-ne" style="z-index: 1000;">
</div>
<div class="ui-resizable-handle ui-resizable-nw" style="z-index: 1000;">
</div>
<div class="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix">
<div class="ui-dialog-buttonset">
<button type="button">关闭</button>
</div>
</div>
</div>
<div style="display:none">  </div>
<div class="ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable ui-dialog-buttons" tabindex="-1" role="dialog" aria-labelledby="ui-id-3" style="display: none; outline: 0px; z-index: 1000; position: fixed;">
<div class="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix">
<span id="ui-id-3" class="ui-dialog-title">您当前任务:</span>
<a href="http://docker.jd.com/#" class="ui-dialog-titlebar-close ui-corner-all" role="button">
<span class="ui-icon ui-icon-closethick">close</span>
</a>
</div>
<div id="mytask_message_list" class="ui-dialog-content ui-widget-content"> </div>
<div class="ui-resizable-handle ui-resizable-n" style="z-index: 1000;">
</div>
<div class="ui-resizable-handle ui-resizable-e" style="z-index: 1000;">
</div>
	 	<div class="ui-resizable-handle ui-resizable-s" style="z-index: 1000;">
</div>
<div class="ui-resizable-handle ui-resizable-w" style="z-index: 1000;">
</div>
	 	<div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se ui-icon-grip-diagonal-se" style="z-index: 1000;">
</div>
<div class="ui-resizable-handle ui-resizable-sw" style="z-index: 1000;">
</div>
<div class="ui-resizable-handle ui-resizable-ne" style="z-index: 1000;">
</div>
<div class="ui-resizable-handle ui-resizable-nw" style="z-index: 1000;">
</div>
<div class="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix">
	<div class="ui-dialog-buttonset">
		<button type="button">关闭</button>
		</div>
</div>
</div>
		</body>
		</html>
