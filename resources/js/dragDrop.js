var myApp = angular
				.module('dragDrop', []) // Setter

myApp.controller('DragDropController', ['$scope', '$timeout', dragDropController]);

function dragDropController($scope, $timeout) {

	$scope.data = [
		{
			"Type" : "Sofa",
			"products" : [
						"resources/images/image3.jpg",
						"resources/images/image4.jpg",
						]
		},
		{
			"Type" : "Chair",
			"products" : [
						"resources/images/products/chairs/image5.jpg",
						"resources/images/products/chairs/image6.jpg",
						"resources/images/products/chairs/chair.jpg",
						"resources/images/products/chairs/woodenChair.jpg",
						]
		},
		{
			"Type" : "Window",
			"products" : [
						"resources/images/image7.jpg",
						"resources/images/image8.jpg"
						]
		},
		{
			"Type" : "Table",
			"products" : [
						"resources/images/image1.jpg",
						"resources/images/image2.jpg",
					]
		},
		];

	var onDataChange = function() {
		$timeout(function() {
			$("#dvSource img").draggable({
		        revert: "invalid",
		        refreshPositions: true,
		        drag: function (event, ui) {
		            ui.helper.addClass("draggable");
		        },
		        stop: function (event, ui) {
		            ui.helper.removeClass("draggable");
		            var image = this.src.split("/")[this.src.split("/").length - 1];
		        }
		    });

			$("#dvDest img").draggable({
				drag: function (event, ui) {
		        },
			});

			$("#dvSource").droppable({
				drop: function (event, ui) {
				if ($("#dvSource img").length == 0) {
				    $("#dvSource").html("");
				    }
				    ui.draggable.addClass("dropped");
					$("#dvSource").append(ui.draggable);
			    } 
			});

			$("#dvDest").droppable({
				drop: function (event, ui) {
					var element = window.event.target;
					$(element).resizable({
						start: function( event, ui ) {
						},
						stop: function( event, ui ) {
							$(element).resizable("destroy");
						}
					});
			    } 
			});
		},1000);
	};

	$scope.$watch('data.selectedOption', function(old,newv){
		onDataChange();
	},true);

}
myApp.controller('SelectRoomController', ['$scope', selectRoomController]);

function selectRoomController($scope){
	$scope.rooms = [
			{
				"Type": "Drawing Room",
				"images":[
						"resources/images/rooms/drawingRoom/image1.jpg",
						"resources/images/rooms/drawingRoom/image2.jpg",
						"resources/images/rooms/drawingRoom/image3.jpg",
						"resources/images/rooms/drawingRoom/image4.jpg"
						]
			},
			{
				"Type": "Kitchen",
				"images":[
						"resources/images/rooms/kitchen/image1.jpg",
						"resources/images/rooms/kitchen/image2.jpg",
						"resources/images/rooms/kitchen/image3.jpg",
						"resources/images/rooms/kitchen/image4.jpg"
						]
			},
			{
				"Type": "BedRoom",
				"images":[
						"resources/images/rooms/bedRoom/image1.jpg",
						"resources/images/rooms/bedRoom/image2.jpg",
						"resources/images/rooms/bedRoom/image3.jpg",
						"resources/images/rooms/bedRoom/image4.jpg"
				]
			}
		];
		$scope.changeBackground = function($event){
			var myElement = angular.element($('#dvDest'));
			var sourceImage = $event.currentTarget.currentSrc;
			myElement.css({'background-image':'url(' + sourceImage +')',
							'background-size' : 'cover'
						  });
			}
}