var input = document.getElementById("input_x");
var main = document.getElementById("name");
var temp = document.getElementById("temp");
var desc = document.getElementById("desc");
var button = document.getElementById("submit");

button.addEventListener('click', function (name) {
    fetch('api.openweathermap.org/data/2.5/weather?q=' + input.value + '& appid = f34c8963461d1488cde03afd66195a4c')
        .then(response => response.json())
        .then(data => {
            var tempValue = data['main']['temp']
            var nameValue = data['name']
            var descValue = data['weather'][0]['description']
        })

    var tempInCelcius = Math.floor(tempValue - 273.15);

    main.innerHTML = nameValue
    desc.innerHTML = "Description - " + descValue
    temp.innerHTML = "Temperature - " + tempInCelcius + " degree celcius "
    input.value = ""
})