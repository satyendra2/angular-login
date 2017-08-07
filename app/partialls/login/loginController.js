/**
 * Created by Amitesh on 5/22/2017.
 */
app.controller('LoginController', function($scope, $rootScope, $stateParams, $state, LoginService) {
    $rootScope.title = "Login Page";

    $scope.formSubmit = function() {
        if(LoginService.login($scope.username, $scope.password)) {
            $scope.error = '';
            $scope.username = '';
            $scope.password = '';
            $state.transitionTo('home');
        } else {
            $scope.error = "Incorrect username/password !";
        }
    };

});
