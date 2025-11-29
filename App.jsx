import React, { useState } from 'react';
import { ShoppingCart, User, Menu, X, Copy, TrendingUp, DollarSign, Package, Users, Heart, ShieldCheck, Truck, RefreshCw, Star, ArrowRight, Instagram, Facebook, Twitter, CheckCircle, Download } from 'lucide-react';

// --- DATA: PRODUCT CATALOG ---
const products = [
  // Skincare
  { id: 1, name: "Vital Glow Facial Oil", category: "Skincare", price: 420, size: "30ml", description: "Hydrating oil with Vitamin F", tag: "Best Seller" },
  { id: 2, name: "Vital Glow Cleanser", category: "Skincare", price: 285, size: "200ml", description: "Gentle daily cleanser", tag: "" },
  { id: 3, name: "Vital Glow Body Lotion", category: "Skincare", price: 320, size: "200ml", description: "Deep nourishment", tag: "" },
  { id: 4, name: "Vital Glow Night Cream", category: "Skincare", price: 450, size: "50g", description: "Overnight repair", tag: "" },
  { id: 5, name: "Vital Glow Face Mist", category: "Skincare", price: 195, size: "100ml", description: "Refreshing hydration", tag: "" },

  // Fragrances
  { id: 6, name: "Blossom Aura", category: "Fragrances", price: 550, size: "100ml", description: "Floral scent with bergamot & rose", tag: "New" },
  { id: 7, name: "Amber Night", category: "Fragrances", price: 580, size: "100ml", description: "Rich/Opulent, Jasmine & Vanilla", tag: "" },
  { id: 8, name: "Fresh Ember", category: "Fragrances", price: 550, size: "100ml", description: "Citrus, Mandarin & Rosemary", tag: "" },
  { id: 9, name: "Royal Essence", category: "Fragrances", price: 620, size: "100ml", description: "Sophisticated, Oud & Patchouli", tag: "" },

  // Home & Spa
  { id: 10, name: "Home Scent Soy Candle", category: "Home & Spa", price: 280, size: "250g", description: "Vanilla & Sandalwood scent", tag: "" },
  { id: 11, name: "Luxury Reed Diffuser", category: "Home & Spa", price: 320, size: "150ml", description: "Includes 6 reeds", tag: "" },
  { id: 12, name: "Pure Essential Oil Drops", category: "Home & Spa", price: 180, size: "10ml", description: "Aromatherapy blend", tag: "" },

  // Organic / Dental
  { id: 13, name: "Bamboo Toothbrush", category: "Organic", price: 65, size: "1 Pack", description: "Biodegradable handle", tag: "Organic" },
  { id: 14, name: "Organic Mint Toothpaste", category: "Organic", price: 85, size: "75ml", description: "Fluoride-free", tag: "Organic" },
  { id: 15, name: "Organic Mouthwash", category: "Organic", price: 120, size: "250ml", description: "Natural ingredients", tag: "Organic" },
  { id: 16, name: "Organic Foot Wash", category: "Organic", price: 95, size: "100ml", description: "Gentle cleansing", tag: "Organic" },

  // Kids Glow
  { id: 17, name: "Kids Sunscreen", category: "Kids Glow", price: 220, size: "100ml", description: "SPF 50 - Cat/Racoon design", tag: "Kids" },
  { id: 18, name: "Kids Body Wash", category: "Kids Glow", price: 145, size: "200ml", description: "Gentle tear-free formula - Koala", tag: "Kids" },
  { id: 19, name: "Kids Lotion", category: "Kids Glow", price: 165, size: "200ml", description: "Moisturizing - Lion design", tag: "Kids" },
];

const categories = ["All", "Skincare", "Fragrances", "Home & Spa", "Organic", "Kids Glow"];

const recentSales = [
  { product: "Marula Glow Serum", amount: "R450.00", commission: "R67.50", date: "2025-11-27" },
  { product: "Baobab Night Cream", amount: "R520.00", commission: "R78.00", date: "2025-11-26" },
  { product: "African Sunset Perfume", amount: "R680.00", commission: "R102.00", date: "2025-11-25" },
  { product: "Rooibos Body Lotion", amount: "R385.00", commission: "R57.75", date: "2025-11-24" },
  { product: "Aloe Vera Day Cream", amount: "R420.00", commission: "R63.00", date: "2025-11-23" },
];

