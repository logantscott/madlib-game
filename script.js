const button = document.getElementById('adlibButton');

const updateAdlibs = () => {
    // aside.textContent = asideInput.value
    let libs = document.getElementsByTagName('span')

    //don't know for each so do each frickin adlib
    Array.from(libs).forEach((lib) => {
        // Do stuff here
        console.log(lib.id);
        lib.textContent = document.getElementById(lib.id + 'input').value
    });
};

button.addEventListener('click', updateAdlibs); 