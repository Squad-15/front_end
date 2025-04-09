import React from "react";
import CardModulo from "../components/CardModulo";
import Header from "../components/Header";

export default function LocationPage() {
  const cardsData = [
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1471&q=80",
      category: "Startups",
      title: "Lyft launching cross-platform service this week",
      description: "Autodesk is a company in transition. It was until recently a traditional boxed software company...",
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1531496651305-08f2457c61b4?auto=format&fit=crop&w=1470&q=80",
      category: "Tech",
      title: "Apple announces new AR headset",
      description: "Apple just unveiled a new AR headset with impressive features and sleek design.",
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1581090700227-1e8e02d3c162?auto=format&fit=crop&w=1470&q=80",
      category: "Design",
      title: "Figma introduces new plugin system",
      description: "Figma now allows developers to build their own plugins to streamline the design process.",
      link: "#"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      <div className="flex flex-col items-center justify-center py-10 px-4">
        {cardsData.map((card, index) => (
          <CardModulo key={index} {...card} />
        ))}
      </div>
    </div>
  );
}