#!/bin/bash
URL="https://frontend-production-4cdf.up.railway.app"

if command -v google-chrome &> /dev/null; then
    google-chrome --app=$URL &
elif command -v chromium-browser &> /dev/null; then
    chromium-browser --app=$URL &
elif command -v chromium &> /dev/null; then
    chromium --app=$URL &
else
    # Fallback to default browser
    xdg-open $URL &
fi
