const spinnerDiv=document.getElementById('spinner');

spinnerDiv.style.display="none";

const displaytwentyPhoneRowDiv=document.getElementById('display-twenty-phone-row');

const loadMoreDiv=document.getElementById('load-more-div')
loadMoreDiv.style.display='none';

const DisplayFullDetails=document.getElementById('display-full-details');

DisplayFullDetails.style.display="none";
const totalFoundPhone=document.getElementById('found');

const errorMsgDiv=document.getElementById('error')

// searchMobileByName api function add
const searchMobileByName=(searchInputText)=>{

        // searchMobileByName api fetch
        const url=`https://openapi.programming-hero.com/api/phones?search=${searchInputText}`;

        fetch(url)
        .then(res=>res.json())
        .then(data=>DisplayAllPhone(data))
}

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
            
          </div>
          <a id="explore-btn" onclick="phoneDetails('${phone.slug}')" class="btn btn-lg btn-info border-radious rounded rounded-pill px-3 py-1 m-1 text-white">Explore</a>
            <a id="delete-btn" class="btn  btn-danger delete-btn px-3 py-1 m-1 btn-lg border-radious rounded rounded-pill">Delete</a>
        </div>`

        displaytwentyPhoneRowDiv.appendChild(colDiv);






}
// delete button function

const deleteButtonFunction=(deleteclass)=>{

const deleteButtons=document.getElementsByClassName(deleteclass)

for(const deleteBtn of deleteButtons){

        deleteBtn.addEventListener('click', function(e){
                console.log(e.target.parentNode.parentNode.parentNode)

                e.target.parentNode.parentNode.style.display='none'
        })
}
}


// searchButtonHander add

const searchButtonHander=(searchbtnid,searchinputid)=>{

document.getElementById(searchbtnid).addEventListener('click', function(e){

        spinnerDiv.style.display="block";


       



        console.log('click')
        // get input value 

        const searchInput=document.getElementById(searchinputid);

        const searchInputvalue=searchInput.value;

        

        console.log(searchInputvalue)

         // error handling from search
        if(searchInputvalue===''){
                

                errorMsgDiv.innerHTML=`<h4>nothing to found</h4>`
        
        }

        else{ }

        searchMobileByName(searchInputvalue);

       
        searchInput.value='';
        displaytwentyPhoneRowDiv.innerHTML='';
        totalFoundPhone.innerHTML=`<h4 class="text-danger">your search this "${searchInputvalue}" not found in our server</h4>`;

        
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
                const totalPhoneCount=allPhones.length
                const phoneslice=allPhones.slice(0,20)
                totalFoundPhone.innerHTML=`<h4>Total ${totalPhoneCount} phone found </h4>`;

                // function phoneSliceMap

                const phoneSliceMap =(phoneslice)=>phoneslice.map(phone=>{
                        DisplayPhonecommonFunction(phone);
                        spinnerDiv.style.display="none";
                        errorMsgDiv.innerHTML=``;

                        deleteButtonFunction('delete-btn')

                })
            
                // for(const phone of phoneslice){

                //         DisplayPhonecommonFunction(phone);

                //         // const colDiv=document.createElement('div');
                //         // colDiv.classList.add('col')

                //         // console.log(phone)

                //         // colDiv.innerHTML=`<div class="card mx-auto text-center">
                //         //   <img src="${phone.image}" class="card-img-top img-fluid w-75 mx-auto" alt="...">
                //         //   <div class="card-body">
                //         //     <h4 class="card-title">Brand:<span>${phone.brand}</span></h4>
                //         //     <h5 class=" ">Name :<span>${phone.phone_name}</span></h5>
                //         //     <a id="explore-btn" onclick="phoneDetails('${phone.slug}')" class="btn btn-info px-2 py-2 m-1">Explore</a>
                //         //     <a id="delete-btn" class="btn btn-danger delete-btn px-2 py-2 m-1">Delete</a>
                //         //   </div>
                //         // </div>`

                //         // displaytwentyPhoneRowDiv.appendChild(colDiv);
                // }
                phoneSliceMap(phoneslice)
                
               
}

              

        console.log(phone.data)
      
        notFound.innerHTML=``;



if(allPhones.length<=20){
        loadMoreDiv.style.display='none'
}

else if(allPhones.length>20){

        loadMoreDiv.style.display='block'


        const loadMoreFunction=(loadmorebtn)=>{
                document.getElementById(loadmorebtn).addEventListener('click',function(e){
                        console.log('load more click')
                        DisplayFullDetails.style.display="none"
                        spinnerDiv.style.display="block";


                        const RestTwentyPhone=allPhones.slice(20)   
                        console.log('all phone')   
                        
                        console.log(allPhones.slice(20))
                     
                        // for(const phone of RestTwentyPhone){
                     
                        //         DisplayPhonecommonFunction(phone);
                                
                        // //  const colDiv=document.createElement('div');
                        // //  colDiv.classList.add('col')

                        // // console.log(phone)

                        // // colDiv.innerHTML=`<div class="card mx-auto text-center">
                        // //   <img src="${phone.image}" class="card-img-top img-fluid w-75 mx-auto" alt="...">
                        // //   <div class="card-body">
                        // //     <h4 class="card-title">Brand:<span>${phone.brand}</span></h4>
                        // //     <h5 class=" ">Name :<span>${phone.phone_name}</span></h5>
                        // //     <a id="explore-btn" onclick="phoneDetails('${phone.slug}')" class="btn btn-info px-2 py-2 m-1">Explore</a>
                        // //     <a id="delete-btn" class="btn btn-danger delete-btn px-2 py-2 m-1">Delete</a>
                        // //   </div>
                        // // </div>`

                        // // displaytwentyPhoneRowDiv.appendChild(colDiv)
                        // }

                        // function phoneSliceforEach 

                        const phoneSliceforEach =(phoneslice)=>phoneslice.forEach(phone=>{
                                DisplayPhonecommonFunction(phone);
                                spinnerDiv.style.display="none";
                                errorMsgDiv.innerHTML=``;
        
                                deleteButtonFunction('delete-btn')
        
                        })

                        
                        phoneSliceforEach(RestTwentyPhone)
                        
                })

                

        }


      

       
        loadMoreFunction('loadmore-btn');

 
}


