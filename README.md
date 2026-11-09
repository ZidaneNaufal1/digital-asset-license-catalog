# Asset Ledger

A local-first catalog for game asset credits: name, creator, source URL, license and required attribution. It stores metadata only, not asset files. Export credits as plain text or back up and restore JSON.

## Run

Open `index.html` using localhost or HTTPS in a modern browser. Run `npm test` with Node.js 20+ for core logic tests. No third-party application packages are required.

License fields are records supplied by the user; the app does not verify licensing, ownership, attribution completeness, URL safety or permission to redistribute assets. Check the original terms yourself. Data is stored in localStorage and can be lost if browser data is cleared. JSON import replaces the catalog after validation and confirmation. Maximum 1,000 records and 2 MB per backup. Editing records, cloud sync and independent accessibility audit are not available. Built with OpenAI Codex assistance.

**Bahasa Indonesia:** Katalog metadata aset dan atribusi dengan ekspor kredit dan cadangan lokal. Izin penggunaan tetap harus diperiksa pada sumber aslinya.
