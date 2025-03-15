# Theo Tips

## Sources

* https://github.com/smkalami/prompt-decorators/blob/main/prompt-decorators.txt
* https://www.tomsguide.com/ai/5-mind-blowing-chatgpt-prompts-youll-wish-you-knew-sooner
* https://medium.com/pythoneers/14-powerful-prompt-engineering-techniques-you-need-to-know-5fb1f603789e


## Role

### You are a

* teacher, marketing expert, personal trainer, PT
* doctor
* CS PhD, SEO expert, copywriter, wikipedia editor

### I am a

* Student
* Emcee
* Demo Jock

### Audience is / They are

* Ten year old
* Visitor

## Context / Detailed background

* Be mindful of
* Appeal to emotions or intellect
* inform, persuade, entertain, instruct, or influence


### Chain of Thought

* Explain your reasoning before giving the final 
answer."


### StepByStep

* Breaks down complex tasks into steps
* your response must be structured into a sequence of logically ordered steps. Each step should be explicitly labeled, such as: **[Step 1] → [Step 2] → ... → [Final Step]**.   

### CiteSources

Ensures AI includes references

### Reasoning

* Ensures logical explanation before answering
* you must begin your response with a detailed explanation of the reasoning and logic behind your answer. The explanation should be clear, structured, and directly relevant to the prompt.

### Socratic

When this decorator is present, engage in a Socratic approach by posing clarifying questions before providing a direct answer. The response should encourage critical thinking and follow this structured sequence:  
**[Restate Question] → [Clarify Definitions] → [Analyze Assumptions] → [Explore Perspectives] → [Use Analogies/Examples] → [Encourage Further Inquiry]**.  


## Task / Iterative Refinement

### Analyze

* Analyze this information.
* How do you know
* Analyzes strengths and weaknesses before improving

### Critique

* provide constructive criticism by assessing both strengths and weaknesses before suggesting improvements. The structure should be:  
**[Identify Subject] → [Highlight Strengths] → [Critique Weaknesses] → [Suggest Improvements] → [Constructive Conclusion]**.  

### Create / Draft / Brainstorm 

* Give me five creative ideas for
* Provide a list of next steps
* Rewrite this with a friendlier tone
* Generate five thought-provoking questions about

### Compare

* Compare two things
* Tree-of-Thought (ToT) ~ break down a problem into multiple paths, evaluates each, and selects the best.

### Debate

Your response must analyze multiple viewpoints before reaching a conclusion. The response should follow this format:  
**[State Position] → [Perspective 1] → [Perspective 2] → ... → [Analysis & Rebuttal] → [Conclusion]**.  

### Explain

* Explain any trends or insights you find

### Fact Check

* Prioritizes verifying factual accuracy
* verify the factual accuracy of key claims before finalizing the response. The structure should be:  
**[Initial Answer] → [Identify Claims] → [Research & Verify] → [Mark Uncertainties] → [Provide Verified Sources] → [Final Answer]**.  
* If verification is inconclusive, uncertainties must be explicitly marked.  

### Find / Search

* Find any typos or grammatical errors in my blog post.
* What’s missing
* Who are their competitors?

### Polish / Improve / Refine(iterations=N)

* "How can I make this better?"
* ReAct (Reason + Act) ~  reason through a problem logically and then take action based on that reasoning

### Provide feedback


## React

AI first reasons through a problem logically and then takes action based on that reasoning.

* nalyze this customer feedback to identify major pain points. Then, 
suggest an action plan to improve the product based on your analysis.

### Refine

* go through multiple refinements, improving clarity, accuracy, or effectiveness in each step. The number of iterations is specified as **N**, and the format should follow:  
**[Iteration 1] → [Iteration 2] → ... → [Final Answer]**.  
* Each refinement must enhance the response step by step.  

### Reverse Prompting

* Instead of asking AI for an answer, you ask it to generate the question

### Summarize

* Summarize this in three sentences.
* Summarize the key points, simplify complex language, and highlight any important patterns or insights.

## Tree of Thought

* Consider three different marketing strategies


## Style / Voice / Tonality / Mimicking / Persona Emulation

* casual, formal, friendly, funny, professional, technical, witty, snarky
* Karl Marx, Hemingway, Donald Trump
* Step by step
* Contrarian Perspective

## Format

* TLDR in five bullet points
* quiz me with five multiple-choice questions to test my understanding.
* List, bullet points, CSV, HTML
* Create a step-by-step cheat sheet with shortcuts and pro tips
* Word count, paragraohs
* Example
* Providing a few examples
* Chain-of-Thought Prompting
* Forbidden Words Constraint
* generate structured, detailed prompt templates.

## Memory

"Remember that … " In ChatGPT, go to Settings > Personalization and toggle on Memory. The same thing is available on Google Gemini for Advanced (paid) subscribers. Tell it something like, "Remember, I’m a tea drinker, not a coffee drinker," and it’ll save that info.

## Follow up questions

* How can I make this better?
* What is missing?