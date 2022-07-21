let rev=0;
let n=123;
let a;
while(n!=0)
{
   a=n%10;
   rev=rev*10+a;
   n=Math.floor(n/10);
}
console.log('rev number',rev)