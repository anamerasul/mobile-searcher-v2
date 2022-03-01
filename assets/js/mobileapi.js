// some common variable
const totalFoundPhone=document.getElementById('found');
const errorMsgDiv=document.getElementById('error');
const displaytwentyPhoneRowDiv=document.getElementById('display-twenty-phone-row');
const DisplayFullDetails=document.getElementById('display-full-details');
const loadMoreDiv=document.getElementById('load-more-div');
const spinnerDiv=document.getElementById('spinner');
spinnerDiv.style.display="none";
loadMoreDiv.style.display='none';
DisplayFullDetails.style.display="none";


// search  by name haldler
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
        // console.log(phone)
colDiv.innerHTML=`<div class="card mx-auto text-center">
<img src="${phone.image}" class="card-img-top img-fluid w-75 mx-auto" alt="...">
<div class="card-body">
<h4 class="card-title">Brand:<span>${phone.brand}</span></h4>
<h5 class=" ">Name :<span>${phone.phone_name}</span></h5>
</div>
<a id="explore-btn" onclick="phoneDetails('${phone.slug}')" class="btn btn-lg btn-primary border-radious rounded rounded-pill px-3 py-1 m-1 text-white">Explore</a>
<a id="delete-btn" class="btn btn-danger delete-btn px-3 py-1 m-1 btn-lg border-radious rounded rounded-pill">Delete</a>
</div>`
displaytwentyPhoneRowDiv.appendChild(colDiv);
}
// delete button function
const deleteButtonFunction=(deleteclass)=>{
const deleteButtons=document.getElementsByClassName(deleteclass)
for(const deleteBtn of deleteButtons){
deleteBtn.addEventListener('click', function(e){
// console.log(e.target.parentNode.parentNode.parentNode)
e.target.parentNode.parentNode.style.display='none'
        })
        
}

}

// searchButtonHander add
const searchButtonHander=(searchbtnid,searchinputid)=>{
document.getElementById(searchbtnid).addEventListener('click', function(e){
spinnerDiv.style.display="block";

// get input value 
const searchInput=document.getElementById(searchinputid);
const searchInputvalue=searchInput.value;


// error handling from search
if(searchInputvalue===''){
errorMsgDiv.innerHTML=`<h4>nothing to found</h4>`        
}
else{
errorMsgDiv.innerHTML=``
totalFoundPhone.innerHTML=``;
}
searchMobileByName(searchInputvalue);
searchInput.value='';
displaytwentyPhoneRowDiv.innerHTML='';
totalFoundPhone.innerHTML=`<h4 class="text-danger">your search this "${searchInputvalue}" not found in our server</h4>`;
DisplayFullDetails.innerHTML=``  ;      
})
}
searchButtonHander('search-btn','search-input')
// display all mobile by searchName function add
const DisplayAllPhone=(phone)=>{

const allPhones=phone.data;
const notFound=document.getElementById('not-found');

if(phone.status===false){
notFound.innerHTML=`<p class="not-found-color">your mobile is not found please search right name</p>`
}
else{
// get only 20 phone
const totalPhoneCount=allPhones.length;
const phoneslice=allPhones.slice(0,20);
totalFoundPhone.innerHTML=`<h4>Total ${totalPhoneCount} phone found </h4>`;
// function phoneSpliceMap
const phoneSliceMap =(phoneslice)=>phoneslice.map(phone=>{
DisplayPhonecommonFunction(phone);
spinnerDiv.style.display="none";
errorMsgDiv.innerHTML=``;
deleteButtonFunction('delete-btn')
})
phoneSliceMap(phoneslice)
}

notFound.innerHTML=``;
if(allPhones.length<=20){
loadMoreDiv.style.display='none'
}
// load more than 20 phone
else if(allPhones.length>20){
loadMoreDiv.style.display='block'
// loadmore function
const loadMoreFunction=(loadmorebtn)=>{
document.getElementById(loadmorebtn).addEventListener('click',function(e){
DisplayFullDetails.style.display="none"
spinnerDiv.style.display="block";
// show rest of twenty phone
const RestTwentyPhone=allPhones.splice(20)   
// function Resttwenty   phoneSpliceforEach 
const phoneSpliceforEach =(phoneslice)=>phoneslice.forEach(phone=>{
DisplayPhonecommonFunction(phone);
spinnerDiv.style.display="none";
errorMsgDiv.innerHTML=``;
deleteButtonFunction('delete-btn');
});
spinnerDiv.style.display="none";
loadMoreDiv.style.display='none';
phoneSpliceforEach(RestTwentyPhone);
});
}
loadMoreFunction('loadmore-btn');
}
}

// search details by id
// search phone by id function
// searchBy ID function
const serachById=(searchid)=>{
//display details of a mobile api through id
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

if(phone.status===true){
const custommessage="no"
const releaseDateCustommessage="No release date found"
const sensorsInput=phone.data.mainFeatures.sensors
DisplayFullDetails.style.display="block"
DisplayFullDetails.innerHTML=`<div class="card m-3 p-4" >
<h2 class="text-uppercase text-dark text-center my-3 py-2">Details of <span class="text-success fw"> ${phone.data.name}</span></h2>
<div class="row g-0">
<div class="col-md-6">
<img src="${phone.data.image}" class="img-fluid w-75" alt="...">
</div>
<div class="col-md-6">
<div class="card-body text-start">
<h3 class="text-start">Brand : ${phone.data.brand}</h3>
<h4 class="text-start">Name : ${phone.data.name}</h4>
<h4 class"text-start">Release Date : "${phone.data.releaseDate?phone.data.releaseDate:releaseDateCustommessage}"</h4>
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
<a id="remove-btn" class="btn btn btn-danger border-radious text-dark remove-btn rounded rounded-pill px-4 py-1 fs-5">Remove details</a>
</div>        
</div>`

const othersFeatureDiv=document.getElementById('others');
const othersFeature =phone.data.others

// sensor and others feature
//sensor
const uldivicesensor =document.getElementById('d-sensor');
if(sensorsInput !==null && sensorsInput !==undefined){
let count =0;
for(const sensors of sensorsInput){
count++;
const li =document.createElement('li')
li.classList.add('list-group-item')
li.classList.add('custom-li')
li.classList.add('text-start')
li.innerHTML=` ${count} : ${sensors} `
uldivicesensor.appendChild(li)
}
}

else{
uldivicesensor.innerHTML=`<h3>no sensor found</h3>`
}
// others feature part with custom message function
// custom Sms Function
const customSmsFunction=(msg)=>{
const customMsg=msg ; 
return customMsg;
}
// others Feature
if(othersFeature!==null && othersFeature!==undefined){
const wlan=phone.data.others.WLAN
const bluetooth=phone.data.others.Bluetooth
const gps=phone.data.others.GPS
const nfc=phone.data.others.NFC
const radio=phone.data.others.Radio
const usb=phone.data.others.USB
const othersFeaturecustomMsg=customSmsFunction(`not found`)

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
const msg=customSmsFunction(`data not found`)
othersFeatureDiv.innerHTML=`<h5 class="text-start"> <span class="fs-4 fw-normal">others:</span><span class="text-dark fw-bolder fs-3"> ${msg}</span></h5>`
}
// remove details function
const removeDetails =(removebtnid)=>{
document.getElementById(removebtnid).addEventListener('click',function(e){
DisplayFullDetails.innerHTML=``;
})
}
removeDetails('remove-btn')
}
else{
DisplayFullDetails.innerHTML=`<h4>Not found</h4>`  
}

}


