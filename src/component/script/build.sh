#!/bin/sh

pnpm i --frozen-lockfile
pnpm update:version
pnpm build

echo "exec completed"