// JavaScript Document


//datetimepicker
 $('.form_datetime').datetimepicker({
        language:  'zh-CN',
		
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		forceParse: 0,
        showMeridian: 1
    });
	$('.form_date').datetimepicker({
        language:  'zh-CN',
		format: 'yyyy-mm-dd',
		ShowUpDown:true,
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 3,
		minView: 2,
		forceParse: 0
    });
	$('.form_time').datetimepicker({
        language:  'zh-CN',
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 1,
		minView: 0,
		maxView: 1,
		forceParse: 0
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
});