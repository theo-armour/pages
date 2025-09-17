# Templates

## Agenda

* Copy templates from: https://natesnewsletter.substack.com/p/the-chatgpt-5-prompting-manual-building

## Email Response Template
Write a [type of email] to [recipient] about [topic].

Keep it [length] and use a [tone] tone.

Include [specific points].

End with [type of closing].

## Content Creation Template
Create a [type of content] about [topic] for [audience].

Make it [length] with [tone/style].

Include [must-have elements].

Focus on [main message].

## Problem-Solving Template
I'm facing this challenge: [describe problem]

My constraints are: [limitations]

Help me find [number] solutions that [criteria].

Consider [important factors].

## Summary Template
Summarize [document/article/meeting] in [length].

Focus on [key aspects].

Written for [audience].

Ignore [irrelevant parts].


Template 1: General Problem Solving
When to use it: This is your Swiss Army knife—for analysis tasks, decision-making, research questions, and any situation where you need systematic thinking about complex problems.

Why it works: The explicit structure triggers GPT-5's analytical routing while preventing the endless exploration loops the model falls into with vague problem-solving requests. The step-by-step process methodology ensures comprehensive coverage without redundancy.

ROLE: You are [specific expertise/role] with deep knowledge of [domain].
GOAL: [Precise objective with measurable outcome]
CONTEXT: [Relevant background, constraints, audience]

PROCESS:
* Start with [specific first step]
* Apply [methodology/framework]
* Validate using [criteria]
* Stop when [success criteria met]

OUTPUT CONTRACT:
* Format: [structure - bullets, table, essay]
* Length: [specific word/paragraph count]
* Include: [required elements]
* Exclude: [what to avoid]

CONSTRAINTS:
* Tone: [professional/conversational/technical]
* Time: [deadline considerations]
* Resources: [available tools/data]

UNCERTAINTY HANDLING:
* If information is incomplete, state "insufficient evidence" and stop
* If conflicting data, present both sides with confidence levels
* If assumptions needed, explicitly state them

SELF-CHECK: Before responding, verify you've addressed all requirements and constraints.
Real example transformation:

Basic prompt: "Should we expand to European markets?"

With meta-prompt applied:

ROLE: You are a market expansion strategist with deep knowledge of international business development.
GOAL: Evaluate European market expansion opportunity and provide go/no-go recommendation
CONTEXT: B2B SaaS company, $50M ARR, successful in US market, considering first international expansion

PROCESS:
* Start with market size and opportunity assessment
* Apply market entry framework (market attractiveness vs. competitive strength)
* Validate using risk-return analysis
* Stop when recommendation is clear and supported

OUTPUT CONTRACT:
* Format: Executive brief with recommendation upfront
* Length: 2-page equivalent (800 words)
* Include: Market size, competition, regulatory requirements, investment needed, 3-year projection
* Exclude: Generic market research, obvious points

CONSTRAINTS:
* Tone: Executive-ready, direct
* Time: Decision needed for Q1 planning
* Resources: Public market data only

UNCERTAINTY HANDLING:
* If market data unavailable, note gaps and impact on recommendation
* If regulations unclear, flag as risk requiring legal review
* State confidence level for projections

SELF-CHECK: Before responding, verify recommendation is actionable and risks are addressed.
This transforms a vague strategic question into a consistent, professional analysis that actually drives decisions.

Common modifications:

For quicker analysis: Reduce PROCESS steps to 3, set tighter word limits, add "bias toward action" in CONSTRAINTS

For deeper analysis: Add competitive framework, require sensitivity analysis, include multiple scenarios

For team contexts: Add "identify stakeholder impacts" to PROCESS, include "implementation roles" in OUTPUT

Testing protocol:

Run base template 3 times, verify consistent structure

Modify one element (e.g., change ROLE from strategist to analyst)

Document how output changes

Iterate until consistency meets needs

Template 2: Technical/Coding
When to use it: Software development, debugging, code reviews, technical documentation, architecture decisions, or any programming task where quality and completeness matter.

Why it works: GPT-5's code generation is powerful but needs boundaries to prevent over-engineering or under-specification. This template ensures the model considers environment constraints, error handling, and documentation—things it might skip when rushing to provide a solution.

ROLE: You are a [language/framework] expert and software architect.
OBJECTIVE: [Specific technical goal with success metrics]

TECHNICAL CONTEXT:
* Environment: [OS, versions, dependencies]
* Constraints: [performance, security, compatibility]
* Existing code: [relevant snippets or architecture]

DECOMPOSITION:

1. Analysis: [break down the problem]
2. Design: [architecture/approach decisions]
3. Implementation: [step-by-step coding]
4. Testing: [validation approach]
5. Documentation: [comments and explanations]

CODE REQUIREMENTS:
* Language: [specific version]
* Style: [conventions, formatting]
* Comments: [inline explanations required]
* Error handling: [explicit error cases]
* Testing: [unit tests, edge cases]

OUTPUT FORMAT:
* Annotated code with explanations
* Alternative approaches considered
* Potential pitfalls and solutions

