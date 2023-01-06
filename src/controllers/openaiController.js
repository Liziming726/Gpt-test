import { Configuration, OpenAIApi } from "openai"

export class OpenAiController {

    //初始化逻辑
    constructor(ctx) {
        this.ctx = ctx;
        const config = new Configuration({
            apiKey: "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"
        })
        this.openai = new OpenAIApi(config)

    }

    async generateImage() {
        const { prompt } = this.ctx.request.body;

        const { data } = await this.openai.createImage({
            prompt,
            n: 1,
            size: "256x256",
        });

        const imageUrl = data.data[0].url;

        this.ctx.body = {
            state: 'OK',
            data: imageUrl
        };
    }
}