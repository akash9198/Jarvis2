$(document).ready(function () {
    $('.text').textillate({
        loop : true,
        sync : true,
        in: {
            effect: "bounceIn",
        }, 
        out: {
            effect: "bounceOut",
        },
    });

    //Siriwaves
    var siriWave = new SiriWave({
        container: document.getElementById("siri-container"),
        width: 800,
        height: 200,
        style: "ios9",
        amplitude: "1",
        speed: "0.30",
        autostart: true
      });

      //Siri-message animation

      $('.siri-message').textillate({
        loop : true,
        sync : true,
        in: {
            effect: "fadeInUp",
             sync: true       
        }, 
        out: {
            effect: "fadeOutUp",
            sync: true
        },
    });

    //Mic button click event
    
    $("#MicBtn").click(function (e) { 
        eel.playAssistantSound()
        $("#Oval").attr("hidden",true);
        $("#SiriWave").attr("hidden",false);
        eel.allCommands()()
        
    });

    // Shortcut key for wake up jarvis 
    function doc_keyUp(e) {
        //this would test for whichever key is 40 (down arrow) and the ctrl key at the same time
        
        if(e.key === 'j' && e.metaKey){
            eel.playAssistantSound()
            $("#Oval").attr("hidden",true)
            $("#SiriWave").attr("hidden",false)
            eel.allCommands()()
        }
      }
      document.addEventListener('keyup', doc_keyUp, false)
});