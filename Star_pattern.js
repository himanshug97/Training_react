//1.Left triangle star pattern

let n=5;
let string1="";

for(let i=1;i<=n;i++){

    for(let j=0;j<i;j++){

        string1+="*";
    }
string1+="\n"
}
console.log(string1)


//2.right triangle pattern
let h = 5;
let string2 = "";
for (let i = 1; i <= h; i++) {

  for (let j = 0; j < h - i; j++) {
    string2 += " ";
  }
 
  for (let k = 0; k < i; k++) {
    string2 += "*";
  }
  string2 += "\n";
}
console.log(string2);


//3.downward triangle star
let v=5;
let string3="";
for(let i=0;i<v;i++){

    for(let j=0;j<v-i;j++){

        string3+="*";
    }
      string3+="\n";
}
console.log(string3)

//4.Right pascal pattern

let i,j,k,l;
let string4="";
for(let i=1;i<=4;i++){
    for(let j=1;j<=i;j++){
        string4+="*";
    }
    string4 +="\n";
}
for(let k=1;k<=4;k++){
    for(let l=3;l>=k;l--)
    {
        string4+="*";
    }
    string4 +="\n"
}
console.log(string4)


//5.number print pattern
let str="";
for(let i=1;i<=5;i++){
    for(let j=i;j>=1;j--){
        str+=j;
    }
    str+="\n";
}
console.log(str)

//with function
function pattern(){
    let p=5
    let str1="";
    for(let i=1;i<p;i++){
        for(let j=1;j<i;j++){
            str1+="*";
            console.log(str1)
        }
    }
}
pattern()

//6.Pyramid pattern
let str2="";
for(let i=1;i<=4;i++){
    for(let j=4;j>=i;j--){
        str2+=" ";
    }
    for(let k=1;k<=i;k++){
        str2+="*";
    }
    for(let l=2;l<=i;l++){
        str2+="*"
    }
    str2+="\n"
}
console.log(str2)

//7. Reversed Pyramid

let y=5;
let str3="";
for(i=0;i<y;i++){
    for(j=0;j<i;j++){
        str3+=" ";
    }
    for(k=0;k<2*(y-i)-1;k++){
        str3+="*";
    }
    str3+="\n";
}
console.log(str3)


//8.Hollow square patterm

let t = 5;
let string6 = "";

for(let i = 0; i < t; i++) { 
  for(let j = 0; j < t; j++) { 
    if(i === 0 || i === t - 1) {
      string6 += "*";
    }
    else 
      if(j === 0 || j === t - 1) {
        string6 += "*";
      }
      else {
        string6 += " ";
      }
    
  }

  string6 += "\n";
}
console.log(string6);

//9.Square pattern
let w=5;
let str5="";
for(i=0;i<w;i++){
    for(j=0;j<w;j++){
        str5+="*";

    }
    str5+="\n";
}
console.log(str5)

//10.left pascal pattern

let p = 5;
let string8 = "";
for (let i=1; i<=p; i++) {

  for (let j=0;j<p-i;j++) {
    string8 += " "; 
  }
 
  for (let k=0;k<i; k++) {
    string8 += "*";
  }
  string8 += "\n";
}
for(let i=1; i<=p-1; i++){
    for(j=0; j<i; j++){
        string8+=" ";
    }
    for(k=0;k<p-i;k++){
        string8+="*";
    }
    string8+="\n";
}
console.log(string8)