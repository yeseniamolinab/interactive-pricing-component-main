const slider = document.querySelector('.slider');
const price = document.getElementById('price');
const pageViews = document.getElementById('pageViews');
const getPrice = () => {
    console.log('getprice');
    const viewPrice = 0.00016;
    return slider.value * viewPrice;
}

slider.addEventListener('input', function(e) {
    console.log('slider');
    let views = e.target.value/1000;
    pageViews.innerHTML = `${views}K`;
    price.textContent = getPrice().toFixed(2);
})