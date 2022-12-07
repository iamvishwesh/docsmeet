function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "not found";
  }
console.log("page called");

function loadPastMeetings(){

	var body = document.getElementById('pageBody');
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if((this.readyState == 4) && (this.status == 200)){
			// console.log(this.responseText);
			body.innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "iframe?email="+ getCookie('userEmail'), true);
	xhttp.send();
}
