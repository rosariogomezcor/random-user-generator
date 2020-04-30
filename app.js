var url = "https://randomuser.me/api"; 
var fullnameDisp = document.querySelector("#fullname"); 
var avatar = document.querySelector("#avatar"); 
var username = document.querySelector("#username"); 

var btn = document.querySelector("#btn"); 
btn.addEventListener("click", function() {
	fetch(url) 
	.then(parseJSON)
	.then(updateProfile)
	.catch(function(err) {
		console.log(err); 
	})
}); 

//Custom Functions
function parseJSON(res) {
		return res.json().then(function(parsedData) {
			return parsedData.results[0]; 
		})
	}


function updateProfile(data) {
		var fullname = data.name.first + " " + data.name.last; 
		fullnameDisp.innerText = fullname; 
		avatar.src = data.picture.medium; 
		username.innerText = data.login.username; 
	}	