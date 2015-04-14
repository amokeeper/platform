//comboMenu
$(function() {
    	var categories = [ {
			"value" : 1,
			"text" : "My Documents",
			"children" : [ {
				"value" : 11,
				"text" : "Photos",
				"children" : [ {
					"value" : 111,
					"text" : "Friend",
					"children" : [ {
						"value" : 1111,
						"text" : "yjb",
						"children" : [ {
							"value" : 11111,
							"text" : "小布丁"
						} ]
					}, {
						"value" : 1112,
						"text" : "zn"
					} ]
				}, {
					"value" : 112,
					"text" : "Wife"
				}, {
					"value" : 113,
					"text" : "Company"
				} ]
			}, {
				"value" : 12,
				"text" : "Program Files",
				"children" : [ {
					"value" : 121,
					"text" : "Intel"
				}, {
					"value" : 122,
					"text" : "Java"
				}, {
					"value" : 123,
					"text" : "Microsoft Office"
				}, {
					"value" : 124,
					"text" : "Games"
				} ]
			}, {
				"value" : 13,
				"text" : "index.html"
			}, {
				"value" : 14,
				"text" : "about.html"
			}, {
				"value" : 15,
				"text" : "welcome.html"
			} ]
		}, {
			"value" : 2,
			"text" : "Your Documents"
		} ];

		$("#cmbDiv").comboMenu({
			height : 32,
			width : 180,
			popWidth : 120,
			useSearch : true,
			title : "品类",
			data : categories,
			onShow : function() {
				// alert("onShow");
			},
			onHide : function() {
				// alert("onHide");
			},
			onClick : function() {
				// alert("onClick");
			},
			onChanged : function(oldValue, newValue) {
				// alert("onChanged：old=" + (!oldValue ? "" : oldValue.value) + "new=" + (!newValue ? "" : newValue.value));
			}
		});
		/*$("#cmbDiv2").comboMenu({
			height : 35,
			width : 180,
			popWidth : 120,
			useSearch : true,
			title : "品类",
			data : categories,
			onShow : function() {
				// alert("onShow");
			},
			onHide : function() {
				// alert("onHide");
			},
			onClick : function() {
				// alert("onClick");
			},
			onChanged : function(oldValue, newValue) {
				// alert("onChanged：old=" + (!oldValue ? "" : oldValue.value) + "new=" + (!newValue ? "" : newValue.value));
			}
		});
		$("#cmbDiv3").comboMenu({
			height : 35,
			width : 180,
			popWidth : 120,
			useSearch : true,
			title : "品类",
			data : categories,
			onShow : function() {
				// alert("onShow");
			},
			onHide : function() {
				// alert("onHide");
			},
			onClick : function() {
				// alert("onClick");
			},
			onChanged : function(oldValue, newValue) {
				// alert("onChanged：old=" + (!oldValue ? "" : oldValue.value) + "new=" + (!newValue ? "" : newValue.value));
			}
		});*/

		$("#cmbDiv").comboMenu("setValue", "113");
		/*$("#cmbDiv2").comboMenu("setValue", "112");
		$("#cmbDiv3").comboMenu("setValue", "111");*/
		
		
    
});

