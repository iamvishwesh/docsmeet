function loadUserEmail(email){
	var userEmail = document.getElementById('userEmail');
	userEmail.innerText = email;
}
function logOut(){
	document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 IST; path=/";
	// call login page
}
function loadMeetingDetails(link){
	var tag = document.getElementById('meetingDetails');
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if((this.readyState == 4) && (this.status == 200)){
			// console.log(this.responseText);
			tag.innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "meetingDetails?link="+link, true);
	xhttp.send();
}
function loadReports(link){
	var tag = document.getElementById('reports');
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if((this.readyState == 4) && (this.status == 200)){
			// console.log(this.responseText);
			tag.innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "loadReports?link="+link, true);
	xhttp.send();
}
function loadParticipants(link){
	var tag = document.getElementById('participants');
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if((this.readyState == 4) && (this.status == 200)){
			// console.log(this.responseText);
			tag.innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "meetingParticipants?link="+link, true);
	xhttp.send();
}
function loadPageData(){
	console.log("In meetingDetails.js file");
	var link = ((window.location.search).split('='))[1];
	var email = ((document.cookie).split('='))[1];
	loadUserEmail(email);
	loadMeetingDetails(link);
	loadReports(link);
	loadParticipants(link);
}
