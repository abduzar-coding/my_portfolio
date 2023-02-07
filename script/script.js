function myFun() {
    let x = document.getElementById('menuON')
    if (x.className === 'menuON') {
      x.className = 'menuOFF'
		} else {
			  x.className = 'menuON'
			}
}


function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : document.getElementById('username').value,
        Password : "password",
        To : 'kabduzar@gmail.com',
        From : document.getElementById('email').value,
        Subject : "From Web",
        Body : document.getElementById('message').value
    }).then(
      message => alert(message)
    );
}