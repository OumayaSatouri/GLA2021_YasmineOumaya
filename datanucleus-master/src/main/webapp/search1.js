function getServerData(url, success){
    $.ajax({
        dataType: "json",
        url: url
    }).done(success);    
}



function callDone(result){
	var templateExample = _.template($('#flightsToDisplay').html());
	
	for (let i = 0; i < result.length; i++) {
		let id = templateExample({
			"attribute":JSON.stringify(result[i].id)
		});
		
	
		let departure = templateExample({
			"attribute":JSON.stringify(result[i].departure)
		});
		
		let direction = templateExample({
			"attribute":JSON.stringify(result[i].direction)
		});
		
		let price = templateExample({
			"attribute":JSON.stringify(result[i].price)
		});
		
		let seats = templateExample({
			"attribute":JSON.stringify(result[i].availableseats)
		});
		
		let description = templateExample({
			"attribute":JSON.stringify(result[i].description)
		});
		
		let date = templateExample({
			"attribute":JSON.stringify(result[i].date)
		});
		
		let pilot = templateExample({
			"attribute":JSON.stringify(result[i].pilotid)
		});
		let aircrafttype = templateExample({
			"attribute":JSON.stringify(result[i].aircrafttype)
		});
		let tmp = document.createElement("p");//tempary element
		

		// Display the element in the page
		let newFlight = document.createElement("li"); //creation of the element to insert in the list
		newFlight.className = "display"
		tmp.innerHTML = id;
		newFlight.id = tmp.textContent.replace(/[^a-zA-Z0-9.\/]/g, "");
		newFlight.onclick = function(){
			localStorage.setItem('pilotid',JSON.stringify(result[i].pilotid));			
			localStorage.setItem('id',this.id);
			console.log("This.id : " + this.id , "localStorage : " + localStorage.getItem('id'));
			document.location.href = "reservation1.html";
		}
		
		
		let displayPrice = document.createElement("p"); 
		displayPrice.innerHTML = price + " &euro; per passenger";
		displayPrice.innerHTML = displayPrice.textContent;
		newFlight.appendChild(displayPrice);
		
		let DescriptionDisplay = document.createElement("h1");
		DescriptionDisplay.innerHTML = description;
		DescriptionDisplay.innerHTML = DescriptionDisplay.textContent;
		newFlight.appendChild(DescriptionDisplay);
		
		let journey = document.createElement("p");
		tmp.innerHTML = "Departure : " + departure
		journey.innerHTML = tmp.textContent + "<br>";
		tmp.innerHTML = "direction : " + direction;
		journey.innerHTML += tmp.textContent;
		newFlight.appendChild(journey);
		
		let seatDisplay = document.createElement("p");
		seatDisplay.innerHTML = "Nb of places : " + seats;
		seatDisplay.innerHTML = seatDisplay.textContent;
		newFlight.appendChild(seatDisplay);
		
		let aircrafttypeDisplay = document.createElement("p");
		aircrafttypeDisplay.innerHTML = "Aircrafttype: " + aircrafttype;
		aircrafttypeDisplay.innerHTML = aircrafttypeDisplay.textContent;
		newFlight.appendChild(aircrafttypeDisplay);
		document.querySelector("#list-result").appendChild(newFlight);
	}
	document.querySelector("#results").style.display = 	"grid";
	
}




$(function(){
	$("#GO").click(function(){
		getServerData("ws/Flight/FlightsFromTo?departure="+$("#from").val()+"&direction="+$("#to").val()+"&date="+$("#date").val(),callDone);
	});
});