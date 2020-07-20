(this["webpackJsonppetrol-watch"]=this["webpackJsonppetrol-watch"]||[]).push([[0],{14:function(t,e,a){t.exports=a(28)},19:function(t,e,a){},21:function(t,e,a){},22:function(t,e,a){},23:function(t,e,a){},27:function(t,e,a){},28:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),s=a(2),o=a.n(s),r=(a(19),a(5)),l=a.n(r),c=a(7),u=a(8),d=a(9),p=a(10),m=a(13),h=a(12),S=(a(21),a(4)),f=a(3),g=(a(22),function(t){var e=t.origin,a=t.destination,s=t.waypoints,o=Object(n.useRef)(0);return Object(n.useEffect)((function(){o.current=0}),[e,a,s]),(new window.google.maps.DirectionsService).route({origin:e,destination:a,travelMode:"DRIVING",waypoints:s},(function(e,a){a===window.google.maps.DirectionsStatus.OK&&0===o.current&&(o.current+=1,t.setDir(e))})),i.a.createElement(i.a.Fragment,null,t.directions&&i.a.createElement(f.a,{directions:t.directions}))});function E(t){var e=Object(n.useState)(),a=Object(S.a)(e,2),s=a[0],o=a[1],r=Object(n.useState)(),l=Object(S.a)(r,2),c=l[0],u=l[1],d=Object(n.useState)(),p=Object(S.a)(d,2),m=p[0],h=p[1],E=Object(n.useState)(),b=Object(S.a)(E,2),v=b[0],y=b[1];return i.a.createElement(f.d,{googleMapsApiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/petrol-watch",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GOOGLEMAPS_API_KEY},i.a.createElement(f.b,{mapContainerStyle:{width:"100vw",height:"60vh"},zoom:15,center:{lat:-34.123,lng:150.342}},null!=t.nearbyStations&&t.nearbyStations.map((function(e){return i.a.createElement(f.e,{position:{lat:e.info.location.latitude,lng:e.info.location.longitude},label:e.price.toString(),onClick:function(){return t.stationSelectedHandler(e)}})})),null!==t.mapStart&&null!==t.mapDest&&i.a.createElement(g,{origin:t.mapStart,destination:t.mapDest,directions:s,setDir:function(e){o(e),u({lat:e.routes[0].bounds.Za.j+.01,lng:e.routes[0].bounds.Ua.i});for(var a=[],n=0;n<t.stations.length;n++)if(e.routes[0].bounds.Ua.i<=t.stations[n.toString()].location.longitude&&t.stations[n.toString()].location.longitude<=e.routes[0].bounds.Ua.j&&e.routes[0].bounds.Za.i<=t.stations[n.toString()].location.latitude&&t.stations[n.toString()].location.latitude<=e.routes[0].bounds.Za.j)for(var i=0;i<t.prices.length;i++)if(t.prices[i.toString()].stationcode==t.stations[n.toString()].code&&t.prices[i.toString()].fueltype==t.fuelType){for(var s=0,r=0,l=0;l<e.routes[0].legs.length;l++)s+=e.routes[0].legs[l].duration.value,r+=e.routes[0].legs[l].distance.value;h((s/60).toFixed(0)),y((r/1e3).toFixed(1)),a.push({info:t.stations[n.toString()],price:t.prices[i.toString()].price,lastupdated:t.prices[i.toString()].lastupdated})}a.sort((function(t,e){return t.price-e.price})),t.nearbyStationsHandler(a)},waypoints:t.selected}),t.selected&&i.a.createElement(f.c,{position:c},i.a.createElement("div",{className:"InfoWindow"},i.a.createElement("p",null,"Distance: ",v,"km"),i.a.createElement("p",null,"Duration: ",m," minutes")))))}a(23);function b(t){return i.a.createElement("div",{className:"Input"},i.a.createElement("input",{className:"start",type:"text",placeholder:"Choose a starting location...",name:"start",value:t.start,onChange:t.inputChangedHandler}),i.a.createElement("input",{className:"dest",type:"text",placeholder:"Choose a destination...",name:"dest",value:t.dest,onChange:t.inputChangedHandler}),i.a.createElement("p",null,"Fuel Type:",i.a.createElement("select",{className:"fuelType",name:"fuelType",defaultValue:t.fuelType,onChange:t.inputChangedHandler},i.a.createElement("option",{value:"PDL"},"Diesel"),i.a.createElement("option",{value:"U91"},"Unleaded 91"),i.a.createElement("option",{value:"P98"},"Petroleum 98"),i.a.createElement("option",{value:"E10"},"Ethanol")),i.a.createElement("button",{className:"submit",onClick:t.submitHandler},"Submit")))}var v=a(11),y=a.n(v);a(27);function O(t){var e=null;return e=null===t.nearbyStations?i.a.createElement("p",null,"No nearby stations for the specified route."):t.nearbyStations.map((function(e,a){return i.a.createElement(y.a,{trigger:e.info.name+": $"+e.price,onOpening:function(){return t.stationSelectedHandler(e)}},i.a.createElement("p",null,i.a.createElement("b",null,"Address:")," ",e.info.address),i.a.createElement("p",null,i.a.createElement("em",null,"Last updated ",e.lastupdated)))})),i.a.createElement("div",{className:"Stations"},i.a.createElement("h1",null,"Nearby Stations"),e)}var _=function(t){Object(m.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(d.a)(this,a),(n=e.call(this,t)).inputChangedHandler=function(t){var e=t.target,a=e.name,i=e.value;n.setState(Object(u.a)({},a,i))},n.submitHandler=function(t){n.setState({mapStart:n.state.start,mapDest:n.state.dest})},n.stationSelectedHandler=function(t){n.setState({selected:[{location:{lat:t.info.location.latitude,lng:t.info.location.longitude}}]})},n.nearbyStationsHandler=function(t){n.setState({nearbyStations:t})},n.state={start:"",dest:"",fuelType:"PDL",stations:[],prices:[],mapStart:null,mapDest:null,accesstoken:null,apikey:null,transaction:0,nearbyStations:null},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var t=Object(c.a)(l.a.mark((function t(){var e=this;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.onegov.nsw.gov.au/oauth/client_credential/accesstoken?grant_type=client_credentials",{async:!0,crossDomain:!0,method:"GET",headers:{authorization:Object({NODE_ENV:"production",PUBLIC_URL:"/petrol-watch",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_FUEL_AUTH}}).then((function(t){return t.json()})).then((function(t){return e.setState({accesstoken:t.access_token,apikey:t.client_id,transaction:e.state.transaction+1})}));case 2:fetch("https://api.onegov.nsw.gov.au/FuelPriceCheck/v1/fuel/prices",{async:!0,crossDomain:!0,method:"GET",headers:{authorization:"Bearer "+this.state.accesstoken,apikey:this.state.apikey,transactionid:1,requesttimestamp:(new Date).toLocaleString()}}).then((function(t){return t.json()})).then((function(t){return e.setState({stations:t.stations,prices:t.prices})}));case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("h1",{className:"title"},"Petrol Watch"),i.a.createElement(b,{inputChangedHandler:this.inputChangedHandler,submitHandler:this.submitHandler,start:this.state.start,dest:this.state.dest,fuelType:this.state.fuelType,fuelLeft:this.state.fuelLeft}),i.a.createElement(E,{mapStart:this.state.mapStart,mapDest:this.state.mapDest,stations:this.state.stations,prices:this.state.prices,fuelType:this.state.fuelType,accesstoken:this.state.accesstoken,apikey:this.state.apikey,stationSelectedHandler:this.stationSelectedHandler,selected:this.state.selected,nearbyStationsHandler:this.nearbyStationsHandler,nearbyStations:this.state.nearbyStations}),i.a.createElement(O,{inputChangedHandler:this.inputChangedHandler,submitHandler:this.submitHandler,stationSelectedHandler:this.stationSelectedHandler,start:this.state.start,dest:this.state.dest,fuelType:this.state.fuelType,selected:this.state.selected,nearbyStations:this.state.nearbyStations}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(_,null),i.a.createElement("script",{async:!0,defer:!0,src:"https://maps.googleapis.com/maps/api/js?key="+Object({NODE_ENV:"production",PUBLIC_URL:"/petrol-watch",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GOOGLEMAPS_API_KEY+"&callback=initMap"})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.3d9d7f32.chunk.js.map