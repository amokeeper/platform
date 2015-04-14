
$(function() {
	//IFrame高度
	iFrameResize({
	   checkOrigin: false,
		enablePublicMethods: true,  
	    messageCallback : function(messageData){ // Callback fn when message is received
		    SoneDashboard.processMessage(messageData);
			
		}
	});
	$(document.body).soneDashboard({
	   userInfo:{
			userName:'张三',
			logonTime:'2014-12-05 12:34:25'
		},
	   // navBefore:'<li class="curr"><a  href="#" onclick="backindex()">首页</a></li>',
	   //navAfter:'<li class=""><a  id="contactUs" href="#" >我要反馈</a></li>',
	   //logoutUrl : '/servlet/index/loginout',
	   //logoText:'采销工作空间',
	   	//showSearch:false,
		//showNotices:false,
		//showTasks:false,
		//logoText:'test'
		//中间div id
		//centerDomId:'',
		//menuTargetType : 'href',//href iframe
		headerTargetType:'create', //href create
	    mock:false,
	   //线上用
		jsonUrl:"/queryTopMenuJsonp?projectIds=lingzhi&parentId=374",
		menuJsonUrl:'/queryLeftMenuJsonp',
		initMenuId:'-100',
		//mock用
		/*jsonUrl:'json/header.json',
		menuJsonUrl:'json',
		initMenuId:'left.menu.empty.json',,*/
		//jsonp_domain:'http://docker.jd.com:8080',
		jsonp_domain:'http://docker.jd.com',
		welcomePage:'http://docker.jd.com/welcome',
		baseDomain:"http://docker.jd.com",
		init:function(){
		    if(SONE_MOCK){
				NOTICE_SUMMARY_TABLE_URL = '/json/queryUnReadNoticeByGroup.json';
				NOTICE_DETAIL_URL = '/json/saleNoticeDetail.json';
				NOTICE_PAGE_TABLE_URL  = '/json/queryNoticeByGroup.json';
				TASK_SUMMARY_TABLE_URL = '/json/myWorkListUnRead.json';
				TASK_DETAIL_URL   ='/json/myWorkView.json';
				TASK_PAGE_TABLE_URL  = 'http://sone.jd.com';
				
			  }else{
			   
				NOTICE_SUMMARY_TABLE_URL  =JSONP_DOMAIN+'/salesNotice/queryUnReadByGroupJsonp';
				NOTICE_DETAIL_URL  = JSONP_DOMAIN+'/salesNotice/detailJsonp';
				NOTICE_PAGE_TABLE_URL  = JSONP_DOMAIN;
				TASK_SUMMARY_TABLE_URL  = JSONP_DOMAIN+'/myWork/listUnReadJsonp';
				TASK_DETAIL_URL  = JSONP_DOMAIN+'/myWork/viewJsonp';
				TASK_PAGE_TABLE_URL  = JSONP_DOMAIN;
			  
			  }
		
		},
		headerMenuClick:function(obj,centerDomId,url,level,index,menuId){
		    if(url!=""){
				$("#"+centerDomId).attr('src', url);
			}else{
				$("#"+centerDomId).attr('src', '/docs/welcome/welcome.html');
			}
		},
		headerAfterRender : function() {
		    //
		},
		leftMenuAfterRender:function(){
		
		},
		
		leftMenuAfterConstruct:function(){
		
		},
		leftMenuInitOnce:function(){
		
		
		}
		
		
	

	});

	
	
});


