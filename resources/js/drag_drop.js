DragDrop = angular.module('dragDrop', [])

DragDrop.controller('DragDropController', ['$scope', '$timeout', function($scope, $timeout) {

	$scope.data = {
		"images" : [
				"resources/images/image1.jpg",
				"resources/images/image2.jpg",
				"resources/images/image3.jpg",
				"resources/images/image4.jpg",
				"resources/images/image5.jpg",
				"resources/images/image6.jpg",
				"resources/images/image7.jpg",
				"resources/images/image8.jpg"
		]
	};

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

			$("#dvDest img").draggable({});

			$("#dvSource").droppable({
				drop: function (event, ui) {
				if ($("#dvSource img").length == 0) {
				    $("#dvSource").html("");
				    }
				    ui.draggable.addClass("dropped");
					$("#dvSource").append(ui.draggable);
			    } 
			});

			$("#dvDest").droppable({});
		});
	};

	$scope.$watch('data', onDataChange);

}]);