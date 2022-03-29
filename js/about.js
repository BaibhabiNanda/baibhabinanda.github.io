

function randomChoice(list)
{
	return list[Math.floor(list.length * Math.random())];
}


let spacemaker = document.getElementById('spacemaker');
var i = 0;

window.addEventListener('scroll',(event)=>
{
	i = i + 1 ;
	let x = window.pageYOffset;
	if (x==0)
	{
		spacemaker.style['height'] = "3vh";
	}
	else
	{
		spacemaker.style['height'] = "0vh";
	}
})

let list = ["#C1E7E3","#DCFFFB","#FFDCF4","#DABFDE","#C1BBDD"];

let circle = document.getElementById('mamunImage');
// console.log(circle);

let main = document.getElementById("Mamun");

main.addEventListener('mouseout',event=>
{
	// color1 = randomChoice(list);
	main.style['color'] = "#6A76E2";
	circle.style['border-color'] = "#6A76E2";
	document.documentElement.style.setProperty('--bottom-color', "rgba(106,118,226,1)");
})
main.addEventListener('mouseenter',event=>
{
	let randColor = randomChoice(list);
	main.style['color'] = randColor;
	circle.style['border-color'] = randColor;
	footerText.style.color = randColor;
	footerText.style['text-shadow']= "0 0 10px"+randColor;
	document.documentElement.style.setProperty('--bottom-color', randColor);
})

circle.addEventListener('mouseout',event=>
{
	color1 = randomChoice(list);
	circle.style['border-color'] = "#6A76E2";
	console.log(circle.style['border-color']);
	footerText.style.color = randomChoice(list);
	// console.log(list);

})
circle.addEventListener('mouseenter',event=>
{
	circle.style['border-color'] = randomChoice(list);
})


window.addEventListener('scroll', () => 
{
	document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);