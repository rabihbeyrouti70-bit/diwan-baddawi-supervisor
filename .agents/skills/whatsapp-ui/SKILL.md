---
name: whatsapp-ui
description: "Comprehensive design system, UI/UX specifications, components, audio routing, and interaction guidelines for creating authentic, pixel-perfect WhatsApp clones (Web, Mobile, and Desktop). Includes dark/light theme tokens, chat screens, message bubbles, audio waveforms, full-screen calling, floating call bars, status stories, and telephony audio routing."
argument-hint: "[component or feature: chat, calling, audio-routing, tokens, status]"
license: MIT
metadata:
  author: antigravity
  version: "1.0.0"
---

# WhatsApp UI & Experience Design Skill (whatsapp-ui)

The **`whatsapp-ui`** skill provides comprehensive design tokens, component specifications, micro-interactions, and audio telephony architectures required to build authentic, high-fidelity WhatsApp clones across Web, Mobile (PWA / iOS / Android), and Desktop platforms.

---

## 1. Design Tokens & Color Architecture

WhatsApp relies on a very specific, disciplined palette optimized for readability and battery efficiency (especially in Dark Mode).

### 1.1 Dark Theme Tokens (Primary WhatsApp Palette)

```css
:root {
  /* Surfaces & Backgrounds */
  --wa-dark-bg-app: #0b141a;          /* Deepest app canvas / call background */
  --wa-dark-bg-panel: #111b21;        /* Sidebars, headers, incoming panels */
  --wa-dark-bg-subtle: #202c33;       /* Message input bar, cards, incoming bubble */
  --wa-dark-bg-hover: #222e35;        /* Hover / active states */
  --wa-dark-bg-outgoing: #005c4b;     /* Outgoing message bubble (WhatsApp emerald) */
  --wa-dark-bg-chat: #0b141a;         /* Chat background with subtle doodle pattern */

  /* Accents & Brand Highlights */
  --wa-color-primary: #00a884;        /* WhatsApp Teal primary */
  --wa-color-accent: #25d366;         /* WhatsApp Green (online badge, active icons) */
  --wa-color-blue: #53bdeb;           /* WhatsApp Read Receipts (double blue ticks) */
  --wa-color-danger: #ea0038;         /* End call button, destructive actions */
  --wa-color-danger-hover: #d10032;

  /* Typography Colors */
  --wa-text-primary: #e9edef;         /* High-contrast headings and body text */
  --wa-text-secondary: #8696a0;       /* Timestamps, subtext, status strings */
  --wa-text-muted: #667781;          /* Disabled states, placeholder text */
  --wa-text-link: #53bdeb;           /* Embedded hyperlinks */

  /* Borders & Dividers */
  --wa-border-subtle: rgba(134, 150, 160, 0.15);
  --wa-border-strong: rgba(134, 150, 160, 0.25);

  /* Elevation Shadows */
  --wa-shadow-call: 0 20px 40px rgba(0, 0, 0, 0.6);
  --wa-shadow-bubble: 0 1px 0.5px rgba(11, 20, 26, 0.13);
  --wa-shadow-dock: 0 10px 30px rgba(0, 0, 0, 0.4);
}
```

### 1.2 Light Theme Tokens

```css
:root {
  --wa-light-bg-header: #008069;      /* Classic top app bar */
  --wa-light-bg-header-dark: #075e54;
  --wa-light-bg-app: #f0f2f5;         /* App canvas */
  --wa-light-bg-incoming: #ffffff;    /* Incoming bubble */
  --wa-light-bg-outgoing: #dcf8c6;    /* Outgoing bubble */
  --wa-light-text-primary: #111b21;
  --wa-light-text-secondary: #667781;
}
```

---

## 2. Calling Experience (WhatsApp-Grade Voice & Video)

WhatsApp's calling interface is characterized by full-screen immersion, dark privacy gradients, subtle acoustic animations, and non-blocking multi-tasking.

### 2.1 Full-Screen Calling Architecture

#### Layout Structure:
1. **Header Bar**:
   - Minimize button (`⌵` arrow down) to switch to floating picture-in-picture mode.
   - End-to-end encryption pill badge:
     ```html
     <div class="wa-encryption-badge">
       <span class="lock-icon">🔒</span>
       <span>مشفّرة تماماً بين الطرفين</span>
     </div>
     ```
   - Add participant button (`+` icon).

2. **Caller Identity Core**:
   - Circular Avatar (120px × 120px) with multi-layered acoustic pulse waves:
     ```css
     .wa-avatar-pulse {
       width: 120px;
       height: 120px;
       border-radius: 50%;
       position: relative;
       box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4);
       animation: waPulseRing 2.4s infinite cubic-bezier(0.4, 0, 0.2, 1);
     }
     @keyframes waPulseRing {
       0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
       70% { box-shadow: 0 0 0 26px rgba(37, 211, 102, 0); }
       100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
     }
     ```
   - Contact Display Name (22px bold, `#e9edef`).
   - Call Status & Live Timer (`00:15` or `يرن... / جاري الاتصال...`, 15px, `#8696a0`).

3. **Floating Controls Dock**:
   - Frosted glass dock (`background: rgba(32, 44, 51, 0.85); backdrop-filter: blur(16px); border-radius: 40px;`).
   - Circular control buttons (54px × 54px):
     - **Speakerphone**: Defaults to handset earpiece (`📱`), toggles to loud external speaker (`🔊`).
     - **Video Switch**: Camera toggle (`📹` / `🚫`).
     - **Mute Mic**: Microphone toggle (`🎙️` / `🔇`).
     - **End Call**: Vivid crimson red circular button (`background: #ea0038;`) with hanging phone icon (`📞` rotated 135deg).

### 2.2 Multi-tasking Floating Call Bar (WhatsApp PiP Mode)

