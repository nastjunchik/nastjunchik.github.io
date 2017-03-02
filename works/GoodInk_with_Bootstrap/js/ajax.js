var btn = document.getElementById("btn");
var container = document.getElementById("news-items");
var div = document.createElement("div");
var newsItem = document.getElementsByClassName("news-item")[4];

function renderHTML(data){

	for(i=0;i<data.length; i++){
		var newsItemCopy = newsItem.cloneNode(true);
		var header = newsItemCopy.querySelector(".news-item a h5");
		var date = newsItemCopy.querySelector(".news-item .news-panel .n-date");
		var comment = newsItemCopy.querySelector(".news-item .news-panel .n-comment");

		var newDiv = newsItemCopy;
		header.innerHTML= data[i].header;
		date.innerHTML = data[i].date;
		comment.innerHTML = data[i].comment;
		container.appendChild(newDiv);
	}
}


btn.addEventListener("click", function(){

	var request = new XMLHttpRequest();
		request.open("GET", "js/news.json");
		request.onload = function(){
			var responseData = JSON.parse(request.responseText);
			renderHTML(responseData);
		};
		request.send();

});

