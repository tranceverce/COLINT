function Fetch() {
    var sharetime = []
    var sharevolume = []
    var sharehigh = []
    var sharelow = []
    const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=TSLA&interval=5min&apikey=PBAE2S2K1863DG16'
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // console.log(data['Time Series (5min)'])
            var mydata = data['Time Series (5min)']
            var key, count = 0
            document.getElementById('datecard').style.visibility = 'visible'
            for (key in mydata) {
                if (mydata.hasOwnProperty(key)) {
                    var mykey = key.split(" ")
                    console.log(mykey[1])
                    sharetime[count] = mykey[1]
                    sharevolume[count] = Number(mycount[key]['5. volume'])
                    sharehigh[count] = Number(mycount[key]['2. high'])
                    sharelow[count] = Number(mycount[key]['3. low'])
                    document.getElementById('cdate').innerHTML = `<h3>DATE: ` + mykey[0] + `</h3>`
                    count = count + 1
                }
            }
            var maxprice =Math.max(...sharehigh)
            var minprice =Math.min(...sharelow)

            document.getElementById('share_max').innerHTML=`<h3>MAX: `+ maxprice +`$</h3>`
            document.getElementById('share_min').innerHTML=`<h3>MIN: `+ minprice +`$</h3>`
        })
}