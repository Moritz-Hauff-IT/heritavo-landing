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

# Next.js standalone output is self-contained under .next/standalone.
COPY --from=builder --chown=app:app /app/.next/standalone ./.next/standalone
COPY --from=builder --chown=app:app /app/.next/static ./.next/standalone/.next/static
COPY --from=builder --chown=app:app /app/public ./.next/standalone/public
COPY --from=builder --chown=app:app /app/messages ./.next/standalone/messages
COPY --from=builder --chown=app:app /app/content ./.next/standalone/content

# Keep a root-level copy as well so relative imports (e.g. ../messages) and
# process.cwd() based code (e.g. content/blog) resolve regardless of CWD.
COPY --from=builder --chown=app:app /app/public ./public
COPY --from=builder --chown=app:app /app/messages ./messages
COPY --from=builder --chown=app:app /app/content ./content
COPY --from=builder --chown=app:app /app/i18n ./i18n

USER app

EXPOSE 3000

CMD ["node", ".next/standalone/server.js"]
