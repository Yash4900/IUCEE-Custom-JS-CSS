jQuery(document).ready(function( $ ){
	/*VALIDATION FOR ADDING TESTIMONIAL*/
	if(top.location.pathname==='/consortium-members/testimonials/add-testimonial/'){
    	$("#wpmtst_client_name, #wpmtst_institute_name, #wpmtst_designation").change(function(){
    		var str = $(this).val();
  			var res = str.match(/([a-zA-Z]|\s|[.])/g);
  			if(res!=null){
    			var i;
    			txt = "";
    			for(i=0;i<res.length;i++){
      				txt = txt + res[i];
    			}
  			}else{
  	  			txt = "";
  			}
    		$(this).attr("value",txt);
    		$(this).attr("placeholder","Only Alphabets Allowed!");
		});
  		$("#wpmtst_post_content").change(function(){
    		var str = $(this).val();
    		var res = str.match(/[']|["]/g);
    		if(res!=null){
      			$(this).attr("value","");
      			$(this).attr("placeholder","Use of single or double quotes is not allowed!!");
    		}    
		});
  		$("#wpmtst_email").change(function(){
    		var str = $(this).val();
  			var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    		if(regex.test(str)==false){
      			$(this).attr("value","");
    			$(this).attr("placeholder","Enter valid email address!!");
    		}
		});
		/*TESTIMONIAL PHOTO SIZE LIMIT*/
		var uploadField = document.getElementById("wpmtst_featured_image");
		uploadField.setAttribute("accept", "image/x-png,image/jpeg");

		if(document.getElementById('size-error')==null){
			var error = document.createElement('span');
			error.setAttribute('class', 'error');
			error.setAttribute('id', 'size-error');
			var photodiv=document.getElementsByClassName("field-featured_image"); 
			photodiv[0].appendChild(error);
        }
   
		uploadField.onchange = function() {
			var fileName = uploadField.value;
			var extension = fileName.split('.').pop();
			extension = extension.toLowerCase();
    		if(this.files[0].size > 2097152){
       			$( ".error" ).text("File is too big!! Select a file upto 2MB.");
       			this.value = "";
    		}else if(extension!='png' && extension!='jpg' && extension!='jpeg'){
      			$( ".error" ).text("Select a JPEG or JPG or PNG image!!");
       			this.value = "";
    		}else{
      			$( ".error" ).text("");
    		}
		};
	}
});