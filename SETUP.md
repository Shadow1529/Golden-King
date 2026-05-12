# 🚀 King of Golds - Deployment Guide

**Complete guide for getting your site live in 5 minutes!**

---

## ⚡ STEP 1: Update Discord Invite Link

Before deploying, update your Discord invite URL:

1. Open `config.js` in your editor
2. Find: `INVITE_URL: 'https://discord.gg/YOUR_INVITE_CODE'`
3. Replace `YOUR_INVITE_CODE` with your actual Discord invite code
4. Example: `INVITE_URL: 'https://discord.gg/abc123xyz'`
5. Save the file

---

## ⚡ STEP 2: Upload to GitHub

### Option A: Web Interface (Easiest)
1. Go to your GitHub repo
2. Click **Add file** → **Upload files**
3. Drag and drop all 4 files:
   - `index.html`
   - `style.css`
   - `config.js`
   - `app.js`
4. Click **Commit changes**

### Option B: Using Git
```bash
git add .
git commit -m "Upload King of Golds website"
git push
```

---

## ⚡ STEP 3: Enable GitHub Pages

1. Go to your GitHub repo → **Settings**
2. Click **Pages** (left sidebar)
3. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **main** → **/(root)**
4. Click **Save**
5. Wait 2-3 minutes
6. Your site is live at: `https://YOUR_USERNAME.github.io/king-of-golds/`

---

## ✅ Done!

Your website is now:
- ✅ Live online
- ✅ Mobile responsive
- ✅ Fully functional
- ✅ No login needed
- ✅ Professional looking

---

## 📝 Customization

### Change Server Name
Open `index.html` and find:
```html
<div class="nav-logo">👑 KING OF GOLDS</div>
```
Change to your server name.

### Update Colors
Open `style.css` and find `:root` section:
```css
--accent: #ffd700;  /* Change gold color here */
```

### Add More Players to Leaderboard
Open `config.js` and add to the `LEADERBOARD` array:
```javascript
{ rank: 16, name: 'YourPlayerName', level: 35, score: 55000 },
```

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Site shows 404 | Wait 5 minutes for GitHub Pages to deploy |
| Discord link doesn't work | Update `config.js` with your invite code |
| Styles not loading | Hard refresh (Ctrl+Shift+R) |
| Animations look slow | Browser issue - try different browser |

---

## 🎯 Next Steps

1. Share your site with your community!
2. Post the link on Discord, Twitter, etc.
3. Customize the content to match your server
4. Add more players to the leaderboard

---

**Your site is ready to impress! 🚀**
