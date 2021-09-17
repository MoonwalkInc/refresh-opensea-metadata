const axios = require('axios');

// CHANGE THESE VALUES - - - -
const contractAddress = "0x50.........";
const tokenIds = {
    start: 1,
    end: 10
}
// END  - - - - - - - - - - - -

let currentTokenId = tokenIds.start;
while (currentTokenId <= tokenIds.end) {
    
    const config = {
        method: 'get',
        url: `https://api.opensea.io/api/v1/asset/${contractAddress}/${currentTokenId}/?force_update=true`,
    };

    axios(config)
        .then(function (response) {
            console.info(`[😋success] refreshed metadata: ${response.config.url}`)
        })
        .catch(function (error) {
            console.error(`[🤬!!!!!!!] error refreshing metadata: ${error.response.config.url}`)
        });
    currentTokenId++
}
