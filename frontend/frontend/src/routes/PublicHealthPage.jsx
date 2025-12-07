// src/routes/PublicHealthPage.jsx
function PublicHealthPage() {
  const articles = [
    {
      title: "COVID-19 Updates",
      description: "Stay informed about the latest COVID-19 guidelines and vaccination information.",
    },
    {
      title: "Seasonal Flu Prevention",
      description: "Learn about steps you can take to prevent the seasonal flu and when to get vaccinated.",
    },
    {
      title: "Mental Health Awareness",
      description: "Explore resources and support options for maintaining good mental health.",
    },
  ];

  return (
    <div className="public-health-page">
      <header className="top-nav">
        <div className="logo">Healthcare Portal</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#topics">Health Topics</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="public-health-content">
        <h1>Latest Health Information</h1>
        <div className="article-list">
          {articles.map((a) => (
            <article key={a.title} className="article-card">
              <h2>{a.title}</h2>
              <p>{a.description}</p>
              <button>Read More</button>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

export default PublicHealthPage;