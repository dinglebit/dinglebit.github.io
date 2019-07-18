FROM golang AS builder
COPY . /src
WORKDIR /src
RUN make 

FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /
COPY --from=builder /src/app .
COPY www /www/
EXPOSE 8080
ENTRYPOINT ["/app"]
