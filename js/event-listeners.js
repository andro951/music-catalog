// Get all record cards
var record_cards = document.querySelectorAll('.record-card');

// Get the close button of the Spotify embedded player
var close_btn = document.getElementById('close-player');


// TO DO: 
  
//       1) Copy and paste BOTH functions you wrote back in the html-event-handlers.js script.

const updatePlayer3 = (track_id) => {
   const player_iframe = document.getElementById('spotify-player');
   player_iframe.src = `https://open.spotify.com/embed/track/${track_id}`;
   document.getElementById('spotify-player-container').classList.add('visible');
}

const closePlayer3 = () => {
   document.getElementById('spotify-player-container').classList.remove('visible');
}

//       2) Loop through all records in the third row. For each record, do the following:
//          a) Add an event listener so that when clicked: 
//             Get its Spotify track ID saved as its attribute.
//             Pass this ID as an argument to the appropriate function to update the track of the player. 
      

for (let i = 3; i < record_cards.length; i++) {
   const record_card = record_cards[i];
   const onClick = () => {
      const track_id = record_card.getAttribute('data-track-id');
      updatePlayer3(track_id);
   }
   
   record_card.addEventListener('click', onClick);
}

//       3) Add an event listener to the close button so that when clicked it calls the appropriate function
//          to close the Spotify embedded player. 

close_btn.addEventListener('click', closePlayer3);