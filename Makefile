# English-edition local workflow (english-version branch only).
#
# Images / CSS / MathJax are single-sourced in docs/ and synced into docs-en/
# at build time (docs-en/ ignores those synced dirs). The Chinese site is never
# touched: every target below passes `-f mkdocs.en.yml` explicitly.

MKDOCS   = .venv/bin/mkdocs
EN_DIRS  = docs/images docs/stylesheets docs/javascripts

.PHONY: en-sync en-serve en-build en-deploy

en-sync:
	rsync -a $(EN_DIRS) docs-en/

en-serve: en-sync
	$(MKDOCS) serve -f mkdocs.en.yml

en-build: en-sync
	$(MKDOCS) build -f mkdocs.en.yml --strict

en-deploy: en-sync
	$(MKDOCS) gh-deploy -f mkdocs.en.yml --force
