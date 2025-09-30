# Scrapbook ~ adzierzanowski

* 2025
* https://github.com/adzierzanowski/vscode-scraps
* https://github.com/adzierzanowski
* https://marketplace.visualstudio.com/items?itemName=doublefloat.scrapbook

## Features

This extension adds a panel with different kind of items such as

* shortcuts to files
* website links
* terminal commands
* vscode commands
* todo items
* markdown notes


## 2025-09-27 Help with "Edit VSCode Command Scrap" arguments

Hi @adzierzanowski

I have been able to add a simple command using the "Edit VSCode Command Scrap: function

For example:

```
{"id":"78a0429b-b564-4ef6-b76f-e3af02e1f899","parentId":"c7a98fbe-fee3-4483-8c7f-89021c16470e","kind":"VSCommand","commandId":"editor.action.transformToLowercase","description":"","name":"transform to lower case","args":""},
```

However, I am having trouble figuring out how to add arguments to the command. For example, I would like to add a "Find in Files" command with commandID of "workbench.action.findInFiles" and arguments such as "query":"Theo", "filesToInclude":"./agenda/", etc.

Could you kindly add an example or two of commands with arguments to the documentation?

```
{
"id":"78a0429b-b564-4ef6-b76f-e3af02e1f899",
"parentId":"c7a98fbe-fee3-4483-8c7f-89021c16470e",
"commandId":"workbench.action.findInFiles",
"description":"",
"name":"Find in Files",
"args":{"query":"theo"},"isRegex":false,"triggerSearch":true,"filesToInclude":"./agenda/","filesToExclude":"","matchWholeWord":false,"isCaseSensitive":false,"preserveCase":false,"useExcludeSettingsAndIgnoreFiles":true,"onlyOpenEditors":false,"showIncludesExcludes":false}

```

## 2025-09-27

Hi @adzierzanowski

Thank you for your detailed reply. Here are some further "double-clicks". I hope these are helpful to you.

## Groups

>I thought of the Group scraps as the main way of categorizing items, though tags and color coding might sure help with that.

In my mind, Groups are an absolute necessity, because single lists with hundreds of files are hard to scan visually. Groups with a trees folding are a great tool.

Nonetheless, there may be times when I have a topic idea in multiple files or there may be some individual items that I want to pin. For example, I might have a list with a long list of things to do for a particular application, but I want to put a signifier such as "%%" in front of the things I should do tomorrow. And I want to find these in multiple files — using, in VS Code for example, "Find in Files".

## Sorting

Sorting is more important than searching as a priority. I can usually find things by scanning, but if I have a list of 50 items, I want to be able to sort them alphabetically or by date.


## D&D reordering

It seems to me that drag and drop reordering is only useful when you're going between different branches of the tree. Once the item is in in the branch you want, the normal alphabetical or date ordering sorts things out.

Thus, there is no real need to move individual items up and down. I think the example to follow is that of the normal operating system file managers. These, with very few exceptions, mostly work on being able to sort on different fields.

## Color Coding

Color coding is a nice to have. Though not a necessity, it does speed up being able to find what you are **looking** for.

Another possibility might be to allow the user to assign emjojis or icons to groups. This would be similar to the way that operating systems allow you to assign icons to folders.

***

If there is a priority for me, it's the sorting.

Cheers,

Theo




### adzierzanowski


Hi @theo-armour

I'm very happy that someone actually found the extension useful :)

I thought of the Group scraps as the main way of categorizing items, though tags and color coding might sure help with that.

Sorting and searching are also good ideas, although searching done well will probably take some time.

D&D reordering is one of the main things that I thought I should fix.

I will look into implementing these features and let you know.

EDIT: I fiddled a bit and I will probably push color coding for groups and sorting today.

Drag and drop reordering is tricky because other scraps accept children too and the only drop action target is a tree item, no way to drop something in between. I could add inline buttons which would move an item up or down.

Drag and drop for moving an item between groups does technically work but is bugged. I will fix it in the near future.




## 2025-09-24

Hi @adzierzanowski

vscode-scraps is a great extension. Thank you for creating it!

I have a few suggestions for new features that would make it even better:
1. **Tagging and Categorization**: Allow users to tag or categorize their scraps for easier organization and retrieval.
2. **Search Functionality**: Implement a search bar to quickly find specific scraps based on
3. **Sorting Options**: Provide options to sort scraps by date created, date modified, or alphabetically.
4. **Color Coding Group Icons**: Allow users to assign colors to individual group icons for visual differentiation.
5. **Drag and Drop Reordering**: Enable drag-and-drop functionality to reorder scraps within a group or move them between groups.

Items 3 and/or 5 would be especially useful for me **today**. Tell me where to send a donation of $50 if you implement any of these features.

Cheers,

Theo

### 2025-09-23

Wow ~ this is really good.
