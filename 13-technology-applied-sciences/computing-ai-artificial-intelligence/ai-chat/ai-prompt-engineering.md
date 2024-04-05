# Prompt Engineering

## Sources

* https://medium.com/@maximilian.vogel/i-scanned-1000-prompts-so-you-dont-have-to-10-need-to-know-techniques-a77bcd074d97

## Prompt instruction cheat sheet

Content of the Instruction

### Bot persona

#### Task of this Component

Define a behavior with many individual facets in just a few words or...

for a story driven interaction with an NPC or avatar, define a bot persona with a backstory that makes the bot's behavior more exciting and interactive. Provide names, dates, places in the story

#### Dos

### user persona

**Task of this Component**

Define the level of detail, complexity, required knowledge of the recipient in a few words

### Verb ~ Task

**Task of this Component**

Define the task. To "answer" is not the task, because the model will always respond.

**Dos**


**Don'ts**


### output format

**Task of this Component**

Define the exact format of the output

### length, Level of Detail

**Task of this Component**

Describe the output format and number of elements

### Tonality

**Task of this Component**

Define the style, the way the model should convey the message

### Edge cases

**Task of this Component**

Define responses for special situations: Model has no information... does not understand the question ... if the user gets aggressive, toxic ...


### Whitelist Conversation topics

**Task of this Component**

Define all the topics the model can talk about, not the other way round (list forbidden topics)


you are Selma Brand, a 28-year old gunslinger who lost her family in a bandit raid on their farm. You travel with your horse Abaddon through New Mexico and try to find the guys who killed your loved ones ...

Explain it like to someone with an MSc in software engineering... like to a 5-year-old child

Summarize, list, ask, classify, explain, format, extract, translate to Spanish..

A list of steps, a formula, python code, a JSON, a number, a recipe. [you can define the output format in a separate section as well]

Up to 3 sentences... 10 examples with product name and price

Don'ts (exemplary)

Act as a helpful Al

Answer the user

Answer the question, give me,

Answer, text

Short, few, detailed

Friendly, neutral, smart, intelligent


Dos (exemplary)

Act as a sensitive elderly psychotherapist ... as a patient support staff ... as a professional journalist ... as a car in love with its driver

Empathetic, confident, aggressive, moaning, sarcastic, witty, stuttering

If you can't answer the question based on the provided context, tell the user you can't ...

Discuss only the operation of the coffee machines of the manufacturer XYZ and talk about coffee culture. Friendly refuse to chat on something else.

Answer only on the basis of your knowledge...

Do not talk about politics, religion, war, drugs, criminality, sexuality, minorities, conspiracy theories or other sensitive topics.


## Tips


### Add Specific, Descriptive Instructions

Without deliberate instructions you often get lengthy, sometimes vague answers talking about anything and everything.


### Add a Detailed Format of the Desired Model Response

Besides a brief mention of the output format in the instruction, it is often helpful to be a little bit more detailed: Specify a response format, which makes it easier for you to parse or copy parts of the answer.


### Give Few-Shot Examples
Any sufficiently elaborate model can answer easy questions based on “zero-shot” prompts, without any learning based on examples. This is a specialty of foundation models. They already have billions of learning “shots” from pre-training. Still, when trying to solve complicated tasks, models produce outputs better aligned to what you need if you provide examples.

Imagine that you’ve just explained the job and are now training the model with examples: If I ask you this, then you answer that. You give 2, 3, 5 or 8 examples and then let the model answer the next question by itself. The examples should be in the format of query & expected model answer. They should not be paraphrased or just summarized.


### Add Edge Cases to the Few-Shot Examples (IDK, Off-Topic)

If you are building an assistant to support the user in the operation of a cleaning robot, you can train the model to avoid answering off-topic questions, which may be critical for factual accuracy, liability, or brand value.


### Chain-of-Thought Reasoning

Language models don’t really read, conceptualize tasks or questions, but rather produce an answer with a high stochastic probability based on chains of tokens.


### Use a Prompt Template

When using a prompt in an application context, don’t simply add the user question to the end, instead try to build a prompt template with variable components to facilitate testing and real-world use.


### Add a Custom Data Context (RAG)
In many business applications, it’s not ideal for user’s questions to be answered based on a model’s general pre-training, which usually relies on past internet information that could be outdated, inaccurate or incomplete.

It’s preferable to answer these questions using specific content from your organization, like manuals, databases (such as product information management databases) or systems (such as map services).

Create the prompt template to integrate seamlessly with this specified content, also known as “context”.

Retrieving the context from documents is another topic not discussed in full here, however, it’s important to note that you usually get the relevant snippets from a much larger content base (which may not fit directly into the prompt). Therefore, it’s often narrowed down through retrieval processes like DPR or through searches in a vector database.

This approach is called retrieval-augmented generation (RAG), because there are two steps: Retrieval by a non-LLM setup and then answer generation by the model.


### Include Conversation History

For many ongoing conversations it is not possible to give an answer based on a single question — the context of the conversation plays a role here:


### Format the Prompt: Use Clear Headline Labels and Delimiters
When crafting an extensive prompt, structure it in a way that the model can distinguish between various components, such as:

* Instruction
* Desired output format
* Few shot examples
* Data context
* Conversation history


### Bonus Track: The Multiprompt Approach — When a Single Prompt is not Enough
If you have a large and complex application, e.g. an in-car system, a support hotline for a couple of products, an automation agent answering customer emails, etc., you may encounter problems to pack all processing rules for the model into one prompt. Length-wise it still could fit, even with few-shot-examples, but the model may get confused at some point, what to do in a specific case: Which examples are relevant for this case, which output format should be selected. The best solution is to choose a multiprompt approach, where you first classify the user utterance or the dialog history and then based on the classficiation, give a clear instruction and customized examples.

Implementationwise you typically send the user utterance to a model with a classification prompt forcing it to answer with an item from a list of predefined values, like the type of user utterance (“how_to_question”), (“feature_question”), (“bot_capability_question”),(“feedback”), ... You read the result out and open a specific chain for each type of conversation.

