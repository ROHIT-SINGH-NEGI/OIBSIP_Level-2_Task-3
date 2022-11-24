const extractdata=document.querySelector('input');
const addbutton=document.querySelector('.appendtask > button');

addbutton.addEventListener('click',addtask); 


function addtask(e)
{
    const incomplete=document.querySelector('.incomplete');
    const complete=document.querySelector('.complete');

    const createlist=document.createElement('li');
    const tickbtn=document.createElement('button');
    const delbtn=document.createElement('button');

    tickbtn.innerHTML='<i class="fa fa-check"></i>';
    tickbtn.style.color="green";
    delbtn.style.color="red";
    


     
    delbtn.innerHTML='<i class="fa fa-trash"></i>';

     if(extractdata.value!=='')
     {
        createlist.textContent=extractdata.value;
        extractdata.value='';
        incomplete.appendChild(createlist);
        createlist.appendChild(tickbtn);
        createlist.appendChild(delbtn);
     }

         tickbtn.addEventListener('click',function()
         
         {
            currnode=this.parentNode;
            currnode.remove();
       
             complete.appendChild(currnode);
            tickbtn.style.display='none';
               

         }
         );

         delbtn.addEventListener('click',function()
         
         {
            currnode=this.parentNode;
            currnode.remove();
       
               

         }
         );


     }
    

