

      function username() {
       document.getElementById("btn").style.left="0px";
       document.getElementById("btn").style.width="115px";
       document.getElementById("userid").placeholder="Username";
       document.getElementById("userid").name="username";
      }




       function aadharid() {
        document.getElementById("btn").style.left="110px";
        document.getElementById("btn").style.width="119px";
        document.getElementById("userid").placeholder="Aadhar ID";
        document.getElementById("userid").name="aadharid";
      }


      function schoolid() {
       document.getElementById("btn").style.left="225px";
       document.getElementById("btn").style.width="123px";
       document.getElementById("userid").placeholder="School ID";
       document.getElementById("userid").name="schoolid";
      }



 // form validation checking proccesses starts from here //


      function form() {

        var userid   = document.getElementById("userid").value;
        var password = document.getElementById("password").value;



        if (userid == "") {
          alert("Please enter your User ID (Username/Aadhar ID/School ID)")
          return false;
        }

        if (password == "") {
          alert("Please enter your Password")
          return false;
        }















      }
