// search btn id

// searchMobileByName api function add

const searchMobileByName=(searchInputText)=>{

        // searchMobileByName api fetch
        const url=`https://openapi.programming-hero.com/api/phones?search=${searchInputText}`;

        fetch(url)
        .then(res=>res.json())
        .then(data=>DisplayAllPhone(data))
}

// searchButtonHander add

const searchButtonHander=(searchbtnid,searchinputid)=>{

document.getElementById(searchbtnid).addEventListener('click', function(e){

        console.log('click')
        // get input value 

        const searchInput=document.getElementById(searchinputid);

        const searchInputvalue=searchInput.value;

        console.log(searchInputvalue)

        searchMobileByName(searchInputvalue)

        searchInput.value='';
})

}


// display all mobile by searchName function add
const DisplayAllPhone=(phone)=>{
        console.log(phone)

        const allPhones=phone.data
        const notFound=document.getElementById('not-found')

        const displaytwentyPhoneRowDiv=document.getElementById('display-twenty-phone-row')
        if(phone.status===false){
                notFound.innerHTML=`<p class="not-found-color">your mobile is not found please search right name</p>`
        }
        else{
                // get only 20 phone
                const phoneslice=allPhones.slice(0,20)
                // const phones=allPhones.slice(0,19).forEach(phone=>{
                //         console.log(phone)
                // })
                for(const phone of phoneslice){

                        const colDiv=document.createElement('div');
                        colDiv.classList.add('col')

                        console.log(phone)

                        colDiv.innerHTML=`<div class="card">
                          <img src="..." class="card-img-top" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          </div>
                        </div>`

                        displaytwentyPhoneRowDiv.appendChild(colDiv)
                }

        console.log(phone.data)

        notFound.textContent='';

}
}

searchButtonHander('search-btn','search-input')