// else if(allPhones.length===)

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











// search details by id
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
        const custommessage="no"
        const releaseDateCustommessage="No release date found"
        const sensorsInput=phone.data.mainFeatures.sensors
        DisplayFullDetails.style.display="block"
        console.log(phone.data.brand);
        DisplayFullDetails.innerHTML=` <div class="card m-3 p-4" >
        <h2 class="text-uppercase text-dark text-center my-3 py-2">Details of ${phone.data.name}</h2>
        <div class="row g-0">
          <div class="col-md-6">
            <img src="${phone.data.image}" class="img-fluid w-75" alt="...">
          </div>
          <div class="col-md-6">
            <div class="card-body text-start">
              <h3 class="text-start">Brand : ${phone.data.brand}</h3>
              <h4 class="text-start">Name : ${phone.data.name}</h4>
              <h4 class"text-start">Release date:"${phone.data.releaseDate?phone.data.releaseDate:releaseDateCustommessage}"</h4>
              <!-- main feature section--->
                <div class="main-feature">
                        <h5 class="text-start">Main feature</h5>
                        <p class="text-start p-0 m-0"> <span class="fs-5">Storage:</span> "${phone.data.mainFeatures.storage?phone.data.mainFeatures.storage:custommessage}"</p>
                        <p class="text-start p-0 m-0"><span class="fs-5">Display-size :</span> "${phone.data.mainFeatures.displaySize?phone.data.mainFeatures.displaySize:custommessage}"</p>
                        <p class="text-start p-0 m-0"> <span class="fs-5">Chipset :</span> "${phone.data.mainFeatures.chipSet?phone.data.mainFeatures.chipSet:custommessage}"</p>
                        <p class="text-start p-0 m-0"> <span class="fs-5">Memory :</span> "${phone.data.mainFeatures.memory?phone.data.mainFeatures.memory:custommessage}"</p>
                        <!-- sensor  part start -->
                        <ul class="list-group text-start p-0 m-1" id="d-sensor" > <span class="ul-sensor text-dark fs-5">Sensor:</span></ul>
                </div>
                <div class="others" id="others">

                </div>
               
              
            </div>
            
          </div>

          <a id="remove-btn" class="btn btn-xl btn-warning border-radious rounded rounded-pill px-4 py-1 fs-5">Remove details</a>
        </div>
        
      </div>`

      const othersFeatureDiv=document.getElementById('others');
      const othersFeature =phone.data.others

      const wlan=phone.data.others.WLAN
      const bluetooth=phone.data.others.Bluetooth
      const gps=phone.data.others.GPS
      const nfc=phone.data.others.NFC
      const radio=phone.data.others.Radio
      const usb=phone.data.others.USB

      const othersFeaturecustomMsg=`not found`

      console.log(othersFeature)

      const uldivicesensor =document.getElementById('d-sensor');

      if(sensorsInput !==null && sensorsInput !==undefined){

     
      let count =0;

      for(const sensors of sensorsInput){
              count++;
        const li =document.createElement('li')
        li.classList.add('list-group-item')
        li.classList.add('custom-li')
        li.classList.add('text-start')
        console.log(li)
        console.log(sensors)
        li.innerHTML=` ${count} : ${sensors} `
        // li.innerHTML=`${sensors}`
        uldivicesensor.appendChild(li)

      }

   
}

else{
        uldivicesensor.innerHTML=`<h3>no sensor found</h3>`
}

if(othersFeature!==null && othersFeature!==undefined){
        othersFeatureDiv.innerHTML=`<h5 class="text-start"> <span class="fs-5 fw-normal">others:</span></h5>
                                                <p class="text-start p-0 m-1"> <span class="fs-6">WLAN:</span> "${wlan?wlan:othersFeaturecustomMsg}"</p>
                                                <p class="text-start p-0 m-1"> <span class="fs-6">Bluetooth":</span> "${bluetooth?bluetooth:othersFeaturecustomMsg}"</p>
                                                <p class="text-start p-0 m-1"> <span class="fs-6">GPS":</span> "${gps?gps:othersFeaturecustomMsg}"</p>
                                                <p class="text-start p-0 m-1"> <span class="fs-6">NFC":</span> "${nfc?nfc:othersFeaturecustomMsg}"</p>
                                                <p class="text-start p-0 m-1"> <span class="fs-6">Radio":</span> "${radio?radio:othersFeaturecustomMsg}"</p>
                                                <p class="text-start p-0 m-1"> <span class="fs-6">USB":</span> "${usb?usb:othersFeaturecustomMsg}"</p>
                                        `

}

else{
        othersFeatureDiv.innerHTML=`<h4>others feature not found</h4>`
}

// remove details function

const removeDetails =(removebtnid)=>{

        document.getElementById(removebtnid).addEventListener('click',function(e){

                // console.log("remove")
                DisplayFullDetails.innerHTML=``;
        })

}

removeDetails('remove-btn')



}

       

        else{
                DisplayFullDetails.innerHTML=`<h4>Not found</h4>`  

        }


}


