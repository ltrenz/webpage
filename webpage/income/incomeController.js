scotchApp.controller('incomeController', function($scope) {
    
    /*generate reciept button*/
          $scope.payTable=false;
            $scope.genRec=true;
        $scope.showRec= function() {
            $scope.payTable=!$scope.payTable;
            $scope.genRec=!$scope.genRec;
        };
    
    
 $scope.total = function() { 
    return $scope.pay * $scope.hours;
   };

	$scope.taxTotal = function () { 
   return $scope.total() * $scope.tax;
  };
        
  $scope.afterTaxTotal = function () { 
      return $scope.total() - $scope.taxTotal();
  };
    
   
    
/*paycheck button*/
       $scope.showPay=true;
        $scope.payInput=true;
        $scope.addPay= function() {
            $scope.showPay=!$scope.showPay;
            $scope.payInput=!$scope.payInput;
        };
        
        
 /*expenses button*/
    
        $scope.expenses=[]
    $scope.addExpense=function() {
        $scope.expenses.push({expenseMemo: ' ', expenseAmount:''});
    };
    
    
    $scope.totalExpenses = function(){
 var total = 0;
 for(var i = 0; i < $scope.expenses.length; i++){
   //make sure input is a number
   var amount = parseFloat($scope.expenses[i].expenseAmount);
   //if it is a number add it to total
   if(!isNaN(amount)){
     total += amount;
   }
 }
return total;
};
    
    
$scope.netIncome= function() {
        return $scope.afterTaxTotal ()  - $scope.totalExpenses()
    };

    
    
  /*vairables */                
  $scope.pay;
  $scope.hours;
  $scope.tax;
  



          
      

});