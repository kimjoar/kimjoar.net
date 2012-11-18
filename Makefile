all: deploy

deploy:
	rsync -avz . --exclude 'Makefile' --exclude '.git' --exclude '*.swp' --delete kimjoar@server2.subsys.no:/www/kimjoar/www/

.PHONY: deploy
