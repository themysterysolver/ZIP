document.getElementById("pop").addEventListener("click",async ()=>{
    let [tab]=await chrome.tabs.query({active:true,currentWindow:true});

    chrome.scripting.executeScript({
        target:{tabId:tab.id},
        function:solveIt
    })
})
function solveIt(){
    console.log("Hello world!");
}