var matrix = [[1,2,3], [1,2,3], [1,2,3]];

let media = 0;
for(let i = 0; i<matrix.length;i++){
  for(let j = 0; j<matrix[i].length;j++){
    media += matrix[i][j];
  }
}