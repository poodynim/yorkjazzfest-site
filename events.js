/* ==========================================================================
   YORK JAZZ FEST — SITE DATA
   This is the ONLY file you need to edit. Never touch index.html.
   ========================================================================== */

const CONFIG = {
  festivalName: "York Jazz Fest",
  dates: "Thu 1 \u2013 Sun 4 October 2026",
  city: "Four days. Six venues. One city.",

  // Appended to every ticket link as ?src=... so See Tickets can tell you
  // how many sales came from this website. Change the word, change the report.
  trackingSource: "WEBSITE",

  // Festival poster shown at the top of the page.
  poster: "poster.jpg",

  // Brand copy, straight from the BLKHAT brand guidelines.
  intro:
    "York Jazz Fest is a welcoming new festival celebrating jazz in all its " +
    "forms \u2014 bringing together classic sounds, contemporary energy, great " +
    "venues and live music lovers across York.",

  pullQuote: "Jazz is not one sound, one age, one room or one crowd.",

  // Link to the full See Tickets promoter page (shown in the footer).
  promoterUrl: "https://www.seetickets.com/promoter/yorkjazzfest/32617",
};

/* --------------------------------------------------------------------------
   VENUES

   Colours are the York Jazz Fest brand palette, sampled from the brand PDF:
     tan #AB7D4C   blue #609ECE   orange #E68F3A
     pink #F546A7  green #3DA13D  yellow #EDB210
   -------------------------------------------------------------------------- */
const VENUES = {
  "young-thugs":  { name: "Young Thugs Studio",     colour: "#F546A7" },
  "arts-barge":   { name: "York Arts Barge",        colour: "#609ECE" },
  "winning-post": { name: "The Winning Post",       colour: "#E68F3A" },
  "main-stage":   { name: "Bishopthorpe Rd Finale", colour: "#3DA13D" },
  "angel":        { name: "Angel On The Green",  colour: "#AB7D4C" },
  "phoenix":      { name: "The Phoenix",         colour: "#EDB210" },
};

/* --------------------------------------------------------------------------
   EVENTS

   FIELDS:
     date        "2026-10-01"  (YYYY-MM-DD)
     start       "21:15"       24h. Doors are 30 min before, added automatically.
     act         Act name as it should appear
     venue       Must match a key in VENUES above
     price       Face value in £, as a number. Booking fee added automatically.
     blurb       Short description shown when you click the listing.  ← TO FILL
     artistUrl   Link to the act's own website / Bandcamp / socials.  ← TO FILL
     photo       URL of an artist photo, OR a filename in /images/.   ← TO FILL
     ticketUrl   See Tickets event page. Leave "" if you don't have it yet.
     onSale      true = BUY TICKETS button. false = "Tickets coming soon".

   FREE EVENTS: set  free: true  and leave price, ticketUrl and onSale off.
   Add  end: "20:15"  so the listing shows the full slot instead of doors.

   Any field left as "" just hides itself on the page. Nothing breaks.
   -------------------------------------------------------------------------- */
