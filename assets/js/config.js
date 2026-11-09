/* NovaFile site configuration — the single place to edit release info.
 *
 * downloadUrl: leave "" until the installer is published on a public URL.
 *   Example: "https://downloads.example.com/novafile/NovaFile-Setup-1.0.0.exe"
 *   While it is "", download buttons point to the Download page and the
 *   Download page shows a clearly labelled "not yet published" placeholder
 *   instead of a dead link.
 */
window.NOVA_CONFIG = {
  version: "1.4.0",
  /* The installer is shipped in website/downloads/, so the button works
   * out of the box on any host. To serve it from release hosting instead,
   * put an absolute URL here:
   *   "https://downloads.example.com/novafile/NovaFile-Setup-1.1.0.exe"
   * Leave "" to show the "not yet published" placeholder. */
  /* Served from the GitHub Release asset, so every download is counted by
   * GitHub (owner view: the Releases page, "N downloads" under the file).
   * The website/downloads/ copy exists only for the offline ZIP. */
  downloadUrl: "https://github.com/Osafkhanjii/NovaFile/releases/download/v1.4.0/NovaFile-Setup-1.4.0.exe",
  installerSize: "~2.6 MB",
  /* SHA-256 of that exact file — shown on the Download page so users can
   * verify the installer before running it. Update on every release. */
  sha256: "cf1f23df9ce1d32a444148e1ba5dbd0bae921e5f4c6d71b4dd3b8a6396de9f6e"
};
