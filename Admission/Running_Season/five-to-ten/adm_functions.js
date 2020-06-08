

  function pupilismale() {
      document.getElementById("pupil-gender-f").checked = false;
      document.getElementById("pupil-gender-m").checked = true;
      document.getElementById("pupil-gender").value="Male";
  }
  function pupilisfemale() {
      document.getElementById("pupil-gender-m").checked = false;
      document.getElementById("pupil-gender-f").checked = true;
      document.getElementById("pupil-gender").value="Female";
  }









  function aadhar_enrollment() {
    document.getElementById("screen-hider2").style.display="block";
    document.getElementById("popup-box2").style.width="500px";
    document.getElementById("popup-box2").style.height="200px";
    document.getElementById("aadhar-enrollment-box").style.display="block";
  }
  function a_e_num_done() {
    var enrollmentnumber = document.getElementById("aadhar-enrollment-num2").value;

    if (enrollmentnumber == "") {
          document.getElementById("war-aadhar-enrollment-num").style.display="block";
          return false;
        }else {
          document.getElementById("war-aadhar-enrollment-num").style.display="none";
        }

        document.getElementById("aadhar-enrollment-num1").value = enrollmentnumber;

        document.getElementById("screen-hider2").style.display="none";
        document.getElementById("aadhar-enrollment-box").style.display="none";
        document.getElementById("popup-box2").style.width="0";
        document.getElementById("popup-box2").style.height="0";

  }






  function a_e_num_cancel() {
        document.getElementById("aadhar-enrollment-num1").value="";
        document.getElementById("aadhar-enrollment-num2").value="";
        document.getElementById("war-aadhar-enrollment-num").style.display="none";

        document.getElementById("screen-hider2").style.display="none";
        document.getElementById("aadhar-enrollment-box").style.display="none";
        document.getElementById("popup-box2").style.width="0";
        document.getElementById("popup-box2").style.height="0";
  }


  function no_aadharcard() {
      alert("Sorry, we can't proccess your admission request. You should must have a Aadhar card or Enrollment number to proof your identity...");
      document.getElementById("homepage-btn").click();
  }






    function father() {
      document.getElementById("pri-grdn-father").checked = true;
      document.getElementById("pri-grdn-father2").checked = true;
      document.getElementById("pri-grdn-mother").checked = false;
      document.getElementById("pri-grdn-mother2").checked = false;

      document.getElementById("guardian-name1").value="";
      document.getElementById("grdn-gender").value="";
      document.getElementById("guardian-occupation1").value="";
      document.getElementById("guardian-village1").value="";
      document.getElementById("guardian-po1").value="";
      document.getElementById("guardian-pin1").value="";
      document.getElementById("guardian-dist1").value="";
      document.getElementById("guardian-phnum1").value="";
      document.getElementById("guardian-email1").value="";
      document.getElementById("guardian-relationship1").value="";


      document.getElementById("guardian-name2").value="";
      document.getElementById("guardian-occupation2").value="";
      document.getElementById("guardian-village2").value="";
      document.getElementById("guardian-po2").value="";
      document.getElementById("guardian-pin2").value="";
      document.getElementById("guardian-dist2").value="";
      document.getElementById("guardian-phnum2").value="";
      document.getElementById("guardian-email2").value="";
      document.getElementById("guardian-relationship2").value="";
      document.getElementById("guardian-gender2-m").checked = false;
      document.getElementById("guardian-gender2-f").checked = false;

      document.getElementById("pri-grdn").value="Father";
    }
    function mother() {
      document.getElementById("pri-grdn-father").checked = false;
      document.getElementById("pri-grdn-father2").checked = false;
      document.getElementById("pri-grdn-mother").checked = true;
      document.getElementById("pri-grdn-mother2").checked = true;

      document.getElementById("guardian-name1").value="";
      document.getElementById("grdn-gender").value="";
      document.getElementById("guardian-occupation1").value="";
      document.getElementById("guardian-village1").value="";
      document.getElementById("guardian-po1").value="";
      document.getElementById("guardian-pin1").value="";
      document.getElementById("guardian-dist1").value="";
      document.getElementById("guardian-phnum1").value="";
      document.getElementById("guardian-email1").value="";
      document.getElementById("guardian-relationship1").value="";
      

      document.getElementById("guardian-name2").value="";
      document.getElementById("guardian-occupation2").value="";
      document.getElementById("guardian-village2").value="";
      document.getElementById("guardian-po2").value="";
      document.getElementById("guardian-pin2").value="";
      document.getElementById("guardian-dist2").value="";
      document.getElementById("guardian-phnum2").value="";
      document.getElementById("guardian-email2").value="";
      document.getElementById("guardian-relationship2").value="";
      document.getElementById("guardian-gender2-m").checked = false;
      document.getElementById("guardian-gender2-f").checked = false;

      document.getElementById("pri-grdn").value="Mother";
    }

