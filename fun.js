//----------------------fetch api
  const tab=document.getElementById('users');
  const url = 'https://reqres.in/api/users?page=2';

  fetch(url)
    .then((response) => {
        
      return response.text();
    })
    .then((res) => {
      let users=JSON.parse(res);
      console.log(users);
      console.log(typeof(users));
      console.log(users.data);
      ArrayofData=users.data;
      
     

      for(var i=0;i<ArrayofData.length;i++){
        let tr=document.createElement('tr');
        let td1=document.createElement('td');
        let td2=document.createElement('td');
        console.log(ArrayofData[i].email);
        console.log(ArrayofData[i].avatar);
        
        td1.innerHTML=`<h2>${ArrayofData[i].email}</h2>`;
        td2.innerHTML=`<img src="${ArrayofData[i].avatar}"> ` ;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tab.appendChild(tr);


      }
 
    }).catch(function(error) {
      console.log(error);
    });
    
//-------------------loginform
 
    function login(e){
        e.preventDefault();
        var errors=[];
        if(document.readyState){
          console.log('hello');
         
        myForm=document.getElementsByTagName('form');
        var Email=document.getElementsByTagName('input')[0];
        var Pass=document.getElementsByTagName('input')[1];
              
        if((Email.value.length== 0) && ( Pass.value.length== 0)){
            errors.push('email and password are empty, please enter your data');
        }

        if((Email.value.length== 0)){
            errors.push('email is empty, please enter your data');
        }

        if(( Pass.value.length== 0)){
            errors.push('password are empty, please enter your data');
        }
     ptrn=/^([a-zA-Z0-9]{8,})$/;
   if(! ( ptrn.test(Pass.value))  ){
    errors.push('Password must be Minimum eight characters, at least one letter and one number:');

   }
    }
    if(errors.length > 0){
        var ErrorsSection=document.getElementById('errors');
        ErrorsSection.innerText=errors;
        document.body.appendChild(ErrorsSection);
    }else{
        form=document.getElementById('myForm');
      
        console.log('submmited');
        alert('Form Successfully Submitted');
        window.location.reload();
        return true;
    }
           
          

       }



//------------------------todolist
arrayofLocalS=[];   
 function push(){
    var newtask=document.querySelector('#newtask input');
    var message=document.createElement('div');
    var tasks=document.querySelector('#tasks');
    if(newtask.value.length == 0){
        console.log('Welcome');
       
        message.innerHTML='<h1 style="text-align:center"> enter your task name </h1>';
        document.body.appendChild(message);
        
    }

    else{
        //add tasks to local storage 
        arrayofLocalS.push(newtask.value);
        localStorage.setItem('tasks',JSON.stringify(arrayofLocalS));
        returnTasks=JSON.parse(localStorage.getItem('tasks'));
        console.log(returnTasks);
       tasks.innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${newtask.value}
                </span>
                <button class="add">
                <i class="fa fa-check" aria-hidden="true"></i>
                </button>
                <button class="delete">
                <i class="fa fa-window-close" aria-hidden="true"></i>
                </button>
            </div>
        `;

        var currentTasks = document.querySelectorAll(".delete");
        for(var i=0; i<currentTasks.length; i++){
            currentTasks[i].onclick = function(){
                this.parentNode.remove();
            };
        }
        
       var currenttasks =document.querySelectorAll('.add');
         for(var y=0;y<currenttasks.length;y++){
            currenttasks[y].onclick=function(){
                var status=document.createElement('p');
                status.innerHTML='<p>Done</p>';
                this.parentNode.appendChild(status);
                document.body.appendChild(this.parentNode);
            };
         }
        

    }
 }
          