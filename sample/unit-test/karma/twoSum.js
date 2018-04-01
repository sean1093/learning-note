var twoSum = function(nums, target) {
    for(var i = 0; i < nums.length; i++){  	
        for(var j = i+1; j < nums.length; j++){
            var sum = nums[i] + nums[j];
            if(sum == target){
                var ansArray = [];
                ansArray.push(i);
                ansArray.push(j);
                return ansArray;
                // return null;
            }  			
        }
    }
};