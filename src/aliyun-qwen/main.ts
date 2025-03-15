import axios from "axios";

export async function main() {
	const res = await axios.post(
		"https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions",
		{
			model: "qwen-plus",
			messages: [
				// {
				// 	role: "system",
				// 	content: "You are a helpful assistant.",
				// },
				{
					role: "user",
					content: "什么是CHITUBOX",
				},
			],
		},
		{
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer sk-b52b9ebe26544e08ba0380cbb012d834",
			},
		}
	);
    console.log(res.data.choices[0].message);
}

