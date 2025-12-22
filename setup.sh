#!/bin/bash

# Wedding Website - Quick Setup Script
# This script will help you set up the wedding website on your local machine

echo "🎉 Wedding Website Setup Script 🎉"
echo "=================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "📥 Please install Node.js from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Check if Yarn is installed
if ! command -v yarn &> /dev/null; then
    echo "⚠️  Yarn is not installed. Installing Yarn..."
    npm install -g yarn
fi

echo "✅ Yarn version: $(yarn -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
echo "This may take a few minutes..."
yarn install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Installation complete!"
    echo ""
    echo "🚀 To start the development server, run:"
    echo "   yarn start"
    echo ""
    echo "📝 To customize the website:"
    echo "   1. Edit src/data/mock.js for wedding details"
    echo "   2. Update images in the gallery"
    echo "   3. Customize colors in src/index.css"
    echo ""
    echo "🌐 The website will open at: http://localhost:3000"
    echo ""
    echo "💝 Enjoy your beautiful wedding website!"
else
    echo "❌ Installation failed. Please check the error messages above."
    exit 1
fi
