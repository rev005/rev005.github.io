app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Manga'; 
  $scope.chapter = 'Chapter pages';

  $scope.plusOne = function(index) { 
    $scope.products[index].likes += 1; 
  };

  $scope.products =
  [
    {page: 'http://img.mangastream.com/cdn/manga/23/2825/01.jpg', desc: 'Image 01'},
    {page: 'http://img.mangastream.com/cdn/manga/23/2825/01a.jpg', desc: 'Image 01'},
    {page: 'http://img.mangastream.com/cdn/manga/23/2825/02.png', desc: 'Image 01'},
    {page: 'http://img.mangastream.com/cdn/manga/23/2825/03.png', desc: 'Image 01'},
    {page: 'http://img.mangastream.com/cdn/manga/23/2825/04.png', desc: 'Image 01'},
    {page: 'http://img.mangastream.com/cdn/manga/23/2825/05.png', desc: 'Image 01'},
    {page: 'http://img.mangastream.com/cdn/manga/23/2825/06.png', desc: 'Image 01'},
    {page: 'http://img.mangastream.com/cdn/manga/23/2825/07.png', desc: 'Image 01'},
    {page: 'http://img.mangastream.com/cdn/manga/23/2825/08.png', desc: 'Image 01'},
    {page: 'http://img.mangastream.com/cdn/manga/23/2825/09.png', desc: 'Image 01'},
    {page: 'http://img.mangastream.com/cdn/manga/23/2825/10.png', desc: 'Image 01'},
    {page: 'http://img.mangastream.com/cdn/manga/23/2825/11.png', desc: 'Image 01'},
    {page: 'http://img.mangastream.com/cdn/manga/23/2825/12.png', desc: 'Image 01'},
    {page: 'http://img.mangastream.com/cdn/manga/23/2825/13.png', desc: 'Image 01'},
    {page: 'http://img.mangastream.com/cdn/manga/23/2825/14.png', desc: 'Image 01'},
    {page: 'http://img.mangastream.com/cdn/manga/23/2825/15.png', desc: 'Image 01'},
    {page: 'http://img.mangastream.com/cdn/manga/23/2825/16.png', desc: 'Image 01'},
    {page: 'http://img.mangastream.com/cdn/manga/23/2825/17.png', desc: 'Image 01'},
    {page: 'http://img.mangastream.com/cdn/manga/23/2825/18.png', desc: 'Image 01'},
    {page: 'http://img.mangastream.com/cdn/manga/23/2825/19.png', desc: 'Image 01'},
    {page: 'http://img.mangastream.com/cdn/manga/23/2825/20.png', desc: 'Image 01'},
    {page: 'http://img.mangastream.com/cdn/manga/23/2825/21.png', desc: 'Image 01'},
    {page: 'http://img.mangastream.com/cdn/manga/23/2825/22.png', desc: 'Image 01'},
    {page: 'http://img.mangastream.com/cdn/manga/23/2825/23.png', desc: 'Image 01'},
    {page: 'http://img.mangastream.com/cdn/manga/23/2825/24.png', desc: 'Image 01'},
    {page: 'http://img.mangastream.com/cdn/manga/23/2825/25.png', desc: 'Image 01'},
    {page: 'http://img.mangastream.com/cdn/manga/23/2825/26.png', desc: 'Image 01'},
    {page: 'http://img.mangastream.com/cdn/manga/23/2825/27.png', desc: 'Image 01'},
    {page: 'http://img.mangastream.com/cdn/manga/23/2825/28.png', desc: 'Image 01'},
    {page: 'http://img.mangastream.com/cdn/manga/23/2825/29.png', desc: 'Image 01'},
    {page: 'http://img.mangastream.com/cdn/manga/23/2825/30.png', desc: 'Image 01'},
    {page: 'http://img.mangastream.com/cdn/manga/23/2825/31-32.png', desc: 'Image 01'},
    {page: 'http://img.mangastream.com/cdn/manga/23/2825/33.png', desc: 'Image 01'},
    {page: 'http://img.mangastream.com/cdn/manga/23/2825/34.png', desc: 'Image 01'},
    {page: 'http://img.mangastream.com/cdn/manga/23/2825/35.png', desc: 'Image 01'},
    {page: 'http://img.mangastream.com/cdn/manga/23/2825/36.png', desc: 'Image 01'},
  ];

  $scope.mangas = [

    '02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31-32','33','34','35','36'
  ];


   
      // initial image index
      $scope._Index = 0;
   
      // if a current image is the same as requested image
      $scope.isActive = function (index) {
          return $scope._Index === index;
      };
   
      // show prev image
      $scope.showPrev = function () {
          $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.products.length - 1;
      };
   
      // show next image
      $scope.showNext = function () {
          $scope._Index = ($scope._Index < $scope.products.length - 1) ? ++$scope._Index : 0;
      };
   
      // show a certain image
      $scope.showPhoto = function (index) {
          $scope._Index = index;
      };


}]);
