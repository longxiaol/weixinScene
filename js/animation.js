//第一页小飞机更换动画
$(".page1 .flight").on("webkitAnimationEnd", function() {
	$(this).removeClass("flyIn").addClass("scale");
	$(this).off("webkitAnimationEnd");
})

//第四页点亮路灯时候
$(".page4 .on").on("touchstart", function() {
	//移除点亮提示
	$(".page4 .guide").remove();

	//让亮的灯淡入
	$(this).addClass("fadeIn");

	//位bg1和title添加淡出
	$(".page4 .bg1").addClass("fadeOut");
	$(".page4 .title").addClass("fadeOut");

	//为bg2和know添加淡入
	$(".page4 .bg2").addClass("fadeIn");
	$(".page4 .know").addClass("fadeIn");

})

//音乐播放暂停方法
var audio = document.getElementById("audio");
$(".music").on("touchstart", function() {
	if(audio.paused) {
		audio.play();
		this.src = "images/musicBtn.png";
	} else {
		audio.pause();
		this.src = "images/musicBtnOff.png";

	}
})