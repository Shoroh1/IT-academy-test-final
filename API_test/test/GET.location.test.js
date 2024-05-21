const axios = require('axios');

describe('GET/ locations', () => {
    let response
    beforeAll(async () => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://5element.by/ajax/autocomplete_location.php?need_slug=true&name=%D0%91%D0%B0%D1%80%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87%D0%B8',
            headers: {
                'accept': 'application/json, text/plain, */*',
                'accept-language': 'ru-BY,ru;q=0.9,es-BY;q=0.8,es;q=0.7,en-BY;q=0.6,en;q=0.5,ru-RU;q=0.4,en-US;q=0.3',
                'cookie': 'CITY_ID=31379; _userGUID=0:lvu008s9:SspaTeCYxWnueRE3qRi68nLMhAG_Asvu; advcake_track_id=d9560ed4-5c94-f595-3b6c-719d471df418; advcake_session_id=b954bb8d-c705-c7a1-9a68-d61bab78e4fd; _ms=7809440a-9985-4584-8bd3-f315d525fb0c; _ymab_param=NJnEHEZO0nuvYtszRSwZDowNqt1DJciu9IrloBCf1tZZkq67oEvfEa1Z91rv2Hb4KjSzMNPvFZj6mn6UHmjiMsPGi-c; advcake_track_url=%3D20240506en5rPb02F0t4tvPebyq6w%2FfM64KjaCjVuQN8JYqPZ5MN7MG0Lbdbo58cqiFpJQFta82MwZ9Ey%2B4xLM3HGiaiCivhJ5%2B%2F5B%2B7WrHUKO5IuU%2FBE%2B3LQB4notu3dNUj6B4FMJKFe6jecrFFxJ5%2BIURIT9SQ18iX8SY66B26gui8zinh5j0VgIfntSBrjXQhWJKm04TBxjq39tBVGQLxShYT1IF2S59lNYNXTOi5Q9wc%2B7OGF3ifC%2BDJSKTrb2RngE6%2F8Ff9h%2FlScJykAL8EI6zNeMDl7leUm6nBFs8onovtQB9BK29ujfTsvf9CEH3%2B7jjFQm%2FVPgjCWHchqzSdO05LP8OaB3No4qa6EBuxwVv%2Bv2r69B18g1WyI1QjvpiOfFQ%2BmagwLirNERxxZQ7Vmhb4Is3xX2DIncHysIBg3S8pafwL8mQW5EyO77Sltoee3ycPVF0FaYy1WUH1LELB8QTVY3l8%2BanYFmgN9WsvEk%2FUxxRzp%2FMaxLdx5lvr3P6mfWf1fj4mEoyp62TNd6RYy0ueQiLzWEhRq%2FvoEWddSJBku8Bug58lEe33O1YOE2VOaHXBFTeECtSxdUhF9TM285G0XCkSV%2Fw%2BnimIKch0QC9blv5chNndHnjkME7ofUaysljxONu%2BfXK0KSDW3sW%2FMkNxu87Y76m4UAjz53B2lYp8x4YD0YMjQIPJP2c%3D; key=value; PHPSESSID=a16c54cc0951abb575adc6202266ccc4; CART_HASH=06931d8f; 5element_ct_ref_c=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8=; 5element_ct_id=42894250; IS_MOBILE=0; DIGI_CARTID=88940711795; IS_MOBILE=0; key=value',
                'priority': 'u=1, i',
                'referer': 'https://5element.by/cart',
                'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-origin',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
            }
        };
        response = await axios.request(config)
    })

    test('200 status', async() => {
        expect(response.status).toBe(200)
    })
    test('locations gte 2', async() => {
        expect(response.data.length).toBeGreaterThan(1)
    })

    test('locatison id', async()=>{
        expect(response.data[0].ID).toEqual('279')
    })

})