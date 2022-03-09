



const searchProfile = ()=> {

    //getSearchInputText;
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;

   //clearInputField;
   searchInput.value = '';

   //loadDataFormAPI;
   const url = `https://api.github.com/users/${searchText}`;
   fetch(url)
   .then(res=> res.json())
   .then(data => displayProfile(data))
    
}



const displayProfile = (data)=> {
    console.log(data);
    const cardParent = document.getElementById('card-parent');
   const div = document.createElement('div');
   div.classList.add('card');
   div.innerHTML = `
   <div class="row g-0">
   <div class="col-md-4">
     <img 
     src="${data.avatar_url}" 
     class="img-fluid rounded" 
     alt="..."
     />
   </div>
   <div class="col-md-8">
     <div class="card-body">
       <h5 class="card-title">${data.name}</h5>
       <p class="card-text">${data.bio}</p>
       <span class="fw-light">
       followers:${data.followers}
       following:${data.following}
       public-repo:${data.public_repos}
       </span>
     </div>
   </div>
  </div>
   `;
   cardParent.appendChild(div);
}