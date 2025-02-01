# Towards a Common Prompt Structure
Nearly all major LLM docs (from OpenAI’s GPT-4 to Anthropic’s Claude to Google’s Gemini) point to a similar underlying architecture for successful prompting. Of course there are differences that do matter between these models, and I can get to that in future posts. But this first post on prompts is focusing on delivering a really comprehensive look at what it takes to prompt well in 2025 across LLMs.

With that in mind, here are the six key elements:

1. Role or Persona
• Definition: You tell the model who it is supposed to be, e.g., You are a senior Java developer, or You are a career advisor AI assistant.

• Why It Matters: LLMs take on whatever persona you assign. Specifying a role changes the tone, style, and domain knowledge base the model draws on.

• Caveat: I have found this is much much less necessary with true reasoning models like o1 and especially with o1 Pro. You simply give them the task and don’t worry about role.

2. Goal / Task Statement
• Definition: Exactly what you want done. For instance: Translate this paragraph into Spanish or Summarize the user’s job qualifications.

• Why It Matters: LLMs are extremely flexible. Giving them a single core objective keeps them on track.

• Tip: If you can’t define the full scope of the task yet, chunk it down and define a specific task along the way!

3. Context or References
• Definition: Key data points or snippets the model needs: e.g., Here is the user’s resume text or Below is a 300-word excerpt from a research paper.

• Why It Matters: LLMs fill in gaps with guesses. If you want factual or domain-specific detail, supply it. Minimizing irrelevant text is also crucial—too much noise can bury the model.

4. Format or Output Requirements
• Definition: You specify whether you want bullet points, a table, JSON, or a short paragraph.

• Why It Matters: If you don’t say how you want the answer, LLMs might give you a novel-length response. Or they might bury data in a stream-of-consciousness paragraph that’s hard to parse.

• Tip: Use filler data to show the model the length or quality of the output format so it can more easily map out the pattern of output you’re looking for!

5. Examples or Demonstrations (Optional)
• Definition: Show a good (and sometimes bad) example of exactly what style or output you need.

• Why It Matters: LLMs learn from examples in real time. Even a single demonstration clarifies format or style better than paragraphs of explanation.

• Caveat: Sometimes you’ll find that in practice adding an example constrains the creativity you’re looking for in the task. So for tasks that require useful variation, test with and without.

6. Constraints / Additional Instructions
• Definition: Word limits, like no external data, or explain at a 5th-grade reading level, etc.

• Why It Matters: LLMs can be overly verbose or meander. Constraints keep them reined in.

• Tip: In practice, if you have too many constraints the model will get mixed up. So use them wisely and lean on your example.

“Chain-of-Thought” vs. Summarized Reasoning
One of the biggest differences in LLM usage is whether you want them to generate a detailed “internal reasoning” or just a succinct final explanation. Some advanced models, especially o1 Pro, will reason in hidden steps. Others can produce chain-of-thought (CoT) explanations that show how the model reaches a solution.

Sidebar: We don’t talk enough about the difference between deeply reasoning models and models that produce CoT as part of the response. The former (like o1 Pro) will run multiple streams of tokens in the background and exercise a degree of selection across the results of multiple token prediction streams. The latter (like o1, or DeepSeek R1, or Gemini Flash Thinking 2.0) generates a readable CoT that shows the model’s token prediction pattern prior to producing a readable response—but they aren’t necessarily running multiple next token prediction streams at once.

With that being said, here are a couple of nuances that come with reasoning models that don’t come up as much with traditional LLMs.

• Too many chain-of-thought requests can confuse or degrade performance. Some model docs (e.g., OpenAI o1 series) advise not to force the model to show every step.

• Short, clear reasoning (like “Explain your final logic in 2–3 bullet points”) often suffices to keep the user informed without overloading them.

Common Prompt Pitfalls (and How to Fix Them)
So what can go wrong prompting models? I often think the negative examples are most useful, so here are a few specific callouts to avoid:

1. Vague or Ambiguous Requests
• Pitfall: Tell me about education.

• Better: Summarize how public education evolved in the U.S. from 1900 to 1950, highlighting three key policy shifts. Keep it under 200 words.

2. Multiple Demands in One Sentence
• Pitfall: Please parse these articles for main ideas, create a table of references, propose solutions, write a short comedic poem about them, then compare them to my notes.

• Better: Break it down step-by-step (or bullet by bullet). Example: First, parse these articles for main ideas. Then, we’ll do the rest.

3. No Format Guidance
• Pitfall: Tell me everything about the user’s resume.

• Better: Identify the user’s top 5 skills from their resume, list them as bullet points, then provide a one-sentence summary.

4. Omitting Key Context
• Pitfall: Compare these job descriptions. (But you never provide the actual text or even a summary of them!)

• Better: Below are three job descriptions for similar roles, each focusing on a different skill set. Please read them carefully, then provide a 3-bullet comparison of commonalities and differences.

5. Contradictory Instructions
• Pitfall: Explain it in 20 words but also include multiple references and citations.

• Better: Decide which instructions truly matter, or specify a fallback. Keep it concise (around 50 words). If citations are needed, you can exceed 50 words to list them.

Detailed Example: Career Advisor Use Case
Below is a more comprehensive example prompt. Suppose you have a job switcher who has worked at a tiny startup and wants to transition into a corporate Project Manager role. They have 5 job descriptions from major companies, each listing requirements. They also have an informal resume. You want the LLM to:

