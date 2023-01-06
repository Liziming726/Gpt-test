import {ChatGPTAPI} from 'chatgpt';

export class ChatGPTController{
    constructor(ctx){
        this.ctx = ctx;
        this.api = new ChatGPTAPI({
            sessionToken:'eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..EJOkL9MU5Hs79VZq.qbqkFaNZ7rug2ktAYkiVLS7Be3CDtnvZH2pW3qB58zEqeyhZeLDfG70WMFg3WRuckazBbtbjNI-RiAm3mYFHQP9rNlZg-5wqz3uvpW73AAVH0ATHt0U1WRvwKFaQJaNs4pDLoax6PWQz_KngztslkDjVcNm9jMRVSNnfgSxHseP0XNAm-N-BIF8W75ZzRBlOvBwCXbpiSQIEVi9QYGJts6KfnTb0F21AR7rPMMG4NKNC2VqGlex3dXys7bK0ILeBlerlA4p90pqr0ryuDQcVBq3BDhdeqkGpytzYceh3fRDnlZ3JP5m_wPVPLlZsstq1yNyb0ykvOdUxegvT1X36I1SUuY8EJpZNT8QfsWIQEToOjczyLjwOuxpHk1kG7rV4J_LRI0TQo4f-bPQsoTlyvBCydV_6Hm0skrbWmYcW-Tdke2GAk0rJWx6zL50HOGRZ2qxAnv0HoQ7c9DNtaDW03CkPNOwt5F5gEq6avmyVOM--DuGiNe9L_WKNw2FYlTGq5jUZ2L1zlp6JlER-s9FeFJOhayQTmG7KdGAknrycIgScv0PukaWPFTm6Ou-vUE9G8IrO4PF3OD0RgfULuGxiWEdHCY_SvBGM4BwTt-AjhyZ-GHW1c2hIVqTm71qE_SYp_3drHoPIGvHIMj5D--hiA58G3wJMapRf95VmGmG_7IW1sdZpnIcft9qqKD3FAQkw37JWJjzGxw0Mdkqa8I9ffLqsd2MWIJOgghISXqeTgPRqklbt-t8a8V0bVHPowQiR5-qmIBS6QD7YJBsNI7LA9ZwVd7IDaREZAGYcqdwMAetR95SbUkd9m_BmOqBxi56vlgAV2h4SvHK6HoZzFuQvaVd8PiYib6hswu02WKZWWoagk34jm-E0xzXfQd_nXwIpPFgz_cPBP-0qflzJ62ib9GSF1JDUVogtAL_mmP__2eHQgBXQBvfk19XXajaLyJTms2u8r6t1uBj1WPpqn1WkvNe9kttYRC9s8Rt-wtYJt71A6_DVuwU_pu9JAWV-V_ivO5aaRehHpgFeh7b7eepYTcoeK8bjaPUN1ml7sjymwtMGafdQ-UR_gDVJ7wSnvlepaChn-oMr2DqCt0x4vNHcqJ8juOv8w6vnHd9dR4JYMoWDJPNk_RdnfCcNNp214rIKWVA1ESssv5tGlXIhBQtNANpteTodUNZ1y5fh2pfldH7Av0-trau6iYetvghAmBZRlzm7AwQbdRADQI3OU14bwQmrwC5wia7edkA47H3-DllPzqbKZ-YpRN9baWvkr8PekFmJLZdim9PtnUgqZMh9BpCKw6-m_iP6PnV_PTEEB_XuX9wvAuCDtl_RGoh1ELpwIXBrYA7qvs4VRXFRKExMaLmt4PB3MaQTaN8qxzx-V2XV1aqbabq7kiKX1YRsQwLVlr0ohLp0DKayDROCYitNXgh-SI3Cir837WWHEHR04BbknMmdO8M03vCFQxWAm-mC2u3L_UQTx7-6tZFfEfihdqP0fsB6S8hR_eWYtrnB2TjBnOO1mvyQaazpXBMF4AotMYIdNlNsDoEc_7wUukX9k_D3XXNd6glwr8JtuMH-L62XMWWGQVOBhJuiLYDyP8TIwyRzVwfQKQXNy8AMhEmCXzw2eUdjM1veWb5S0-FNsEyGqS9AhghmcnM9bF4u4flZED5INLWWmj6oU182VBKINhgkfU2cQK88BA8UUTHFlWGEXBfW2uxHNPNmQAfDZW3DsSf_AIN7NJ2vIUZQt3Zd00C0Wmo20L5CTG1E3fbpqwnXl9baXLyNJoKAxmNa-px-_LgMf6od5-prT0CiPCofclqn33IE-GBW39SfEFA0rAoj2ORl_MrRe0HEIwcprf66u2fxMV87JRkMVdUiW6GOG-cDtsWXkwRgMFAFC94VKuld4NUT09xQN0skYk5j3R6qzvb5Nh5vqNXS1ZUbMGUJtv7xbLp78QJ6t0deGAargKiTYpHoRoC5Cf-mNMFzgpSRqrKvZ8q4Mdae4pqBER_vZnwfy257FlDH-IRA-hFB9vWYNPkE2L0LSj851h5RelmfjJ9Tk-MjcUMiqeLdv6AFt_FFuhEXQj1I2pG1z-EwGmc2YpN6DSVHfNXjAaOhx167UHunr25EGq_DfeJksJEjAK6Id74DmW8c6flTO10GSDob_apF6wZfB-bWL10UxsOrpo9Mr9yesyFW4vPhgaMUh5VErTY3heuqPjV6b-3aa_1XdLdPtzAlH2WAmlAFtzCW-GW6BTqOth54z1UdsGbuMWX_1qggmKxO075K2rccSHf2qTQ47Ai2MX4ODzfhv5yg88QyjggQ6V5UrSRnFt276EWjxSHefKIYd6At_4vkzWPMrg.QarBlKqyRB3YH9I0eFafDw',
                        
        })
    }
    async conversation(){
        const {question} = this.ctx.request.body;
        const answer = await this.api.sendMessage(question+"这句话的中文是什么，所对应的语法知识都有哪些")
        console.log(answer);
        this,ctx.body = {
            state:'OK',
            data:answer
    }
}
}