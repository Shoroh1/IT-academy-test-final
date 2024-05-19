const axios = require('axios');

describe('', () => {
    let response
    beforeAll(async () => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://api.multisearch.io/?query=iPhone&id=11432&lang=ru&autocomplete=true',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Accept-Language': 'ru-BY,ru;q=0.9,es-BY;q=0.8,es;q=0.7,en-BY;q=0.6,en;q=0.5,ru-RU;q=0.4,en-US;q=0.3',
                'Connection': 'keep-alive',
                'Origin': 'https://5element.by',
                'Referer': 'https://5element.by/',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'cross-site',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
                'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
                'Cookie': '_session_id=0gmJFMGqnMLQQMghQj76riGR1uq1s7kHDGanLaxHHbrLw0cpLlU25BoC6H7MXyXs45gIKhdD%2BUsykZ79dLFVOUsa6E2IFxbHdWbjeTD37Za02EcpZ8XKTemiBxk%2F30RggWUTHyUJ6QSo5fFmcYGeFJudxFWzRQ%2BQusj8Gv%2BpebYDVTdECz9YfhQXHHnzz%2FP4e35r%2FOwO5mp6A7ax4VLebllKfnGV%2FwS2dg%3D%3D--ou3rM45c6Yf86sqa--TKU9hsXa%2FE6ZbNywJad8dw%3D%3D'
            }
        };
        response = await axios.request(config)
    })

    test('name test', async() =>{
        expect(response.status).toBe(200);
    })
    test('response === request', async() =>{
        expect(response.data.query).toContain('iPhone')
    })
    test('suggests is more than 0', async() => {
        expect(response.data.results.suggest.length).toBeGreaterThan(0)
    })
    test('categories is more than 0', async() => {
        expect(response.data.results.categories.length).toBeGreaterThan(0)
    })
    test('items is more than 0', async() => {
        expect(response.data.results.items.length).toBeGreaterThan(0)
    })
})