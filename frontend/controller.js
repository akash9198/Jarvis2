$(document).ready(function () {
    // Display speak message 
   eel.expose(Displaymessage)
   function Displaymessage(message) {

       $(".siri-message li:first").text(message);
       $('.siri-message').textillate('start');


    // Display hood
    eel.expose(ShowHood)
    function ShowHood() {
        $("#Oval").attr("hidden", false);
        $("#SiriWave").attr("hidden", true);
    }   
}
});



    