function submitdetailsofguardian() {
    document.getElementById("screen-hider").style.display="block";
    document.getElementById("popup-box1").style.width="700px";
    document.getElementById("popup-box1").style.height="500px";
    document.getElementById("different-guardian-box").style.display="block";
}




        function guardianismale() {
          document.getElementById("guardian-gender2-m").checked = true;
          document.getElementById("guardian-gender2-f").checked = false;

          document.getElementById("grdn-gender").value="Male ";
        }
        function guardianisfemale() {
          document.getElementById("guardian-gender2-m").checked = false;
          document.getElementById("guardian-gender2-f").checked = true;

          document.getElementById("grdn-gender").value="Female ";
        }






function done() {

          var name = document.getElementById("guardian-name2").value;
          var male = document.getElementById("guardian-gender2-m").checked;
          var female = document.getElementById("guardian-gender2-f").checked;
          var occupation = document.getElementById("guardian-occupation2").value;
          var village = document.getElementById("guardian-village2").value;
          var postoffice = document.getElementById("guardian-po2").value;
          var pin = document.getElementById("guardian-pin2").value;
          var dist = document.getElementById("guardian-dist2").value;
          var phonenum = document.getElementById("guardian-phnum2").value;
          var email = document.getElementById("guardian-email2").value;
          var relationship = document.getElementById("guardian-relationship2").value;

              if (name == "") {
                document.getElementById("war-guardian-name2").style.display="block";
              }else {
                document.getElementById("war-guardian-name2").style.display="none";
              }
              if (male == false){
                if (female == false){
                document.getElementById("war-guardian-gender2").style.display="block";
               }else {
                 document.getElementById("war-guardian-gender2").style.display="none";
               }
              }else {
                document.getElementById("war-guardian-gender2").style.display="none";
              }
              if (occupation == "") {
                document.getElementById("war-guardian-occupation2").style.display="block";
              }else {
                document.getElementById("war-guardian-occupation2").style.display="none";
              }
              if (village == "") {
                document.getElementById("war-guardian-village2").style.display="block";
              }else {
                document.getElementById("war-guardian-village2").style.display="none";
              }
              if (postoffice == "") {
                document.getElementById("war-guardian-po2").style.display="block";
              }else{
                document.getElementById("war-guardian-po2").style.display="none";
              }
              if (pin == "") {
                document.getElementById("war-guardian-pin2").style.display="block";
              }else{
                document.getElementById("war-guardian-pin2").style.display="none";
                }
              if (dist == "") {
                document.getElementById("war-guardian-dist2").style.display="block";
              }else {
                document.getElementById("war-guardian-dist2").style.display="none";
              }
              if (phonenum == "") {
                document.getElementById("war-guardian-phnum2").style.display="block";
              }else {
                document.getElementById("war-guardian-phnum2").style.display="none";
              }
              if (relationship == "") {
                document.getElementById("war-guardian-relationship2").style.display="block";
              }else {
                document.getElementById("war-guardian-relationship2").style.display="none";
              }






                                        if (name == "") {
                                          return false;
                                        }
                                        if (male == false) {
                                          if (female == false) {
                                             return false;
                                          }
                                        }
                                        if (village == "") {
                                          return false;
                                        }
                                        if (postoffice == "") {
                                          return false;
                                        }
                                        if (pin == "") {
                                          return false;
                                        }
                                        if (dist == "") {
                                          return false;
                                        }
                                        if (phonenum == "") {
                                          return false;
                                        }
                                        if (relationship == "") {
                                          return false;
                                        }


                                        document.getElementById("guardian-name1").value = name;
                                        document.getElementById("guardian-occupation1").value = occupation;
                                        document.getElementById("guardian-village1").value= village;
                                        document.getElementById("guardian-po1").value= postoffice;
                                        document.getElementById("guardian-pin1").value= pin;
                                        document.getElementById("guardian-dist1").value= dist;
                                        document.getElementById("guardian-phnum1").value= phonenum;
                                        document.getElementById("guardian-email1").value= email;
                                        document.getElementById("guardian-relationship1").value= relationship;






                          document.getElementById("pri-grdn-father").checked = false;
                          document.getElementById("pri-grdn-father2").checked = false;
                          document.getElementById("pri-grdn-mother").checked = false;
                          document.getElementById("pri-grdn-mother2").checked = false;
                          document.getElementById("pri-grdn").value="Someone else than parents";


                              document.getElementById("screen-hider").style.display="none";
                              document.getElementById("popup-box1").style.width="0";
                              document.getElementById("popup-box1").style.height="0";
                              document.getElementById("different-guardian-box").style.display="none";
                }




   function cancel() {
    document.getElementById("screen-hider2").style.display="block";
    document.getElementById("popup-box2").style.width="500px";
    document.getElementById("popup-box2").style.height="200px";
    document.getElementById("pri-gur-checkbox-popup-box").style.display="block";
}


  function prigurcheckboxpopupdone() {

      var father = document.getElementById("pri-grdn-father2").checked;
      var mother = document.getElementById("pri-grdn-mother2").checked;

            if (father == false) {
              if (mother == false) {
                document.getElementById("war-pri-grdn2").style.display="block";
                return false;
              }else {
                document.getElementById("war-pri-grdn2").style.display="none";
              }
            }else {
              document.getElementById("war-pri-grdn2").style.display="none";
            }


      document.getElementById("guardian-name2").value="";
      document.getElementById("guardian-occupation2").value="";
      document.getElementById("guardian-village2").value="";
      document.getElementById("guardian-po2").value="";
      document.getElementById("guardian-pin2").value="";
      document.getElementById("guardian-dist2").value="";
      document.getElementById("guardian-phnum2").value="";
      document.getElementById("guardian-email2").value="";
      document.getElementById("guardian-relationship2").value="";
      document.getElementById("guardian-gender2-m").checked = false;
      document.getElementById("guardian-gender2-f").checked = false;

      document.getElementById("war-guardian-name2").style.display="none";
      document.getElementById("war-guardian-gender2").style.display="none";
      document.getElementById("war-guardian-occupation2").style.display="none";
      document.getElementById("war-guardian-village2").style.display="none";
      document.getElementById("war-guardian-po2").style.display="none";
      document.getElementById("war-guardian-pin2").style.display="none";
      document.getElementById("war-guardian-dist2").style.display="none";
      document.getElementById("war-guardian-phnum2").style.display="none";
      document.getElementById("war-guardian-relationship2").style.display="none";





                      document.getElementById("guardian-name1").value="";
                      document.getElementById("guardian-occupation1").value="";
                      document.getElementById("guardian-village1").value="";
                      document.getElementById("guardian-po1").value="";
                      document.getElementById("guardian-pin1").value="";
                      document.getElementById("guardian-dist1").value="";
                      document.getElementById("guardian-phnum1").value="";
                      document.getElementById("guardian-email1").value="";
                      document.getElementById("guardian-relationship1").value="";








    document.getElementById("screen-hider2").style.display="none";
    document.getElementById("popup-box2").style.width="0";
    document.getElementById("popup-box2").style.height="0";
    document.getElementById("pri-gur-checkbox-popup-box").style.display="none";

    document.getElementById("screen-hider").style.display="none";
    document.getElementById("popup-box1").style.width="0";
    document.getElementById("popup-box1").style.height="0";
    document.getElementById("different-guardian-box").style.display="none";
  }
