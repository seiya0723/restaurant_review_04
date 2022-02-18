window.addEventListener("load" , function (){


    //マップの表示位置を指定(緯度・経度)
    var map = L.map('map').setView([34.6217684, -227.2109985], 9);

    //地図データはOSMから読み込み
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    for (let data of datas ){
        L.marker([data["lat"], data["lon"]]).addTo(map).bindPopup(data["name"]).openPopup();
    }


});

