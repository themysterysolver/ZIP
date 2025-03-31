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

let directions=[[0,1],[1,0],[0,-1],[-1,0]];

let new_idx=((r,c)=>r*size+c);
console.log(new_idx(0,1),new_idx(2,0));

result=new Map();

let last=Math.max(...[...idx_num.values()].map(Number)).toString()
console.log("LAST:",last);

let won=((path)=>{
    for(let [key,val] of path){
        if(val===null){
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
path.set(numStr_idx.get(last),1);

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

function is_safe(nx,ny,nidx,path,dest){
    if(nx<0 || ny<0||nx>=size||ny>=size||path.get(nidx)!==null||(idx_num.has(nidx) &&  idx_num.get(nidx)!==dest)){ //||(idx_num.has(nidx) &&  idx_num.get(nidx)!==dest
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
            if(is_safe(nx,ny,nidx,path,dest)){
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
 
backtrack(start,"1",path);
console.log(result);