//daterangepicker
$(function() {
	var cb = function(start, end, label) {
					$('#dateRangePicker span').html(
							start.format('YYYY-MM-DD') + ' - '
									+ end.format('YYYY-MM-DD'));
				};

	var optionSet1 = {
		startDate : moment().subtract(29, 'days'),
		endDate : moment(),
		minDate : '01/01/2000',
		maxDate : '12/31/2020',
		//dateLimit: { days: 60 },
		showDropdowns : true,
		showWeekNumbers : true,
		timePicker : true,
		timePickerIncrement : 1,
		timePicker12Hour : true,
		ranges : {
			'今天' : [ moment(), moment() ],
			'昨天' : [ moment().subtract(1, 'days'),
					moment().subtract(1, 'days') ],
			'最近 7 天' : [ moment().subtract(6, 'days'),
					moment() ],
			'最近 30 天' : [ moment().subtract(29, 'days'),
					moment() ],
			'本月' : [ moment().startOf('month'),
					moment().endOf('month') ],
			'上月' : [
					moment().subtract(1, 'month').startOf(
							'month'),
					moment().subtract(1, 'month').endOf(
							'month') ]
		},
		opens : 'right',
		buttonClasses : [ 'btn btn-default' ],
		applyClass : 'btn-small btn-primary',
		cancelClass : 'btn-small',
		format : 'MM/DD/YYYY',
		separator : ' to ',
		locale : {
			applyLabel : '确定',
			cancelLabel : '取消',
			fromLabel : '从',
			toLabel : '到',
			customRangeLabel : '自定义',
			customs:[{label:'按月',type:'monthcalendar'},{label:'按周',type:'weekcalendar'},{label:'按天',type:'singlecalendar'}],
			customRangeLabelWeek : "按周",
			daysOfWeek : [ '周日', '周一', '周二', '周三', '周四',
					'周五', '周六' ],
			monthNames : [ '一月', '二月', '三月', '四月', '五月',
					'六月', '七月', '八月', '九月', '十月', '十一月',
					'十二月' ],
			firstDay : 1
		}
	};

	$('#dateRangePicker span').html(
			moment().subtract(29, 'days').format(
					'YYYY-MM-DD')
					+ ' - ' + moment().format('YYYY-MM-DD'));

	$('#dateRangePicker').daterangepicker(optionSet1, cb);
		
		
    
});
//provincepicker
$(function() {
	$("#district_cn").provincepicker({
		objid:"#district_cn", showid:"#sel_district", input_cn:"#district_cn", input:"#citycategory",
		input_cn2:"#district_cn2",
		input2:"#citycategory2", QSarr:new Array(), strlen:100
	});
	$("#district_cn").click(function(event) {
				$('#contactUsModal').modal('show');
			});

});	
//demandDegree
$(function() {
var panel=$("#raphael").demandGraph({divID : "raphael"});
	panel.setData(mockData);
	panel.drawBg("#ffb049");
	panel.drawCircle("#4284e2");
	$("#demandTable").demandTable({
	    	data : {
			
			dateRange : "2015-01-1 - 2015-01-29",
			areas : "",
			catalogs : "吸尘器",
			demandDegree : [{
				attrName : "吸尘器",
				degree : 52075,
				change : 100,
				attrValues : [{
							attrValue : "吸尘器",
							degree : 52075,
							change : 100,
							attrName : "吸尘器",
							attrDegree : 52075,
							attrChange : 100
						}]
			}, {
				attrName : "家用",
				degree : 10883,
				change : 100,
				attrValues : [{
							attrValue : "家用",
							degree : 10883,
							change : 100,
							attrName : "家用",
							attrDegree : 10883,
							attrChange : 100
						}]
			}, {
				attrName : "扫地机器人",
				degree : 10810,
				change : 100,
				attrValues : [{
							attrValue : "扫地机器人",
							degree : 10810,
							change : 100,
							attrName : "扫地机器人",
							attrDegree : 10810,
							attrChange : 100
						}]
			}, {
				attrName : "扫地机",
				degree : 2709,
				change : 100,
				attrValues : [{
							attrValue : "扫地机",
							degree : 2709,
							change : 100,
							attrName : "扫地机",
							attrDegree : 2709,
							attrChange : 100
						}]
			}, {
				attrName : "科沃斯",
				degree : 2558,
				change : 100,
				attrValues : [{
							attrValue : "科沃斯",
							degree : 2558,
							change : 100,
							attrName : "科沃斯",
							attrDegree : 2558,
							attrChange : 100
						}]
			}, {
				attrName : "机器人",
				degree : 2518,
				change : 100,
				attrValues : [{
							attrValue : "机器人",
							degree : 2518,
							change : 100,
							attrName : "机器人",
							attrDegree : 2518,
							attrChange : 100
						}]
			}, {
				attrName : "飞利浦吸尘器",
				degree : 2431,
				change : 100,
				attrValues : [{
							attrValue : "飞利浦吸尘器",
							degree : 2431,
							change : 100,
							attrName : "飞利浦吸尘器",
							attrDegree : 2431,
							attrChange : 100
						}]
			}, {
				attrName : "iRobot",
				degree : 1581,
				change : 100,
				attrValues : [{
							attrValue : "iRobot",
							degree : 1581,
							change : 100,
							attrName : "iRobot",
							attrDegree : 1581,
							attrChange : 100
						}]
			}, {
				attrName : "小狗吸尘器",
				degree : 1464,
				change : 100,
				attrValues : [{
							attrValue : "小狗吸尘器",
							degree : 1464,
							change : 100,
							attrName : "小狗吸尘器",
							attrDegree : 1464,
							attrChange : 100
						}]
			}, {
				attrName : "无线",
				degree : 1399,
				change : 100,
				attrValues : [{
							attrValue : "无线",
							degree : 1399,
							change : 100,
							attrName : "无线",
							attrDegree : 1399,
							attrChange : 100
						}]
			}, {
				attrName : "科沃斯（Ecovacs）",
				degree : 1334,
				change : 100,
				attrValues : [{
							attrValue : "科沃斯（Ecovacs）",
							degree : 1334,
							change : 100,
							attrName : "科沃斯（Ecovacs）",
							attrDegree : 1334,
							attrChange : 100
						}]
			}, {
				attrName : "智能",
				degree : 1158,
				change : 100,
				attrValues : [{
							attrValue : "智能",
							degree : 1158,
							change : 100,
							attrName : "智能",
							attrDegree : 1158,
							attrChange : 100
						}]
			}, {
				attrName : "小狗",
				degree : 1080,
				change : 100,
				attrValues : [{
							attrValue : "小狗",
							degree : 1080,
							change : 100,
							attrName : "小狗",
							attrDegree : 1080,
							attrChange : 100
						}]
			}, {
				attrName : "手持",
				degree : 1053,
				change : 100,
				attrValues : [{
							attrValue : "手持",
							degree : 1053,
							change : 100,
							attrName : "手持",
							attrDegree : 1053,
							attrChange : 100
						}]
			}, {
				attrName : "家用吸尘器",
				degree : 928,
				change : 100,
				attrValues : [{
							attrValue : "家用吸尘器",
							degree : 928,
							change : 100,
							attrName : "家用吸尘器",
							attrDegree : 928,
							attrChange : 100
						}]
			}, {
				attrName : "除螨机",
				degree : 867,
				change : 100,
				attrValues : [{
							attrValue : "除螨机",
							degree : 867,
							change : 100,
							attrName : "除螨机",
							attrDegree : 867,
							attrChange : 100
						}]
			}, {
				attrName : "机器人吸尘器",
				degree : 762,
				change : 100,
				attrValues : [{
							attrValue : "机器人吸尘器",
							degree : 762,
							change : 100,
							attrName : "机器人吸尘器",
							attrDegree : 762,
							attrChange : 100
						}]
			}, {
				attrName : "美的吸尘器",
				degree : 681,
				change : 100,
				attrValues : [{
							attrValue : "美的吸尘器",
							degree : 681,
							change : 100,
							attrName : "美的吸尘器",
							attrDegree : 681,
							attrChange : 100
						}]
			}, {
				attrName : "吸尘机",
				degree : 646,
				change : 100,
				attrValues : [{
							attrValue : "吸尘机",
							degree : 646,
							change : 100,
							attrName : "吸尘机",
							attrDegree : 646,
							attrChange : 100
						}]
			}, {
				attrName : "除螨",
				degree : 636,
				change : 100,
				attrValues : [{
							attrValue : "除螨",
							degree : 636,
							change : 100,
							attrName : "除螨",
							attrDegree : 636,
							attrChange : 100
						}]
			}, {
				attrName : "松下吸尘器",
				degree : 613,
				change : 100,
				attrValues : [{
							attrValue : "松下吸尘器",
							degree : 613,
							change : 100,
							attrName : "松下吸尘器",
							attrDegree : 613,
							attrChange : 100
						}]
			}, {
				attrName : "机器人扫地机",
				degree : 603,
				change : 100,
				attrValues : [{
							attrValue : "机器人扫地机",
							degree : 603,
							change : 100,
							attrName : "机器人扫地机",
							attrDegree : 603,
							attrChange : 100
						}]
			}, {
				attrName : "手持吸尘器",
				degree : 598,
				change : 100,
				attrValues : [{
							attrValue : "手持吸尘器",
							degree : 598,
							change : 100,
							attrName : "手持吸尘器",
							attrDegree : 598,
							attrChange : 100
						}]
			}, {
				attrName : "地宝",
				degree : 593,
				change : 100,
				attrValues : [{
							attrValue : "地宝",
							degree : 593,
							change : 100,
							attrName : "地宝",
							attrDegree : 593,
							attrChange : 100
						}]
			}, {
				attrName : "除螨吸尘器",
				degree : 560,
				change : 100,
				attrValues : [{
							attrValue : "除螨吸尘器",
							degree : 560,
							change : 100,
							attrName : "除螨吸尘器",
							attrDegree : 560,
							attrChange : 100
						}]
			}, {
				attrName : "伊莱克斯",
				degree : 526,
				change : 100,
				attrValues : [{
							attrValue : "伊莱克斯",
							degree : 526,
							change : 100,
							attrName : "伊莱克斯",
							attrDegree : 526,
							attrChange : 100
						}]
			}, {
				attrName : "拖地神器",
				degree : 450,
				change : 100,
				attrValues : [{
							attrValue : "拖地神器",
							degree : 450,
							change : 100,
							attrName : "拖地神器",
							attrDegree : 450,
							attrChange : 100
						}]
			}, {
				attrName : "拖地机器人",
				degree : 448,
				change : 100,
				attrValues : [{
							attrValue : "拖地机器人",
							degree : 448,
							change : 100,
							attrName : "拖地机器人",
							attrDegree : 448,
							attrChange : 100
						}]
			}, {
				attrName : "智能扫地机器人",
				degree : 425,
				change : 100,
				attrValues : [{
							attrValue : "智能扫地机器人",
							degree : 425,
							change : 100,
							attrName : "智能扫地机器人",
							attrDegree : 425,
							attrChange : 100
						}]
			}, {
				attrName : "扫地",
				degree : 424,
				change : 100,
				attrValues : [{
							attrValue : "扫地",
							degree : 424,
							change : 100,
							attrName : "扫地",
							attrDegree : 424,
							attrChange : 100
						}]
			}, {
				attrName : "Dyson",
				degree : 423,
				change : 100,
				attrValues : [{
							attrValue : "Dyson",
							degree : 423,
							change : 100,
							attrName : "Dyson",
							attrDegree : 423,
							attrChange : 100
						}]
			}, {
				attrName : "蒸汽拖把",
				degree : 381,
				change : 100,
				attrValues : [{
							attrValue : "蒸汽拖把",
							degree : 381,
							change : 100,
							attrName : "蒸汽拖把",
							attrDegree : 381,
							attrChange : 100
						}]
			}, {
				attrName : "魔镜",
				degree : 378,
				change : 100,
				attrValues : [{
							attrValue : "魔镜",
							degree : 378,
							change : 100,
							attrName : "魔镜",
							attrDegree : 378,
							attrChange : 100
						}]
			}, {
				attrName : "家用电器",
				degree : 378,
				change : 100,
				attrValues : [{
							attrValue : "家用电器",
							degree : 378,
							change : 100,
							attrName : "家用电器",
							attrDegree : 378,
							attrChange : 100
						}]
			}, {
				attrName : "干湿",
				degree : 377,
				change : 100,
				attrValues : [{
							attrValue : "干湿",
							degree : 377,
							change : 100,
							attrName : "干湿",
							attrDegree : 377,
							attrChange : 100
						}]
			}, {
				attrName : "戴森",
				degree : 362,
				change : 100,
				attrValues : [{
							attrValue : "戴森",
							degree : 362,
							change : 100,
							attrName : "戴森",
							attrDegree : 362,
							attrChange : 100
						}]
			}, {
				attrName : "吸尘",
				degree : 342,
				change : 100,
				attrValues : [{
							attrValue : "吸尘",
							degree : 342,
							change : 100,
							attrName : "吸尘",
							attrDegree : 342,
							attrChange : 100
						}]
			}, {
				attrName : "除螨仪",
				degree : 342,
				change : 100,
				attrValues : [{
							attrValue : "除螨仪",
							degree : 342,
							change : 100,
							attrName : "除螨仪",
							attrDegree : 342,
							attrChange : 100
						}]
			}, {
				attrName : "干湿两用吸尘器",
				degree : 337,
				change : 100,
				attrValues : [{
							attrValue : "干湿两用吸尘器",
							degree : 337,
							change : 100,
							attrName : "干湿两用吸尘器",
							attrDegree : 337,
							attrChange : 100
						}]
			}, {
				attrName : "工业吸尘器",
				degree : 328,
				change : 100,
				attrValues : [{
							attrValue : "工业吸尘器",
							degree : 328,
							change : 100,
							attrName : "工业吸尘器",
							attrDegree : 328,
							attrChange : 100
						}]
			}, {
				attrName : "自动吸尘器",
				degree : 324,
				change : 100,
				attrValues : [{
							attrValue : "自动吸尘器",
							degree : 324,
							change : 100,
							attrName : "自动吸尘器",
							attrDegree : 324,
							attrChange : 100
						}]
			}, {
				attrName : "Proscenic",
				degree : 314,
				change : 100,
				attrValues : [{
							attrValue : "Proscenic",
							degree : 314,
							change : 100,
							attrName : "Proscenic",
							attrDegree : 314,
							attrChange : 100
						}]
			}, {
				attrName : "海尔吸尘器",
				degree : 286,
				change : 100,
				attrValues : [{
							attrValue : "海尔吸尘器",
							degree : 286,
							change : 100,
							attrName : "海尔吸尘器",
							attrDegree : 286,
							attrChange : 100
						}]
			}, {
				attrName : "德尔玛（Deerma）",
				degree : 283,
				change : 100,
				attrValues : [{
							attrValue : "德尔玛（Deerma）",
							degree : 283,
							change : 100,
							attrName : "德尔玛（Deerma）",
							attrDegree : 283,
							attrChange : 100
						}]
			}, {
				attrName : "德尔玛",
				degree : 283,
				change : 100,
				attrValues : [{
							attrValue : "德尔玛",
							degree : 283,
							change : 100,
							attrName : "德尔玛",
							attrDegree : 283,
							attrChange : 100
						}]
			}, {
				attrName : "小型吸尘器",
				degree : 278,
				change : 100,
				attrValues : [{
							attrValue : "小型吸尘器",
							degree : 278,
							change : 100,
							attrName : "小型吸尘器",
							attrDegree : 278,
							attrChange : -87
						}]
			}, {
				attrName : "无线吸尘器",
				degree : 273,
				change : 100,
				attrValues : [{
							attrValue : "无线吸尘器",
							degree : 273,
							change : 100,
							attrName : "无线吸尘器",
							attrDegree : 273,
							attrChange : -88
						}]
			}, {
				attrName : "科沃斯地宝",
				degree : 268,
				change : 100,
				attrValues : [{
							attrValue : "科沃斯地宝",
							degree : 268,
							change : 100,
							attrName : "科沃斯地宝",
							attrDegree : 268,
							attrChange : 100
						}]
			}, {
				attrName : "擦玻璃机器人",
				degree : 266,
				change : 100,
				attrValues : [{
							attrValue : "擦玻璃机器人",
							degree : 266,
							change : -100,
							attrName : "擦玻璃机器人",
							attrDegree : 266,
							attrChange : -100
						}]
			}, {
				attrName : "飞利浦",
				degree : 259,
				change : -78,
				attrValues : [{
							attrValue : "飞利浦",
							degree : 259,
							change : -100,
							attrName : "飞利浦",
							attrDegree : 259,
							attrChange : -100
						}]
			}]


		}});

});
// 折叠
$(function() {
   var numflag=0;
    $("#sub-nav div").click(function(){
           if(numflag==0){
		     $("#sub-nav").css("height","10px");
			 $("#sub-nav ul").css("display","none");
			 $("#sub-nav .collapseNav i").removeClass("fa-sort-up");	 
			 $("#sub-nav .collapseNav i").addClass("fa-sort-desc");	
			 numflag=1;
		   
		   }else{
		     $("#sub-nav").css("height","44px");
			 $("#sub-nav ul").css("display","block");
			 $("#sub-nav .collapseNav i").removeClass("fa-sort-desc");	 
			 $("#sub-nav .collapseNav i").addClass("fa-sort-up");	
		     numflag=0;
		   } 
			 
	});

});	

