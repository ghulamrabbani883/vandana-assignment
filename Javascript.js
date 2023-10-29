//Reverse string function and return reversed string
const reverseString = (str)=>{
   newStr = "";
   //Iterate from right to left on string and add it to the new string
   const n = str.length;
   for(let i=n-1;i>=0;i--){
        newStr = newStr + str[i];
   }
   return newStr;
}

//Sorting descending using merge sort
const sortDescending = (arr)=>{
    //Base condition
    if(arr.length == 1){
        return arr;
    }
    let s = 0;
    let e = arr.length;
    let mid = s+(e-s)/2;
   
    let leftArray = sortDescending(arr.slice(0,mid))
    let rigthArray = sortDescending(arr.slice(mid,e));
    return mergeArray(leftArray, rigthArray);
}

//mering two array
const mergeArray = (left, right)=>{
    let i=0;
    let j=0;
    let ansArray = new Array();

    while(i< left.length && j< right.length){
        if(left[i] > right[j]){
            ansArray.push(left[i]);
            i++;
        }else{
            ansArray.push(right[j]);
            j++;
        }
    }

    while(i < left.length){
        ansArray.push(left[i]);
        i++;
    }
    while(j < right.length){
        ansArray.push(right[j]);
        j++;
    }
    return ansArray;
}


//Check for reverse
const reverseAns = reverseString("Ghulam Rabbani Ansari");
console.log(reverseAns)

//Check for sorting array
let arr = [6,5,8,12,4,9,3,21,13]
const sortAnswer = sortDescending(arr);
console.log(sortAnswer)




