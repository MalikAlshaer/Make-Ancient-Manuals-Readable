AI garbage I cooked up

Got an html website from the age of the dinosaurs that needs a touch up? Just change the link in `mainfest.json` to the manual's index, but replace the index with a `*`.

Here's an example:

You have: https://ftp.gnu.org/old-gnu/Manuals/gas-2.9.1/html_node/as_toc.html

Get rid of the last part

Becomes: https://ftp.gnu.org/old-gnu/Manuals/gas-2.9.1/html_node/

Replace it with a `*`

You end up with: https://ftp.gnu.org/old-gnu/Manuals/gas-2.9.1/html_node/*

Finally take that and paste it in the square brackets in `manifest.json` where it says `matches:`. Add as many links as you want, more links represent a higher IQ according to every science blog in the universe.

Now go have fun being able to read without losing your eyesight

Only works for chrome based browsers as of now

To try it out:
1. Clone the repo
2. Make whatever changes you need
3. In Chrome, go to (chrome://extensions)
4. Enable 'Developer Mode'
5. Click 'Load Unpacked'
6. Select the folder you cloned in step 1
7. Refresh the docs
