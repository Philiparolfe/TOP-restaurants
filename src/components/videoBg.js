//import

// template code

function video() {
    // const HTML elements as JS obj
    const video = document.createElement('video');
    video.id = 'myVideo';
    video.src = './assets/video.mp4'
    video.autoplay = true;
    video.muted = true;
    video.loop = true
    

    document.body.appendChild(video);

  
    //append JS HTML obj as child element

  }
  
  //export
  
  export default video;