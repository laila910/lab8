
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

 
