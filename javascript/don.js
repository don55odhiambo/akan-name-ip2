var formx = function() {
    var day= parseInt(document.getElementById("day").value);
    var month= parseInt(document.getElementById("month").value);
    var year= parseInt(document.getElementById("year").value);
    var gender= document.getElementById("akanForm").elements.namedItem("gender").value;
    var dob = new Date(year+"/"+month+"/"+day);

    var weekDay= dob.getDay();
    

    var mname = ["kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    var fname = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    if(weekDay===0 &&gender === "male"){
        //alert(mname[weekDay]);
        return document.getElementById("output").innerHTML =  ("Your Akan name is :")+mname[weekDay];
      }
      else if(weekDay=== 1 &&gender === "male"){
        
        return document.getElementById("output").innerHTML =  ("Your Akan name is :")+mname[weekDay];
     
      }
      else if(weekDay===2 && gender === "male"){
        return document.getElementById("output").innerHTML =  ("Your Akan name is :")+mname[weekDay];
     
      }
      else if(weekDay===3 &&gender === "male"){
        return document.getElementById("output").innerHTML =  ("Your Akan name is :")+mname[weekDay];
     
      }
      else if(weekDay===4 &&gender === "male"){
        return document.getElementById("output").innerHTML =  ("Your Akan name is :")+mname[weekDay];
     
      }
      else if(weekDay===5 &&gender === "male"){
        return document.getElementById("output").innerHTML =  ("Your Akan name is :")+mname[weekDay];
     
      }
      else if(weekDay===6 &&gender === "male"){
        return document.getElementById("output").innerHTML =  ("Your Akan name is :")+mname[weekDay];
     
      }
     
     
     
      if(weekDay===0 &&gender === "female"){
        return document.getElementById("output").innerHTML =  ("Your Akan name is :")+fname[weekDay];
     
      }
      else if(weekDay=== 1 &&gender === "female"){
        return document.getElementById("output").innerHTML =  ("Your Akan name is :")+fname[weekDay];
     
      }
      else if(weekDay===2 && gender === "female"){
        return document.getElementById("output").innerHTML =  ("Your Akan name is :")+fname[weekDay];
     
      }
      else if(weekDay===3 &&gender === "female"){
        return document.getElementById("output").innerHTML =  ("Your Akan name is :")+fname[weekDay];
     
     
      }
      else if(weekDay===4 &&gender === "female"){
        return document.getElementById("output").innerHTML =  ("Your Akan name is :")+fname[weekDay];
     
     
      }
      else if(weekDay===5 &&gender === "female"){
        return document.getElementById("output").innerHTML =  ("Your Akan name is :")+fname[weekDay];
     
     
      }
      else{return document.getElementById("output").innerHTML =  ("Your Akan name is :")+fname[weekDay];
     
     
      }

}
