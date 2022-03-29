
// let list = ["#F6DAE4","#D4F0F7","#D0D5F7","#B8CFEC"];
let list = ["#C1E7E3","#DCFFFB","#FFDCF4","#DABFDE","#C1BBDD"];

function randomChoice(list)
{
	return list[Math.floor(list.length * Math.random())];
}

let main = document.getElementById("Mamun");
let footerText = document.getElementById("footerText");

main.addEventListener('mouseout',event=>
{
	color1 = randomChoice(list);
	main.style['background-image'] = "linear-gradient(90deg,"+randomChoice(list)+","+randomChoice(list)+")";
	// console.log(main.style['background-image']);
	let randColor = randomChoice(list);
	footerText.style.color = randColor;
	footerText.style['text-shadow']= "0 0 50px"+randColor;
	// console.log(list);

})
main.addEventListener('mouseenter',event=>
{
	main.style['background-image'] = "linear-gradient(90deg, #6A76E2, #6A76E2)";
})


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

let revealElement = document.getElementsByClassName('reveal');
// console.log(revealElement)
for (var i = 0; i < revealElement.length; i++) 
{
	let newElement = revealElement[i];
	const observer = new IntersectionObserver((entries)=>
	{
		entries.forEach((entry)=>
		{
			if(entry.isIntersecting)
			{
				newElement.classList.add("reveal")
				return
				// revealElement.style['animation-name'] = 'spaceback';
				// revealElement.style['animation-duration'] = '1s';
				// revealElement.style['animation-timing-function'] = 'ease-in';
			}
			newElement.classList.remove("reveal")
		})
	})
	observer.observe(newElement)
}


window.addEventListener('scroll', () => 
{
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);