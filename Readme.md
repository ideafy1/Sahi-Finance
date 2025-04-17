\# Project Plan: SahiURL Integrated Finance News Feed

\-\--

\## 1. Project Overview

This project combines the \`sahiurl.in\` URL shortening service with a
dynamic, engaging finance news feed platform
(\`sahi-finance-feed.web.app\` - \*tentative name\*). The goal is to
monetize clicks generated via \`sahiurl.in\` by directing users through
an intermediate news feed experience where they consume content and view
advertisements before reaching their original destination link. The news
feed will provide real value through curated, expert-written financial
summaries and articles, presented in a modern, mobile-first UI inspired
by social media feeds.

\-\--

\## 2. Core Components

\### 2.1. \`SahiURL.in\` (URL Shortener)

\* \*\*Function:\*\* Allows users to shorten long URLs into concise
\`sahiurl.in/xxxx\` links. \* \*\*Integration Point:\*\* When a user
clicks a \`sahiurl.in\` link, instead of directly redirecting to the
final destination, it redirects to the \`sahi-finance-feed.web.app\`.

\### 2.2. Sahi Finance Feed (\`sahi-finance-feed.web.app\`)

\* \*\*Concept:\*\* A vertical scrolling feed presenting daily finance
news in digestible \"cards.\" \* \*\*Target Audience (Indirect):\*\*
Users clicking \`sahiurl.in\` links. \* \*\*Target Audience (Direct -
Potential):\*\* Users interested in quick finance updates. \*
\*\*UI/UX:\*\* \* Modern, responsive, potentially with curved elements.
\* Smooth vertical scrolling, strictly one card at a time
(JS-controlled). \* Fast, visually appealing animations and transitions.
\* Inspired by Instagram\'s image post/carousel feed style.

\-\--

\## 3. Content Card Structure (Per Feed Item)

Each card in the feed will consist of:

1\. \*\*Image Area (Top):\*\* \* Displays one or more relevant images.
\* If multiple images, implements a horizontal sliding/carousel effect
with dot indicators. \* \*\*Image Source:\*\* Licensed stock photos,
public domain images, or AI-generated copyright-free visuals relevant to
the news item. 2. \*\*Action Buttons (Below Image):\*\* \* Standard
social media icons: Like (Heart), Comment (Bubble), Share (Send Plane).
\* Positioned below the image area, likely centered or slightly
left-aligned. 3. \*\*Title:\*\* \* A concise, compelling headline for
the finance news item. \* Positioned below the action buttons. 4.
\*\*News Summary (Text Content):\*\* \* A \~60-word summary of the key
financial news. \* \*\*Content Source:\*\* Written by an NISM-certified
finance specialist. This forms the core original content of the card. \*
Positioned below the title. 5. \*\*Read More Link/Button:\*\* \* Clearly
labeled text like \"Read Full Article\" or similar. \* \*\*Function:\*\*
Clicking this opens the complete, detailed news article (e.g., 500-1000
words) covering the topic extensively. This could open in a modal, a new
page/view within the app, or navigate away. \* \*\*Full Article Content
Source:\*\* Also written by the NISM-certified specialist.

\-\--

\## 4. User Flow (Shortlink Integration)

1\. User clicks a \`sahiurl.in/xxxxx\` link. 2. User is redirected to
\`sahi-finance-feed.web.app\`. 3. The finance news feed interface loads
(potentially after a brief initial loading animation, \~1.5-3 seconds).
4. The user sees the first news card (Image, Buttons, Title, Summary,
Read More). 5. The user needs to scroll through a predefined number of
news cards (e.g., \`N\` cards). 6. As the user scrolls, advertisement
cards are interspersed between the news cards at specific intervals
(e.g., after every \`M\` news cards). These ad cards will be clearly
distinguishable from content cards. 7. After the user has scrolled
past/viewed the required \`N\` news cards (and implicitly the ads in
between), a mechanism triggers to reveal the original destination link.
\* \*\*Mechanism Idea:\*\* A \"Get Link\" button appears, a modal pops
up with the link, or automatic redirection occurs. 8. User clicks the
revealed link/button to proceed to their original intended destination
URL.

\-\--

\## 5. Content Strategy

\* \*\*Frequency:\*\* Daily updates with relevant finance news. \*
\*\*Author:\*\* All news summaries and full articles written by an
NISM-certified finance specialist to ensure accuracy and build
credibility (E-E-A-T). Author credentials to be displayed on the
platform (e.g., About Us page, potentially linked from articles). \*
\*\*Topics:\*\* Market movements, investment tips, economic news,
personal finance advice, regulatory changes, etc., relevant to the
target audience. \* \*\*Images:\*\* Sourced legally (Stock, Public
Domain, AI-generated) and relevant to the news topic.

\-\--

\## 6. Monetization Strategy

\* \*\*Primary Method:\*\* Displaying advertisements (e.g., Google
AdSense) within the feed. \* \*\*Ad Placement:\*\* Ads appear as
distinct cards interspersed between the news content cards during the
forced scrolling process. \* \*\*Ad Labeling:\*\* All ad units will be
clearly marked as \"Advertisement\" or similar, distinct from the news
content.

\-\--

\## 7. Key Technical Features & Considerations

\* \*\*Frontend:\*\* Modern JavaScript framework (React, Vue, Angular)
or efficient vanilla JS for smooth UI and interactions. \*
\*\*Scrolling:\*\* JavaScript-controlled vertical scroll, ensuring only
one card transition per user action (wheel/swipe), preventing overshoot.
CSS Transforms for smooth slide transitions. \* \*\*Image Carousel:\*\*
Implementation of a touch-friendly image slider if multiple images are
used per card. \* \*\*State Management:\*\* Tracking user progress
(number of cards viewed) to trigger the link reveal mechanism. \*
\*\*Responsiveness:\*\* Fully responsive design adapting perfectly to
mobile, tablet, and desktop views. \* \*\*Performance:\*\* Optimized
image loading, efficient code, potentially lazy loading of
content/images further down the feed. \* \*\*API (Backend - Optional but
Recommended):\*\* A backend could serve the news content (summaries,
full articles, image URLs) and potentially manage the
shortlink-to-content mapping and user progress tracking.

\-\--

\## 8. Success Metrics

\* User completion rate (percentage of users who scroll through required
content to get their link). \* Ad impression and click-through rates. \*
Time spent on the news feed page. \* (If tracking direct traffic) Bounce
rate and engagement metrics for users landing directly on the news feed.

\-\--
