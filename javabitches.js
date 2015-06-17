var lol = function(){
	$.ajax(
	{
		url: "https://na.api.pvp.net/api/lol/static-data/na/v1.2/champion/113?api_key=36d81022-aef0-4340-bd84-b87ec97813de",
		type: "GET",
		dataType: "json",
		success: function (data)
			{
				console.log(data);
			},
		error: function(error){
			console.log(error);
		}

	});
};

lol();
