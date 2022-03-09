let body = document.querySelector('body');
let splash = document.querySelector('.splash');
let main = document.querySelector('.main');
// console.log(body);

function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie() {
    if (document.cookie.split(';').some((item) => item.trim().startsWith('agepopshown='))) {
        let cookie = document.cookie
            .split('; ')
            .find(row => row.startsWith('agepopshown='))
            .split('=')[1];
        console.log(cookie);
        return cookie;
    } else {
        return 0;
    }
}

window.onload = function() {
    let cookie = getCookie();
    console.log(cookie);

    if (cookie === 0) {
        // hide site
        splash.style.display = 'none';
        main.style.display = 'none';

        // create overlay
        let overlay = document.createElement('div');
        overlay.id = 'overlay';

        // overlay style
        overlay.style = 'min-height: 100vh; min-width: 100vw; position: absolute; text-align: center; background-color: #425030;';
        
    // overlay elements
        let container = document.createElement('div');
        container.id = 'wrapper';
        container.style = 'top: 50%; left: 50%; transform: translate(-50%, -50%); position: absolute;';

        // heading
        let headingOne = document.createElement('h1');
        headingOne.id = 'htext';
        headingOne.innerText = 'Welcome To';
        headingOne.style = 'font-family: domainRegular; color: #ffffff; white-space: nowrap;';

        // logo
        let logo = document.createElement('img');
        logo.id = 'vLogo';

        // break
        let b = document.createElement('br');

        // button wrapper for responsiveness
        let bwrap = document.createElement('div');
        bwrap.id = 'bwrap';

        // age verification buttons
        let overButton = document.createElement('button');
        overButton.id = 'overButton';
        overButton.innerText = 'I AM OVER 21';
        overButton.style = 'padding: 10px 10px 5px 10px; background: none;';

        let underButton = document.createElement('button');
        underButton.id = 'underButton';
        underButton.innerText = 'I AM UNDER 21';
        underButton.style = 'padding: 10px 10px 5px 10px; background: none;';

        let p = document.createElement('p');
        p.innerText = 'By clicking “I am over 21” I represent I am at least the age of twenty-one (21). I have read, understood, and agree to Terms of Service and Privacy Policy.';
        p.style = 'margin-top: 1em; color: #ffffff; font-family: untitledSans_regular_italic; font-size: .8rem;'

        // append elements to overlay
        container.appendChild(headingOne);
        container.appendChild(logo);
        container.appendChild(b);
        bwrap.appendChild(overButton);
        bwrap.appendChild(underButton);
        container.appendChild(bwrap);
        container.appendChild(p);
        overlay.appendChild(container);
        body.appendChild(overlay);

        // event listeners
        overButton.addEventListener('click', () => {
            setCookie('agepopshown', 1, 365);
            location.reload();
        })

        underButton.addEventListener('click', () => {
            window.history.back();
        })

    } else if (cookie === 1) {
        splash.style.display = 'block';
        main.style.display = 'block';
    }
}