# York Jazz Fest — event listing site

Two files plus an images folder. `index.html` is the site.
**`events.js` is the only file you edit.**

Built on the BLKHAT brand guidelines: dark #3C3835, cream #E9E6D8, and the
brand accents (tan #AB7D4C, blue #609ECE, orange #E68F3A, pink #F546A7,
green #3DA13D, yellow #EDB210) — all sampled from the brand PDF, not guessed.

---

## Fonts

**Archivo** loads automatically from Google Fonts. That's the brand's
Titles / Lead text / Body copy face, so all the running text is correct.

**Gambarino** is the brand headline face and it is *not* free — it's a
Pangram Pangram font, free for personal use only, commercial licences from
$40. A public ticket-selling site is commercial use, so it needs a licence.
The site is already wired for it: buy the webfont, drop
`Gambarino-Regular.woff2` into a `fonts` folder next to `index.html`, and
every headline switches over with no code change. Until then headlines fall
back to Instrument Serif, which is close but not the real thing.

---

## To add a description, artist link or photo

Open `events.js`. Find the act. Fill in the empty quotes.

```js
    blurb: "Two sentences about the act go here.",
    artistUrl: "https://lovu.bandcamp.com",
    photo: "images/lo-vu.jpg",
```

Anything left as `""` just hides itself. Nothing breaks.

**Photos:** either paste a full `https://...` image URL, or put the file in the repo root and write `"lo-vu.jpg"`. Landscape (16:9) crops
best.

---

## What's still empty

All 12 ticket links are in and working. Three acts have no description
because See Tickets doesn't have one either — the listing shows the stock
festival text only: **Stephen Wilson Swing**, **Al Morrison Quartet**,
**Emma Foulds**.

Every `artistUrl` and `photo` is empty. See Tickets has no artist photos on
these events (they all use the festival poster) and no links to the acts'
own sites, so there was nothing to copy across.

---

## Venues

All six poster venues are live: Young Thugs Studio, York Arts Barge, The
Winning Post and Bishopthorpe Rd Finale are ticketed; Angel On The Green and
The Phoenix are free entry.

## Free events

Nine free-entry gigs are in, taken from the "YorkJazzFest schedule"
spreadsheet. They render with a green FREE tag, the full time slot instead
of a doors time, and a "no ticket needed" panel instead of a buy button.

To add another free gig, copy an existing free block:

```js
  {
    date: "2026-10-02", start: "18:00", end: "19:10",
    act: "DB Trio",
    venue: "angel",
    free: true,
    blurb: "", artistUrl: "", photo: "",
  },
```

---

## Sales tracking

`CONFIG.trackingSource` is set to `"WEBSITE"`. Every ticket link gets
`?src=WEBSITE` added automatically, so See Tickets reports sales from this
site separately from your ANNOUNCEMENT links. Change the word to change the
label.

---

## Hosting on GitHub Pages

1. New repo → upload `index.html`, `events.js` and the `images` folder.
2. Settings → Pages → Source: **Deploy from a branch** → `main` / `root` → Save.
3. Live at `https://<your-username>.github.io/<repo-name>/` in about a minute.

To point `yorkjazzfest.uk` at it: Settings → Pages → Custom domain.

To update anything later, edit `events.js` in GitHub directly and commit —
the site refreshes itself.
