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

Keep the Research page organised into `Working Papers`, `Work in progress`, and
`Publications`, in that order.

Use the same expandable paper-entry structure for `Working Papers` and
`Publications`. Each entry should contain:

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
- Use `Work in progress` for articles that are still being written. These entries
  should show only the paper title and a confirmed `With ...` co-author line;
  they should not include a status line, expandable panel, or description.
- Publication author lines should follow the published author order. Bold `J. Chen` in every publication. Use superscript `*` for corresponding author and `#` for co-first author, with the author note directly below the `Publications` heading.
- Publication status lines should give the journal, volume, article or page number, and year when available.
- Expanded descriptions should read like concise abstracts. They should explain the research context or question, the approach, the main result, and the contribution in clear prose.
- Do not show inactive materials text such as `Paper · Code · Slides — placeholders`. Add paper, code, data, slides, or supplementary-material links only when real URLs are available.

Place `Conferences` after `Publications`. Include confirmed oral and poster presentations, identify the presentation format, and separate the presentation title from the conference name with a comma.

## Engagement Page Format

Organise the Engagement page into these top-level sections:

1. `Academic Service`
2. `Professional & Policy Engagement`
3. `Public Engagement`

Do not add a generic page title, introductory subtitle, or empty section. Let the section headings make the page structure clear.

Apply these rules consistently:

- Use `Academic Service` for journal reviewing and other service to the academic community.
- Use `Professional & Policy Engagement` for invited industry presentations, technical reports, professional meetings, and contributions connected to policy processes.
- Use `Public Engagement` for op-eds, media contributions, and communication intended for general audiences.
- State the contribution type clearly, such as `Invited presentation`, `Technical report`, or `Op-ed`.
- Describe the contribution and its relevance concisely. Do not overstate the author’s role, institutional involvement, or policy impact.
- Add links only to real reports, event pages, submissions, or published pieces.
- Use a relevant, credible image when one is available. Prefer an image supplied by the website owner or an official asset from the organisation concerned, provide useful alt text, and verify that it works on desktop and mobile.

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