// --- COMPONENTS ---

const Navbar = ({ cartCount, onViewChange, currentView }) => (
  <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex-shrink-0 cursor-pointer flex items-center gap-2" onClick={() => onViewChange('home')}>
          <div className="bg-[#5D1826] w-10 h-10 flex items-center justify-center rounded-sm">
             <span className="text-[#CFA855] font-serif font-bold text-xl">V</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold text-[#5D1826] tracking-wide">VITAL GLOW</span>
          </div>
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <button onClick={() => onViewChange('shop')} className={`text-sm uppercase tracking-widest hover:text-[#CFA855] transition ${currentView === 'shop' ? 'text-[#CFA855] font-bold' : 'text-gray-600'}`}>Shop</button>
          <button onClick={() => onViewChange('story')} className={`text-sm uppercase tracking-widest hover:text-[#CFA855] transition ${currentView === 'story' ? 'text-[#CFA855] font-bold' : 'text-gray-600'}`}>Our Story</button>
          <button onClick={() => onViewChange('promoter')} className={`text-sm uppercase tracking-widest hover:text-[#CFA855] transition ${currentView === 'promoter' ? 'text-[#CFA855] font-bold' : 'text-gray-600'}`}>Become a Promoter</button>
        </div>
        <div className="flex items-center space-x-6">
          <button onClick={() => onViewChange('dashboard')} className="text-gray-600 hover:text-[#5D1826] flex items-center gap-2">
             <span className="hidden sm:block text-sm uppercase tracking-widest">Login</span>
             <User size={20} />
          </button>
          <div className="relative cursor-pointer">
            <ShoppingCart size={20} className="text-gray-600 hover:text-[#5D1826]" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#CFA855] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">{cartCount}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-[#5D1826] text-white pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-[#CFA855]/20 pb-12">
      <div>
        <h3 className="font-serif text-2xl text-[#CFA855] mb-4">VITAL GLOW</h3>
        <p className="text-gray-300 text-sm mb-6">Luxury. Organic. True Beauty.</p>
        <div className="flex space-x-4">
          <Instagram size={20} className="text-[#CFA855] cursor-pointer" />
          <Facebook size={20} className="text-[#CFA855] cursor-pointer" />
          <Twitter size={20} className="text-[#CFA855] cursor-pointer" />
        </div>
      </div>
      <div>
        <h4 className="text-[#CFA855] uppercase tracking-widest text-sm font-bold mb-6">Quick Links</h4>
        <ul className="space-y-3 text-sm text-gray-300">
          <li className="hover:text-[#CFA855] cursor-pointer">Shop</li>
          <li className="hover:text-[#CFA855] cursor-pointer">Our Story</li>
          <li className="hover:text-[#CFA855] cursor-pointer">Become a Promoter</li>
          <li className="hover:text-[#CFA855] cursor-pointer">Contact Us</li>
        </ul>
      </div>
      <div>
        <h4 className="text-[#CFA855] uppercase tracking-widest text-sm font-bold mb-6">Customer Service</h4>
        <ul className="space-y-3 text-sm text-gray-300">
          <li className="hover:text-[#CFA855] cursor-pointer">Privacy Policy</li>
          <li className="hover:text-[#CFA855] cursor-pointer">Terms & Conditions</li>
          <li className="hover:text-[#CFA855] cursor-pointer">Returns</li>
          <li className="hover:text-[#CFA855] cursor-pointer">Shipping Info</li>
        </ul>
      </div>
      <div>
        <h4 className="text-[#CFA855] uppercase tracking-widest text-sm font-bold mb-6">Stay Connected</h4>
        <p className="text-sm text-gray-300 mb-4">Subscribe to get special offers and updates.</p>
        <div className="flex">
          <input type="email" placeholder="Your email" className="bg-white/10 border border-white/20 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#CFA855] w-full" />
          <button className="bg-[#CFA855] text-[#5D1826] px-4 py-2 font-bold uppercase text-sm hover:bg-white transition">Subscribe</button>
        </div>
      </div>
    </div>
    <div className="text-center mt-8 text-xs text-gray-400">© 2025 Vital Glow. All rights reserved. Made in South Africa with love.</div>
  </footer>
);

// --- VIEWS ---
const Home = ({ onViewChange, onAdd }) => (
  <div>
    <div className="relative bg-[#5D1826] min-h-[600px] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-serif text-[#CFA855] leading-tight">Luxury. Organic.<br/>True Beauty.</h1>
            <p className="text-gray-200 text-lg md:text-xl font-light tracking-wide max-w-lg mx-auto md:mx-0">Powered by nature, elevated by science, inspired by Africa.</p>
            <button onClick={() => onViewChange('shop')} className="mt-8 bg-[#CFA855] text-[#5D1826] px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 shadow-lg">Shop the Collection →</button>
          </div>
          <div className="hidden md:flex justify-end">
            <div className="bg-[#fdf6f0] p-6 rounded-r-xl h-[450px] w-[350px] shadow-2xl flex flex-col items-center justify-center text-center relative z-20">
                 <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#CFA855]"></div>
                 <h3 className="text-[#5D1826] text-2xl font-serif mb-2">VITAL GLOW</h3>
                 <p className="text-[#5D1826] text-xs uppercase tracking-widest mb-8">Product Catalogue</p>
                 <div className="space-y-4 text-[#5D1826]/80 font-serif italic"><p>Skincare</p><p>Body Care</p><p>Fragrances</p></div>
            </div>
            <div className="bg-[#5D1826] border border-[#CFA855] p-6 rounded-l-xl h-[450px] w-[60px] shadow-2xl -mr-4 relative z-10 flex items-center justify-center">
                <span className="text-[#CFA855] font-serif font-bold text-2xl rotate-90 whitespace-nowrap">CATALOGUE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white py-16">
       <div className="max-w-7xl mx-auto px-4 flex justify-between text-center overflow-x-auto gap-8">
        {[{ icon: Heart, text: "Cruelty-Free" }, { icon: ShieldCheck, text: "Ethically Sourced" }, { icon: Package, text: "Made in South Africa" }, { icon: RefreshCw, text: "3-Day Returns" }].map((f, i) => (
          <div key={i} className="flex flex-col items-center min-w-[120px]">
            <div className="w-16 h-16 bg-[#F5F5F5] rounded-full flex items-center justify-center text-[#556B2F] mb-4"><f.icon size={28} /></div>
            <span className="text-gray-600 text-sm">{f.text}</span>
          </div>
        ))}
       </div>
    </div>
    <div className="bg-[#FAFAFA] py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-serif text-[#5D1826] mb-12">Explore Our Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[{ name: "Skincare", sub: "Organic serums and creams", bg: "bg-orange-100" }, { name: "Fragrances", sub: "Luxurious scents", bg: "bg-gray-900" }, { name: "Home & Spa", sub: "Candles and diffusers", bg: "bg-stone-200" }, { name: "Kids Glow", sub: "Gentle care for little ones", bg: "bg-blue-50" }].map((c, i) => (
            <div key={i} onClick={() => onViewChange('shop')} className={`cursor-pointer group h-80 rounded-2xl overflow-hidden relative shadow-lg ${c.bg}`}>
              <div className="absolute inset-0 opacity-50 bg-black group-hover:opacity-40 transition"></div>
              <div className="absolute bottom-0 left-0 p-6 text-left">
                <h3 className="text-white font-serif text-2xl mb-1">{c.name}</h3>
                <p className="text-white/80 text-xs">{c.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-serif text-[#5D1826] mb-4">Featured Products</h2>
        <p className="text-gray-500 mb-12">Discover our handpicked selection of premium organic skincare</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[products[0], products[5], products[9]].map(p => (<ProductCard key={p.id} product={p} onAdd={onAdd} />))}
        </div>
      </div>
    </div>
    <div className="bg-[#5D1826] py-24 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-[#CFA855] text-4xl font-serif mb-4">Love Our Products?</h2>
        <p className="text-white text-lg font-light mb-8">Join our promoter program and earn money sharing what you love.</p>
        <button onClick={() => onViewChange('promoter')} className="bg-[#CFA855] text-[#5D1826] px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-white transition">Join the Program →</button>
      </div>
    </div>
  </div>
);

const Shop = ({ items, addToCart }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredItems = activeCategory === "All" ? items : items.filter(i => i.category === activeCategory);
  return (
    <div className="bg-[#FAFAFA] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#5D1826] mb-4">{activeCategory === "All" ? "All Products" : activeCategory}</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat ? 'bg-[#5D1826] text-[#CFA855] shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:border-[#5D1826]'}`}>{cat}</button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map(product => (<ProductCard key={product.id} product={product} onAdd={addToCart} />))}
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product, onAdd }) => (
  <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-50">
    <div className="relative h-72 bg-[#F9F9F9] overflow-hidden flex items-center justify-center">
      {product.tag && (
        <span className={`absolute top-4 left-4 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white rounded-full z-10 ${product.tag === 'New' || product.tag === 'Best Seller' ? 'bg-[#556B2F]' : 'bg-[#CFA855]'}`}>{product.tag}</span>
      )}
      <div className="w-40 h-40 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-300 text-xs text-center p-4">{product.category} Image</div>
    </div>
    <div className="p-6 flex-1 flex flex-col text-left">
      <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">{product.category}</p>
      <h3 className="font-serif text-lg text-[#5D1826] mb-1">{product.name}</h3>
      <p className="text-gray-500 text-xs mb-4 line-clamp-2">{product.description}</p>
      <div className="mt-auto pt-4 flex items-center justify-between">
        <span className="font-bold text-[#5D1826] text-lg">R{product.price.toFixed(2)}</span>
        <button onClick={() => onAdd(product)} className="bg-[#CFA855] text-white px-4 py-2 rounded-full text-xs font-bold uppercase hover:bg-[#b8954a]">Add to Cart</button>
      </div>
    </div>
  </div>
);

const PromoterLanding = ({ onViewChange }) => (
  <div className="bg-white">
    <div className="bg-[#5D1826] text-center py-24 px-4"><h1 className="text-4xl md:text-5xl font-serif text-[#CFA855] mb-6">Why Join Vital Glow?</h1></div>
    <div className="max-w-7xl mx-auto px-4 -mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
      {[{ title: "High Earnings", desc: "Earn 10-15% commission on every sale you generate", icon: DollarSign }, { title: "No Risk", desc: "No stock to buy. We handle all shipping and fulfillment", icon: TrendingUp }, { title: "Monthly Payouts", desc: "Get paid via EFT once you hit R300 threshold", icon: CheckCircle }].map((b, i) => (
        <div key={i} className="bg-white p-8 rounded-2xl shadow-xl text-center">
          <div className="w-16 h-16 bg-[#CFA855] rounded-full flex items-center justify-center text-[#5D1826] mx-auto mb-6"><b.icon size={32} /></div>
          <h3 className="font-serif text-2xl text-[#5D1826] mb-4">{b.title}</h3>
          <p className="text-gray-500">{b.desc}</p>
        </div>
      ))}
    </div>
    <div className="max-w-7xl mx-auto px-4 text-center mb-24">
      <h2 className="text-4xl font-serif text-[#5D1826] mb-12">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[{ num: "01", title: "Sign Up", desc: "Fill out the simple form below and get approved within 24 hours" }, { num: "02", title: "Get Your Code", desc: "Receive your unique promo code and tracking link" }, { num: "03", title: "Share & Earn", desc: "Share on social media, blogs, or with friends and family" }, { num: "04", title: "Get Paid", desc: "Receive monthly payouts directly to your bank account" }].map((s, i) => (
          <div key={i} className="text-center">
            <span className="text-6xl font-serif text-[#F5F5F5] font-bold block mb-4">{s.num}</span>
            <h3 className="text-xl font-serif text-[#5D1826] mb-2">{s.title}</h3>
            <p className="text-gray-500 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="bg-[#5D1826] py-20 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-2xl p-8 shadow-2xl">
        <div className="text-center mb-8"><h2 className="text-3xl font-serif text-[#5D1826] mb-2">Ready to Start?</h2><p className="text-gray-500">Join our community of successful promoters today</p></div>
        <form className="space-y-6">
          <div><label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label><input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#5D1826]" placeholder="Your full name" /></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label><input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#5D1826]" placeholder="your@email.com" /></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1">Instagram Handle</label><input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#5D1826]" placeholder="@yourhandle" /></div>
          <div className="flex items-start gap-3"><input type="checkbox" className="mt-1" /><p className="text-xs text-gray-500">I agree to the <span className="underline cursor-pointer">Affiliate Terms & Conditions</span> and <span className="underline cursor-pointer">POPIA Policy</span>.</p></div>
          <button type="button" onClick={() => onViewChange('dashboard')} className="w-full bg-[#CFA855] text-[#5D1826] font-bold py-4 rounded-lg uppercase tracking-widest hover:bg-[#b8954a]">Join the Program</button>
        </form>
        <p className="text-center text-xs text-gray-400 mt-4">Applications are typically approved within 24 hours</p>
      </div>
    </div>
  </div>
);

const Dashboard = () => (
  <div className="min-h-screen bg-gray-50 pb-20">
    <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8"><h1 className="text-3xl font-serif text-[#5D1826] mb-2">Welcome back, Trev 👋</h1><p className="text-gray-500">Here's how your promotions are performing</p></div>
    </div>
    <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[{ label: "This Month", value: "R450.00", sub: "+28% from last month", icon: DollarSign }, { label: "Total Earnings", value: "R2450.50", sub: "All time", icon: TrendingUp }, { label: "Total Sales", value: "28", sub: "Products sold", icon: Package }, { label: "Conversion Rate", value: "8.2%", sub: "342 clicks", icon: Users }].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-4"><span className="text-gray-500 text-sm">{stat.label}</span><stat.icon size={18} className="text-[#CFA855]" /></div>
              <h3 className="text-2xl font-bold text-[#5D1826] mb-1">{stat.value}</h3><p className="text-xs text-green-600">{stat.sub}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-serif text-xl text-[#5D1826] mb-6">Earnings Overview</h3>
                <div className="relative h-64 w-full px-4 border-l border-b border-gray-200">
                    <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                        <path d="M0,220 C100,200 250,150 400,100 S600,50 800,120" fill="none" stroke="#CFA855" strokeWidth="3" />
                        <circle cx="0" cy="220" r="4" fill="#5D1826" stroke="#fff" strokeWidth="2"/>
                        <circle cx="266" cy="170" r="4" fill="#5D1826" stroke="#fff" strokeWidth="2"/>
                        <circle cx="532" cy="110" r="4" fill="#5D1826" stroke="#fff" strokeWidth="2"/>
                        <circle cx="800" cy="120" r="4" fill="#5D1826" stroke="#fff" strokeWidth="2"/>
                    </svg>
                    <div className="absolute bottom-0 w-full flex justify-between text-xs text-gray-400 pt-2"><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span></div>
                </div>
            </div>
            <div className="space-y-6">
                <div className="bg-[#5D1826] p-6 rounded-xl text-center text-white shadow-lg">
                    <h3 className="text-[#CFA855] font-serif text-lg mb-6">Your Promo Code</h3>
                    <div className="bg-white/10 rounded-lg p-4 mb-4 border border-white/20"><span className="text-3xl font-serif text-[#CFA855]">TREV507</span></div>
                    <button className="w-full bg-[#CFA855] text-[#5D1826] py-2 rounded font-bold text-sm mb-6 flex items-center justify-center gap-2"><Copy size={16}/> Copy Code</button>
                    <p className="text-xs text-gray-300 mb-2">Your Referral Link:</p>
                    <div className="bg-black/20 p-2 rounded text-xs text-gray-400 truncate mb-4">https://vitalglow.co.za/?ref=TREV507</div>
                    <button className="w-full bg-white/10 text-white py-2 rounded text-xs hover:bg-white/20">Copy Link</button>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="font-serif text-xl text-[#5D1826] mb-4">Payout Status</h3>
                    <div className="flex justify-between text-xs mb-2"><span className="text-gray-500">Progress to payout</span><span className="text-[#5D1826] font-bold">R450.00 / R300.00</span></div>
                    <div className="w-full bg-gray-100 rounded-full h-2 mb-4"><div className="bg-[#556B2F] h-2 rounded-full w-full"></div></div>
                    <div className="bg-green-50 p-3 rounded-lg flex gap-3 items-start mb-4"><CheckCircle size={16} className="text-green-600 mt-0.5" /><p className="text-xs text-green-800">Great job! You've reached the minimum threshold. Your payout will be processed at the end of the month.</p></div>
                    <p className="text-xs text-gray-400">Next Payout Date</p><p className="text-[#5D1826] font-bold">30 November 2025</p>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-6"><h3 className="font-serif text-xl text-[#5D1826]">Recent Sales</h3><button className="text-xs text-gray-400 hover:text-[#5D1826] flex items-center gap-1"><Download size={14}/> Export</button></div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-400 uppercase border-b border-gray-100"><tr><th className="pb-3 font-medium">Product</th><th className="pb-3 font-medium">Sale Amount</th><th className="pb-3 font-medium">Your Commission</th><th className="pb-3 font-medium">Date</th></tr></thead>
                        <tbody className="text-gray-600">{recentSales.map((sale, i) => (<tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50"><td className="py-4 text-[#5D1826] font-medium">{sale.product}</td><td className="py-4">{sale.amount}</td><td className="py-4 text-green-600 font-bold">{sale.commission}</td><td className="py-4 text-gray-400">{sale.date}</td></tr>))}</tbody>
                    </table>
                </div>
            </div>
             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-fit">
                <h3 className="font-serif text-xl text-[#5D1826] mb-6">Marketing Resources</h3>
                <div className="space-y-4">{["Product Photos", "Instagram Templates", "Brand Guidelines"].map((item, i) => (<div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer group"><span className="text-sm text-gray-600 group-hover:text-[#5D1826]">{item}</span><Download size={16} className="text-gray-400 group-hover:text-[#5D1826]" /></div>))}</div>
            </div>
        </div>
    </div>
  </div>
);

const Story = () => (
    <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="h-[400px] bg-gray-200 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">Baobab Tree Image</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div>
                <h2 className="text-4xl font-serif text-[#5D1826] mb-6">Rooted in African Wisdom</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">Vital Glow combines centuries-old African botanical knowledge with modern skincare science. Our products harness the power of indigenous ingredients like Marula, Baobab, and Rooibos.</p>
                <p className="text-gray-600 mb-8 leading-relaxed">Every product is ethically sourced, cruelty-free, and crafted with love in South Africa. We believe in beauty that honors both people and planet.</p>
                <div className="flex gap-4 flex-wrap">{["Organic Certified", "Fair Trade", "Woman-Owned"].map((tag, i) => (<span key={i} className="bg-[#E8ECE6] text-[#556B2F] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">{tag}</span>))}</div>
            </div>
        </div>
    </div>
);

// --- MAIN APP ---
const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [cart, setCart] = useState([]);
  const addToCart = (product) => { setCart([...cart, product]); alert(`Added ${product.name} to cart!`); };

  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white">
      <Navbar cartCount={cart.length} onViewChange={setCurrentView} currentView={currentView} />
      {currentView === 'home' && <Home onViewChange={setCurrentView} onAdd={addToCart} />}
      {currentView === 'shop' && <Shop items={products} addToCart={addToCart} />}
      {currentView === 'promoter' && <PromoterLanding onViewChange={setCurrentView} />}
      {currentView === 'dashboard' && <Dashboard />}
      {currentView === 'story' && <Story />}
      <Footer />
    </div>
  );
};

export default App;