// JavaScript Document
$(document).ready(function(){
  $("#btn-toggle").click(function(){
    $(".menu").slideToggle("slow");
	$(".icon-menu").slideToggle("slow");
  });
	
	$("#btn-1").click(function(){
    	$("#drop-1").slideToggle("slow");
		$("#drop-2").slideUp("slow");
	 });
	
		$("#btn-2").click(function(){
    	$("#drop-2").slideToggle("slow");
		$("#drop-1").slideUp("slow");
	 });
	
	
});

  





