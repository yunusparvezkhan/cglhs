function fieldCheck() {

   var firstname  = document.getElementById("firstname").value;
   var secondname = document.getElementById("secondname").value;
   var lastname   = document.getElementById("lastname").value;
   var email      = document.getElementById("email").value;
   var phonenumber= document.getElementById("phonenumber").value;
   var schoolid   = document.getElementById("schoolid").value;
   var aadharid    = document.getElementById("aadharid").value;
   var standard   = document.getElementById("class").value;
   var section    = document.getElementById("sec").value;
   var roll       = document.getElementById("roll").value;
   var password   = document.getElementById("password").value;


       if (aadharid == ""){
           alert("Please fill all the fields");
         return false;
       }

       if (schoolid == ""){
         alert("Please fill all the fields");
         return false;
       }

       if (phonenumber == ""){
       alert("Please fill all the fields");
         return false;
       }

       if (email == ""){
         alert("Please fill all the fields");
         return false;
       }

       if (lastname == ""){
         alert("Please fill all the fields");
         return false;
       }


       if (firstname == ""){
         alert("Please fill all the fields");
         return false;
       }






   // 2nd part starts from here//


       if ((firstname.charAt(0) !=='A') &&
          (firstname.charAt(0) !=='B') &&
          (firstname.charAt(0) !=='C') &&
          (firstname.charAt(0) !=='D') &&
          (firstname.charAt(0) !=='E') &&
          (firstname.charAt(0) !=='F') &&
          (firstname.charAt(0) !=='G') &&
          (firstname.charAt(0) !=='H') &&
          (firstname.charAt(0) !=='I') &&
          (firstname.charAt(0) !=='J') &&
          (firstname.charAt(0) !=='K') &&
          (firstname.charAt(0) !=='L') &&
          (firstname.charAt(0) !=='M') &&
          (firstname.charAt(0) !=='N') &&
          (firstname.charAt(0) !=='O') &&
          (firstname.charAt(0) !=='P') &&
          (firstname.charAt(0) !=='Q') &&
          (firstname.charAt(0) !=='R') &&
          (firstname.charAt(0) !=='S') &&
          (firstname.charAt(0) !=='T') &&
          (firstname.charAt(0) !=='U') &&
          (firstname.charAt(0) !=='V') &&
          (firstname.charAt(0) !=='W') &&
          (firstname.charAt(0) !=='X') &&
          (firstname.charAt(0) !=='Y') &&
          (firstname.charAt(0) !=='Z')) {


              document.getElementById("warfirstname").innerHTML="First letter must be an upper case letter";
              return false;
       }









       if ((secondname.charAt(0) !=='A') &&
          (secondname.charAt(0) !=='B') &&
          (secondname.charAt(0) !=='C') &&
          (secondname.charAt(0) !=='D') &&
          (secondname.charAt(0) !=='E') &&
          (secondname.charAt(0) !=='F') &&
          (secondname.charAt(0) !=='G') &&
          (secondname.charAt(0) !=='H') &&
          (secondname.charAt(0) !=='I') &&
          (secondname.charAt(0) !=='J') &&
          (secondname.charAt(0) !=='K') &&
          (secondname.charAt(0) !=='L') &&
          (secondname.charAt(0) !=='M') &&
          (secondname.charAt(0) !=='N') &&
          (secondname.charAt(0) !=='O') &&
          (secondname.charAt(0) !=='P') &&
          (secondname.charAt(0) !=='Q') &&
          (secondname.charAt(0) !=='R') &&
          (secondname.charAt(0) !=='S') &&
          (secondname.charAt(0) !=='T') &&
          (secondname.charAt(0) !=='U') &&
          (secondname.charAt(0) !=='V') &&
          (secondname.charAt(0) !=='W') &&
          (secondname.charAt(0) !=='X') &&
          (secondname.charAt(0) !=='Y') &&
          (secondname.charAt(0) !=='Z') &&
          (secondname.charAt(0) !=='')) {


              document.getElementById("warsecondname").innerHTML="First letter must be an upper case letter";
              return false;
       }







       if ((lastname.charAt(0) !=='A') &&
          (lastname.charAt(0) !=='B') &&
          (lastname.charAt(0) !=='C') &&
          (lastname.charAt(0) !=='D') &&
          (lastname.charAt(0) !=='E') &&
          (lastname.charAt(0) !=='F') &&
          (lastname.charAt(0) !=='G') &&
          (lastname.charAt(0) !=='H') &&
          (lastname.charAt(0) !=='I') &&
          (lastname.charAt(0) !=='J') &&
          (lastname.charAt(0) !=='K') &&
          (lastname.charAt(0) !=='L') &&
          (lastname.charAt(0) !=='M') &&
          (lastname.charAt(0) !=='N') &&
          (lastname.charAt(0) !=='O') &&
          (lastname.charAt(0) !=='P') &&
          (lastname.charAt(0) !=='Q') &&
          (lastname.charAt(0) !=='R') &&
          (lastname.charAt(0) !=='S') &&
          (lastname.charAt(0) !=='T') &&
          (lastname.charAt(0) !=='U') &&
          (lastname.charAt(0) !=='V') &&
          (lastname.charAt(0) !=='W') &&
          (lastname.charAt(0) !=='X') &&
          (lastname.charAt(0) !=='Y') &&
          (lastname.charAt(0) !=='Z')) {


              document.getElementById("warlastname").innerHTML="First letter must be an upper case letter";
              return false;
       }





// email address validation proccess starts from here....





          if (email.indexOf('@')<=0) {
                  document.getElementById('waremail').innerHTML="Invalid email adress format. Please try again";
                  return false;
          }

          if ((email.charAt(email.length-4) !='.') && (email.charAt(email.length-3) !='.')) {
                  document.getElementById('waremail').innerHTML="Invalid email adress format. Please try again.";
                  return false;
          }




// phone number validation proccess dtarts from here//






          if (isNaN(phonenumber)) {
             document.getElementById("warphonenumber").innerHTML="Please fill a number";
             return false;
          }



          if (phonenumber.length<10) {
          document.getElementById("warphonenumber").innerHTML="Phone number must be 10 digits";
          return false;
          }


          if ((phonenumber.charAt(0) !=='6') &&
              (phonenumber.charAt(0) !=='7') &&
              (phonenumber.charAt(0) !=='8') &&
              (phonenumber.charAt(0) !=='9')) {
              document.getElementById("warphonenumber").innerHTML="Please enter a valid phone number";
              return false;
            }






//school id format validation starts from here//







          if (schoolid.charAt(4) !=='/') {
            document.getElementById("warschoolid").innerHTML="School ID format does'nt match";
            return false;
          }

          if ((schoolid.charAt(0) !=='1') &&
             (schoolid.charAt(0) !=='2')) {
            document.getElementById("warschoolid").innerHTML="School ID format does'nt match..";
            return false;
          }




          if ((schoolid.charAt(1) !=='0') &&
             (schoolid.charAt(1) !=='9')) {
            document.getElementById("warschoolid").innerHTML="School ID format does'nt match..";
            return false;
          }





          if ((schoolid.charAt(2) !=='0') &&
             (schoolid.charAt(2) !=='1') &&
             (schoolid.charAt(2) !=='2') &&
             (schoolid.charAt(2) !=='8') &&
             (schoolid.charAt(2) !=='9')) {
            document.getElementById("warschoolid").innerHTML="School ID format does'nt match..";
            return false;
          }





          if ((schoolid.charAt(3) !=='1') &&
             (schoolid.charAt(3) !=='2') &&
             (schoolid.charAt(3) !=='3') &&
             (schoolid.charAt(3) !=='4') &&
             (schoolid.charAt(3) !=='5') &&
             (schoolid.charAt(3) !=='6') &&
             (schoolid.charAt(3) !=='7') &&
             (schoolid.charAt(3) !=='8') &&
             (schoolid.charAt(3) !=='9') &&
             (schoolid.charAt(3) !=='0')) {
            document.getElementById("warschoolid").innerHTML="School ID format does'nt match..";
            return false;
          }




          if ((schoolid.charAt(5) !=='1') &&
             (schoolid.charAt(5) !=='2') &&
             (schoolid.charAt(5) !=='3') &&
             (schoolid.charAt(5) !=='4') &&
             (schoolid.charAt(5) !=='5') &&
             (schoolid.charAt(5) !=='6') &&
             (schoolid.charAt(5) !=='7') &&
             (schoolid.charAt(5) !=='8') &&
             (schoolid.charAt(5) !=='9') &&
             (schoolid.charAt(5) !=='0')) {
            document.getElementById("warschoolid").innerHTML="School ID format does'nt match..";
            return false;
          }





          if ((schoolid.charAt(6) !=='1') &&
             (schoolid.charAt(6) !=='2') &&
             (schoolid.charAt(6) !=='3') &&
             (schoolid.charAt(6) !=='4') &&
             (schoolid.charAt(6) !=='5') &&
             (schoolid.charAt(6) !=='6') &&
             (schoolid.charAt(6) !=='7') &&
             (schoolid.charAt(6) !=='8') &&
             (schoolid.charAt(6) !=='9') &&
             (schoolid.charAt(6) !=='0')) {
            document.getElementById("warschoolid").innerHTML="School ID format does'nt match..";
            return false;
          }

      // Adhar ID validation proccess starts from here //


      if (isNaN(aadharid)) {
        document.getElementById("waraadharid").innerHTML="Aadhar ID should be a 12 charecters long number";
        return false;
      }



        if (aadharid.length<12) {
          document.getElementById("waraadharid").innerHTML="Aadhar ID should be 12 charecters long please check your Adhar ID";
          return false;
        }




        // class validation starts from here //


        if (standard == "") {
          document.getElementById("warclass").innerHTML="Please select your class";
          return false;
        }


        // section validation proccess starts from here //


        if (section == "") {
          document.getElementById("warsec").innerHTML="Select Section";
          return false;
        }

        // roll validation proccess starts from here //


        if (roll == "") {
          document.getElementById("warroll").innerHTML="Select Roll";
          return false;
        }


        // password validation starts from here //




        if (password == "") {
          document.getElementById("warpassword").innerHTML="Please select your password";
          return false;
        }


}
