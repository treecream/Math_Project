$(document).ready(function() {
  $("#test").css({"background-color": "yellow", "width": "100%", "height": "auto"});

  var data_collection = '';

  // $.getJSON("/data_sets/json/us.gov.government-spending.fpds.top-100-contractors.json", function(json) {
  //    console.log(json.result); // this will show the info it in firebug console
  //    $( json.result ).each(function( key, value ) {
  //      console.log( global_vendor_name )
  //    });
  //  });

  // this data has latitude and longitude
  // $.getJSON("/data_sets/json/us.gov.eia.860.json", function(json) {
  //    console.log(json.result); // this will show the info it in firebug console
  //    $( json.result ).each(function( key, value ) {
  //      console.log( value );
  //      console.log( value.city );
  //      console.log( value.ultility_name );
  //      console.log( value.street_address );
  //      console.log( value.sector_name );
  //      console.log( value.ownerstate );
  //      console.log(name + ' ' + key)
  //    });
  //  });

  // $.getJSON("/data_sets/json/us.states.ny.cities.nyc.electricity-consumption.json", function(json) {
  //   console.log(json.result); // this will show the info it in firebug console

  //   // data collection is creaing var, to hold data.
  //   

  //   // creating a lopp for the data_sets inside json file.
  //   $( json.result ).each(function( key, value ) {
  //     //data_collection = value.city;
  //     data_collection = data_collection + '<b>STATE: </b>' + "<u>" + value.state + "</u>" +"<br>";
  //     data_collection = data_collection + '<b>City: </b>' + "<i>" + value.city + "</i> " + '<br>';
  //     data_collection = data_collection + '<b>Companies Name maybe: </b><i>' + value.ownertransdist + "</i><br>" 
  //     data_collection = data_collection + '<b>Address: </b><i>' + value.street_address + '</i><br>'
  //     data_collection = data_collection + "<b>Sector Name: </b><i>" + value.sector_name + "</i><br>"
  //     data_collection = data_collection + "<b>Name of Water Source: </b><i>" + value.name_of_water_source +"</i><br>"
  //     data_collection = data_collection + '<b>Grid Voltage: </b><i>' + value.gridvoltage + "</i><br>"
  //   });

  //   // value data collection side the selected div.
  //   
  // });

  $("#test").html(data_collection);
});
