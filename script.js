document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const moreInfo = document.getElementById('moreInfo');

    toggleButton.addEventListener('click', function() {
        if (moreInfo.style.display === 'none') {
            moreInfo.style.display = 'block';
            toggleButton.textContent = 'Show Less About Me';
        } else {
            moreInfo.style.display = 'none';
            toggleButton.textContent = 'Show More About Me';
        }
    });
});
