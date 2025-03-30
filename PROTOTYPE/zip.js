let idx_num = new Map([
    [  7,  "3" ],
    [ 10,  "7" ],
    [ 12,  "1" ],
    [ 15,  "8" ],
    [ 20,  "6" ],
    [ 23,  "2" ],
    [ 25,  "4" ],
    [ 28,  "5" ]
]);
let size=6;
console.log("IDX ON NUM:",idx_num);
console.log("size:",size);
console.log("-------------I/P--------");

let start=null;
for(let [key,val] of idx_num){
    if(val==="1"){
        start=key;
        break;
    }
}
console.log(start);

function backtrack_bfs(idx,dest,path){
    

}
//backtrack_bfs()