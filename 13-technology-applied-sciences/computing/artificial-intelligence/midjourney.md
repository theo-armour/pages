# midjourney

* https://www.midjourney.com/home/
* https://www.midjourney.com/app/ ~ me
* https://www.midjourney.com/showcase/recent/
* https://docs.midjourney.com/docs
* https://discord.gg/midjourney
* https://discord.com/channels/662267976984297473/@home


## Articles

* https://theconversation.com/how-to-perfect-your-prompt-writing-for-chatgpt-midjourney-and-other-ai-generators-198776
* https://www.midlibrary.io/styles/chaim-soutine#hero
* https://graphicsgurl.com/use-chatgpt-for-midjourney-image-prompts

## Discord Emoji Reactions

* ❌ Cancel and Delete
* ✉️ Send to Direct Messages

## Reactions


## Commands ~ https://docs.midjourney.com/docs/command-list

/ask ~ Get an answer to a question.

/blend ~ Easily blend two images together.

/daily_theme ~ Toggle notification pings for the #daily-theme channel update

/docs ~ Use in the official Midjourney Discord server to quickly generate a link to topics covered in this user guide!

/faq ~ Use in the official Midjourney Discord server to quickly generate a link to popual prompt craft channel FAQs.

/fast ~ Switch to Fast mode.

/help ~ Shows helpful basic information and tips about the Midjourney Bot.

/imagine ~ Generate an image using a prompt

/info ~ View information about your account and any queued or running jobs.

/stealth ~ For Pro Plan Subscribers: switch to Stealth Mode

/public ~ For Pro Plan Subscribers: switch to Public Mode

/subscribe ~ Generate a personal link for a user's account page.

/settings ~ View and adjust the Midjourney Bot's settings

/prefer option ~ Create or manage a custom option.

/prefer option list ~ View your current custom options.

/prefer suffix ~ Specify a suffix to add to the end of every prompt.

/show ~ Use an images Job ID to regenerate the Job within Discord.

/relax ~ Switch to Relax mode.

/remix ~ Toggle Remix mode.

## Parameters

Aspect Ratios
--aspect, or --ar Change the aspect ratio of a generation.

Chaos
--chaos <number 0–100> Change how varied the results will be. Higher values produce more unusual and unexpected generations.

No
--no Negative prompting, --no plants would try to remove plants from the image.

Quality
--quality <.25, .5, 1, or 2>, or --q <.25, .5, 1, or 2> How much rendering quality time you want to spend. The default value is 1. Higher values cost more and lower values cost less.

Seed
--seed <integer between 0–4294967295> The Midjourney bot uses a seed number to create a field of visual noise, like television static, as a starting point to generate the initial image grids. Seed numbers are generated randomly for each image but can be specified with the --seed or
--sameseed parameter. Using the same seed number and prompt will produce similar ending images.

Stop
--stop <integer between 10–100> Use the --stop parameter to finish a Job partway through the process. Stopping a Job at an earlier percentage can create blurrier, less detailed results.

Style
--style <4a, 4b or 4c> Switch between versions of the Midjourney Model Version 4

Stylize
--stylize <number>, or --s <number> parameter influences how strongly Midjourney's default aesthetic style is applied to Jobs. default value is 100 and accepts integer values 0–1000

Uplight
--uplight Use an alternative "light" upscaler when selecting the U buttons. The results are closer to the original grid image. The upscaled image is less detailed and smoother.

Upbeta
--upbeta Use an alternative beta upscaler when selecting the U buttons. The results are closer to the original grid image. The upscaled image has significantly fewer added details.

Default Values (Model Version 4)
Aspect Ratio
Chaos
Quality
Seed
Stop
Style
Stylize
Default Value
1:1	0	1	Random	100	4c	100
Range
1:2–2:1	0–100	.25 .5 or 1	whole numbers 0–4294967295	10–100	4a, 4b, or 4c	0–1000


Default Values (Model Version 5)
Aspect Ratio	Chaos	Quality	Seed	Stop	Stylize
Default Value
1:1	0	1	Random	100	100
Range
any	0–100	.25 .5, or 1	whole numbers 0–4294967295	10–100	0–1000
Aspect ratios greater than 2:1 are experimental and may produce unpredicatble results.


### Model Version Parameters
Midjourney routinely releases new model versions to improve efficiency, coherency, and quality. Different models excel at different types of images.

Niji
--niji An alternative model focused on anime style images.

High Definition
--hd Use an early alternative Model that produces larger, less consistent images. This algorithm may be suitable for abstract and landscape images.

Test
--test Use the Midjourney special test model.

Testp
--testp Use the Midjourney special photography-focused test model.

Version
--version <1, 2, 3, 4, or 5> or --v <1, 2, 3, 4, or 5> Use a different version of the Midjourney algorithm. The current algorithm (V4) is the default setting.

### How to Find a Job's Seed Number
aaadd reaction: envelope

### Upscaler Parameters

Midjourney starts by generating a grid of low-resolution image options for each Job. You can use a Midjourney upscaler on any grid image to increase the size and add additional details. There are multiple upscale models available for upscaling an image.

Uplight
--uplight Use an alternative "light" upscaler when selecting the U buttons. The results are closer to the original grid image. The upscaled image is less detailed and smoother.

Upbeta
--upbeta Use an alternative beta upscaler when selecting the U buttons. The results are closer to the original grid image. The upscaled image has significantly fewer added details.

