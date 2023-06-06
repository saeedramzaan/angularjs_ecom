var myUploadApp =  angular.module('myUploadApp',[]);
// Here we write a custom service for upload file to reuse it in the controller
storeApp.service('calluploadFile', ['$http', function ($http) {
	this.uploadFiletoServer = function(file, uploadUrl){
		 var fdUpload = new FormData();
		 fdUpload.append('file', file);
		 $http.post(uploadUrl, fdUpload, {
			 transformRequest: angular.identity,
			 headers: {'Content-Type': undefined,'Process-Data': false}
		 })
		 .success(function(datas){
			alert(datas);
		 })
		 .error(function(){
			alert("Error in ajax call");
		 });
	 }
 }]);
storeApp.controller('ImageUploadController',  ['$scope', 'calluploadFile', function($scope, calluploadFile){
  $scope.calluploadFile = function() {
	  $scope.myUplodeFile = $scope.files[0];
	 var files = $scope.myUplodeFile; 
	var uri = "http://localhost:8000/api/addPro";
	calluploadFile.uploadFiletoServer(files, uri);
  };
$scope.uploadedFile = function(element) {
	var readers = new FileReader();
	readers.onload = function(event) {
	 $scope.$apply(function($scope) {
		$scope.files = element.files;
		 $scope.uri = event.target.result  
	 });
	}
	readers.readAsDataURL(element.files[0]);
  }
}]);