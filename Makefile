all: deploy

deploy:
	rsync -avz . --exclude 'Makefile' --exclude '.git' --delete kimjoar@server2.subsys.no:/www/kimjoar/www/

.PHONY: deploy
