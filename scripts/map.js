// 創建地圖
const map = L.map('map').setView([23.150212463433, 120.17831077107], 100);

// 添加底圖
const baseEMAPHighDPI = L.tileLayer('https://wmts.nlsc.gov.tw/wmts/EMAP96/default/GoogleMapsCompatible/{z}/{y}/{x}', {
  maxNativeZoom: 20,
  maxZoom: 20,
  minZoom: 5
});
baseEMAPHighDPI.addTo(map);

// 添加標記
L.marker([23.1417, 120.2513]).addTo(map)
    .bindPopup('這是一個 Leaflet 標記。')
    .openPopup();


const Convert_data=[
    // [
    //     ['地址'],['經緯度'],['年份']
    // ]
    [
        ['abc'],
        [[ 23.150212463433,120.17831077107  ],
        [ 23.150196035338,120.17831048507],
        [ 23.150235709081,120.17857419216 ],
        [ 23.150249272587,120.17864149661  ],
        [ 23.150280902112,120.17864651716  ],
        [ 23.1503477879 ,120.17866725245],
        [ 23.1503743913,120.17868427501],
        [ 23.150461404106,120.17831881091],
        [ 23.150212463433,120.17831077107 ]],
        ['100']
    ],
    [
        ['def'],
        [[ 23.150717098096,120.17707184072],
        [ 23.150534858854,120.17706629215],
        [ 23.150549555358,120.17711109506],
        [ 23.150717329991,120.17711624931],
        [ 23.150717098096,120.17707184072]],
        ['100']
    ]
]

let popup = L.popup()
    .setLatLng([ 23.150212463433,120.17831077107])
    .setContent('<p>Hello world!<br />This is a nice popup.</p>');



var polygon = L.polygon(Convert_data[0][1], {
    color: 'red',smoothFactor:1.0},).addTo(map)


// 滑鼠事件 MouseEvent
polygon.addEventListener('mouseover',(data)=>{
    popup.setLatLng(data.latlng)
    popup.openOn(map)
});

polygon.addEventListener('mouseout',(data)=>{
    popup.close(map)
});

//跳轉到畫圖區
map.fitBounds(polygon.getBounds());
