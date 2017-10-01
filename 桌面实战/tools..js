function getId(id){
    return document.getElementById(id);
}
/**
 * 功能：给定元素查找他的第一个元素子节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function  getNextNode(ele){
    return ele.firstChild || ele.firstElementChild;
    
}




 /**
 * 功能：给定元素查找他的最后一个元素子节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function  getLastNode(ele){
    return ele.lastChild || ele.lastElementChild;
    
}
  
/**
 * 功能：给定元素查找他的下一个元素兄弟节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function nextNode(ele){
    return ele.nextSibling || ele.nextElementSibling;
    
}


/**
 * 功能：给定元素查找他的上一个兄弟元素节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function  previousNode(ele){
    return ele.previousSibling || ele.previousElementSibling;
    
}


/**
 * 功能：给定元素查找他的所有兄弟元素，并返回数组
 * @param ele
 * @returns {Array}
 */
function   otherArr(ele){
    var newArr = [];
    var arr = ele.parentNode.children;
    for(var i=0;i<arr.length;i++){
        if(arr[i]!==ele){
        newArr[i].push(arr[i]);
    }
   }
   return newArr;
}