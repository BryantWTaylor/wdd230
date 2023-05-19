const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', () => {
    const myChap = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listButton = document.createElement('button');

    listItem.textContent = myChap;
    listItem.appendChild(listButton);
    listButton.innerHTML = `&#10060;`
    list.appendChild(listItem)

    listButton.addEventListener('click', () => {
        list.removeChild(listItem);
    });

    input.focus();
});