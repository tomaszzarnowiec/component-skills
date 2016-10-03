function skillComponentCtrl($scope, $element, $attrs){
	var ctrl = this;

	this.$onInit = function(){
		
	}
};

angular.module("skillsApp")
	.component('skill', {
		templateUrl: 'app/skill/skill.component.html',
		controller: skillComponentCtrl,
		bindings: {
			title: '@',
			percent: '@',
			showPercent: '='
		}
	});