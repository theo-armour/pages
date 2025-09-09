[[try|TRY]]

[[obsidian-journal]]
[Obsidian URI - Obsidian Help](https://help.obsidian.md/Extending+Obsidian/Obsidian+URI)

## Blockquote

## Callouts

- note
- abstract, summary, tldr
- info, todo
- tip, hint, important
- success, check, done
- question, help, faq
- warning, caution, attention
- failure, fail, missing
- danger, error
- bug
- example
- quote, cite

## Comments

Here is some inline comments: %%You can't see this text%% (can't see it in preview)

%%
comment
%%
## Commands


## Embed

[Embed files - Obsidian Help](https://help.obsidian.md/embeds)

Learn how you can embed other notes and media into your notes. By embedding files in your notes, you can reuse content across your vault.[[]]

To embed a file in your vault, add an exclamation mark (!) in front of an Internal link. You can embed files in any of the Accepted file formats.

Drag and Drop embed
On desktop, you can also drag and drop supported files directly into your note to embed them automatically.

Embed a note in another note
To embed a note:

![[Internal links]]
You can also embed links to headings and blocks.

![[Internal links#^b15695]]
The text below is an example of an embedded block:

Learn how to link to notes, attachments, and other files from your notes, using internal links. By linking notes, you can create a network of knowledge.
## Emphasis

## Highlighting

```md
Use two equal signs to ==highlight text==.
```
Use two equal signs to ==highlight text==.

## Horizontal dividers.
```md
* * *
***
```

* * *
***

## Import Notes

* [Import notes - Obsidian Help](https://help.obsidian.md/import)

## Inline Code

```md
Text inside `backticks` on a line will be formatted like code.
```

Text inside `backticks` on a line will be formatted like code.

## Links ~ Internal

Create links to non-existing notes to create the note.

Wikilinks

Markdown links.

## Links ~ Image

![Engelbart|100x145](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)

You can embed audio in PDFs and other files.


## Links ~ Obsidian URI

Obsidian URI links can be used to open notes in Obsidian either from another Obsidian vault or another program.

For example, you can link to a file in a vault like so (please note the required encoding):

```md
[Link to note](obsidian://open?path=D:%2Fpath%2Fto%2Ffile.md)
```

[Link to note](obsidian://open?path=D:%2Fpath%2Fto%2Ffile.md)
You can link to a note by its vault name and file name instead of path as well:

```md
[Link to note](obsidian://open?vault=MainVault&file=MyNote.md)
```

[Link to note](obsidian://open?vault=MainVault&file=MyNote.md)

### Escaping

If there are spaces in the url, they can be escaped by either using `%20` as a space, such as:

```md
[Format your notes](Format%20your%20notes)
```

[Format your notes](Format%20your%20notes.md)

Or you can enclose the target in `<>`, such as:

```md
[Format your notes](<Format your notes>)
```

[Format your notes](Format%20your%20notes.md your notes>)

## Strikethrough

```md
Any word wrapped with two tildes (like ~~this~~) will appear crossed out.
```

Any word wrapped with two tildes (like ~~this~~) will appear crossed out.
## Settings

Gear icon in Vault Manager

## Sync Notes

https://help.obsidian.md/sync-notes

## Tasks

```md
- [x] #tags, [links](), **formatting** supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [?] this is also a complete item (works with every character)
- [ ] this is an incomplete item
- [ ] tasks can be clicked in Preview to be checked off
```

- [x] #tags, [links](), **formatting** supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [?] this is also a complete item (works with every character)
- [ ] this is an incomplete item
- [ ] tasks can be clicked in Preview to be checked off


## Vault

