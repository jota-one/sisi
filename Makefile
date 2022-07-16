build:
	rm -rf dist && yarn build:ui && yarn build:api && cp index.js dist