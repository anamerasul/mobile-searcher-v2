const DisplayFulldetails=(phone)=>{
        console.log(phone)
        if(phone.status===true){
        const custommessage="no"
        const releaseDateCustommessage="No release date found"
        const sensorsInput=phone.data.mainFeatures.sensors
        DisplayFullDetails.style.display="block"
        console.log(phone.data.brand);
        DisplayFullDetails.innerHTML=` <div class="card m-3 p-4" >
        <h2 class="text-uppercase text-success text-center my-2 py-2">Details of ${phone.data.name}</h2>
        <div class="row g-0">
          <div class="col-md-6">
            <img src="${phone.data.image}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-6">
            <div class="card-body text-start">
              <h3 class="text-start">Brand : ${phone.data.brand}</h3>
              <h4 class="text-start">Name : ${phone.data.name}</h4>
              <h4 class"text-start">Release date:"${phone.data.releaseDate?phone.data.releaseDate:releaseDateCustommessage}"</h4>
              <!-- main feature section--->
                <div class="main-feature">
                        <h5 class="text-start">Main feature</h5>
                        <p class="text-start p-0 m-1"> <span class="fs-5">Storage:</span> "${phone.data.mainFeatures.storage?phone.data.mainFeatures.storage:custommessage}"</p>
                        <p class="text-start p-0 m-1"><span class="fs-5">Display-size :</span> "${phone.data.mainFeatures.displaySize?phone.data.mainFeatures.displaySize:custommessage}"</p>
                        <p class="text-start p-0 m-1"> <span class="fs-5">Chipset :</span> "${phone.data.mainFeatures.chipSet?phone.data.mainFeatures.chipSet:custommessage}"</p>
                        <p class="text-start p-0 m-1"> <span class="fs-5">Memory :</span> "${phone.data.mainFeatures.memory?phone.data.mainFeatures.memory:custommessage}"</p>
                        <!-- sensor  part start -->
                        <ul class="list-group text-start p-0 m-1" id="d-sensor" > <span class="ul-sensor text-dark fs-5">Sensor:</span></ul>
                </div>
                <div class="others" id="others">

                </div>

              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
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
        othersFeatureDiv.innerHTML=`<h4 class="text-start">Others</h4>`

}

else{

}

}

       

        else{
                DisplayFullDetails.innerHTML=`<h4>Not found</h4>`  

        }


}