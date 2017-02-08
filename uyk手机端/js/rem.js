var designwidth=750;
resize();
function resize(){
	var clientWidth=document.documentElement.clientWidth;
	var bili=clientWidth/designwidth*100;
	document.documentElement.style.fontSize=bili+"px";
	// 代表html标签
	var aa=document.documentElement.style.fontSize
	console.log(aa);
}
window.addEventListener("resize",function(){
	resize();
	// 检测屏幕尺寸一改变就改变
})