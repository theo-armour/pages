# Introduction to Large Language Models

* https://www.cloudskillsboost.google/
* https://www.cloudskillsboost.google/course_templates/539

>This is an introductory level microlearning course that explores what large language models (LLM) are, the use cases where they can be utilized, and how you can use prompt tuning to enhance LLM performance. It also covers Google tools to help you develop your own Gen AI apps. This course is estimated to take approximately 45 minutes to complete.

Objective
* Define Large Language Models (LLMs)
* Describe LLM Use Cases
* Explain Prompt Tuning
* Describe Google’s Gen AI Development tools

## Video 2


Large language models LLM are a subset of deep learning

Large, general-purpose language models can be pre-trained and then fine-tuned for specific purposes

Large language models are trained to solve common language problems like text classification, question answering, document summarization, and more

Then be tailored to self specific problems in different fields, like retail, finance, entertainment - Trained with a relatively small size of Field Datasets

***

Large language models

Large

* Large training data set ~ petabyte scale
* Number of parameters ~ billions

General Purpose ~ sufficient to solve common problems

* Commonality of human languages ~ regardless of task
* Resource restriction ~ only certain organizations can afford to train them

Pre trained and fine tuned

* Pre trained on large data sets
* Fine tuned on specific tasks

  ***

Benefits of using large language models

* A single model can be used for different tasks
* The fine tune process requires minimal field data ~ few shot or zero shot ML
* The performance is continuously growing with more data and parameters

***

Example: PaLM

Pathways Language Model (PaLM) is a large language model that can be used for a variety of tasks

* Has 540 billion parameters
* Leverages the new pathway system
* Orchestrates distributed computation for accelerators

More

* 780 billion tokens

***

Transformer model
Encoding component
Decoding Component

***

LLM development versus traditional development

LLM development - using pre-trained API's

* no ML expertise needed
* No training examples
* No need to train a model
* Thinks about prompt design


Traditional ML development

* Yes ML expertise needed
* Yes training examples
* Yes need to train a model
* Yes compute time + hardware
* Thinks about minimizing a loss function

***

A typical LLM use case is question answering

***

What is question answering in natural language processing?

* Question answering is a subfield of natural language processing that deals with tasks of automatically answering questions posed in natural language
* Question answering models are able to retrieve the answer to a question from a given text. This is useful for searching for an answer in a document. Depending on the model used, the answer can be directly extracted from text or generated from scratch.

***

Question answering required domain knowledge

* Big Tech: provide support to customers
* Consumer: tailored messaging to individual customers
* Education: provide info on courses, tuition, policy
* Media: provide info on subscriptions and services
* Pharmacy and Healthcare: provide info for patient self management
* Retail: provide better chat bots; product visualization
* Supply chain: provide logistics info or inventory of info

***

Generative QA

* Generates free text directly based on the content
* It leverages text generation models
* No need for domain knowledge

***

Let's look at three questions given to Bard

***

Prompt design is the process of creating prompts that lists at the desired response from a language model

***

What are prompts and prompts engineering?

Prompt design

* Prompts involve instructions and contexts passed to a language model to achieve a desired task

Prompt engineering

* Prompt engineering is the practice of developing and optimizing prompts to efficiently use language models for a variety of applications

***

There are three main kinds of LLM, each needs prompting in a different way

the first two are easily confused and give very different outputs

* Generic (or raw) language models: These predict the next word (technically token) based on the language of the training data
* Instruction tuned: trying to predict a response to the instructions given the input
* Dialog tuned: trained to have a dialog by predicting the next response

***

Generic Language models ~ A next word predictor

Text on the screen in diagram

* The vector representation of the input token.
* Token is a part of a word, the atomic unit that L L M 's work in
* The vector representation for the next output token.
* Most likely next word,next most likely next word, Less likely next words.

***

Instruction Tuned Language model

Input >

* Summarize a text of X
* Generate a poem in the style of X.
* Give me a list of keywords based on semantic similarity.

large language model > processor

output > summarization, writing, keyword extraction.

***

Elements of the prompt

Instructions -> Classify that text into neutral, Negative or positive
Text: I think the food was OK. > input data.
Output indicator > sentiment.

***

Dialog tuned language model

* Dialog tuned models are a special case of instruction tuned where requests are typically framed as questions to a chat box.
* Dialog tuning is a further specialization of instruction tuning that is expected to be in the context of a longer back and forth conversation, and typically works better with natural question like phrasing.

Prompt examples
user:is the comment "Do you like the weather?" OK or toxic?
bot:. OK
User: Can you briefly say why?
Bot: it's just a question about the weather, people are not usually upset by that.

***

Chain of thought reasoning

* Models are better at getting the right answer when they first output text that explains the reason for the answer.
* The model is less likely to get the correct answer directly.
* Now the output is more likely to end with the correct answer.

***

Observation.

A model that can do everything has practical limitations.

Task specific tuning can make LLMS more reliable.

***

Model Garden and Vertex.AI have task specific models

Language

Extraction:

* syntax analysis

classification >

* entity analysis, content classification, sentiment analysis, entity sentiment analysis.

vision

classification: object detector

detection: occupancy analytics, person vehicle detector, PPE detector, person blur.

***

Tuning

the process of adapting a model to a new domain or set Of custom use cases by training the model on new data. for example, we may collect training data and tune the LLM specifically for the legal or medical domain.

***

Fine tuning

bring your own data set and retrain the model by tuning every weight in the LLM. This requires a big training job (like really big) and hosting your own fine tune model.N

***

Examples

* Healthcare data > millions of EHRS
* reusable components > Medical foundation model.
* Tasks adoption > Question answering, chart summarizing, image analysis, risk stratification, finding similar patients.
* human AI collaboration > Natural language interactions.


***

Type observation.

Find tune is expensive and not realistic in many cases

Are there more efficient methods of tuning?

***

More efficient methods of tuning up.

Parameter efficient tuning methods (PETM)

Message for tuning in LLM on your own custom data without duplicating the model. the base model itself is not altered. instead, a small number of add on layers are tuned, which can be swapped in and out at inference time.

Prompt tuning

one of the easiest parameter efficient tuning methods.


***

Gen AI Studio

* Fine tune models
* deploy models to production
* Fine tune models
* deploy models to production
* Create chat bots
* image generation
* and more.

Language
* Test, tune, and deploy generative AI language models. Access the palm API for chat for content generation, chat, summarization and more.

Vision
Write text prompts to generate new images, or generate new areas of an existing image.

***

Generative AI app filter generates generative AI apps without writing any code.

***

Home API and Baker Ste simplifies generative development cycle.

PaLM API

Simple entry point for Google LLMS.Provide developer access to models that are optimized for use cases, such as summarization, classification, and more.

Maker Suite

An approachable way to start prototyping and building generative AI applications. iterate on prompts, augment your data set with synthetic data, tune custom models.
