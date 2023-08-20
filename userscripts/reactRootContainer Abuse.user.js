// ==UserScript==
// @name         Scratch reactRootContainer-Abuse
// @namespace    https://scratch.mit.edu/users/BananaFrita412/
// @version      1.0
// @description  Spam reactRootContainer in Scratch's homepage.
// @author       https://scratch.mit.edu/users/BananaFrita412/
// @match        https://scratch.mit.edu/
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAoCAMAAACB8PcsAAAAQlBMVEUlr/T+8ND+357+ylv9uSj957X9wD3///8osPQZq/T+0nT/+u79sAz+2IY3tvV7zvby+/9lxvdNvfXW7/u04/mV2PeuRWLbAAABsUlEQVRIx+2U2Y6lMAxEY8d2dnb+/1enAtzul9EorX4bUUIsET7Exi7nXr169VfF+MvoCxAhl6B4qy/cLwyTrvD0XN20rVO65a7naXJpEBbTtJ77PrsEyrbuATrneT7P1W3zvC/Lsq9jsJjWpYeH47yvhSg82j83YQgW0xYCac7lwahIbaSqzFhSbSbCYR/b1tHDDe8XL/3Gk1YxSDxWTLJmKcs0BNuDZSreslQlZgT3BcXWqkguamQ+LEP1mpYiKvi2z9m4Uq4NGWffhFlJ2CoLhXOgXviJSxDOHpHEvpBid43MPNfMBlbLBNY2xFoDiWf1ihp5MjWjzHqxGpJkbfoDFipSPTGKgxwB1coqvtWGwzernXUMsWawigJhXlvxjIKZVCPyRg3polq99pMbY2FDVrEfQwdIFi7KSBj9kbGC/Ad7orcquigrobkQRs249zk6VQsy5N6qpuO9Gso1O+UzMOcZvlWojM4QaMcS9rMP43LM87Efa0qYaeg4jhNfCsOz7bo/xITT9rGaGNOXHLwDj3Hcv9zlge7xv9sUHzvsPPcDp43/sOb4O8t+9er/0h95rxaUtfjk7wAAAABJRU5ErkJggg==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
document.querySelector('#app')._reactRootContainer._internalRoot.current.child.stateNode.props.store.getState().permissions.educator = true;
document.querySelector('#app')._reactRootContainer._internalRoot.current.child.stateNode.props.store.getState().permissions.admin = true;
document.querySelector('#app')._reactRootContainer._internalRoot.current.child.stateNode.props.store.getState().permissions.scratcher = true;
document.querySelector('#app')._reactRootContainer._internalRoot.current.child.stateNode.props.store.getState().permissions.social = true;
document.querySelector('#app')._reactRootContainer._internalRoot.current.child.stateNode.props.store.getState().permissions.educator_invitee = true;
    //document.querySelector('#app')._reactRootContainer._internalRoot.current.child.stateNode.props.store.getState().permissions.new_scratcher = true; // ONLY SET ON IF YOU WANT BE (TEMP) A NEW SCRATCHER!
let perms = document.querySelector('#app')._reactRootContainer._internalRoot.current.child.stateNode.props.store.getState().permissions;
console.log(perms);
})();
