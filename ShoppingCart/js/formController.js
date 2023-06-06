
storeApp.controller('postserviceCtrl', function ($scope, $http) {
  
    $scope.username = null;
    $scope.email = null;
    $scope.password = null;
    $scope.lblMsg = null;

    $scope.postdata = function (username, email, password) {

    var data = {
    username: username,
    email: email,
    password: password 
    };
    
    //Call the services
    $http.post('http://localhost:8000/api/regUser', JSON.stringify(data)).then(function (response) {
    
    
      if (response.data)
    
      $scope.user_msg = null;
      $scope.email_msg = null;
      $scope.password_msg = null;
    
    console.log(response.data);

    $scope.msg = "Post Data Submitted Successfully!";
    
    }, function (response) {
    
      
      if (response.data.errors.username) {
    
        $scope.user_msg = response.data.errors.username[0];
    
      }else{
    
        $scope.user_msg = null;
    
      }
    
      if (response.data.errors.email) {
    
       $scope.email_msg = response.data.errors.email.toString();
    
      }else{
    
      $scope.email = null;
    
      }
    
      if(response.data.errors.password){
        $scope.password_msg = response.data.errors.password['0'];
      }else{
        $scope.password_msg = null;
      }
    
      // $scope.email_msg = response.data.errors.email[0];
      // $scope.password_msg = response.data.errors.password[0];
    
      // console.log(response.data.errors);
    
    $scope.msg = "Service not Exists";
    $scope.statusval = response.status;
    $scope.statustext = response.statusText;
    $scope.headers = response.headers();
    
    });
    
    };
    });



storeApp.controller('productCtrl', function ($scope, $http) {
  $scope.proName = null;
  $scope.proPrice = null;
  $scope.proQty = null;
 
  $scope.proName_msg = null;
  $scope.proPrice_msg = null; 
  $scope.proQty_msg = null; 

  $scope.imageSrc = null;
  $scope.fileList = null; 

  $scope.$on("fileProgress", function(e, progress) {
    $scope.progress = progress.loaded / progress.total;
  });
    


  $scope.postdata = function (proName,proPrice,proQty,fileList) {

  var data = {
  proName: proName,
  proPrice: proPrice,
  proQty: proQty, 
  fileList:fileList,
  };

  
  
  //Call the services
  $http.post('http://localhost:8000/api/addPro', JSON.stringify(data)).then(function (response) {
  
  
    if (response.data)
  
    $scope.proName_msg = null;
    $scope.proPrice_msg = null;
    $scope.proQty_msg = null;
  
 // console.log(response.data);

    console.log('Hey lock');

  $scope.msg = "Post Data Submitted Successfully!";
  
  }, function (response) {

  //  console.log(response.data.errors);

     console.log('success');


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
      $scope.proQty_msg = "Enter Product Quantity"
    }else{
      $scope.proQty_msg = null; 
    }
  
    
    // if (response.data.errors.ProName) {
  
    //   $scope.proName_msg = response.data.errors.ProName[0];
  
    // }else{
  
    //   $scope.proName_msg = null;
  
    // }
  
    // if (response.data.errors.ProPrice) {
  
    //  $scope.proPrice_msg = response.data.errors.ProPrice.toString();
  
    // }else{
  
    // $scope.proPrice_msg = null;
  
    // }
  
    // if(response.data.errors.ProQty){
    //   $scope.proQty_msg = response.data.errors.ProQty['0'];
    // }else{
    //   $scope.proQty_msg = null;
    // }
  
    // $scope.email_msg = response.data.errors.email[0];
    // $scope.password_msg = response.data.errors.password[0];
  
    // console.log(response.data.errors);
  
  // $scope.msg = "Service not Exists";
  // $scope.statusval = response.status;
  // $scope.statustext = response.statusText;
  // $scope.headers = response.headers();
  
  });
  
  };
  
  });



  storeApp.controller('studentController', function($scope) {  

    $scope.reset = function(){  
       $scope.firstName = null;  
       $scope.lastName = "Jaiswal";  
       $scope.email = "sonoojaiswal@javatpoint.com";  

       if($scope.firstName==null){
        console.log('test');
       }else{
        console.log("test else");
       }
    }  

    $scope.submit = function(){ 

     // $scope.firstName = null;  
    //  $scope.lastName = "Jaiswal";  
      $scope.email = "sonoojaiswal@javatpoint.com";  



      if($scope.last_Name){
       console.log('last name is found');
      }else{
       console.log("last name is empty");
      }

      if($scope.first_name){
        console.log('first name is found');
       }else{
        console.log("first name empty");
       }
   }  

   //  $scope.reset();  
 });  

 storeApp.controller('formCtrl', function ($scope) {
  $scope.fname = "test";
  $scope.sendForm = function () {
    
  $scope.msg = "Form Validated";
  };
  }); 
