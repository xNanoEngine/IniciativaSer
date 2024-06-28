on:
  push:
    branches:
        - asesoria

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      -name: Check out the repository
      uses: actions/checkout@v2

    
      -name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v1

    
      -name: Run Docker Compose
      run: docker-compose -f docker-compose.yml up -d