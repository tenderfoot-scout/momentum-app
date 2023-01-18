// ----- NAME -----
function displayName() {
    const searchParams = new URLSearchParams(window.location.search)
    const name = searchParams.get('name')
    document.getElementById('name').innerHTML = name;  
}
displayName();