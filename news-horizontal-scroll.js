jQuery(document).ready(function( $ ){
	    /*NEWS-PAGINATION*/
    if (top.location.pathname === '/' || top.location.pathname === '/iucee-news/'){  
      $(".news-prev").css("display","none");
      var news=document.getElementsByClassName('simple-news-item');
  
    /*FOR NEWS WITHOUT IMAGES*/
    for(i=0;i<news.length;i++){
        var ch = news[i].children;
      if(ch.length==1){
            $(ch[0]).css("flex", "1 100%");
            $(ch[0]).css("max-width", "100%");
        }
    }
  
    var pc = Math.ceil(news.length/3);
    var str = " of ".concat(pc.toString());
    var page = 1;
    var show = "";
    if(news.length>3){
      for(i=3;i<news.length;i++){
          $(news[i]).hide(1000);
        }
        i=3;
        show = show.concat("Page ");
        show = show.concat(page.toString());
        show = show.concat(str)
        $(".news-page").text(show);
    }
    else{
        $(".news-next").css("display","none");
        $(".news-page").text("Page 1 of 1");
    }
  $(".news-next").click(function(){
      $(".news-prev").css("display","block");
      for(j=i-1;j>=i-3;j--){
          if(j>=0  && j<news.length){
            $(news[j]).hide(1000);
          }
      }
      for(j=i;j<i+3;j++){
          if(j==news.length-1){
            $(".news-next").css("display","none");
          }
          if(j<news.length){
            $(news[j]).show(1000);
          }
      }
      i = i+3;
      show = "";
      page = page + 1;
      show = show.concat("Page ");
      show = show.concat(page.toString());
      show = show.concat(str)
      $(".news-page").text(show);
  });

    $(".news-prev").click(function(){
      $(".news-next").css("display","block");
      for(j=i-1;j>=i-3;j--){
          if(j>=0 && j<news.length){
            $(news[j]).hide(1000);
          }
      }
      i = i-3;
      for(j=i-1;j>=i-3;j--){
          if(j==0){
            $(".news-prev").css("display","none");
          }
          if(j>=0  && j<news.length){
            $(news[j]).show(1000);
          }
      }
      show = "";
      page = page - 1;
      show = show.concat("Page ");
      show = show.concat(page.toString());
      show = show.concat(str)
      $(".news-page").text(show);
    });
  }
});