# syntax=docker/dockerfile:1.25
FROM node:22-bookworm-slim@sha256:53ada149d435c38b14476cb57e4a7da73c15595aba79bd6971b547ceb6d018bf AS builder

WORKDIR /app
ENV NPM_CONFIG_CACHE=/tmp/.npm

COPY package.json package-lock.json* ./
RUN --mount=type=cache,target=/tmp/.npm \
    npm install --no-fund --progress=false

COPY . .
RUN npm run build

FROM node:22-bookworm-slim@sha256:53ada149d435c38b14476cb57e4a7da73c15595aba79bd6971b547ceb6d018bf AS runtime

WORKDIR /app
ENV NODE_ENV=production \
    NPM_CONFIG_CACHE=/tmp/.npm

RUN addgroup --system --gid 1001 app \
    && adduser --system --uid 1001 --ingroup app app

COPY --from=builder --chown=app:app /app/package.json /app/package-lock.json* ./
COPY --from=builder --chown=app:app /app/node_modules ./node_modules
COPY --from=builder --chown=app:app /app/.next ./.next
COPY --from=builder --chown=app:app /app/public ./public
COPY --from=builder --chown=app:app /app/messages ./messages
COPY --from=builder --chown=app:app /app/content ./content
COPY --from=builder --chown=app:app /app/i18n ./i18n
COPY --from=builder --chown=app:app /app/next.config.ts ./
COPY --from=builder --chown=app:app /app/postcss.config.mjs ./
COPY --from=builder --chown=app:app /app/tailwind.config.ts ./
COPY --from=builder --chown=app:app /app/tsconfig.json ./
COPY --from=builder --chown=app:app /app/middleware.ts ./

USER app

EXPOSE 3000

CMD ["npm", "run", "start"]
