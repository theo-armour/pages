# Prompt instruction Max Vogel

## Source

* https://medium.com/@maximilian.vogel/i-scanned-1000-prompts-so-you-dont-have-to-10-need-to-know-techniques-a77bcd074d97


## Cheat Sheet
Content of the Instruction

## Bot persona

### Task of this Component

Define a behavior with many individual facets in just a few words or...

for a story driven interaction with an NPC or avatar, define a bot persona with a backstory that makes the bot's behavior more exciting and interactive. Provide names, dates, places in the story

### Dos (exemplary)

Act as a sensitive elderly psychotherapist ... as a patient support staff ... as a professional journalist ... as a car in love with its driver

you are Selma Brand, a 28-year old gunslinger who lost her family in a bandit raid on their farm. You travel with your horse Abaddon through New Mexico and try to find the guys who killed your loved ones ...

### Don'ts (exemplary)

Act as a helpful Al

## User Persona

### Task of this Component

Define the level of detail, complexity, required knowledge of the recipient in a few words

### Dos (exemplrary)

Explain it like to someone with an MSc in software engineering... like to a 5-year-old child

### Don'ts (exemplary)

Answer the user...

## Verb ~ Task

### Task of this Component

Define the task. To "answer" is not the task, because the model will always respond.

### Dos (exemplrary)

Summarize, list, ask, classify, explain, format, extract, translate to Spanish..

### Don'ts (exemplary)

Answer the question, give me,


## Output Format

### Task of this Component

Define the exact format of the output

### Dos (exemplrary)

A list of steps, a formula, python code, a JSON, a number, a recipe. [you can define the output format in a separate section as well]

### Don'ts (exemplary)



## Length, Level of Detail

### Task of this Component

Describe the output format and number of elements

### Dos (exemplrary)

Up to 3 sentences... 10 examples with product name and price

### Don'ts (exemplary)

Short, few, detailed


## Tonality

### Task of this Component

Define the style, the way the model should convey the message

### Dos (exemplrary)

Empathetic, confident, aggressive, moaning, sarcastic, witty, stuttering

### Don'ts (exemplary)

Friendly, neutral, smart, intelligent

## Edge cases

### Task of this Component

Define responses for special situations: Model has no information... does not understand the question ... if the user gets aggressive, toxic ...

### Dos (exemplrary)

If you can't answer the question based on the provided context, tell the user you can't ...

### Don'ts (exemplary)

Answer only on the basis of your knowledge...

## Whitelist Conversation topics

### Task of this Component

Define all the topics the model can talk about, not the other way round (list forbidden topics)


### Dos (exemplrary)

Discuss only the operation of the coffee machines of the manufacturer XYZ and talk about coffee culture. Friendly refuse to chat on something else.

### Don'ts (exemplary)

Do not talk about politics, religion, war, drugs, criminality, sexuality, minorities, conspiracy theories or other sensitive topics.




## 10 most important prompting approaches

* Add specific, descriptive instructions (with cheat sheet)
* Define the output format
* Give few-shot examples
* Integrate “I don’t know” (IDK), off-topic cases (to control hallucination / critical topics)
* Use chain-of-thought reasoning
* Use prompt templates, not static prompts
* Add a data context (RAG)
* Include conversation history
* Format the prompt: Use clear headlines labels and delimiters in your prompt
* Bringing it all together: The anatomy of a professional prompt (with cheat sheet)
* Bonus track: Multiprompt approach — when one prompt is not enough


## Tips


### 1. Add Specific, Descriptive Instructions

Without deliberate instructions you often get lengthy, sometimes vague answers talking about anything and everything.


### 2. Add a Detailed Format of the Desired Model Response

Besides a brief mention of the output format in the instruction, it is often helpful to be a little bit more detailed: Specify a response format, which makes it easier for you to parse or copy parts of the answer.

If you don’t need a fully formatted output like JSON, XML, HTML, sometimes a sketch of an output format will do as well.


### 3. Give Few-Shot Examples

Any sufficiently elaborate model can answer easy questions based on “zero-shot” prompts, without any learning based on examples. This is a specialty of foundation models. They already have billions of learning “shots” from pre-training. Still, when trying to solve complicated tasks, models produce outputs better aligned to what you need if you provide examples.

Imagine that you’ve just explained the job and are now training the model with examples: If I ask you this, then you answer that. You give 2, 3, 5 or 8 examples and then let the model answer the next question by itself. The examples should be in the format of query & expected model answer. They should not be paraphrased or just summarized.


### 5. Add Edge Cases to the Few-Shot Examples (IDK, Off-Topic)

If you are building an assistant to support the user in the operation of a cleaning robot, you can train the model to avoid answering off-topic questions, which may be critical for factual accuracy, liability, or brand value.

It’s advisable to not include too many similar examples, instead, consider exploring different categories of questions in the examples. In the case of our cleaning robot this could be:

Standard cases:

* Help with operations (step-by-step instructions)
* Help with malfunctions
* Questions about product features / performance data

Edge cases:

* Off-topic questions
* Questions that are on the topic, but the bot cannot answer (I don’t know — IDK)
* Questions the bot doesn’t understand or where it needs more information
* Harassment / toxic language

