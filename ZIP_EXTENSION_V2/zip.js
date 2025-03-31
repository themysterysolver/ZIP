document.getElementById("pop").addEventListener("click",async ()=>{
    let [tab]=await chrome.tabs.query({active:true,currentWindow:true});

    chrome.scripting.executeScript({
        target:{tabId:tab.id},
        function:solveIt
    })
})
function solveIt(){
    // let iframe_coll=document.getElementsByClassName("game-launch-page__iframe w-full")[0];
    // let iframe=iframe_coll.contentDocument||iframe_coll.contentWindow?.document;
    //console.log(iframe);

    let content=document.getElementsByClassName("trail-cell");
    console.log(content);
    let idx_num=new Map();
    Array.from(content).forEach((val,idx)=>{
        let the_div=val.querySelector(".trail-cell-content");
        if(the_div){
            idx_num.set(idx,the_div.innerText);
        }
    })
    console.log(idx_num)
    
    let size=Math.floor(Math.sqrt(content.length));
    //console.log(size);


    let wall=new Map();
    for(let i=0;i<size*size;i++){
        wall.set(i,[]);
    }
    Array.from(content).forEach((val,idx)=>{
        if(val.querySelector(".trail-cell-wall--down")){
            let destination=idx+size;
            if(destination<size*size){
                wall.get(idx).push(destination);
                wall.get(destination).push(idx);
            }
        }
        if(val.querySelector(".trail-cell-wall--right")){
            let destination=idx+1;
            wall.get(idx).push(destination);
            wall.get(destination).push(idx);
        }
    })
    //console.log(wall);
    console.log("----------------CHECKPOINT1--I/P----------")
    let start=null;
    for(let [key,val] of idx_num){
        if(val==="1"){
            start=key;
            break;
        }
    }
    //console.log("START IDX",start);

    let get_row=((idx)=>Math.floor(idx/size));
    let get_col=((idx)=>idx%size);

    let path=new Map();

    for(let i=0;i<size*size;i++){
        path.set(i,null);
    }

    //path.set(size*size-1,1); THE BUGGG!


    //console.log(get_row(12),get_col(12));

    let directions=[[0,1],[1,0],[0,-1],[-1,0]];//RIGHT DOWN LEFT UP

    let new_idx=((r,c)=>r*size+c);
    //console.log(new_idx(0,1),new_idx(2,0));

    result=new Map();

    let last=Math.max(...[...idx_num.values()].map(Number)).toString()
    //console.log("LAST:",last);

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
        let str=start.toString()+"->";
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

    //console.log(path);
    console.log("------------------helper functions----------------------------")


    function backtrack(idx,dest,path){
        // console.log(idx,dest,display_path(path))
        // console.log("----------------------------------------")
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
    // console.log("GAME OVER:");
    // console.log("DAIODJAD");
    // console.log("FINAL ANS",display_path(path));
    console.log("-------------------------GAME LOGIC--------------------------------");
    
    function clickIndex(index){
        let tile = document.querySelector(`[data-cell-idx="${index}"]`);

        if (tile) {
            // console.log(`Clicking tile with index ${index}`);

            function clickElement(element) {
                let down = new MouseEvent("mousedown", { bubbles: true, cancelable: true });
                let up = new MouseEvent("mouseup", { bubbles: true, cancelable: true });
                let click = new MouseEvent("click", { bubbles: true, cancelable: true });

                element.dispatchEvent(down);
                element.dispatchEvent(up);
                element.dispatchEvent(click);
            }

            clickElement(tile);
            setTimeout(() => clickElement(tile), 100);
        } else {
            console.log("Tile not found!");
        }
    }
    let final_str=display_path(path);
    let final_idx=final_str.split("->").filter(Boolean).map(Number);
    console.log(final_idx);
    for(i=0;i<final_idx.length;i++){
        clickIndex(final_idx[i]);
    }
}