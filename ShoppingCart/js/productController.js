
  storeApp.directive('ngFile', ['$parse', function ($parse) {
    return {
     restrict: 'A',
     link: function(scope, element, attrs) {
      element.bind('change', function(){
   
       $parse(attrs.ngFile).assign(scope,element[0].files)
       scope.$apply();
      });
     }
    };
   }]);
   
//    storeApp.controller('userCtrl', ['$scope', '$http', function ($scope, $http) {
    
//     console.log('test');
//     $scope.proName = null;
//     $scope.proPrice = null;
//     $scope.proQty = null; 
    

//     $scope.proName_msg = null;
//     $scope.proPrice_msg = null;
//     $scope.proQty_msg = null;
//    // var check = "0";

//     var check = 0;

//     $scope.upload = function(proName,proPrice,proQty){

//      console.log('test');
//         // var data = {
//         //     proName: proName,
            
//         //     };

//          // let formData = new FormData($('#edit-form')[0]);
      
//        //  console.log($scope.uploadfiles.file);

//      var fd=new FormData();

//      var file = "";
//      angular.forEach($scope.uploadfiles,function(file){
//      fd.append('file',file);
    
     
//      //file = file; 

//     //  fd.append('proPrice',proPrice);
//     //  fd.append('proQty',proQty);
     
//     });

//     fd.append('proName', 'test');
//     fd.append('proPrice', 'test2');
//     fd.append('proQty', 'test3');



//   $http.post('http://localhost:8000/api/addPro', fd).then(function (response) {
  
//   console.log('work');
  
//     if (response.data)
  
//     // $scope.proName_msg = null;
//     // $scope.proPrice_msg = null;
//     // $scope.proQty_msg = null;
  
// //  console.log(response.data);

//   $scope.msg = "Post Data Submitted Successfully!";
  
//   }, function (response) {

//   //  console.log(response.data.errors);

//       console.log('test');
 
  
//   });
    
     

    

//    }
    
//    }]);


storeApp.controller('userCtrl', ['$scope', '$http', function ($scope, $http) {
  
  $scope.proName = null;
  $scope.proPrice = null; 
  $scope.proQty = null; 


  $http({
    method: 'get',
    url: 'http://localhost:8000/api/catSearch',
    // data: fd,
    headers: {'Content-Type': undefined},
   }).then(function successCallback(response) { 
    //  clear();
    // Store response data

    $scope.names = response.data;


     console.log(response.data);
   });

 // $scope.names = ["Emil", "Tobias", "Linus"];


  // $scope.proName_msg = null; 
  // $scope.proPrice_msg = null; 
  // $scope.proQty_msg = null; 
  // $scope.img_msg = null;

  var clear = function(){
    $scope.proName_msg = null; 
    $scope.proPrice_msg = null; 
    $scope.proQty_msg = null; 
    $scope.img_msg = null;
  }


  $scope.upload = function(proName,proPrice,proQty){
   var fd=new FormData();



  

   angular.forEach($scope.uploadfiles,function(file){
   fd.append('file',file);
  });

  fd.append('proName',proName);
  fd.append('proPrice',proPrice);
  fd.append('proQty',proQty);

  if($scope.proName==null || $scope.proPrice==null || $scope.proQty==null || $scope.uploadfiles==null){
    console.log('Please fill all empty fields');

   // clear();
    
    if($scope.uploadfiles==null){
      $scope.img_msg = "Please upload the image";
    }else{
      $scope.img_msg = null; 
    }

    if($scope.proName==null){

      $scope.proName_msg = "Enter Product Name"; 

    }else{
      $scope.proName_msg = null; 
    }

    if($scope.proPrice==null){
      $scope.proPrice_msg = "Enter Product Price"
    }else{
      $scope.proPrice_msg = null; 
    }

    if($scope.proQty==null){
      
      $scope.proQty_msg="Enter Product Quantity";
      console.log('qty');
    }else{
      $scope.proQty_msg=null; 
    }

    
  }else{

    $http({
      method: 'post',
      url: 'http://localhost:8000/api/addPro',
      data: fd,
      headers: {'Content-Type': undefined},
     }).then(function successCallback(response) { 
        clear();
      // Store response data
       console.log(response.data);
     });


    //  app.controller('myCtrl', function($scope) {
    //   $scope.names = ["Emil", "Tobias", "Linus"];
    //   });

    // console.log('else');
    // clear();
  //  console.log(response);
  }
 

 }
  
 }]);


   storeApp.controller('validateCtrl', function($scope) {
    $scope.proName = '';
    $scope.proPrice = '';

   // console.log('test');

    $scope.submit = function(){  
       // console.log('test');
    if($scope.proName=='' || $scope.proPrice==''){
        console.log('files empty');
    }else{
        console.log('success');
    }
}

});