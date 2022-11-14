$(document).ready(function(){
/*this method checks the Address fields are completed or empty or anyone of the field is filled or any one
the field is empty*/
    jQuery.validator.addMethod("Address",function(value,element){
         if($("#Street").val()!=""&&$("#State").val()!=""&&$("#City").val()!=""&&$("#PinCode").val()!=""){
            return true;
        }
        else if ($("#Street").val()==""&&$("#State").val()==""&&$("#City").val()==""&&$("#PinCode").val()==""){
            return true;
        }
        else{
            return false;
        }

    },"Please Fill All Address Fields")
       $("#form").validate({
           rules:{
               FirstName:{required:true,minlength:3},
               PinCode:{Address:true,digits:true,minlength:6,maxlength:6},
               email:{required:true,email:true},
               MobileNumber:{required:true,digits:true,minlength:10,maxlength:10}
           },

        })
//here the submission process are performed
        $("#submit").click(function(){
            event.preventDefault();
 //valid method checks the form is valid or not
            if($("#form").valid()){
            var json=convertFormToJSON(form);
            const jsonString=JSON.stringify(json);
 //here the FormDetails Contain the json object it carry to the next page
            localStorage.setItem('FormDetails',jsonString);
 //here the page selection is occurred
            window.location.href="SecondForm.html";
            }
        })
  //this method convert form details to json String
        function convertFormToJSON(form) {
            const array = $(form).serializeArray();
            const json = {};
            $.each(array, function () {
            json[this.name] = this.value || "";
            });
            return json;
            }


})