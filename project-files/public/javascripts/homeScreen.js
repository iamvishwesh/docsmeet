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

  window.onload = (event) => {
	var userEmail = document.getElementById('userEmail');
	userEmail.innerText = getCookie('userName');
	console.log('page is fully loaded');
  };

function logOut(){
	document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 IST; path=/";
	// call login page
}
function testFunction(){
	formInput = document.getElementById('join-meeting-textbox').elements[0].value;
	alert(formInput);
}