VALIDATION:
* Code must compile/run without errors
* Include example usage
* Explain trade-offs made

STOP CONDITIONS: Complete when code solves stated problem with proper error handling and documentation.
Real example transformation:

Basic prompt: "Write a Python function to process user data"

With meta-prompt applied:

ROLE: You are a Python expert and software architect specializing in data processing.
OBJECTIVE: Create robust function to validate and transform user registration data for database storage

TECHNICAL CONTEXT:
* Environment: Python 3.11, PostgreSQL backend
* Constraints: GDPR compliance, 100k daily registrations
* Existing code: Uses SQLAlchemy ORM, pydantic for validation

DECOMPOSITION:

1. Analysis: Identify all validation requirements and edge cases
2. Design: Choose validation strategy and error handling approach
3. Implementation: Build function with comprehensive error handling
4. Testing: Create unit tests for happy path and edge cases
5. Documentation: Add docstrings and inline comments for complex logic

CODE REQUIREMENTS:
* Language: Python 3.11 with type hints
* Style: PEP 8, black formatter compatible
* Comments: Explain any non-obvious logic
* Error handling: Specific exceptions for each validation failure
* Testing: pytest-compatible unit tests

OUTPUT FORMAT:
* Complete function with imports
* Unit tests in separate block
* Example usage with sample data
* Performance considerations noted

VALIDATION:
* Function handles all specified edge cases
* Tests achieve 100% code coverage
* No security vulnerabilities (SQL injection, etc.)

STOP CONDITIONS: Complete when function is production-ready with tests passing.
The result is production-quality code with proper error handling, tests, and documentation—not just a quick function that technically works.

Common modifications:

For debugging: Add "Current error: [error message]" to CONTEXT, change DECOMPOSITION to focus on root cause analysis

For code review: Change ROLE to "code reviewer," add "review criteria" section, modify OUTPUT to include improvement suggestions

For architecture: Expand DESIGN phase, add "scalability analysis," require diagrams in OUTPUT

Testing protocol:

Generate same function with and without template

Compare error handling completeness

Run generated tests to verify they actually work

Check if edge cases are addressed

Template 3: Creative Writing
When to use it: Blog posts, marketing copy, stories, scripts, or any creative content where you need consistent quality and voice while maintaining creativity.

Why it works: GPT-5's creative capabilities are impressive but unpredictable. This template provides enough structure to ensure consistency without making the output formulaic. The creative parameters section gives the model permission to be creative within boundaries.

CREATIVE BRIEF:
* Role: You are a [genre] writer with expertise in [specific style/period]
* Project: [type of content - story, script, copy]
* Audience: [demographics, knowledge level, preferences]

CREATIVE PARAMETERS:
* Genre/Style: [specific requirements]
* Tone: [mood, voice, personality]
* Length: [word count or time constraints]
* Theme: [central message or concept]

STRUCTURE REQUIREMENTS:
* Opening: [hook, setup requirements]
* Development: [pacing, character/plot progression]
* Resolution: [ending type, satisfaction level]

CREATIVE CONSTRAINTS:
* Content guidelines: [what to include/avoid]
* Brand voice: [if applicable]
* Cultural considerations: [sensitivity requirements]

DEVELOPMENT PROCESS:

1. Concept outline before full draft
2. Character/element development
3. First draft with revision notes
4. Self-critique for improvement areas

QUALITY CHECKS:
* Does it serve the intended audience?
* Is the tone consistent throughout?
* Are creative goals achieved?

REVISION PROTOCOL: If initial draft doesn't meet criteria, provide specific improvement suggestions before final version.
Real example transformation:

Basic prompt: "Write a blog post about remote work"

With meta-prompt applied:

CREATIVE BRIEF:
* Role: You are a business content writer with expertise in workplace trends and culture
* Project: Thought leadership blog post for company blog
* Audience: HR leaders and executives at mid-size companies, struggling with hybrid work policies

CREATIVE PARAMETERS:
* Genre/Style: Authoritative but accessible business writing
* Tone: Professional yet personable, data-informed but not dry
* Length: 1,200 words
* Theme: Remote work is evolving beyond the pandemic emergency model

STRUCTURE REQUIREMENTS:
* Opening: Counter-intuitive stat or trend that challenges assumptions
* Development: Three main points with company examples and data
* Resolution: Actionable framework readers can implement

CREATIVE CONSTRAINTS:
* Content guidelines: Include real company examples, avoid pandemic clichés
* Brand voice: Forward-thinking but practical
* Cultural considerations: Global audience, avoid US-centric assumptions

DEVELOPMENT PROCESS:

1. Outline three key insights about remote work evolution
2. Research supporting examples and data points
3. Draft with emphasis on actionable insights
4. Review for cliché removal and freshness

QUALITY CHECKS:
* Would an HR VP find this immediately useful?
* Does it say something new about a tired topic?
* Is there a clear takeaway readers can act on?

REVISION PROTOCOL: If draft feels generic, identify three more specific, unexpected angles before rewriting.
The result is consistently engaging content that serves its purpose rather than generic "remote work is here to stay" fluff.

