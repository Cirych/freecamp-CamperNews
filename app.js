angular.module('CamperNews', ['ngMaterial'])
.controller('AppCtrl', ['$scope','$http',function($scope,$http) {
  this.Tiles = (function() {
    var tiles = [];
	var tmp=0;
	$http.get('http://www.freecodecamp.com/news/hot').success(function(data){
		data.forEach(function(item){
			tiles.push({
			title: item.headline,
			poster: item.image||item.author.picture,
			meta: item.metaDescription,
			link: item.link,
			storylink: 'http://www.freecodecamp.com/news/'+item.storyLink.replace(/\s+/g, '-').toLowerCase(),
			upvotes: item.upVotes.length,
			colspan: setColSpan(item.upVotes.length), //width
			rowspan: setRowSpan(item.metaDescription.length),	//height
			});
		});
	});
	
    return tiles;
  })();
  
function setColSpan(data) {
	return data>30?3:data>20?2:1;
};
function setRowSpan(data) {
	return data>100?3:data>50?2:1;
};

}]);