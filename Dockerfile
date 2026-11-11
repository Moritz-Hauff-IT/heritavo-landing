# syntax=docker/dockerfile:1.25
FROM node:26.13.0-bookworm-slim@sha256:add5c17c14752c54d2f3d519ec46a3815684d41c33f198bcb09fb998f7dcbf68 AS builder

WORKDIR /app
ENV NPM_CONFIG_CACHE=/tmp/.npm

COPY package.json package-lock.json* ./
RUN --mount=type=cache,target=/tmp/.npm \
    npm install --no-fund --progress=false

COPY . .
RUN npm run build

FROM node:26.13.0-bookworm-slim@sha256:add5c17c14752c54d2f3d519ec46a3815684d41c33f198bcb09fb998f7dcbf68 AS runtime

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
