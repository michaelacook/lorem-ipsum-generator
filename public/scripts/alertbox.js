/* Handle closing of alert box */

document.addEventListener('click', e => {
    if (e.target.className == 'close-alert') {
        closeAlertBox(e);
    }
}); 

function closeAlertBox(e) {
    const alert = e.target
        .parentNode
        .parentNode;
    alert.remove();
    let href = window.location.href;
    window.location = href.substring(0, href.indexOf('?'));
}