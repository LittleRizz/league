angular.module("leagueARAM", [])
.controller("listChampions", function( HeroList ){
	console.log("working");
	var MC = this;
	HeroList()
	.then(function (data){
		MC.champs = data;
		console.log("done");
		console.log(MC.champs.data[13]);
	});
})

.factory('HeroList', function( $http ){
	console.log("get hero list running");
	return function(){
		return $http.get('https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=altimages&api_key=36d81022-aef0-4340-bd84-b87ec97813de')
		.then (function(champData){
			return champData.data;
		},
		function(error){
			console.log(error);
		});
	}
});

$("#searchSummoner")
// 	var gibblets = this;
// 	ChampionPull()
// 	.then
// })









// 	$.ajax(
// 	{
// 		url: "https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=altimages&api_key=36d81022-aef0-4340-bd84-b87ec97813de",
// 		type: "GET",
// 		dataType: "json",
// 		success: function (data)
// 			{
// 				var myname = d
// 			},
// 		error: function(error){
// 			console.log(error);
// 		}

// 	});



// var GetRecentGames = function(){
// 	$.ajax(
// 	{
// 		url: "https://na.api.pvp.net/api/lol/na/v2.2/matchhistory/" + myname + "?api_key=36d81022-aef0-4340-bd84-b87ec97813de",
// 		type: "GET",
// 		dataType: "json",
// 		success: function (data1)
// 			{
// 				console.log(data1)
// 			},
// 		error: function(error){
// 			console.log(error);
// 		}

// 	});
// };

// GetSummonerId.done(function (data){
// 	console.log(data);
// });