Upanime
Use an alternative upscaler trained to work with the when selecting the U buttons. This upscaler was specifically created to work with the --niji Midjourney Model.



### Other Parameters
These parameters only work with specific earlier Midjourney Models

Creative
--creative Modify the test and testp models to be more varied and creative.

Image Weight
--iw Sets image prompt weight relative to text weight. The default value is --iw 0.25.

Sameseed
--sameseed Seed values create a single large random noise field applied across all images in the initial grid. When --sameseed is specified, all images in the initial grid use the same starting noise and will produce very similar generated images.

Video
--video Saves a progress video of the initial image grid being generated. Emoji react to the completed image grid with ✉️ to trigger the video being sent to your direct messages. --video does not work when upscaling an image.





## Prompt tags

* chaos

* --niji
* --v 5 ~ --version ~ version accepts the values 1, 2, 3, 4, and 5
* --test ~ --testp ~ --testp + --creative
* --tile ~ --t ~

### https://docs.midjourney.com/docs/upscalers

* --upanima
* --upbeta ~ creates a 2048px x 2048px image
* --uplight ~ adds a moderate amount of details and textures

### How to Switch Models
Use the Version or Test Parameter
Add --v 1, --v 2, --v 3, --v 4, --v 4 --style 4a, --v4 --style 4b --test, --testp, --test --creative, --testp --creative or --niji to the end of your prompt.

### How to Use the Settings Command
Type /settings and select your preferred version from the menu.

1️⃣ MJ Version 1 2️⃣ MJ Version 2 3️⃣ MJ Version 3 4️⃣ MJ Version 4 🌈 Niji Mode 🤖MJ Test 📷 MJ Test Photo


## Galleries

* https://www.designboom.com/design/gaudi-zaha-hadid-midjourney-ai-generated-cars-starchitects-02-17-2023/

## Libraries

* https://www.midlibrary.io/

## Prompts

### https://www.samdickie.me/writing/experiment-1-creating-a-landing-page-using-ai-tools-no-code

### https://www.reddit.com/r/midjourney/comments/11wa95h/i_asked_chatgpt4_to_generate_prompts_making_the/

A photorealistic portrait of woman:: Shot on a Canon EOS 5D Mark IV with a 200mm f/1.4L IS USM lens, capturing rich tonality, exceptional sharpness, and a smooth bokeh background ::1 High-resolution ::Shot from above, looking up, emphasizing her raw emotion and vulnerability ::Wallpaper ratio, high-resolution, and dramatic contrast, worthy of a collector's edition prints :: --ar 16:9 --q 5 --v 5 --s 750



* https://eliteagent.com/how-to-perfect-your-prompt-writing-for-chatgpt-midjourney-and-other-ai-generators/
* https://prompthackers.substack.com/p/a-chatgpt-midjourney-prompt-generator
* https://www.wordcelclub.com/ujjwal49.sol/how-to-generate-the-perfect-images
* https://www.reddit.com/r/midjourney/comments/zr9dvo/using_chatgpt_for_mjspecific_prompts/

* Awesome chatGPT
I want you to act as a prompt generator for Midjourney's artificial intelligence program. Your job is to provide detailed and creative descriptions that will inspire unique and interesting images from the AI. Keep in mind that the AI is capable of understanding a wide range of language and can interpret abstract concepts, so feel free to be as imaginative and descriptive as possible. For example, you could describe a scene from a futuristic city, or a surreal landscape filled with strange creatures. The more detailed and imaginative your description, the more interesting the resulting image will be. Here is your first prompt: “[INSERT]”

## https://linusekenstam.substack.com/p/tutorial-dynamic-prompting

***
* https://linusekenstam.substack.com/p/tutorial-how-to-create-consistent?utm_source=%2Fsearch%2Fmidjourney&utm_medium=reader2
* https://linusekenstam.substack.com/p/mini-ai-tutorial-learn-how-to-turn?utm_source=%2Fsearch%2Fmidjourney&utm_medium=reader2

## https://weirdwonderfulai.art/general/using-chatgpt-to-create-prompts-for-ai-art/

Please create a table that breaks down an interior architecture photograph composition into the following key elements, where each of these key elements is a column:

Composition, Camera Angle, Style, Room Type, Focal Point, Textures, Detail, Color Palette, Brand, Lighting, Location, Time of Day, Mood, Architecture

See: https://pbs.twimg.com/media/FrEJISWXsAIbpRE?format=jpg&name=4096x4096

Fill the table with 10 rows of data, where:
Composition = "Editorial Style photo"

then

Please write each row as a comma-separated sentence. Append each sentence with —ar 16:9"


## https://github.com/f/awesome-chatgpt-prompts

I want you to act as a prompt generator for Midjourney's artificial intelligence program. Your job is to provide detailed and creative descriptions that will inspire unique and interesting images from the AI. Keep in mind that the AI is capable of understanding a wide range of language and can interpret abstract concepts, so feel free to be as imaginative and descriptive as possible. For example, you could describe a scene from a futuristic city, or a surreal landscape filled with strange creatures. The more detailed and imaginative your description, the more interesting the resulting image will be. Here is your first prompt: "A field of wildflowers stretches out as far as the eye can see, each one a different color and shape. In the distance, a massive tree towers over the landscape, its branches reaching up to the sky like tentacles."
