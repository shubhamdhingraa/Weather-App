const API='89c02c28a31b133160cee5c25ed82a6e';
const ROOT=`http://api.openweathermap.org/data/2.5/weather?appid=${API}`;

$(document).ready(()=>{
  $('#searchForm').on('submit',(e)=>
  {

  let searchText=$('#searchText').val();
    console.log("You searched for "+searchText);
  getCity(searchText);

  e.preventDefault();
  });
});




function getCity(searchText)
{
  const CITY=searchText;
const url=`${ROOT}&q=${searchText}`;
axios.get(url)


  .then((response)=>{
      console.log(response);
      let details=response.data.main;
      let output='';

      //let temp=response.data.main.temp;
      let details2=response.data;
        console.log(response.data.main.temp);

        //output=`<h3>Temperature in ${response.data.name} is ${temp}</h3>`;


            output +=`
              <h5>Weather Forecasting in ${details2.name}</h5>
              <h5>Temperature : ${details.temp} K  </h5>
              <h5>Maximum Temperature : ${details.temp_max}  K </h5>
              <h5>Pressure : ${details.pressure}</h5>
              <h5>Humidity : ${details.humidity}</h5>
              <h5>Geographical Co-ordinates for ${details2.name}</h5>
              <h5>Latitude : ${details2.coord.lat}</h5>
              <h5>Longitude : ${details2.coord.lon}</h5>

                `


$('#details').html(output);

  })

.catch((err)=>
{
  console.log(err);
});

}
