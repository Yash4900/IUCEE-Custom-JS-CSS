jQuery(document).ready(function( $ ){
	/*----------------------VALIDATIONS--------------------------*/
/*Validation For name and city*/
  $(".donate, .va-apply ,.va-email , .epics-apply, .epics-email ,.acon-email ,#register-leadership, .leadership-email, .journal-email, .iieecp-email, .eer-email, .slc-email, .rtec-register-button, .email-us-consortium, #iieecp-apply, .eer-apply, .slc-apply").click(function(){
      $("#nf-field-206, #nf-field-191, #nf-field-195, #nf-field-165, #nf-field-169, #nf-field-158, #nf-field-157, #nf-field-161, #nf-field-133, #nf-field-129, #nf-field-115, #nf-field-120, #nf-field-122, #nf-field-121, #nf-field-124, #nf-field-128, #nf-field-108, #nf-field-112, #nf-field-102, #nf-field-98, #nf-field-11, #nf-field-12, #rtec_first, #rtec_last, #nf-field-44, #nf-field-42, #nf-field-38, #nf-field-36, #nf-field-39, #nf-field-49, #nf-field-45, #nf-field-72, #nf-field-73, #nf-field-74, #nf-field-78, #nf-field-85, #nf-field-90, #nf-field-91, #nf-field-92, #nf-field-61, #nf-field-62, #nf-field-63, #nf-field-67").change(function(){
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
      /*VALIDATION FOR PHONE NUMBER*/  
      $("#nf-field-198, #nf-field-116, #nf-field-79, #nf-field-68, #nf-field-86").change(function(){
        var str = $(this).val();
        var reg = /(^[+])([\d]{2})([-]{1})([\d]{10})/g;
        var res = reg.test(str);
        if(res==false){
            txt = "";
            $(this).attr("value",txt);
            $(this).attr("placeholder","Enter valid phone number");
        }
    });    
      /*VALIDATION FOR DATE*/  
    $('#nf-field-164, #nf-field-183, #nf-field-184').change(function(){
        var GivenDate = $(this).val();
        var selectedDate= new Date(GivenDate); 
      var CurrentDate = new Date();
        if(selectedDate<CurrentDate){
            $(this).siblings().attr("value","");
            $(this).attr("value","");
          $(this).siblings().attr("placeholder", "The Selected Date has already passed!!");
        }  
            var Date1 = $('#nf-field-164').val();
            var Date2 = $('#nf-field-183').val();
            var Date3 = $('#nf-field-184').val();
      var dateField=$(this).attr('id');
        if(dateField==="nf-field-164" && Date1){
            if(Date1 == Date2||Date1 == Date3){
                    $(this).siblings().attr("value","");
                    $(this).attr("value","");
                    $(this).siblings().attr("placeholder", "Date already selected!!");
            }
        }
            else if(dateField==="nf-field-183" && Date2){
            if(Date1 == Date2||Date2 == Date3){
                    $(this).siblings().attr("value","");
                    $(this).attr("value","");
                    $(this).siblings().attr("placeholder", "Date already selected!!");
            }
        }
        else if(dateField==="nf-field-184" && Date3){
          if(Date1 == Date3||Date2 == Date3){
                    $(this).siblings().attr("value","");
                    $(this).attr("value","");
                    $(this).siblings().attr("placeholder", "Date already selected!!");
            }
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