jQuery(document).ready(function( $ ){
  $(".news-prev").css("display","none");
  var news=document.getElementsByClassName('simple-news-item');
  if(news.length>3){
    var i;
    for(i=3;i<news.length;i++){
      news[i].style.display="none";
    }
    i=2;   
    $(".news-next").click(function(){
    $(".news-prev").css("display","");
    $(news[i-2]).hide(1000);
    if(i+1<news.length){
      $(news[i+1]).show(1000);
      i = i+1;
      if(i==news.length-1){
        $(".news-next").css("display","none");
      }
    }
});
  $(".news-prev").click(function(){
    $(".news-next").css("display","");
  	$(news[i-3]).show(1000);
    $(news[i]).hide(1000);
    i=i-1;
    if(i==2){
      $(".news-prev").css("display","none");
    }
  });
  } 
else{
  $(".news-prev").css("display","none");
  $(".news-next").css("display","none");
}
});