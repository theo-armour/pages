# Google Generative AI Learning Path

* https://www.cloudskillsboost.google/journeys/118
* https://www.cloudskillsboost.google/course_templates/536

## Intro to Generative AI

This is an introductory level microlearning course aimed at explaining what Generative AI is, how it is used, and how it differs from traditional machine learning methods. It also covers Google Tools to help you develop your own Gen AI apps.This course is estimated to take approximately 45 minutes to complete.

Objectives
* Define Generative AI
* Explain how Generative AI works
* Describe Generative AI Model Types
* Describe Generative AI Applications

### Video

Define Generative AI

AI is a discipline. AI is the theory and development of computer systems able to perform tasks normally requiring human intelligence

Machine Learning Gives computers the ability to learn without explicit programming

***

Unsupervised ML models
* Unsupervised learning implies the data is not labeled
* Unsupervised problems are all about looking at the raw data and seeing if it naturally falls into groups

Supervised ML models
* labels, tags
* Supervised learning implies the data is already labeled.
* In supervised learning we are learning from past examples to predict future values

Reinforcement Learning

***

Deep Learning Is a subset of machine learning

Deep learning uses artificial neural networks - allowing them to process more complex patterns than traditional machine learning

Semi supervised learning

Generative AI is a subset of deep learning

Large language models are also a subset of deep learning

***

Deep learning model types

Discriminative
* Use to classify or predict
* Typically trained on a data set of labeled data
* Learns the relationship between the features of the data points and the labels

Generative
* generates new data that is similar to data it was trained on
* Understands distribution of data and how likely a given example is
* Predict next word in a sequence

Not GenAI when response is a
* number
* Discrete
* Class
* Probability

Is GenAI when answer is
* Natural language
* Image
* Audio

***

Classical supervised and unsupervised learning

Training code and labeled data > Model Building > Predict Or classify or cluster

GenAI supervised, semi-supervised and unsupervised learning

training code plus labeled data plus unlabeled data >
Foundation model >
Generate new content > text generation
Generate new content > code generation
Generate new content > image generation

***

What is generative AI?

* GenAI is a type of artificial intelligence that creates new content based on what it has learned from existing content
* The process of learning from existing content is called training and results in the creation of a statistical model
* When given a prompt GenAI uses this statistical model to predict what an expected response might be - and this generates new content

***

Generative language models
* Generative language models learn about patterns in language through training data
* Given some text they predict what comes next

Generative image models
* Generative image models produce new images using techniques like diffusion
* Then given a prompt or related imagery they transform random noise into images or generate images from prompts

Generative language models learn about patterns in language through training data

Then, given some text, They predict what comes next

***

How it works

Pre-Training
* Large amount of data
* billions of parameters
* unsupervised learning

* Input
* Transformer
* Encoding Component
* Decoding Component
* Generative pretrained transformer model
* Output

Hallucinations

Challenges
* The model is not trained on enough data
* The model is trained on noisy or dirty data
* The model is not given enough context
* The model is not given enough constraints

***

Prompt design: the quality of the input determines the quality of the output

Forming a datbase
Inputting a prompt
Generating content

Model types
Text to text
Text to image
text to video
text to 3D
Text to task

***

Model Garden: Vertex AI Foundation Models

Language Foundations
* PaLM API for Chat
* Palm API for Text
* BERT

Vision Foundations
* Embeddings extractor
* Stable diffusion V1-5
* Blip image captioning
* BLIP VQA
* Clip
* OWL VIT
* ViT GPT 2

***

Model Garden Task Specific Models

Language

* Extraction ~ Syntax analysis
* Classification ~ entity analysis, content classification, sentiment analysis, entities sentiment analysis

Vision

* Classification - object detector
* Detection - occupancy Analytics, Persian vehicle detector, PPE detector, person blur

***

The generative ai application landscape

Text, code, image, speech, video, 3D, other

Bard
* Debug your lines of source code
* Explained your code to you line by line
* Translate code from one language to another
* Generate documentation and tutorials for source code

***

GenAI Studio

* Fine tune models
* Deploy models to production
* Create chatbots
* Image generation and more

Language
* Test, tune, and deploy generative AI language models.
* Access the palm API for chat for content generation, chat, summarization, and more

Vision
* Write text prompt to generate new images or generate new areas of an existing image

Generative AI app Builder creates generative AI apps without writing any code

***

Palm API and maker ste simplifies generative development cycle

Palm API
* Simple entry point for Google's LLM 's.
* Provide developer access to models that are optimized for use cases such as summarization, classification and moren

maker suite
* An approachable way to start prototyping and building generative AI applications
* Iterate on prompts, augment your data set with synthetic data, tune custom models


### Readings

* https://www.cloudskillsboost.google/course_sessions/4206797/documents/384244



#