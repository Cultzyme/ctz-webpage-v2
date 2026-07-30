# Hero video audit

## Comparison

The original Cultzyme preview resolves `/manus-storage/cultzyme-hero-process_b57d5bea.mp4` successfully. Its hero video reports `readyState: 4`, a duration of `15.041667` seconds, no media error, and active playback.

The copied preview initially retained the same source-project storage path. In the copy, the browser reported `readyState: 0`, `networkState: 3`, no duration, and paused playback. The markup and playback attributes matched the original; the failure was therefore the copied project’s lack of access to the source project’s storage object.

## Correction

The original H.264 MP4, poster, wordmark, and favicon were downloaded from the working Cultzyme source and uploaded into storage owned by this copy. The frontend now references:

| Asset | Copy-owned path |
|---|---|
| Hero video | `/manus-storage/cultzyme-hero-process_b62d7b64.mp4` |
| Hero poster | `/manus-storage/cultzyme-hero-process-poster_8931dca9.jpg` |
| Wordmark | `/manus-storage/cultzyme-wordmark-clean_7ed67d66.png` |
| Favicon | `/manus-storage/cultzyme-logo-mark_4a7c6d55.svg` |

## Validation

The corrected copy reports `readyState: 4`, `networkState: 1`, no media error, a duration of `15.041667` seconds, and active playback. The video is H.264, 1920×1080, `yuv420p`, and 8.1 MB. TypeScript and the production build complete successfully. Desktop and mobile previews retain the intended hero layout, and a Chromium render with forced reduced motion confirms the static poster fallback remains legible and correctly framed.

## Audio finding

The MP4 served by the working original preview contains only one H.264 video stream and **no audio stream**. The original hero element also uses the `muted` attribute to satisfy browser autoplay rules. The copied project therefore has no soundtrack that can be unmuted; restoring audio requires an audio-enabled source file or a newly supplied/generated soundtrack, followed by an explicit user-initiated sound control.

## Supplied audio-enabled source

The user-supplied MP4 contains synchronized H.264 video and AAC stereo audio. Both streams start at `0.000000`; the video lasts `15.041667` seconds and the audio lasts `15.069002` seconds. The visual dimensions, pixel format, and timing match the hero, with a high measured structural similarity to the optimized current video. The soundtrack measures approximately `-17.1 dB` mean volume and `-3.2 dB` peak, so it can be integrated without additional gain.

## Sound interaction decision

The hero will continue to autoplay **muted**, which preserves reliable playback under browser autoplay policies. A visible, keyboard-operable `SOUND OFF / SOUND ON` control will let the visitor enable the synchronized AAC track through an explicit user gesture without restarting the video. The control will expose its state through `aria-pressed` and a dynamic accessible label. When reduced motion is active, the video, audio, and sound control will remain disabled so the existing static poster fallback stays motion-free and silent.

## Live audio validation

The optimized final asset combines the existing 1920×1080 H.264 visual stream with the supplied AAC 44.1 kHz stereo soundtrack in a single 15.041667-second MP4. In the browser it loads with `readyState: 4`, no media error, and autoplays muted. Activating the control changes the element to `muted: false` while playback continues; the button changes to `SOUND ON`, `aria-pressed="true"`, and `aria-label="Mute hero soundtrack"`. Pressing Space on the focused control returns it to the muted state, confirming keyboard operation without interrupting the video.

## Reduced-motion validation issue

A direct command-line capture initially showed an apparent low-contrast frame. A DevTools inspection established that this was a capture-path artifact rather than the rendered page: the forced session reports `prefers-reduced-motion: reduce`, white `rgb(244, 248, 251)` text at full opacity, `display: none` for both video and Sound control, and a paused, muted video at `currentTime: 0`. A DevTools surface capture confirms the static poster and hero copy retain their intended contrast. Reduced-motion validation is therefore accepted.

## Final verification

The Sound control remains clear and unobtrusive at 1440×900 and 390×844, while the Team route is unchanged at both viewports. TypeScript and the production build complete successfully. Recent browser and network logs contain no media, audio, loading, or runtime errors.
