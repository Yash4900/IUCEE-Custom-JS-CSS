jQuery(document).ready(function( $ ){
	/*----------------------VALIDATIONS--------------------------*/
/*Validation For name and city*/
  $(".va-apply ,.va-email ,.epics-email ,.acon-email ,#register-leadership, .leadership-email, .journal-email, .iieecp-email, .eer-email, .slc-email, .rtec-register-button, .email-us-consortium, #iieecp-apply, .eer-apply, .slc-apply").click(function(){
  $("#nf-field-165, #nf-field-169, #nf-field-158, #nf-field-157, #nf-field-161, #nf-field-133, #nf-field-129, #nf-field-115, #nf-field-120, #nf-field-122, #nf-field-121, #nf-field-124, #nf-field-128, #nf-field-108, #nf-field-112, #nf-field-102, #nf-field-98, #nf-field-11, #nf-field-12, #rtec_first, #rtec_last, #nf-field-44, #nf-field-42, #nf-field-38, #nf-field-36, #nf-field-39, #nf-field-49, #nf-field-45, #nf-field-72, #nf-field-73, #nf-field-74, #nf-field-78, #nf-field-85, #nf-field-90, #nf-field-91, #nf-field-92, #nf-field-61, #nf-field-62, #nf-field-63, #nf-field-67").change(function(){
    
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
  /*Validation For phone number*/  
  $("#nf-field-116, #nf-field-79, #nf-field-68, #nf-field-86").change(function(){
  var str = $(this).val();
  if(str.length<10){
    $(this).val("");
    $(this).attr("placeholder","Minimum length should be 10 digits");
  }
  else{
  var res = str.match(/([0-9]|[-]|[+]|[(]|[)])/g);
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
    $(this).attr("placeholder","Enter valid number-You can use digits,+,-,(,)");
  }
});    
  /*Validation for Date*/  
$('#nf-field-164, #nf-field-183, #nf-field-184').change(function(){
    var GivenDate = $(this).val();
    var month = parseInt(GivenDate.substring(0, 2));
    var day = parseInt(GivenDate.substring(3, 5));
	var CurrentDate = new Date();
	var d = CurrentDate.getDate();
    var m = CurrentDate.getMonth();

	if(month>=m && day>=d){
	}else{
  		$(this).siblings().attr("value","");
  		$(this).siblings().attr("placeholder", "The Selected Date has already passed!!");
	}
});
$('.nf-element').change(function(){
  var str = $(this).val();
  var res = str.match(/(["]|['])/g);
  if(res!=null){
      $(this).val("");
	  $(this).attr("placeholder","Use of single or double quotes in not allowed!!");
  }  
});
});
});