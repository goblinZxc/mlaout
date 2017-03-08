var data=[{
    id:1,src:'images/designer.png',keyword:'黑鸭子',name:'vis 特殊排版',little_title:'designer',title:'日本平面设计大师-原研哉/ Kenya',job:'专栏 - 设计师',article:'4622',like:'2188'
},{
    id:2,src:'images/designer.png',keyword:'TX薇薇',name:'海报设计',little_title:'designer',title:'德国设计师康斯坦丁·格里奇',job:'专栏 - 设计师',article:'4622',like:'2188'
},{
    id:3,src:'images/designer.png',keyword:'牛魔王',name:'原研哉作品',little_title:'designer',title:'香港著名十佳设计师-张天爱',job:'专栏 - 设计师',article:'422',like:'2188'
},{
    id:4,src:'images/designer.png',keyword:'罗子雄',name:'BANNER',little_title:'designer',title:'香港著名十佳设计师-张天爱',job:'专栏 - 设计师',article:'422',like:'2188'
},{
    id:5,src:'images/designer.png',keyword:'冈特.蓝堡',name:'唐纳德-诺曼',little_title:'designer',title:'香港著名十佳设计师-张天爱',job:'专栏 - 设计师',article:'422',like:'2188'
},{
    id:6,src:'images/designer.png',keyword:'田中一光',name:'无良印品',little_title:'designer',title:'香港著名十佳设计师-张天爱',job:'专栏 - 设计师',article:'422',like:'2188'
},{
    id:7,src:'images/designer.png',keyword:'TNADE',name:'画册',little_title:'designer',title:'香港著名十佳设计师-张天爱',job:'专栏 - 设计师',article:'422',like:'2188'
}];
var app= angular.module('kx_app',['ngRoute']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/search_pages',{templateUrl:'search_pages.html'})
        .when('/search_result/:id',{templateUrl:'search_result.html'})
        .when('/designer_result',{templateUrl:'designer_result.html'})
}]);
app.controller('kx_ctrl',function ($scope) {
    $scope.data=data;
});
app.directive('designer',function () {
    return{
        scope:{
            data:"=data"
        },
        templateUrl:"tpl/kx_item.html"
    }
});

