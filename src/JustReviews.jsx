import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const posts = [
  {
    title: "Logitech MX Master 3S Review",
    excerpt: "A detailed review based on hands-on experience with the best productivity mouse in the market. We cover build quality, performance, and real-world use.",
    link: "#"
  },
  {
    title: "Sony WH-1000XM5 Headphones",
    excerpt: "Extensive testing to evaluate if these are the best noise-cancelling headphones in 2025. Reviewed across various environments.",
    link: "#"
  },
  {
    title: "Apple M2 MacBook Air - Is It Worth the Upgrade?",
    excerpt: "We provide a real-world comparison of the M2 MacBook Air to its predecessor to help buyers make informed decisions.",
    link: "#"
  }
];

export default function JustReviews() {
  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">JustReviews</h1>
      <p className="text-center text-gray-600 mb-10">Honest and detailed reviews of digital & tech products from hands-on testing.</p>
      <section className="grid gap-6">
        {posts.map((post, i) => (
          <Card key={i} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <Button asChild>
                <a href={post.link}>Read Full Review</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
