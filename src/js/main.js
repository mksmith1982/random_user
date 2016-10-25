import $ from 'jquery';

$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }
});
    


    function getData(data){
		var dataResults = [];
		for (var i = 0; i < data.results.length; i++) {
	var userPhoto = data.results[i].picture.medium;	
	var firstName = data.results[i].name.first;
	var lastName = data.results[i].name.last;
	var email = data.results[i].email;
	var phoneNumber = data.results[i].cell;
	var street = data.results[i].location.street;	
	var state = data.results[i].location.state;		
	var zip = data.results[i].location.postcode;
	var city = data.results[i].location.city;


	// function renderHTML (dataResults) {
	// 	` <div class = userPhoto> $("userPhoto")`;
	}
}

 $(".dataResults").append(resultHTML);