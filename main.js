let logoII = document.querySelector('.logo a img')
logoII.src = chrome.runtime.getURL('images/cysecor_logo.png');
logoII.height = "80"
logoII.width = "80"
console.log(logoII)

let logo = document.querySelector('.lnXdpd')
logo.src = chrome.runtime.getURL('images/cysecor_logo.png');
logo.srcset = chrome.runtime.getURL('images/cysecor_logo.png');