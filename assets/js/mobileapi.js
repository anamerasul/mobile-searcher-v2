

const displaytwentyPhoneRowDiv=document.getElementById('display-twenty-phone-row')

const loadMoreDiv=document.getElementById('load-more-div')
loadMoreDiv.style.display='none'

// searchMobileByName api function add
const searchMobileByName=(searchInputText)=>{

        // searchMobileByName api fetch
        const url=`https://openapi.programming-hero.com/api/phones?search=${searchInputText}`;

        fetch(url)
        .then(res=>res.json())
        .then(data=>DisplayAllPhone(data))
}






// search details by id


// function display Phone  by common fuction 

const DisplayPhonecommonFunction=(phone)=>{

        const colDiv=document.createElement('div');
        colDiv.classList.add('col')

        console.log(phone)

        colDiv.innerHTML=`<div class="card mx-auto text-center">
          <img src="${phone.image}" class="card-img-top img-fluid w-75 mx-auto" alt="...">
          <div class="card-body">
            <h4 class="card-title">Brand:<span>${phone.brand}</span></h4>
            <h5 class=" ">Name :<span>${phone.phone_name}</span></h5>
            <a id="explore-btn" onclick="phoneDetails('${phone.slug}')" class="btn btn-info px-2 py-2 m-1">Explore</a>
            <a id="delete-btn" class="btn btn-danger delete-btn px-2 py-2 m-1">Remove</a>
          </div>
        </div>`

        displaytwentyPhoneRowDiv.appendChild(colDiv);






}
// delete button function

const deleteButtonFunction=(deleteclass)=>{

const deleteButtons=document.getElementsByClassName(deleteclass)

for(const deleteBtn of deleteButtons){

        deleteBtn.addEventListener('click', function(e){
                console.log(e.target.parentNode.parentNode.parentNode)

                e.target.parentNode.parentNode.parentNode.style.display='none'
        })
}
}


// searchButtonHander add

const searchButtonHander=(searchbtnid,searchinputid)=>{

document.getElementById(searchbtnid).addEventListener('click', function(e){

        console.log('click')
        // get input value 

        const searchInput=document.getElementById(searchinputid);

        const searchInputvalue=searchInput.value;

        console.log(searchInputvalue)

        searchMobileByName(searchInputvalue);

        searchInput.value='';
        displaytwentyPhoneRowDiv.innerHTML='';
})

}

searchButtonHander('search-btn','search-input')

// display all mobile by searchName function add
const DisplayAllPhone=(phone)=>{
        console.log(phone)

        const allPhones=phone.data
        const notFound=document.getElementById('not-found')

        console.log(allPhones.length)

        if(phone.status===false){
                notFound.innerHTML=`<p class="not-found-color">your mobile is not found please search right name</p>`
        }


        else{
                // get only 20 phone
                const phoneslice=allPhones.slice(0,20)
            
                for(const phone of phoneslice){

                        DisplayPhonecommonFunction(phone);

                        // const colDiv=document.createElement('div');
                        // colDiv.classList.add('col')

                        // console.log(phone)

                        // colDiv.innerHTML=`<div class="card mx-auto text-center">
                        //   <img src="${phone.image}" class="card-img-top img-fluid w-75 mx-auto" alt="...">
                        //   <div class="card-body">
                        //     <h4 class="card-title">Brand:<span>${phone.brand}</span></h4>
                        //     <h5 class=" ">Name :<span>${phone.phone_name}</span></h5>
                        //     <a id="explore-btn" onclick="phoneDetails('${phone.slug}')" class="btn btn-info px-2 py-2 m-1">Explore</a>
                        //     <a id="delete-btn" class="btn btn-danger delete-btn px-2 py-2 m-1">Delete</a>
                        //   </div>
                        // </div>`

                        // displaytwentyPhoneRowDiv.appendChild(colDiv);
                }
                deleteButtonFunction('delete-btn')
               
}

              

        console.log(phone.data)
      
        notFound.textContent='';



if(allPhones.length<=20){
        loadMoreDiv.style.display='none'
}

else if(allPhones.length>20){

        loadMoreDiv.style.display='block'


        const loadMoreFunction=(loadmorebtn)=>{
                document.getElementById(loadmorebtn).addEventListener('click',function(e){
                        console.log('load more click')


                        const RestTwentyPhone=allPhones.slice(20)   
                        console.log('all phone')   
                        
                        console.log(allPhones.slice(20))
                     
                        for(const phone of RestTwentyPhone){
                     
                                DisplayPhonecommonFunction(phone);
                                
                        //  const colDiv=document.createElement('div');
                        //  colDiv.classList.add('col')

                        // console.log(phone)

                        // colDiv.innerHTML=`<div class="card mx-auto text-center">
                        //   <img src="${phone.image}" class="card-img-top img-fluid w-75 mx-auto" alt="...">
                        //   <div class="card-body">
                        //     <h4 class="card-title">Brand:<span>${phone.brand}</span></h4>
                        //     <h5 class=" ">Name :<span>${phone.phone_name}</span></h5>
                        //     <a id="explore-btn" onclick="phoneDetails('${phone.slug}')" class="btn btn-info px-2 py-2 m-1">Explore</a>
                        //     <a id="delete-btn" class="btn btn-danger delete-btn px-2 py-2 m-1">Delete</a>
                        //   </div>
                        // </div>`

                        // displaytwentyPhoneRowDiv.appendChild(colDiv)
                        }

                        deleteButtonFunction('delete-btn')
                        
                })

                

        }


      

       
        loadMoreFunction('loadmore-btn');

 
}


// displaytwentyPhoneRowDiv.textContent=``;

}



// search mobile by id

// const searchMobileById=(searchid)=>{

//         // searchMobileByName api fetch
//         const url=`https://openapi.programming-hero.com/api/phone/${searchid}`;

//         fetch(url)
//         .then(res=>res.json())
//         .then(data=>phoneDetails(data[0]))
// }

// search phone by id function
// searchBy ID function
const serachById=(searchid)=>{
        const url=`https://openapi.programming-hero.com/api/phone/${searchid}`;

        fetch(url)
        .then(res=>res.json())
        .then(data=>DisplayFulldetails(data))

}

// function phoneDetails
const phoneDetails=(id)=>{
        serachById(id)
}

// function displayFullDetails
const DisplayFulldetails=(phone)=>{

        console.log(phone)

        if(phone.status===true){

        console.log(phone.data.brand);
        }

        else{


        }


}



