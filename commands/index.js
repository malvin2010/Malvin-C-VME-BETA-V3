// commands/index.js — Malvin C VME | Handsome Tech Zimbabwe 🇿🇼
// All commands in one file. Clean final version.

const axios  = require('axios');
const fs     = require('fs');
const path   = require('path');
const { exec } = require('child_process');
const ytSearch = require('yt-search');
const config   = require('../config/config');
const db       = require('../lib/database');
const mc       = require('../lib/menuCustom');
const {
  sleep, getNumber, formatPhone, runtime,
  pickRandom, randInt, capitalize, shorten,
  isUrl, timeNow, dateNow, getGreeting, tmpPath,
} = require('../lib/utils');

// ─── Menu builder ────────────────────────────────────────────
function buildMenu(prefix) {
  const up = process.uptime();
  const ms = mc.getAll();
  const d=Math.floor(up/86400),h=Math.floor((up%86400)/3600),m=Math.floor((up%3600)/60),s=Math.floor(up%60);
  return `》 *MALVIN C VME* 《
╔══════════╗
  🇿🇼 *Malvin C VME* 🇿🇼
  💻 *Handsome Tech Zimbabwe* 💻
╚══════════╝

🌆 *Good Evening* 👋

┌──────────────┐
│  👑 *Owner:* Malvin C
│  🤖 *Bot:* Malvin C VME  
│  📦 *Prefix:* [ . ]
│  ⚡ *Version:* 1.0.0
│  🕐 *Time:* 19:19:47
│  📅 *Date:* Sunday, 28 June 2026
│  ⏱️ *Runtime:* 0d 0h 58m 54s
│  📜 *Commands:* 781+
│  ⚙️ *Mode:* PUBLIC
└──────────────┘

◇━━━━━━━━━━━━━━━◇
      🎵 *DOWNLOAD*
◇━━━━━━━━━━━━━━━◇
  ✦ .play
  ✦ .song
  ✦ .ytv
  ✦ .yts
  ✦ .tiktok
  ✦ .tiktok2
  ✦ .tiktokphoto
  ✦ .instagram
  ✦ .facebook
  ✦ .twitter
  ✦ .mediafire
  ✦ .apk
  ✦ .modapk
  ✦ .wastatus
  ✦ .mega
  ✦ .play2
  ✦ .lyrics
  ✦ .tts
  ✦ .ringtone

◇━━━━━━━━━━━━━━━◇
      🤖 *AI / CHAT*
◇━━━━━━━━━━━━━━━◇
  ✦ .ai
  ✦ .gpt
  ✦ .gpt4
  ✦ .gemini
  ✦ .claude
  ✦ .deepseek
  ✦ .llama
  ✦ .mistral
  ✦ .mixtral
  ✦ .perplexity
  ✦ .grok
  ✦ .copilot
  ✦ .kimi
  ✦ .qwen
  ✦ .yi
  ✦ .imagine
  ✦ .dalle
  ✦ .chatbot
  ✦ .translate
  ✦ .grammar
  ✦ .summarize
  ✦ .math
  ✦ .quran
  ✦ .hadith
  ✦ .bible
  ✦ .islam
  ✦ .brain
  ✦ .think

◇━━━━━━━━━━━━━━━◇
      🖼️ *IMAGE TOOLS*
◇━━━━━━━━━━━━━━━◇
  ✦ .sticker
  ✦ .toimg
  ✦ .remini
  ✦ .removebg
  ✦ .dewatermark
  ✦ .img
  ✦ .meme
  ✦ .waifu
  ✦ .neko
  ✦ .kitsune
  ✦ .animegirl
  ✦ .animeboy
  ✦ .catgirl
  ✦ .foxgirl
  ✦ .couplepp
  ✦ .hotgirl
  ✦ .manga
  ✦ .chibi

◇━━━━━━━━━━━━━━━◇
      🎌 *ANIME ACTIONS*
◇━━━━━━━━━━━━━━━◇
  ✦ .hug
  ✦ .kiss
  ✦ .slap
  ✦ .pat
  ✦ .cry
  ✦ .blush
  ✦ .dance
  ✦ .wave
  ✦ .wink
  ✦ .cuddle
  ✦ .bite
  ✦ .lick
  ✦ .poke
  ✦ .bonk
  ✦ .yeet
  ✦ .highfive
  ✦ .nom
  ✦ .bully
  ✦ .handhold
  ✦ .smug
  ✦ .happy
  ✦ .angry
  ✦ .smile
  ✦ .roll
  ✦ .tickle
  ✦ .pout
  ✦ .glomp

◇━━━━━━━━━━━━━━━◇
      👥 *GROUP TOOLS*
◇━━━━━━━━━━━━━━━◇
  ✦ .kick
  ✦ .add
  ✦ .promote
  ✦ .demote
  ✦ .mute
  ✦ .unmute
  ✦ .tagall
  ✦ .hidetag
  ✦ .antilink
  ✦ .antidelete
  ✦ .antispam
  ✦ .welcome
  ✦ .goodbye
  ✦ .setwelcome
  ✦ .setgoodbye
  ✦ .link
  ✦ .revoke
  ✦ .ginfo
  ✦ .poll
  ✦ .gcpp
  ✦ .autoapprove
  ✦ .updategname
  ✦ .updategdesc
  ✦ .acceptall
  ✦ .rejectall
  ✦ .requests
  ✦ .newgc

◇━━━━━━━━━━━━━━━◇
      🛡️ *OWNER ONLY*
◇━━━━━━━━━━━━━━━◇
  ✦ .pair
  ✦ .broadcast
  ✦ .ban
  ✦ .sudo
  ✦ .delsudo
  ✦ .block
  ✦ .unblock
  ✦ .mode
  ✦ .setprefix
  ✦ .setbotname
  ✦ .botdp
  ✦ .leave
  ✦ .join
  ✦ .restart
  ✦ .vv
  ✦ .bomb
  ✦ .send
  ✦ .malvinsay

◇━━━━━━━━━━━━━━━◇
      🎨 *MENU CUSTOMISE*
◇━━━━━━━━━━━━━━━◇
  ✦ .setmenuimage
  ✦ .settagline
  ✦ .setmenufooter
  ✦ .menutheme
  ✦ .toggletime
  ✦ .toggledate
  ✦ .toggleruntime
  ✦ .menupreview

◇━━━━━━━━━━━━━━━◇
      ⚙️ *SETTINGS*
◇━━━━━━━━━━━━━━━◇
  ✦ .autoread
  ✦ .autotyping
  ✦ .autorecording
  ✦ .autoreact
  ✦ .statusview
  ✦ .statuslike
  ✦ .anticall
  ✦ .online
  ✦ .settings

◇━━━━━━━━━━━━━━━◇
      📜 *ADMIN TOOLS*
◇━━━━━━━━━━━━━━━◇
  ✦ .del
  ✦ .warn
  ✦ .warns
  ✦ .resetwarn
  ✦ .getpp
  ✦ .simdata

◇━━━━━━━━━━━━━━━◇
      🎮 *FUN*
◇━━━━━━━━━━━━━━━◇
  ✦ .joke
  ✦ .meme
  ✦ .quote
  ✦ .fact
  ✦ .roast
  ✦ .compliment
  ✦ .ship
  ✦ .lovetest
  ✦ .8ball
  ✦ .coinflip
  ✦ .dice
  ✦ .truth
  ✦ .dare
  ✦ .pickupline
  ✦ .rate
  ✦ .horoscope
  ✦ .hack
  ✦ .aura
  ✦ .compatibility
  ✦ .propose
  ✦ .breakup
  ✦ .crush
  ✦ .husband
  ✦ .wife
  ✦ .bacha
  ✦ .bachi
  ✦ .flirt2
  ✦ .emoji

◇━━━━━━━━━━━━━━━◇
      💬 *FUN TEXT*
◇━━━━━━━━━━━━━━━◇
  ✦ .personalitytest
  ✦ .superpower
  ✦ .pastlife
  ✦ .darksecret
  ✦ .celebmatch
  ✦ .lifebattery
  ✦ .soulcolor
  ✦ .whatanimal
  ✦ .nightowl
  ✦ .stresslevel
  ✦ .emotionaldamage
  ✦ .animepersonality
  ✦ .friendtype
  ✦ .weeklyreport
  ✦ .challenge
  ✦ .gossip
  ✦ .storygen
  ✦ .wikifact
  ✦ .desiwisdom
  ✦ .kindness
  ✦ .motivationalslap
  ✦ .wisdomcookie
  ✦ .taunt
  ✦ .botroast
  ✦ .result
  ✦ .examseason
  ✦ .ishqmeter
  ✦ .naammatlab
  ✦ .numbergame

◇━━━━━━━━━━━━━━━◇
      🎰 *GAMES*
◇━━━━━━━━━━━━━━━◇
  ✦ .rps
  ✦ .riddle
  ✦ .trivia
  ✦ .quiz
  ✦ .mathquiz
  ✦ .wordscramble

◇━━━━━━━━━━━━━━━◇
      🔧 *UTILITY*
◇━━━━━━━━━━━━━━━◇
  ✦ .weather
  ✦ .news
  ✦ .wiki
  ✦ .define
  ✦ .qr
  ✦ .base64
  ✦ .binary
  ✦ .urlencode
  ✦ .url
  ✦ .screenshot
  ✦ .npm
  ✦ .readmore
  ✦ .prayertime
  ✦ .boost
  ✦ .timenow
  ✦ .ping
  ✦ .uptime
  ✦ .alive

◇━━━━━━━━━━━━━━━◇
      🕵️ *STALKER*
◇━━━━━━━━━━━━━━━◇
  ✦ .github
  ✦ .githubstalk
  ✦ .pinsearch

◇━━━━━━━━━━━━━━━◇
      🏅 *RESPECT*
◇━━━━━━━━━━━━━━━◇
  ✦ .respect
  ✦ .salute
  ✦ .legend
  ✦ .king
  ✦ .queen
  ✦ .boss
  ✦ .champion
  ✦ .blessed
  ✦ .mashallah
  ✦ .jazakallah

◇━━━━━━━━━━━━━━━◇
      🖼️ *DP PACKS*
◇━━━━━━━━━━━━━━━◇
  ✦ .boydp1
  ✦ .boydp2
  ✦ .boydp3
  ✦ .boydp4
  ✦ .boydp5
  ✦ .boydp6
  ✦ .boydp7
  ✦ .boydp8
  ✦ .boydp9
  ✦ .boydp10
  ✦ .boydp11
  ✦ .boydp12
  ✦ .boydp13
  ✦ .boydp14
  ✦ .boydp15
  ✦ .boydp16
  ✦ .boydp17
  ✦ .boydp18
  ✦ .boydp19
  ✦ .boydp20
  ✦ .boydp21
  ✦ .boydp22
  ✦ .girldp1
  ✦ .girldp2
  ✦ .girldp3
  ✦ .girldp4
  ✦ .girldp5
  ✦ .girldp6
  ✦ .girldp7
  ✦ .girldp8
  ✦ .girldp9
  ✦ .girldp10
  ✦ .girldp11
  ✦ .girldp12
  ✦ .girldp13
  ✦ .girldp14
  ✦ .girldp15
  ✦ .girldp16
  ✦ .girldp17
  ✦ .girldp18
  ✦ .girldp19
  ✦ .girldp20
  ✦ .girldp21
  ✦ .girldp22

◇━━━━━━━━━━━━━━━◇
      🔓 *UNBAN*
◇━━━━━━━━━━━━━━━◇
  ✦ .unban1
  ✦ .unban2
  ✦ .unban3
  ✦ .unban4
  ✦ .unban5
  ✦ .unban6
  ✦ .unban7
  ✦ .unban8
  ✦ .unban9
  ✦ .unban10
  ✦ .unban11
  ✦ .unban12
  ✦ .unban13
  ✦ .unban14
  ✦ .unban15
  ✦ .unban16
  ✦ .unban17
  ✦ .unban18
  ✦ .unban19
  ✦ .unban20
  ✦ .unban21
  ✦ .unban22
  ✦ .unban23
  ✦ .unban24
  ✦ .unban25
  ✦ .unban26
  ✦ .unban27
  ✦ .unban28
  ✦ .unban29
  ✦ .unban30
  ✦ .unban31
  ✦ .unban32
  ✦ .unban33
  ✦ .unban34
  ✦ .unban35
  ✦ .unban36
  ✦ .unban37
  ✦ .unban38
  ✦ .unban39
  ✦ .unban40
  ✦ .unban41
  ✦ .unban42
  ✦ .unban43
  ✦ .unban44
  ✦ .unban45
  ✦ .unban46
  ✦ .unban47
  ✦ .unban48
  ✦ .unbanlist
  ✦ .unbanguide

◇━━━━━━━━━━━━━━━◇

> 🇿🇼 Powered by Handsome Tech Zimbabwe
> 💻 *Malvin C VME v1.0.0*`;await react("🚀");

      // Method 1 — image + buttons
      try {
        await sock.sendMessage(from, {
          image: { url: "https://i.ibb.co/W3YNd5B/zim-xmd.jpg" },
          caption: MENU,
          footer: "🇿🇼 ZIM XMD ULTIMATE | By Malvin C",
          buttons: [
            {
              buttonId: ".alive",
              buttonText: { displayText: "✅ ALIVE" },
              type: 1,
            },
            {
              buttonId: ".ping",
              buttonText: { displayText: "🏓 PING" },
              type: 1,
            },
            {
              buttonId: ".owner",
              buttonText: { displayText: "👑 OWNER" },
              type: 1
            } // <-- no comma here because it's the last button
          ], // <-- close buttons array
          headerType: 4 // <-- REQUIRED: 4 = image + caption + buttons
        }, { quoted: msg }); // <-- close sendMessage
      } catch (e) {
        console.log(e);
        // Method 2 fallback = list/template message here
    }
}

