angular.module('undefined').run(['$templateCache', function($templateCache) {
    $templateCache.put('home/home.html',
        "<div class=\"main-container\">\n  <div class=\"name\">\n    HAILEY KEEN\n  </div>\n  <img class=\"profile-pic\" src=\"assets/profile_pic_200px.jpg\">\n  <div class=\"icon-container\">\n    <a class=\"icon\" ng-repeat=\"icon in icons\" ng-href=\"{{ icon.url }}\">\n      <img ng-src=\"{{ icon.image }}\">\n    </a>\n  </div>\n  <div class=\"work-container\">\n    <div class=\"work-titles\" ng-repeat=\"work in work\">{{ work.title }}</div>\n  </div>\n</div>\n\n<div class=\"navbar-container\">\n  <span class=\"navbar-titles\" ng-repeat=\"link in navbar\"> {{ link.title }}</span>\n</div>\n\n\n");
}]);