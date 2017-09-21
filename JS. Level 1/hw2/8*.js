power (2, 6);

function power(val, pow) {
  if (pow == 1) {
    return val;
  }
  return val * power(val, pow-1)
}
