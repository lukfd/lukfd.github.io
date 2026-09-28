---
date: "2025-03-28"
draft: false
title: "Why and how I used Hugo"
description: "A personal guide to my blog, built with Hugo and hosted on my home server."
tags: ["blog", "hugo", "docker", "traefik"]
---

## Introduction

My friend Tyler has a fantastic [blog](https://blog.smantic.dev/), and actually it's currently not active ☹️

Smantic's blog was also made with [Hugo](https://gohugo.io)! So after years, I finally came around on putting some time in learning Hugo and deploy it on my home server.

## Build

The quick-start documentation made it super easy to develop my blog. So please follow the experts and click [https://gohugo.io/getting-started/quick-start](https://gohugo.io/getting-started/quick-start)

So, install the Hugo CLI and set up the repo. After I've created my first blog post with a simple

```
hugo new content content/posts/my-first-post.md
```

After I could have just serve the blog with the command

```
hugo server -D
```

The `-D` is for showing drafts! So apparently, to publish a blog post yout have to set `draft = false` at the top of your markdown blog post file.

## Deploy

At home I have a small Lenovo computer, where I run Doker Compose so that it can serve all of my fun personal projects. The one missing was of course a blog. So here I am, deploying my blog! I hope to write a blog post specifically about Traefik, which I use to make my websites accessible.

Since all of my services are being managed with Docker Compose, I needed to build and run my blog in a docker container, so I found and started using hugomods by creating a Dockerfile.

```dockerfile
# Stage 1: Build the Hugo site
FROM klakegg/hugo:alpine AS builder

# Set the working directory inside the container
WORKDIR /site

# Copy the Hugo site files into the container
COPY . /site

# Build the static site
RUN hugo --destination /site/public

# Stage 2: Serve the static files with Nginx
FROM nginx:alpine

# Remove default Nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy the built static files from the builder stage
COPY --from=builder /site/public /usr/share/nginx/html

# Copy the custom Nginx configuration
COPY default.conf /etc/nginx/conf.d/default.conf

# Set correct permissions for Nginx
RUN chown -R nginx:nginx /usr/share/nginx/html
RUN chmod -R 755 /usr/share/nginx/html

EXPOSE 80
```

On my server, I had to clone the theme repo, otherwise the build would fail.

Then I just needed to add it to my docker compose services, rebuild and run a `docker compose up`

```yaml
services:
  blog:
    build:
      context: ./blog
      dockerfile: Dockerfile
    container_name: "blog"
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.blog.rule=Host(`www.blog.lucacomba.com`) || Host(`blog.lucacomba.com`)"
      - "traefik.http.routers.blog.entrypoints=websecure"
      - "traefik.http.routers.blog.tls.certresolver=myresolver"
```

The one thing that I still need to figure out is why `blog.lucacomba.com` have not been certified. Hopefully one day I will figure it out.

Thanks!
