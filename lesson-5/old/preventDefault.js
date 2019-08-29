document.addEventListener('contextmenu', (e) => {
    console.log('Listener 1');
});
document.addEventListener('contextmenu', (e) => {
    console.log('Listener 2');

});

document.oncontextmenu = (e) => {
    e.preventDefault();
    console.log('Listener 3');
    throw Error('My error');
}
