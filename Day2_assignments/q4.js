let avengers=['thor','blackwidow','ironman','spiderman','hawkeye','cap','hulk'];
let c=0;
for(let i=0;i<avengers.length;i++)
{
    for(let j=0;j<i.length;j++)
    {
        if(i[j]=='a')
        {
            console.log(i);
            c++;
        }
    }
}

if(c==0)
{
    console.log("No element with an A in it");
}
