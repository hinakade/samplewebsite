
$(function(){
	$('.content:not(.content:first-of-type)').css('display','none');//一番上の要素以外を非表示
	$('.more').nextAll('.more').css('display','none');//ボタンを非表示
	$('.more').on('click', function() {
		$(this).css('display','none');//押したボタンを非表示
		$(this).next('.content').slideDown('fast');
		$(this).nextAll('.more:first').css('display','block'); //次のボタンを表示
	});
});
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-47542229-1', 'auto');
  ga('send', 'pageview');