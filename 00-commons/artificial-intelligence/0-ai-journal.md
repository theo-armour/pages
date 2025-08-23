# AI Journal

## 2025-08-22

* https://blog.cubed.run/the-only-chat-gpt-prompt-that-actually-works-25559b4dfff4

* Act as a [role/expert].
* I want to achieve [goal].
* The target audience is [describe them].
* The tone should be [tone/style].
* Use [format/style/rules].
* Here’s context: [add background].
* Start by doing [specific task or step 1].

More

* Act as a [role/expert]. body of knowledge
* I want to achieve [goal]. focus
* The target audience is [describe them]. who for
* The tone should be [tone/style].
* Use [format/style/rules].
* Here’s context: [add background].
* Start by doing [specific task or step 1]. iterative


## 2025-08-14


### #2

Role: You are an OCR expert.

Input: A PDF made of images of a spreadsheet export.

Goal: Extract ONLY numeric cell values from rows whose FIRST COLUMN "matches closely" one of these labels:

- Numeric value representing the year
- Opening Assets
- Money Added/Withdrawn
- Management Fees
- Money Earned
- Net Assets
- Return

Label-matching (strict but fuzzy):

- Case-insensitive; ignore spaces and punctuation.
- Accept common variants (e.g., "Mgmt Fees", "Management Fee", "Net Asset(s)", "Opening Balance/Assets", "Contributions/Withdrawals", "Money Added or Withdrawn", "Earnings/Return").
- Or accept edit distance ≤ 2 from any target label after normalization.
- If multiple labels match a row, choose the best (lowest distance); break ties by the listed order above.

Row/column selection:

- Ignore rows with mostly text (i.e., <30% numeric cells), rows with no values, and rows containing footnotes or superscript markers.
- Ignore columns that are empty or have <10% numeric cells across the sheet.

Normalization of numbers:

- Strip `$`, `%`, and `,`.
- Treat parentheses/brackets as negatives: "(1,234)" or "[1,234]" => -1234.
- Treat trailing minus as negative: "1234-" => -1234.
- Convert all outputs to numeric type (floats/ints as appropriate).
- Treat blanks, "—", "-", "n/a", "NA" as missing (omit from output).

Quality:

- Preserve original column order.
- Check that values are in their correct year column
- Enforce consistent typing; reject cells that fail numeric parse.
- Rescale percentages; just Remove the `%` symbol; retain decimal point.

Output:

- CSV with VALUES ONLY (no headers, no labels, no commentary).
- Include only rows that matched the target labels after normalization.

### ChatGPT-5

Here’s the **LLM-friendly condensed version** of your OCR prompt—keeps all rules, but flattens them into short, unambiguous directives for better model compliance:

---

You are an OCR expert.
Input: PDF containing images of a spreadsheet export.
Goal: Extract **only** numeric cell values for rows where the first column matches exactly one of:

* Numeric value representing the year
* Opening Assets
* Money Added/Withdrawn
* Management Fees
* Money Earned
* Net Assets
* Return

Rules:

1. Ignore rows with mostly text, no values, or footnotes.
2. Ignore columns with no or very few values.
3. Remove `$`, `%`, and commas from numbers.
4. Convert numbers in parentheses/brackets to negative.
5. Output numbers as numeric type, not text.
6. Ensure extracted values are consistent and accurate.

Output: CSV, no headers, preserve original column order, preserve first column text, all following column numeric values only.




### Me
You are an OCR expert.
You are given a spreadsheet export as a PDF of images.
You must extract the cell values from it.

Ignore:

* Rows with mostly text values
* Rows with no values
* Rows with footnotes
* Columns with no or very few values

Ensure that:

* Dollar and percentage signs and commas are ignored
* Numbers in brackets are negative
* Numerical values are formatted as numbers, not text
* Values for consistent and accurate.

Return only the cell values for the Rows with the fo;owing first columns

* Opening Assets
* Money Added/Withdrawn
* Management fees
* Money Earned
* Net Assets
* Return



## 2025-07-04

### Context Engineering

* Prompt Engineering: Get a specific response from a prompt. Usually one-off.
* Context Engineering: Make sure the model consistently performs well across sessions, users, and chaos.
*Prompt Engineering focuses on what to say to the model at a moment in time.
* Context Engineering focuses on what the model knows when you say it — and why it should care.
* Prompt Engineering is what you do inside the context window.
* Context Engineering is how you decide what fills the window.



### Prompt for a letter size announcement

Text elements

* "Taste Wines & Cheeses from France"
* "Vive la France"
"Wednesday July 16 at 3pm in Friendship Hall"
* "Flights of Four wines
* Four Cheeses"
* "$20 Donation ~ Limited to 16 tasters maybe"

Style

* Renoir?

Make a better prompt.Any questions?

***

🎨 Design Prompt — French Wine-&-Cheese Tasting Flyer
(8.5 × 11 in portrait, with 0.125 in bleed on all sides)

Visual style: channel Pierre-Auguste Renoir’s soft, luminous brushwork and convivial garden-party scenes. Warm Impressionist light; delicate, rounded forms; subtle texture that feels hand-painted.

Color palette: deep “bleu, blanc et rouge”—navy-ink blue, ivory-white highlights, rich burgundy reds that echo good Bordeaux. Let the burgundy accentuate wine elements while blue/white balance the composition.

Background concept: an airy French courtyard or orchard at dusk—blurred figures clinking glasses, leafy boughs catching late sun, dappled shadows. Keep details impressionistic so text remains the focal point.

Typography (all text center-aligned in a translucent, parchment-tinted overlay band):
1. Headline (largest, Didot or elegant high-contrast serif):
   Taste Wines & Cheeses from France
2. Sub-headline (flowing script, arching slightly above):
   Vive la France !
3. Event line (medium serif, small caps):
   Wednesday, July 16 at 3 PM – Friendship Hall
4. Tasting note (smaller italic):
   Flights of Four Wines × Four Cheeses
5. Footer (smallest, light italic with centred tilde):
   $20 Donation ~ Limited to 16 tasters

Graphic touches: faint wine-ruby brushstrokes framing the text block; a subtle navy border just inside the bleed; light ivory filigree separators. No logo space.

Output: high-resolution (≥ 300 DPI) PDF and PNG, CMYK color, full-bleed (final trim 8.5 × 11 in). Ensure safe-zone margins so no text is trimmed.
