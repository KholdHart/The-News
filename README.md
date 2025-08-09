# The News 📰

> **by one, for all**

A modern, responsive news website that delivers fresh headlines and breaking news from around the world. Built with vanilla JavaScript and powered by the NewsAPI.

## 🌟 Features

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

## 🚀 Live Demo

Visit the live website: [https://kholdhart.github.io/The-News/](https://kholdhart.github.io/The-News/)

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

## ⚡ Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/KholdHart/The-News.git
   cd The-News
   ```

2. **Get a NewsAPI key**
   - Visit [NewsAPI.org](https://newsapi.org/)
   - Sign up for a free account
   - Get your API key

3. **Update the API key**
   - Open `api.js`
   - Replace the API key with your own:
   ```javascript
   const API_KEY = 'your-api-key-here';
   ```

4. **Launch the website**
   - Open `index.html` in your browser
   - Or use a local server:
   ```bash
   # Python
   python -m http.server 8000
   
   # Node.js
   npx serve .
   ```

## 🌐 Deployment

### GitHub Pages (Recommended)
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select "Deploy from branch" → main branch
4. Your site will be live at `https://yourusername.github.io/The-News/`

### Alternative Hosting
- **Netlify**: Drag and drop deployment
- **Vercel**: Connect your GitHub repository
- **Render**: Static site hosting

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

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🐛 Known Issues

- API key is exposed in client-side code (acceptable for demo purposes)
- NewsAPI free tier has request limitations
- Some news sources may block images (fallback images are provided)

## 🔮 Future Enhancements

- [ ] Add user preferences and favorites
- [ ] Implement infinite scroll
- [ ] Add dark/light theme toggle
- [ ] Server-side rendering for better SEO
- [ ] User authentication system
- [ ] Bookmark and share functionality
- [ ] Push notifications for breaking news

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
