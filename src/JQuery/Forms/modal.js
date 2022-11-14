
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

       $("#myform").validate({
           rules:{
               FirstName:{required:true,minlength:3},
               PinCode:{Address:true,digits:true,minlength:6,maxlength:6},
               email:{required:true,email:true},
               MobileNumber:{required:true,digits:true,minlength:10,maxlength:10}
           },

        })

        $("#submit").click(function(){
            event.preventDefault();
           if($("#myform").valid()){
             var json=convertFormToJSON("#myform");
             $.each(json,function(name,value){
             $("#Details").append(name+":"+value+"\n")
             })
             $("#mymodal").modal('show');
}
            });

      function convertFormToJSON(form) {
                  const array = $(form).serializeArray();
                  const json = {};
                  $.each(array, function () {
                  json[this.name] = this.value || "";
                  });
                  return json;
                  }


})