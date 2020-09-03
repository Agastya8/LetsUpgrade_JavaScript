let avengers = ['thor', 'blackwidow', 'ironman', 'spiderman', 'hawkeye', 'cap', 'hulk'];
let wanted='cap';
let c=0;
for(let i=0;i<avengers.length;i++)
{
    if(avengers[i]==wanted)
    {
      c++;  
    }
    
}

if (c > 0) {
    console.log("match Found");;
}
else {
    console.log("match not Found");
}