1. Summarize the role requirements (so the user fully grasps them).

2. Interview the user about their background (to gather info).

3. Compare the user’s background to these requirements.

4. Identify skill gaps and propose solutions.

5. Provide an overall difficulty rating (“minimal,” “moderate,” or “significant”).

6. Keep the whole conversation well-structured.

Prompt:

ROLE or SYSTEM INSTRUCTION:
You are a career advisor AI assistant with expertise in mapping small-business experience to corporate roles.

GOAL / TASK:
Help the user evaluate their fitness for a Project Manager position at a large company by:

1. Summarizing common responsibilities, qualifications, and skill sets across the user’s provided 5 job descriptions.
2. Interviewing the user about their small-business experience—responsibilities, achievements, skills.
3. Relating the user's background to corporate PM tasks (noting direct overlaps, partial overlaps, and skill gaps).
4. Proposing ways to address those gaps (courses, certifications, volunteering, etc.).
5. Providing a 1-3 word difficulty rating (Minimal, Moderate, Significant) with a one-sentence rationale.

CONTEXT or REFERENCES:

- The user has 5 job descriptions for a “Project Manager” role, each focusing on tasks like cross-functional leadership, budgeting, scheduling, and stakeholder management.
- The user worked at a very small startup, wearing multiple hats: operations, basic accounting, vendor coordination, team leadership.

FORMAT or OUTPUT REQUIREMENTS:
Provide your final answer in these sections:

1) Role Summary
2) User’s Background Overview
3) Overlaps
4) Gaps & Recommendations
5) Gap-to-Close Rating (with a one-sentence explanation)

EXAMPLES / DEMONSTRATIONS:

- Good Overlaps section (example):
  "• Overlap 1: User’s daily vendor coordination aligns with required vendor management in the job descriptions."
  "• Overlap 2: Leading a small ops team parallels cross-functional leadership."
- Bad Overlaps section (example):
  "Yes, they have some skills. So next question, please."

CONSTRAINTS / ADDITIONAL INSTRUCTIONS:

- Keep your final summary under 500 words.
- Ask interview questions one at a time to avoid overwhelming the user.
- Use a supportive, encouraging tone.
This prompt spells out the role, the data, the constraints, and the format step by step. The result? A well-structured, relevant answer that addresses the user’s real needs—rather than a random AI ramble about project management in general.

Advanced Techniques
Just for fun, I thought I’d include a teaser on some other techniques I might expand on in future posts!

1. Few-Shot Prompting
• If you want the LLM to replicate a specific style or format, provide a few examples of (input → desired output). E.g., When given a job description, here’s how we summarize it… and show an example. This is especially common in tasks like code generation, math solutions, or structured data extraction.

2. Chain-of-Thought (with caution)
• If you need step-by-step explanations, you can ask: Explain your reasoning in concise bullet points. But be mindful that some models discourage forcing them to show all internal logic. Summarized reasoning is usually enough to confirm correctness.

3. Iterative or Multi-Prompt Strategies
• Break big tasks into multiple prompts or steps. This mimics how you might talk to a real human expert—Plan → Get partial results → Refine → Conclude. For instance, First, create an outline. Then, expand each section.

Debugging Your Prompt
Even with careful design, you might get an answer that’s off-track. Try these steps:

1. Check the Format: Did you provide headings or a bullet list request? If not, the model might produce a massive block of text.

2. Add or Remove Detail: Sometimes LLMs flounder if you’re too broad. Other times, they get tangled in extraneous detail. Adjust accordingly.

3. Explicitly Re-state the Goal: If the model wandered, re-assert the main objective.

4. Shorter is Not Always Better: If you’re too terse (e.g., Analyze. Go.), the LLM guesses your intent. Give it a well-structured runway.

Why Better Prompting Enhances Human–LLM Interaction
So why go to all this trouble? What are the benefits beside better prompting? I find it actually matters because it transforms LLM-Human interactions into a partnership. Here are a few takeaways I’ve found to be true:

1. Speeds Up Work: Instead of clarifying tasks in multiple back-and-forth messages, you can front-load clarity and get near-instant results.

2. Produces Actionable Output: Getting bullet lists, tables, or JSON means less post-processing or reformatting.

3. Promotes Trust: High-quality, consistent answers reassure you that the model “understands” your ask—leading to more complex or creative use cases.

4. Empowers Non-Coders: You don’t need programming experience to craft effective prompts. Think of it as simply writing careful instructions.

Final Thoughts & Next Steps
Prompt engineering needn’t be intimidating or overly technical. At its core, it’s about telling the AI who you are, what you want, and how you want it. Every major AI provider’s documentation circles back to that same principle. If you want to keep going, here’s how you can continue building your skills:

• Experiment: Start with short tasks, refine your prompt until the answer is exactly how you want it, then scale up.

• Learn from Official Guides: OpenAI, Anthropic, Microsoft, Google, Meta, and others share best practices that often reinforce the same universal structure.

• Create Reusable Templates: If you have a workflow—like summarizing articles or analyzing resumes—turn your prompt into a fill-in-the-blank template. The more you use it, the more consistent your results become.

With the tips and insights in this article, you should be well on your way to crafting powerful prompts that deliver the clarity, accuracy, and creativity you’re looking for. Happy prompting!
