(function ($) {

    $(document).keyup(function(event) {
        playSound( String.fromCharCode(event.which).toLowerCase() );
    });

    $(document).on('click', '.composer button', function() {
        let song = $('#input').val().toLowerCase();

        if($.trim(song) !== ''){
            let songArray = song.split('');
            playComposition(songArray);
        }
    });

    $(document).on('keypress', '#input', function(event) {
        keyAllows = ['q','w','e','a','s','d','z','x','c',' ',''];

        if(jQuery.inArray(String.fromCharCode(event.which).toLowerCase(), keyAllows) !== -1)
            return true;
        
        return false;
    });

    function playSound(key) {
        let audioElement = $(`#sound_key${key}`)[0];
        let keyElement = $(`div[data-key="key${key}"]`);

        if(audioElement){ 
            audioElement.currentTime = 0;
            audioElement.play();
        }

        if(keyElement){
            $(keyElement).addClass('active');

            setTimeout(() => {
                $(keyElement).removeClass('active');
            }, 300)
        }
    }

    function playComposition(keyArray) {
        let wait = 0; 

        for(let key of keyArray){
            setTimeout(() => {
                playSound(key);
            }, wait);

            wait += 300;
        }
                
    }

})(jQuery);