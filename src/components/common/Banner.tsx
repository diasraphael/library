import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="flex">
        <img className="w-full" src="./assets/library.png" alt="library"></img>
      </div>
      <div className="text-2xl font-medium py-4">Welcome to open library</div>
      <p className="py-1">
        Open library provides simple, one-stop searching for books and e-books,
        articles, digital media and many more.
      </p>
      <p className="py-2">
        Open library also helps you manage your research. Millions of books
        available through controlled digital lending. You can keep track of your
        favourite books. Organize your books using lists and the reading log.
        Digital shelves organised like a physical library. Finding matching
        results within the texts of million books. Your feedback will help us
        improve these cards.
      </p>
      <p className="py-2">
        The libraries are part of a huge network that provides not just single
        textbooks, but an infinitely large library through which new texts can
        be developed & shared.Always up to date, the platform ensures
        consistency, the newest info available, and allows instructors to fine
        tune a project for their needs.It grows via the efforts of a fantastic
        community of active collaborators. You can join!
      </p>
      <p className="py-2">
        Open library non-profit organization committed to freeing the textbook
        from the limitations and costs of traditional textbooks. Our open and
        freely accessible LibreTexts provide a more engaging learning experience
        for students without the financial burden.
      </p>
    </div>
  );
};

export default Banner;
