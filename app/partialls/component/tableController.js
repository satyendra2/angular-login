/**
 * Created by Amitesh on 5/22/2017.
 */
app.controller('ItemController',function($scope,$http){
     $scope.ObjectIndex='';
       var url = 'app/partialls/component/json/item.json';
    $http.get(url).then(function(response){
        $scope.items = response.data;

    });
    $scope.edit = function(id) {
        //search user and update it
        $scope.ObjectIndex=id;
        $scope.itemObject = angular.copy($scope.items[id]);
        console.log($scope.ObjectIndex);
    };
    $scope.save = function() {
        console.log($scope.ObjectIndex);
        if($scope.items[$scope.ObjectIndex] == null) {
            //if this is new record, add it in users array
            $scope.items.push($scope.itemObject);
            $scope.update = angular.copy.itemObject;
        } else {
            //for existing record, find this record using id
            //and update it.
            $scope.items[$scope.ObjectIndex] = $scope.itemObject;
        }

        //clear the add record form
        $scope.itemObject = {};
        $scope.ObjectIndex = '';
    };
    $scope.deleteItem = function (index) {
        $scope.items.splice( index, 1);
    };

});