When user taps minimize or navigates away during an active call, the interface transitions to a compact floating bar at the top or bottom of the screen:

```html
<div class="wa-floating-call-bar" id="waFloatingCallBar">
  <div class="wa-floating-content" onclick="expandCallScreen()">
    <div class="wa-floating-avatar">👤</div>
    <div class="wa-floating-info">
      <div class="wa-floating-name">محمد المشرف</div>
      <div class="wa-floating-status">
        <span class="wa-sound-waves"><span></span><span></span><span></span></span>
        <span class="wa-floating-timer">01:42</span>
      </div>
    </div>
  </div>
  <button class="wa-floating-hangup-btn" onclick="hangupCurrentCall()">📞</button>
</div>
```

---

## 3. Hardware & Telephony Audio Routing Specification

Mobile browsers (iOS Safari and Android Chrome) handle audio channels differently than desktop browsers. A true WhatsApp clone must enforce strict telephony routing.

### 3.1 Strict Handset Earpiece Default (سماعة الأذن الخاصة)

1. **MediaSession Hygiene**:
   - **RULE**: NEVER set `navigator.mediaSession.playbackState = 'playing'` when starting a call in earpiece mode. If set to `'playing'`, mobile OS classifies the app as a music player (like Spotify) and forces sound through the external media loudspeaker!
   - Keep `navigator.mediaSession.playbackState = 'none'` during calls until the user explicitly activates the speaker.

2. **Web Audio GainNode Controller**:
   - On iOS WebKit, `HTMLAudioElement.volume` is read-only. Playing raw `<audio>` always outputs at 100% full acoustic power.
   - Use Web Audio API:
     ```javascript
     const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
     const source = audioCtx.createMediaStreamSource(remoteStream);
     const gainNode = audioCtx.createGain();
     gainNode.gain.value = isSpeakerActive ? 1.0 : 0.4; // 0.4 for earpiece comfort
     source.connect(gainNode);
     gainNode.connect(audioCtx.destination);
     remoteAudioElement.muted = true; // Mute raw element to avoid duplicate audio
     ```

3. **`setSinkId` Telephony Clearing**:
   - In earpiece mode: `remoteAudioElement.setSinkId('')`. Empty string resets any device sink override, instructing the browser to follow the OS telephony communication receiver routing (`AVAudioSessionCategoryPlayAndRecord` / `MODE_IN_COMMUNICATION`).
   - In loudspeaker mode: Enumerate devices and route to the device containing `"speaker"`, `"loudspeaker"`, or `"default"`.

---

## 4. Chat & Messaging Components

### 4.1 Message Bubbles & Delivery Ticks

- **Outgoing Message**:
  - Background: `#005c4b` (dark) / `#dcf8c6` (light).
  - Corner radius: `8px 8px 0px 8px` with an SVG corner tail on the top/bottom corner.
  - Delivery Status Ticks:
    - Sent: Single grey checkmark (`✓`, color `#8696a0`).
    - Delivered: Double grey checkmark (`✓✓`, color `#8696a0`).
    - Read: Double cyan blue checkmark (`✓✓`, color `#53bdeb`).

- **Incoming Message**:
  - Background: `#202c33` (dark) / `#ffffff` (light).
  - Corner radius: `8px 8px 8px 0px` with an SVG corner tail.
  - Text: `#e9edef` (dark) / `#111b21` (light).

### 4.2 Voice Note Waveform Player

A signature feature of WhatsApp is the interactive voice message bubble:
- Circular avatar of sender with small microphone badge.
- Circular Play/Pause button (`#00a884`).
- Simulated / dynamic audio waveform equalizer bars (30 to 45 vertical rounded bars). Played portion turns cyan `#53bdeb`, unplayed portion remains `#8696a0`.
- Elapsed duration indicator (`0:18 / 0:45`).
- Playback speed button pill (`1x`, `1.5x`, `2x`).

### 4.3 Input & Recording Bar

- Left icon: Emoji / Sticker panel toggle (`😊`).
- Attachment icon: Paperclip (`📎`) opening an 8-icon radial/grid animated drawer (Photos, Camera, Document, Contact, Poll, Audio, Location).
- Text area: Content-editable / auto-growing textarea (`min-height: 24px; max-height: 120px;`).
- Right icon:
  - If text input is empty: Microphone icon for voice notes (`🎙️`).
    - Tap-and-hold records audio.
    - Slide-to-cancel animation (`< سحب للإلغاء`).
    - Slide up to lock recording (`🔒`).
  - If text input has content: Animated transition to green Send button (`➤`, background `#00a884`).

---

## 5. Status / Stories Interface

- Dashed circular avatar ring around contacts with unread status updates (border color `#00a884`, dashed segments equal to number of status posts).
- Full-screen viewer with segmented top progress bars, 5-second automatic progression, tap-left for previous, tap-right for next, and bottom swipe-up drawer for replying.

---

## 6. Pre-Delivery Checklist for WhatsApp UI Clones

1. [ ] **Color Palette**: Dark theme strictly uses `#0b141a`, `#111b21`, `#202c33`, and `#00a884`. No pure black (`#000000`) backgrounds except for full-screen media/photos.
2. [ ] **Double Blue Ticks**: Color must be exact WhatsApp Cyan `#53bdeb`.
3. [ ] **Audio Routing**: WebRTC voice calls must default to the handset receiver earpiece at a gentle volume (`gain = 0.4`), switching to speaker only upon user tap.
4. [ ] **Multi-tasking**: Floating call bar allows users to browse chats or supervisor dashboards while maintaining active audio communication.
5. [ ] **RTL / Arabic Support**: Direction attributes, message bubble tails, and slide-to-cancel gestures properly mirrored for right-to-left layout.
