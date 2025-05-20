$(function(){
	$('.p_video .cover').click(function(){
  		let video = $(this).next().find('.video')[0];
  		$(video).attr('playsinline','true');
  		$(video).attr('webkit-playsinline','true');
  		if(video.paused == true){
  			video.play();
  			$(this).next().addClass('show');
  		}else{
  			video.pause();
  			$(this).next().removeClass('show');
  		}
  	}); 
	$('.closeVideo').click(function(){
  		let video = $(this).prev('.video')[0];
  		if(video.paused == true){
  			video.play();
  			$(this).parent().addClass('show');
  		}else{
  			video.pause();
  			$(this).parent().removeClass('show');
  		}
  	}); 
  
  
  	$('.videoIBox').each(function(){
  		let videoImgHref = $(this).find('.videoimg img').attr('src');
  		$(this).find('.coverImage img').attr('src',videoImgHref);
  	}); 
  
});