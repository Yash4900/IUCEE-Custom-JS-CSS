jQuery(document).ready(function( $ ){
    $(".simple-news-item").click(function(){
  	var news_id = $(this).attr("id");
     news_id = news_id.substring(8,11); 
      
      var ph = '<div class="pum-content popmake-content">';
      
      var str = '#post-'+news_id+' .news-clearfix .news-content .post-content-text h3 a';
      if($(str)!=null){
        var title = $(str).text();
        ph = ph.concat('<h3>');
        ph = ph.concat(title);
        ph = ph.concat('</h3><br>');
      }
         
       var str = '#post-'+news_id+' .news-clearfix .news-thumb .grid-news-thumb a img';
      if($(str)!=null){
        var x = $(str).attr("src");
        ph = ph.concat('<p><img class="alignnone  wp-image-572" src="');
        ph = ph.concat(x);
        ph = ph.concat('" alt="" width="255" height="119" sizes="(max-width: 255px) 100vw, 255px"></p>');
      }
      var str = '#post-'+news_id+' .news-clearfix .news-content .post-content-text .news-content-excerpt p';
      if($(str)!=null){
        var y = $(str).text();
        ph = ph.concat('<p>');
        ph = ph.concat(y);
        ph = ph.concat('</p>');
      }
      ph = ph.concat('</div><button type="button" class="pum-close popmake-close" aria-label="Close">CLOSE</button>')
      
      $('#popmake-866').html(ph);
      
});
});

