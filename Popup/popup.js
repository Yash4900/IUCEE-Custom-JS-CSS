jQuery(document).ready(function( $ ){
	/*CALL US BUTTON JS*/
    $('.call-consortium').click(function(){
        $('#popmake-1305 .pum-content').html('<br><p>Numbers:</p><p>Coordinator 1: 1111111111</p><p>Coordinator 2: 2222222222</p>');
    });
    $('.call-iieecp').click(function(){
        $('#popmake-1305 .pum-content').html('<br><p>Numbers:</p><p>Coordinator 1: 3333333333</p><p>Coordinator 2: 4444444444</p>');
    });
    $('.call-eer').click(function(){
        $('#popmake-1305 .pum-content').html('<br><p>Numbers:</p><p>Coordinator 1: 5555555555</p><p>Coordinator 2: 6666666666</p>');
    });
    $('.call-slc').click(function(){
        $('#popmake-1305 .pum-content').html('<br><p>Numbers:</p><p>Coordinator 1: 7777777777</p><p>Coordinator 2: 8888888888</p>');
    });
    $('.call-journal').click(function(){
        $('#popmake-1305 .pum-content').html('<br><p>Numbers:</p><p>Coordinator 1: 9999999999</p><p>Coordinator 2: 0000000000</p>');
    }); 
    $('.call-va').click(function(){
        $('#popmake-1305 .pum-content').html('<br><br><p>Tel: +91 40 23353096, 3106</p><p>Fax: +91 40 23353093        Mob(O):9866577393</p>');
    }); 
    $('.call-leadership').click(function(){
        $('#popmake-1305 .pum-content').html('<br><p>Numbers:</p><p>Coordinator 1: 3333333333</p><p>Coordinator 2: 4444444444</p>');
    });
    $('.call-acon').click(function(){
        $('#popmake-1305 .pum-content').html('<br><p>Numbers:</p><p>Coordinator 1: 5555555555</p><p>Coordinator 2: 6666666666</p>');
    });
    $('.call-epics').click(function(){
        $('#popmake-1305 .pum-content').html('<br><p>Numbers:</p><p>Coordinator 1: 7777777777</p><p>Coordinator 2: 8888888888</p>');
    });
});

// jQuery(document).ready(function( $ ){
//     $('.more-about').click(function(){
//         var classImg = $(this);
//         var i=$(".more-about").index(classImg);
//         var fig= document.getElementsByTagName('figure');
//         var figchild=fig[i].children;
//         var img_src=figchild[0].src;
//         var alt=figchild[0].alt;
//         var heading=figchild[2].innerHTML;//here i have changed figchild[1] to figchild[2] due to lazyLoading
//         var desc= document.getElementsByClassName('image-desc');
//         if($("#pum-364").attr("aria-hidden")=="true"){ 
//             var ph = '<div class="pum-content popmake-content">';
//             if(img_src!=null){
//                 ph = ph.concat('<img class="alignnone  wp-image-572" src="');
//                 ph = ph.concat(img_src);
//                 ph = ph.concat('" alt="" width="150" height="114" sizes="(max-width: 150px) 100vw, 150px" ><br><br>');
//             }
//             if(heading!=null){
//                 ph = ph.concat('<p>');
//                 ph = ph.concat(heading);
//                 ph = ph.concat('</p>');
//             }
//             if(alt!=null){
//                 ph = ph.concat('<p>');
//                 //ph = ph.concat(alt);
//                 ph = ph.concat(desc[i].innerHTML);
//                 ph = ph.concat('</p>');
//             }
//             ph = ph.concat('</div><button type="button" class="pum-close popmake-close" aria-label="Close">X</button>')
//             $('#popmake-364').html(ph);
//         }
//     });
// });
