package main

import (
	"fmt"
	"net/http"

	"git.themarshians.com/dinglebit/httputil"
	"git.themarshians.com/dinglebit/log"
)

func main() {
	http.Handle("/", httputil.LogHandler(http.FileServer(http.Dir("/www")), log.Default()))
	err := http.ListenAndServe(":8080", nil)
	if err != nil && err != http.ErrServerClosed {
		fmt.Println("listen and serving:", err)
	}
}