Common modifications:

For marketing copy: Add "conversion goals" to BRIEF, include "call-to-action requirements" in STRUCTURE

For fiction: Expand CHARACTER section, add "plot beats," include "show don't tell" in CONSTRAINTS

For technical writing: Reduce creative parameters, increase structure requirements, add accuracy checks

Testing protocol:

Generate 5 pieces with same brief, check voice consistency

Have someone else use template, compare outputs

A/B test with and without template for engagement

Track which sections get modified most often

Template 4: Research & Analysis
When to Use
Academic research, literature reviews, competitive analysis, market research, technical investigations, or any task requiring systematic information gathering and synthesis from multiple sources.

Why It Works
GPT-5 tends to either provide surface-level summaries or dive into excessive detail without structure. This template forces systematic coverage while maintaining analytical rigor. The explicit methodology section prevents the model from jumping to conclusions without evidence.

Template Structure
RESEARCH ROLE: You are a [field] researcher with expertise in [specific methodologies/domains].
RESEARCH QUESTION: [Precise question with scope boundaries]

RESEARCH CONTEXT:
* Purpose: [why this research matters]
* Scope: [what's included/excluded]
* Audience: [who will use this research]
* Constraints: [time, access, resources]

METHODOLOGY:

1. Literature scan [sources, databases, criteria]
2. Evidence gathering [data types, quality standards]
3. Analysis framework [theoretical lens, comparison criteria]
4. Synthesis approach [how to integrate findings]
5. Gap identification [what's missing, future directions]

EVIDENCE STANDARDS:
* Source requirements: [peer-reviewed, date ranges, authority]
* Citation format: [specific style guide]
* Quality criteria: [methodology rigor, sample sizes]
* Bias mitigation: [diverse perspectives required]

ANALYSIS REQUIREMENTS:
* Compare/contrast findings
* Identify patterns and anomalies
* Assess strength of evidence
* Note methodological limitations

OUTPUT STRUCTURE:
* Executive summary [key findings, implications]
* Methodology overview [how research was conducted]
* Findings by theme [organized sections]
* Evidence table [source comparison]
* Limitations and gaps
* Recommendations for action/further research

CRITICAL THINKING:
* Challenge assumptions in sources
* Identify conflicting evidence
* State confidence levels
* Acknowledge uncertainties

STOP CONDITIONS: Complete when research question is thoroughly addressed with multiple perspectives considered.
Real Example Transformation
Basic prompt: "Research the impact of AI on employment"

With meta-prompt applied:

RESEARCH ROLE: You are a labor economics researcher with expertise in technological displacement and workforce transitions.
RESEARCH QUESTION: How is AI adoption affecting employment patterns in knowledge work sectors (2020-2025)?

RESEARCH CONTEXT:
* Purpose: Inform corporate workforce planning strategies
* Scope: Focus on white-collar roles in tech, finance, and consulting
* Audience: C-suite executives and HR leaders
* Constraints: Published data only, emphasize empirical studies

METHODOLOGY:

1. Literature scan: Academic databases, industry reports, government statistics
2. Evidence gathering: Employment data, case studies, surveys, economic indicators
3. Analysis framework: Technology adoption curves vs. employment metrics
4. Synthesis approach: Cross-sector pattern identification
5. Gap identification: Data limitations, emerging trends not yet studied

EVIDENCE STANDARDS:
* Source requirements: Post-2020, reputable institutions, sample size >1000
* Citation format: APA style with source credibility notes
* Quality criteria: Longitudinal studies preferred, control for other factors
* Bias mitigation: Include both pro-tech and labor advocacy perspectives

ANALYSIS REQUIREMENTS:
* Compare AI adoption rates across sectors
* Contrast job displacement vs. job transformation data
* Assess evidence quality and potential biases
* Identify which roles are most/least affected

OUTPUT STRUCTURE:
* Executive summary: 3 key findings about AI and employment
* Methodology: Data sources and selection criteria
* Findings by sector: Tech, finance, consulting patterns
* Evidence table: Comparing 10+ major studies
* Limitations: Data gaps, measurement challenges
* Recommendations: Workforce strategies for next 3 years

CRITICAL THINKING:
* Question "AI will destroy jobs" narrative with data
* Separate correlation from causation
* Note where evidence conflicts
* State confidence: High/Medium/Low for each finding

STOP CONDITIONS: Analysis covers minimum 15 quality sources with clear synthesis of patterns.
The result is research that's actually actionable for strategic planning, not just an academic exercise.

Common Modifications
For rapid research: Reduce source requirements to 5-7, focus on recent data only

For academic depth: Add theoretical framework section, require primary sources

For business research: Emphasize competitive implications, add SWOT analysis

Testing Protocol
Run same research question 3 times, check consistency of findings

Verify sources are real and accurately represented

Have subject matter expert review methodology

Test if recommendations follow logically from evidence

Template 5: Communication & Business Writing
When to Use
Professional emails, executive communications, presentations, proposals, reports, or any business document where clarity, persuasion, and professionalism matter.

Why It Works
GPT-5's default business writing can be verbose and generic. This template enforces the pyramid principle (conclusion first), active voice, and audience-specific messaging that actually drives action rather than just filling pages.

Template Structure
COMMUNICATION ROLE: You are a [industry] communications strategist specializing in [document type].
COMMUNICATION OBJECTIVE: [Specific outcome - inform, persuade, request action]

MESSAGE CONTEXT:
* Audience: [role, knowledge level, concerns, priorities]
* Relationship: [formal/informal, internal/external, hierarchy]
* Situation: [urgency, previous communications, politics]
* Desired outcome: [specific action or response needed]

MESSAGE STRATEGY:

1. Hook: [attention-grabbing opener]
2. Core message: [main point in one sentence]
3. Supporting points: [evidence, benefits, logic]
4. Call to action: [specific next steps]
5. Close: [reinforce relationship/urgency]

WRITING PRINCIPLES:
* Start with the ask/conclusion
* Use active voice and strong verbs
* One idea per paragraph
* Concrete examples over abstractions
* Numbers and specifics over generalities

TONE CALIBRATION:
* Formality level: [scale 1-10]
* Emotional resonance: [logical/emotional balance]
* Urgency: [immediate/planned/FYI]
* Confidence: [assertive/consultative/deferential]

FORMAT SPECIFICATIONS:
* Length: [word count or paragraph limit]
* Structure: [email/memo/presentation/report]
* Visual elements: [bullets, tables, charts needed]
* Attachments: [reference materials]

PERSUASION ELEMENTS (if applicable):
* Pain points addressed
* Benefits quantified
* Objections preempted
* Social proof included

QUALITY CHECKS:
* Would recipient know what to do after reading?
* Is the core message clear in 30 seconds?
* Does tone match relationship and culture?

POLITICAL AWARENESS: Consider stakeholder sensitivities and organizational dynamics.
Real Example Transformation
Basic prompt: "Write an email about the project delay"

With meta-prompt applied:

COMMUNICATION ROLE: You are a technology program manager specializing in stakeholder communications.
COMMUNICATION OBJECTIVE: Inform executive team of 3-week delay while maintaining confidence in project success

MESSAGE CONTEXT:
* Audience: C-suite executives, low technical knowledge, focused on business impact
* Relationship: Formal reporting, you report to them monthly
* Situation: First delay after 6 months on-track, competitor just launched similar feature
* Desired outcome: Approval to continue with revised timeline, no scope changes

MESSAGE STRATEGY:

1. Hook: Proactive communication about timeline adjustment
2. Core message: 3-week delay will ensure superior market position vs. rushed release
3. Supporting points: Technical root cause, mitigation implemented, quality benefits
4. Call to action: Approve revised timeline in tomorrow's steering committee
5. Close: Confidence in delivery and competitive advantage

WRITING PRINCIPLES:
* Lead with revised launch date and impact
* Active voice: "We discovered" not "It was discovered"
* Three short paragraphs maximum
* Specific dates and metrics, not vague promises
* Focus on business impact, not technical details

TONE CALIBRATION:
* Formality level: 8/10 (executive communication)
* Emotional resonance: 70% logical, 30% confidence-building
* Urgency: Planned response needed by tomorrow
* Confidence: Assertive about solution while owning the issue

FORMAT SPECIFICATIONS:
* Length: 150 words maximum
* Structure: Email with bullet points for key dates
* Visual elements: None in email, detailed timeline attached
* Attachments: 1-page revised project timeline

PERSUASION ELEMENTS:
* Pain point: Competitor's buggy release creates opportunity
* Benefit: 99.9% uptime vs. their 95% based on extra testing
* Objection preempted: Cost impact minimal ($50K), already absorbed
* Social proof: Similar delay in Project Alpha led to market leadership

QUALITY CHECKS:
* Executives know new date and why it's better
* No technical jargon or unclear acronyms
* Tone shows ownership without panic

POLITICAL AWARENESS: CFO is cost-sensitive, CTO wants quality, CEO hates surprises—address all three.
The result is an email that actually gets approved rather than triggering a crisis meeting.

Common Modifications
For sales communications: Add competitive differentiation, ROI calculations, urgency triggers

For crisis communications: Emphasize transparency, add FAQ section, include escalation path

For internal communications: Reduce formality, add team recognition, focus on collaboration

Testing Protocol
Time how long it takes to understand core message (target: <30 seconds)

Have someone identify requested action without prompting

A/B test response rates with and without template

Check if tone matches company culture

Template 6: Strategy & Decision Making
When to Use
Strategic planning, business case development, investment decisions, product strategy, organizational changes, or any complex decision requiring structured analysis and clear recommendations.

Why It Works
GPT-5 can generate impressive-sounding strategy documents that lack actionable specifics. This template enforces financial rigor, risk assessment, and implementation planning—turning hand-waving into executable strategy.

Template Structure
STRATEGY ROLE: You are a [industry/function] strategist with expertise in [specific area].
STRATEGIC OBJECTIVE: [Decision to be made or strategy to be developed]

SITUATION ANALYSIS:
* Current state: [metrics, pain points, opportunities]
* Market context: [competition, trends, disruptions]
* Internal capabilities: [strengths, weaknesses, resources]
* Stakeholder positions: [support, resistance, requirements]

STRATEGIC OPTIONS:

1. Option A: [description, approach, implications]
2. Option B: [alternative approach]
3. Option C: [status quo or different direction]

EVALUATION FRAMEWORK:
* Financial impact: [ROI, payback, NPV]
* Strategic fit: [alignment with goals, capabilities]
* Risk assessment: [probability, impact, mitigation]
* Implementation feasibility: [resources, timeline, dependencies]

ANALYSIS DEPTH:
* Quantitative modeling: [key metrics, sensitivities]
* Scenario planning: [best/base/worst cases]
* Competitive response: [how others might react]
* Second-order effects: [unintended consequences]

RECOMMENDATION STRUCTURE:

1. Recommended option with rationale
2. Success metrics and milestones
3. Investment required and ROI
4. Risk mitigation plan
5. Implementation roadmap
6. Decision triggers and pivot points

IMPLEMENTATION PLANNING:
* Phase 1: [30-day immediate actions]
* Phase 2: [90-day foundation building]
* Phase 3: [1-year full deployment]
* Resource requirements by phase
* Key dependencies and critical path

STAKEHOLDER MANAGEMENT:
* Champion identification
* Resistance points and mitigation
* Communication plan
* Coalition building strategy

DECISION SUPPORT:
* Executive summary with clear recommendation
* Supporting data and analysis
* Pre-empted objections with responses
* Clear go/no-go decision criteria

CONTINGENCY PLANNING: If primary approach fails, what's Plan B?
Real Example Transformation
Basic prompt: "Should we build or buy a CRM system?"

With meta-prompt applied:

STRATEGY ROLE: You are an enterprise technology strategist with expertise in CRM implementations and build-vs-buy decisions.
STRATEGIC OBJECTIVE: Determine optimal path for CRM capabilities to support 300% growth over 3 years

SITUATION ANALYSIS:
* Current state: 50 sales reps on spreadsheets, 40% pipeline visibility, 3-day reporting lag
* Market context: Competitors have 2-hour quote turnaround vs. our 2 days
* Internal capabilities: 10-person IT team, no CRM experience, strong in integration
* Stakeholder positions: Sales wants speed, IT wants control, CFO wants predictable costs

STRATEGIC OPTIONS:

1. Build custom: $2M investment, 18-month timeline, full control
2. Buy enterprise (Salesforce): $500K/year, 3-month deployment, industry standard
3. Buy mid-market (HubSpot): $200K/year, 6-week deployment, limited customization

EVALUATION FRAMEWORK:
* Financial: 5-year TCO including labor, opportunity cost of delay
* Strategic fit: Scalability to 150 reps, integration with existing systems
* Risk: Implementation failure rates, vendor lock-in, talent availability
* Feasibility: IT capacity, change management requirements

ANALYSIS DEPTH:
* TCO model: Build=$5.2M, Salesforce=$3.8M, HubSpot=$2.1M over 5 years
* Scenario planning: What if we acquire a company? What if growth is 500%?
* Competitive response: Competitors might poach our talent during long build
* Second-order effects: Build could become a differentiator or a distraction

RECOMMENDATION STRUCTURE:

1. Recommended: Salesforce with phased deployment
2. Success metrics: Quote time <4 hours by Q2, pipeline visibility >90%
3. Investment: $500K/year + $200K implementation = $900K year 1
4. ROI: Break-even month 8 from faster sales cycles
5. Roadmap: Core CRM Q1, marketing automation Q2, custom apps Q3
6. Decision triggers: If integration costs exceed $300K, revisit build option

IMPLEMENTATION PLANNING:
* Phase 1 (30 days): Vendor selection, team formation, data audit
* Phase 2 (90 days): Core deployment, training, process documentation
* Phase 3 (1 year): Advanced features, custom development, optimization
* Resources: 2 FTE for 6 months, then 1 FTE ongoing
* Critical path: Data migration is bottleneck, start immediately

STAKEHOLDER MANAGEMENT:
* Champion: VP Sales (directly benefits)
* Resistance: IT team (loss of control)—offer integration ownership
* Communication: Weekly updates, wins celebrated publicly
* Coalition: Get 3 top reps as pilot users and evangelists

DECISION SUPPORT:
* Buy recommendation driven by speed-to-value in competitive market
* 18-month build timeline = $12M in lost opportunity cost
* Salesforce can scale with acquisitions, HubSpot cannot
* Go decision if board approves $900K; otherwise explore HubSpot

CONTINGENCY PLANNING: If Salesforce fails, HubSpot is Plan B with 80% of features at 40% of cost.
The result is a decision package that boards actually approve because it addresses their real concerns.

Common Modifications
For product strategy: Add customer validation, competitive differentiation, go-to-market plan

For M&A decisions: Expand financial modeling, add integration planning, cultural assessment

For quick decisions: Use 3 options max, focus on 90-day impact, simplified scoring model

Testing Protocol
Present to someone unfamiliar—can they explain the recommendation?

Stress-test financial models with -50% and +50% scenarios

Have implementation team review feasibility

Check if recommendation changes with different weights on criteria

Template 7: Data Science
When to use it: Data analysis, statistical modeling, visualization projects, ML experiments, or any task requiring systematic data exploration and interpretation.

Why it works: GPT-5 can generate impressive-looking analyses that are mathematically wrong or statistically invalid. This template enforces proper methodology, requires stating assumptions, and ensures reproducibility—critical for trustworthy data work.

DATA SCIENCE ROLE: You are a [domain] data scientist with expertise in [specific methods/tools].
ANALYTICAL OBJECTIVE: [Specific question to answer with data]

DATA CONTEXT:
* Dataset: [source, size, structure, quality]
* Variables: [key features, target variables]
* Constraints: [computing resources, time, privacy]
* Business context: [how analysis will be used]

METHODOLOGY FRAMEWORK:

1. Data exploration [summary statistics, distributions, missing values]
2. Data preprocessing [cleaning, transformation, feature engineering]
3. Analysis approach [methods, algorithms, validation strategy]
4. Results interpretation [statistical significance, practical meaning]
5. Recommendations [actionable insights]

TECHNICAL REQUIREMENTS:
* Tools/libraries: [specify preferred stack]
* Code documentation: [comments explaining logic]
* Reproducibility: [version control, random seeds]
* Validation: [cross-validation, holdout testing]

OUTPUT DELIVERABLES:
* Executive summary [key findings, business impact]
* Technical methodology [detailed approach]
* Code [annotated, runnable]
* Visualizations [clear, interpretable charts]
* Limitations [assumptions, confidence intervals]

QUALITY STANDARDS:
* Statistical assumptions validated
* Results are reproducible
* Uncertainty quantified
* Business relevance clear

ERROR HANDLING:
* If data quality is insufficient, specify requirements for reliable analysis
* If assumptions are violated, recommend alternative approaches
* If results are inconclusive, explain limitations and next steps

PEER REVIEW: Structure analysis for technical review by other data scientists.
Real example transformation:

Basic prompt: "Analyze our sales data and predict next quarter"

With meta-prompt applied:

DATA SCIENCE ROLE: You are a revenue data scientist with expertise in time series forecasting and causal analysis.
ANALYTICAL OBJECTIVE: Predict Q1 2025 revenue with confidence intervals and identify key drivers

DATA CONTEXT:
* Dataset: 3 years monthly sales data, 50K transactions, 8 product lines
* Variables: Revenue, units, price, marketing spend, seasonality indicators, competition activity
* Constraints: Cannot access individual customer data, 1-week deadline
* Business context: Forecast drives inventory and hiring decisions

METHODOLOGY FRAMEWORK:

1. Data exploration: Trend analysis, seasonality detection, correlation matrix, outlier identification
2. Data preprocessing: Handle missing values, create lag features, normalize for inflation
3. Analysis approach: Compare ARIMA, Prophet, and gradient boosting; use ensemble for final prediction
4. Results interpretation: Prediction intervals, feature importance, scenario analysis
5. Recommendations: Revenue forecast with risks, investment priorities

TECHNICAL REQUIREMENTS:
* Tools/libraries: Python with pandas, statsmodels, scikit-learn, matplotlib
* Code documentation: Explain each transformation and model choice
* Reproducibility: Set random_state=42, document package versions
* Validation: Time series cross-validation, hold out last 3 months

OUTPUT DELIVERABLES:
* Executive summary: Q1 forecast with confidence range, top 3 revenue drivers
* Technical methodology: Model selection process, validation metrics
* Code: Jupyter notebook with step-by-step analysis
* Visualizations: Forecast chart, feature importance plot, validation metrics
* Limitations: Assumptions about market stability, external factors not modeled

QUALITY STANDARDS:
* Stationarity tested for time series
* Prediction intervals properly calibrated
* Business cycles accurately captured
* Results align with business intuition

ERROR HANDLING:
* If seasonality unclear, show multiple decomposition methods
* If models disagree significantly, present ensemble with uncertainty
* If data insufficient for reliable forecast, recommend additional data collection

PEER REVIEW: Include model diagnostics, residual plots, and cross-validation scores for review.
This produces analysis that a data science team can actually validate and executives can actually trust.

Common modifications:

For exploratory analysis: Remove prediction requirements, expand exploration phase, focus on insight generation

For A/B testing: Add power analysis, specify significance thresholds, include multiple testing corrections

For ML projects: Expand model selection, add hyperparameter tuning, include deployment considerations

Testing protocol:

Verify statistical assumptions are checked

Reproduce analysis with provided code

Check if confidence intervals are calibrated correctly

Review with senior data scientist for methodology

## Template 8: Prompt Critique

When to use it: Improving existing prompts, debugging why prompts aren't working, optimizing for GPT-5's architecture, or teaching others better prompting.

Why it works: GPT-5 can analyze its own behavior better than previous models. This template structures that self-analysis to identify specific problems and provide actionable improvements rather than generic "be more specific" advice.

META-ANALYSIS ROLE: You are a prompt engineering expert specializing in GPT-5 optimization.
CRITIQUE OBJECTIVE: Analyze and improve the provided prompt for maximum GPT-5 effectiveness.

EVALUATION CRITERIA:
* Clarity: Are instructions unambiguous?
* Completeness: Are all necessary elements present?
* Structure: Is the prompt well-organized for GPT-5's routing system?
* Precision: Will it trigger the right reasoning depth/tools?
* Error prevention: Does it minimize misinterpretation risk?

ANALYSIS PROCESS:

1. Prompt deconstruction [identify components, gaps]
2. GPT-5 compatibility assessment [routing implications, precision requirements]
3. Improvement identification [specific enhancement opportunities]
4. Rewrite with explanation [optimized version with rationale]

IMPROVEMENT FOCUS AREAS:
* Role definition [too vague/specific?]
* Task clarity [measurable objectives?]
* Context sufficiency [enough background?]
* Output specification [format, length, structure clear?]
* Constraint completeness [rules, limitations, stop conditions?]
* Error handling [uncertainty, edge cases addressed?]

REWRITE REQUIREMENTS:
* Maintain original intent
* Enhance precision and structure
* Add missing elements
* Remove ambiguities
* Optimize for GPT-5's architecture

DELIVERABLE FORMAT:

1. Original prompt analysis [strengths, weaknesses]
2. Specific improvement recommendations
3. Optimized prompt rewrite
4. Explanation of changes made
5. Expected improvement outcomes

VALIDATION: Test improved prompt concept mentally before presenting to ensure it addresses identified issues.
Real example transformation:

Basic prompt: "Analyze this prompt: 'Help me write better emails'"

With meta-prompt applied:

META-ANALYSIS ROLE: You are a prompt engineering expert specializing in GPT-5 optimization.
CRITIQUE OBJECTIVE: Analyze and improve the prompt "Help me write better emails" for maximum GPT-5 effectiveness.

EVALUATION CRITERIA:
* Clarity: Are instructions unambiguous? NO - "better" is undefined
* Completeness: Are all necessary elements present? NO - missing context, audience, goals
* Structure: Is the prompt well-organized for GPT-5's routing system? NO - too vague
* Precision: Will it trigger the right reasoning depth/tools? NO - will default to generic advice
* Error prevention: Does it minimize misinterpretation risk? NO - multiple valid interpretations

ANALYSIS PROCESS:

1. Prompt deconstruction:
   * Components: Generic help request, undefined improvement, broad domain
   * Gaps: Email type, audience, current problems, success criteria

2. GPT-5 compatibility assessment:
   * Routing: Will trigger basic advice routing
   * Precision: Insufficient for consistent outputs

3. Improvement identification:
   * Add specific role and context
   * Define "better" with measurable criteria
   * Include examples and constraints

4. Optimized rewrite:

ROLE: You are a business communication coach specializing in professional email effectiveness.
OBJECTIVE: Improve email writing for [clarity/brevity/persuasion/response rate]
CONTEXT:
* Email types: [client outreach/internal updates/sales/support]
* Current problems: [too long/ignored/unclear calls-to-action]
* Audience: [executives/customers/team members]

IMPROVEMENT FRAMEWORK:

1. Diagnose current email weaknesses
2. Apply relevant writing principles
3. Provide templates for common scenarios
4. Include before/after examples

OUTPUT:
* 3 specific techniques with examples
* Template for most common email type
* Checklist for self-editing

DELIVERABLE FORMAT:

1. Original weaknesses: Vague objective, no context, no success metrics
2. Improvements: Added role, specified goals, structured approach
3. Optimized version: [above]
4. Changes explained: Each addition addresses specific routing/consistency issue
5. Expected outcomes: Consistent, actionable advice rather than generic tips

VALIDATION: Optimized prompt will produce targeted, practical email improvements rather than generic writing advice.
Common modifications:

For debugging: Add "failure analysis" section, include error messages, focus on fixing rather than optimizing

For teaching: Add "learning objectives," include more explanation, provide practice exercises

For automation: Focus on consistency over quality, add validation checks, ensure reproducibility

Testing protocol:

Run original and optimized versions 5 times each

Measure consistency of outputs

Check if improvements address stated problems

Have someone else test both versions blind

## Template 9: Meta-Meta Prompt (Prompt Generator)
When to use it: Creating new meta-prompt templates for specialized domains, building prompt libraries for teams, or systematizing new types of work.

Why it works: Rather than starting from scratch each time, this template generates domain-specific meta-prompts that already incorporate GPT-5 best practices. It's how you scale prompt engineering across an organization.

PROMPT ARCHITECT ROLE: You are a GPT-5 prompt engineering specialist who designs domain-optimized meta prompts.
GENERATION OBJECTIVE: Create a specialized meta prompt template for [user's specific domain/use case].

REQUIREMENTS ANALYSIS:
* Domain: [specific field, industry, function]
* Task type: [analysis, creation, problem-solving, etc.]
* User expertise: [novice, intermediate, expert]
* Output needs: [format, depth, audience]
* Common constraints: [time, resources, compliance]

TEMPLATE DESIGN PRINCIPLES:
* GPT-5 optimization: [leverage routing, precision, agentic capabilities]
* Domain specificity: [relevant frameworks, terminology, standards]
* Error prevention: [common failure modes in this domain]
* Scalability: [reusable across similar tasks]

META PROMPT STRUCTURE:

1. Role definition [domain-specific expertise]
2. Objective framework [goal-setting template]
3. Context requirements [essential background elements]
4. Process methodology [domain-appropriate workflow]
5. Output specifications [format, quality standards]
6. Constraint handling [common limitations]
7. Quality control [validation, error handling]

CUSTOMIZATION VARIABLES:
* [Specific field] terminology and concepts
* [Domain] best practices and standards
* Common [task type] requirements
* Typical [output format] expectations

VALIDATION REQUIREMENTS:
* Template addresses common domain challenges
* Structure optimizes GPT-5's capabilities
* Instructions are clear and actionable
* Error handling prevents common mistakes

DELIVERABLE:
A complete, ready-to-use meta prompt template with:
* Clear instructions for each section
* Domain-specific examples
* Customization guidance
* Usage recommendations

TEST CASE: Include a sample application showing the template in use.
Real example transformation:

Basic prompt: "Create a prompt template for customer service responses"

With meta-prompt applied:

PROMPT ARCHITECT ROLE: You are a GPT-5 prompt engineering specialist who designs domain-optimized meta prompts.
GENERATION OBJECTIVE: Create a specialized meta prompt template for customer service email responses.

REQUIREMENTS ANALYSIS:
* Domain: B2B SaaS customer support
* Task type: Email response composition
* User expertise: Junior to mid-level support agents
* Output needs: Professional, empathetic, solution-focused emails
* Common constraints: Response time SLAs, policy limitations, escalation protocols

TEMPLATE DESIGN PRINCIPLES:
* GPT-5 optimization: Consistent tone, proper routing for complexity
* Domain specificity: Support ticket categories, escalation triggers, policy references
* Error prevention: Avoid over-promising, ensure accuracy, maintain boundaries
* Scalability: Works across product lines and issue types

GENERATED TEMPLATE:

SUPPORT ROLE: You are a [product] customer success specialist with expertise in [technical/billing/account] issues.
TICKET CONTEXT:
* Issue type: [bug/feature request/billing/how-to]
* Customer tier: [free/pro/enterprise]
* Urgency: [critical/high/normal/low]
* History: [first contact/ongoing/escalated]

RESPONSE FRAMEWORK:

1. Acknowledge: [validate concern, show understanding]
2. Diagnose: [clarify issue if needed, identify root cause]
3. Solve: [provide solution, workaround, or timeline]
4. Verify: [confirm resolution meets need]
5. Next steps: [follow-up actions, preventive measures]

TONE REQUIREMENTS:
* Empathy level: [match customer emotion appropriately]
* Formality: [based on customer tier and history]
* Personality: [professional but human, not robotic]

SOLUTION GUIDELINES:
* If solvable: Provide step-by-step instructions
* If product limitation: Explain clearly, offer alternatives
* If bug: Acknowledge, provide timeline, offer workaround
* If feature request: Thank, explain process, set expectations

CONSTRAINTS:
* Cannot: [make product promises, share other customer info, provide discounts without approval]
* Must: [follow up within SLA, document in CRM, escalate if critical]
* Security: [never share passwords, credentials, or internal systems]

QUALITY CHECKS:
* Does response solve the actual problem?
* Is tone appropriate to situation?
* Are next steps clear?
* Would you want to receive this response?

ESCALATION TRIGGERS:
* Customer threatens cancellation
* Legal issues mentioned
* Bug affects multiple customers
* Cannot resolve within SLA

SAMPLE APPLICATION:
Ticket: "Your stupid software deleted my data! This is the third time this month!"

GENERATED RESPONSE:
I understand how frustrating data loss is, especially when it's happened multiple times. This is definitely not the experience we want you to have, and I'm going to help you resolve this immediately.

First, let me help recover your data - our system keeps automatic backups for the past 30 days. I can restore your data to any point within that timeframe. Which date would you like me to restore from?

To prevent this from happening again, I've escalated this to our engineering team for investigation. You'll receive a direct update within 24 hours about what caused these issues and how we're fixing them.

I've also credited your account with a free month of service for the inconvenience. Is there anything else I can help with while we restore your data?
This generates templates that junior team members can immediately use to produce senior-level work.

Common modifications:

For new domains: Research industry requirements first, add compliance considerations, include domain experts in review

For team deployment: Add training notes, include common scenarios, build approval workflows

For evolution: Include versioning system, track success metrics, enable user feedback loops

Testing protocol:

Generate template for known domain, compare to existing best practices

Have domain expert review for completeness

Test with 5 different users, measure consistency

Track performance over first month of use
