let idx_num = new Map([
    [20, "2"],
    [35, "1"]
]);

let size=6;
console.log("IDX ON NUM:",idx_num);
console.log("size:",size);

let wall = new Map([
    [0,  []],
    [1,  [7]],
    [2,  [8]],
    [3,  [9]],
    [4,  [10]],
    [5,  []],
    [6,  [7]],
    [7,  [1, 6]],
    [8,  [2, 14]],
    [9,  [3, 15]],
    [10, [4, 11]],
    [11, [10]],
    [12, [13]],
    [13, [12, 14]],
    [14, [8, 13]],
    [15, [9, 16]],
    [16, [15, 17]],
    [17, [16]],
    [18, [19]],
    [19, [18, 20]],
    [20, [19, 26, 21]],
    [21, [20, 22]],
    [22, [21, 23]],
    [23, [22]],
    [24, [25]],
    [25, [24, 31]],
    [26, [20, 32]],
    [27, []],
    [28, [29]],
    [29, [28]],
    [30, []],
    [31, [25]],
    [32, [26]],
    [33, []],
    [34, []],
    [35, []]
]);


console.log("---------------------I/P----------------------------");

let start=null;
for(let [key,val] of idx_num){
    if(val==="1"){
        start=key;
        break;
    }
}
console.log("START IDX",start);

let get_row=((idx)=>Math.floor(idx/size));
let get_col=((idx)=>idx%size);

let path=new Map();

for(let i=0;i<size*size;i++){
    path.set(i,null);
}

//path.set(size*size-1,1); THE BUGGG!


console.log(get_row(12),get_col(12));

let directions=[[0,1],[1,0],[0,-1],[-1,0]];//RIGHT DOWN LEFT UP

let new_idx=((r,c)=>r*size+c);
console.log(new_idx(0,1),new_idx(2,0));

result=new Map();

let last=Math.max(...[...idx_num.values()].map(Number)).toString()
console.log("LAST:",last);

let won=((path)=>{
    for(let [key,val] of path){
        if(val===null && key!=numStr_idx.get(last)){
            return false;
        }
    }
    return true;
});

let numStr_idx=new Map();
let rev=(()=>{
    for(let [key,val] of idx_num){
      numStr_idx.set(val,key);  
    }
});
rev();
//path.set(numStr_idx.get(last),1);

let display_path=((path)=>{
    let new_start=start;
    if(path.get(new_start)===null){
        return false;
    }
    let str="";
    while(path.get(new_start)!==null){
        str+=path.get(new_start).toString()+"->"
        new_start=path.get(new_start);
    }
    return str;
})

let check_wall=((idx,destination)=>wall.get(idx).includes(destination));

function is_safe(nx,ny,nidx,path,dest,idx){
    if(nx<0 || ny<0||nx>=size||ny>=size||path.get(nidx)!==null||(idx_num.has(nidx) &&  idx_num.get(nidx)!==dest)||check_wall(idx,nidx)){ //||(idx_num.has(nidx) &&  idx_num.get(nidx)!==dest
        return false;
    }
    return true;
}

console.log(path);
console.log("------------------helper functions----------------------------")


function backtrack(idx,dest,path){
    console.log(idx,dest,display_path(path))
    console.log("----------------------------------------")
    if(idx_num.has(idx) && idx_num.get(idx)===dest){
        if(dest===last && won(path)){
            return true;
        }else{
            return backtrack(idx,(parseInt(dest)+1).toString(),path);
        }
    }else{
        let x=get_row(idx);
        let y=get_col(idx);
        for(let [dx,dy] of directions){
            let nx=x+dx;
            let ny=y+dy;
            let nidx=new_idx(nx,ny);
            if(is_safe(nx,ny,nidx,path,dest,idx)){
                path.set(idx,nidx);
                if(backtrack(nidx,dest,path)){
                    return true;
                }
                path.set(idx,null);
            }
        }
    }
    return false;
}
 
console.log("BACKTRACK RESULT:",backtrack(start,"1",path));
console.log("GAME OVER:");
console.log("DAIODJAD");
console.log("FINAL ANS",display_path(path));