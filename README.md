# The News 📰

> **by one, for all**

A modern, responsive news website that delivers fresh headlines and breaking news from around the world. Built with vanilla JavaScript and powered by the NewsAPI.

## 🌟 Features

<img width="1920" height="1080" alt="Screenshot 2025-08-09 171009" src="https://github.com/user-attachments/assets/41ab2b4f-41fb-40d1-a569-b554874865c1" />

<img width="1920" height="1080" alt="Screenshot 2025-08-09 171018" src="https://github.com/user-attachments/assets/1032fc73-d4cb-4ccf-bee6-75ae013195ec" />

<img width="1920" height="1080" alt="Screenshot 2025-08-09 171029" src="https://github.com/user-attachments/assets/ac18fb87-60e4-48f7-a938-a755a172ba3b" />

<img width="1920" height="1080" alt="Screenshot 2025-08-09 171126" src="https://github.com/user-attachments/assets/bf410a1a-d9ca-4049-9d55-74b0248d46a9" />

### 📱 **Responsive Design**
- Modern dark theme with cyan accents
- Fully responsive layout that works on all devices
- Smooth hover effects and animations

### 🗂️ **News Categories**
- **General** - Top headlines and breaking news
- **Business** - Financial and corporate news
- **Entertainment** - Celebrity and entertainment updates
- **Health** - Medical and wellness news
- **Science** - Scientific discoveries and research
- **Sports** - Sports news and updates
- **Technology** - Tech industry and innovation news

### 🔍 **Smart Search**
- Real-time search functionality
- Search by keywords, topics, or sources
- Debounced input for better performance

### 🎨 **Modern UI/UX**
- Clean, professional card-based layout
- Sticky navigation header
- Loading states and error handling
- Image fallbacks for better reliability

## 🚨 Important Note for Hosting

This project uses NewsAPI which has the following limitations:
- **✅ Local Development**: Works perfectly with any valid API key
- **❌ Live Hosting**: Requires a paid NewsAPI plan ($449/month)

For **live deployment**, the API calls will fail on domains like GitHub Pages. This is a NewsAPI restriction, not a code issue.

## 🚀 Quick Start (Local Development)

### Prerequisites
- A modern web browser
- A local development server (optional but recommended)

### Step 1: Clone the Repository
```bash
git clone https://github.com/KholdHart/The-News.git
cd The-News
```

### Step 2: Get Your NewsAPI Key
1. Visit [NewsAPI.org](https://newsapi.org/)
2. Sign up for a **free account**
3. Copy your API key from the dashboard

### Step 3: Update the API Key
1. Open `api.js` in your text editor
2. Replace the API key on line 3:
```javascript
const API_KEY = 'paste-your-api-key-here'
```

### Step 4: Run the Project

#### Option A: Simple File Opening
1. Double-click `index.html` to open in your browser
2. That's it! The website should work locally.

#### Option B: Local Server (Recommended)
Running with a local server prevents CORS issues:

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -M SimpleHTTPServer 8000
```

**Using Node.js:**
```bash
# Install serve globally
npm install -g serve

# Run the server
serve .
```

**Using PHP:**
```bash
php -S localhost:8000
```

**Using VS Code:**
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

### Step 5: Open in Browser
Navigate to:
- **File method**: The file should open automatically
- **Local server**: `http://localhost:8000`

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript** - ES6+ features and modules
- **NewsAPI** - Real-time news data
- **Google Fonts** - Poppins font family

## 📁 Project Structure

```
The-News/
│
├── index.html          # Main HTML file
├── style.css           # Stylesheet with responsive design
├── script.js           # Main JavaScript logic
├── api.js              # NewsAPI integration
├── README.md           # Project documentation
└── LICENSE             # MIT License
```

## 🔧 Configuration

### API Settings
The website uses NewsAPI with the following endpoints:
- **Top Headlines**: `GET /v2/top-headlines`
- **Everything**: `GET /v2/everything`
- **Categories**: `GET /v2/top-headlines?category={category}`

### Customization
- **Colors**: Modify CSS custom properties in `:root`
- **Layout**: Adjust grid columns in `.content-wrapper`
- **Categories**: Update category buttons in `index.html`

## 🌐 Live Demo

⚠️ **Note**: Due to NewsAPI restrictions, the live demo may not work properly. The project is designed for local development.

For a working live version, you would need to:
1. Upgrade to NewsAPI's paid plan, or
2. Switch to a free alternative API service

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 🐛 Troubleshooting

### Common Issues

**❌ "No articles found" or blank page:**
- Check that your API key is correctly set in `api.js`
- Verify your API key is valid at [NewsAPI.org](https://newsapi.org)
- Make sure you're running locally (not on a live domain)
- Check browser console for error messages

**❌ CORS errors:**
- Use a local server instead of opening the file directly
- Try the Python/Node.js server methods above

**❌ Images not loading:**
- This is normal - some news sources block external image access
- Fallback images will be used automatically

### API Limits
- **Free tier**: 100 requests per day
- **Rate limit**: 1000 requests per day maximum
- **Development only**: Cannot be used on live domains

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🔮 Future Enhancements

- [ ] Add user preferences and favorites
- [ ] Implement infinite scroll
- [ ] Add dark/light theme toggle
- [ ] Server-side rendering for better SEO
- [ ] User authentication system
- [ ] Bookmark and share functionality
- [ ] Push notifications for breaking news
- [ ] Alternative API integration for live hosting

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**KholdHart**
- GitHub: [@KholdHart](https://github.com/KholdHart)

## 🙏 Acknowledgments

- [NewsAPI](https://newsapi.org/) for providing the news data
- [Google Fonts](https://fonts.google.com/) for the Poppins font
- [Picsum](https://picsum.photos/) for fallback images
- Inspiration from modern news websites

---

⭐ **Star this repo if you found it helpful!**

*Built with ❤️ by one, for all*

## 💡 Pro Tips

- **Test locally first** before trying to deploy
- **Keep your API key secure** - don't commit it to public repos
- **Use environment variables** in production applications
- **Consider alternative APIs** for live hosting needs
