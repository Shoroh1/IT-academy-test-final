const axios = require('axios');

describe('GET/ products/smartphones', () => {
    let result
    beforeAll(async () => {
        let data = '{"productId":"794802","categoryId":"24851"}';
        let config = {
            method: 'post', maxBodyLength: Infinity, url: 'https://5element.by/ajax/cart/cart_add.php', headers: {
                'accept': 'application/json, text/plain, */*',
                'accept-language': 'en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7',
                'cache-control': 'no-cache',
                'content-type': 'application/json;charset=UTF-8',
                'cookie': 'PHPSESSID=ed3b8a267e6a51a6a0f5dffa58c0868c; CITY_ID=31379; key=value; 5element_ct_ref_c=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8=; _ms=aac474c0-6bdc-4a18-b0c7-432611cc239c; cookie_agree=%7B%22main%22%3Atrue%2C%22func%22%3Atrue%2C%22adv%22%3Atrue%7D; acceptCookiesRules=accept; CART_HASH=c41d83ee; advcake_track_id=4f5174aa-7f1c-027c-21ce-feb2f312498b; 5element_ct_id=55092731; IS_MOBILE=0; IS_MOBILE=0; key=value',
                'dnt': '1',
                'origin': 'https://5element.by',
                'pragma': 'no-cache',
                'priority': 'u=1, i',
                'referer': 'https://5element.by/catalog/377-smartfony',
                'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-origin',
                'sec-gpc': '1',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
            }, data: data
        };
        result = await axios.request(config)
    })
    test('should return a list of products/smartphones', async () => {
        expect(result.status).toBe(200);
    })
    test('check data result is true', async() => {
        expect(result.data.result).toEqual(true)
    })
    test('should fetch smartphone id', async() =>{
        expect(result.data.data.product.id).toEqual('794802')
        expect(result.data.data.product.category_id).toEqual('24851')
    })
    test('should fetch smartphone name', async()=>{
        expect(result.data.data.product.name).toContain('Смартфон POCO M6 Pro 12GB/512GB Black EU')
    })
})



