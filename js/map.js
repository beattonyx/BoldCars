const apiKey = 'AIzaSyCMInU02jNBPLOm-gVUUte48PSGC4xXVGI';
const companyName = 'BOLD CARS - California Collision Center';
const locationBoldCars = '34.083468,-118.146197'; // Широта и долгота приблизительного местоположения компании
const radius = 500; // Радиус поиска в метрах

fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${companyName}&inputtype=textquery&fields=place_id&locationbias=circle:${radius}@${location}&key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        if (data.candidates && data.candidates.length > 0) {
            const placeId = data.candidates[0].place_id;
            console.log('Place ID:', placeId);
        } else {
            console.error('Place not found');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });