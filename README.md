# morg1207.github.io

Personal robotics portfolio of **Brayan Laura** — live at **https://morg1207.github.io**.

Static site, no build step: `index.html` + `css/site.css` + `js/site.js`.

## Add a project

1. Create `content/<project>/readme.md` (the detail page, Markdown; videos with `<video>`).
2. Put a short muted loop in `assets/preview/<project>.mp4` and a poster image
   (`ffmpeg -i full.mp4 -an -vf "setpts=PTS/3,fps=24,scale=720:-2" -crf 30 -movflags +faststart out.mp4`).
3. Add an entry to `js/projects-DATA.js`.

Preview locally with `python -m http.server` and open http://localhost:8000.
