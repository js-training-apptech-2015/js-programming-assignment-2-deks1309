//Function returns a boolean indicating if the string is bracket balanced
function solution2(S) {

	var stack = [];
	var brackets = { ']': '[', '}': '{', ')': '(' };

	for (var i = 0; i < S.length; i++) {

		var str = S[i];

		if (str.search(/\[|\{|\(|\"/) == 0) {

			stack.push(str);

		} else if (stack.length != 0 && str.search(/\]|\}|\)/) == 0 && stack[stack.length-1] == brackets[str]) {
			stack.pop();
		}
	}
	
	if (stack.length == 0) {
		return true;
	} else {
		return false;
	}
	
}