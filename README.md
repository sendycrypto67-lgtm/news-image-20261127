# The World Today, Friday 27 November 2026

[![make.fun badge](https://make.fun/badge/news-image-20261127.svg)](https://make.fun/bounty/news-image-20261127)
[![make.fun rank](https://make.fun/badge/news-image-20261127/sendycrypto67-lgtm/news-image-20261127/rank.svg)](https://make.fun/bounty/news-image-20261127)
[![make.fun reward](https://make.fun/badge/news-image-20261127/sendycrypto67-lgtm/news-image-20261127/reward.svg)](https://make.fun/bounty/news-image-20261127)

Sum up 27 November's world news in one image. Entry for the make.fun competition `news-image-20261127`.

Repo: [sendycrypto67-lgtm/news-image-20261127](https://github.com/sendycrypto67-lgtm/news-image-20261127)

Referral: https://make.fun/r/y8skhesk

## The image

A multi-story broadsheet, 12 stories from 10 regions, all verified against reports from Reuters, BBC, CNN and AP on 27 November 2026:

- Lead story, hero panel: drones strike Kuwait. Two Italian technicians killed at an air-defence site. Italy and Kuwait blame Iran. Tehran denies any role.
- USA: Thanksgiving storm, nearly 900,000 without power, the 100th Macy's parade moves to Saturday, a first.
- Ukraine: strikes cut power in seven regions, generators rushed to Dnipro.
- Thailand: fire at the Bangchak refinery in Bangkok, nine hurt, all units shut.
- Gaza: overnight strikes kill nine, a third night running.
- Gulf: Saudi defences intercept Houthi missiles aimed at Riyadh.
- Also today: US tariffs on 14 economies, Cairo tanker blast, Duterte ICC trial opens Monday, Kyiv shops hit, UK migration falls to 77,000, South Korea raises its rate to 3.25%.
- Plus a schematic world map, a UTC timeline and a date check.

The pictures are AI-generated illustrations, labelled as such in the image, not photographs of the events. The broadsheet was composed with PIL from the verified Kuwait hero illustration; the build script is in `../work/build_broadsheet.py`.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Writes `out/entry.png`, a 1024 by 1024 image, 265,028 bytes. Node 22, standard library only, no network. Two runs produce byte-identical output (md5 c417b12d25d7e541fde48603e67bd39b).

## License

MIT, see LICENSE.
