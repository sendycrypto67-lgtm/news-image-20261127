# The World Today, Friday 27 November 2026

[![make.fun badge](https://make.fun/badge/news-image-20261127.svg)](https://make.fun/bounty/news-image-20261127)
[![make.fun rank](https://make.fun/badge/news-image-20261127/sendycrypto67-lgtm/news-image-20261127/rank.svg)](https://make.fun/bounty/news-image-20261127)
[![make.fun reward](https://make.fun/badge/news-image-20261127/sendycrypto67-lgtm/news-image-20261127/reward.svg)](https://make.fun/bounty/news-image-20261127)

Sum up 27 November's world news in one image. Entry for the make.fun competition `news-image-20261127`.

Repo: [sendycrypto67-lgtm/news-image-20261127](https://github.com/sendycrypto67-lgtm/news-image-20261127)

Referral: https://make.fun/r/y8skhesk

## The image

A multi-story broadsheet, 41 stories from 33 regions, all verified against reports from Reuters, BBC, CNN and AP on 27 November 2026:

- Lead story, hero panel: drones strike Kuwait. Two Italian technicians killed at an air-defence site. Italy and Kuwait blame Iran. Tehran denies any role.
- USA: Thanksgiving storm, nearly 900,000 without power, the 100th Macy's parade moves to Saturday, a first.
- Ukraine: strikes cut power in seven regions, generators rushed to Dnipro.
- Thailand: fire at the Bangchak refinery in Bangkok, nine hurt, all units shut.
- Gaza: overnight strikes kill nine, a third night running.
- Gulf: Saudi defences intercept Houthi missiles aimed at Riyadh.
- Black Friday: stores open early, Amazon, Walmart and Target run week long sales.
- New Zealand: official election count due at 2 pm, 400,000 special votes, ruling coalition holds a majority of two.
- Trump meets NATO chief Rutte at Mar-a-Lago over Ukraine and Iran.
- Also today (32 briefs, every one dated 25, 26 or 27 Nov right on the brief): Kyiv says North Korea pauses some missile aid (GUR claim, not independently verified), Kim orders wider tactical nuclear push, Congo Ebola cases pass 12,000, Houthis claim a Ras Tanura hit (unconfirmed, Saudi confirmed only intercepted drones nearby), Jazan refinery attack, Brent up 3.5% to $94.61, US tariffs on 14 economies, Cairo tanker blast, Duterte ICC trial opens Monday, Kyiv shops hit, UK migration falls to 77,000, South Korea raises its base rate to 3.25%, IAEA seeks a Zaporizhzhia ceasefire, Trump on Putin at the G20, Nasdaq, Brazil inflation, UK car output, NZ v India Test, Myanmar and the ICJ, Netanyahu charges, Depardieu trial, Ibiza tanker, dollar nears a 22-month peak, Japan Tobacco up on Imperial Brands bid talk, UK train stabber guilty of 14 counts of attempted murder, Java mine flood kills 16, world passes 2C for six straight days, Dangote refinery shares list 1 Dec, Iran tanker mine claim (unconfirmed), Guinea-Bissau delays its elections to Nov 2028, France centre risks election debacle (BBC, 26 Nov), EU budget talks end with no deal. The footer lists the stories deliberately left out as other days' news: EU sanctions (23 Nov), US jobless claims (25 Nov), Germany PMI (23 Nov), Hong Kong fire toll (Nov 2025), HIV jab rollout, Mali toll (Guardian investigation published 24 Nov, 349 deaths Sep 2023-Sep 2026). The UN Emissions Gap Report 2026 (2.8C on current policies) was checked and left out: it launched 21 Oct 2026, not 27 Nov.
- Plus a world map with 16 labelled places in boxed labels with real leader lines, a UTC timeline and a date check.

The pictures are AI-generated illustrations, labelled as such in the image, not photographs of the events. The broadsheet was composed with PIL from the verified Kuwait hero illustration; the build script is in `../work/build_broadsheet.py`.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Writes `out/entry.png`, a 1024 by 1024 image, 325,890 bytes. Node 22, standard library only, no network. Two runs produce byte-identical output (md5 e965e9f341b4abfd8a7fd3b9248d060d).

## License

MIT, see LICENSE.
