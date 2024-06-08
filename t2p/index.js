// src/template/index.js
var template_default = {
    async fetch(request, env) {
        const url = new URL(request.url);
        const {
            protocol,
            pathname,
            searchParams
        } = url;
        if (!searchParams.get('prompt')){
            return new Response("");
        }
        const inputs = {
            prompt: searchParams.get('prompt')
        };
        const response = await env.AI.run(
            "@cf/bytedance/stable-diffusion-xl-lightning",
            inputs
        );
        return new Response(response, {
            headers: {
                "content-type": "image/png"
            }
        });
    }
};
export {
    template_default as default
};
