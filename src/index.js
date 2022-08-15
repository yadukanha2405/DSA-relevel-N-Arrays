import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
function subtractArr(CurrentArr, TargetArr) {
  let C = CurrentArr[0] - TargetArr[0];
  if (C < 0) {
    return false;
  } else {
    for (let i = 0; i < CurrentArr.length; i++) {
      if (CurrentArr[i] - TargetArr[i] != C) {
        return false;
      }
    }
  }
  return true;
}
function arrC(arrA, n) {
  let minimumVal = Infinity;
  let tragetArr = 0;
  for (let i = 0; i < n; i++) {
    if (arrA[i][0] < minimumVal) {
      minimumVal = arrA[i][0];
      tragetArr = 1;
    }
  }
  for (let i = 0; i < n; i++) {
    if (i != tragetArr) {
      let result = subtractArr(arrA[i], arrA[tragetArr]);
      if (result != true) {
        return false;
      }
    }
  }
  return true;
}
let arrA = [
  [4, 3, 5],
  [2, 2, 3],
  [3, 2, 4]
];

let n = 3;
let test = arrC(arrA, n) ? "Yes" : "NO";
console.log(test);
