function get_Data() {
    var x = document.getElementById("city").value
    if (x === "") {
        alert("ENTER CITY NAME")
    }
    console.log(x)
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + x + "&appid=1bcfce0704b3f2a332d73606907a9d83&units=metric"
    // console.log(url)
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data['cod'] === '404') {
                alert('City not found')
            } else {
                var y = data['main']['temp']
                var z = data['weather']['0']['icon']
                var icon_url = 'http://openweathermap.org/img/wn/' + z + '@2x.png'
                console.log(z)
                document.getElementById("result").innerHTML = `<h1>The temperature is ` + String(y) + `&degC</h1>` + `<br>` + `<img src=` + z + `>`
            }

        });
}