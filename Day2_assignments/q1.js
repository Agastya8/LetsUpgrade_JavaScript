//program to search for a particular character in a string

let string = "Edward snowden";

//comparing for n in string
let char='n'

let c=0;

for(let i=0;i<string.length;i++)
{
    if(string[i]==char){
        c++;

    }

}

if(c>0){
    console.log("charachter exist");
}
else{
    console.log("element dosent exist!")
}