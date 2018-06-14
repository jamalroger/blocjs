

// this file is framework created by jamal roger in 26/ramadan/1439

class blocjs {
    constructor(elem){

       this.id=document.querySelector(elem);
    }


append(ele,content){

    var para = document.createElement(ele);
    para.innerHTML=content;
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
      para.innerHTML=content;
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
    //    var p= this.id.getAttribute("class")==null?"":this.id.getAttribute("class");
    //    this.id.setAttribute("class",p + " " + name);
    this.id.classList.add(name);

   }  
delClass(name){

    //    var p= this.id.getAttribute("class").split(" ");
    //    p.splice(p.indexOf(name),1);
    //    this.id.setAttribute("class",p);
    this.id.classList.remove(name);
   }
toUpper(){

    this.id.innerHTML=this.id.innerHTML.toLocaleUpperCase;

}
toLower(){

    this.id.innerHTML=this.id.innerHTML.toLowerCase;

}



find(elem){





   }
on(event,func){

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

getInput(name){

this.id.innerHTML=document.querySelector(name).value;
}
// Helper function to get an element's exact positio

getPosition() {
    var xPosition = 0;
    var yPosition = 0;
    var el = this.id;
    while (el) {
      if (el.tagName == "BODY") {
        // deal with browser quirks with body/window/document and page scroll
        var xScrollPos = el.scrollLeft || document.documentElement.scrollLeft;
        var yScrollPos = el.scrollTop || document.documentElement.scrollTop;
  
        xPosition += (el.offsetLeft - xScrollPos + el.clientLeft);
        yPosition += (el.offsetTop - yScrollPos + el.clientTop);
      } else {
        xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
      }
  
      el = el.offsetParent;
    }
    return {
      x: xPosition,
      y: yPosition
    };
  }

onscrollAdd(name){

  window.addEventListener("scroll",function(){
    if (window.scrollY>getPosition().y){
      this.id.classList.add(name);

    }else
    {
        this.id.classList.remove(name);
    }

  });


  }


}
