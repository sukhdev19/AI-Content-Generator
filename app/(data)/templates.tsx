export default [
    {
        name: 'AI Art Generator',
        desc: 'Create stunning artwork based on your ideas or themes.',
        category: 'Art & Design',
        icon: 'https://cdn-icons-png.flaticon.com/128/1197/1197215.png', // Art icon
        aiPrompt: 'Generate a piece of art based on the theme % with a style of %.',
        slug: 'ai-art-generator',
        form: [
            {
                label: 'Enter a theme or concept',
                field: 'input',
                name: 'theme',
                required: true
            },
            {
                label: 'Enter a preferred art style (e.g., abstract, realism)',
                field: 'input',
                name: 'style',
                required: true
            }
        ]
    },
    {
        name: 'Logo Maker',
        desc: 'Design a unique logo for your brand or business.',
        category: 'Branding',
        icon: 'https://cdn-icons-png.flaticon.com/128/10899/10899429.png', // Logo icon
        aiPrompt: 'Create a logo design for a % brand, incorporating the colors % and %.',
        slug: 'logo-maker',
        form: [
            {
                label: 'Enter your brand name',
                field: 'input',
                name: 'brandName',
                required: true
            },
            {
                label: 'Enter preferred colors',
                field: 'input',
                name: 'colors',
                required: true
            }
        ]
    },
    {
        name: 'Infographic Generator',
        desc: 'Create informative infographics for presentations or marketing.',
        category: 'Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/3480/3480240.png', // Infographic icon
        aiPrompt: 'Design an infographic about % including the key points % and %.',
        slug: 'infographic-generator',
        form: [
            {
                label: 'Enter the main topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter key points (separated by commas)',
                field: 'textarea',
                name: 'keyPoints',
                required: true
            }
        ]
    },
    {
        name: 'Social Media Post Image Creator',
        desc: 'Generate images for social media posts tailored to your content.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384060.png', // Social media icon
        aiPrompt: 'Create a visually appealing image for a social media post about %.',
        slug: 'social-media-image-creator',
        form: [
            {
                label: 'Enter the content theme',
                field: 'input',
                name: 'theme',
                required: true
            }
        ]
    },
    {
        name: 'Product Mockup Generator',
        desc: 'Create realistic product mockups for marketing and presentations.',
        category: 'E-commerce',
        icon: 'https://cdn-icons-png.flaticon.com/128/1163/1163912.png', // Mockup icon
        aiPrompt: 'Generate a product mockup for % type of product with % features.',
        slug: 'product-mockup-generator',
        form: [
            {
                label: 'Enter the product type',
                field: 'input',
                name: 'productType',
                required: true
            },
            {
                label: 'Enter product features',
                field: 'textarea',
                name: 'features',
                required: true
            }
        ]
    },
    {
        name: 'Character Design Generator',
        desc: 'Create unique character designs for stories, games, or animations.',
        category: 'Character Design',
        icon: 'https://cdn-icons-png.flaticon.com/128/1545/1545244.png', // Character icon
        aiPrompt: 'Design a character based on the traits % and %.',
        slug: 'character-design-generator',
        form: [
            {
                label: 'Enter character traits (e.g., brave, cunning)',
                field: 'textarea',
                name: 'traits',
                required: true
            }
        ]
    },
    {
        name: 'Scene Creator',
        desc: 'Generate detailed scenes for stories or games.',
        category: 'Storytelling',
        icon: 'https://cdn-icons-png.flaticon.com/128/2760/2760950.png', // Scene icon
        aiPrompt: 'Create a scene description for a % setting featuring % characters.',
        slug: 'scene-creator',
        form: [
            {
                label: 'Enter the setting (e.g., forest, city)',
                field: 'input',
                name: 'setting',
                required: true
            },
            {
                label: 'Enter character details',
                field: 'textarea',
                name: 'characters',
                required: true
            }
        ]
    },
    {
        name: 'Background Image Generator',
        desc: 'Create stunning background images for websites or presentations.',
        category: 'Design',
        icon: 'https://cdn-icons-png.flaticon.com/128/10235/10235503.png', // Background icon
        aiPrompt: 'Generate a background image with % theme and % color scheme.',
        slug: 'background-image-generator',
        form: [
            {
                label: 'Enter the theme (e.g., nature, abstract)',
                field: 'input',
                name: 'theme',
                required: true
            },
            {
                label: 'Enter the color scheme (e.g., warm, cool)',
                field: 'input',
                name: 'colorScheme',
                required: true
            }
        ]
    },
    {
        name: 'Presentation Slide Designer',
        desc: 'Create visually appealing slides for presentations.',
        category: 'Presentation',
        icon: 'https://cdn-icons-png.flaticon.com/128/2835/2835480.png', // Presentation icon
        aiPrompt: 'Design a presentation slide for % topic with the key points % and %.',
        slug: 'presentation-slide-designer',
        form: [
            {
                label: 'Enter the presentation topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter key points (separated by commas)',
                field: 'textarea',
                name: 'keyPoints',
                required: true
            }
        ]
    },
    {
        name: 'Coding Problem Solver',
        desc: 'Generate solutions for coding problems with detailed explanations.',
        category: 'Coding Practice',
        icon: 'https://cdn-icons-png.flaticon.com/128/2921/2921838.png',
        aiPrompt: 'Provide a solution for a % difficulty level problem on % topic in % programming language, including a detailed explanation and code example.',
        slug: 'coding-problem-solver',
        form: [
            {
                label: 'Enter difficulty level (easy, medium, hard)',
                field: 'input',
                name: 'difficulty',
                required: true
            },
            {
                label: 'Enter problem topic (e.g., arrays, recursion)',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter specific problem statement',
                field: 'textarea',
                name: 'problemStatement',
                required: true
            },
            {
                label: 'Enter programming language (e.g., JavaScript, Python)',
                field: 'input',
                name: 'language',
                required: true
            }
        ]
    },
    {
        name: 'Coding Question Generator',
        desc: 'Generate coding questions based on specified difficulty and topics.',
        category: 'Coding Practice',
        icon: 'https://cdn-icons-png.flaticon.com/128/1279/1279137.png',
        aiPrompt: 'Create a % difficulty level coding question on % topic for % programming language.',
        slug: 'coding-question-generator',
        form: [
            {
                label: 'Enter difficulty level (easy, medium, hard)',
                field: 'input',
                name: 'difficulty',
                required: true
            },
            {
                label: 'Enter topic (e.g., arrays, dynamic programming)',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter programming language (e.g., JavaScript, Python)',
                field: 'input',
                name: 'language',
                required: true
            }
        ]
    },
    {
        name: 'JavaScript Code Snippet Generator',
        desc: 'Generate useful JavaScript code snippets for various tasks.',
        category: 'Programming',
        icon: 'https://cdn-icons-png.flaticon.com/128/919/919844.png',
        aiPrompt: 'Generate a JavaScript code snippet for % task or functionality.',
        slug: 'javascript-code-snippet-generator',
        form: [
            {
                label: 'Enter the task or functionality',
                field: 'input',
                name: 'task',
                required: true
            }
        ]
    },
    {
        name: 'Python Function Generator',
        desc: 'Create Python functions based on user-defined requirements.',
        category: 'Programming',
        icon: 'https://cdn-icons-png.flaticon.com/128/919/919848.png',
        aiPrompt: 'Generate a Python function to % task or solve a problem.',
        slug: 'python-function-generator',
        form: [
            {
                label: 'Enter the task or problem description',
                field: 'textarea',
                name: 'description',
                required: true
            }
        ]
    },
    {
        name: 'Java Class Generator',
        desc: 'Generate boilerplate code for Java classes.',
        category: 'Programming',
        icon: 'https://cdn-icons-png.flaticon.com/128/919/919849.png',
        aiPrompt: 'Generate a Java class for % functionality with properties and methods.',
        slug: 'java-class-generator',
        form: [
            {
                label: 'Enter the functionality or purpose',
                field: 'input',
                name: 'functionality',
                required: true
            }
        ]
    },
    {
        name: 'HTML/CSS Template Creator',
        desc: 'Generate HTML/CSS templates for web development projects.',
        category: 'Web Development',
        icon: 'https://cdn-icons-png.flaticon.com/128/732/732212.png',
        aiPrompt: 'Create an HTML/CSS template for a % type of website.',
        slug: 'html-css-template-creator',
        form: [
            {
                label: 'Enter the type of website (e.g., blog, portfolio)',
                field: 'input',
                name: 'websiteType',
                required: true
            }
        ]
    },
    {
        name: 'SQL Query Generator',
        desc: 'Generate SQL queries based on specified criteria.',
        category: 'Database',
        icon: 'https://cdn-icons-png.flaticon.com/128/919/919850.png',
        aiPrompt: 'Generate an SQL query to % requirement based on the provided schema.',
        slug: 'sql-query-generator',
        form: [
            {
                label: 'Enter the requirement',
                field: 'textarea',
                name: 'requirement',
                required: true
            }
        ]
    },
    {
        name: 'Data Structure Visualizer',
        desc: 'Generate visual representations of various data structures.',
        category: 'Data Structures',
        icon: 'https://cdn-icons-png.flaticon.com/128/919/919856.png',
        aiPrompt: 'Visualize a % data structure with specified parameters.',
        slug: 'data-structure-visualizer',
        form: [
            {
                label: 'Enter the data structure type',
                field: 'input',
                name: 'structureType',
                required: true
            },
            {
                label: 'Enter any additional parameters',
                field: 'input',
                name: 'parameters',
            }
        ]
    },
    {
        name: 'Algorithm Complexity Analyzer',
        desc: 'Analyze the time and space complexity of algorithms.',
        category: 'Algorithms',
        icon: 'https://cdn-icons-png.flaticon.com/128/919/919854.png',
        aiPrompt: 'Analyze the complexity of the following algorithm: % algorithm description.',
        slug: 'algorithm-complexity-analyzer',
        form: [
            {
                label: 'Enter algorithm description',
                field: 'textarea',
                name: 'algorithm',
                required: true
            }
        ]
    },
    {
        name: 'Code Review Checklist Generator',
        desc: 'Generate a checklist for code reviews based on best practices.',
        category: 'Development',
        icon: 'https://cdn-icons-png.flaticon.com/128/919/919858.png',
        aiPrompt: 'Generate a code review checklist for a % programming language.',
        slug: 'code-review-checklist-generator',
        form: [
            {
                label: 'Enter programming language',
                field: 'input',
                name: 'language',
                required: true
            }
        ]
    },
    {
        name: 'Data Structure Implementation Guide',
        desc: 'Generate implementation guides for various data structures.',
        category: 'Data Structures',
        icon: 'https://cdn-icons-png.flaticon.com/128/919/919855.png',
        aiPrompt: 'Generate an implementation guide for % data structure in % programming language.',
        slug: 'data-structure-implementation-guide',
        form: [
            {
                label: 'Enter data structure type',
                field: 'input',
                name: 'structure',
                required: true
            },
            {
                label: 'Enter programming language',
                field: 'input',
                name: 'language',
                required: true
            }
        ]
    },
    {
        name: 'Debugging Tips Generator',
        desc: 'Generate tips for debugging code in different programming languages.',
        category: 'Development',
        icon: 'https://cdn-icons-png.flaticon.com/128/919/919852.png',
        aiPrompt: 'Generate debugging tips for % programming language.',
        slug: 'debugging-tips-generator',
        form: [
            {
                label: 'Enter programming language',
                field: 'input',
                name: 'language',
                required: true
            }
        ]
    },
    {
        name: 'API Documentation Generator',
        desc: 'Create documentation for APIs based on user inputs.',
        category: 'Development',
        icon: 'https://cdn-icons-png.flaticon.com/128/919/919851.png',
        aiPrompt: 'Generate API documentation for % API including endpoints and methods.',
        slug: 'api-documentation-generator',
        form: [
            {
                label: 'Enter API name',
                field: 'input',
                name: 'apiName',
                required: true
            },
            {
                label: 'Enter endpoints and methods',
                field: 'textarea',
                name: 'endpoints',
                required: true
            }
        ]
    },
    {
        name: 'CSS Animation Generator',
        desc: 'Create CSS animations based on user-defined parameters.',
        category: 'Web Development',
        icon: 'https://cdn-icons-png.flaticon.com/128/919/919853.png',
        aiPrompt: 'Generate a CSS animation for % element with specified effects.',
        slug: 'css-animation-generator',
        form: [
            {
                label: 'Enter the element to animate',
                field: 'input',
                name: 'element',
                required: true
            },
            {
                label: 'Enter animation effects',
                field: 'textarea',
                name: 'effects',
                required: true
            }
        ]
    },
    {
        name: 'React Component Generator',
        desc: 'Generate boilerplate code for React components.',
        category: 'Web Development',
        icon: 'https://cdn-icons-png.flaticon.com/128/919/919846.png',
        aiPrompt: 'Create a React component for % functionality.',
        slug: 'react-component-generator',
        form: [
            {
                label: 'Enter the functionality or purpose',
                field: 'input',
                name: 'functionality',
                required: true
            }
        ]
    },
    {
        name: 'Unit Test Generator',
        desc: 'Generate unit tests for code based on the provided functions.',
        category: 'Development',
        icon: 'https://cdn-icons-png.flaticon.com/128/919/919847.png',
        aiPrompt: 'Generate unit tests for the following function: % function description.',
        slug: 'unit-test-generator',
        form: [
            {
                label: 'Enter function description',
                field: 'textarea',
                name: 'function',
                required: true
            }
        ]
    },
    {
        name: 'Machine Learning Model Selector',
        desc: 'Select appropriate ML models based on user-defined criteria.',
        category: 'Machine Learning',
        icon: 'https://cdn-icons-png.flaticon.com/128/919/919845.png',
        aiPrompt: 'Select suitable machine learning models for % problem type and data characteristics.',
        slug: 'machine-learning-model-selector',
        form: [
            {
                label: 'Enter problem type',
                field: 'input',
                name: 'problemType',
                required: true
            },
            {
                label: 'Enter data characteristics',
                field: 'textarea',
                name: 'dataCharacteristics',
                required: true
            }
        ]
    },
    {
        name: 'MERN Stack Boilerplate Generator',
        desc: 'Generate a boilerplate code for a MERN stack application.',
        category: 'Web Development',
        icon: 'https://cdn-icons-png.flaticon.com/128/3286/3286462.png',
        aiPrompt: 'Create a boilerplate code structure for a MERN application with features for % requirements.',
        slug: 'mern-stack-boilerplate-generator',
        form: [
            {
                label: 'Enter key features',
                field: 'textarea',
                name: 'features',
                required: true
            }
        ]
    },
    {
        name: 'PostgreSQL Schema Generator',
        desc: 'Generate PostgreSQL schemas based on user-defined entities.',
        category: 'Database',
        icon: 'https://cdn-icons-png.flaticon.com/128/3663/3663746.png',
        aiPrompt: 'Generate a PostgreSQL schema for the following entities: % entities list.',
        slug: 'postgresql-schema-generator',
        form: [
            {
                label: 'Enter entities (comma-separated)',
                field: 'input',
                name: 'entities',
                required: true
            }
        ]
    },
    {
        name: 'Next.js API Route Generator',
        desc: 'Generate API routes for Next.js applications.',
        category: 'Web Development',
        icon: 'https://cdn-icons-png.flaticon.com/128/3996/3996908.png',
        aiPrompt: 'Create a Next.js API route for % functionality with required parameters.',
        slug: 'nextjs-api-route-generator',
        form: [
            {
                label: 'Enter functionality',
                field: 'input',
                name: 'functionality',
                required: true
            },
            {
                label: 'Enter required parameters',
                field: 'textarea',
                name: 'parameters',
            }
        ]
    },
    {
        name: 'React Hook Generator',
        desc: 'Generate custom React hooks for state management.',
        category: 'Web Development',
        icon: 'https://cdn-icons-png.flaticon.com/128/919/919846.png',
        aiPrompt: 'Create a custom React hook for % functionality.',
        slug: 'react-hook-generator',
        form: [
            {
                label: 'Enter functionality or state to manage',
                field: 'input',
                name: 'functionality',
                required: true
            }
        ]
    },
    {
        name: 'GraphQL Schema Generator',
        desc: 'Generate GraphQL schemas based on user-defined types.',
        category: 'Web Development',
        icon: 'https://cdn-icons-png.flaticon.com/128/3537/3537638.png',
        aiPrompt: 'Generate a GraphQL schema for the following types: % types list.',
        slug: 'graphql-schema-generator',
        form: [
            {
                label: 'Enter types (comma-separated)',
                field: 'input',
                name: 'types',
                required: true
            }
        ]
    },
    {
        name: 'RESTful API Design Template',
        desc: 'Create a template for designing RESTful APIs.',
        category: 'Web Development',
        icon: 'https://cdn-icons-png.flaticon.com/128/1792/1792812.png',
        aiPrompt: 'Generate a RESTful API design template for % functionality, including endpoints and methods.',
        slug: 'restful-api-design-template',
        form: [
            {
                label: 'Enter functionality',
                field: 'input',
                name: 'functionality',
                required: true
            }
        ]
    },
    {
        name: 'TypeScript Interface Generator',
        desc: 'Generate TypeScript interfaces for data models.',
        category: 'Programming',
        icon: 'https://cdn-icons-png.flaticon.com/128/3645/3645322.png',
        aiPrompt: 'Create TypeScript interfaces for the following data models: % models list.',
        slug: 'typescript-interface-generator',
        form: [
            {
                label: 'Enter data models (comma-separated)',
                field: 'input',
                name: 'models',
                required: true
            }
        ]
    },
    {
        name: 'Django REST Framework Serializer Generator',
        desc: 'Generate serializers for Django REST Framework.',
        category: 'Web Development',
        icon: 'https://cdn-icons-png.flaticon.com/128/1409/1409171.png',
        aiPrompt: 'Create serializers for the following Django models: % models list.',
        slug: 'django-rest-framework-serializer-generator',
        form: [
            {
                label: 'Enter Django models (comma-separated)',
                field: 'input',
                name: 'models',
                required: true
            }
        ]
    },
    {
        name: 'Axios Request Template Generator',
        desc: 'Generate templates for Axios requests in React applications.',
        category: 'Web Development',
        icon: 'https://cdn-icons-png.flaticon.com/128/3046/3046871.png',
        aiPrompt: 'Create an Axios request template for % API endpoint with % parameters.',
        slug: 'axios-request-template-generator',
        form: [
            {
                label: 'Enter API endpoint',
                field: 'input',
                name: 'endpoint',
                required: true
            },
            {
                label: 'Enter parameters (if any)',
                field: 'textarea',
                name: 'parameters',
            }
        ]
    },
    // {
    //     name: 'Redux Store Setup Guide',
    //     desc: 'Generate a guide for setting up Redux store in React applications.',
    //     category: 'Web Development',
    //     icon: 'https://cdn-icons-png.flaticon.com/128/3046/3046917.png',
    //     aiPrompt: 'Create a guide for setting up a Redux store with % features.',
    //     slug: 'redux-store-setup-guide',
    //     form: [
    //         {
    //             label: 'Enter features or requirements',
    //             field: 'textarea',
    //             name: 'features',
    //             required: true
    //         }
    //     ]
    // },
    {
        name: 'Sass Variables Generator',
        desc: 'Generate Sass variables for consistent styling.',
        category: 'Web Development',
        icon: 'https://cdn-icons-png.flaticon.com/128/2802/2802473.png',
        aiPrompt: 'Create Sass variables for the following color scheme: % color scheme.',
        slug: 'sass-variables-generator',
        form: [
            {
                label: 'Enter color scheme (e.g., primary, secondary)',
                field: 'textarea',
                name: 'colorScheme',
                required: true
            }
        ]
    },
    {
        name: 'Deployment Checklist Generator',
        desc: 'Generate a checklist for deploying web applications.',
        category: 'DevOps',
        icon: 'https://cdn-icons-png.flaticon.com/128/861/861064.png',
        aiPrompt: 'Create a deployment checklist for a % type of application.',
        slug: 'deployment-checklist-generator',
        form: [
            {
                label: 'Enter application type (e.g., MERN, Django)',
                field: 'input',
                name: 'appType',
                required: true
            }
        ]
    },
    {
        name: 'Web Accessibility Checklist Generator',
        desc: 'Generate a checklist for ensuring web accessibility.',
        category: 'Web Development',
        icon: 'https://cdn-icons-png.flaticon.com/128/1170/1170637.png',
        aiPrompt: 'Create a web accessibility checklist for a % type of website.',
        slug: 'web-accessibility-checklist-generator',
        form: [
            {
                label: 'Enter website type (e.g., blog, e-commerce)',
                field: 'input',
                name: 'websiteType',
                required: true
            }
        ]
    },
    {
        name: 'Mobile-Responsive Design Template',
        desc: 'Generate templates for mobile-responsive web designs.',
        category: 'Web Development',
        icon: 'https://cdn-icons-png.flaticon.com/128/1170/1170634.png',
        aiPrompt: 'Create a mobile-responsive design template for % type of website.',
        slug: 'mobile-responsive-design-template',
        form: [
            {
                label: 'Enter type of website (e.g., portfolio, landing page)',
                field: 'input',
                name: 'websiteType',
                required: true
            }
        ]
    },
    {
        name: 'Performance Optimization Guide',
        desc: 'Generate a guide for optimizing web application performance.',
        category: 'Web Development',
        icon: 'https://cdn-icons-png.flaticon.com/128/1170/1170632.png',
        aiPrompt: 'Create a performance optimization guide for a % type of application.',
        slug: 'performance-optimization-guide',
        form: [
            {
                label: 'Enter application type (e.g., e-commerce, blog)',
                field: 'input',
                name: 'appType',
                required: true
            }
        ]
    },
    {
        name: 'CI/CD Pipeline Setup Guide',
        desc: 'Generate a guide for setting up CI/CD pipelines for web applications.',
        category: 'DevOps',
        icon: 'https://cdn-icons-png.flaticon.com/128/1594/1594300.png',
        aiPrompt: 'Create a CI/CD pipeline setup guide for a % type of application.',
        slug: 'ci-cd-pipeline-setup-guide',
        form: [
            {
                label: 'Enter application type (e.g., MERN, Django)',
                field: 'input',
                name: 'appType',
                required: true
            }
        ]
    },
        
    {   
        
        name: 'Blog Title Generator',
        desc: 'Generate creative and catchy blog titles based on your content idea.',
        category: 'Blogging',
        icon: 'https://cdn-icons-png.flaticon.com/128/1742/1742682.png',
        aiPrompt: 'Generate % blog titles based on the provided topic and tone.',
        slug: 'blog-title-generator',
        form: [
            {
                label: 'Enter blog topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Select the tone',
                field: 'select',
                name: 'tone',
                options: ['Friendly', 'Professional', 'Playful', 'Serious']
            }
        ]
    },
    {
        name: 'Business Name Generator',
        desc: 'Come up with unique and catchy business name ideas.',
        category: 'Business',
        icon: 'https://cdn-icons-png.flaticon.com/128/2920/2920367.png',
        aiPrompt: 'Generate % unique business name ideas based on the industry and keywords provided.',
        slug: 'business-name-generator',
        form: [
            {
                label: 'Enter industry or niche',
                field: 'input',
                name: 'industry',
                required: true
            },
            {
                label: 'Enter keywords or themes',
                field: 'textarea',
                name: 'keywords',
            }
        ]
    },
    {
        name: 'Hashtag Generator',
        desc: 'Create trending hashtags for your social media content.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/929/929810.png',
        aiPrompt: 'Generate % trending hashtags based on the post description and platform.',
        slug: 'hashtag-generator',
        form: [
            {
                label: 'Enter post description',
                field: 'textarea',
                name: 'description',
                required: true
            },
            {
                label: 'Select platform',
                field: 'select',
                name: 'platform',
                options: ['Instagram', 'Twitter', 'TikTok']
            }
        ]
    },
    {
        name: 'Slogan Creator',
        desc: 'Generate memorable slogans for your brand or business.',
        category: 'Branding',
        icon: 'https://cdn-icons-png.flaticon.com/128/2464/2464206.png',
        aiPrompt: 'Generate % catchy slogans based on the brand name and values provided.',
        slug: 'slogan-creator',
        form: [
            {
                label: 'Enter brand name',
                field: 'input',
                name: 'brandName',
                required: true
            },
            {
                label: 'Enter brand values',
                field: 'textarea',
                name: 'values',
            }
        ]
    },
    {
        name: 'Newsletter Topic Generator',
        desc: 'Generate creative topics for your email newsletters.',
        category: 'Email Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/1782/1782765.png',
        aiPrompt: 'Generate % newsletter topic ideas based on the target audience and industry.',
        slug: 'newsletter-topic-generator',
        form: [
            {
                label: 'Enter target audience',
                field: 'input',
                name: 'audience',
                required: true
            },
            {
                label: 'Enter industry or niche',
                field: 'input',
                name: 'industry',
            }
        ]
    },
    {
        name: 'Brand Voice Generator',
        desc: 'Generate a distinct and consistent brand voice based on your values.',
        category: 'Branding',
        icon: 'https://cdn-icons-png.flaticon.com/128/2590/2590134.png',
        aiPrompt: 'Generate a % word brand voice guide based on the brand values and target audience.',
        slug: 'brand-voice-generator',
        form: [
            {
                label: 'Enter brand values',
                field: 'textarea',
                name: 'values',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'input',
                name: 'audience',
            }
        ]
    },
    {
        name: 'Press Release Writer',
        desc: 'Generate professional press releases for your product or service.',
        category: 'Public Relations',
        icon: 'https://cdn-icons-png.flaticon.com/128/3306/3306645.png',
        aiPrompt: 'Generate a % word press release based on the event or announcement provided.',
        slug: 'press-release-writer',
        form: [
            {
                label: 'Enter event/announcement',
                field: 'textarea',
                name: 'event',
                required: true
            },
            {
                label: 'Enter any additional details',
                field: 'textarea',
                name: 'details',
            }
        ]
    },
    {
        name: 'Cold Email Generator',
        desc: 'Generate personalized cold emails for outreach campaigns.',
        category: 'Email Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/1008/1008409.png',
        aiPrompt: 'Generate % personalized cold emails based on the product or service details and recipient information.',
        slug: 'cold-email-generator',
        form: [
            {
                label: 'Enter recipient’s name',
                field: 'input',
                name: 'recipientName',
                required: true
            },
            {
                label: 'Enter product/service details',
                field: 'textarea',
                name: 'productDetails',
            }
        ]
    },
    {
        name: 'Event Name Generator',
        desc: 'Create exciting and memorable names for events or festivals.',
        category: 'Event Planning',
        icon: 'https://cdn-icons-png.flaticon.com/128/742/742751.png',
        aiPrompt: 'Generate % creative event names based on the event type and theme.',
        slug: 'event-name-generator',
        form: [
            {
                label: 'Enter event type',
                field: 'input',
                name: 'eventType',
                required: true
            },
            {
                label: 'Enter event theme',
                field: 'textarea',
                name: 'theme',
            }
        ]
    },
    {
        name: 'Brand Tagline Generator',
        desc: 'Generate a powerful and memorable tagline for your brand.',
        category: 'Branding',
        icon: 'https://cdn-icons-png.flaticon.com/128/1704/1704744.png',
        aiPrompt: 'Generate % brand taglines based on the company name and values provided.',
        slug: 'brand-tagline-generator',
        form: [
            {
                label: 'Enter company name',
                field: 'input',
                name: 'companyName',
                required: true
            },
            {
                label: 'Enter brand values',
                field: 'textarea',
                name: 'values',
            }
        ]
    },
    {
        name: 'Customer Testimonial Generator',
        desc: 'Create authentic-sounding customer testimonials for your product or service.',
        category: 'Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/1152/1152372.png',
        aiPrompt: 'Generate % authentic-sounding customer testimonials based on the product or service details provided.',
        slug: 'customer-testimonial-generator',
        form: [
            {
                label: 'Enter product/service name',
                field: 'input',
                name: 'productName',
                required: true
            },
            {
                label: 'Enter any key features or experiences',
                field: 'textarea',
                name: 'features',
            }
        ]
    },
    {
        name: 'Landing Page Headline Generator',
        desc: 'Create compelling landing page headlines to boost conversions.',
        category: 'Web Design',
        icon: 'https://cdn-icons-png.flaticon.com/128/608/608870.png',
        aiPrompt: 'Generate % landing page headlines based on the product/service and target audience provided.',
        slug: 'landing-page-headline-generator',
        form: [
            {
                label: 'Enter product/service',
                field: 'input',
                name: 'product',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'input',
                name: 'audience',
            }
        ]
    },
    {
        name: 'YouTube Video Idea Generator',
        desc: 'Generate creative YouTube video ideas based on your niche.',
        category: 'Content Creation',
        icon: 'https://cdn-icons-png.flaticon.com/128/732/732245.png',
        aiPrompt: 'Generate % YouTube video ideas based on the channel niche and trends.',
        slug: 'youtube-video-idea-generator',
        form: [
            {
                label: 'Enter channel niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter any specific trends or themes',
                field: 'textarea',
                name: 'trends',
            }
        ]
    },
    {
        name: 'Business Pitch Generator',
        desc: 'Generate a short, impactful pitch for your business idea.',
        category: 'Entrepreneurship',
        icon: 'https://cdn-icons-png.flaticon.com/128/561/561127.png',
        aiPrompt: 'Generate a % word business pitch based on the business idea and target audience.',
        slug: 'business-pitch-generator',
        form: [
            {
                label: 'Enter business idea',
                field: 'textarea',
                name: 'idea',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'input',
                name: 'audience',
            }
        ]
    },
    {
        name: 'Product Name Generator',
        desc: 'Create unique product names for your new product line.',
        category: 'E-commerce',
        icon: 'https://cdn-icons-png.flaticon.com/128/565/565777.png',
        aiPrompt: 'Generate % product names based on the product category and features provided.',
        slug: 'product-name-generator',
        form: [
            {
                label: 'Enter product category',
                field: 'input',
                name: 'category',
                required: true
            },
            {
                label: 'Enter product features',
                field: 'textarea',
                name: 'features',
            }
        ]
    },
    {
        name: 'Blog Introduction Generator',
        desc: 'Generate engaging introductions for your blog posts.',
        category: 'Blogging',
        icon: 'https://cdn-icons-png.flaticon.com/128/3049/3049653.png',
        aiPrompt: 'Generate % blog post introductions based on the topic and content provided.',
        slug: 'blog-introduction-generator',
        form: [
            {
                label: 'Enter blog topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter a brief summary of the content',
                field: 'textarea',
                name: 'summary',
            }
        ]
    },
    {
        name: 'E-book Title Generator',
        desc: 'Create captivating titles for your e-books based on the content.',
        category: 'Publishing',
        icon: 'https://cdn-icons-png.flaticon.com/128/2635/2635476.png',
        aiPrompt: 'Generate % e-book titles based on the content and target audience provided.',
        slug: 'ebook-title-generator',
        form: [
            {
                label: 'Enter e-book topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'input',
                name: 'audience',
            }
        ]
    },
    {
        name: 'Social Bio Generator',
        desc: 'Generate short and catchy bios for social media profiles.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/3330/3330438.png',
        aiPrompt: 'Generate % social media bios based on the user’s personality and profile focus.',
        slug: 'social-bio-generator',
        form: [
            {
                label: 'Enter a brief personality description',
                field: 'textarea',
                name: 'personality',
                required: true
            },
            {
                label: 'Enter profile focus (e.g. lifestyle, business, etc.)',
                field: 'input',
                name: 'focus',
            }
        ]
    },
    {
        name: 'Marketing Strategy Generator',
        desc: 'Generate a customized marketing strategy for your business.',
        category: 'Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/2720/2720342.png',
        aiPrompt: 'Generate a % word marketing strategy based on the business goals and target audience.',
        slug: 'marketing-strategy-generator',
        form: [
            {
                label: 'Enter business goals',
                field: 'textarea',
                name: 'goals',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'input',
                name: 'audience',
            }
        ]
    },
    {
        name: 'Event Invitation Generator',
        desc: 'Generate professional and appealing invitations for events.',
        category: 'Event Planning',
        icon: 'https://cdn-icons-png.flaticon.com/128/1767/1767465.png',
        aiPrompt: 'Generate % event invitations based on the event type, theme, and target audience.',
        slug: 'event-invitation-generator',
        form: [
            {
                label: 'Enter event type',
                field: 'input',
                name: 'eventType',
                required: true
            },
            {
                label: 'Enter event theme',
                field: 'textarea',
                name: 'theme',
            }
        ]
    },
    {
        name: 'Motivational Quote Generator',
        desc: 'Generate motivational quotes for social media or personal use.',
        category: 'Inspiration',
        icon: 'https://cdn-icons-png.flaticon.com/128/1261/1261092.png',
        aiPrompt: 'Generate % motivational quotes based on the provided themes or keywords.',
        slug: 'motivational-quote-generator',
        form: [
            {
                label: 'Enter keywords or themes',
                field: 'textarea',
                name: 'keywords',
                required: true
            }
        ]
    },
    {
        name: 'Survey Question Generator',
        desc: 'Create tailored survey questions for your business or research.',
        category: 'Research',
        icon: 'https://cdn-icons-png.flaticon.com/128/2661/2661577.png',
        aiPrompt: 'Generate % survey questions based on the target audience and research goals.',
        slug: 'survey-question-generator',
        form: [
            {
                label: 'Enter research goals',
                field: 'textarea',
                name: 'goals',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'input',
                name: 'audience',
            }
        ]
    },
    {
        name: 'Job Description Generator',
        desc: 'Generate detailed and engaging job descriptions to attract talent.',
        category: 'Human Resources',
        icon: 'https://cdn-icons-png.flaticon.com/128/2837/2837455.png',
        aiPrompt: 'Generate % job descriptions based on the provided job title and role requirements.',
        slug: 'job-description-generator',
        form: [
            {
                label: 'Enter job title',
                field: 'input',
                name: 'jobTitle',
                required: true
            },
            {
                label: 'Enter role requirements',
                field: 'textarea',
                name: 'requirements',
            }
        ]
    },
    {
        name: 'Wedding Vow Generator',
        desc: 'Create heartfelt wedding vows based on your relationship.',
        category: 'Event Planning',
        icon: 'https://cdn-icons-png.flaticon.com/128/1063/1063151.png',
        aiPrompt: 'Generate % wedding vows based on the couple’s story and values.',
        slug: 'wedding-vow-generator',
        form: [
            {
                label: 'Enter couple’s story',
                field: 'textarea',
                name: 'story',
                required: true
            },
            {
                label: 'Enter values or beliefs',
                field: 'textarea',
                name: 'values',
            }
        ]
    },
    {
        name: 'Course Title Generator',
        desc: 'Generate attractive and professional course titles for online learning.',
        category: 'Education',
        icon: 'https://cdn-icons-png.flaticon.com/128/3229/3229957.png',
        aiPrompt: 'Generate % course titles based on the course content and target learners.',
        slug: 'course-title-generator',
        form: [
            {
                label: 'Enter course content/subject',
                field: 'textarea',
                name: 'content',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'input',
                name: 'audience',
            }
        ]
    },
    {
        name: 'Fundraising Pitch Generator',
        desc: 'Create powerful fundraising pitches to attract investors or donors.',
        category: 'Finance',
        icon: 'https://cdn-icons-png.flaticon.com/128/2810/2810987.png',
        aiPrompt: 'Generate a % word fundraising pitch based on the cause and goals provided.',
        slug: 'fundraising-pitch-generator',
        form: [
            {
                label: 'Enter fundraising cause or goal',
                field: 'textarea',
                name: 'goal',
                required: true
            },
            {
                label: 'Enter target donors or investors',
                field: 'input',
                name: 'audience',
            }
        ]
    },
    {
        name: 'Blog Outline Generator',
        desc: 'Generate detailed outlines for blog posts based on topics.',
        category: 'Blogging',
        icon: 'https://cdn-icons-png.flaticon.com/128/2620/2620570.png',
        aiPrompt: 'Generate % blog outlines based on the topic and target keywords provided.',
        slug: 'blog-outline-generator',
        form: [
            {
                label: 'Enter blog topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter target keywords',
                field: 'textarea',
                name: 'keywords',
            }
        ]
    },
    {
        name: 'Client Testimonial Request Generator',
        desc: 'Create polite and engaging client testimonial requests.',
        category: 'Client Relations',
        icon: 'https://cdn-icons-png.flaticon.com/128/195/195792.png',
        aiPrompt: 'Generate % client testimonial request emails based on the business and product provided.',
        slug: 'client-testimonial-request-generator',
        form: [
            {
                label: 'Enter business/product name',
                field: 'input',
                name: 'business',
                required: true
            },
            {
                label: 'Enter client’s name',
                field: 'input',
                name: 'clientName',
            }
        ]
    },
    {
        name: 'App Feature List Generator',
        desc: 'Generate detailed feature lists for your mobile or web app.',
        category: 'Technology',
        icon: 'https://cdn-icons-png.flaticon.com/128/2392/2392107.png',
        aiPrompt: 'Generate % app feature lists based on the app’s purpose and audience.',
        slug: 'app-feature-list-generator',
        form: [
            {
                label: 'Enter app purpose or goal',
                field: 'textarea',
                name: 'goal',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'input',
                name: 'audience',
            }
        ]
    },
    {
        name: 'Service Offer Generator',
        desc: 'Create appealing service offers for your business.',
        category: 'Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/888/888064.png',
        aiPrompt: 'Generate % service offers based on the business type and target clients.',
        slug: 'service-offer-generator',
        form: [
            {
                label: 'Enter business type',
                field: 'input',
                name: 'businessType',
                required: true
            },
            {
                label: 'Enter target clients',
                field: 'input',
                name: 'audience',
            }
        ]
    },
    {
        name: 'Social Media Bio Generator',
        desc: 'Create short and engaging bios for your social media profiles.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/5995/5995575.png',
        aiPrompt: 'Generate % social media bios based on the platform and user’s interests.',
        slug: 'social-media-bio-generator',
        form: [
            {
                label: 'Enter user’s interests or profession',
                field: 'textarea',
                name: 'interests',
                required: true
            },
            {
                label: 'Select platform',
                field: 'select',
                name: 'platform',
                options: ['Twitter', 'Instagram', 'LinkedIn']
            }
        ]
    },
    {
        name: 'Webinar Title Generator',
        desc: 'Generate catchy titles for your upcoming webinars.',
        category: 'Education',
        icon: 'https://cdn-icons-png.flaticon.com/128/2803/2803195.png',
        aiPrompt: 'Generate % webinar titles based on the topic and target audience provided.',
        slug: 'webinar-title-generator',
        form: [
            {
                label: 'Enter webinar topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'input',
                name: 'audience',
            }
        ]
    },
    {
        name: 'Call to Action Generator',
        desc: 'Create strong and actionable CTAs for marketing content.',
        category: 'Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/711/711193.png',
        aiPrompt: 'Generate % call to actions (CTAs) based on the product/service and audience provided.',
        slug: 'call-to-action-generator',
        form: [
            {
                label: 'Enter product/service',
                field: 'input',
                name: 'product',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'input',
                name: 'audience',
            }
        ]
    },
    {
        name: 'Social Media Post Generator',
        desc: 'Generate engaging social media posts based on your brand or product.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/1047/1047746.png',
        aiPrompt: 'Create engaging social media post ideas for % brand or product, tailored for different platforms like Facebook, Instagram, and Twitter.',
        slug: 'social-media-post-generator',
        form: [
            {
                label: 'Enter your brand or product name',
                field: 'input',
                name: 'brand',
                required: true
            },
            {
                label: 'Enter the target audience',
                field: 'input',
                name: 'audience',
            }
        ]
    },
    {
        name: 'Ad Copy Creator',
        desc: 'Generate high-converting ad copies based on your product or service.',
        category: 'Advertising',
        icon: 'https://cdn-icons-png.flaticon.com/128/3203/3203071.png',
        aiPrompt: 'Generate % ad copy variations based on the product or service description provided.',
        slug: 'ad-copy-creator',
        form: [
            {
                label: 'Enter your product/service name',
                field: 'input',
                name: 'product',
                required: true
            },
            {
                label: 'Enter a brief description',
                field: 'textarea',
                name: 'description',
            }
        ]
    },
    {
        name: 'Product Description Writer',
        desc: 'Generate compelling product descriptions for e-commerce platforms.',
        category: 'E-commerce',
        icon: 'https://cdn-icons-png.flaticon.com/128/1250/1250630.png',
        aiPrompt: 'Write % product descriptions based on the provided product name and features.',
        slug: 'product-description-writer',
        form: [
            {
                label: 'Enter your product name',
                field: 'input',
                name: 'productName',
                required: true
            },
            {
                label: 'Enter product features',
                field: 'textarea',
                name: 'features',
            }
        ]
    },
    {
        name: 'Email Subject Line Generator',
        desc: 'Create catchy email subject lines to improve open rates.',
        category: 'Email Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/3286/3286612.png',
        aiPrompt: 'Generate % catchy email subject lines based on the provided campaign details.',
        slug: 'email-subject-line-generator',
        form: [
            {
                label: 'Enter campaign name',
                field: 'input',
                name: 'campaign',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'input',
                name: 'audience',
            }
        ]
    },
    {
        name: 'SEO Keyword Generator',
        desc: 'Generate SEO-friendly keywords for blogs or websites.',
        category: 'SEO',
        icon: 'https://cdn-icons-png.flaticon.com/128/6037/6037110.png',
        aiPrompt: 'Generate % SEO-friendly keywords based on the provided niche and focus topic.',
        slug: 'seo-keyword-generator',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter focus topic',
                field: 'input',
                name: 'focusTopic',
            }
        ]
    },
    {
        name: 'LinkedIn Summary Generator',
        desc: 'Generate a professional LinkedIn summary based on your career profile.',
        category: 'Career',
        icon: 'https://cdn-icons-png.flaticon.com/128/1077/1077042.png',
        aiPrompt: 'Generate a % word LinkedIn summary based on the user’s career information.',
        slug: 'linkedin-summary-generator',
        form: [
            {
                label: 'Enter your profession',
                field: 'input',
                name: 'profession',
                required: true
            },
            {
                label: 'Enter key achievements or experiences',
                field: 'textarea',
                name: 'achievements',
            }
        ]
    },
    {
        name: 'Instagram Caption Creator',
        desc: 'Create engaging Instagram captions based on your post content.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384063.png',
        aiPrompt: 'Generate % Instagram captions based on the provided post description.',
        slug: 'instagram-caption-creator',
        form: [
            {
                label: 'Enter post description',
                field: 'textarea',
                name: 'description',
                required: true
            }
        ]
    },
    {
        name: 'Video Script Generator',
        desc: 'Generate professional video scripts based on the video concept or idea.',
        category: 'Content Creation',
        icon: 'https://cdn-icons-png.flaticon.com/128/3607/3607437.png',
        aiPrompt: 'Generate a % word video script based on the given concept or outline.',
        slug: 'video-script-generator',
        form: [
            {
                label: 'Enter video concept/idea',
                field: 'textarea',
                name: 'concept',
                required: true
            },
            {
                label: 'Enter any additional details',
                field: 'textarea',
                name: 'details',
            }
        ]
    },
    {
        name: 'Podcast Title Generator',
        desc: 'Generate catchy podcast episode titles based on the episode content.',
        category: 'Podcasting',
        icon: 'https://cdn-icons-png.flaticon.com/128/6786/6786864.png',
        aiPrompt: 'Generate % podcast episode titles based on the provided topic and summary.',
        slug: 'podcast-title-generator',
        form: [
            {
                label: 'Enter podcast topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter episode summary',
                field: 'textarea',
                name: 'summary',
            }
        ]
    },
    {
        name: 'Resume Bullet Point Generator',
        desc: 'Create professional resume bullet points for your key achievements.',
        category: 'Career',
        icon: 'https://cdn-icons-png.flaticon.com/128/3075/3075923.png',
        aiPrompt: 'Generate % resume bullet points based on the provided job title and key accomplishments.',
        slug: 'resume-bullet-point-generator',
        form: [
            {
                label: 'Enter your job title',
                field: 'input',
                name: 'jobTitle',
                required: true
            },
            {
                label: 'Enter key accomplishments',
                field: 'textarea',
                name: 'accomplishments',
            }
        ]
    },
    {
        name: 'Event Invitation Generator',
        desc: 'Generate personalized event invitations for various occasions.',
        category: 'Event Planning',
        icon: 'https://cdn-icons-png.flaticon.com/128/3523/3523063.png',
        aiPrompt: 'Generate personalized event invitations for % event type, including details about location, time, and theme.',
        slug: 'event-invitation-generator',
        form: [
            {
                label: 'Enter event type',
                field: 'input',
                name: 'eventType',
                required: true
            },
            {
                label: 'Enter event details (date, location)',
                field: 'textarea',
                name: 'eventDetails',
            }
        ]
    },
    {
        name: 'Blog Post Idea Generator',
        desc: 'Generate creative blog post ideas based on your niche.',
        category: 'Blogging',
        icon: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
        aiPrompt: 'Generate % blog post ideas for the given niche and target audience.',
        slug: 'blog-post-idea-generator',
        form: [
            {
                label: 'Enter blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'input',
                name: 'audience',
            }
        ]
    },
    {
        name: 'Book Title Generator',
        desc: 'Generate creative book titles based on your plot summary.',
        category: 'Writing',
        icon: 'https://cdn-icons-png.flaticon.com/128/3652/3652671.png',
        aiPrompt: 'Generate % book title ideas based on the provided plot summary.',
        slug: 'book-title-generator',
        form: [
            {
                label: 'Enter plot summary',
                field: 'textarea',
                name: 'plot',
                required: true
            },
            {
                label: 'Enter genre',
                field: 'input',
                name: 'genre',
            }
        ]
    },
    {
        name: 'YouTube Video Idea Generator',
        desc: 'Generate unique YouTube video ideas based on your content niche.',
        category: 'YouTube',
        icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384060.png',
        aiPrompt: 'Generate % YouTube video ideas based on the provided content niche.',
        slug: 'youtube-video-idea-generator',
        form: [
            {
                label: 'Enter content niche',
                field: 'input',
                name: 'niche',
                required: true
            }
        ]
    },
    {
        name: 'Business Name Generator',
        desc: 'Generate creative business name ideas for startups and new ventures.',
        category: 'Business',
        icon: 'https://cdn-icons-png.flaticon.com/128/888/888879.png',
        aiPrompt: 'Generate % business name ideas based on the provided business type and industry.',
        slug: 'business-name-generator',
        form: [
            {
                label: 'Enter business type',
                field: 'input',
                name: 'businessType',
                required: true
            },
            {
                label: 'Enter industry',
                field: 'input',
                name: 'industry',
            }
        ]
    },
    {
        name: 'Slogan Creator',
        desc: 'Generate catchy slogans for your brand or product.',
        category: 'Branding',
        icon: 'https://cdn-icons-png.flaticon.com/128/3312/3312782.png',
        aiPrompt: 'Generate % catchy slogans based on the provided brand or product.',
        slug: 'slogan-creator',
        form: [
            {
                label: 'Enter brand/product name',
                field: 'input',
                name: 'brand',
                required: true
            },
            {
                label: 'Enter core message or theme',
                field: 'textarea',
                name: 'message',
            }
        ]
    },
    {
        name: 'Content Calendar Generator',
        desc: 'Generate a content calendar for your social media strategy.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/888/888870.png',
        aiPrompt: 'Generate % content calendar for % social media platforms based on provided brand or product.',
        slug: 'content-calendar-generator',
        form: [
            {
                label: 'Enter brand or product',
                field: 'input',
                name: 'brand',
                required: true
            },
            {
                label: 'Enter platforms (e.g., Facebook, Instagram)',
                field: 'textarea',
                name: 'platforms',
            }
        ]
    },
    {
        name: 'Hashtag Generator',
        desc: 'Generate relevant and trending hashtags for your social media posts.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/1946/1946443.png',
        aiPrompt: 'Generate % relevant hashtags for the given content or niche.',
        slug: 'hashtag-generator',
        form: [
            {
                label: 'Enter content or niche',
                field: 'input',
                name: 'niche',
                required: true
            }
        ]
    },
    {
        name: 'Email Newsletter Topic Generator',
        desc: 'Generate engaging topics for your email newsletters.',
        category: 'Email Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/561/561127.png',
        aiPrompt: 'Generate % email newsletter topics based on the provided industry or niche.',
        slug: 'email-newsletter-topic-generator',
        form: [
            {
                label: 'Enter industry/niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter any specific focus or campaign',
                field: 'textarea',
                name: 'focus',
            }
        ]
    },
    {
        name: 'Customer Testimonial Generator',
        desc: 'Generate authentic-sounding customer testimonials for your product or service.',
        category: 'Customer Feedback',
        icon: 'https://cdn-icons-png.flaticon.com/128/3523/3523188.png',
        aiPrompt: 'Generate % customer testimonials based on the provided product or service and key features.',
        slug: 'customer-testimonial-generator',
        form: [
            {
                label: 'Enter product/service name',
                field: 'input',
                name: 'product',
                required: true
            },
            {
                label: 'Enter key features or benefits',
                field: 'textarea',
                name: 'features',
            }
        ]
    },
    {
        name: 'Webinar Topic Generator',
        desc: 'Generate webinar topic ideas based on your industry or audience.',
        category: 'Webinar',
        icon: 'https://cdn-icons-png.flaticon.com/128/3135/3135712.png',
        aiPrompt: 'Generate % webinar topic ideas for the given industry and target audience.',
        slug: 'webinar-topic-generator',
        form: [
            {
                label: 'Enter industry',
                field: 'input',
                name: 'industry',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'input',
                name: 'audience',
            }
        ]
    },
    {
        name: 'Facebook Ad Headline Generator',
        desc: 'Generate compelling headlines for your Facebook ads.',
        category: 'Advertising',
        icon: 'https://cdn-icons-png.flaticon.com/128/3135/3135704.png',
        aiPrompt: 'Generate % Facebook ad headlines for the given product or service.',
        slug: 'facebook-ad-headline-generator',
        form: [
            {
                label: 'Enter product/service name',
                field: 'input',
                name: 'product',
                required: true
            },
            {
                label: 'Enter ad objective (e.g., engagement, sales)',
                field: 'textarea',
                name: 'objective',
            }
        ]
    },
    {
        name: 'Quora Answer Generator',
        desc: 'Generate informative answers for Quora questions in your industry.',
        category: 'Content Creation',
        icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111538.png',
        aiPrompt: 'Generate % detailed answers for Quora questions related to the provided industry or niche.',
        slug: 'quora-answer-generator',
        form: [
            {
                label: 'Enter industry/niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter specific question or focus area',
                field: 'textarea',
                name: 'question',
            }
        ]
    },
    {
        name: 'Sales Pitch Generator',
        desc: 'Generate persuasive sales pitches for your product or service.',
        category: 'Sales',
        icon: 'https://cdn-icons-png.flaticon.com/128/3203/3203120.png',
        aiPrompt: 'Generate % sales pitch ideas for the provided product or service and target audience.',
        slug: 'sales-pitch-generator',
        form: [
            {
                label: 'Enter product/service name',
                field: 'input',
                name: 'product',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'input',
                name: 'audience',
            }
        ]
    },
    {
        name: 'Headline Optimizer',
        desc: 'Optimize your headlines for better engagement.',
        category: 'Content Optimization',
        icon: 'https://cdn-icons-png.flaticon.com/128/1077/1077035.png',
        aiPrompt: 'Optimize % headlines to improve engagement and clarity.',
        slug: 'headline-optimizer',
        form: [
            {
                label: 'Enter headline',
                field: 'input',
                name: 'headline',
                required: true
            }
        ]
    },
    {
        name: 'Motivational Quote Generator',
        desc: 'Generate uplifting motivational quotes for personal use or social media.',
        category: 'Inspiration',
        icon: 'https://cdn-icons-png.flaticon.com/128/2305/2305891.png',
        aiPrompt: 'Generate % motivational quotes for inspiration or social media posts.',
        slug: 'motivational-quote-generator',
        form: []
    },
    {
        name: 'Job Description Generator',
        desc: 'Generate detailed job descriptions for hiring purposes.',
        category: 'Hiring',
        icon: 'https://cdn-icons-png.flaticon.com/128/3225/3225076.png',
        aiPrompt: 'Generate a % job description based on the provided job title and required qualifications.',
        slug: 'job-description-generator',
        form: [
            {
                label: 'Enter job title',
                field: 'input',
                name: 'title',
                required: true
            },
            {
                label: 'Enter required qualifications',
                field: 'textarea',
                name: 'qualifications',
            }
        ]
    },
    {
        name: 'Affiliate Marketing Content Generator',
        desc: 'Generate content ideas for affiliate marketing campaigns.',
        category: 'Affiliate Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/1051/1051277.png',
        aiPrompt: 'Generate % affiliate marketing content ideas based on the provided product or service.',
        slug: 'affiliate-marketing-content-generator',
        form: [
            {
                label: 'Enter product/service name',
                field: 'input',
                name: 'product',
                required: true
            }
        ]
    },
    {
        name: 'Email Signature Generator',
        desc: 'Create professional email signatures with your contact information and social links.',
        category: 'Email Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/888/888853.png',
        aiPrompt: 'Generate % professional email signatures based on the provided contact information and social media links.',
        slug: 'email-signature-generator',
        form: [
            {
                label: 'Enter your name',
                field: 'input',
                name: 'name',
                required: true
            },
            {
                label: 'Enter your contact info',
                field: 'input',
                name: 'contactInfo',
            },
            {
                label: 'Enter social media links',
                field: 'textarea',
                name: 'socialLinks',
            }
        ]
    },
    {
        name: 'Customer Persona Generator',
        desc: 'Create detailed customer personas for targeted marketing.',
        category: 'Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/2920/2920244.png',
        aiPrompt: 'Generate % detailed customer personas based on the provided demographics, interests, and pain points.',
        slug: 'customer-persona-generator',
        form: [
            {
                label: 'Enter customer demographics (age, location)',
                field: 'textarea',
                name: 'demographics',
                required: true
            },
            {
                label: 'Enter customer interests and pain points',
                field: 'textarea',
                name: 'interests',
            }
        ]
    },
    {
        name: 'eBook Title Generator',
        desc: 'Generate creative titles for your eBooks based on the subject matter.',
        category: 'Writing',
        icon: 'https://cdn-icons-png.flaticon.com/128/2243/2243453.png',
        aiPrompt: 'Generate % eBook titles based on the provided subject and target audience.',
        slug: 'ebook-title-generator',
        form: [
            {
                label: 'Enter subject or theme',
                field: 'input',
                name: 'subject',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'input',
                name: 'audience',
            }
        ]
    },
    {
        name: 'Case Study Generator',
        desc: 'Create comprehensive case studies to showcase successful projects.',
        category: 'Content Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/3233/3233569.png',
        aiPrompt: 'Generate a % case study based on the provided project details, results, and client feedback.',
        slug: 'case-study-generator',
        form: [
            {
                label: 'Enter project details',
                field: 'textarea',
                name: 'projectDetails',
                required: true
            },
            {
                label: 'Enter results achieved',
                field: 'textarea',
                name: 'results',
            }
        ]
    },
    {
        name: 'Vision Statement Generator',
        desc: 'Create a clear and inspiring vision statement for your company or brand.',
        category: 'Business',
        icon: 'https://cdn-icons-png.flaticon.com/128/2439/2439795.png',
        aiPrompt: 'Generate a % vision statement based on the provided company goals and values.',
        slug: 'vision-statement-generator',
        form: [
            {
                label: 'Enter company goals',
                field: 'textarea',
                name: 'goals',
                required: true
            },
            {
                label: 'Enter company values',
                field: 'textarea',
                name: 'values',
            }
        ]
    },
    {
        name: 'Mission Statement Generator',
        desc: 'Craft a compelling mission statement for your organization.',
        category: 'Business',
        icon: 'https://cdn-icons-png.flaticon.com/128/1524/1524885.png',
        aiPrompt: 'Generate a % mission statement based on the provided business objectives and industry focus.',
        slug: 'mission-statement-generator',
        form: [
            {
                label: 'Enter business objectives',
                field: 'textarea',
                name: 'objectives',
                required: true
            },
            {
                label: 'Enter industry focus',
                field: 'input',
                name: 'industry',
            }
        ]
    },
    {
        name: 'Personal Bio Generator',
        desc: 'Create a professional personal bio for websites or social media profiles.',
        category: 'Personal Branding',
        icon: 'https://cdn-icons-png.flaticon.com/128/3477/3477254.png',
        aiPrompt: 'Generate a % word personal bio based on the provided career highlights and achievements.',
        slug: 'personal-bio-generator',
        form: [
            {
                label: 'Enter career highlights',
                field: 'textarea',
                name: 'careerHighlights',
                required: true
            },
            {
                label: 'Enter achievements',
                field: 'textarea',
                name: 'achievements',
            }
        ]
    },
    {
        name: 'Product Tagline Generator',
        desc: 'Generate creative and memorable product taglines.',
        category: 'Branding',
        icon: 'https://cdn-icons-png.flaticon.com/128/888/888824.png',
        aiPrompt: 'Generate % product taglines based on the provided product description and key features.',
        slug: 'product-tagline-generator',
        form: [
            {
                label: 'Enter product description',
                field: 'textarea',
                name: 'description',
                required: true
            },
            {
                label: 'Enter key product features',
                field: 'textarea',
                name: 'features',
            }
        ]
    },
    {
        name: 'Cold Email Generator',
        desc: 'Create effective cold emails for outreach and business development.',
        category: 'Sales',
        icon: 'https://cdn-icons-png.flaticon.com/128/888/888843.png',
        aiPrompt: 'Generate % cold emails based on the provided target audience and product/service offering.',
        slug: 'cold-email-generator',
        form: [
            {
                label: 'Enter target audience',
                field: 'textarea',
                name: 'audience',
                required: true
            },
            {
                label: 'Enter product/service offering',
                field: 'textarea',
                name: 'offering',
            }
        ]
    },
    {
        name: 'Brand Archetype Quiz Generator',
        desc: 'Generate a quiz to help identify the brand archetype of a business.',
        category: 'Branding',
        icon: 'https://cdn-icons-png.flaticon.com/128/2936/2936882.png',
        aiPrompt: 'Generate a % question quiz to help identify the brand archetype based on business personality and values.',
        slug: 'brand-archetype-quiz-generator',
        form: [
            {
                label: 'Enter business personality traits',
                field: 'textarea',
                name: 'traits',
                required: true
            },
            {
                label: 'Enter business values',
                field: 'textarea',
                name: 'values',
            }
        ]
    },
    {
        name: 'Event Agenda Generator',
        desc: 'Create a detailed agenda for events, including timelines and session descriptions.',
        category: 'Event Planning',
        icon: 'https://cdn-icons-png.flaticon.com/128/3523/3523144.png',
        aiPrompt: 'Generate % event agendas based on the provided event type and session details.',
        slug: 'event-agenda-generator',
        form: [
            {
                label: 'Enter event type',
                field: 'input',
                name: 'eventType',
                required: true
            },
            {
                label: 'Enter session details',
                field: 'textarea',
                name: 'sessions',
            }
        ]
    },
    {
        name: 'Budget Planner Generator',
        desc: 'Generate detailed budget plans for personal or business finances.',
        category: 'Finance',
        icon: 'https://cdn-icons-png.flaticon.com/128/3480/3480299.png',
        aiPrompt: 'Generate a % budget plan based on the provided income, expenses, and savings goals.',
        slug: 'budget-planner-generator',
        form: [
            {
                label: 'Enter income details',
                field: 'textarea',
                name: 'income',
                required: true
            },
            {
                label: 'Enter expense details',
                field: 'textarea',
                name: 'expenses',
            },
            {
                label: 'Enter savings goals',
                field: 'textarea',
                name: 'savings',
            }
        ]
    },
    {
        name: 'Tagline Analyzer',
        desc: 'Analyze and improve the effectiveness of your brand’s tagline.',
        category: 'Branding',
        icon: 'https://cdn-icons-png.flaticon.com/128/4433/4433551.png',
        aiPrompt: 'Analyze and improve the effectiveness of the following tagline: "%". Provide feedback on clarity, appeal, and relevance to the audience.',
        slug: 'tagline-analyzer',
        form: [
            {
                label: 'Enter tagline',
                field: 'input',
                name: 'tagline',
                required: true
            }
        ]
    },
    {
        name: 'Charity Event Name Generator',
        desc: 'Generate catchy names for charity events based on the cause and target audience.',
        category: 'Event Planning',
        icon: 'https://cdn-icons-png.flaticon.com/128/1280764/1280764.png',
        aiPrompt: 'Generate % charity event names based on the cause and target audience.',
        slug: 'charity-event-name-generator',
        form: [
            {
                label: 'Enter charity cause',
                field: 'input',
                name: 'cause',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'input',
                name: 'audience',
            }
        ]
    },
    {
        name: 'Video Title Generator',
        desc: 'Create catchy titles for your video content.',
        category: 'Content Creation',
        icon: 'https://cdn-icons-png.flaticon.com/128/3063/3063290.png',
        aiPrompt: 'Generate % video titles based on the provided video topic and target audience.',
        slug: 'video-title-generator',
        form: [
            {
                label: 'Enter video topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'input',
                name: 'audience',
            }
        ]
    },
    {
        name: 'Press Release Generator',
        desc: 'Create professional press releases for news and media outlets.',
        category: 'Public Relations',
        icon: 'https://cdn-icons-png.flaticon.com/128/5080/5080573.png',
        aiPrompt: 'Generate a % press release based on the provided news details and target media outlet.',
        slug: 'press-release-generator',
        form: [
            {
                label: 'Enter news details',
                field: 'textarea',
                name: 'newsDetails',
                required: true
            },
            {
                label: 'Enter target media outlet',
                field: 'input',
                name: 'mediaOutlet',
            }
        ]
    },
    {
        name: 'Story Idea Generator',
        desc: 'Generate unique story ideas for writers and content creators.',
        category: 'Writing',
        icon: 'https://cdn-icons-png.flaticon.com/128/3075/3075923.png',
        aiPrompt: 'Generate % unique story ideas based on the provided genre and themes.',
        slug: 'story-idea-generator',
        form: [
            {
                label: 'Enter genre',
                field: 'input',
                name: 'genre',
                required: true
            },
            {
                label: 'Enter themes',
                field: 'textarea',
                name: 'themes',
            }
        ]
    },
    {
        name: 'Content Strategy Generator',
        desc: 'Create effective content strategies for blogs or social media.',
        category: 'Content Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/2021/2021551.png',
        aiPrompt: 'Generate a % content strategy based on the provided goals, target audience, and content types.',
        slug: 'content-strategy-generator',
        form: [
            {
                label: 'Enter goals',
                field: 'textarea',
                name: 'goals',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'textarea',
                name: 'audience',
            },
            {
                label: 'Enter content types (e.g., blogs, videos)',
                field: 'textarea',
                name: 'contentTypes',
            }
        ]
    },
    {
        name: 'Website Content Outline Generator',
        desc: 'Create a detailed outline for your website’s content.',
        category: 'Web Development',
        icon: 'https://cdn-icons-png.flaticon.com/128/1814/1814539.png',
        aiPrompt: 'Generate a % website content outline based on the provided business type and goals.',
        slug: 'website-content-outline-generator',
        form: [
            {
                label: 'Enter business type',
                field: 'input',
                name: 'businessType',
                required: true
            },
            {
                label: 'Enter business goals',
                field: 'textarea',
                name: 'goals',
            }
        ]
    },
    {
        name: 'Social Media Audit Generator',
        desc: 'Create a comprehensive audit of your social media presence.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/8258/8258300.png',
        aiPrompt: 'Generate a % social media audit based on the provided platforms and performance metrics.',
        slug: 'social-media-audit-generator',
        form: [
            {
                label: 'Enter social media platforms',
                field: 'textarea',
                name: 'platforms',
                required: true
            },
            {
                label: 'Enter performance metrics',
                field: 'textarea',
                name: 'metrics',
            }
        ]
    },
    {
        name: 'Sales Funnel Generator',
        desc: 'Create a detailed sales funnel strategy for your business.',
        category: 'Sales',
        icon: 'https://cdn-icons-png.flaticon.com/128/1127/1127860.png',
        aiPrompt: 'Generate a % sales funnel strategy based on the provided target audience and product/service.',
        slug: 'sales-funnel-generator',
        form: [
            {
                label: 'Enter target audience',
                field: 'textarea',
                name: 'audience',
                required: true
            },
            {
                label: 'Enter product/service details',
                field: 'textarea',
                name: 'productDetails',
            }
        ]
    },
    {
        name: 'Social Media Contest Generator',
        desc: 'Generate ideas for engaging social media contests.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/1077/1077064.png',
        aiPrompt: 'Generate % ideas for social media contests based on the provided brand and audience.',
        slug: 'social-media-contest-generator',
        form: [
            {
                label: 'Enter brand name',
                field: 'input',
                name: 'brand',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'textarea',
                name: 'audience',
            }
        ]
    },
    {
        name: 'Influencer Outreach Email Generator',
        desc: 'Create personalized outreach emails for influencers.',
        category: 'Influencer Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/4183/4183780.png',
        aiPrompt: 'Generate % outreach emails for influencers based on the provided campaign details and goals.',
        slug: 'influencer-outreach-email-generator',
        form: [
            {
                label: 'Enter campaign details',
                field: 'textarea',
                name: 'campaignDetails',
                required: true
            },
            {
                label: 'Enter goals for the campaign',
                field: 'textarea',
                name: 'goals',
            }
        ]
    },
    {
        name: 'Client Testimonial Generator',
        desc: 'Create compelling client testimonials for your website or marketing materials.',
        category: 'Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/3300/3300557.png',
        aiPrompt: 'Generate % client testimonials based on the provided service details and customer experiences.',
        slug: 'client-testimonial-generator',
        form: [
            {
                label: 'Enter service details',
                field: 'textarea',
                name: 'serviceDetails',
                required: true
            },
            {
                label: 'Enter customer experiences',
                field: 'textarea',
                name: 'experiences',
            }
        ]
    },
    {
        name: 'Referral Program Generator',
        desc: 'Create a detailed referral program outline for your business.',
        category: 'Sales',
        icon: 'https://cdn-icons-png.flaticon.com/128/2951/2951097.png',
        aiPrompt: 'Generate a % referral program outline based on the provided business model and target audience.',
        slug: 'referral-program-generator',
        form: [
            {
                label: 'Enter business model',
                field: 'input',
                name: 'businessModel',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'textarea',
                name: 'audience',
            }
        ]
    },
    {
        name: 'B2B Partnership Proposal Generator',
        desc: 'Create proposals for B2B partnerships.',
        category: 'Business',
        icon: 'https://cdn-icons-png.flaticon.com/128/4320/4320247.png',
        aiPrompt: 'Generate a % B2B partnership proposal based on the provided business objectives and partnership benefits.',
        slug: 'b2b-partnership-proposal-generator',
        form: [
            {
                label: 'Enter business objectives',
                field: 'textarea',
                name: 'objectives',
                required: true
            },
            {
                label: 'Enter partnership benefits',
                field: 'textarea',
                name: 'benefits',
            }
        ]
    },
    {
        name: 'Product Comparison Chart Generator',
        desc: 'Create comparison charts for products to help customers make informed decisions.',
        category: 'E-commerce',
        icon: 'https://cdn-icons-png.flaticon.com/128/3011/3011710.png',
        aiPrompt: 'Generate a % product comparison chart based on the provided product features and pricing.',
        slug: 'product-comparison-chart-generator',
        form: [
            {
                label: 'Enter product features',
                field: 'textarea',
                name: 'features',
                required: true
            },
            {
                label: 'Enter pricing details',
                field: 'textarea',
                name: 'pricing',
            }
        ]
    },
    {
        name: 'Business Model Canvas Generator',
        desc: 'Create a Business Model Canvas for your startup or business idea.',
        category: 'Business Strategy',
        icon: 'https://cdn-icons-png.flaticon.com/128/2591/2591241.png',
        aiPrompt: 'Generate a % Business Model Canvas based on the provided value proposition and customer segments.',
        slug: 'business-model-canvas-generator',
        form: [
            {
                label: 'Enter value proposition',
                field: 'textarea',
                name: 'valueProposition',
                required: true
            },
            {
                label: 'Enter customer segments',
                field: 'textarea',
                name: 'customerSegments',
            }
        ]
    },
    {
        name: 'Personal Finance Budget Planner',
        desc: 'Create a personal finance budget plan based on your income and expenses.',
        category: 'Finance',
        icon: 'https://cdn-icons-png.flaticon.com/128/3011/3011746.png',
        aiPrompt: 'Generate a % personal finance budget plan based on the provided income and expenses.',
        slug: 'personal-finance-budget-planner',
        form: [
            {
                label: 'Enter total income',
                field: 'input',
                name: 'income',
                required: true
            },
            {
                label: 'Enter total expenses',
                field: 'input',
                name: 'expenses',
            }
        ]
    },
    {
        name: 'E-commerce Product Description Generator',
        desc: 'Create compelling product descriptions for e-commerce websites.',
        category: 'E-commerce',
        icon: 'https://cdn-icons-png.flaticon.com/128/2721/2721624.png',
        aiPrompt: 'Generate a % product description based on the provided product details and target audience.',
        slug: 'ecommerce-product-description-generator',
        form: [
            {
                label: 'Enter product details',
                field: 'textarea',
                name: 'productDetails',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'textarea',
                name: 'audience',
            }
        ]
    },
    {
        name: 'Online Course Curriculum Generator',
        desc: 'Create a detailed curriculum for an online course.',
        category: 'Education',
        icon: 'https://cdn-icons-png.flaticon.com/128/2378/2378607.png',
        aiPrompt: 'Generate a % online course curriculum based on the provided subject and target audience.',
        slug: 'online-course-curriculum-generator',
        form: [
            {
                label: 'Enter course subject',
                field: 'input',
                name: 'subject',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'textarea',
                name: 'audience',
            }
        ]
    },
    {
        name: 'Startup Elevator Pitch Generator',
        desc: 'Create a compelling elevator pitch for your startup.',
        category: 'Business',
        icon: 'https://cdn-icons-png.flaticon.com/128/3639/3639790.png',
        aiPrompt: 'Generate a % startup elevator pitch based on the provided business idea and target audience.',
        slug: 'startup-elevator-pitch-generator',
        form: [
            {
                label: 'Enter business idea',
                field: 'textarea',
                name: 'businessIdea',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'textarea',
                name: 'audience',
            }
        ]
    },
    {
        name: 'Customer Journey Map Generator',
        desc: 'Create a customer journey map for your business.',
        category: 'Customer Experience',
        icon: 'https://cdn-icons-png.flaticon.com/128/3903/3903481.png',
        aiPrompt: 'Generate a % customer journey map based on the provided customer persona and touchpoints.',
        slug: 'customer-journey-map-generator',
        form: [
            {
                label: 'Enter customer persona',
                field: 'textarea',
                name: 'persona',
                required: true
            },
            {
                label: 'Enter touchpoints',
                field: 'textarea',
                name: 'touchpoints',
            }
        ]
    },
    {
        name: 'SEO Keyword Research Tool',
        desc: 'Generate keyword ideas for your SEO strategy.',
        category: 'SEO',
        icon: 'https://cdn-icons-png.flaticon.com/128/890/890424.png',
        aiPrompt: 'Generate % keyword ideas based on the provided industry and target audience.',
        slug: 'seo-keyword-research-tool',
        form: [
            {
                label: 'Enter industry',
                field: 'input',
                name: 'industry',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'textarea',
                name: 'audience',
            }
        ]
    },
    {
        name: 'Email Newsletter Template Generator',
        desc: 'Create templates for your email newsletters.',
        category: 'Email Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/1912/1912295.png',
        aiPrompt: 'Generate a % email newsletter template based on the provided theme and audience.',
        slug: 'email-newsletter-template-generator',
        form: [
            {
                label: 'Enter theme',
                field: 'textarea',
                name: 'theme',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'textarea',
                name: 'audience',
            }
        ]
    },
    {
        name: 'Digital Product Launch Plan',
        desc: 'Create a detailed plan for launching a digital product.',
        category: 'Product Launch',
        icon: 'https://cdn-icons-png.flaticon.com/128/2933/2933312.png',
        aiPrompt: 'Generate a % digital product launch plan based on the provided product details and marketing strategies.',
        slug: 'digital-product-launch-plan',
        form: [
            {
                label: 'Enter product details',
                field: 'textarea',
                name: 'productDetails',
                required: true
            },
            {
                label: 'Enter marketing strategies',
                field: 'textarea',
                name: 'strategies',
            }
        ]
    },
    {
        name: 'Event Promotion Plan Generator',
        desc: 'Create a plan for promoting your events effectively.',
        category: 'Event Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/3601/3601378.png',
        aiPrompt: 'Generate a % event promotion plan based on the provided event details and target audience.',
        slug: 'event-promotion-plan-generator',
        form: [
            {
                label: 'Enter event details',
                field: 'textarea',
                name: 'eventDetails',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'textarea',
                name: 'audience',
            }
        ]
    },
    {
        name: 'Virtual Summit Agenda Generator',
        desc: 'Create a detailed agenda for your virtual summit.',
        category: 'Event Planning',
        icon: 'https://cdn-icons-png.flaticon.com/128/2920/2920426.png',
        aiPrompt: 'Generate a % virtual summit agenda based on the provided topics and speakers.',
        slug: 'virtual-summit-agenda-generator',
        form: [
            {
                label: 'Enter topics',
                field: 'textarea',
                name: 'topics',
                required: true
            },
            {
                label: 'Enter speaker names',
                field: 'textarea',
                name: 'speakers',
            }
        ]
    },
    {
        name: 'Freelance Proposal Template Generator',
        desc: 'Create templates for freelance proposals.',
        category: 'Freelancing',
        icon: 'https://cdn-icons-png.flaticon.com/128/3194/3194707.png',
        aiPrompt: 'Generate a % freelance proposal template based on the provided project details and deliverables.',
        slug: 'freelance-proposal-template-generator',
        form: [
            {
                label: 'Enter project details',
                field: 'textarea',
                name: 'projectDetails',
                required: true
            },
            {
                label: 'Enter deliverables',
                field: 'textarea',
                name: 'deliverables',
            }
        ]
    },
    // {
    //     name: 'Personal Branding Statement Generator',
    //     desc: 'Create a personal branding statement for networking.',
    //     category: 'Branding',
    //     icon: 'https://cdn-icons-png.flaticon.com/128/3406/3406677.png',
    //     aiPrompt: 'Generate a % personal branding statement based on the provided skills and target audience.',
    //     slug: 'personal-branding-statement-generator',
    //     form: [
    //         {
    //             label: 'Enter your skills',
    //             field: 'textarea',
    //             name: 'skills',
    //             required: true
    //         },
    //         {
    //             label: 'Enter target audience',
    //             field: 'textarea',
    //             name: 'audience',
    //         }
    //     ]
    // },
    {
        name: 'Nonprofit Fundraising Plan Generator',
        desc: 'Create a fundraising plan for your nonprofit organization.',
        category: 'Nonprofit',
        icon: 'https://cdn-icons-png.flaticon.com/128/1871/1871760.png',
        aiPrompt: 'Generate a % nonprofit fundraising plan based on the provided goals and target donors.',
        slug: 'nonprofit-fundraising-plan-generator',
        form: [
            {
                label: 'Enter fundraising goals',
                field: 'textarea',
                name: 'goals',
                required: true
            },
            {
                label: 'Enter target donors',
                field: 'textarea',
                name: 'donors',
            }
        ]
    },
    {
        name: 'Sustainability Report Generator',
        desc: 'Create a sustainability report for your business or organization.',
        category: 'Sustainability',
        icon: 'https://cdn-icons-png.flaticon.com/128/3050/3050622.png',
        aiPrompt: 'Generate a % sustainability report based on the provided metrics and goals.',
        slug: 'sustainability-report-generator',
        form: [
            {
                label: 'Enter sustainability metrics',
                field: 'textarea',
                name: 'metrics',
                required: true
            },
            {
                label: 'Enter sustainability goals',
                field: 'textarea',
                name: 'goals',
            }
        ]
    },
    {
        name: 'Marketing Campaign Analysis Tool',
        desc: 'Analyze your marketing campaigns and get insights.',
        category: 'Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/1488/1488690.png',
        aiPrompt: 'Generate a % marketing campaign analysis based on the provided campaign details and results.',
        slug: 'marketing-campaign-analysis-tool',
        form: [
            {
                label: 'Enter campaign details',
                field: 'textarea',
                name: 'campaignDetails',
                required: true
            },
            {
                label: 'Enter campaign results',
                field: 'textarea',
                name: 'results',
            }
        ]
    },
    {
        name: 'HR Policy Template Generator',
        desc: 'Create HR policy templates for your organization.',
        category: 'Human Resources',
        icon: 'https://cdn-icons-png.flaticon.com/128/1595/1595386.png',
        aiPrompt: 'Generate a % HR policy template based on the provided company values and employee expectations.',
        slug: 'hr-policy-template-generator',
        form: [
            {
                label: 'Enter company values',
                field: 'textarea',
                name: 'companyValues',
                required: true
            },
            {
                label: 'Enter employee expectations',
                field: 'textarea',
                name: 'expectations',
            }
        ]
    },
    {
        name: 'Corporate Social Responsibility Strategy Generator',
        desc: 'Create a CSR strategy for your company.',
        category: 'Corporate Responsibility',
        icon: 'https://cdn-icons-png.flaticon.com/128/2787/2787357.png',
        aiPrompt: 'Generate a % CSR strategy based on the provided business goals and community impact.',
        slug: 'csr-strategy-generator',
        form: [
            {
                label: 'Enter business goals',
                field: 'textarea',
                name: 'businessGoals',
                required: true
            },
            {
                label: 'Enter community impact details',
                field: 'textarea',
                name: 'impactDetails',
            }
        ]
    },
    {
        name: 'Webinar Script Generator',
        desc: 'Create scripts for your webinars.',
        category: 'Webinars',
        icon: 'https://cdn-icons-png.flaticon.com/128/7534/7534338.png',
        aiPrompt: 'Generate a % webinar script based on the provided topic and audience.',
        slug: 'webinar-script-generator',
        form: [
            {
                label: 'Enter webinar topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'textarea',
                name: 'audience',
            }
        ]
    },
    {
        name: 'Online Community Engagement Plan',
        desc: 'Create a plan for engaging your online community.',
        category: 'Community Building',
        icon: 'https://cdn-icons-png.flaticon.com/128/2016/2016885.png',
        aiPrompt: 'Generate a % online community engagement plan based on the provided community goals and activities.',
        slug: 'online-community-engagement-plan',
        form: [
            {
                label: 'Enter community goals',
                field: 'textarea',
                name: 'goals',
                required: true
            },
            {
                label: 'Enter engagement activities',
                field: 'textarea',
                name: 'activities',
            }
        ]
    },
    {
        name: 'Employee Onboarding Plan Generator',
        desc: 'Create an onboarding plan for new employees.',
        category: 'Human Resources',
        icon: 'https://cdn-icons-png.flaticon.com/128/1946/1946360.png',
        aiPrompt: 'Generate a % employee onboarding plan based on the provided roles and responsibilities.',
        slug: 'employee-onboarding-plan-generator',
        form: [
            {
                label: 'Enter roles',
                field: 'textarea',
                name: 'roles',
                required: true
            },
            {
                label: 'Enter responsibilities',
                field: 'textarea',
                name: 'responsibilities',
            }
        ]
    }
    
]
