angular.module("templates").run(["$templateCache", function($templateCache) {$templateCache.put("main/main.html","<div ui-view></div>");
$templateCache.put("main/home/home.html","<div layout=\"column\" layout-align=\"center center\" class=\"main-container\">\n  <div class=\"name\">HAILEY KEEN</div>\n  <img class=\"profile-pic\" src=\"assets/profile_pic_200px.jpg\">\n  <div class=\"icon-container\">\n    <a class=\"icon\" ng-repeat=\"icon in icons\" ng-href=\"{{ icon.url }}\">\n      <img ng-src=\"{{ icon.image }}\">\n    </a>\n  </div>\n  <div layout=\"row\" layout-align=\"center center\" class=\"work-container\">\n    <div\n        class=\"work-titles\"\n        ng-repeat=\"workSection in workSections\"\n        ng-click=\"goToState(workSection.state)\">{{ workSection.title }}\n    </div>\n  </div>\n</div>\n\n\n\n");
$templateCache.put("main/projects/projects.html","Hi there\n");}]);