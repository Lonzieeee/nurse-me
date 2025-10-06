#!/bin/bash

# SEO Monitoring Script for NurseMe
# This script helps monitor and validate SEO implementation

echo "🏥 NurseMe SEO Monitoring & Validation"
echo "======================================"

# Check if required files exist
echo "📁 Checking SEO Files..."

files=("public/sitemap.xml" "public/robots.txt" "src/utils/seoConfig.js" "src/components/SEO/SEO.jsx")

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file exists"
    else
        echo "❌ $file missing"
    fi
done

echo ""
echo "📊 SEO Configuration Summary:"
echo "==============================="

# Count pages with SEO
seo_pages=$(grep -r "import SEO" src/pages/ | wc -l)
echo "Pages with SEO implementation: $seo_pages"

# Check sitemap entries
sitemap_urls=$(grep -c "<url>" public/sitemap.xml 2>/dev/null || echo "0")
echo "URLs in sitemap: $sitemap_urls"

# Check if development server is running
if curl -s http://localhost:5173 > /dev/null 2>&1; then
    echo "✅ Development server is running"
    echo "🌐 Visit: http://localhost:5173"
else
    echo "❌ Development server not running"
    echo "💡 Run: npm run dev"
fi

echo ""
echo "🔍 SEO Validation Steps:"
echo "========================"
echo "1. Check page titles in browser tab"
echo "2. Use browser dev tools to inspect meta tags"
echo "3. Test social media sharing previews"
echo "4. Validate structured data with Google's tool"
echo "5. Submit sitemap to Google Search Console"

echo ""
echo "📈 Next Steps for Production:"
echo "============================="
echo "1. Set up Google Analytics"
echo "2. Configure Google Search Console"
echo "3. Submit sitemap to search engines"
echo "4. Monitor keyword rankings"
echo "5. Set up local SEO listings"

echo ""
echo "🎯 Target Keywords by Page:"
echo "=========================="
echo "Home: 'professional healthcare at home'"
echo "Home Nursing: 'home nursing services'"
echo "Doctor Calls: 'doctor house calls'"
echo "Medication: 'medication delivery service'"
echo "Palliative: 'palliative care at home'"
echo "Physiotherapy: 'home physiotherapy services'"

echo ""
echo "✨ SEO Implementation Complete!"
