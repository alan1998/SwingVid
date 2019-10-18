document.addEventListener("DOMContentLoaded", function(event) { 
  	var playpause = document.getElementById('playpause');
	var fileSel = document.getElementById('fileSelect');
	
	playpause.addEventListener('click', function(e) {
		console.log("Play pause click");
		//if (video.paused || video.ended) video.play();
		//else video.pause();
	});	
	
	fileSel.addEventListener('change', function(e) {
		console.log(fileSel.files);
	});	
});

/*	var videoContainer = document.getElementById('videoContainer');
	var video = document.getElementById('video');
	var videoControls = document.getElementById('video-controls');
	//video.controls = false;
	
	var stepFwd = document.getElementById('stepFwd');
	var frameTime = 1/60;

	window.addEventListener('keydown', function (evt) {
		console.log('Keypress');
		if (video.paused) { //or you can force it to pause here
			if (evt.keyCode === 37) { //left arrow
				//one frame back
				video.currentTime = Math.max(0, video.currentTime - frameTime);
			} else if (evt.keyCode === 39) { //right arrow
				//one frame forward
				//Don't go past the end, otherwise you may get an error
				video.currentTime = Math.min(video.duration, video.currentTime + frameTime);
			}
		}        
	});
	

	
	stepFwd.addEventListener('click', function(e) {
	console.log('S');
		if(video.paused !== true)
			video.pause();
		video.currentTime = Math.min(video.duration, video.currentTime + frameTime);
	});
	
	video.addEventListener('loadedmetadata', function() {
		progress.setAttribute('max', video.duration);
	});
	
	video.addEventListener('timeupdate', function() {
		progress.value = video.currentTime;
		//progressBar.style.width = Math.floor((video.currentTime / video.duration) * 100) + '%';
	});
	*/