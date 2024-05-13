function stringChop(str, size) 
{
  // your code here
	if(str===null)
	{
		return [];
	}
	let arr=[];
	let n=str.length;

	let i=0;

	while(i<n)
		{
			if(i+size<n)
			{
				arr.push(str.substring(i,i+size));
			}
			else
			{
				arr.push(str.substring(i,n));
				break;
			}
			i=i+size;
		}
	return arr;
}

//Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));
