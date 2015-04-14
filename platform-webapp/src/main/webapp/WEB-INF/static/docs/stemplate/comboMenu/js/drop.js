
$("#tags").masterblaster({
	animate:true
});
$(document).ready(function(){
    var $category = $('.drop-body .selector>div:gt(4)');
	$category.hide();
	$(".mb-meta").hide();
	$("#showadd").hide();
	var $toggleBtn = $('#showwrap a');
	$toggleBtn.toggle(function(){
		$category.show();
		$("#showadd").show();
		$(this).find('span').removeClass('hide-wrap').addClass('show-wrap').html('收起更多选项<i></i>');	
	},function(){
		$category.hide();
		$("#showadd").hide();
		$(this).find('span').removeClass('show-wrap').addClass('hide-wrap').html('更多选项<i></i>');
	});
	$("#showadd").click(function(){
		
		$(".mb-container").show();
		$(".mb-meta").show();
		});
	$(".mb-add-button ").click(function(){
		
		$(".mb-meta").hide();
		});
});
 $.fn.toggle = function( fn ) {
        // Save reference to arguments for access in closure
        var args = arguments,
                guid = fn.guid || jQuery.guid++,
                i = 0,
                toggler = function( event ) {
                    // Figure out which function to execute
                    var lastToggle = ( jQuery._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
                    jQuery._data( this, "lastToggle" + fn.guid, lastToggle + 1 );

                    // Make sure that clicks stop
                    event.preventDefault();

                    // and execute the function
                    return args[ lastToggle ].apply( this, arguments ) || false;
                };

        // link all the functions, so any of them can unbind this click handler
        toggler.guid = guid;
        while ( i < args.length ) {
            args[ i++ ].guid = guid;
        }

        return this.click( toggler );
    }
//toggle在jQuery 1.11.1 在运行
$.fn.toggle = function( fn ) {
        // Save reference to arguments for access in closure
        var args = arguments,
                guid = fn.guid || jQuery.guid++,
                i = 0,
                toggler = function( event ) {
                    // Figure out which function to execute
                    var lastToggle = ( jQuery._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
                    jQuery._data( this, "lastToggle" + fn.guid, lastToggle + 1 );

                    // Make sure that clicks stop
                    event.preventDefault();

                    // and execute the function
                    return args[ lastToggle ].apply( this, arguments ) || false;
                };

        // link all the functions, so any of them can unbind this click handler
        toggler.guid = guid;
        while ( i < args.length ) {
            args[ i++ ].guid = guid;
        }

        return this.click( toggler );
    }
	
	
	
	//dataTable
	$(document).ready(function() {
	$('#example1').dataTable( {
		"bAutoWidth": true,
		"aLengthMenu": [[10, 25, 50,100, -1], [10, 25, 50,100, "All"]],
		"bProcessing": true,
		"sAjaxSource": '../index/data/arrays.txt',
		"oLanguage": {
			"sLengthMenu": "每页显示 _MENU_ 条记录",
			"sZeroRecords": "抱歉， 没有找到",
			"sInfo": "从 _START_ 到 _END_ /共 _TOTAL_ 条数据",
			"sInfoEmpty": "没有数据",
			"sInfoFiltered": "(从 _MAX_ 条数据中检索)",
			"oPaginate": {
			"sFirst": "首页",
			"sPrevious": "前一页",
			"sNext": "后一页",
			"sLast": "尾页"
		},
		"sZeroRecords": "没有检索到数据",
		 "columnDefs": [{
            "visible": false,
            "targets": 2
        }],
		"pagingType":   "full_numbers",
        "order": [[1, 'asc']],
        "drawCallback": function(settings) {
            var api = this.api();
            var rows = api.rows({
                page: 'current'
            }).nodes();
            var last = null;
 
            api.column(2, {
                page: 'current'
            }).data().each(function(group, i) {
                if (last !== group) {
                    $(rows).eq(i).before('<tr class="group"><td colspan="5">' + group + '</td></tr>');
 
                    last = group;
                }
            });		
		}
		}
	} );
	
	  $('#example tbody').on( 'click', 'tr', function () {
        $(this).toggleClass('selected');
    } );
	
	
	
	$('#example1 tbody').on('click', 'tr.group',
    function() {
        var currentOrder = table.order()[0];
        if (currentOrder[0] === 1 && currentOrder[1] === 'asc') {
            table.order([1, 'desc']).draw();
        } else {
            table.order([1, 'asc']).draw();
        }
    });
} );


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
	
