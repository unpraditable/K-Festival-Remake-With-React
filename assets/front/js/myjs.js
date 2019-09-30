	jQuery(document).ready(function() {      
		$('.overlay').hide(); 
        $('#message').fadeOut(3500); 
	    $(".my-colorpicker1").colorpicker();
	    $(".my-colorpicker2").colorpicker();

	    $("#example1").DataTable();
	    
	    $('#example2').DataTable({
	      "paging": true,
	      "lengthChange": false,
	      "searching": false,
	      "ordering": true,
	      "info": true,
	      "autoWidth": false
	    });

	    $('#example3').DataTable({
	        "dom": '<"toolbar-action">lfrtip',
	        initComplete: function(){
	            $("div.toolbar-action").html('<div class="dropdown"><button class="form-control input-sm dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Action &nbsp;<span class="caret"></span></button><ul class="dropdown-menu" aria-labelledby="dropdownMenu1"><li><a href="#" class="action-checkbox" role="publish">Publish</a></li><li><a href="#" class="action-checkbox" role="unpublish">Unpublish</a></li><li><a href="#" class="action-checkbox" role="delete">Delete</a></li><li role="separator" class="divider"></li><li><a href="javascript:void(0);">Cancel</a></li></ul></div>');           
	        } 
	    });

	    $('#example4').DataTable({
	    	"scrollY":        "40vh",
	        "scrollCollapse": true,
	        "paging":         false,
	        "dom": '<"toolbar-action">lfrtip',
	        initComplete: function(){
	            $("div.toolbar-action").html('<div class="dropdown"><button class="form-control input-sm dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Action &nbsp;<span class="caret"></span></button><ul class="dropdown-menu" aria-labelledby="dropdownMenu1"><li><a href="#" class="action-checkbox" role="publish">Publish</a></li><li><a href="#" class="action-checkbox" role="unpublish">Unpublish</a></li><li><a href="#" class="action-checkbox" role="delete">Delete</a></li><li role="separator" class="divider"></li><li><a href="javascript:void(0);">Cancel</a></li></ul></div>');           
	        } 
	    });

        $(".action-checkbox").click(function(){
        	$('.overlay').show();
        	var role = $(this).attr("role");
	        var modal  = $("#successModal");
	        var url = $(".chkall").attr('chkurl');
        	var val = [];
        	var nil = 0;
        	$('.chkmenu:checked').each(function(i){
        		val[i] = $(this).val();
        		nil++;
        	});

        	if(nil == 0){
        		$('#successModal').modal('show');
        		modal.find('.modal-body').text('No Data Selected');
        	}else{
        		$.post(url,
        			{role:role,id:val},
        			function(data){
        				$('#successModal').modal({backdrop: 'static', keyboard: false})
        				if(data == 'Success'){
        					if(role == 'delete'){
        						modal.find('.modal-body').text('Data Deleted..');
        					}else{
        						modal.find('.modal-body').text('Data Updated..');
        					}
        				}else{
        					modal.find('.modal-body').text('Failed');
        				}
        			}   
        		);
	        }

			modal.on('hidden.bs.modal', function (e) {
			    $('.overlay').hide();
			    $('.chkall').iCheck("uncheck");
			    $('.chkmenu').iCheck("uncheck");
			})
        });

		$(".chkall").click(function () {
		    $('input:checkbox').not(this).prop('checked', this.checked);
		});
		
		// ============  iCheck for checkbox and radio inputs  ===============
	    var triggeredByChild = false;
        var x_timer;    

        $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
          checkboxClass: 'icheckbox_minimal-blue',
          radioClass: 'iradio_minimal-blue'
        });

        $('#chkall').on('ifChecked', function (event) {
            $('.chkmenu').iCheck('check');
            triggeredByChild = false;
        });

        $('#chkall').on('ifUnchecked', function (event) {
            if (!triggeredByChild) {
                $('.chkmenu').iCheck('uncheck');
            }
            triggeredByChild = false;
        });

        $('.chkmenu').on('ifUnchecked', function (event) {
            triggeredByChild = true;
            $('#chkall').iCheck('uncheck');
        });

        $('.chkmenu').on('ifChecked', function (event) {
            if ($('.chkmenu').filter(':checked').length == $('.chkmenu').length) {
                $('#chkall').iCheck('check');
            }
        });

		$('.iframe-btn').fancybox({
            'autoSize'		: false,
            'autoDimensions': false,
            'width'			: 880,
			'height'		: 1000,
			'type'			: 'iframe',
			'autoScale'  	: false,
			'filemanager_title'	: 'File Manager',
		});
		
		tinymce.init({
			selector		: 'textarea.tinymce',
			height			: "160",
			theme			: 'modern',
			relative_urls	: true,
			external_filemanager_path 	: 'assets/plugins/filemanager/', 
			external_plugins			: { 'filemanager' : '../../../assets/plugins/tinymce/plugins/responsivefilemanager/plugin.min.js' }, 
			filemanager_title			: 'File Manager', 
			filemanager_access_key		:"kamargelap11" ,
			plugins: [
				'advlist autolink lists link image charmap print preview hr anchor pagebreak',
				'searchreplace wordcount visualblocks visualchars code fullscreen',
				'insertdatetime media nonbreaking save table contextmenu directionality',
				'emoticons template paste textcolor colorpicker textpattern responsivefilemanager'
			],
			toolbar1		: 'insertfile undo redo | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link responsivefilemanager | forecolor backcolor',
			image_advtab	: true,
			templates: [
				{title: 'Test template 1', content: 'Test 1'},
				{title: 'Test template 2', content: 'Test 2'}
			]
		});

        // $(".textchanged").keyup(function (e){
        //     clearTimeout(x_timer);
        //     var text = $(this).val();
        //     var url  = $(this).attr('checkUrl');
        //     x_timer = setTimeout(function(){ checkText(text,url); }, 1000);    	
        // }); 

        // function checkText(text,url){
        //     $('.loadchanged').show();
        //     $.post(url, {'text':text}, function(data) {
        //     	if(data=='Success'){
	       //        	$('.loadchanged').hide();
	       //        	$("button[type=submit]").removeAttr('disabled');
	       //        	$(".textchanged").closest('.form-group').removeClass('has-error');
        //     	}else{
	       //        	$('.loadchanged').hide();
	       //        	$("button[type=submit]").attr('disabled',true);
	       //        	$(".textchanged").closest('.form-group').addClass('has-error');
	       //      }
        //     });
        // }

    });
