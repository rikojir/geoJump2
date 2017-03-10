var bootState = {

  preload: function() {
    /* Load the menu image */
    game.load.image('progressBar', 'assets/progressBar.png');
  },
  
  create: function() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.stage.backgroundColor = 'rgb(113, 184, 14)';
    /* Scale the game to keep aspect ratio untouched and 
                always show the complete game */
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    /* Landscape allowed, portrait not */
    game.scale.forceOrientation(true, false);
    // If the device is not a desktop, so it's a mobile device
    if (!game.device.desktop) {
      // Add a blue color to the page, to hide the white borders we might have
      document.body.style.backgroundColor = 'rgb(113, 184, 14)';
      // Set the min and max width/height of the game
      game.scale.minWidth = 400;
      game.scale.minHeight = 170;
      game.scale.maxWidth = 1200;
      game.scale.maxHeight = 560;
      // Center the game on the screen
      game.scale.pageAlignHorizontally = true;
      game.scale.pageAlignVertically = true;
    }
    else {
      //Desktop device, so we can use higher max widths and heights
      document.body.style.backgroundColor = 'rgb(113, 184, 14)';
      // Set the min and max width/height of the game
      game.scale.minWidth = 200;
      game.scale.minHeight = 85;
      game.scale.maxWidth = 1600;
      game.scale.maxHeight = 800;
      // Center the game on the screen
      game.scale.pageAlignHorizontally = true;
      game.scale.pageAlignVertically = true;
    }
    
    game.state.start('load');
  }
}