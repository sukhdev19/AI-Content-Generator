export default[
    {
        name:'Blog Title',
        desc:'An AI tool that generate blog title depends on youtube blog',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/3669/3669981.png',
        aiPrompt:'Give me % blog Topic Idea in bullet wise only based on give niche & outline topic and give me result in Rich text editor format',
        slug:'generate-blog-title',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter bloig Outline',
                field:'textarea',
                name:'outline',
            }

        ]
    }
]