var i = 0,
    flag,
    j;

while (i <= 100) {
  j = 2;
  flag = false;
  if (i > 1) {
    if (i == 2) {
      console.log(i)
    } else {
      while (j < i) {
        if (i % j == 0) {
          flag = true;
        };
        j++;
      }
      if (flag == false) {
        console.log(i);
      };
    };
  };
  i++;
}
