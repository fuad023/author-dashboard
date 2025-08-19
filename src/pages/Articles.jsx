import React, { useMemo, useState } from "react";
import ArticleTable from "../components/ArticleTable";
import Pagination from "../components/Pagination";

const ALL_ARTICLES = [
  { title: "The Art of Storytelling: A Guide to Captivating Your Audience", status: "Published", lastEdited: "2 days ago" },
  { title: "Crafting Compelling Characters: A Step-by-Step Approach", status: "Draft", lastEdited: "1 week ago" },
  { title: "Mastering Dialogue in Fiction: Techniques for Realistic Conversations", status: "Published", lastEdited: "2 weeks ago" },
  { title: "Building Worlds: A Guide to Fictional Universes", status: "Draft", lastEdited: "3 weeks ago" },
  { title: "Writing with Emotion: How to Connect with Readers", status: "Published", lastEdited: "1 month ago" },
  { title: "Plot Twists That Work: Avoiding Cliches", status: "Draft", lastEdited: "1 month ago" },
  { title: "Editing Like a Pro: A Practical Checklist", status: "Published", lastEdited: "2 months ago" },
  { title: "Point of View: Choosing the Right Lens", status: "Draft", lastEdited: "2 months ago" },
  { title: "Openings That Hook: First Pages That Sing", status: "Published", lastEdited: "3 months ago" },
  { title: "Showing vs. Telling: Finding the Balance", status: "Draft", lastEdited: "3 months ago" }
];

const PAGE_SIZE = 3;

export default function Articles() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(ALL_ARTICLES.length / PAGE_SIZE);

  const currentArticles = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return ALL_ARTICLES.slice(start, start + PAGE_SIZE);
  }, [page]);

  return (
    <section className="panel">
      <h2 className="header">My Articles</h2>
      <ArticleTable articles={currentArticles} />
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </section>
  );
}
