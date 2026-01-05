import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Gallery = () => {
  const { t } = useLanguage();

  // Placeholder data for gallery albums
  const albums = [
    {
      id: 1,
      title: "Tree Planting Campaign 2025",
      date: "June 2025",
      coverImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      count: 45,
      category: "Events"
    },
    {
      id: 2,
      title: "Lake Haramaya Cleanup",
      date: "May 2025",
      coverImage: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
      count: 32,
      category: "Projects"
    },
    {
      id: 3,
      title: "Wildlife Photography Contest",
      date: "April 2025",
      coverImage: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=800&q=80",
      count: 120,
      category: "Community"
    },
    {
      id: 4,
      title: "Sustainable Farming Workshop",
      date: "March 2025",
      coverImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80",
      count: 28,
      category: "Education"
    },
    {
      id: 5,
      title: "Campus Green Day",
      date: "February 2025",
      coverImage: "/haramayauniversityphoto2.jpg",
      count: 60,
      category: "Events"
    },
    {
      id: 6,
      title: "Student Research Symposium",
      date: "January 2025",
      coverImage: "/haramayauniversityphoto3.jpg",
      count: 15,
      category: "Science"
    }
  ];

  return (
    <div className="min-h-screen space-y-12 py-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-black tracking-tight text-emerald-950 md:text-5xl drop-shadow-sm">
          📸 {t('gallery') || "Gallery"}
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Explore moments from our environmental initiatives, community events, and the beautiful biodiversity of our campus.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {albums.map((album) => (
          <div 
            key={album.id} 
            className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            {/* Image Container */}
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={album.coverImage} 
                alt={album.title} 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1501854140884-074bf6b24363?auto=format&fit=crop&w=800&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="flex items-center justify-between mb-2">
                <span className="inline-flex items-center rounded-full bg-emerald-500/80 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  {album.category}
                </span>
                <span className="text-xs font-medium text-slate-300 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {album.count} Photos
                </span>
              </div>
              <h3 className="text-xl font-bold leading-tight mb-1 group-hover:text-emerald-300 transition-colors">
                {album.title}
              </h3>
              <p className="text-sm text-slate-300 font-medium">
                {album.date}
              </p>
            </div>

            {/* Hover Action */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-white/20 backdrop-blur-md rounded-full p-4 border border-white/50 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
