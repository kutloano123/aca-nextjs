export default function HomePage() {
  return (
    <div className="home-container">
      <header>
        <h1>Bokang Utica Salon</h1>
        <p>Where Beauty Meets Elegance ✨</p>
      </header>

      <section>
        <p>Welcome to our salon! Explore our pages to learn more and view our hairstyles.</p>

        <ul className="home-list">
          <li>📖 Learn more about us on the <strong>About</strong> page.</li>
          <li>📬 Reach out via the <strong>Contact</strong> page.</li>
          <li>💇‍♀️ Check out our <strong>Hairstyles</strong>.</li>
        </ul>
      </section>
    </div>
  );
}
