document.getElementById("pop").addEventListener("click",async ()=>{
    let [tab]=await chrome.tabs.query({active:true,currentWindow:true});

    chrome.scripting.executeScript({
        target:{tabId:tab.id},
        function:solveIt
    })
})
function solveIt(){
    let iframe_coll=document.getElementsByClassName("game-launch-page__iframe w-full")[0];
    let iframe=iframe_coll.contentDocument||iframe_coll.contentWindow?.document;
    console.log(iframe);

    let content=iframe.getElementsByClassName("trail-cell");
    let idx_num=new Map();
    Array.from(content).forEach((val,idx)=>{
        let the_div=val.querySelector(".trail-cell-content");
        if(the_div){
            idx_num.set(idx,the_div.innerText);
        }
    })
    console.log(idx_num)
    
    let size=Math.floor(Math.sqrt(content.length));
    console.log(size);
    console.log("----------------CHECKPOINT1--I/P----------")

}