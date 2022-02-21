const TABLE = document.createElement('table');
const TableArea = document.querySelector('.firewoodTable');

let tableContents = [
    {title : '상품 구매 적립', content : '상품 구매시 결제 금액의 n% 적립', method : '퍼센트(%)', size : '2'},
    {title : '리뷰 작성 보상', content : '리뷰 작성시 200개 적립', method : '고정값', size : '200'},
    {title : '가입 쿠폰 입력', content : '가입시 쿠폰번호 입력시 500개 적립', method : '고정값', size : '500'},
    {title : '출석 보상', content : '매일 출석시 하루 한 번 10개 적립', method : '고정값', size : '10'}
];

function tableSetting(){
    TABLE.id = 'FW_TABLE';

    let TITLE = document.createElement('td');
    TITLE.innerHTML = "제목";

    let CONTENT = document.createElement('td');
    CONTENT.innerHTML = "내용";

    let METHOD = document.createElement('td');
    METHOD.innerHTML = "적립방식";

    let SIZE = document.createElement('td');
    SIZE.innerHTML = "적립수치";

    let deleteBtn = document.createElement('td');
    deleteBtn.innerHTML = "삭제";

    TABLE.appendChild(TITLE);
    TABLE.appendChild(CONTENT);
    TABLE.appendChild(METHOD);
    TABLE.appendChild(SIZE);
    TABLE.appendChild(deleteBtn);
}

function drawTable(){
    tableContents.forEach(element => {
        const newData = TABLE.insertRow();
        const newData1 = newData.insertCell(0);
        const newData2 = newData.insertCell(1);
        const newData3 = newData.insertCell(2);
        const newData4 = newData.insertCell(3);
        const newData5 = newData.insertCell(4);


        newData1.innerText = element.title; 
        newData2.innerText = element.content;
        newData3.innerText = element.method;
        newData4.innerText = element.size;

        const BUTTON = document.createElement('button');
        BUTTON.id = 'buttons'
        BUTTON.innerHTML = '삭제';
    
        newData5.appendChild(BUTTON);
    });

    
    TableArea.appendChild(TABLE);
}


tableSetting();
drawTable();