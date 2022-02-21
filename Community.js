let testCase = [
    {createdAt:'2022/02/22 22:22:22', userName:'김닉네임닉네임', content:'게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.',
    feeds : 50},
    {createdAt:'2022/02/22 22:22:22', userName:'김닉네임닉네임', content:'게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.',
    feeds : 50},
    {createdAt:'2022/02/22 22:22:22', userName:'김닉네임닉네임', content:'게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.',
    feeds : 50},
    {createdAt:'2022/02/22 22:22:22', userName:'김닉네임닉네임', content:'게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.',
    feeds : 50},
    {createdAt:'2022/02/22 22:22:22', userName:'김닉네임닉네임', content:'게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.',
    feeds : 50},
    {createdAt:'2022/02/22 22:22:22', userName:'김닉네임닉네임', content:'게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.',
    feeds : 50},
    {createdAt:'2022/02/22 22:22:22', userName:'김닉네임닉네임', content:'게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.',
    feeds : 50},
    {createdAt:'2022/02/22 22:22:22', userName:'김닉네임닉네임', content:'게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.',
    feeds : 50},
    {createdAt:'2022/02/22 22:22:22', userName:'김닉네임닉네임', content:'게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.',
    feeds : 50},
    {createdAt:'2022/02/22 22:22:22', userName:'김닉네임닉네임', content:'게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.',
    feeds : 50},
    {createdAt:'2022/02/22 22:22:22', userName:'김닉네임닉네임', content:'게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.',
    feeds : 50}
];

const COMM_INFO = "communityInfo";
const communityCount = document.getElementById('communityCount');
const TableArea = document.querySelector('.communityList');
const communityTable = document.createElement("table");

function dataInit(){
    var cnt = 0;

    testCase.forEach(element => {
            localStorage.setItem(COMM_INFO, JSON.stringify(testCase));
            cnt++;
    })
}

function drawTable(){
    testCase.forEach(element => {
        const newData = communityTable.insertRow();
        const newData1 = newData.insertCell(0);
        const newData2 = newData.insertCell(1);
        const newData3 = newData.insertCell(2);
        const newData4 = newData.insertCell(3);
        const newData5 = newData.insertCell(4);
    
        newData1.innerText = element.createdAt;
        newData2.innerText = element.userName;
        newData3.innerText = element.content;
        newData4.innerText = element.feeds;

        communityCount.innerHTML = `전체글 ${testCase.length} 개`;

        const BUTTON = document.createElement('button');
        BUTTON.id = element.createdAt;
        BUTTON.innerHTML = '삭제';
        
        newData5.appendChild(BUTTON);
    });
    
    TableArea.appendChild(communityTable);
}


function tableSetting(){
    communityTable.id = 'Table';

    let createdAt = document.createElement('td');
    createdAt.innerHTML = "작성일시";

    let userName = document.createElement('td');
    userName.innerHTML = "작성자";

    let content = document.createElement('td');
    content.innerHTML = "내용";

    let feeds = document.createElement('td');
    feeds.innerHTML = "댓글수";

    let deleteBtn = document.createElement('td');
    deleteBtn.innerHTML = "계정삭제";

    communityTable.appendChild(createdAt);
    communityTable.appendChild(userName);
    communityTable.appendChild(content);
    communityTable.appendChild(feeds);
    communityTable.appendChild(deleteBtn);
}

dataInit();
tableSetting();
drawTable();


const BTNS = document.querySelectorAll('button');

for(const button of BTNS){
    button.addEventListener('click', () => {
        if(confirm('게시글을 삭제하시겠습니까?') == true)
            data = localStorage.getItem(COMM_INFO);
            targetIndex = JSON.parse(data).findIndex(i => i.createdAt == `${button.id}`);
            var removed = testCase.splice(targetIndex, 1);
            localStorage.removeItem(COMM_INFO);
            localStorage.setItem(COMM_INFO, JSON.stringify(testCase));
            communityTable.deleteRow(targetIndex);
            communityCount.innerHTML = `전체글 ${testCase.length} 개`;
        })
}