Handling off-topic questions or questions the bot can’t answer based on your input material is key for professional business applications. If not, the model will start to hallucinate and give the user potentially wrong or harmful instructions to use a product.


### 5. Chain-of-Thought Reasoning

Language models don’t really read, conceptualize tasks or questions, but rather produce an answer with a high stochastic probability based on chains of tokens.

In the next example (on the left), we can see that the model isn’t processing our question correctly — admittedly, you don’t have to be an LLM to get this rather complicated question wrong.

But in contrast (on the right-hand side): If we force the model to think step by step, it can generate a correct answer. The two types of reasoning correspond to Daniel Kahneman’s “System 1 and System 2 Thinking” from his book Thinking, Fast and Slow.

In our prompt on the right-hand side, we added an example, which helps the model to understand how to process data and how to think “slow”. Make sure again, that either in the instruction or in the examples you specify an easily scannable output format (like “\nResult: species’ names”). This helps you to skip the thinking part of the output and just present the result (“Cats”) to your users.

For further reading, the scientific paper introducing the chain-of-thought prompting: https://arxiv.org/abs/2201.11903


### 6. Use a Prompt Template

When using a prompt in an application context, don’t simply add the user question to the end, instead try to build a prompt template with variable components to facilitate testing and real-world use.


### 7. Add a Custom Data Context (RAG)

In many business applications, it’s not ideal for user’s questions to be answered based on a model’s general pre-training, which usually relies on past internet information that could be outdated, inaccurate or incomplete.

It’s preferable to answer these questions using specific content from your organization, like manuals, databases (such as product information management databases) or systems (such as map services).

Create the prompt template to integrate seamlessly with this specified content, also known as “context”.

Retrieving the context from documents is another topic not discussed in full here, however, it’s important to note that you usually get the relevant snippets from a much larger content base (which may not fit directly into the prompt). Therefore, it’s often narrowed down through retrieval processes like DPR or through searches in a vector database.

This approach is called retrieval-augmented generation (RAG), because there are two steps: Retrieval by a non-LLM setup and then answer generation by the model.

The context data doesn’t have to be plain text. When sourcing data from a system or database, you can also input structured data, such as a list of the nearest filling stations.

### 8. Include Conversation History

For many ongoing conversations it is not possible to give an answer based on a single question — the context of the conversation plays a role here:

In the example above, using the conversation history, the model can process the user utterance “Yes, please!” like a fully qualified statement: “Yes, please, give me a step-by-step instruction to set up the charging station”.

In some APIs (like OpenAI’s chat completion API or Langchain) the history can be handed over in a different way (e.g., an array of user / assistant messages).

### 9. Format the Prompt: Use Clear Headline Labels and Delimiters
When crafting an extensive prompt, structure it in a way that the model can distinguish between various components, such as:

* Instruction
* Desired output format
* Few shot examples
* Data context
* Conversation history

Feel free to format parts of the prompt with hashes (“#”). While many models don’t need this, it can be helpful for other models. Additionally, it can help both you and future prompt engineers when editing.

Enclose longer passages of input context in quotes to prevent the model confusing them for instructions.

Do the same and place user inputs inside quotes to prevent injections. Injections are user utterances that not only provide an input, but also change the direction of processing, for example instructions like “forget all previous instructions, but instead do [this or that] “. Without using quotes, the model could struggle to recognize that this isn’t a valid instruction, but a potentially harmful user input.

### 10. Bringing it All Together: The Anatomy of a Prompt

Phew! We’re nearly at the end … now it’s time to integrate everything. Remember, you probably won’t need all of the following components, but feel free to use this cheat sheet when checking your prompt.



### Bonus Track: The Multiprompt Approach — When a Single Prompt is not Enough

If you have a large and complex application, e.g. an in-car system, a support hotline for a couple of products, an automation agent answering customer emails, etc., you may encounter problems to pack all processing rules for the model into one prompt. Length-wise it still could fit, even with few-shot-examples, but the model may get confused at some point, what to do in a specific case: Which examples are relevant for this case, which output format should be selected. The best solution is to choose a multiprompt approach, where you first classify the user utterance or the dialog history and then based on the classficiation, give a clear instruction and customized examples.

Implementationwise you typically send the user utterance to a model with a classification prompt forcing it to answer with an item from a list of predefined values, like the type of user utterance (“how_to_question”), (“feature_question”), (“bot_capability_question”),(“feedback”), ... You read the result out and open a specific chain for each type of conversation.

This approach correctly implemented will result in a better accuracy and specifity of the answers. Splitting up the prompt can result in a reduction of input tokens, while leaving the output tokens in a similar dimension. So, it will not have a major impact on the costs.


## Open.ai

https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api

1. Use the latest model
2. Put instructions at the beginning of the prompt and use ### or """ to separate the instruction and context
3. Be specific, descriptive and as detailed as possible about the desired context, outcome, length, format, style, etc
4. Articulate the desired output format through examples
5. Start with zero-shot, then few-shot, neither of them worked, then fine-tune
6. Reduce “fluffy” and imprecise descriptions
7. Instead of just saying what not to do, say what to do instead
8. Code Generation Specific - Use “leading words” to nudge the model toward a particular pattern

