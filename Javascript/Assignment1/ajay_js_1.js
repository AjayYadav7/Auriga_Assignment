function contact() {
      var node = document.createElement("label");
      var textnode = document.createTextNode("Name");
      node.appendChild(textnode);
      document.getElementById("myList").appendChild(node);
      
      var nod = document.createElement("input");
      document.getElementById("myList").appendChild(nod);
      var node = document.createElement("label");
      var textnode = document.createTextNode("email");
      node.appendChild(textnode);
      document.getElementById("myList").appendChild(node);
      var nod = document.createElement("input");
      document.getElementById("myList").appendChild(nod);
    }
    function checkage(){
      var x=document.getElementById('aa');
      if (x > 18) {
        //alert(x);
      } else {
        alert('Age is below 18');
        document.getElementById('aa').focus();
      }
    }
    function country(){
      var cntry=["Australia","America","Brazil","Bangladesh","Cuba","China","Denmark","Duabi","Finland","hungry","India","Ireland",
      "Japan"];
      function ac(value) { 
            document.getElementById('datalist').innerHTML = ''; 
            l=value.length; 
          for (var i = 0; i<n; i++) { 
              if(((tags[i].toLowerCase()).indexOf(value.toLowerCase()))>-1) 
              { 
                  var node = document.createElement("div"); 
                  var val = document.createTextNode(tags[i]); 
                    node.appendChild(val); 
                    document.getElementById("d").appendChild(node); 
                   
                } 
            } 
        } 
    }
    function tabpage(pageName,elmnt,color) {
  var i, tabcontainer, tabss;
  tabcontainer = document.getElementsByClassName("tabcontainer");
  for (i = 0; i < tabcontainer.length; i++) {
    tabcontainer[i].style.display = "none";
  }
  tabss = document.getElementsByClassName("tabs");
  for (i = 0; i < tabss.length; i++) {
    tabss[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}
document.getElementById("defaultOpen").click();