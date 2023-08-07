# Introduction to Large Language Models

* https://www.cloudskillsboost.google/course_templates/539

>This is an introductory level microlearning course that explores what large language models (LLM) are, the use cases where they can be utilized, and how you can use prompt tuning to enhance LLM performance. It also covers Google tools to help you develop your own Gen AI apps. This course is estimated to take approximately 45 minutes to complete.

### Video 2

* Define Large Language Models (LLMs)
* Describe LLM Use Cases
* Explain Prompt Tuning
* Describe Google’s Gen AI Development tools

***

Large language models LLM are a subset of deep learning

Large, general-purpose language models can be pre-trained and then fine-tuned for specific purposes

Large language models are trained to solve common language problems like text classification, question answering, document summarization, and more

Then be tailored to self specific problems in different fields, like retail, finance, entertainment - Trained with a relatively small size of Field Datasets

***

Large language models
* Large
  * Large training data set ~ petabyte scale
  * Number of parameters ~ billions
* General Purpose ~ sufficient to solve common problems
* Commonality of human languages ~ regardless of task
  * Resource restriction ~ only certain organizations can afford to train them
* Pre trained and fine tuned
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

* has 540 billion parameters
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

LLM development - using pretrained API's
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

Big Tech: provide support to customers
Consumer: tailored messaging to individual customers
Education: provide info on courses, tuition, policy
Media: provide info on subscriptions and services
Pharmacy and Healthcare: provide info for patient self management
Retail: provide better chat bots; product visualization
Supply chain: provide logistics info or inventory of info

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

* Prompt design
  * Prompts involve instructions and contexts passed to a language model to achieve a desired task
* Prompt engineering
  * Prompt engineering is the practice of developing and optimizing prompts to efficiently use language models for a variety of applications

***

There are three main kinds of LLM, each needs prompting in a different way

the first two are easily confused and give very different outputs

* Generic (or raw) language models: These predict the next word (technically token) based on the language of the training data
* Instruction tuned: trying to predict a response to the instructions given the input
* Dialog tuned: trained to have a dialog by predicting the next response

***

Generic language models ~ A next word predictor

* 


