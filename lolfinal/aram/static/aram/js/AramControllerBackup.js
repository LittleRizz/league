AramControllerBackup:

		$http.get('https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' + SummonerName + '?api_key=36d81022-aef0-4340-bd84-b87ec97813de').
			success(function(data){
				self.beefStew = data[SummonerName];
				console.log(self.beefStew.id);
				self.sumID = self.beefStew.id;
				return self.sumID
			}).
			error(function(error){
				console.log(error);
			}).
			then(function(){
				console.log("Getting Current Match Stats...");
				$http.get('https://na.api.pvp.net/api/lol/na/v1.3/game/by-summoner/' + self.sumID + '/recent?api_key=36d81022-aef0-4340-bd84-b87ec97813de').
					success(function(gameData){
						self.lotsa = Object.keys(gameData.games[0].fellowPlayers).map(function (key) {
							var po = gameData.games[0].fellowPlayers[key];
							po.key = key;
							return po; 
						});
						console.log(self.lotsa[0].summonerId);
						return self.lotsa;
					}).
					error(function(error){
						console.log(error);
					})
			}).
			then(function(){
				self.summonerList = [];
				console.log(self.lotsa);
				console.log(self.summonerList);
			})
			// then(function(){
			// 	$http.get('https://na.api.pvp.net/api/lol/na/v1.4/summoner/' +  + '?api_key=36d81022-aef0-4340-bd84-b87ec97813de').
			// 		success(function(playerData){
			// 			self.aramPlayers = playerData;
			// 			console.log(self.aramPlayers);
			// 		}).
			// 		error(function(error){
			// 			console.log(error);
			// 		})
				
			// })
	};
	self.team1 = 100;
	self.team2 = 200;
	HeroListFactory()
	.then(function (data){
		self.champs = Object.keys(data.data).map(function (key) {
			var o = data.data[key];
			o.key = key;
			return o;
		});
		console.log("done");
		console.log(self.champs);
	});