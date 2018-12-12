//封装一下jQuery的ajax

window.jQuery = function(nodeOrSelector){
    let nodes={};
    nodes.addClass =function(){};
    nodes.html=function(){};
    return nodes;
}

window.jQuery.ajax=function(url,method,body,successFn,failFn){
    let request=new XMLHttpRequest();
    request.open(method,url);
    request.onreadystatechange=function(){
        if(request.onreadystatechange===4){
            if(request.status>=200&&request.status<300){
                successFn.call(undefined,request.responseText);
            }else if(request.status>=400){
                failFn.call(undefined,request);
            }
        }
    }
    request.send(body);
}

window.$=window.jQuery;

//怎么用示例
myButton.addEventListener('click', function(e) {
        window.jQuery.ajax(
            '/xxx',
            'post',
            'a=1&b=2',
            (responseText) = > {console.log(1),}
            (request) = > {console.log(2)}
)
})