all: deploy

deploy:
	rsync -avz . --exclude 'Makefile' --exclude '.git' --exclude '*.swp' --delete kimjoar@server13.subsys.no:/home/kimjoar/kimjoar.net/www/

.PHONY: deploy
