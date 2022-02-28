// search btn id

// searchButtonHander add

const searchButtonHander=(searchbtnid,searchinputid)=>{

document.getElementById(searchbtnid).addEventListener('click', function(e){

        console.log('click')
        // get input value 

        const searchInput=document.getElementById(searchinputid);

        const searchInputvalue=searchInput.value;

        console.log(searchInputvalue)
})

}

searchButtonHander('search-btn','search-input')