//echarts
$(function() {
       //--- 地图 ---
	var myChart = echarts.init(document.getElementById('echartsmap'));
	var option = {
		title : {
			text: 'iphone销量',
			subtext: '纯属虚构',
			x:'center'
		},
		tooltip : {
			trigger: 'item'
		},
		legend: {
			orient: 'vertical',
			x:'left',
			data:['iphone3','iphone4','iphone5']
		},
		dataRange: {
			min: 0,
			max: 2500,
			x: 'left',
			y: 'bottom',
			text:['高','低'],           // 文本，默认为数值文本
			calculable : true
		},
		toolbox: {
			show: true,
			orient : 'vertical',
			x: 'right',
			y: 'center',
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		roamController: {
			show: true,
			x: 'right',
			mapTypeControl: {
				'china': true
			}
		},
		series : [
			{
				name: 'iphone3',
				type: 'map',
				mapType: 'china',
				roam: false,
				itemStyle:{
					normal:{label:{show:true}},
					emphasis:{label:{show:true}}
				},
				data:[
					{name: '北京',value: Math.round(Math.random()*1000)},
					{name: '天津',value: Math.round(Math.random()*1000)},
					{name: '上海',value: Math.round(Math.random()*1000)},
					{name: '重庆',value: Math.round(Math.random()*1000)},
					{name: '河北',value: Math.round(Math.random()*1000)},
					{name: '河南',value: Math.round(Math.random()*1000)},
					{name: '云南',value: Math.round(Math.random()*1000)},
					{name: '辽宁',value: Math.round(Math.random()*1000)},
					{name: '黑龙江',value: Math.round(Math.random()*1000)},
					{name: '湖南',value: Math.round(Math.random()*1000)},
					{name: '安徽',value: Math.round(Math.random()*1000)},
					{name: '山东',value: Math.round(Math.random()*1000)},
					{name: '新疆',value: Math.round(Math.random()*1000)},
					{name: '江苏',value: Math.round(Math.random()*1000)},
					{name: '浙江',value: Math.round(Math.random()*1000)},
					{name: '江西',value: Math.round(Math.random()*1000)},
					{name: '湖北',value: Math.round(Math.random()*1000)},
					{name: '广西',value: Math.round(Math.random()*1000)},
					{name: '甘肃',value: Math.round(Math.random()*1000)},
					{name: '山西',value: Math.round(Math.random()*1000)},
					{name: '内蒙古',value: Math.round(Math.random()*1000)},
					{name: '陕西',value: Math.round(Math.random()*1000)},
					{name: '吉林',value: Math.round(Math.random()*1000)},
					{name: '福建',value: Math.round(Math.random()*1000)},
					{name: '贵州',value: Math.round(Math.random()*1000)},
					{name: '广东',value: Math.round(Math.random()*1000)},
					{name: '青海',value: Math.round(Math.random()*1000)},
					{name: '西藏',value: Math.round(Math.random()*1000)},
					{name: '四川',value: Math.round(Math.random()*1000)},
					{name: '宁夏',value: Math.round(Math.random()*1000)},
					{name: '海南',value: Math.round(Math.random()*1000)},
					{name: '台湾',value: Math.round(Math.random()*1000)},
					{name: '香港',value: Math.round(Math.random()*1000)},
					{name: '澳门',value: Math.round(Math.random()*1000)}
				]
			},
			{
				name: 'iphone4',
				type: 'map',
				mapType: 'china',
				itemStyle:{
					normal:{label:{show:true}},
					emphasis:{label:{show:true}}
				},
				data:[
					{name: '北京',value: Math.round(Math.random()*1000)},
					{name: '天津',value: Math.round(Math.random()*1000)},
					{name: '上海',value: Math.round(Math.random()*1000)},
					{name: '重庆',value: Math.round(Math.random()*1000)},
					{name: '河北',value: Math.round(Math.random()*1000)},
					{name: '安徽',value: Math.round(Math.random()*1000)},
					{name: '新疆',value: Math.round(Math.random()*1000)},
					{name: '浙江',value: Math.round(Math.random()*1000)},
					{name: '江西',value: Math.round(Math.random()*1000)},
					{name: '山西',value: Math.round(Math.random()*1000)},
					{name: '内蒙古',value: Math.round(Math.random()*1000)},
					{name: '吉林',value: Math.round(Math.random()*1000)},
					{name: '福建',value: Math.round(Math.random()*1000)},
					{name: '广东',value: Math.round(Math.random()*1000)},
					{name: '西藏',value: Math.round(Math.random()*1000)},
					{name: '四川',value: Math.round(Math.random()*1000)},
					{name: '宁夏',value: Math.round(Math.random()*1000)},
					{name: '香港',value: Math.round(Math.random()*1000)},
					{name: '澳门',value: Math.round(Math.random()*1000)}
				]
			},
			{
				name: 'iphone5',
				type: 'map',
				mapType: 'china',
				itemStyle:{
					normal:{label:{show:true}},
					emphasis:{label:{show:true}}
				},
				data:[
					{name: '北京',value: Math.round(Math.random()*1000)},
					{name: '天津',value: Math.round(Math.random()*1000)},
					{name: '上海',value: Math.round(Math.random()*1000)},
					{name: '广东',value: Math.round(Math.random()*1000)},
					{name: '台湾',value: Math.round(Math.random()*1000)},
					{name: '香港',value: Math.round(Math.random()*1000)},
					{name: '澳门',value: Math.round(Math.random()*1000)}
				]
			}
		]
	};
  
	myChart.setOption(option);
});

//highcharts
$(function() {
   var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'highcharts3dcolumn',
            type: 'column',
            margin: 75,
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 15,
                depth: 50,
                viewDistance: 25
            }
        },
        title: {
            text: 'Chart rotation demo'
        },
        subtitle: {
            text: 'Test options by dragging the sliders below'
        },
        plotOptions: {
            column: {
                depth: 25
            }
        },
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    });
    

    // Activate the sliders
    $('#R0').on('change', function(){
        chart.options.chart.options3d.alpha = this.value;
        showValues();
        chart.redraw(false);
    });
    $('#R1').on('change', function(){
        chart.options.chart.options3d.beta = this.value;
        showValues();
        chart.redraw(false);
    });

    function showValues() {
        $('#R0-value').html(chart.options.chart.options3d.alpha);
        $('#R1-value').html(chart.options.chart.options3d.beta);
    }
    showValues();
});
//w2ui
$(function() {
    $('#grid').w2grid({
        name : 'grid',
        header : '列表名称',
        show : {
            toolbar : true,
            footer : true,
            header : true,
            lineNumbers: true,
            selectColumn: true,
            expandColumn: true
        },
        searches : [ {
            field : 'lname',
            caption : '名字',
            type : 'text'
        }, {
            field : 'fname',
            caption : '姓氏',
            type : 'text'
        }, {
            field : 'email',
            caption : '邮箱',
            type : 'text'
        } ],
        sortData : [ {
            field : 'recid',
            direction : 'ASC'
        } ],
        columns : [ {
            field : 'recid',
            caption : 'ID',
            size : '50px',
            sortable : true,
            attr : 'align=center'
        }, {
            field : 'lname',
            caption : '姓氏',
            size : '30%',
            sortable : true,
            resizable : true
        }, {
            field : 'fname',
            caption : '名字',
            size : '30%',
            sortable : true,
            resizable : true
        }, {
            field : 'email',
            caption : '邮件',
            size : '40%',
            sortable : true,
            resizable : true
        }, {
            field : 'sdate',
            caption : '起始时间',
            size : '120px',
            sortable : true,
            resizable : true
        } ],
        records : [ {
            recid : 1,
            fname : 'John',
            lname : 'doe',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 2,
            fname : 'Stuart',
            lname : 'Motzart',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 3,
            fname : 'Jin',
            lname : 'Franson',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 4,
            fname : 'Susan',
            lname : 'Ottie',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 5,
            fname : 'Kelly',
            lname : 'Silver',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 6,
            fname : 'Francis',
            lname : 'Gatos',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 7,
            fname : 'Mark',
            lname : 'Welldo',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 8,
            fname : 'Thomas',
            lname : 'Bahh',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 9,
            fname : 'Sergei',
            lname : 'Rachmaninov',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 20,
            fname : 'Jill',
            lname : 'Doe',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 21,
            fname : 'Frank',
            lname : 'Motzart',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 22,
            fname : 'Peter',
            lname : 'Franson',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 23,
            fname : 'Andrew',
            lname : 'Ottie',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 24,
            fname : 'Manny',
            lname : 'Silver',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 25,
            fname : 'Ben',
            lname : 'Gatos',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 26,
            fname : 'Doer',
            lname : 'Welldo',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 27,
            fname : 'Shashi',
            lname : 'bahh',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 28,
            fname : 'Av',
            lname : 'Rachmaninov',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 31,
            fname : 'John',
            lname : 'doe',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 32,
            fname : 'Stuart',
            lname : 'Motzart',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 33,
            fname : 'Jin',
            lname : 'Franson',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 34,
            fname : 'Susan',
            lname : 'Ottie',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 35,
            fname : 'Kelly',
            lname : 'Silver',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 36,
            fname : 'Francis',
            lname : 'Gatos',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 37,
            fname : 'Mark',
            lname : 'Welldo',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 38,
            fname : 'Thomas',
            lname : 'Bahh',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 39,
            fname : 'Sergei',
            lname : 'Rachmaninov',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 40,
            fname : 'Jill',
            lname : 'Doe',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 41,
            fname : 'Frank',
            lname : 'Motzart',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 42,
            fname : 'Peter',
            lname : 'Franson',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 43,
            fname : 'Andrew',
            lname : 'Ottie',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 44,
            fname : 'Manny',
            lname : 'Silver',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 45,
            fname : 'Ben',
            lname : 'Gatos',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 46,
            fname : 'Doer',
            lname : 'Welldo',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 47,
            fname : 'Shashi',
            lname : 'bahh',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 48,
            fname : 'Av',
            lname : 'Rachmaninov',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 51,
            fname : 'John',
            lname : 'doe',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 52,
            fname : 'Stuart',
            lname : 'Motzart',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 53,
            fname : 'Jin',
            lname : 'Franson',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 54,
            fname : 'Susan',
            lname : 'Ottie',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 55,
            fname : 'Kelly',
            lname : 'Silver',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 56,
            fname : 'Francis',
            lname : 'Gatos',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 57,
            fname : 'Mark',
            lname : 'Welldo',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 58,
            fname : 'Thomas',
            lname : 'Bahh',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 59,
            fname : 'Sergei',
            lname : 'Rachmaninov',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 60,
            fname : 'Jill',
            lname : 'Doe',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 61,
            fname : 'Frank',
            lname : 'Motzart',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 62,
            fname : 'Peter',
            lname : 'Franson',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 63,
            fname : 'Andrew',
            lname : 'Ottie',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 64,
            fname : 'Manny',
            lname : 'Silver',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 65,
            fname : 'Ben',
            lname : 'Gatos',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 66,
            fname : 'Doer',
            lname : 'Welldo',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 67,
            fname : 'Shashi',
            lname : 'bahh',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 68,
            fname : 'Av',
            lname : 'Rachmaninov',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        } ]
        ,
        onExpand: function (event) {
            $('#'+event.box_id).html('<div style="padding: 10px">Expanded content</div>').animate({ 'height': 100 }, 100);
        }
    });
});

