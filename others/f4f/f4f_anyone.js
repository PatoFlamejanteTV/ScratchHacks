let scratchusername = prompt("Put the username here!")
await fetch("https://scratch.mit.edu/site-api/comments/user/" + scratchusername + "/add/", {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:109.0) Gecko/20100101 Firefox/115.0",
        "Accept": "text/html, */*; q=0.01",
        "Accept-Language": "pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-CSRFToken": "INSERT TOKEN HERE",
        "X-Requested-With": "XMLHttpRequest",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin"
    },
    "referrer": "https://scratch.mit.edu/users/" + scratchusername + "/",
    "body": "{\"content\":\"f4f pls?\",\"parent_id\":\"\",\"commentee_id\":\"\"}",
    "method": "POST",
    "mode": "cors"
});
