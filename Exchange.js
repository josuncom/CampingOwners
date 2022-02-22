let testCase = [
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'X', firewood:'10,000', couponFlag:'미발급'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'미발급'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'X', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'미발급'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'미발급'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'X', firewood:'10,000', couponFlag:'미발급'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'미발급'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'X', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'미발급'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'미발급'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'X', firewood:'10,000', couponFlag:'미발급'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'미발급'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'X', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'미발급'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'미발급'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'},
    {time:'2021/12/31 24:00', id:'IdIdID', NaverId:'IdIdID', IdFlag:'O', firewood:'10,000', couponFlag:'발급완료'}
];


const FIREWOOD_INFO = "FirewoodInfo";
const userCount = document.getElementById('userCount');
const TableArea = document.querySelector('.clientList');
const clientTable = document.createElement("table");

function dataInit(){
    var cnt = 0;

    testCase.forEach(element => {
            localStorage.setItem(FIREWOOD_INFO, JSON.stringify(testCase));
            cnt++;
    })
}

function drawTable(){
    testCase.forEach(element => {
        const newData = clientTable.insertRow();
        const newData1 = newData.insertCell(0);
        const newData2 = newData.insertCell(1);
        const newData3 = newData.insertCell(2);
        const newData4 = newData.insertCell(3);
        const newData5 = newData.insertCell(4);
        const newData6 = newData.insertCell(5);
    
        newData1.innerText = element.time;
        newData2.innerText = element.id;
        newData3.innerText = element.NaverId;
        newData4.innerText = element.IdFlag;
        newData5.innerText = element.firewood;
        newData6.innerText = element.couponFlag;     
        userCount.innerHTML = `전체 유저 ${testCase.length} 명`;

        TableArea.appendChild(clientTable);
    });
}

function tableSetting(){
    clientTable.id = 'Table';

    let nickname = document.createElement('td');
    nickname.innerHTML = "신청 일시";

    let id = document.createElement('td');
    id.innerHTML = "유저 아이디";

    let createdAt = document.createElement('td');
    createdAt.innerHTML = "네이버 아이디";

    let recentLogin = document.createElement('td');
    recentLogin.innerHTML = "아이디 일치 여부";

    let feed = document.createElement('td');
    feed.innerHTML = "전환 신청 장작";

    let firewoods = document.createElement('td');
    firewoods.innerHTML = "쿠폰 발급 상태";


    clientTable.appendChild(nickname);
    clientTable.appendChild(id);
    clientTable.appendChild(createdAt);
    clientTable.appendChild(recentLogin);
    clientTable.appendChild(feed);
    clientTable.appendChild(firewoods);
}


dataInit();
tableSetting();
drawTable();

