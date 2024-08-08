let number=0;
for(let i= 1 ; i<=100; i++)
{
    number=i+number;
}
function outputofsum() {
    document.getElementById("output").innerHTML = `${number} `;
  }