/**
 * Created by 刘朋昊 on 2017/9/19.
 */
//获取ID和标签名的函数
function $(selector){
    if(selector.charAt(0) == "#"){
       return document.getElementById(selector.substring(1));
    }else{
        return document.getElementsByTagName(selector);
    }
}
//获取样式的兼容性函数
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj)[attr];
    }
}
//操作节点的四个函数
//获取第一个子节点
function first(obj){
    var ele = obj.firstElementChild || obj.firstChild;
    if(ele&&ele.nodeType == 1){
        return ele;
    }else{
        return null;
    }
}
//获取最后一个节点
//function last(obj){
//    var ele = obj.lastElementChild || obj.lastChild;
//    if(ele&&ele.nodeType == 1){
//        return ele;
//    }else{
//        return null;
//    }
//}
function last(obj){
    var ele = obj.lastElementChild || obj.lastChild;
    if(ele&&ele.nodeType==1) {
        return ele
    }else {
        return null;
    }
}
//获取上一个节点
function prev(obj){
    var ele = obj.previousElementSibling || obj.previousSibling ;
    if(ele&&ele.nodeType == 1){
        return ele;
    }else{
        return null;
    }
}
//获取下一个节点
function next(obj){
    var ele = obj.nextElementSibling || obj.nextSibling ;
    if(ele&&ele.nodeType == 1){
        return ele;
    }else{
        return null;
    }
}
