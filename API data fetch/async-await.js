const apiUrl ="https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING";
async function fetchData(){
    try{
        const response = await fetch(apiUrl);
      
        console.log(response.statusText);
    }catch(error){
        console.error("there was a problem fetching the data: ",error )
    }

}
   
   fetchData();

  



