/**
 * Created by ����� on 2017/9/19.
 */
//��ȡID�ͱ�ǩ���ĺ���
function $(selector){
    if(selector.charAt(0) == "#"){
       return document.getElementById(selector.substring(1));
    }else{
        return document.getElementsByTagName(selector);
    }
}
//��ȡ��ʽ�ļ����Ժ���
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj)[attr];
    }
}
//�����ڵ���ĸ�����
//��ȡ��һ���ӽڵ�
function first(obj){
    var ele = obj.firstElementChild || obj.firstChild;
    if(ele&&ele.nodeType == 1){
        return ele;
    }else{
        return null;
    }
}
//��ȡ���һ���ڵ�
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
//��ȡ��һ���ڵ�
function prev(obj){
    var ele = obj.previousElementSibling || obj.previousSibling ;
    if(ele&&ele.nodeType == 1){
        return ele;
    }else{
        return null;
    }
}
//��ȡ��һ���ڵ�
function next(obj){
    var ele = obj.nextElementSibling || obj.nextSibling ;
    if(ele&&ele.nodeType == 1){
        return ele;
    }else{
        return null;
    }
}
