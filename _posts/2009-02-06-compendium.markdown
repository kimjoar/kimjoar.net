---
layout: post
title: Compendium rant
---

At my university there has been a gradual change as I have come further in my study that the course material has been written by my professors. These are often sold as compendiums or freely downloaded from the course web page. This is in itself no problem, but more often than not these compendiums has not had a technical review. Or any review at all. Some of them are riddled with mistakes and sloppy work, and absolutely without consistent layout, which makes them very hard to read — and therefore time consuming to learn the course material from.

The last couple of years Wikipedia and similar sites has shown that the normal person can contribute to technical work, especially when it comes to cleaning up the texts and fixing errors. I have done this on some occasions on Wikipedia myself, and I know several of my friends have to. Books like Real World Haskell and The Django Book has been written online with an enourmous amounts of comments and corrections. Real World Haskell actually got more than 7000 comments, an average of more than 1.5 commments per paragraph.

Several of the compendiums I have had during my years at the university has been written in Microsoft Word or a similar type of WYSIWYG editor. Personally I have become a big fan of markup languanges like Markdown and Latex, and I truly believe that Latex is superior to these WYSIWYG editors when it comes to writing technical books. And a very nice side effect of using a markup languange is that the layout is more consistent, and that the text is not saved as a binary file, which makes it much easier to have the book in a version control system like Git or SVN.

All of these points build up to my questions:

Can these compendiums be checked into a version control system and the repository be made available for the students? Can we be trusted to deliver quality patches with bug fixes and corrections? I truly believe so, and I think it is the way to go. Let us take part in making our curriculum better, both for us self and for the students coming after us. And wouldn't it be easier to receive a patch file with the diff than an email about that letter missing on page 123 at the end of paragraph 5?
