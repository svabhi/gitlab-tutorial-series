# Build and Push Docker image to GCR

We need to install gcloud tools to follow this video. I will put the link in the video description

```bash
gcloud --version
gcloud projects list
gcloud auth configure-docker
npm --version
node --version
cd gcr && node app.js

# You can use one of the commands to build a docker image
docker build -t node_app -f Dockerfile .
docker build -t node_app .
docker images | grep -i "node_app"

docker tag [SOURCE_IMAGE] gcr.io/[PROJECT-ID]/[IMAGE]
docker tag 81fdcf708abb eu.gcr.io/personal-2022-338317/node_app:v1
docker push gcr.io/[PROJECT-ID]/[IMAGE]
docker push eu.gcr.io/personal-2022-338317/node_app:v1
docker pull eu.gcr.io/personal-2022-338317/node_app:v1
```

Remember before you push you need to authenticate first with this command

```bash
gcloud auth configure-docker
```

## Limitations

- You can not push a docker image larger than 5TB
- Timeout is set to 2 hours. If image push is not completed within that timeframe docker puhs will fail