const EVENTS = [

  /* ---------- THURSDAY 1 OCTOBER ---------- */
  {
    date: "2026-10-01", start: "18:00",
    act: "Balanço Malandro",
    venue: "young-thugs",
    price: 6,
    blurb:
      "Martin Berger\u2019s newest project, playing Afro Choro \u2014 the sounds of Brazilian choro and samba. A trio with Gustavo Andrade and Joe Redgrave.",
    artistUrl: "",
    photo: "",
    ticketUrl: "https://www.seetickets.com/event/yjf-balanco-malandro-young-thugs-studio-01-10/young-thugs-studio/3707038",
    onSale: true,
  },
  {
    date: "2026-10-01", start: "20:30",
    act: "Alligator Gumbo",
    venue: "arts-barge",
    price: 10,
    blurb:
      "A seven-piece playing jazz from the hey-day of the New Orleans swing era \u2014 in particular the roaring 20s, when music was raw and largely improvised, melodies and solos happening all at once. Over ten years together and firm favourites on the British jazz scene, with a good-natured mix of foot-stomping rhythms, toe-tapping tunes and raucous singalongs.",
    artistUrl: "https://www.alligatorgumbo.co.uk",
    photo: "",
    ticketUrl: "https://www.seetickets.com/event/yjf-alligator-gumbo-arts-barge-01-10-26/the-arts-barge/3707037",
    onSale: true,
  },
  {
    date: "2026-10-01", start: "21:15",
    act: "Lo Vu",
    venue: "young-thugs",
    price: 7,
    blurb:
      "Lo Vu is the Leeds-based project of guitarist and producer Ben Haskins, bringing together some of the North\u2019s finest musicians for a set of close-knit, collaborative jazz.",
    artistUrl: "https://www.instagram.com/lo_vu_uk",
    photo: "",
    ticketUrl: "https://www.seetickets.com/event/yjf-lo-vu-young-thugs-studio-01-10-26/young-thugs-studio/3707035",
    onSale: true,
  },

  /* ---------- FRIDAY 2 OCTOBER ---------- */
  {
    date: "2026-10-02", start: "20:00",
    act: "Stephen Wilson Swing",
    venue: "winning-post",
    price: 5,
    blurb: "",
    artistUrl: "",
    photo: "",
    ticketUrl: "https://www.seetickets.com/event/yjf-stephen-wilson-swing-winning-post-02-10/the-winning-post/3707041",
    onSale: true,
  },
  {
    date: "2026-10-02", start: "20:30",
    act: "Alina Bzhezhinska: Whispers of Rain",
    venue: "arts-barge",
    price: 14,
    blurb:
      "A solo harp and electronics set featuring music from her 2025 Tru Thoughts album with producer Tulshi. Performing alone, Bzhezhinska builds expansive, layered soundscapes in real time using loop pedals and a sampler, moving between spiritual jazz, ambient atmospheres and free improvisation \u2014 intimate and cinematic at once.\n\nCreator of HipHarpCollective, winners of the Parliamentary Jazz Award for Best Ensemble 2024, she has worked with Brian Jackson, Chaka Khan, Shabaka Hutchings and DJ Spinna.",
    artistUrl: "https://www.hipharpcollective.com",
    photo: "alina-bzhezhinska.jpg",
    ticketUrl: "https://www.seetickets.com/event/yjf-alina-bzhezhinska-arts-barge-02-10/the-arts-barge/3707040",
    onSale: true,
  },
  {
    date: "2026-10-02", start: "21:15",
    act: "Afrodesia",
    venue: "young-thugs",
    price: 7,
    blurb:
      "A Leeds-based Afrobeat-jazz outfit led by Reece Fogg, bringing high-energy grooves and horns to the festival.",
    artistUrl: "https://www.instagram.com/afro.desia",
    photo: "",
    ticketUrl: "https://www.seetickets.com/event/yjf-afrodesia-young-thugs-studio-02-10/young-thugs-studio/3707039",
    onSale: true,
  },

  /* ---------- SATURDAY 3 OCTOBER ---------- */
  {
    date: "2026-10-03", start: "18:00",
    act: "Flowerden",
    venue: "winning-post",
    price: 5,
    blurb:
      "A quintet from York playing original, entirely instrumental jazz/pop fusion \u2014 riffs, textures and rhythms you\u2019ll be humming for days. Bex, Nik, Tim, Tobias and Tom bring eclectic backgrounds from hard rock onwards.",
    artistUrl: "https://www.flowerden.band",
    photo: "",
    ticketUrl: "https://www.seetickets.com/event/yjf-flowerden-winning-post-03-10/the-winning-post/3707045",
    onSale: true,
  },
  {
    date: "2026-10-03", start: "18:30",
    act: "Emma Foulds",
    venue: "arts-barge",
    price: 6,
    blurb:
      "A saxophonist originally from Tadcaster, now based in London and studying at the Guildhall School of Music & Drama. Her music takes inspiration from Django Bates, Joe Lovano and Linda May Han Oh. Having debuted her quintet in May 2026, she has been writing new material that highlights the tenor sax and vocal front line, aiming to bring out the rich variety of textures improvised music can create.",
    artistUrl: "",
    photo: "",
    ticketUrl: "https://www.seetickets.com/event/yjf-emma-foulds-arts-barge-03-10/the-arts-barge/3707047",
    onSale: true,
  },
  {
    date: "2026-10-03", start: "19:00",
    act: "SwanNek",
    venue: "young-thugs",
    price: 11,
    blurb:
      "A boundary-pushing contemporary jazz collective from Newcastle upon Tyne, making music that celebrates the people and places closest to their hearts. Personal stories woven into a dynamic, powerfully emotive sound. Their live shows have drawn praise from Radio 3\u2019s Soweto Kinch and BBC Introducing\u2019s Shakk, who called them a collective of musical superheroes.",
    artistUrl: "",
    photo: "",
    ticketUrl: "https://www.seetickets.com/event/yjf-swan-nek-young-thugs-studio-03-10/young-thugs-studio/3707044",
    onSale: true,
  },
  {
    date: "2026-10-03", start: "20:30",
    act: "Al Morrison Quartet",
    venue: "winning-post",
    price: 6,
    blurb: "",
    artistUrl: "",
    photo: "",
    ticketUrl: "https://www.seetickets.com/event/yjf-al-morrison-quartet-winning-post-03-10/the-winning-post/3707043",
    onSale: true,
  },
  {
    date: "2026-10-03", start: "20:30",
    act: "Olivia Cuttill Quintet",
    venue: "arts-barge",
    price: 13,
    blurb:
      "Trumpeter, composer and lyricist Olivia Cuttill leads her quintet \u2014 Issey Chivers on vocals, Tom Harris on piano, Josh Vadiveloo on bass and Miles Pillinger on drums. A Leeds Conservatoire graduate and winner of the 2024 Peter Whittingham Jazz Award, she draws on New Orleans and the Great American Songbook, with storytelling songs, swinging solos and beautiful blues.",
    artistUrl: "https://oliviacuttillmusic.wixsite.com/oliviacuttill",
    photo: "",
    ticketUrl: "https://www.seetickets.com/event/yjf-olivia-cuttill-quintet-arts-barge-03-10/the-arts-barge/3707046",
    onSale: true,
  },

  /* ---------- SUNDAY 4 OCTOBER — MAIN STAGE ----------
     One ticket covers the whole day, 12:00–19:30.
     £25 adult / £12.50 under 14 / under 12s free with a paying adult.
     Lineup below matches the See Tickets listing exactly — no set times are
     published there yet. Add them here when they're confirmed.             */
  {
    date: "2026-10-04", start: "12:00",
    act: "Main Stage — all day",
    venue: "main-stage",
    price: 25,
    blurb:
      "The festival closes with a full day on the Main Stage at Bishopthorpe Road Car Park, 12:00 until 19:30.\n\n" +
      "YorkJazzFest Orchestra\n" +
      "Vipertime\n" +
      "Fergus Quill Sextet\n" +
      "Dennis Rollins\u2019 FUNKY-FUNK!\n" +
      "& more TBA\n\n" +
      "Under 14s £12.50. Children under 12 go free with a paying adult.",
    artistUrl: "",
    photo: "",
    ticketUrl: "https://www.seetickets.com/event/yorkjazzfest-2026/bishopthorpe-road-car-park/3702261",
    onSale: true,
  },


  /* ==========================================================================
     FREE ENTRY — Angel On The Green & The Phoenix
     From the "YorkJazzFest schedule" spreadsheet. No ticket, no See Tickets
     listing, walk in. Act name spellings are exactly as the spreadsheet has
     them — worth double-checking before this goes public.
     ========================================================================== */

  /* ---------- THURSDAY 1 OCTOBER ---------- */
  {
    date: "2026-10-01", start: "19:00", end: "20:15",
    act: "Act TBA",
    venue: "angel",
    free: true,
    blurb: "",
    artistUrl: "",
    photo: "",
  },
  {
    date: "2026-10-01", start: "21:00", end: "22:15",
    act: "The Shandog Swingers",
    venue: "angel",
    free: true,
    blurb: "Joe, Elita and Charlie Lancaster plus friends, playing old school New Orleans music.",
    artistUrl: "",
    photo: "",
  },
  {
    date: "2026-10-01", start: "20:00", end: "22:30",
    act: "Brendan Duffy Band",
    venue: "phoenix",
    free: true,
    blurb: "",
    artistUrl: "",
    photo: "",
  },

  /* ---------- FRIDAY 2 OCTOBER ---------- */
  {
    date: "2026-10-02", start: "18:00", end: "19:10",
    act: "DB Trio",
    venue: "angel",
    free: true,
    blurb: "",
    artistUrl: "",
    photo: "",
  },
  {
    date: "2026-10-02", start: "21:00", end: "22:15",
    act: "Mike Cunliffe Trio",
    venue: "angel",
    free: true,
    blurb: "",
    artistUrl: "",
    photo: "",
  },
  {
    date: "2026-10-02", start: "20:00", end: "22:30",
    act: "Karl Mullen and Friends",
    venue: "phoenix",
    free: true,
    blurb: "",
    artistUrl: "",
    photo: "",
  },

  /* ---------- SATURDAY 3 OCTOBER ---------- */
  {
    date: "2026-10-03", start: "18:00", end: "19:10",
    act: "Borgia",
    venue: "angel",
    free: true,
    blurb: "A local York band, booked for the Saturday session at the Angel.",
    artistUrl: "https://www.instagram.com/borgiaband_",
    photo: "",
  },
  {
    date: "2026-10-03", start: "20:30", end: "22:30",
    act: "Mutant Jazz DJ",
    venue: "angel",
    free: true,
    blurb: "",
    artistUrl: "",
    photo: "",
  },

  /* ---------- SUNDAY 4 OCTOBER ---------- */
  {
    date: "2026-10-04", start: "20:00", end: "22:30",
    act: "Ian Chalk",
    venue: "phoenix",
    free: true,
    blurb: "",
    artistUrl: "",
    photo: "",
  },

];
