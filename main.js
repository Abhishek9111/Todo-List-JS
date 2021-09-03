let form=document.getElementById("addForm");
let list=document.getElementById("items");
let filter=document.getElementById("filter");


form.addEventListener("submit",addItem);
//form.addEventListener("button",addItem);
list.addEventListener("click",remove);
filter.addEventListener("keyup",search);


function addItem(e)
{
    e.preventDefault(); //to prevent the submit button reloading, thus holding the values into the console
    let a = document.getElementById("item").value;
    let li=document.createElement("li");
    li.className="list-group-item";
    let textNode = document.createTextNode(a);
    //console.log(textNode);
    li.appendChild(textNode);
    list.append(li)
    
    //let cross=document.createElement("button");
    ////console.log(cross);
    //cross.className="btn btn-danger btn-sm float-right delete";
    //cross.textContent="X";  
    //li.append(cross);
    //list.appendChild(li);
    let btn=document.createElement("button");
    btn.className="btn btn-danger btn-sm float-right delete";
    btn.appendChild(document.createTextNode("X"));
    li.appendChild(btn);
}

function remove(x)
{
    if(x.target.classList.contains("delete"))
    {
        if(window.confirm("Are you sure you want to delete the item?"))
        {
            let li= x.target.parentElement
            list.removeChild(li)
        }
    }
}

function search(p)
{
    let text=p.target.value.toLowerCase();
    
    let items = list.getElementsByTagName("li");

    let itemsArray = Array.from(items);
    itemsArray.forEach(function (item){
        let name = item.firstChild.textContent
        if(name.toLowerCase().indexOf(text)!=-1)
        {
            item.style.display="Block";
        }
        else{
            item.style.display="none"
        }
    })
}

