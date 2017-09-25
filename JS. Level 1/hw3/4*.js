var j = 0,
    x = 'x';

for (var i = 0; i < 20; i++) {
  if (i == 0) {
      console.log(x);
  } else {
    while (j < i) {
      x += 'x';
      j++;
    }
    console.log(x);
    j = 0;
    x = 'x';
  };
}
