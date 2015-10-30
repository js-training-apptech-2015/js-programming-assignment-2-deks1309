//Function returns a minimal positive integer not present in the array A.
function solution1(A) {

	A = A.sort();
	var min = 1;

	for (var i = 0; i < A.length; i++) {

		if (A[i] > 0) {
			if (A[i] > min) {
				return min;
			}
			else {
				min++;
			}
		}
	}
	return min;
}