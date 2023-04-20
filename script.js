function threeSum(arr, target) {
// write your code here
	let diff = Number.MAX_VALUE;
	for(let i=0; i<arr.length-2; i++){
		for(let j=i+1; j<arr.length-1; j++){
			for(let k=j+1; k<arr.length; k++){
				let sum = arr[i]+arr[j]+arr[k]
				if( Math.abs(sum - target) < diff){
					diff = sum;
				}
			}
		}
	}
	return diff;
  
}

module.exports = threeSum;
