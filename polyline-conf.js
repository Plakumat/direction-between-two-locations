            //Declaration some variables for map datas
            var map;
            var displayDirections;
            var serviceDirections = new google.maps.DirectionsService();
            var centerOfIstanbul = {lat: 41.069595, lng:29.050909};

            //use directions renderer method from google api and set polylines, map configuration and render map
            function initializeMapFunction() {

                displayDirections = new google.maps.DirectionsRenderer({
                    polylineOptions: {
                        strokeColor: "#d443d4"
                    }
                });

                var mapConfiguration = {
                    zoom:12,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    center: centerOfIstanbul
                }

                map = new google.maps.Map(document.getElementById('map-canvas'), mapConfiguration);
                displayDirections.setMap(map);
            
            }

            //set variables for start point and end point, render datas from request array  and route function
            function routeCalculation() {
                
                var startPoint = document.getElementById('startPoint').value;
                var endPoint = document.getElementById('endPoint').value;
                
                var request = {
                    origin:startPoint,
                    destination:endPoint,
                    travelMode: google.maps.DirectionsTravelMode.DRIVING
                };

                serviceDirections.route(request, function(response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        displayDirections.setDirections(response);
                    }
                });

            }

            google.maps.event.addDomListener(window, 'load', initializeMapFunction);

            //after take start loc and end loc, run function
            document.getElementById("send").onclick = function() {routeCalculation()};