// src/routes/PublicHealthPage.jsx
function PublicHealthPage() {
  const articles = [
    { title: "COVID-19 Updates", description: "Latest guidelines and vaccination info." },
    { title: "Seasonal Flu Prevention", description: "Steps to prevent seasonal flu and vaccination advice." },
    { title: "Mental Health Awareness", description: "Resources for maintaining good mental health." },
  ];

  return (
    <div className="public-health-page">
      <header className="top-nav"><div className="logo">Healthcare Portal</div></header>
      <main className="public-health-content">
        <h1>Latest Health Information</h1>
        <div className="article-list">
          {articles.map(a => (
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
