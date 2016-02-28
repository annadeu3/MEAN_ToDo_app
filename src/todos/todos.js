export default function ($scope) {
	let params= {
		createHasInput: false
	};

	$scope.todos = [
		{
			task: 'do dishes',
			isCompleted: false,
			isEditting: false
		},
		{
			task: 'walk the dog',
			isCompleted: true,
			isEditting: false
		}
	];

	$scope.onCompletedClick = function (todo) {
		return todo.isCompleted = !todo.isCompleted;
	};

	$scope.onEditClick = function (todo) {
		return todo.isEditting = true;
	};

	$scope.onCancelClick = todo => {
		return todo.isEditting = false;
	};

	$scope.createTask = function () {
		params.createHasInput = false;
		$scope.createTaskInput = '';
	};

	$scope.updateTask = todo => {
		todo.task = todo.updatedTask;
		todo.isEditting = false;
	};

	// $scope.onDeleteClick = todo => {

	// };

	$scope.$watch('createTaskInput', val => {
		if (!val && params.createHasInput) {
			$scope.todos.pop();
			params.createHasInput = false;
		} else if (val && !params.createHasInput) {
			$scope.todos.push({task: val, isCompleted: false});
			params.createHasInput = true;
		} else if (val && params.createHasInput) {
			$scope.todos[$scope.todos.length - 1].task = val;
		} 
	});
}