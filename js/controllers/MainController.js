app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    }
  ];
  $scope.mains=[
    {
      name: 'Pasta',
      description: 'Baked well with parmesan cheese.',
      price: 7.95
    },
    {
      name: 'Burger',
      description: 'Fresh bun with veg patty.',
      price: 9.95
    },
    {
      name: 'Noodles',
      description: 'Flat noodles with soy sauce',
      price: 6.95
    }
  ];
  $scope.extras=[
    {
      name: 'Sauce',
      description: 'Freshly picked tomatoes',
      price: 1.95
    },
    {
      name: 'Mayo',
      description: 'Prepared with cage-free eggs',
      price: 0.95
    },
    {
      name: 'Soup',
      description: 'Includes sweet corn and carrots',
      price: 2.95
    }
  ];

}]);