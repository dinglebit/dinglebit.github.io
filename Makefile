GOSRC = $(shell find -type f -name "*.go" | grep -v "*_test.go")
GOBIN := "app"

$(GOBIN): $(GOSRC)
	CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o $(GOBIN) .

build:
	docker build -t docker.themarshians.com/dinglebit/www .

push:
	docker push docker.themarshians.com/dinglebit/www