// ─── Main handler ─────────────────────────────────────────────
async function handleCommand(sock, msg, opts = {}) {
  try {
    const {
      body = '', sender = '', from = '',
      isGroup = false, isOwnerMsg = false,
      isSudo = false, isAdmin = false,
      isBotAdmin = false, mentionedJid = [],
      pushName = '',
    } = opts;

    const prefix = config.prefix;
    if (!body.startsWith(prefix)) return;

    const parts = body.slice(prefix.length).trim().split(/\s+/);
    const cmd   = parts.shift().toLowerCase();
    const args  = parts;
    const q     = args.join(' ');

    // Helpers
    const reply   = (txt) => sock.sendMessage(from, { text: txt }, { quoted: msg });
    const sendImg = (url, cap = '') => sock.sendMessage(from, { image: { url }, caption: cap }, { quoted: msg });
    const react   = (emoji) => sock.sendMessage(from, { react: { text: emoji, key: msg.key } });

    // Guards
    if (db.isBanned(getNumber(sender)) && !isOwnerMsg) return;
    if (config.mode === 'private' && !isOwnerMsg && !isSudo) return;

    // Anime image helper
    const animeImg = async (type) => {
      try {
        const r = await axios.get(`https://api.waifu.pics/sfw/${type}`, { timeout: 8000 });
        await sendImg(r.data.url, `${capitalize(type)} 🎌\n🇿🇼 Malvin C VME`);
      } catch { await reply(`❌ Could not fetch ${type} image. Try again.`); }
    };

    // Praise helper
    const praise = async (word, emoji) => {
      const t = mentionedJid[0] ? `@${getNumber(mentionedJid[0])}` : (q || pushName);
      await reply(`${emoji} *${word}* ${emoji}\n\n${t}, you truly deserve this! 🌟\n🇿🇼 Malvin C VME`);
    };

    // Free AI call — 4 providers, tries each until one works
    const freeAI = async (prompt, model = 'openai') => {
      const modelMap = { gemini: 'gemini', claude: 'claude', llama: 'llama', mistral: 'mistral', qwen: 'qwen', deepseek: 'openai' };
      const polModel = modelMap[model] || 'openai';

      const providers = [
        // 1. Pollinations (best, free, no key)
        async () => {
          const r = await axios.get(
            `https://text.pollinations.ai/${encodeURIComponent(prompt)}?model=${polModel}&seed=${Date.now()}`,
            { timeout: 20000, responseType: 'text' }
          );
          const txt = typeof r.data === 'string' ? r.data.trim() : JSON.stringify(r.data);
          if (!txt || txt.length < 5) throw new Error('empty');
          return txt.substring(0, 1500);
        },
        // 2. Pollinations chat endpoint
        async () => {
          const r = await axios.post(
            'https://text.pollinations.ai/',
            { messages: [{ role: 'user', content: prompt }], model: polModel, seed: Date.now() },
            { timeout: 20000, headers: { 'Content-Type': 'application/json' }, responseType: 'text' }
          );
          const txt = typeof r.data === 'string' ? r.data.trim() : '';
          if (!txt || txt.length < 5) throw new Error('empty');
          return txt.substring(0, 1500);
        },
        // 3. Free AI API (no key)
        async () => {
          const r = await axios.post(
            'https://free.churchless.tech/v1/chat/completions',
            { model: 'gpt-3.5-turbo', messages: [{ role: 'user', content: prompt }] },
            { timeout: 15000, headers: { 'Content-Type': 'application/json' } }
          );
          const txt = r.data?.choices?.[0]?.message?.content?.trim();
          if (!txt) throw new Error('empty');
          return txt.substring(0, 1500);
        },
        // 4. OpenAI proxy
        async () => {
          const r = await axios.post(
            'https://ai.nahcrof.com/v2/chat/completions',
            { model: 'gpt-3.5-turbo', messages: [{ role: 'user', content: prompt }] },
            { timeout: 15000, headers: { 'Content-Type': 'application/json', Authorization: 'Bearer no-key' } }
          );
          const txt = r.data?.choices?.[0]?.message?.content?.trim();
          if (!txt) throw new Error('empty');
          return txt.substring(0, 1500);
        },
      ];

      for (const fn of providers) {
        try {
          const result = await fn();
          if (result && result.length > 3) return result;
        } catch { /* try next */ }
      }
      return null;
    };

    // ── DOWNLOAD: .play and .song ──────────────────────────────
    // Uses free APIs only — no yt-dlp, no ffmpeg needed at all
    const downloadAudio = async (query) => {
      await reply(`🔍 Searching: *${query}*...`);

      // Step 1: Search YouTube for the song
      let video;
      try {
        const results = await ytSearch(query);
        video = results.videos[0];
        if (!video) return reply('❌ No results found. Try a different name.');
      } catch {
        return reply('❌ YouTube search failed.');
      }

      await reply(
        `🎵 *${video.title}*\n` +
        `⏱️ ${video.timestamp} | 👁️ ${video.views?.toLocaleString() || '?'} views\n\n` +
        `⏳ Downloading... please wait.`
      );

      // Step 2: Try multiple free download APIs in order
      const apis = [
        // API 1: yt-dlp via API (most reliable)
        async () => {
          const r = await axios.get(
            `https://yt-dlp-api.vercel.app/download?url=${encodeURIComponent(video.url)}&format=mp3`,
            { timeout: 20000 }
          );
          const url = r.data?.url || r.data?.download_url || r.data?.link;
          if (!url) throw new Error('No link');
          return url;
        },

        // API 2: cobalt.tools (maintained free downloader)
        async () => {
          const r = await axios.post('https://api.cobalt.tools/api/json',
            { url: video.url, aFormat: 'mp3', isAudioOnly: true, disableMetadata: false },
            { headers: { Accept: 'application/json', 'Content-Type': 'application/json' }, timeout: 20000 }
          );
          const url = r.data?.url;
          if (!url) throw new Error('No url');
          return url;
        },

        // API 3: ytdl-api.onrender.com (free)
        async () => {
          const r = await axios.get(
            `https://ytdl-api.onrender.com/download?url=${encodeURIComponent(video.url)}&type=audio`,
            { timeout: 20000 }
          );
          const url = r.data?.url || r.data?.download;
          if (!url) throw new Error('No link');
          return url;
        },

        // API 4: All-in-one downloader API
        async () => {
          const r = await axios.get(
            `https://api.vevioz.com/api/button/mp3?url=${encodeURIComponent(video.url)}`,
            { timeout: 15000 }
          );
          const url = r.data?.url || r.data?.dlink;
          if (!url) throw new Error('No url');
          return url;
        },

        // API 5: y2mate alternative
        async () => {
          const r = await axios.get(
            `https://www.y2api.com/api/get?url=${encodeURIComponent(video.url)}&format=mp3`,
            { timeout: 15000 }
          );
          const url = r.data?.url || r.data?.link || r.data?.download_url;
          if (!url) throw new Error('No url');
          return url;
        },
      ];

      // Try each API until one works
      for (let i = 0; i < apis.length; i++) {
        try {
          const audioUrl = await apis[i]();
          if (!audioUrl) continue;
          await sock.sendMessage(from, {
            audio: { url: audioUrl },
            mimetype: 'audio/mpeg',
            ptt: false,
          }, { quoted: msg });
          await reply(`✅ *${video.title}*\n🎵 Enjoy! 🇿🇼 Malvin C VME`);
          return;
        } catch { /* try next API */ }
      }

      // All APIs failed — send the YouTube link
      await reply(
        `⚠️ Could not download automatically.\n\n` +
        `🎵 *${video.title}*\n` +
        `🔗 ${video.url}\n\n` +
        `💡 Open the link to listen or download manually.`
      );
    };

    switch (cmd) {

    // ══════════════════════════════════════════════════════
    //  MENU / INFO
    // ══════════════════════════════════════════════════════
    case 'menu': case 'help': case 'cmds': {
      const ms = mc.getAll();
      try {
        await sock.sendMessage(from, { image: { url: ms.menuImage }, caption: buildMenu(prefix) }, { quoted: msg });
      } catch {
        await reply(buildMenu(prefix));
      }
      break;
    }

    case 'alive':
      await reply(`╔══❰ ✅ *ALIVE* ❱══╗\n║ 🤖 *${config.botName}* is Online!\n║ ⏱️ ${runtime(process.uptime())}\n║ 🇿🇼 Handsome Tech Zimbabwe\n╚════════════════════╝`);
      break;

    case 'ping': case 'ping2': {
      const start = Date.now();
      await reply('🏓 Pinging...');
      await reply(`🏓 *${Date.now() - start}ms* — Bot is Online ✅\n🇿🇼 Malvin C VME`);
      break;
    }
    
    case 'malvinsay': {
  const text = args.join(' ');
  if (!text) {
    await conn.sendMessage(from, { text: '❌ Usage: .malvinsay <text>' }, { quoted: msg });
    break;
  }

  try {
    // Using StreamElements TTS with 'Brian' voice (deep male)
    const voice = 'Brian';
    const encodedText = encodeURIComponent(text);
    const ttsUrl = `https://api.streamelements.com/kappa/v2/speech?voice=${voice}&text=${encodedText}`;

    const response = await fetch(ttsUrl);
    if (!response.ok) throw new Error('TTS fetch failed');

    const audioBuffer = await response.arrayBuffer();
    const audioBytes = Buffer.from(audioBuffer);

    await conn.sendMessage(from, {
      audio: audioBytes,
      mimetype: 'audio/mpeg',
      ptt: true // sends as voice note
    }, { quoted: msg });

  } catch (err) {
    await conn.sendMessage(from, { text: `❌ Error: ${err.message}` }, { quoted: msg });
  }
  break;
}

    case 'uptime':
      await reply(`⏱️ *Uptime:* ${runtime(process.uptime())}`);
      break;

    case 'owner':
      await reply(`╔══❰ 👑 *OWNER* ❱══╗\n║ 👤 ${config.ownerName}\n║ 📱 +${config.ownerNumber}\n║ 🇿🇼 Zimbabwe\n║ 💻 Handsome Tech Zimbabwe\n╚════════════════════╝\nwa.me/${config.ownerNumber}`);
      break;

    case 'bot': case 'botinfo':
      await reply(`╔══❰ 🤖 *BOT INFO* ❱══╗\n║ 🤖 ${config.botName}\n║ 👑 ${config.ownerName}\n║ ⚡ v${config.version}\n║ 📦 Prefix: ${prefix}\n║ ⚙️ ${config.mode.toUpperCase()}\n║ ⏱️ ${runtime(process.uptime())}\n║ 📜 781+ Commands\nServer 1\nhttps://malvin-c-vme-v11.vercel.app/\nServer 2\nhttps://malvin-c-vme-v11.onrender.com\n╚════════════════════╝`);
      break;

    case 'status': case 'gstatus': {
      const mem = process.memoryUsage();
      await reply(`📊 *Status*\n✅ Online\n⏱️ ${runtime(process.uptime())}\n🧠 RAM: ${(mem.heapUsed/1024/1024).toFixed(1)}MB\n⚡ Node ${process.version}\n🇿🇼 Malvin C VME`);
      break;
    }

    case 'timenow': case 'time': case 'date':
      await reply(`🕐 *${timeNow()}*\n📅 *${dateNow()}*\n🌍 Africa/Harare (CAT) 🇿🇼`);
      break;

    case 'repo':
      await reply(`📦 *Malvin C VME*\ngithub.com/malvin2010\n🌟 Star it!\n🇿🇼 Handsome Tech Zimbabwe`);
      break;

    case 'cid':
      await reply(`🆔 *Your WhatsApp ID:*\n\`${sender}\`\n📱 +${getNumber(sender)}`);
      break;

    // ══════════════════════════════════════════════════════
    //  MENU CUSTOMISATION
    // ══════════════════════════════════════════════════════
    case 'setmenuimage': {
      if (!q || !isUrl(q)) return reply(`❌ *${prefix}setmenuimage <image URL>*\nSend a direct .jpg or .png link.`);
      mc.set('menuImage', q);
      await reply(`✅ Menu image updated!\nType *${prefix}menupreview* to check it.`);
      break;
    }
    case 'settagline': {
      if (!isOwnerMsg && !isSudo) return reply('❌ Owner only.');
      if (!q) return reply(`❌ *${prefix}settagline <text>*`);
      mc.set('tagline', q);
      await reply(`✅ Tagline: *${q}*`);
      break;
    }
    case 'setmenufooter': {
      if (!isOwnerMsg && !isSudo) return reply('❌ Owner only.');
      if (!q) return reply(`❌ *${prefix}setmenufooter <text>*`);
      mc.set('menuFooter', q);
      await reply(`✅ Footer: *${q}*`);
      break;
    }
    case 'menutheme': {
      if (!isOwnerMsg && !isSudo) return reply('❌ Owner only.');
      const themes = ['green','blue','red','gold','purple','cyan'];
      if (!themes.includes(q)) return reply(`❌ Themes: ${themes.join(', ')}`);
      mc.set('theme', q);
      await reply(`✅ Theme: *${q}*`);
      break;
    }
    case 'menupreview': {
      const ms = mc.getAll();
      try {
        await sock.sendMessage(from, {
          image: { url: ms.menuImage },
          caption: `🖼️ *Menu Image Preview*\n\n📝 Tagline: ${ms.tagline}\n🎨 Theme: ${ms.theme}\n📋 Footer: ${ms.menuFooter}`,
        }, { quoted: msg });
      } catch {
        await reply(`❌ Image failed to load:\n${ms.menuImage}\n\nUse *${prefix}setmenuimage <url>* to change it.`);
      }
      break;
    }

    // ══════════════════════════════════════════════════════
    //  DOWNLOAD — FIXED .play AND .song
    // ══════════════════════════════════════════════════════
    case 'play': case 'song': case 'ytaudio': {
  if(!args[0]) return sock.sendMessage(from, { text: `❌ Usage:.play ruger asiwaju` });
  
  const ytSearch = require('yt-search');
  let msg = await sock.sendMessage(from, { text: `⏳ Searching: ${args.join(' ')}` });
  
  try{
    // 1. Search YouTube
    let res = await ytSearch(args.join(' '));
    let vid = res.videos[0];
    if(!vid) return sock.sendMessage(from, { text: `❌ No results` });

    // 2. Call Free API to get MP3 link
    let api = `https://api.vreden.web.id/api/ytmp3?url=${encodeURIComponent(vid.url)}`;
    let r = await fetch(api);
    let json = await r.json();
    if(!json.status ||!json.result.download) return sock.sendMessage(from, { text: `❌ API down. Try again later` });

    // 3. Send Audio
    await sock.sendMessage(from, { delete: msg.key }); // delete "Searching..."
    await sock.sendMessage(from, { 
      audio: { url: json.result.download }, 
      mimetype: 'audio/mpeg', 
      fileName: `${vid.title}.mp3`,
      ptt: false, // false = music file
      contextInfo: {
        externalAdReply: {
          title: vid.title,
          body: vid.author.name,
          thumbnailUrl: vid.thumbnail,
          sourceUrl: vid.url,
          mediaType: 1
        }
      }
    });

  }catch(e){
    console.log(e);
    sock.sendMessage(from, { text: `❌ Error: ${e.message}\nAPI might be down` });
  }
  break;
    }

    case 'yts': {
      if (!q) return reply(`❌ *${prefix}yts <search query>*`);
      try {
        const r = await ytSearch(q);
        const list = r.videos.slice(0, 5).map((v, i) =>
          `${i + 1}. *${v.title}*\n   ⏱️ ${v.timestamp} | 👁️ ${(v.views || 0).toLocaleString()}\n   🔗 ${v.url}`
        ).join('\n\n');
        await reply(`🔍 *YouTube Results: ${q}*\n\n${list}`);
      } catch { reply('❌ YouTube search failed.'); }
      break;
    }

    case 'ytv': {
      if (!q) return reply(`❌ *${prefix}ytv <YouTube URL or name>*`);
      await reply('🎬 Searching for video...');
      try {
        const r = await ytSearch(q);
        const video = isUrl(q) ? { url: q, title: 'Video', timestamp: '?' } : r.videos[0];
        if (!video) return reply('❌ No results found.');
        await reply(`🎬 *${video.title}*\n⏱️ ${video.timestamp}\n⏳ Downloading... (may take a moment)`);

        exec('yt-dlp --version', async (notInstalled) => {
          if (notInstalled) {
            return reply(`❌ yt-dlp not installed on this server.\n\n🔗 Watch here:\n${video.url}`);
          }
          const outPath = tmpPath('mp4');
          exec(`yt-dlp -f "best[ext=mp4][filesize<50M]" -o "${outPath}" "${video.url}" 2>/dev/null`, async (err) => {
            if (err || !fs.existsSync(outPath)) {
              return reply(`❌ Video download failed.\n🔗 Watch here:\n${video.url}`);
            }
            try {
              await sock.sendMessage(from, {
                video: fs.readFileSync(outPath),
                caption: `🎬 *${video.title}*\n🇿🇼 Malvin C VME`,
                mimetype: 'video/mp4',
              }, { quoted: msg });
            } catch { await reply(`❌ Video too large to send.\n🔗 ${video.url}`); }
            finally { try { fs.unlinkSync(outPath); } catch {} }
          });
        });
      } catch { reply('❌ Failed. Try again.'); }
      break;
    }

    case 'tiktok': case 'tt': case 'tiktok2': case 'tiktok3': {
      if (!q) return reply(`❌ *${prefix}tiktok <TikTok URL>*`);
      await reply('⏳ Downloading TikTok video...');
      try {
        const r = await axios.get(`https://www.tikwm.com/api/?url=${encodeURIComponent(q)}`, { timeout: 15000 });
        const d = r.data?.data;
        if (!d?.play) return reply('❌ Could not fetch TikTok. Check the URL.');
        await sock.sendMessage(from, {
          video: { url: d.play },
          caption: `📱 *${d.title || 'TikTok'}*\n❤️ ${d.digg_count || 0} | 💬 ${d.comment_count || 0}\n🇿🇼 Malvin C VME`,
          mimetype: 'video/mp4',
        }, { quoted: msg });
      } catch { reply('❌ TikTok download failed.'); }
      break;
    }

    case 'tiktokphoto': {
      if (!q) return reply(`❌ *${prefix}tiktokphoto <TikTok URL>*`);
      await reply('⏳ Fetching TikTok photos...');
      try {
        const r = await axios.get(`https://www.tikwm.com/api/?url=${encodeURIComponent(q)}`, { timeout: 15000 });
        const imgs = r.data?.data?.images;
        if (!imgs?.length) return reply('❌ No photos found. Use .tiktok for videos.');
        for (const img of imgs.slice(0, 5)) {
          await sendImg(img, '📸 TikTok Photo\n🇿🇼 Malvin C VME');
          await sleep(600);
        }
      } catch { reply('❌ Failed.'); }
      break;
    }

    case 'instagram': case 'ig': {
      if (!q) return reply(`❌ *${prefix}instagram <URL>*`);
      await reply('⏳ Downloading from Instagram...');
      try {
        const r = await axios.get(`https://api.instagramsave.net/download?url=${encodeURIComponent(q)}`, { timeout: 15000 });
        const url = r.data?.url || r.data?.video;
        if (!url) return reply('❌ Could not extract. Try a direct post URL.');
        await sock.sendMessage(from, { video: { url }, caption: '📸 Instagram\n🇿🇼 Malvin C VME' }, { quoted: msg });
      } catch { reply('❌ Instagram failed. Try a direct post link.'); }
      break;
    }

    case 'facebook': case 'fb': {
      if (!q) return reply(`❌ *${prefix}facebook <URL>*`);
      await reply('⏳ Downloading from Facebook...');
      try {
        const r = await axios.post(
          'https://fdownloader.net/api/ajaxSearch',
          `q=${encodeURIComponent(q)}&lang=en&v=v2`,
          { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, timeout: 15000 }
        );
        const match = (r.data?.data || '').match(/href="(https[^"]+\.mp4[^"]*)"/);
        if (!match) return reply('❌ Could not extract video.');
        await sock.sendMessage(from, { video: { url: match[1] }, caption: '📘 Facebook\n🇿🇼 Malvin C VME' }, { quoted: msg });
      } catch { reply('❌ Facebook download failed.'); }
      break;
    }

    case 'twitter': case 'tw': {
      if (!q) return reply(`❌ *${prefix}twitter <URL>*`);
      await reply('⏳ Downloading from Twitter/X...');
      try {
        const r = await axios.get(`https://twitsave.com/info?url=${encodeURIComponent(q)}`, { timeout: 15000 });
        const match = r.data.match(/data-url="([^"]+\.mp4[^"]*)"/);
        if (!match) return reply('❌ Could not extract video.');
        await sock.sendMessage(from, { video: { url: match[1] }, caption: '🐦 Twitter/X\n🇿🇼 Malvin C VME' }, { quoted: msg });
      } catch { reply('❌ Twitter download failed.'); }
      break;
    }

    case 'mediafire': {
      if (!q) return reply(`❌ *${prefix}mediafire <URL>*`);
      await reply('⏳ Fetching MediaFire link...');
      try {
        const r = await axios.get(q, { headers: { 'User-Agent': 'Mozilla/5.0' }, timeout: 15000 });
        const match = r.data.match(/aria-label="Download file"[^>]*href="([^"]+)"/);
        if (!match) return reply('❌ Could not find download link.');
        await reply(`✅ *MediaFire Download:*\n\n${match[1]}`);
      } catch { reply('❌ MediaFire failed.'); }
      break;
    }

    case 'apk':
      await reply(!q ? `❌ *${prefix}apk <app name>*` :
        `📱 *APK: ${q}*\n\n🔗 APKPure:\nhttps://apkpure.com/search?q=${encodeURIComponent(q)}\n\n🔗 APKMirror:\nhttps://www.apkmirror.com/?s=${encodeURIComponent(q)}\n\n🇿🇼 Malvin C VME`);
      break;

    case 'modapk':
      await reply(!q ? `❌ *${prefix}modapk <app name>*` :
        `🔧 *Mod APK: ${q}*\n\n🔗 HappyMod:\nhttps://www.happymod.com/search.html?q=${encodeURIComponent(q)}\n\n🔗 Revdl:\nhttps://www.revdl.com/?s=${encodeURIComponent(q)}\n\n⚠️ Use at own risk.\n🇿🇼 Malvin C VME`);
      break;

    case 'wastatus':
      await reply(`📱 *WhatsApp Status Saver*\n\n1️⃣ View the status in WhatsApp\n2️⃣ Open file manager\n3️⃣ Go to:\n   📂 /WhatsApp/Media/.Statuses/\n   or\n   📂 /Android/media/com.whatsapp/WhatsApp/Media/.Statuses/\n4️⃣ Enable "Show hidden files"\n5️⃣ Copy the file!\n\n🇿🇼 Malvin C VME`);
      break;

    case 'lyrics': {
      if (!q) return reply(`❌ *${prefix}lyrics <song name>*`);
      await reply(`🎵 Searching lyrics: *${q}*...`);
      try {
        const r = await axios.get(`https://some-random-api.com/lyrics?title=${encodeURIComponent(q)}`, { timeout: 12000 });
        if (!r.data?.lyrics) return reply('❌ Lyrics not found.');
        await reply(`🎵 *${r.data.title}* by *${r.data.author}*\n\n${r.data.lyrics.substring(0, 3000)}`);
      } catch { reply('❌ Lyrics not found.'); }
      break;
    }

    case 'tts': {
      if (!q) return reply(`❌ *${prefix}tts <text>*`);
      try {
        await sock.sendMessage(from, {
          audio: { url: `https://api.streamelements.com/kappa/v2/speech?voice=Brian&text=${encodeURIComponent(q)}` },
          mimetype: 'audio/mpeg', ptt: false,
        }, { quoted: msg });
      } catch { reply('❌ TTS failed.'); }
      break;
    }

    // ══════════════════════════════════════════════════════
    //  AI — ALL FREE, NO KEYS NEEDED
    // ══════════════════════════════════════════════════════
    case 'ai': case 'gpt': case 'chatgpt': case 'gpt4': case 'gpt4o':
    case 'brain': case 'askai': case 'think': case 'copilot': case 'bard': {
      if (!q) return reply(`❌ *${prefix}ai <your question>*`);
      await reply('🤖 Thinking...');
      const ans = await freeAI(q, 'openai');
      await reply(ans ? `🤖 *AI:*\n\n${ans}` : '❌ AI unavailable. Try again.');
      break;
    }

    case 'gemini': case 'geminipro': {
      if (!q) return reply(`❌ *${prefix}gemini <prompt>*`);
      await reply('✨ Asking Gemini...');
      const ans = await freeAI(`Answer this as Google Gemini AI: ${q}`, 'gemini');
      await reply(ans ? `✨ *Gemini:*\n\n${ans}` : '❌ Gemini unavailable.');
      break;
    }

    case 'claude': case 'claudeopus': {
      if (!q) return reply(`❌ *${prefix}claude <prompt>*`);
      await reply('🔮 Asking Claude...');
      const ans = await freeAI(`Answer this as Anthropic Claude AI: ${q}`, 'claude');
      await reply(ans ? `🔮 *Claude:*\n\n${ans}` : '❌ Claude unavailable.');
      break;
    }

    case 'deepseek': case 'deepseekcode': {
      if (!q) return reply(`❌ *${prefix}deepseek <prompt>*`);
      await reply('🧠 Asking DeepSeek...');
      const ans = await freeAI(cmd === 'deepseekcode' ? `Write code for: ${q}` : q, 'deepseek');
      await reply(ans ? `🧠 *DeepSeek:*\n\n${ans}` : '❌ DeepSeek unavailable.');
      break;
    }

    case 'llama': case 'llama2': case 'llama3': {
      if (!q) return reply(`❌ *${prefix}llama <prompt>*`);
      await reply('🦙 Asking LLaMA...');
      const ans = await freeAI(q, 'llama');
      await reply(ans ? `🦙 *LLaMA:*\n\n${ans}` : '❌ LLaMA unavailable.');
      break;
    }

    case 'mistral': case 'mixtral': case 'grok': case 'grokbeta':
    case 'perplexity': case 'kimi': case 'qwen': case 'yi':
    case 'solar': case 'phi': case 'phi2': case 'phi3':
    case 'vicuna': case 'alpaca': case 'wizard': case 'orca': {
      if (!q) return reply(`❌ *${prefix}${cmd} <prompt>*`);
      await reply(`🤖 Asking ${capitalize(cmd)}...`);
      const modelKey = ['mistral','mixtral'].includes(cmd) ? 'mistral' : ['qwen'].includes(cmd) ? 'qwen' : 'openai';
      const ans = await freeAI(q, modelKey);
      await reply(ans ? `🤖 *${capitalize(cmd)}:*\n\n${ans}` : `❌ ${capitalize(cmd)} unavailable.`);
      break;
    }

    case 'imagine': case 'dalle': {
      if (!q) return reply(`❌ *${prefix}imagine <description>*`);
      await reply(`🎨 Generating image: *"${q}"*...`);
      try {
        const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(q)}?width=768&height=768&nologo=true&seed=${Date.now()}`;
        await sendImg(url, `🎨 *${q}*\n🇿🇼 Malvin C VME`);
      } catch { reply('❌ Image generation failed.'); }
      break;
    }

    case 'chatbot': {
      if (!isGroup) return reply('❌ Group only.');
      if (!isAdmin && !isOwnerMsg) return reply('❌ Admins only.');
      if (!['on','off'].includes(q)) return reply(`❌ *${prefix}chatbot on/off*`);
      db.setGroup(from, 'chatbot', q === 'on');
      await reply(`🤖 Chatbot *${q.toUpperCase()}* in this group.`);
      break;
    }

    case 'translate': {
      if (!q) return reply(`❌ *${prefix}translate <lang> <text>*\nExample: .translate es Hello World`);
      const [lang, ...rest] = q.split(' ');
      const text = rest.join(' ');
      if (!text) return reply('❌ Provide text after the language code.');
      try {
        const r = await axios.get(
          `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${lang}`,
          { timeout: 10000 }
        );
        await reply(`🌍 *Translation → ${lang.toUpperCase()}:*\n\n${r.data?.responseData?.translatedText || 'Failed.'}`);
      } catch { reply('❌ Translation failed.'); }
      break;
    }

    case 'grammar': case 'spellcheck': case 'correct': case 'proofread': {
      if (!q) return reply(`❌ *${prefix}grammar <text>*`);
      try {
        const r = await axios.post('https://api.languagetool.org/v2/check', null,
          { params: { text: q, language: 'en-US' }, timeout: 12000 }
        );
        const matches = r.data?.matches || [];
        if (!matches.length) return reply('✅ No grammar issues found! Text looks great.');
        const fixes = matches.slice(0, 5).map((m, i) => {
          const wrong = m.context.text.substring(m.context.offset, m.context.offset + m.context.length);
          const right = m.replacements?.[0]?.value || '?';
          return `${i+1}. *"${wrong}"* → *"${right}"*\n   📝 ${m.message}`;
        }).join('\n\n');
        await reply(`✏️ *Grammar Check:*\n\n${fixes}`);
      } catch { reply('❌ Grammar check failed.'); }
      break;
    }

    case 'summarize': {
      if (!q) return reply(`❌ *${prefix}summarize <text>*`);
      await reply('📝 Summarizing...');
      const ans = await freeAI(`Summarize this in 3-5 sentences: ${q}`);
      await reply(ans ? `📝 *Summary:*\n\n${ans}` : '❌ Summarization failed.');
      break;
    }

    case 'math': case 'calculate': case 'calc': case 'calculator': {
      if (!q) return reply(`❌ *${prefix}math <expression>*`);
      try {
        // eslint-disable-next-line no-new-func
        const result = Function(`"use strict"; return (${q.replace(/[^0-9+\-*/().% ]/g, '')})`)();
        await reply(`🧮 \`${q}\` = *${result}*`);
      } catch { reply('❌ Invalid expression. Example: .math 5 * (3 + 2)'); }
      break;
    }

    case 'quran': {
      if (!q) return reply(`❌ *${prefix}quran <surah:ayah>*\nExample: .quran 1:1`);
      try {
        const [s, a] = q.split(':');
        const r = await axios.get(`https://api.alquran.cloud/v1/ayah/${s}:${a}/editions/quran-uthmani,en.asad`, { timeout: 10000 });
        const d = r.data?.data;
        await reply(`📖 *Quran ${s}:${a}*\n\n🕌 *Arabic:*\n${d?.[0]?.text}\n\n🌍 *English:*\n${d?.[1]?.text}\n\n— ${d?.[0]?.surah?.englishName}`);
      } catch { reply('❌ Not found. Use format .quran 2:255'); }
      break;
    }

    case 'hadith': {
      await reply('📜 Fetching Hadith...');
      try {
        const r = await axios.get('https://random-hadith-generator.vercel.app/bukhari/', { timeout: 10000 });
        const h = r.data?.data;
        await reply(`📜 *Hadith (Bukhari)*\n\n${h?.hadith_english || 'Not found.'}\n\n— ${h?.refno || ''}`);
      } catch { reply('❌ Hadith fetch failed.'); }
      break;
    }

    case 'bible': {
      if (!q) return reply(`❌ *${prefix}bible <Book Chapter:Verse>*\nExample: .bible John 3:16`);
      try {
        const r = await axios.get(`https://bible-api.com/${encodeURIComponent(q)}`, { timeout: 10000 });
        await reply(`✝️ *${r.data?.reference}*\n\n${r.data?.text || 'Not found.'}`);
      } catch { reply('❌ Verse not found.'); }
      break;
    }

    case 'prayertime': {
      if (!q) return reply(`❌ *${prefix}prayertime <city>*`);
      try {
        const r = await axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(q)}&country=&method=2`, { timeout: 10000 });
        const t = r.data?.data?.timings;
        await reply(`🕌 *Prayer Times — ${q}*\n\n🌅 Fajr: *${t?.Fajr}*\n☀️ Dhuhr: *${t?.Dhuhr}*\n🌤️ Asr: *${t?.Asr}*\n🌆 Maghrib: *${t?.Maghrib}*\n🌙 Isha: *${t?.Isha}*\n\n🇿🇼 Malvin C VME`);
      } catch { reply('❌ Not found. Check city name.'); }
      break;
    }

    case 'islam': case 'islamcity': case 'fiqh': case 'sunnah': {
      if (!q) return reply(`❌ *${prefix}islam <question>*`);
      await reply('🕌 Searching...');
      const ans = await freeAI(`Answer from an Islamic perspective: ${q}`);
      await reply(ans ? `🕌 *Islamic Q&A:*\n\n${ans}\n\n_Always consult a qualified scholar for fatwas._` : '❌ Failed.');
      break;
    }

    // ══════════════════════════════════════════════════════
    //  IMAGE TOOLS
    // ══════════════════════════════════════════════════════
    case 'sticker': case 's': {
      const qMsg = msg.message?.extendedTextMessage?.contextInfo?.quotedMessage;
      const imgMsg = qMsg?.imageMessage || msg.message?.imageMessage;
      const vidMsg = qMsg?.videoMessage || msg.message?.videoMessage;
      if (!imgMsg && !vidMsg) return reply('❌ Reply to an image to create a sticker.');
      try {
        const stream = await sock.downloadMediaMessage(msg);
        const inp = tmpPath(imgMsg ? 'jpg' : 'mp4');
        const out = tmpPath('webp');
        fs.writeFileSync(inp, stream);
        exec(`ffmpeg -i "${inp}" -vf "scale=512:512:force_original_aspect_ratio=decrease,pad=512:512:(ow-iw)/2:(oh-ih)/2:color=white@0" "${out}" -y 2>/dev/null`, async (err) => {
          if (err) { fs.unlinkSync(inp); return reply('❌ Sticker failed. ffmpeg required.'); }
          await sock.sendMessage(from, { sticker: fs.readFileSync(out) }, { quoted: msg });
          try { fs.unlinkSync(inp); fs.unlinkSync(out); } catch {}
        });
      } catch { reply('❌ Sticker creation failed.'); }
      break;
    }

    case 'toimg': {
      const qMsg = msg.message?.extendedTextMessage?.contextInfo?.quotedMessage;
      if (!qMsg?.stickerMessage) return reply('❌ Reply to a sticker.');
      try {
        const stream = await sock.downloadMediaMessage(msg);
        const inp = tmpPath('webp');
        const out = tmpPath('jpg');
        fs.writeFileSync(inp, stream);
        exec(`ffmpeg -i "${inp}" "${out}" -y 2>/dev/null`, async (err) => {
          if (err) { fs.unlinkSync(inp); return reply('❌ Conversion failed.'); }
          await sendImg(out, '🖼️ Converted!\n🇿🇼 Malvin C VME');
          try { fs.unlinkSync(inp); fs.unlinkSync(out); } catch {}
        });
      } catch { reply('❌ Failed.'); }
      break;
    }

    case 'remini': {
      const qMsg = msg.message?.extendedTextMessage?.contextInfo?.quotedMessage;
      const imgMsg = qMsg?.imageMessage || msg.message?.imageMessage;
      if (!imgMsg) return reply('❌ Reply to an image.');
      await reply('✨ Enhancing with AI...');
      try {
        const stream = await sock.downloadMediaMessage(msg);
        const b64 = Buffer.from(stream).toString('base64');
        const r = await axios.post('https://inferenceengine.vyro.ai/enhance',
          { model_version: 1, image: `data:image/jpeg;base64,${b64}` },
          { headers: { 'Content-Type': 'application/json' }, timeout: 20000 }
        );
        if (!r.data?.enhanced) return reply('❌ Enhancement failed.');
        await sock.sendMessage(from, {
          image: Buffer.from(r.data.enhanced.split(',')[1], 'base64'),
          caption: '✨ Enhanced!\n🇿🇼 Malvin C VME',
        }, { quoted: msg });
      } catch { reply('❌ Remini failed.'); }
      break;
    }

    case 'removebg': {
      const qMsg = msg.message?.extendedTextMessage?.contextInfo?.quotedMessage;
      const imgMsg = qMsg?.imageMessage || msg.message?.imageMessage;
      if (!imgMsg) return reply('❌ Reply to an image.');
      await reply('🖼️ Removing background...');
      try {
        const stream = await sock.downloadMediaMessage(msg);
        // Use remove.bg free tier (50/month free)
        const FormData = require('form-data');
        const fd = new FormData();
        fd.append('image_file', Buffer.from(stream), 'img.jpg');
        fd.append('size', 'auto');
        const r = await axios.post('https://api.remove.bg/v1.0/removebg', fd, {
          headers: { 'X-Api-Key': 'oX2YknX9oaNDTyxEMrJaRVr4', ...fd.getHeaders() },
          responseType: 'arraybuffer', timeout: 20000,
        });
        await sock.sendMessage(from, {
          image: Buffer.from(r.data),
          caption: '🖼️ Background Removed!\n🇿🇼 Malvin C VME',
        }, { quoted: msg });
      } catch { reply('❌ Background removal failed.'); }
      break;
    }

    case 'img': case 'image': {
      if (!q) return reply(`❌ *${prefix}img <query>*`);
      await reply(`🔍 Searching: *${q}*`);
      try {
        const r = await axios.get(`https://source.unsplash.com/800x600/?${encodeURIComponent(q)}`, { responseType: 'arraybuffer', timeout: 12000 });
        await sock.sendMessage(from, { image: Buffer.from(r.data), caption: `🖼️ ${q}\n🇿🇼 Malvin C VME` }, { quoted: msg });
      } catch { reply('❌ Image search failed.'); }
      break;
    }

    case 'wallpaper': {
      const theme = q || pickRandom(['nature','city','abstract','dark','purple','sunset','minimal']);
      try {
        const r = await axios.get(`https://source.unsplash.com/1080x1920/?${encodeURIComponent(theme)},wallpaper`, { responseType: 'arraybuffer', timeout: 12000 });
        await sock.sendMessage(from, { image: Buffer.from(r.data), caption: `🖼️ *${capitalize(theme)} Wallpaper*\n🇿🇼 Malvin C VME` }, { quoted: msg });
      } catch { reply('❌ Wallpaper fetch failed.'); }
      break;
    }

    case 'meme': {
      try {
        const r = await axios.get('https://meme-api.com/gimme', { timeout: 10000 });
        await sendImg(r.data.url, `😂 *${r.data.title}*\n👍 ${r.data.ups}\n🇿🇼 Malvin C VME`);
      } catch { reply('❌ Could not fetch meme.'); }
      break;
    }

    case 'waifu': await animeImg('waifu'); break;
    case 'neko':  await animeImg('neko');  break;
    case 'kitsune': await animeImg('kitsune'); break;
    case 'husbando': await animeImg('husbando'); break;
    case 'animegirl': await animeImg('waifu'); break;
    case 'animeboy':  await animeImg('husbando'); break;
    case 'catgirl':   await animeImg('neko');  break;
    case 'foxgirl':   await animeImg('kitsune'); break;
    case 'manga': case 'chibi': case 'kawaii': await animeImg('waifu'); break;
    case 'couplepp': {
      try {
        const r = await axios.get('https://source.unsplash.com/800x800/?couple,aesthetic', { responseType: 'arraybuffer', timeout: 10000 });
        await sock.sendMessage(from, { image: Buffer.from(r.data), caption: '💑 Couple PP\n🇿🇼 Malvin C VME' }, { quoted: msg });
      } catch { reply('❌ Failed.'); }
      break;
    }

    // ── Anime actions ──
    case 'hug': await animeImg('hug'); break;
    case 'kiss': case 'kiss2': await animeImg('kiss'); break;
    case 'slap': await animeImg('slap'); break;
    case 'pat':  await animeImg('pat'); break;
    case 'cry':  case 'ba': await animeImg('cry'); break;
    case 'dance': await animeImg('dance'); break;
    case 'blush': await animeImg('blush'); break;
    case 'wave':  await animeImg('wave'); break;
    case 'wink':  await animeImg('wink'); break;
    case 'happy': await animeImg('happy'); break;
    case 'angry': await animeImg('angry'); break;
    case 'cuddle': await animeImg('cuddle'); break;
    case 'lick':   await animeImg('lick'); break;
    case 'bite':   await animeImg('bite'); break;
    case 'bonk':   await animeImg('bonk'); break;
    case 'yeet':   await animeImg('yeet'); break;
    case 'poke':   await animeImg('poke'); break;
    case 'highfive': await animeImg('highfive'); break;
    case 'nom':    await animeImg('nom'); break;
    case 'bully':  await animeImg('bully'); break;
    case 'handhold': await animeImg('handhold'); break;
    case 'smug':   await animeImg('smug'); break;
    case 'glomp':  await animeImg('glomp'); break;
    case 'tickle': await animeImg('tickle'); break;
    case 'smile':  await animeImg('smile'); break;
    case 'roll': case 'awoo': case 'tail': case 'pout':
    case 'confy': case 'cringe': case 'eevee': case 'fluff':
      await animeImg('waifu'); break;

    // ── Boy/Girl DP packs ──
    case 'boydp1': case 'boydp2': case 'boydp3': case 'boydp4': case 'boydp5':
    case 'boydp6': case 'boydp7': case 'boydp8': case 'boydp9': case 'boydp10':
    case 'boydp11': case 'boydp12': case 'boydp13': case 'boydp14': case 'boydp15':
    case 'boydp16': case 'boydp17': case 'boydp18': case 'boydp19': case 'boydp20':
    case 'boydp21': case 'boydp22': {
      const n = cmd.replace('boydp','');
      try {
        const r = await axios.get(`https://source.unsplash.com/600x800/?boy,handsome,portrait,${n}`, { responseType: 'arraybuffer', timeout: 10000 });
        await sock.sendMessage(from, { image: Buffer.from(r.data), caption: `👦 Boy DP ${n}\n🇿🇼 Malvin C VME` }, { quoted: msg });
      } catch { reply('❌ Failed.'); }
      break;
    }
    case 'girldp1': case 'girldp2': case 'girldp3': case 'girldp4': case 'girldp5':
    case 'girldp6': case 'girldp7': case 'girldp8': case 'girldp9': case 'girldp10':
    case 'girldp11': case 'girldp12': case 'girldp13': case 'girldp14': case 'girldp15':
    case 'girldp16': case 'girldp17': case 'girldp18': case 'girldp19': case 'girldp20':
    case 'girldp21': case 'girldp22': {
      const n = cmd.replace('girldp','');
      try {
        const r = await axios.get(`https://source.unsplash.com/600x800/?girl,beautiful,portrait,${n}`, { responseType: 'arraybuffer', timeout: 10000 });
        await sock.sendMessage(from, { image: Buffer.from(r.data), caption: `👧 Girl DP ${n}\n🇿🇼 Malvin C VME` }, { quoted: msg });
      } catch { reply('❌ Failed.'); }
      break;
    }

    // ══════════════════════════════════════════════════════
    //  GROUP MANAGEMENT
    // ══════════════════════════════════════════════════════
    case 'kick': {
      if (!isGroup) return reply('❌ Group only.');
      if (!isAdmin && !isOwnerMsg) return reply('❌ Admins only.');
      if (!isBotAdmin) return reply('❌ I need to be admin to kick.');
      const t = mentionedJid[0] || msg.message?.extendedTextMessage?.contextInfo?.participant;
      if (!t) return reply(`❌ *${prefix}kick @user*`);
      try { await sock.groupParticipantsUpdate(from, [t], 'remove'); await reply(`✅ @${getNumber(t)} kicked.`); }
      catch { reply('❌ Failed.'); }
      break;
    }
    case 'add': {
      if (!isGroup) return reply('❌ Group only.');
      if (!isAdmin && !isOwnerMsg) return reply('❌ Admins only.');
      if (!isBotAdmin) return reply('❌ I need to be admin.');
      if (!q) return reply(`❌ *${prefix}add 263xxxxxxxxx*`);
      try { await sock.groupParticipantsUpdate(from, [formatPhone(q)], 'add'); await reply(`✅ +${q} added.`); }
      catch { reply('❌ Failed. Privacy settings may block this.'); }
      break;
    }
    case 'promote': {
      if (!isGroup) return reply('❌ Group only.');
      if (!isAdmin && !isOwnerMsg) return reply('❌ Admins only.');
      if (!isBotAdmin) return reply('❌ I need to be admin.');
      const t = mentionedJid[0] || msg.message?.extendedTextMessage?.contextInfo?.participant;
      if (!t) return reply(`❌ *${prefix}promote @user*`);
      try { await sock.groupParticipantsUpdate(from, [t], 'promote'); await reply(`⬆️ @${getNumber(t)} promoted! 🎉`); }
      catch { reply('❌ Failed.'); }
      break;
    }
    case 'demote': {
      if (!isGroup) return reply('❌ Group only.');
      if (!isAdmin && !isOwnerMsg) return reply('❌ Admins only.');
      if (!isBotAdmin) return reply('❌ I need to be admin.');
      const t = mentionedJid[0] || msg.message?.extendedTextMessage?.contextInfo?.participant;
      if (!t) return reply(`❌ *${prefix}demote @user*`);
      try { await sock.groupParticipantsUpdate(from, [t], 'demote'); await reply(`⬇️ @${getNumber(t)} demoted.`); }
      catch { reply('❌ Failed.'); }
      break;
    }
    case 'mute': {
      if (!isGroup) return reply('❌ Group only.'); if (!isAdmin && !isOwnerMsg) return reply('❌ Admins only.'); if (!isBotAdmin) return reply('❌ I need to be admin.');
      try { await sock.groupSettingUpdate(from, 'announcement'); db.setGroup(from,'muted',true); await reply('🔇 Group *muted*.'); } catch { reply('❌ Failed.'); }
      break;
    }
    case 'unmute': {
      if (!isGroup) return reply('❌ Group only.'); if (!isAdmin && !isOwnerMsg) return reply('❌ Admins only.'); if (!isBotAdmin) return reply('❌ I need to be admin.');
      try { await sock.groupSettingUpdate(from, 'not_announcement'); db.setGroup(from,'muted',false); await reply('🔊 Group *unmuted*.'); } catch { reply('❌ Failed.'); }
      break;
    }
    case 'tagall': {
      if (!isGroup) return reply('❌ Group only.'); if (!isAdmin && !isOwnerMsg) return reply('❌ Admins only.');
      try { const meta = await sock.groupMetadata(from); const mentions = meta.participants.map(m=>m.id); const txt = meta.participants.map(m=>`@${getNumber(m.id)}`).join(' '); await sock.sendMessage(from, { text:`📢 *${q||'Attention!'}*\n\n${txt}`, mentions }); } catch { reply('❌ Failed.'); }
      break;
    }
    case 'hidetag': case 'tag': {
      if (!isGroup) return reply('❌ Group only.'); if (!isAdmin && !isOwnerMsg) return reply('❌ Admins only.');
      try { const meta = await sock.groupMetadata(from); const mentions = meta.participants.map(m=>m.id); await sock.sendMessage(from, { text: q||'📢 Admin message', mentions }); } catch { reply('❌ Failed.'); }
      break;
    }
    case 'antilink': {
      if (!isGroup) return reply('❌ Group only.'); if (!isAdmin && !isOwnerMsg) return reply('❌ Admins only.');
      if (!['on','off'].includes(q)) return reply(`❌ *${prefix}antilink on/off*`);
      db.setGroup(from,'antilink',q==='on'); await reply(`🔗 Anti-link *${q.toUpperCase()}*.`); break;
    }
    case 'antidelete': {
      if (!isGroup) return reply('❌ Group only.'); if (!isAdmin && !isOwnerMsg) return reply('❌ Admins only.');
      if (!['on','off'].includes(q)) return reply(`❌ *${prefix}antidelete on/off*`);
      db.setGroup(from,'antidelete',q==='on'); await reply(`🗑️ Anti-delete *${q.toUpperCase()}*.`); break;
    }
    case 'antispam': {
      if (!isGroup) return reply('❌ Group only.'); if (!isAdmin && !isOwnerMsg) return reply('❌ Admins only.');
      if (!['on','off'].includes(q)) return reply(`❌ *${prefix}antispam on/off*`);
      db.setGroup(from,'antispam',q==='on'); await reply(`🛡️ Anti-spam *${q.toUpperCase()}*.`); break;
    }
    case 'welcome': {
      if (!isGroup) return reply('❌ Group only.'); if (!isAdmin && !isOwnerMsg) return reply('❌ Admins only.');
      if (!['on','off'].includes(q)) return reply(`❌ *${prefix}welcome on/off*`);
      db.setGroup(from,'welcome',q==='on'); await reply(`👋 Welcome *${q.toUpperCase()}*.`); break;
    }
    case 'goodbye': {
      if (!isGroup) return reply('❌ Group only.'); if (!isAdmin && !isOwnerMsg) return reply('❌ Admins only.');
      if (!['on','off'].includes(q)) return reply(`❌ *${prefix}goodbye on/off*`);
      db.setGroup(from,'goodbye',q==='on'); await reply(`👋 Goodbye *${q.toUpperCase()}*.`); break;
    }
    case 'setwelcome': {
      if (!isGroup) return reply('❌ Group only.'); if (!isAdmin && !isOwnerMsg) return reply('❌ Admins only.');
      if (!q) return reply(`❌ *${prefix}setwelcome <message>*\nUse {name} and {group}`);
      db.setGroup(from,'welcomeMsg',q); await reply('✅ Custom welcome message set!'); break;
    }
    case 'setgoodbye': {
      if (!isGroup) return reply('❌ Group only.'); if (!isAdmin && !isOwnerMsg) return reply('❌ Admins only.');
      if (!q) return reply(`❌ *${prefix}setgoodbye <message>*`);
      db.setGroup(from,'goodbyeMsg',q); await reply('✅ Custom goodbye message set!'); break;
    }
    case 'link': {
      if (!isGroup) return reply('❌ Group only.'); if (!isAdmin && !isOwnerMsg) return reply('❌ Admins only.');
      try { const code = await sock.groupInviteCode(from); await reply(`🔗 https://chat.whatsapp.com/${code}`); } catch { reply('❌ I need to be admin.'); } break;
    }
    case 'revoke': {
      if (!isGroup) return reply('❌ Group only.'); if (!isAdmin && !isOwnerMsg) return reply('❌ Admins only.'); if (!isBotAdmin) return reply('❌ I need to be admin.');
      try { await sock.groupRevokeInvite(from); await reply('✅ Link revoked!'); } catch { reply('❌ Failed.'); } break;
    }
    case 'ginfo': {
      if (!isGroup) return reply('❌ Group only.');
      try {
        const meta = await sock.groupMetadata(from);
        const admins = meta.participants.filter(p=>p.admin);
        await sock.sendMessage(from, {
          text:`╔══❰ 📊 *GROUP INFO* ❱══╗\n║ 📝 ${meta.subject}\n║ 👤 Members: ${meta.participants.length}\n║ 📅 Created: ${new Date(meta.creation*1000).toLocaleDateString()}\n║ 📋 ${(meta.desc||'No description').substring(0,80)}\n║\n║ 👑 Admins:\n${admins.map(a=>`• @${getNumber(a.id)}`).join('\n')}\n╚════════════════════╝`,
          mentions: admins.map(a=>a.id),
        });
      } catch { reply('❌ Failed.'); }
      break;
    }
    case 'poll': {
      if (!isGroup) return reply('❌ Group only.');
      if (!q) return reply(`❌ *${prefix}poll Question|Option1|Option2*`);
      const parts2 = q.split('|'); if (parts2.length < 3) return reply('❌ Need a question and at least 2 options.');
      const [question, ...options] = parts2;
      try { await sock.sendMessage(from, { poll: { name: question.trim(), values: options.map(o=>o.trim()), selectableCount: 1 } }); }
      catch { reply('❌ Poll failed.'); } break;
    }
    case 'gcpp': {
      if (!isGroup) return reply('❌ Group only.'); if (!isAdmin && !isOwnerMsg) return reply('❌ Admins only.'); if (!isBotAdmin) return reply('❌ I need to be admin.');
      const qMsg2 = msg.message?.extendedTextMessage?.contextInfo?.quotedMessage;
      const imgMsg2 = qMsg2?.imageMessage || msg.message?.imageMessage;
      if (!imgMsg2) return reply('❌ Reply to or send an image.');
      try { const s = await sock.downloadMediaMessage(msg); await sock.updateProfilePicture(from, Buffer.from(s)); await reply('✅ Group photo updated!'); } catch { reply('❌ Failed.'); } break;
    }
    case 'updategname': {
      if (!isGroup) return reply('❌ Group only.'); if (!isAdmin && !isOwnerMsg) return reply('❌ Admins only.'); if (!isBotAdmin) return reply('❌ I need to be admin.');
      if (!q) return reply(`❌ *${prefix}updategname <name>*`);
      try { await sock.groupUpdateSubject(from, q); await reply(`✅ Group name: *${q}*`); } catch { reply('❌ Failed.'); } break;
    }
    case 'updategdesc': {
      if (!isGroup) return reply('❌ Group only.'); if (!isAdmin && !isOwnerMsg) return reply('❌ Admins only.'); if (!isBotAdmin) return reply('❌ I need to be admin.');
      if (!q) return reply(`❌ *${prefix}updategdesc <desc>*`);
      try { await sock.groupUpdateDescription(from, q); await reply('✅ Description updated!'); } catch { reply('❌ Failed.'); } break;
    }
    case 'autoapprove': {
      if (!isGroup) return reply('❌ Group only.'); if (!isAdmin && !isOwnerMsg) return reply('❌ Admins only.');
      if (!['on','off'].includes(q)) return reply(`❌ *${prefix}autoapprove on/off*`);
      db.setGroup(from,'autoapprove',q==='on'); await reply(`✅ Auto-approve *${q.toUpperCase()}*.`); break;
    }
    case 'acceptall': {
      if (!isGroup) return reply('❌ Group only.'); if (!isAdmin && !isOwnerMsg) return reply('❌ Admins only.');
      try { const reqs = await sock.groupRequestParticipantsList(from); if (!reqs.length) return reply('✅ No pending requests.'); await sock.groupRequestParticipantsUpdate(from, reqs.map(r=>r.jid), 'approve'); await reply(`✅ Approved ${reqs.length} requests.`); } catch { reply('❌ Failed.'); } break;
    }
    case 'rejectall': {
      if (!isGroup) return reply('❌ Group only.'); if (!isAdmin && !isOwnerMsg) return reply('❌ Admins only.');
      try { const reqs = await sock.groupRequestParticipantsList(from); if (!reqs.length) return reply('✅ No pending requests.'); await sock.groupRequestParticipantsUpdate(from, reqs.map(r=>r.jid), 'reject'); await reply(`✅ Rejected ${reqs.length} requests.`); } catch { reply('❌ Failed.'); } break;
    }
    case 'requests': {
      if (!isGroup) return reply('❌ Group only.'); if (!isAdmin && !isOwnerMsg) return reply('❌ Admins only.');
      try { const reqs = await sock.groupRequestParticipantsList(from); if (!reqs.length) return reply('✅ No pending requests.'); await reply(`📋 *Pending (${reqs.length}):*\n\n${reqs.map((r,i)=>`${i+1}. +${getNumber(r.jid)}`).join('\n')}`); } catch { reply('❌ Failed.'); } break;
    }
    case 'newgc': {
      if (!isOwnerMsg && !isSudo) return reply('❌ Owner only.');
      if (!q) return reply(`❌ *${prefix}newgc <name>*`);
      try { const bot = sock.user.id.replace(/:\d+/,'')+'@s.whatsapp.net'; await sock.groupCreate(q,[bot,formatPhone(config.ownerNumber)]); await reply(`✅ Group *${q}* created!`); } catch { reply('❌ Failed.'); } break;
    }
    case 'join': {
      if (!isOwnerMsg && !isSudo) return reply('❌ Owner only.');
      if (!q) return reply(`❌ *${prefix}join <invite link>*`);
      try { const code = q.split('chat.whatsapp.com/')[1]; if (!code) return reply('❌ Invalid link.'); await sock.groupAcceptInvite(code); await reply('✅ Joined!'); } catch { reply('❌ Failed to join.'); } break;
    }
    case 'leave': case 'out': {
      if (!isOwnerMsg) return reply('❌ Owner only.'); if (!isGroup) return reply('❌ Not in a group.');
      await reply('👋 Leaving...'); await sleep(1000); try { await sock.groupLeave(from); } catch {} break;
    }

    // ══════════════════════════════════════════════════════
    //  OWNER COMMANDS
    // ══════════════════════════════════════════════════════
    case 'pair': {
      if (!q) return reply(`❌ *${prefix}pair 263xxxxxxxxx*`);
      try {
        const num = q.replace(/[^0-9]/g,'');
        const code = await sock.requestPairingCode(num);
        await reply(`╔══❰ 🔗 *PAIRING CODE* ❱══╗\n║ 📱 *Number:* +${num}\n║ 🔐 *Code:* *${code}*\n║\n║ 📋 Steps:\n║ 1. Open WhatsApp\n║ 2. Settings → Linked Devices\n║ 3. Link a Device\n║ 4. Enter: *${code}*\n║ ⏰ Expires in 60 seconds\n╚════════════════════╝\n🇿🇼 Malvin C VME`);
      } catch(e) { reply('❌ Pairing failed: ' + e.message); }
      break;
    }
    case 'broadcast': case 'bc': {
      if (!isOwnerMsg) return reply('❌ Owner only.'); if (!q) return reply(`❌ *${prefix}broadcast <msg>*`);
      try { const chats = await sock.groupFetchAllParticipating(); let sent=0; for (const id of Object.keys(chats)){try{await sock.sendMessage(id,{text:`📢 *Broadcast:*\n\n${q}\n\n🇿🇼 Malvin C VME`});sent++;await sleep(700);}catch{}} await reply(`✅ Sent to *${sent}* groups.`); } catch { reply('❌ Failed.'); } break;
    }
    case 'ban': {
      if (!isOwnerMsg && !isSudo) return reply('❌ Owner only.');
      const t = mentionedJid[0] || (q ? formatPhone(q) : null);
      if (!t) return reply(`❌ *${prefix}ban @user*`);
      db.banUser(getNumber(t)); await reply(`⛔ +${getNumber(t)} banned.`); break;
    }
    case 'unban': case 'unban2': case 'unban3': case 'unban4': case 'unban5':
    case 'unban6': case 'unban7': case 'unban8': case 'unban9': case 'unban10':
    case 'unban11': case 'unban12': case 'unban13': case 'unban14': case 'unban15':
    case 'unban16': case 'unban17': case 'unban18': case 'unban19': case 'unban20':
    case 'unban21': case 'unban22': case 'unban23': case 'unban24': case 'unban25':
    case 'unban26': case 'unban27': case 'unban28': case 'unban29': case 'unban30':
    case 'unban31': case 'unban32': case 'unban33': case 'unban34': case 'unban35':
    case 'unban36': case 'unban37': case 'unban38': case 'unban39': case 'unban40':
    case 'unban41': case 'unban42': case 'unban43': case 'unban44': case 'unban45':
    case 'unban46': case 'unban47': case 'unban48': {
      if (!isOwnerMsg && !isSudo) return reply('❌ Owner only.');
      const t = mentionedJid[0] || (q ? formatPhone(q) : null);
      if (!t) return reply(`❌ *${prefix}unban @user* or *${prefix}unban <number>*`);
      db.unbanUser(getNumber(t)); await reply(`✅ +${getNumber(t)} unbanned.`); break;
    }
    case 'unbanlist': { if (!isOwnerMsg && !isSudo) return reply('❌ Owner only.'); const b=db.listBanned(); await reply(b.length?`⛔ *Banned (${b.length}):*\n\n${b.map((n,i)=>`${i+1}. +${n}`).join('\n')}`:'✅ No banned users.'); break; }
    case 'unbanguide': await reply(`📖 *Unban Guide:*\n\n1. *${prefix}banlist* — see banned\n2. *${prefix}unban @user* — unban by mention\n3. *${prefix}unban 263xxxxxxx* — by number\n🇿🇼 Malvin C VME`); break;
    case 'banlist': { if (!isOwnerMsg && !isSudo) return reply('❌ Owner only.'); const b=db.listBanned(); await reply(b.length?`⛔ *Banned (${b.length}):*\n\n${b.map((n,i)=>`${i+1}. +${n}`).join('\n')}`:'✅ No banned users.'); break; }
    case 'sudo': { if (!isOwnerMsg) return reply('❌ Owner only.'); const t=mentionedJid[0]||(q?formatPhone(q):null); if (!t) return reply(`❌ *${prefix}sudo @user*`); db.addSudo(getNumber(t)); await reply(`✅ +${getNumber(t)} added as sudo.`); break; }
    case 'delsudo': { if (!isOwnerMsg) return reply('❌ Owner only.'); const t=mentionedJid[0]||(q?formatPhone(q):null); if (!t) return reply(`❌ *${prefix}delsudo @user*`); db.removeSudo(getNumber(t)); await reply(`✅ +${getNumber(t)} removed from sudo.`); break; }
    case 'sudolist': { if (!isOwnerMsg && !isSudo) return reply('❌ Owner only.'); const s=db.listSudo(); await reply(s.length?`🛡️ *Sudo (${s.length}):*\n\n${s.map((n,i)=>`${i+1}. +${n}`).join('\n')}`:'No sudo users.'); break; }
    case 'block': { if (!isOwnerMsg) return reply('❌ Owner only.'); const t=mentionedJid[0]||(q?formatPhone(q):null); if (!t) return reply(`❌ *${prefix}block @user*`); try{await sock.updateBlockStatus(t,'block');await reply(`✅ +${getNumber(t)} blocked.`);}catch{reply('❌ Failed.');} break; }
    case 'unblock': { if (!isOwnerMsg) return reply('❌ Owner only.'); const t=mentionedJid[0]||(q?formatPhone(q):null); if (!t) return reply(`❌ *${prefix}unblock @user*`); try{await sock.updateBlockStatus(t,'unblock');await reply(`✅ +${getNumber(t)} unblocked.`);}catch{reply('❌ Failed.');} break; }
    case 'mode': { if (!isOwnerMsg) return reply('❌ Owner only.'); if (!['public','private'].includes(q)) return reply(`❌ *${prefix}mode public/private*`); config.mode=q; await reply(`⚙️ Mode: *${q.toUpperCase()}*`); break; }
    case 'setprefix': { if (!isOwnerMsg) return reply('❌ Owner only.'); if (!q) return reply(`❌ *${prefix}setprefix <new>*`); config.prefix=q; await reply(`✅ Prefix → *${q}*`); break; }
    case 'setbotname': { if (!isOwnerMsg) return reply('❌ Owner only.'); if (!q) return reply(`❌ *${prefix}setbotname <name>*`); config.botName=q; mc.set('botName',q); await reply(`✅ Bot name → *${q}*`); break; }
    case 'botdp': {
      if (!isOwnerMsg) return reply('❌ Owner only.');
      const qMsg3=msg.message?.extendedTextMessage?.contextInfo?.quotedMessage;
      const imgMsg3=qMsg3?.imageMessage||msg.message?.imageMessage;
      if (!imgMsg3) return reply('❌ Reply to or send an image.');
      try{const s=await sock.downloadMediaMessage(msg);await sock.updateProfilePicture(sock.user.id,Buffer.from(s));await reply('✅ Bot profile picture updated!');}catch{reply('❌ Failed.');} break;
    }
    case 'restart': { if (!isOwnerMsg) return reply('❌ Owner only.'); await reply('🔄 Restarting...'); await sleep(1000); process.exit(0); break; }
    case 'vv': {
      if (!isOwnerMsg && !isSudo) return reply('❌ Owner only.');
      const qMsg4=msg.message?.extendedTextMessage?.contextInfo?.quotedMessage;
      const vm=qMsg4?.viewOnceMessage?.message||msg.message?.viewOnceMessage?.message;
      if (!vm) return reply('❌ Reply to a view-once message.');
      try{const s=await sock.downloadMediaMessage({message:vm});const isVid=!!vm.videoMessage;await sock.sendMessage(from,isVid?{video:Buffer.from(s),caption:'👁️ View Once\n🇿🇼 Malvin C VME'}:{image:Buffer.from(s),caption:'👁️ View Once\n🇿🇼 Malvin C VME'},{quoted:msg});}catch{reply('❌ Failed.'); }
      break;
    }
    case 'send': case 'msg': {
      if (!isOwnerMsg && !isSudo) return reply('❌ Owner only.');
      if (args.length < 2) return reply(`❌ *${prefix}send <number> <msg>*`);
      const [num,...msgParts]=args; try{await sock.sendMessage(formatPhone(num),{text:msgParts.join(' ')});await reply(`✅ Sent to +${num}`);}catch{reply('❌ Failed.');} break;
    }
    case 'repeat': { if (!q) return reply(`❌ *${prefix}repeat <text>*`); await reply(q); break; }

    // ══════════════════════════════════════════════════════
    //  SETTINGS
    // ══════════════════════════════════════════════════════
    case 'autoread': { if (!isOwnerMsg && !isSudo) return reply('❌ Owner only.'); if (!['on','off'].includes(q)) return reply(`❌ on/off`); config.defaults.autoread=q==='on'; await reply(`📖 Auto-read *${q.toUpperCase()}*`); break; }
    case 'autotyping': { if (!isOwnerMsg && !isSudo) return reply('❌ Owner only.'); if (!['on','off'].includes(q)) return reply(`❌ on/off`); config.defaults.autotyping=q==='on'; await reply(`✍️ Auto-typing *${q.toUpperCase()}*`); break; }
    case 'autorecording': { if (!isOwnerMsg && !isSudo) return reply('❌ Owner only.'); if (!['on','off'].includes(q)) return reply(`❌ on/off`); config.defaults.autorecording=q==='on'; await reply(`🎙️ Auto-recording *${q.toUpperCase()}*`); break; }
    case 'autoreact': { if (!isOwnerMsg && !isSudo) return reply('❌ Owner only.'); if (!['on','off'].includes(q)) return reply(`❌ on/off`); config.defaults.autoreact=q==='on'; await reply(`😊 Auto-react *${q.toUpperCase()}*`); break; }
    case 'statusview': { if (!isOwnerMsg) return reply('❌ Owner only.'); if (!['on','off'].includes(q)) return reply(`❌ on/off`); config.defaults.statusView=q==='on'; await reply(`👁️ Status view *${q.toUpperCase()}*`); break; }
    case 'statuslike': { if (!isOwnerMsg) return reply('❌ Owner only.'); if (!['on','off'].includes(q)) return reply(`❌ on/off`); config.defaults.statusLike=q==='on'; await reply(`❤️ Status like *${q.toUpperCase()}*`); break; }
    case 'anticall': { if (!isOwnerMsg) return reply('❌ Owner only.'); if (!['on','off'].includes(q)) return reply(`❌ on/off`); config.defaults.anticall=q==='on'; await reply(`📵 Anti-call *${q.toUpperCase()}*`); break; }
    case 'online': { if (!isOwnerMsg) return reply('❌ Owner only.'); if (!['on','off'].includes(q)) return reply(`❌ on/off`); config.defaults.alwaysOnline=q==='on'; if(q==='on') await sock.sendPresenceUpdate('available',from); await reply(`🟢 Always-online *${q.toUpperCase()}*`); break; }
    case 'settings': {
      if (!isOwnerMsg && !isSudo) return reply('❌ Owner only.');
      await reply(`╔══❰ ⚙️ *SETTINGS* ❱══╗\n║ 📦 Prefix: ${config.prefix}\n║ ⚙️ Mode: ${config.mode}\n║ 🤖 Bot: ${config.botName}\n║ 📖 Autoread: ${config.defaults.autoread?'ON':'OFF'}\n║ ✍️ Autotyping: ${config.defaults.autotyping?'ON':'OFF'}\n║ 😊 Autoreact: ${config.defaults.autoreact?'ON':'OFF'}\n║ 📵 Anticall: ${config.defaults.anticall?'ON':'OFF'}\n║ 👁️ Statusview: ${config.defaults.statusView?'ON':'OFF'}\n╚════════════════════╝`);
      break;
    }

    // ══════════════════════════════════════════════════════
    //  ADMIN TOOLS
    // ══════════════════════════════════════════════════════
    case 'del': case 'delete': {
      if (!isAdmin && !isOwnerMsg) return reply('❌ Admins only.'); if (!isBotAdmin) return reply('❌ I need to be admin.');
      const ctx = msg.message?.extendedTextMessage?.contextInfo; if (!ctx?.stanzaId) return reply('❌ Reply to the message to delete.');
      try{await sock.sendMessage(from,{delete:{remoteJid:from,fromMe:false,id:ctx.stanzaId,participant:ctx.participant}});}catch{reply('❌ Failed.');} break;
    }
    case 'warn': {
      if (!isAdmin && !isOwnerMsg) return reply('❌ Admins only.');
      const t=mentionedJid[0]||msg.message?.extendedTextMessage?.contextInfo?.participant; if (!t) return reply(`❌ *${prefix}warn @user*`);
      const w=db.warnUser(getNumber(t)); if(w>=3){db.banUser(getNumber(t));await reply(`⛔ @${getNumber(t)} *banned* for 3 warnings!`);}else await reply(`⚠️ @${getNumber(t)} warned! *${w}/3*`); break;
    }
    case 'warns': { const t=mentionedJid[0]||(q?formatPhone(q):sender); await reply(`⚠️ @${getNumber(t)} has *${db.getWarns(getNumber(t))}/3* warnings.`); break; }
    case 'resetwarn': {
      if (!isAdmin && !isOwnerMsg) return reply('❌ Admins only.');
      const t=mentionedJid[0]||msg.message?.extendedTextMessage?.contextInfo?.participant; if (!t) return reply(`❌ *${prefix}resetwarn @user*`);
      db.resetWarns(getNumber(t)); await reply(`✅ Warnings reset for @${getNumber(t)}.`); break;
    }
    case 'getpp': case 'pfp': {
      const t=mentionedJid[0]||(q?formatPhone(q):sender);
      try{const url=await sock.profilePictureUrl(t,'image');await sendImg(url,`🖼️ Profile Picture\n+${getNumber(t)}\n🇿🇼 Malvin C VME`);}catch{reply('❌ No profile picture or privacy is on.');} break;
    }

    // ══════════════════════════════════════════════════════
    //  FUN COMMANDS
    // ══════════════════════════════════════════════════════
    case 'joke': {
      try{const r=await axios.get('https://official-joke-api.appspot.com/random_joke',{timeout:8000});await reply(`😂 *Joke:*\n\n${r.data.setup}\n\n${r.data.punchline} 😆`);}
      catch{await reply(`😂 ${pickRandom(['Why do programmers prefer dark mode? Light attracts bugs! 🐛','Why did the bot go to school? To improve its language model! 🤖','Why was the coder calm? He handled exceptions! 😎'])}`);}
      break;
    }
    case 'quote': {
      try{const r=await axios.get('https://api.quotable.io/random',{timeout:8000});await reply(`💬 *"${r.data.content}"*\n\n— *${r.data.author}*`);}
      catch{await reply(`💬 "${pickRandom(['"The best way to predict the future is to invent it.','First solve the problem. Then write the code.','Excellence is not a skill. It\'s an attitude.'])}"`);} break;
    }
    case 'fact': {
      try{const r=await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en',{timeout:8000});await reply(`🤓 *Fact:*\n\n${r.data.text}`);}
      catch{await reply(`🤓 ${pickRandom(['Honey never spoils. 3000yr old honey was found in Egyptian tombs.','A group of flamingos is called a flamboyance.','Octopuses have three hearts and blue blood.'])}`);}
      break;
    }
    case 'roast': { const t=mentionedJid[0]?`@${getNumber(mentionedJid[0])}`:q||pushName; await reply(`🔥 *Roast:*\n\n${t}, ${pickRandom(['your WiFi password is longer than your attention span.','you are the reason warning labels exist.','even Google can\'t find a good side of you.','I\'ve seen better-looking bugs in my code.','you are like a software update — everyone ignores you.'])}`); break; }
    case 'compliment': case 'compliment2': { const t=mentionedJid[0]?`@${getNumber(mentionedJid[0])}`:q||pushName; await reply(`💝 ${t}, ${pickRandom(['you light up every room you enter! ✨','you are genuinely one of the kindest souls around. 💚','you make this group 10x better just by being here. 🌟','your smile could power a whole city! ☀️'])}`); break; }
    case 'ship': { const n1=mentionedJid[0]?getNumber(mentionedJid[0]):args[0]||'Person1'; const n2=mentionedJid[1]?getNumber(mentionedJid[1]):args[1]||'Person2'; const sc=randInt(1,100); await reply(`💞 *SHIP METER*\n\n👤 ${n1} + 👤 ${n2}\n\n${'█'.repeat(Math.floor(sc/10))}${'░'.repeat(10-Math.floor(sc/10))} ${sc}%\n\n${sc>80?'💕 Perfect match!':sc>60?'❤️ Great chemistry!':sc>40?'💛 Could work!':'💀 Hmm...'}`); break; }
    case 'lovetest': case 'lovecalc2': { const t=mentionedJid[0]?`@${getNumber(mentionedJid[0])}`:q||'someone'; const sc=randInt(1,100); await reply(`💕 *LOVE TEST*\n\nYou ❤️ ${t}\n\n${'❤️'.repeat(Math.floor(sc/10))}${'🖤'.repeat(10-Math.floor(sc/10))}\n*${sc}%*\n\n${sc>80?'💍 Marry them!':sc>60?'💞 Strong feelings!':sc>40?'💛 There is a spark.':'😅 Maybe friends.'}`); break; }
    case '8ball': { if(!q) return reply(`❌ *${prefix}8ball <question>*`); await reply(`🎱 *${q}*\n\n🎱 ${pickRandom(['✅ It is certain.','✅ Without a doubt.','✅ Yes definitely!','✅ Most likely.','🤔 Ask again later.','🤔 Better not tell you now.','❌ Don\'t count on it.','❌ My sources say no.','❌ Very doubtful.'])}`); break; }
    case 'coinflip': case 'flip': await reply(`🪙 *Coin Flip:* ${Math.random()<0.5?'*HEADS* 🪙':'*TAILS* 🪙'}`); break;
    case 'dice': { const r=randInt(1,6); await reply(`🎲 You rolled: *${r}* ${'⚀⚁⚂⚃⚄⚅'[r-1]}`); break; }
    case 'rate': { if(!q) return reply(`❌ *${prefix}rate <anything>*`); const sc=randInt(1,10); await reply(`⭐ *RATE-O-METER*\n\n📊 *${q}*\n\n${'⭐'.repeat(sc)}${'☆'.repeat(10-sc)}\nScore: *${sc}/10*\n\n${sc>=9?'🏆 GOAT!':sc>=7?'✅ Good!':sc>=5?'🤷 Mid.':sc>=3?'😬 Yikes.':'💀 Not it.'}`); break; }
    case 'truth': await reply(`💭 *Truth:*\n\n${pickRandom(['What is your biggest fear?','Have you ever lied to your best friend?','What is your most embarrassing moment?','Who do you have a crush on?','What is the worst thing you have ever done?','What is something you have never told anyone?','What is your biggest regret?'])}`); break;
    case 'dare': await reply(`🎯 *Dare:*\n\n${pickRandom(['Send a voice note saying "I love Malvin C VME!" 🤖','Change your profile picture to something funny for 1 hour.','Do 20 push-ups right now. 💪','Send a selfie with a funny face.','Set your status to "I love bots" for 30 minutes.','Record a 10-second video of you dancing and send it.'])}`); break;
    case 'pickupline': await reply(`😘 *Pick-Up Line:*\n\n${pickRandom(['Are you a Wi-Fi signal? I feel a strong connection. 📶','Are you a keyboard? You are just my type. ⌨️','Is your name Google? You have everything I have been searching for. 🔍','Are you a bot? You have automated my heartbeat. 🤖❤️'])}`); break;
    case 'horoscope': { const signs=['aries','taurus','gemini','cancer','leo','virgo','libra','scorpio','sagittarius','capricorn','aquarius','pisces']; const sign=q?.toLowerCase(); if(!sign||!signs.includes(sign)) return reply(`❌ *${prefix}horoscope <sign>*\nSigns: ${signs.join(', ')}`); await reply(`♈ *${capitalize(sign)} Horoscope*\n\n${pickRandom(['The stars align in your favor today! ✨','A new opportunity is coming. Stay open! 🌟','Love is in the air. Listen to your heart. 💕','Financial luck smiles on you! 💰'])}\n\n🌟 Lucky Number: ${randInt(1,99)}\n🌈 Lucky Color: ${pickRandom(['Red','Blue','Green','Gold','Purple','White'])}\n🇿🇼 Malvin C VME`); break; }
    case 'hack': { const t=mentionedJid[0]?`@${getNumber(mentionedJid[0])}`:q||'target'; await reply(`💻 Initiating hack on ${t}...`); await sleep(1000);await reply(`🔓 Breaking firewall...`);await sleep(1000);await reply(`📁 Downloading files...`);await sleep(1000);await reply(`✅ *HACK COMPLETE!*\n\nTarget: ${t}\nFiles: ${randInt(100,9999)}\nPasswords: ${randInt(1,50)}\n\n😂 *Just kidding! Hacking is illegal.*\n🇿🇼 Malvin C VME`); break; }
    case 'aura': { const t=mentionedJid[0]?`@${getNumber(mentionedJid[0])}`:q||pushName; await reply(`✨ *AURA READING*\n\n👤 ${t}\n🎨 Aura: *${pickRandom(['Red 🔴 Passionate','Blue 🔵 Calm','Gold 🟡 Joyful','Purple 🟣 Mysterious','Rainbow 🌈 Unique'])}*\n⚡ Energy: *${randInt(60,100)}%*\n💫 Vibe: *${pickRandom(['Positive','Radiant','Calm','Electric','Playful'])}*\n🇿🇼 Malvin C VME`); break; }
    case 'rizz': await reply(`😎 *${pushName}'s Rizz Level:*\n\n*${randInt(60,100)}%*\nType: *${pickRandom(['Silent Rizz 🤫','Verbal Rizz 🗣️','Natural Rizz 🌊','W Rizz 💯'])}*\n🇿🇼 Malvin C VME`); break;
    case 'sigma': await reply(`😤 *${pushName}'s Sigma Level:*\n\n*${randInt(70,100)}%*\n${pickRandom(['You walk alone and win alone. 🐺','Silent but deadly. 🤫','You do not need validation. 💯'])}\n🇿🇼 Malvin C VME`); break;
    case 'glow': await reply(`✨ *${pushName}'s Glow Up:*\n\n*${randInt(70,100)}%* ✨\nType: *${pickRandom(['Physical 💅','Mental 🧠','Spiritual 🙏','Financial 💰','Full Glow 🏆'])}*\nETA: *${randInt(1,6)} months*\n🇿🇼 Malvin C VME`); break;
    case 'personalitytest': await reply(`🧠 *${pushName}'s Personality:*\n\n*${pickRandom(['INTJ — The Mastermind','ENFP — The Champion','ISTJ — The Inspector','ESTP — The Dynamo','INFJ — The Counselor'])}*\n\n💪 Strength: ${pickRandom(['Leadership','Creativity','Logic','Empathy'])}\n🇿🇼 Malvin C VME`); break;
    case 'superpower': await reply(`⚡ *${pushName}'s Superpower:*\n\n*${pickRandom(['Telekinesis 🧠','Time Control ⏰','Invisibility 👻','Super Speed ⚡','Mind Reading 🔮','Healing 💚','Flight ✈️'])}*\n\nStrength: *${randInt(80,100)}%*\n🇿🇼 Malvin C VME`); break;
    case 'pastlife': await reply(`🌀 *${pushName}'s Past Life:*\n\nYou were a:\n*${pickRandom(['Ancient Egyptian Pharaoh 👑','Viking Warrior ⚔️','African King 🌍','Medieval Knight 🛡️','Greek Philosopher 📜','Japanese Samurai 🗡️'])}*\n🇿🇼 Malvin C VME`); break;
    case 'whatanimal': await reply(`🦁 *${pushName}, you are a:*\n\n*${pickRandom(['Lion 🦁 — Born leader','Dolphin 🐬 — Playful and smart','Eagle 🦅 — Visionary','Wolf 🐺 — Loyal','Elephant 🐘 — Wise','Fox 🦊 — Clever','Owl 🦉 — Mysterious'])}*\n🇿🇼 Malvin C VME`); break;
    case 'motivate': await reply(`💪 *Motivation for ${pushName}:*\n\n${pickRandom(['Every expert was once a beginner. Keep going. 🌱','Your only limit is your mind. Break it. ⚡','Small daily improvements lead to stunning results. 📈','You are closer than you think. Do not stop now. 🎯'])}\n🇿🇼 Malvin C VME`); break;

    // ══════════════════════════════════════════════════════
    //  GAMES
    // ══════════════════════════════════════════════════════
    case 'rps': { const choices=['rock','paper','scissors']; const icons={rock:'🪨',paper:'📄',scissors:'✂️'}; const bot=pickRandom(choices); const player=q?.toLowerCase(); if(!choices.includes(player)) return reply(`❌ *${prefix}rps rock/paper/scissors*`); let res; if(player===bot)res='*Tie!* 🤝';else if((player==='rock'&&bot==='scissors')||(player==='paper'&&bot==='rock')||(player==='scissors'&&bot==='paper'))res='You *Win!* 🎉';else res='You *Lose!* 😂'; await reply(`✂️ *Rock Paper Scissors!*\n\n🙋 You: ${icons[player]}\n🤖 Bot: ${icons[bot]}\n\n${res}`); break; }
    case 'riddle': { const riddles=[{q:'I speak without a mouth. I hear without ears. I come alive with wind. What am I?',a:'An echo'},{q:'The more you take, the more you leave behind. What am I?',a:'Footsteps'},{q:'What has hands but cannot clap?',a:'A clock'},{q:'What gets wetter as it dries?',a:'A towel'}]; const r=pickRandom(riddles); await reply(`🤔 *Riddle:*\n\n${r.q}\n\n_Reply with your answer!_\n\n💡 Answer: ||${r.a}||`); break; }
    case 'trivia': case 'quiz': { const qs=[{q:'Capital of Zimbabwe?',a:'Harare'},{q:'7 × 8 = ?',a:'56'},{q:'The Red Planet?',a:'Mars'},{q:'Who wrote Romeo and Juliet?',a:'Shakespeare'},{q:'Largest ocean?',a:'Pacific'},{q:'Chemical symbol for Gold?',a:'Au'}]; const r=pickRandom(qs); await reply(`❓ *Trivia:*\n\n${r.q}\n\n_Reply your answer!_\n\n✅ Answer: ||${r.a}||`); break; }
    case 'mathquiz': { const a=randInt(1,20),b=randInt(1,20); const ops=['+','-','×']; const op=pickRandom(ops); const ans=op==='+'?a+b:op==='-'?a-b:a*b; await reply(`🧮 *Math Quiz:*\n\n${a} ${op} ${b} = ?\n\n_Reply your answer!_\n\n✅ Answer: ||${ans}||`); break; }
    case 'wordscramble': { const words=['ZIMBABWE','HARARE','PYTHON','JAVASCRIPT','WHATSAPP','BAILEYS','ANDROID','HANDSOME']; const w=pickRandom(words); const sc=w.split('').sort(()=>Math.random()-0.5).join(''); await reply(`🔤 *Word Scramble:*\n\nUnscramble: *${sc}*\n\n_Reply your answer!_\n\n✅ Answer: ||${w}||`); break; }

    // ══════════════════════════════════════════════════════
    //  UTILITY
    // ══════════════════════════════════════════════════════
    case 'weather': {
      if (!q) return reply(`❌ *${prefix}weather <city>*`);
      await reply(`🌤️ Fetching weather for *${q}*...`);
      try {
        const r = await axios.get(`https://wttr.in/${encodeURIComponent(q)}?format=j1`, { timeout: 10000 });
        const d = r.data?.current_condition?.[0];
        const area = r.data?.nearest_area?.[0];
        await reply(`╔══❰ 🌤️ *WEATHER* ❱══╗\n║ 📍 ${area?.areaName?.[0]?.value}, ${area?.country?.[0]?.value}\n║ 🌡️ ${d?.temp_C}°C / ${d?.temp_F}°F\n║ 💧 Humidity: ${d?.humidity}%\n║ 💨 Wind: ${d?.windspeedKmph} km/h\n║ ☁️ ${d?.weatherDesc?.[0]?.value}\n║ 🌡️ Feels like: ${d?.FeelsLikeC}°C\n╚════════════════════╝\n🇿🇼 Malvin C VME`);
      } catch { reply('❌ Weather failed. Check city name.'); }
      break;
    }
    case 'news': {
      await reply('📰 Fetching news...');
      try {
        const r = await axios.get('https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=demo', { timeout: 10000 });
        const articles = r.data?.articles?.slice(0,5);
        if (!articles?.length) throw new Error();
        await reply(`📰 *Top Headlines:*\n\n${articles.map((a,i)=>`${i+1}. *${a.title}*\n   📰 ${a.source?.name}`).join('\n\n')}\n🇿🇼 Malvin C VME`);
      } catch { reply('❌ Add a valid NEWS_API_KEY in config for real news.'); }
      break;
    }
    case 'wikipedia': case 'wiki': {
      if (!q) return reply(`❌ *${prefix}wiki <topic>*`);
      try {
        const r = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(q)}`, { timeout: 10000 });
        await reply(`📚 *${r.data.title}*\n\n${r.data.extract?.substring(0,700)}...\n\n🔗 ${r.data.content_urls?.desktop?.page}`);
      } catch { reply('❌ Not found.'); }
      break;
    }
    case 'define': {
      if (!q) return reply(`❌ *${prefix}define <word>*`);
      try {
        const r = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(q)}`, { timeout: 10000 });
        const e=r.data?.[0]; const m=e?.meanings?.[0]; const d=m?.definitions?.[0];
        await reply(`📖 *${e?.word}* (${m?.partOfSpeech})\n\n${d?.definition}\n\n${d?.example?`💬 "${d.example}"`:''}`);
      } catch { reply('❌ Not found.'); }
      break;
    }
    case 'qr': {
      if (!q) return reply(`❌ *${prefix}qr <text>*`);
      try { await sendImg(`https://api.qrserver.com/v1/create-qr-code/?size=512x512&data=${encodeURIComponent(q)}`, `📱 QR: ${shorten(q,40)}\n🇿🇼 Malvin C VME`); }
      catch { reply('❌ QR generation failed.'); }
      break;
    }
    case 'base64': { if(!q) return reply(`❌ *${prefix}base64 <text>*`); await reply(`🔐 *Encoded:*\n\n\`${Buffer.from(q).toString('base64')}\``); break; }
    case 'unbase64': { if(!q) return reply(`❌ *${prefix}unbase64 <base64>*`); try{await reply(`🔓 *Decoded:*\n\n${Buffer.from(q,'base64').toString('utf8')}`);}catch{reply('❌ Invalid.');} break; }
    case 'binary': { if(!q) return reply(`❌ *${prefix}binary <text>*`); await reply(`💻 *Binary:*\n\n\`${q.split('').map(c=>c.charCodeAt(0).toString(2).padStart(8,'0')).join(' ')}\``); break; }
    case 'dbinary': case 'unbinary': { if(!q) return reply(`❌ *${prefix}dbinary <binary>*`); try{await reply(`🔓 *Decoded:*\n\n${q.split(' ').map(b=>String.fromCharCode(parseInt(b,2))).join('')}`);}catch{reply('❌ Invalid.');} break; }
    case 'url': { if(!q) return reply(`❌ *${prefix}url <long URL>*`); try{const r=await axios.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(q)}`,{timeout:8000});await reply(`🔗 *Shortened:*\n\n${r.data}`);}catch{reply('❌ Failed.');} break; }
    case 'github': { if(!q) return reply(`❌ *${prefix}github <username>*`); try{const r=await axios.get(`https://api.github.com/users/${encodeURIComponent(q)}`,{timeout:10000});const u=r.data;await reply(`╔══❰ 🐙 *GITHUB* ❱══╗\n║ 👤 ${u.name||u.login}\n║ 📝 ${u.bio||'No bio'}\n║ 👥 Followers: ${u.followers}\n║ 📦 Repos: ${u.public_repos}\n║ 🌍 ${u.location||'Unknown'}\n║ 🔗 ${u.html_url}\n╚════════════════════╝\n🇿🇼 Malvin C VME`);}catch{reply(`❌ User "${q}" not found.`);} break; }

    // Respect commands
    case 'respect': case 'salute': await praise('RESPECT','🫡'); break;
    case 'salam': case 'adab': await praise('AS-SALAMU ALAYKUM','🤲'); break;
    case 'jazakallah': await praise('JAZAKALLAH KHAIR','🤲'); break;
    case 'thankyou': case 'shukria': await praise('THANK YOU','🙏'); break;
    case 'mashallah': await praise('MASHALLAH','🤲'); break;
    case 'subhanallah': await praise('SUBHANALLAH','🤲'); break;
    case 'legend': case 'hero': await praise('LEGEND','🏆'); break;
    case 'king': await praise('KING','👑'); break;
    case 'queen': await praise('QUEEN','👑'); break;
    case 'champion': await praise('CHAMPION','🏆'); break;
    case 'blessed': await praise('BLESSED','🙏'); break;
    case 'genius': await praise('GENIUS','🧠'); break;
    case 'awesome': await praise('AWESOME','✨'); break;
    case 'wonderful': await praise('WONDERFUL','💎'); break;
    case 'proud': await praise('PROUD','🏅'); break;

    // ══════════════════════════════════════════════════════
    //  DEFAULT — Chatbot fallback using free Pollinations AI
    // ══════════════════════════════════════════════════════
    default: {
      if (isGroup) {
        const gs = db.getGroup(from);
        if (gs.chatbot) {
          const ans = await freeAI(body);
          if (ans) await reply(ans);
        }
      } else {
        // DM chatbot always active
        const ans = await freeAI(body);
        if (ans) await reply(ans);
      }
      break;
    }

    } // end switch
  } catch (err) {
    console.error('[CMD ERROR]', err.message);
  }
}

module.exports = { handleCommand, buildMenu };
