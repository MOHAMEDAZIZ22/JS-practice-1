var a=prompt("Enter The prime range");
for(var i=1;i<=a;i++)
{
if(i%2!=0 && i%3!=0 && i%5!=0 && i%7!=0){

console.log(i,"its prime number");
}
else if (i==2 || i==3 || i==5 || i==7)
{
console.log(i,"its prime number")
}
}