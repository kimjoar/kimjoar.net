all: deploy

deploy:
	rsync -avz . --exclude 'Makefile' --exclude '.git' kimjoar@server2.subsys.no:/www/kimjoar/www/

.PHONY: deploy
