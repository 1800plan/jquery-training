/*
ohjelman vaiheet:
1. select-tagista valitaan ensimmäiseksi haluttu kaupunki
2. toiseen valikkoon ilmestyy alueen elokuvateatterit
3. halutun elokuvateatterin näytökset ilmestyvät omaan diviin (#apidata)

// aluksi tarkoituksena käyttää vain kuluvan päivän näytöksiä
// onload --> näyttää Espoon näytöksiä
*/

function espooKinos () {
	$(document).ready(function(){
		$('#apidata').empty();//clear #apidata element
		$.ajax({
			type: 'GET',
			url: 'https://www.finnkino.fi/xml/Schedule/?area=1012&dt=17.12.2019',
			datatype: 'xml',
			success: function(data) {
				console.log(data);
				
				$(data).find('Show').each(function() {
					console.log('Teatterit *testi*: '+$(this).find('Theatre').text()); //testi
					
					var Titles = $(this).find('Title').text();
					var origTitles = $(this).find('OriginalTitle').text();
					var Genres = $(this).find('Genres').text();
					var Theatre = $(this).find('Theatre').text();
					var movieUrl = $(this).find('ShowURL').text();
					$("<li></li>").html(Titles + " || " + origTitles + " || " + Genres
					+ " || " + Theatre + " || " + movieUrl).appendTo("#apidata");	  
				});
			},
			error: function() { // error callback
				alert("ERROR occurred while processing XML file.");
			}
		});	
	});
}

function helsinkiKinos () {
	$(document).ready(function(){
		$('#apidata').empty(); //clear #apidata element
		
		$.ajax({
			type: 'GET',
			url: 'https://www.finnkino.fi/xml/Schedule/?area=1002&dt=17.12.2019',
			datatype: 'xml',
			success: function(data) {
				console.log(data);
				
				$(data).find('Show').each(function() {
					
					var Titles = $(this).find('Title').text();
					var origTitles = $(this).find('OriginalTitle').text();
					var Genres = $(this).find('Genres').text();
					var Theatre = $(this).find('Theatre').text();
					var movieUrl = $(this).find('ShowURL').text();
					$("<li></li>").html(Titles + " || " + origTitles + " || " + Genres
					+ " || " + Theatre + " || " + movieUrl).appendTo("#apidata");	  
				});
			},
			error: function() { // error callback
				alert("ERROR occurred while processing XML file.");
			}
		});	
	});
}

function vantaaKinos() {
	$(document).ready(function(){
		$('#apidata').empty(); //clear #apidata element
		
		$.ajax({
			type: 'GET',
			url: 'https://www.finnkino.fi/xml/Schedule/?area=1013&dt=17.12.2019',
			datatype: 'xml',
			success: function(data) {
				console.log(data);
				
				$(data).find('Show').each(function() {
					console.log('Title *testi*: '+$(this).find('Title').text());
										
					var Titles = $(this).find('Title').text();
					var origTitles = $(this).find('OriginalTitle').text();
					var Genres = $(this).find('Genres').text();
					var Theatre = $(this).find('Theatre').text();
					var movieUrl = $(this).find('ShowURL').text();
					$("<li></li>").html(Titles + " || " + origTitles + " || " + Genres
					+ " || " + Theatre + " || " + movieUrl).appendTo("#apidata");	  
				});
			},
			error: function() { // error callback
				alert("ERROR occurred while processing XML file.");
			}
		});	
	});
}

function cityKinos() {
	alert("Tämä toiminto ei ole vielä käytössä");
}

// toggle show/hide assignment-div
$("#clickHeading").click(function(){
	$("#assignment-div").slideToggle("slow");
});

