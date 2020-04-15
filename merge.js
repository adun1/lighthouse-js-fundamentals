function merge(arr1, arr2)
{
  //console.log(arr1.length);
  //console.log(arr2.length);
  let newArr = [];
	
  //current indicies for both arrays
  let i = 0;
  let j = 0;
  //loop through both sorted arrays choosing the smallest item to add to the returned list
  while((i < arr1.length) && (j < arr2.length))
  {
    if(arr1[i] <= arr2[j])
    {
      newArr.push(arr1[i]);
      i++
    }			
    else
    {
      newArr.push(arr2[j]);
      j++;
    }	
  }
  //add the remaining items to the the new merged array
  while(i < arr1.length)
  {
    newArr.push(arr1[i]);
    i++;
  }
  while(j < arr2.length)
  {
    newArr.push(arr2[j]);
    j++;
  }
  return newArr;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
