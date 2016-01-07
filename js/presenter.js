var Presenter = {
    makeDocument: function(resource) {
        if (!Presenter.parser) {
            Presenter.parser = new DOMParser();
        }
        
        var doc = Presenter.parser.parseFromString(resource, "application/xml");
        return doc;
    },
    
    modalDialogPresenter: function(xml) {
        navigationDocument.presentModal(xml);
    },
    
    pushDocument: function(xml) {
      navigationDocument.pushDocument(xml);  
    },
    
    load: function(event) {
        var self = this;
        var element = event.target;
        var videoUrl = element.getAttribute("vidUrl");
        var audioUrl = element.getAttribute("audUrl");
        
        if (videoUrl) {
            var player = new Player();
            var playlist = new Playlist();
            var mediaItem = new MediaItem("video", videoUrl);
            
            player.playlist = playlist;
            player.playlist.push(mediaItem);
            player.present();
        }
        
        if (audioUrl) {
            var player = new Player();
            var playlist = new Playlist();
            var mediaItem = new MediaItem("audio", audioUrl);
            
            player.playlist = playlist;
            player.playlist.push(mediaItem);
            player.present();
        }
    }
};