// form
$(document).ready(function() {
	// Datemask dd/mm/yyyy
	$("#datemask").inputmask("dd/mm/yyyy", {
				"placeholder" : "dd/mm/yyyy"
			});
	// Datemask2 mm/dd/yyyy
	$("#datemask2").inputmask("mm/dd/yyyy", {
				"placeholder" : "mm/dd/yyyy"
			});
	// Money Euro
	$("[data-mask]").inputmask();

	// Date range picker
	$('#reservation').daterangepicker();
	// Date range picker with time picker
	$('#reservationtime').daterangepicker({
				timePicker : true,
				timePickerIncrement : 30,
				format : 'MM/DD/YYYY h:mm A'
			});
	// Date range as a button
	$('#daterange-btn').daterangepicker({
		ranges : {
			'Today' : [moment(), moment()],
			'Yesterday' : [moment().subtract('days', 1),
					moment().subtract('days', 1)],
			'Last 7 Days' : [moment().subtract('days', 6), moment()],
			'Last 30 Days' : [moment().subtract('days', 29), moment()],
			'This Month' : [moment().startOf('month'), moment().endOf('month')],
			'Last Month' : [moment().subtract('month', 1).startOf('month'),
					moment().subtract('month', 1).endOf('month')]
		},
		startDate : moment().subtract('days', 29),
		endDate : moment()
	}, function(start, end) {
		$('#reportrange span').html(start.format('MMMM DD, YYYY') + ' - '
				+ end.format('MMMM DD, YYYY'));
	});

	// iCheck for checkbox and radio inputs
	/*$('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
				checkboxClass : 'icheckbox_minimal',
				radioClass : 'iradio_minimal'
			});
	// Red color scheme for iCheck
	$('input[type="checkbox"].minimal-red, input[type="radio"].minimal-red')
			.iCheck({
						checkboxClass : 'icheckbox_minimal-red',
						radioClass : 'iradio_minimal-red'
					});
	// Flat red color scheme for iCheck
	$('input[type="checkbox"].flat-red, input[type="radio"].flat-red').iCheck({
				checkboxClass : 'icheckbox_flat-red',
				radioClass : 'iradio_flat-red'
			});

	// Colorpicker
	$(".my-colorpicker1").colorpicker();
	// color picker with addon
	$(".my-colorpicker2").colorpicker();

	// Timepicker
	$(".timepicker").timepicker({
				showInputs : false
			});*/
	$("#example1").dataTable();
});

//table

