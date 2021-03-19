/*$(document).ready(function(){
    $("#submit-form").validate({
        rules: {
           
            mobile:{
                required: true,
                minlength : 10,
                digit:true
            },
            mail:{
                required: true,
                email:true
            },
            content:{
                required:true

            }
        },
        messages: {
            name:{
                required:"Please enter your name"
            },
            mobile:{
                required:"Please enter valid number"
            },
            content:{
                required:"Please enter Your message"
            }
        }
    })
   
*/

    
$("#submit-form").submit((e) => {
    e.preventDefault()
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbwWOuOQLHLrAqVFMDVGDVLxs25E-wtAteSiLXF1A8QB9-NlgiHCkhd268K-cVc1BOlG2Q/exec",
        data: $("#submit-form").serialize(), 
        method: "post",
        success: function (response) {
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error: function (err) {
            alert("Something Error")

        }
    })
})





    


