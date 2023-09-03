let scratchusername = prompt("Put the username here!")
await fetch("https://scratch.mit.edu/site-api/comments/user/" + scratchusername + "/add/", {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:109.0) Gecko/20100101 Firefox/115.0",
        "Accept": "text/html, */*; q=0.01",
        "Accept-Language": "pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-CSRFToken": "7GFZ1OesqDPBDMmrS0LIp5ojiFZ90YMP",
        "X-Requested-With": "XMLHttpRequest",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin"
    },
    "referrer": "https://scratch.mit.edu/users/" + scratchusername + "/",
    "body": "{\"content\":\"Hello there! I am truly captivated by the remarkable content you've been crafting on Scratch, the MIT platform for creative expression. Your inventive projects not only reflect your exceptional skills but also serve as a testament to your creative prowess. It's evident that your dedication and innovative spirit shine brightly through each of your creations.\",\"parent_id\":\"\",\"commentee_id\":\"\"}",
    "method": "POST",
    "mode": "cors"
});
alert("message 1/2")
await fetch("https://scratch.mit.edu/site-api/comments/user/" + scratchusername + "/add/", {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:109.0) Gecko/20100101 Firefox/115.0",
        "Accept": "text/html, */*; q=0.01",
        "Accept-Language": "pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-CSRFToken": "7GFZ1OesqDPBDMmrS0LIp5ojiFZ90YMP",
        "X-Requested-With": "XMLHttpRequest",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin"
    },
    "referrer": "https://scratch.mit.edu/users/" + scratchusername + "/",
    "body": "{\"content\":\"Greetings! Your outstanding Scratch projects truly showcase your coding and creative excellence. Your diverse range of interactive games and animations reflects innovative storytelling skills. Your commitment to refining projects is inspiring. Let's connect, learn, and collaborate to push the boundaries of Scratch's creative possibilities. Your unique perspective would greatly enrich the community. I invite you to follow my profile for a mutual exchange of insights. Your impactful contributions have already left an indelible mark. I look forward to potential future interactions and the convergence of our creative journeys. Thank you for being a remarkable inspiration on Scratch.
\",\"parent_id\":\"\",\"commentee_id\":\"\"}",
    "method": "POST",
    "mode": "cors"
});
alert("message 2/2")
