document.querySelector("form").addEventListener("submit",todoApp);
let taskArr=[];
function todoApp(event){
    event.preventDefault();
    let taskName=document.querySelector("#task").value;
    let priority=document.querySelector("#priority").value;
   

    let taskObj={
        task:taskName,
        prior:priority,
    };

    taskArr.push(taskObj);
    displayTable(taskArr);
}
   function displayTable(taskArr){
    document.querySelector("tbody").innerHTML="";
    console.log(taskArr.length);
   taskArr.forEach(function(ele){
        let row=document.createElement("tr")
        let col1=document.createElement("td")
        col1.innerText=ele.task;
        let col2=document.createElement("td")
        col2.innerText=ele.prior;
        // if(ele.prior=="High"){
        //     col2.style.backgroundColor="red";

        // }else{
        //     col2.style.backgroundColor="green";
        // }
        let col3=document.createElement("td");
        col3.innerText="Delete";
        col3.addEventListener("click", function(event){
            event.target.parentNode.remove();
        })
        col3.style.color="red";
        row.append(col1,col2,col3);
        document.querySelector("tbody").append(row);
    })}