/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】
 * 自行添加属性，以支持更多个性化功能
 */

/** 
 * 国际时间对应北京时间
 * 16:00 - 00:00
 * 17:00 - 01:00
 * 18:00 - 02:00
 * 19:00 - 03:00
 * 20:00 - 04:00
 * 21:00 - 05:00
 * 22:00 - 06:00
 * 23:00 - 07:00
 * 0:00 - 8:00
 * 1:00 - 9:00
 * 2:00 - 10:00
 * 3:00 - 11:00
 * 4:00 - 12:00
 * 5:00 - 13:00
 * 6:00 - 14:00
 * 7:00 - 15:00
 * 8:00 - 16:00
 * 9:00 - 17:00
 * 10:00 - 18:00
 * 11:00 - 19:00
 * 12:00 - 20:00
 * 13:00 - 21:00
 * 14:00 - 22:00
 * 15:00 - 23:00
*/

function getConfig() {
	// 判断当前是上午还是晚上 国际时间
	// const isMorning = new Date().getHours() < 2 || new Date().getHours() >= 16;
	const isMorning = true;
	console.log('isMorning: ', isMorning);

	const USER_CONFIG = {
		// 使用微信测试号：公众号APP_ID
		APP_ID: "wxf60ec510a5fe86ad",

		// 使用微信测试号：公众号APP_SECRET
		APP_SECRET: "a01a0688fb3c5d9c5f2488c99302c5d9",

		PROVINCE: "贵州",
		CITY: "贵阳",

		USERS: [
			// {
			// 	// 想要发送的人的名字
			// 	name: "陈皮",
			// 	// 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
			// 	id: "oVm8968BlldCbEbr6sf0RouaCu54", // oVm8968BlldCbEbr6sf0RouaCu54
			// 	// 使用微信测试号：你想对他发送的模板消息的模板ID
			// 	useTemplateId: isMorning ? "xlSq7uhZLhlUr6yCa6f-v2VwTzUsKBwEIPPj2O1Vizk" : "k724cnSPLEZEN2IdufhuxuOHFx9Ya8fut-afxKDD8mg",
			// 	// 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
			// 	horoscopeDate: "10-24",
			// 	festivals: [
			// 		// 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
			// 		{
			// 			type: "*生日",
			// 			name: "陈皮",
			// 			year: "2024",
			// 			date: "10-24",
			// 		},
			// 		// 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
			// 		{
			// 			type: "生日",
			// 			name: "陈皮",
			// 			year: "2024",
			// 			date: "10-24",
			// 		},
			// 	],
			// 	// 我们在一起已经有xxxx天了的配置
			// 	// customizedDateList: [],
			// },
			{
				// 想要发送的人的名字
				name: "陈皮",
				// 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
				id: "oVm896wTaiDmFf4tPkdOpyDKciC8",
				// 使用微信测试号：你想对他发送的模板消息的模板ID
				useTemplateId: isMorning ? "xlSq7uhZLhlUr6yCa6f-v2VwTzUsKBwEIPPj2O1Vizk" : "k724cnSPLEZEN2IdufhuxuOHFx9Ya8fut-afxKDD8mg",
				// 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
				horoscopeDate: "10-24",
				festivals: [
					// 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
					{
						type: "*生日",
						name: "陈皮",
						year: "2024",
						date: "10-24",
					},
					// 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
					{
						type: "生日",
						name: "陈皮",
						year: "2024",
						date: "10-24",
					},
				],
				// 我们在一起已经有xxxx天了的配置
				// customizedDateList: [],
			},
		],

		TIAN_API: {
			key: "a88a21e99d2391b71134cd4f5bb3c93a",
			// weather: 3,
			morningGreeting: true,
			eveningGreeting: true,
		},

		// 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
		// CALLBACK_TEMPLATE_ID: "WapTJXNVEDqJfWP1Fd86EWWRPN5lPFJvGvYNbBNp8qg",

		// CALLBACK_USERS: [
		// 	{
		// 		name: "自己",
		// 		// 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
		// 		id: "oVm896wTaiDmFf4tPkdOpyDKciC8",
		// 	},
		// ],
	};

	return USER_CONFIG;
}

module.exports = getConfig;
