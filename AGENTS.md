# Personal Website Guide

This repository contains the personal academic website of Jeremy Jiajing Chen.

## Synchronisation

`AGENTS.md` and `CLAUDE.md` must always contain the same instructions.

When one file is updated, update the other as part of the same change.

## Project Goal

Build and maintain a clear, professional, and easy-to-update personal academic website.

The website should help visitors quickly understand:

- Who Jeremy Jiajing Chen is
- His research interests and academic background
- His working papers, publications, and ongoing projects
- How to access his curriculum vitae and contact information

## Preferred Style

Keep the website:

- Minimalist
- Academic and professional
- Clean and visually restrained
- Easy to read
- Concise in both design and writing
- Responsive on desktop and mobile

Avoid unnecessary visual effects, complicated components, excessive colours, dense text, and over-designed layouts.

When making design decisions, preserve simplicity and content clarity.

## Content Style

Use clear, natural, and polished English.

Academic content should be credible but accessible to educated non-specialists. Keep descriptions concise and avoid unnecessary technical language.

Do not invent personal information, research findings, publication details, co-authors, links, or academic status. Use a neutral placeholder when confirmed information is unavailable.

Use the name `Jeremy Jiajing Chen` consistently and `JJ` for the favicon or compact logo.

## Research Page Format

Keep the Research page organised into `Working Papers` followed by `Publications`.

Use the same expandable paper-entry structure for both sections. Each entry should contain:

1. Paper title
2. Author line
3. Status or publication citation
4. A concise abstract-style description in the expanded panel

Apply these rules consistently:

- Use sentence case for every paper title. Capitalise the first word, acronyms, proper nouns, and terms that conventionally require capitals. Do not use title case.
- List only confirmed papers. Remove empty entries and generic paper placeholders.
- Working-paper author lines must begin with `With`, followed by the co-authors only, for example: `With A. Name, B. Name, and C. Name`.
- If working-paper co-author names have not yet been confirmed, use a clearly marked neutral placeholder such as `With [co-author names]`; never invent names.
- Working-paper status lines should be concise, such as `Working paper`, `Under review`, or `Manuscript in preparation`.
- Publication author lines should follow the published author order. Bold `J. Chen` in every publication. Use superscript `*` for corresponding author and `#` for co-first author, with the author note directly below the `Publications` heading.
- Publication status lines should give the journal, volume, article or page number, and year when available.
- Expanded descriptions should read like concise abstracts. They should explain the research context or question, the approach, the main result, and the contribution in clear prose.
- Do not show inactive materials text such as `Paper · Code · Slides — placeholders`. Add paper, code, data, slides, or supplementary-material links only when real URLs are available.

## Development Approach

Keep the website lightweight and easy to maintain.

Prefer plain HTML, CSS, and minimal JavaScript. Do not introduce frameworks, build systems, or external dependencies unless they provide a clear benefit and the website owner approves the change.

Before completing a change:

- Preserve unrelated existing work
- Check both desktop and mobile layouts
- Validate links and asset paths
- Keep the visual style consistent across pages
- Explain any material design or technical decision

Do not merge changes into the public branch without explicit approval from the website owner.
