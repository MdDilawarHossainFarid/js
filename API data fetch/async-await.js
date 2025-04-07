const apiUrl ="https://jsonplaceholder.typicode.com/";
async function fetchData(){
    try{
        const response = await fetch(apiUrl);
        console.log(response.status);
    }catch(error){
        console.error("there was a problem fetching the data: ",error )
    }

}
   
   fetchData();

  



