

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
rep(child,rep){
 
    var k=document.getElementById(child);
    var w=document.getElementById(rep);
    this.id.replaceChild(w,k);

}

swap(p,s){

  var k=document.getElementById(p);
  var w=document.getElementById(s);

  var p=createElement("p");

  p.innerHTML=k.innerHTML;
  k.innerHTML=w.innerHTML;
  w.innerHTML=p.innerHTML;
}

}
