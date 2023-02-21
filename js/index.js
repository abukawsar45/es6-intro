// button handker
document.getElementById('btn-apply-bg').addEventListener('click',function () {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends){
        console.log(friend)
        friend.style.backgroundColor = 'gray';
        // friend.style.padding('5');
    }
    // console.log(friendsBg)
})
document.getElementById('for-new-friend').addEventListener('click', function (){
    const newItem = document.createElement('div');
    newItem.innerHTML = `
    <h3>friend new </h3>
    <p>lieer werr New Add Item</p>
    `;
    const container = document.getElementById('friends');
    container.appendChild(newItem)
    newItem.classList.add('friend')
    console.log(newItem)                       
})