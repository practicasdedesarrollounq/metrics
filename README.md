# metrics
Metrics Example


```
./run.sh
```

# Links
- Grafana : http://localhost:3000/"
- Prometheus Targets: http://localhost:9090/"
- Prometheus Targets: http://localhost:9090/targets"



Por el momento me tira este error:

```
/prometheus $ telnet java_app_prometheus 8080
Connected to java_app_prometheus
GET /metrics
HTTP/1.0 400 Bad Request
content-type: application/json
content-length: 138

{"_links":{"self":[{"href":"/bad-request","templated":false}]},"_embedded":{"errors":[{"message":"Bad Request"}]},"message":"Bad Request"}Connection closed by foreign host
/prometheus $
```


## Example echo "https://dev.to/chafroudtarek/part-1-how-to-set-up-grafana-and-prometheus-using-docker-i47"
