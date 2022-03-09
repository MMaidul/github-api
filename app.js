



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
}