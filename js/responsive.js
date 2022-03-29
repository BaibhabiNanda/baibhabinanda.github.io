
let mobileNavbar = document.querySelector(".navOptions");
let navToggle = document.querySelector(".mobile-nav-toggle");

// console.log(navToggle)

// let blurAmount = document.documentElement.style.getPropertyValue('--blur-amount');

navToggle.addEventListener('click',event=>
{
	let translatePercentage = document.documentElement.style.getPropertyValue('--translate-percentage');
	// console.log(translatePercentage);
	let navImage = document.getElementById('nav-toggle-image');
	if(translatePercentage==='0%')
	{
		document.documentElement.style.setProperty('--translate-percentage', '100%');
		navImage['src']="static/hamburger-white.svg"
		// console.log("hemlo1");
	}
	else
	{
		document.documentElement.style.setProperty('--translate-percentage', '0%');
		console.log("hemlo")
		navImage['src']="static/close-white.svg"
		// console.log("hemlo2");
	}
	// console.log("hemlo");
})
