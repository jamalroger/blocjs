

// this file is framework created by jamal roger in 26/ramadan/1439

class blocjs {
    constructor(elem){

       this.id=document.getElementById(elem);
    }


append(ele,content){

    var para = document.createElement(ele);
    var node = document.createTextNode(content);
    para.appendChild(node);
    this.id.appendChild(para);

}

delNode(name){

    var child = document.getElementById(name);
    this.id.removeChild(child);
}
value(){

    return this.id.innerHTML;
}

prepend(ele,content){

    var para = document.createElement(ele);
    var node = document.createTextNode(content);
    para.appendChild(node);
    this.id.insertBefore(para,this.id.firstChild);
}



show(){

this.id.style.display="block";

}

hide(){

    this.id.style.display="none";
    
    }

setValue(value){
     this.id.innerHTML=value;
     }

addClass(name){
       var p= this.id.getAttribute("class")==null?"":this.id.getAttribute("class");
       this.id.setAttribute("class",p + " " + name);

   }  
delClass(name){

       var p= this.id.getAttribute("class").split(" ");
       p.splice(p.indexOf(name),1);
       this.id.setAttribute("class",p);
   }
toUpper(){

    this.id.innerHTML=this.id.innerHTML.toLocaleUpperCase;

}
toLower(){

    this.id.innerHTML=this.id.innerHTML.toLowerCase;

}



find(elem){





   }
event(event,func){

this.id.addEventListener(event,func);

}
setName(name){
    this.id.nodeName=name;
}
getName(name){
    return this.id.nodeName;
}
css(value){

    this.id.setAttribute("style",value);
}
rep(child,reps){
 
   var k=document.getElementById(child);
   var w=document.getElementById(reps);
    this.id.replaceChild(w,k);

}
getChildValue(p){

   return this.id.childNodes[p].nodeValue;
}
setChildValue(p,v){

this.id.childNodes[p].innerHTML=v;

 }

swap(a,s){

  var k=document.getElementById(a);
  var w=document.getElementById(s);

  var p=document.createElement("p");

  p.innerHTML=k.innerHTML;
  k.innerHTML=w.innerHTML;
  w.innerHTML=p.innerHTML;
}
getAttr(name){

this.id.getAttribute(name);
}
setAttr(name,value){

this.id.setAttribute(name,value);

}
moveBottom(name){

    var p= document.createElement("p");
    var child = document.getElementById(name);
    p.innerHTML=child.innerHTML;
    this.id.removeChild(child);
    this.id.appendChild(p);
}
moveTop(name){

    var p= document.createElement("p");
    var child = document.getElementById(name);
    p.innerHTML=child.innerHTML;
    this.id.removeChild(child);
    this.id.insertBefore(p,this.id.firstChild);
}


}
