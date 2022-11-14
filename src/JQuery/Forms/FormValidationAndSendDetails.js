$(document).ready(function(){
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

        $("#submit").click(function(){
            event.preventDefault();
            if($("#form").valid()){
            var json=convertFormToJSON(form);
             const jsonString=JSON.stringify(json);
             localStorage.setItem('FormDetails',jsonString);
             window.location.href="SecondForm.html";
            }

        })
        function convertFormToJSON(form) {
            const array = $(form).serializeArray();
            const json = {};
            $.each(array, function () {
            json[this.name] = this.value || "";
            });
            return json;
            }


})