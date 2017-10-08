//star triangle
const lines = function (n){
  if (n<=0){
  return '';  
  }
return lines(n-1) + '*';
};
const spaces = function(n){
  if (n<=0){
  return '';  
  }
  return spaces(n-1) + ' '; 
};

const drawTrinagle = function(n){
  const f = function (a){
    if ( a<=0){
    return '';
  }
   console.log(spaces(n-a) + lines(2*a-1));
   return f(a-1);
  };
return f(n);
};
//drawTrinagle(5);


//x^n
const f = function (base, n){
if(n === 0){
    return 1;
  }
  else if (n <= 0 || base <= 1){
    return ''; 
  }
  if(base>1){
  return base*f(base, n-1);
}
};
//console.log(f(4, 2));

//reverse function 
const rev = function (str,a){
  if(a<=0){
    return "";
  }
  return str[a-1]+ rev(str, a-1);
};
const r = function (str){
const r1=str.length;

return rev(str,r1);
};
//console.log(r("abcd"));


//* * * 
// * * *
const f = function (a){
if ( a <= 0){
  return '';
}
return ' *' + f(a-1);
};
const f1 = function (b){
  if (b <= 0){
    return '';
  }
return '* ' + f1(b-1);
};
const f2 = function (z,x,y){  //z- togheri qanak
  if(z<=0){
    return '';
  }
if ( x%2 !== 0){
  console.log(f(y));
}
else{
  console.log(f1(y));
}
f2(z-1,x-1,y);
};
const sum=function(k){
  if(k%2 !==0){
    console.log(f1(k));
      return f2(k-1,k,k);
  }
  else{
return f2(k,k,k);
  }
};
//console.log(sum(12));