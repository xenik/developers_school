var resultArray = [];
/*
$("button").click(function() {
	var value = $(this).attr("value");
	resultArray.push(value);
	$("input").attr("value", resultArray.join(""));
});
*/


$(".one").click(function() {
	var value = $(".one").attr("value");
	resultArray.push(value);
	$("input").attr("value", resultArray.join(""));
});

$(".two").click(function() {
	var value = $(".two").attr("value");
	resultArray.push(value);
	$("input").attr("value", resultArray.join(""));
});

$(".three").click(function() {
	var value = $(".three").attr("value");
	resultArray.push(value);
	$("input").attr("value", resultArray.join(""));
});

$(".four").click(function() {
	var value = $(".four").attr("value");
	resultArray.push(value);
	$("input").attr("value", resultArray.join(""));
});

$(".five").click(function() {
	var value = $(".five").attr("value");
	resultArray.push(value);
	$("input").attr("value", resultArray.join(""));
});

$(".six").click(function() {
	var value = $(".six").attr("value");
	resultArray.push(value);
	$("input").attr("value", resultArray.join(""));
});

$(".seven").click(function() {
	var value = $(".seven").attr("value");
	resultArray.push(value);
	$("input").attr("value", resultArray.join(""));
});

$(".eight").click(function() {
	var value = $(".eight").attr("value");
	resultArray.push(value);
	$("input").attr("value", resultArray.join(""));
});

$(".nine").click(function() {
	var value = $(".nine").attr("value");
	resultArray.push(value);
	$("input").attr("value", resultArray.join(""));
});

$(".zero").click(function() {
	var value = $(".zero").attr("value");
	resultArray.push(value);
	$("input").attr("value", resultArray.join(""));
});

$(".plus").click(function() {
	var value = $(".plus").attr("value");
	if (resultArray.length !== 0 
		&& resultArray[resultArray.length - 1] !== "+"
		&& resultArray[resultArray.length - 1] !== "-"
		&& resultArray[resultArray.length - 1] !== "*"
		&& resultArray[resultArray.length - 1] !== "/"
		&& resultArray[resultArray.length - 1] !== "(") {
	 	resultArray.push(value);
	};
	$("input").attr("value", resultArray.join(""));
});

$(".minus").click(function() {
	var value = $(".minus").attr("value");
	if (resultArray[resultArray.length - 1] !== "+"
		&& resultArray[resultArray.length - 1] !== "-"
		&& resultArray[resultArray.length - 1] !== "*"
		&& resultArray[resultArray.length - 1] !== "/") {
	 	resultArray.push(value);
	};
	$("input").attr("value", resultArray.join(""));
});

$(".multiplication").click(function() {
	var value = "*";
	if (resultArray.length !== 0 
		&& resultArray[resultArray.length - 1] !== "+"
		&& resultArray[resultArray.length - 1] !== "-"
		&& resultArray[resultArray.length - 1] !== "*"
		&& resultArray[resultArray.length - 1] !== "/"
		&& resultArray[resultArray.length - 1] !== "(") {
	 	resultArray.push(value);
	};
	$("input").attr("value", resultArray.join(""));
});

$(".division").click(function() {
	var value = $(".division").attr("value");
	if (resultArray.length !== 0 
		&& resultArray[resultArray.length - 1] !== "+"
		&& resultArray[resultArray.length - 1] !== "-"
		&& resultArray[resultArray.length - 1] !== "*"
		&& resultArray[resultArray.length - 1] !== "/"
		&& resultArray[resultArray.length - 1] !== "(") {
	 	resultArray.push(value);
	};
	$("input").attr("value", resultArray.join(""));
});

$(".point").click(function() {
	var value = $(".point").attr("value");
	if (resultArray.length == 0 || isNaN(resultArray[resultArray.length - 1])) {
		resultArray.push("0" + value);
	} else { resultArray.push(value);
	};
	$("input").attr("value", resultArray.join(""));
});

$(".clear").click(function() {
	resultArray = [];
	$("input").attr("value", resultArray.join(""));
});

$(".delete").click(function() {
	resultArray.pop();
	$("input").attr("value", resultArray.join(""));
});

$(".bracket").click(function() {
	if (resultArray.length !== 0 
		&& resultArray[resultArray.length - 1] !== "+"
		&& resultArray[resultArray.length - 1] !== "-"
		&& resultArray[resultArray.length - 1] !== "*"
		&& resultArray[resultArray.length - 1] !== "/"
		&& resultArray[resultArray.length - 1] !== "(") {
		resultArray.push(")");
	} else {resultArray.push("(");
	};
	$("input").attr("value", resultArray.join(""));
});

$(".equally").click(function() {
	var result = resultArray.join("");
	$("input").attr("value", eval(result));
	resultArray = [];
});