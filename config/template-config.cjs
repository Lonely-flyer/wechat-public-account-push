/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '亲爱的, 早上好',
desc: `🗓️ {{date.DATA}}
    🏠
    城市：{{province.DATA}}{{city.DATA}}
    ☁️ {{weather.DATA}}
    最低气温：{{min_temperature.DATA}} °C
    最高气温：{{max_temperature.DATA}} °C
    💨 {{wind_direction.DATA}} {{wind_scale.DATA}} 
    ☀️：{{notice.DATA}}

    📅 {{wx_holidaytts_0.DATA}}{{wx_holidaytts_1.DATA}}{{wx_holidaytts_2.DATA}}{{wx_holidaytts_3.DATA}}{{wx_holidaytts_4.DATA}}

    🎂 {{wx_birthday_1.DATA}}
    🎂 {{wx_birthday_0.DATA}}

    💌 {{wx_earthy_love_words_0.DATA}}{{wx_earthy_love_words_1.DATA}}{{wx_earthy_love_words_2.DATA}}

    *** {{wx_poetry_content_0.DATA}}{{wx_poetry_content_1.DATA}} ***
    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG