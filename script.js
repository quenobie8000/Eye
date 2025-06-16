(function () {
	document.onmousemove = handleMouseMove;
	function handleMouseMove(event) {
		var eventDoc, doc, body;
		const pageX = window.innerWidth;
		const pageY = window.innerHeight;
		let X;
		let Y;


		var box = document.getElementById("box");
		var limit = document.getElementById("limit");
		var Slider = document.getElementById("Slider");
		X = event.pageX;
		Y = event.pageY;
		sizeX = 0.3;
		sizeY = 0.2;
		sqHeight = 120;
		sqWidth = 150;

		if (sqHeight > pageY - pageY * sizeY - pageY * sizeY) {
			sqHeight = pageY - pageY * sizeY - pageY * sizeY;
		}

		if (sqWidth > pageX - pageX * sizeX - pageX * sizeX) {
			sqWidth = pageX - pageX * sizeX - pageX * sizeX;
		}

		if (pageY - event.pageY - sqHeight / 3 <= pageY * sizeY) {
			Y = pageY - pageY * sizeY - sqHeight / 3;
		}
		if (
			pageY - event.pageY + (sqHeight - sqHeight / 3) >=
			pageY - pageY * sizeY
		) {
			Y = pageY * sizeY + (sqHeight - sqHeight / 3);
		}

		if (pageX - event.pageX <= pageX * sizeX + sqWidth / 2)
			X = pageX - pageX * sizeX - sqWidth / 2;

		if (pageX - event.pageX >= pageX - pageX * sizeX - sqWidth / 2)
			X = pageX * sizeX + sqWidth / 2;

		document.addEventListener("mousemove", function () {
			box.style.top = Y - sqHeight / 1.5 + "px";
			box.style.left = X - sqWidth / 2 + "px";
			limit.style.setProperty("--limWidth", pageX - pageX * sizeX - pageX * sizeX + "px");
			limit.style.setProperty("--limHeight", pageY - pageY * sizeY - pageY * sizeY + "px");
			limit.style.setProperty("--limTop", pageY * sizeY + "px");
			limit.style.setProperty("--limLeft", pageX * sizeX + "px");
			box.style.setProperty("--sqHeight", sqHeight + "px");
			box.style.setProperty("--sqWidth", sqWidth + "px");
		});
	}
})();

// (function () {
// 	var script =  document.createElement('script');
// 	script.src="//cdn.jsdelivr.net/npm/eruda";
// 	document.body.appendChild(script);
// 	script.onload = function () {
// 		eruda.init()
// 	} 
// })();