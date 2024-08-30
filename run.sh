

rm -rf ./data  
mkdir ./data  
chmod 777 ./data
## Example echo "https://dev.to/chafroudtarek/part-1-how-to-set-up-grafana-and-prometheus-using-docker-i47"


echo "Grafana : http://localhost:3000/"
echo "Prometheus Targets: http://localhost:9090/"
echo "Prometheus Targets: http://localhost:9090/targets"

docker-compose up -d ; docker-compose logs -f 


