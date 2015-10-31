//Function calls a function F on the elements of an array A and returns an array of results.
function solution3(A, F){
    
    var fun = new Function('return' + F)();
    
    for (var i=0; i<A.length; i++){
        
        A[i]=fun(A[i]);
        
    }
    
    return A;
}