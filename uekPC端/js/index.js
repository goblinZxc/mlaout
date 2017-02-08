var as1=$(".as1");
console.log(as1);
// var a1=$(".employment .title2 span");

// $(".employment .title2 span").mouseover(function(){
// 			//自带each()循环
// 			// $(".btn").css({
// 			// 	background:"#fff",
// 			// 	color:"#000"
// 			// })
// 			// .filter(this)
// 			// //call过，所以能用this
// 			// .css({
// 			// 	background:"yellow",
// 			// 	color:"#fff"
// 			// })
// 		$(this).css({
// 				color:"#01B5FF",
// 				borderTopColor:"#01B5FF"
// 			}).siblings().css({
// 				color:"#666",
// 				borderTopColor:"#fff"
// 			})
//         var index=$(this).index();
//         console.log(index);
//         $(".employmentshowbox").css("display","none").eq(index).css("display","block");
//         // console.log($(".employmentshowbox"));

// 		});
var aaa=$(".employment")[0];
var t2=$(".title2",aaa)[0];

   var list=$("span",t2);
   var con=$(".employmentshowbox");
console.log(con);
     for(var i=0;i<list.length;i++){
       list[i].index=i;
       list[i].onmouseover=function(){
       for (var j = 0; j < con.length; j++) {
         con[j].style.display="none";
       }
       con[this.index].style.display="block";
   }
   //  for(var i=0;i<con.length;i++){
   //  con[i].index=i;
   //   con[i].onmouseover=function(){
   //      con[this.index].style.display="block";
   //     }
   //    con[i].onmouseout=function(){
   //      con[this.index].style.display="none";
   //     }
   }
