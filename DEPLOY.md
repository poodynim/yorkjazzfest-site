# Getting this live on www.yorkjazzfestival.com

Total cost: **~£12/year** (the domain). Hosting, HTTPS and updates are free.
Your time: **about 15 minutes, once.** After that you never touch hosting again.

Do the steps in order. Step 4 must come *before* step 5 — see the warning.

---

## Step 0 — Do you already own the domain? (2 min)

As of today `yorkjazzfestival.com` does not resolve at all, which means either
nobody has registered it, or someone has but never pointed it anywhere.

Go to any registrar's search box — Namecheap, Gandi, Cloudflare, 123-reg — and
type `yorkjazzfestival.com`.

- **"Available"** → nobody owns it. Buy it (~£10–15/yr). Cloudflare sells at
  cost with no markup and no upsells, which is the cheapest honest option.
- **"Taken"** → someone owns it. If it's MAP or someone at the festival, find
  out who and get the login. If it's a stranger, use a different domain rather
  than paying a squatter.

**Turn on auto-renew and WHOIS privacy.** Both are usually free. A festival
domain expiring mid-campaign is a genuinely bad day.

---

## Step 1 — Create a GitHub account (3 min)

Skip if you have one. github.com → Sign up. Free tier is all you need.

Use an address the charity controls, not a personal one — if you leave, the
site shouldn't leave with you.

---

## Step 2 — Make the repository (2 min)

1. github.com → **+** (top right) → **New repository**
2. Name it `yorkjazzfest-site`
3. Set it to **Public** — GitHub Pages needs public on the free tier
4. Don't tick "Add a README" — we have our own
5. **Create repository**

---

## Step 3 — Upload the files (3 min)

On the empty repo page, click **uploading an existing file**.

Drag in, from the `yjf-site` folder:

- `index.html`
- `events.js`
- `CNAME`
- `README.md`
- the whole `images` folder (drag the folder itself, not the files inside)

Scroll down, click **Commit changes**.

You should end up with `index.html`, `events.js`, `CNAME`, `README.md` and an
`images` folder listed in the repo.

---

## Step 4 — Switch Pages on (2 min)

In the repo: **Settings** → **Pages** (left sidebar).

- Source: **Deploy from a branch**
- Branch: **main**, folder: **/ (root)**
- **Save**

Wait about a minute, then refresh. It'll show a live URL like
`https://YOURNAME.github.io/yorkjazzfest-site/`. **Open it and check the site
works** before touching DNS.

Then, still on that page, under **Custom domain**, type:

```
www.yorkjazzfestival.com
```

and click **Save**. It'll say DNS check unsuccessful — that's expected, you
haven't done step 5 yet.

> **Do step 4 before step 5.** Pointing DNS at GitHub before claiming the
> domain inside GitHub leaves a window where someone else can claim it and
> serve their content on your address. GitHub warns about this explicitly.

---

## Step 5 — Point the domain (5 min, then wait)

Log in at your registrar, find **DNS** / **DNS records** / **Manage DNS**, and
add these. Values verified against GitHub's own documentation today.

**One CNAME record — this is the one that matters:**

| Type | Name / Host | Value |
|---|---|---|
| CNAME | `www` | `YOURNAME.github.io` |

Replace `YOURNAME` with your GitHub username, all lowercase. Keep the trailing
`.github.io` — no `https://`, no path.

**Four A records, so the bare domain works too:**

| Type | Name / Host | Value |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

(`@` means the domain itself. Some registrars want it blank instead.)

**Delete any existing A or CNAME record on `@` or `www`** that the registrar
added by default — a parking page record will fight yours.

Optional, for IPv6 — add these AAAA records on `@` as well:
`2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`,
`2606:50c0:8003::153`

---

## Step 6 — Wait, then tick the HTTPS box (1 min, next day)

DNS takes anywhere from 10 minutes to 24 hours. Go and do something else.

Come back to **Settings → Pages**. Once the custom domain shows a green tick,
tick **Enforce HTTPS**. If the box is greyed out, the certificate is still
being issued — wait longer and try again.

Done. `www.yorkjazzfestival.com` serves the site over HTTPS.

---

## Updating it afterwards

Adding a blurb, a photo, a new act? Open `events.js` in GitHub, click the
pencil icon, edit, **Commit changes**. Live in under a minute.

You never repeat steps 0–6. That's the whole point of doing it this way.

---

## If it doesn't work

- **404 page** — Pages hasn't finished building, or the branch/folder is
  wrong in Settings → Pages.
- **Site loads but no styling or no events** — `events.js` or the `images`
  folder didn't upload. Check the repo file list.
- **"DNS check unsuccessful"** — usually just propagation. Give it hours, not
  minutes. If it persists, the CNAME value is the usual culprit: it must be
  `YOURNAME.github.io`, not the repo URL.
- **Certificate warning** — remove the custom domain in Settings → Pages,
  save, re-add it, save. That forces a fresh certificate.

Send me a screenshot of whatever you're stuck on and I'll tell you which
field is wrong.
