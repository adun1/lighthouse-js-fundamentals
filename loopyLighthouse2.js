function loopyLighthouse(range, multiples, words)
{
  const start = 0;
  const end = 1;
  for(let i = range[start]; i <= range[end]; i++)
  {
    if((i % multiples[0] === 0) && (i % multiples[1] === 0))
      console.log(words[0] + words[1]);
    else if(i % multiples[0] === 0)
      console.log(words[0]);
    else if(i % multiples[1] === 0)
      console.log(words[1]);
    else
      console.log(i);
  }  
}
//loopyLighthouse([15,90],[2,5],["Batty", "Beacon"]);