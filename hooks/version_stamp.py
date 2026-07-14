"""Footer version stamp — git-provenance, zero-discipline (no SemVer).

Appends "· <updated> <date> · <short-sha>" to the site footer at build time, from the
commit HEAD the site is built from. Used by BOTH configs:

  - Chinese (mkdocs.yml)   -> redeployed on every master push, so its sha == latest master
  - English (mkdocs.en.yml)-> redeployed only when the English site is rebuilt, so its sha
                              lags whenever the Chinese source moved but English wasn't redone

That lag is exactly the staleness signal we want: compare the two footers' shas (or open the
linked commits) to see how far the English translation trails the Chinese source. The label
follows theme.language. Degrades to a no-op if git is unavailable.
"""
import subprocess

REPO = "https://github.com/qqfly/how-to-learn-robotics"


def _git(*args):
    return subprocess.check_output(["git", *args], stderr=subprocess.DEVNULL).decode().strip()


def on_config(config, **kwargs):
    try:
        sha = _git("rev-parse", "--short", "HEAD")
        date = _git("log", "-1", "--format=%cs")  # committer date, YYYY-MM-DD
    except Exception:
        return config
    if not sha:
        return config

    try:
        lang = str(config.theme.get("language") or "")
    except Exception:
        lang = ""
    label = "更新" if lang.startswith("zh") else "updated"

    link = f'<a href="{REPO}/commit/{sha}">{sha}</a>'
    config.copyright = f'{config.copyright or ""} · {label} {date} · {link}'
    return config
