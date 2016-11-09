var listOfTasks = [];

var codes = {
	"active": "#active",
	"complete": "#complete"
};

var addTask = function() {
	var id = new Date().getTime();
	var newTask = {
		content: $("input").val(), 
		status: "active",
		id: id
	};
	return newTask;
};

var createNewTask = function(param) {
	var selector = codes[param.status] + ", #all",			
			$newTask = $(selector),
			taskId = "task-",
			sel = "#" + taskId + param.id + " .content-task",
			$task;

	$task = $('<div>', {
		"class" : "row newTask",
		"id" : taskId + param.id,
		"data-id" : param.id
	}).appendTo($newTask);

	$('<div class="col-lg-2 col-md-2"><button type="button" class="btn btn-info btn-sm" id="button-complete"><span class="glyphicon glyphicon-ok"></span></button></div><div class="col-lg-8 col-md-8 content-task"></div><div class="col-lg-2 col-md-2"><button type="button" class="btn btn-danger btn-sm" id="button-delete"><span class="glyphicon glyphicon-remove"></span></button></div>').appendTo($task);

	$(sel).text(param.content);

	$("input").val("");
};


$("input").keypress(function(event) {
	if (event.keyCode == 13) {
		createNewTask(addTask());		
	return false;
	};
});

$("#button-complete").click(function(event) {
	var clicked = $(event.target),
			currentTask = $(clicked).parents(".newTask").attr("id"),
			searchSel = "#" + currentTask + " .content-task";
	$(searchSel).css({
		'color' : '#A9E89F',
		'text-decoration' : 'line-through'
	});
});

$("button.all").click(function(event) {
	$("#all").css('display', 'block');
	$("#active").css('display', 'none');
	$("#complete").css('display', 'none');
});

$("button.active").click(function(event) {
	$("#all").css('display', 'none');
	$("#active").css('display', 'block');
	$("#complete").css('display', 'none');
});

$("button.complete").click(function(event) {
	$("#all").css('display', 'none');
	$("#active").css('display', 'none');
	$("#complete").css('display', 'block');
});