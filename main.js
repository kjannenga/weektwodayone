alert("Click 'ok' to start the adventure")
alert("It was a dark and stormy night out at the family cabin")
	var d = prompt("What is your name?")
	alert("hello "+d+"! You are watching a movie with your brother Steve.")
alert("The house was quiet until you hear a BANG and the lights go out")

var a = confirm("there is a noise coming from the basement. Go check it out?");
if (a == true) {
     alert("You go to the basement unarmed and without light.  The monster gets you.  You are the first to die in the horror movie.  Stupid.  Refresh to start over")
} else {
     alert("Good choice! Grab the flashlight from the drawer next to you and move on");



	alert("'Must be the storm, we should start the generator' -Steve")
	
	var b = confirm ("Stay behind while Steve checks it out?")
	if (b == true) {
		alert("You and Steve split up.  You hear something sneak up behind you.  Boom.  You're dead. Don't split up in horror movies.  Refresh to try again.")
	} else{
		alert("Good job not splitting up! You go outside to the garage and see that the generator has been tampered with.  Steve turns it back on.")
	


		alert("With the lights on you can see around again. There are three sets footprints in the snow from the house to the garage.")
		alert("'There is someone else here' -" +d+ "\n'Or something else!' -Steve. \n 'You know the stories grandpa used to tell us about this cabin.'- "+d)
		alert("Grandpa used to warn the kids to get inside before sundown because a monster lived in the woods around the cabin.")

		var c = prompt("do you \ngo inside? \ncall the police? \nsay 'There's no such thing as Monsters'")
		if (c=="no such thing as monsters"){
			alert("You should have listened to Grandpa.  A moster comes out from behind the cabin and kills both you and Steve.")
		}else if (c=="call the police"){
			alert("Good call! The police show up and save you from the murderer in your basement. YOU WIN!")
		}else if (c=="go inside"){
			alert("You and Steve go inside to watch TV")
		



			alert("You hear a noise in the basement again.")
			alert("'Okay this isn't funny' -Steve")

			var e = prompt("Do you \nGrab a bat \nGo to the basement \nCall the police")
			switch (e){
				case "Call the police":
				alert("The phone goes silent.  The line has been cut.  While you try to type 911 you are attacked.  Dead.  Should have called earlier.");
				break;
				case "grab a gun":
				alert("Go without a weapon? That's not smart. You and Steve get attacked by the monster. Dead. ")
				break;
				case "grab a bat":
				alert("good job. You and Steve walk down to the basement..... only to find there was a surprise party for you! Hooray! Your whole family is there to celebrate! eat cake you win!");
				break;
			}
		}
		
	}
}



