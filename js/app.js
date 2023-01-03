const apiKey = "f73c177d02f7ffedf880666f1c63fe03";

const submitBtn = document.getElementById("srcBtn").addEventListener('click', function () {

    const cityName = document.getElementById("cityName").value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    fetch(url).then(res => res.json()).then(data => {
        console.log(data);
        let name = data.name;
        const des = data.weather[0].description;
        const temp = data.main.temp - 273.15;

        document.getElementById("name").innerText = name;
        document.getElementById("temp").innerText = temp.toFixed(2);
        document.getElementById("tempDes").innerText = des;
    });

});