blocjs = function(id){


    this.id=document.getElementById(id);
    
    var append=function(ele,content){

        var para = document.createElement(ele);
        var node = document.createTextNode(content);
        para.appendChild(node);
        id.appendChild(para);
    
    };
    this.value=function(){

        return id.innerHTML;
    }
    
    var preAppend=function(ele,content){
    
        var para = document.createElement(ele);
        var node = document.createTextNode(content);
        para.append(node);
        id.prepend(para);
    };
    
    
    
    var show=function(id){
    
    this.id.style.display="block";
    
    };
    
    var hide=function(id){
    
        this.id.style.display="none";
        
        }
    
    };