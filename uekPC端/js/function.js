// 兼容获取className
function getClass(sele,obj){
       var obj=obj||document;
       if(obj.getElementsByClassName){
       	 return obj.getElementsByClassName(sele);
       }else{
       	 var arr=[];
       	 var all=obj.getElementsByTagName('*');
       	 for(i=0;i<all.length;i++){
       	 	if(check(all[i].className,sele)){
       	 		arr.push(all[i]);
       	 	}
       	 }
       	 return arr;
       }
    }
    
    function check(tagname,aname){
        var arr=tagname.split(" ");
        for(var i=0;i<arr.length;i++){
        	
        	if(arr[i]==aname){
        		return true;
        	}
        } 
        return false;      
    }

// 兼容地获取、设置元素中的文本内容
function contentText(obj,value){
     //重新赋值设置
     if(value!=undefined){
        if(obj.textContent!=undefined){
          obj.textContent=value;
        }
        else{
          obj.innerText=value;
        }
     }
     //获取
     else{
        if(obj.textContent!=undefined){
          return obj.textContent;
        }
        else{
          return obj.innerText;
        }
     }
}
//兼容获取对象的实际样式
function getStyle(obj,style){
  if(obj.currentStyle){
    return obj.currentStyle[style];
    // 获取对象的属性['']
    // getStyle(box,'width')
  }else{
    return window.getComputedStyle(obj,null)[style];
  }
}

//$函数
function $(selector,obj){
     var obj=obj||document;
     if(typeof selector=="string"){
         if(selector.charAt(0)=="."){
          return getClass(selector.slice(1),obj);
         }else if(selector.charAt(0)=="#"){
          return obj.getElementById(selector.slice(1))
         }else if(/^[a-z|1-6]{1,10}$/g.test(selector)){
            return obj.getElementsByTagName(selector)
         }
     }else if(typeof selector=="function"){
         addEvent(window,"load",selector);
     }
}

/*function $(seletor,obj){
  obj = obj || document;
  if(typeof seletor == "string"){
    if(seletor.charAt(0) == "."){
      //如果传进来的class选择器返回obj子对象找到的class对象
      seletor = seletor.slice(1);
      return getClass(seletor,obj);
    }else if(seletor.charAt(0) == "#"){
      //如果传进来的id选择器返回obj子对象找到的id对象
      seletor = seletor.slice(1);
      return obj.getElementById(seletor);
    }else if(/^[a-z|1-6]{1,10}$/g.test(seletor)){
      //如果传进来的标签名选择器返回obj子对象找到的标签
      //正则表达式
      //^:开头,a~z,1~6,长度1~10,g为gobal全局,test()成立返回则true
      console.log(obj.getElementsByTagName(seletor));
      return obj.getElementsByTagName(seletor);
    }
  }else if(typeof seletor == "function"){
    window.onload = function(){
      seletor();
    }
  }
}*/

// 查错步骤：
// 控制台
// 引入错误

//获取一个元素子节点
function getChild(obj){
   var sons=obj.childNodes;
   var arr=[];
   for(i=0;i<sons.length;i++){
    if(sons[i].nodeType==1){
      arr.push(sons[i]);
    }
   }
   return arr;
}

//获取第一个元素子节点
function getFirst(obj){
  return getChild(obj)[0];
}

//获取最后一个子节点
function getLast(obj){
  var arr=getChild(obj);
  return arr[arr.length-1];
  // return getChild(obj)(pop(arr[length-1]));
}

//获取下一个元素节点
function getNext(obj){
   var next=obj.nextSibling;
   if(next==null){
      return null;
     }
   while(next.nodeType!=1){
    next=next.nextSibling;
    if (next==null) {
       return null;
    }
   }
   return next;
}

//获取上一个元素节点
function getPrevious(obj){
  var prev=obj.previousSibling;
  if(prev==null){
    return null;
  }
  while(prev.nodeType!=1){
    prev=prev.previousSibling;
    if(prev==null){
       return null;
    }
  }
  return prev;
}

//将一个元素插入到另一个元素之后
function insertAfter(obj1,obj2){
    var father=obj2.parentNode;
    var next=getNext(obj2);
    if(next){
      return father.insertBefore(obj1,next);
    }else{
      return father.appendChild(obj1);
    }
}


//获取某个元素文档坐标的方式
function getPosition(obj){
  var ot = obj.offsetTop;
  var parent = obj.parentNode;
  while(parent.nodeName!="BODY"){
    var pos = getStyle(parent,"position");
    var width = parseInt(getStyle(parent,"borderTopWidth"))
    if(pos == "absolute"||pos == "relative"){
      ot+=parent.offsetTop+width;
    }
    parent = parent.parentNode;
  }
  return ot;
}

//兼容性地添加事件绑定
function addEvent(obj,event,fn){
    if(obj.addEventListener){
      obj.addEventListener(event,fn,false);
    }else{
      obj.attachEvent("on"+event,fn);
      //ie8以下
    }
}

//兼容性地注销事件绑定
function removeEvent(obj,event,fn){
    if(obj.removeEventListener){
      obj.removeEventListener(event,fn,false);
    }else{
      obj.detachEvent("on"+event,fn);
      //ie8以下
    }
}

//兼容性的滚轮事件
function mouseWheel(obj,up,down){
  //对象，向上和向下滚动的回调函数，up,down不是事件处理程序
     if(obj.addEventListener){
      obj.addEventListener("mousewheel",fn,false);
      obj.addEventListener("DOMMouseScroll",fn,false);
    }else{
      obj.attachEvent("onmousewheel",fn);
      //ie8以下
    }
    function fn(e){
        var ev=e||window.event;
        // 兼容性地获取事件处理程序
        if(ev.preventDefault()){
          ev.preventDefault()
        }else{
          ev.returnValue=false;} 
        //组织浏览器默认行为
        var data=ev.detail||ev.wheelDelta;
        // 兼容性地获取方向
        if(data==-3||data==120){
          up.call(obj,ev);
          //冒充使用
          //这里的obj是为了能使外部调用this
          //这里的ev是为了 能使外部调用ev
        }else if(data==3||data==-120){
          down.call(obj,ev);
        }
    }
}

