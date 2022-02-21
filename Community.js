var testCase = [
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

const communityCount = document.getElementById('communityCount');
communityCount.innerHTML = `전체글 ${testCase.length} 개`;

const TableArea = document.querySelector('.communityList');

const communityTable = document.createElement("table");
communityTable.id = 'Table';

let createdAt = document.createElement('td');
createdAt.innerHTML = "작성일시";

let userName = document.createElement('td');
userName.innerHTML = "작성자";

let content = document.createElement('td');
content.innerHTML = "내용";

let feeds = document.createElement('td');
feeds.innerHTML = "댓글수";

communityTable.appendChild(createdAt);
communityTable.appendChild(userName);
communityTable.appendChild(content);
communityTable.appendChild(feeds);


testCase.forEach(element => {
    const newData = communityTable.insertRow();

    const newData1 = newData.insertCell(0);
    const newData2 = newData.insertCell(1);
    const newData3 = newData.insertCell(2);
    const newData4 = newData.insertCell(3);
    const newData5 = newData.insertCell(4);

    newData1.innerText = testCase[0].createdAt;
    newData2.innerText = testCase[0].userName;
    newData3.innerText = testCase[0].content;
    newData4.innerText = testCase[0].feeds;

    const BUTTON = document.createElement('button');
    newData5.appendChild(BUTTON);
});

TableArea.appendChild(communityTable);