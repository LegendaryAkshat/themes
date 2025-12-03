"use client";

import Link from "next/link";
import { 
  Layout, 
  ShoppingBag, 
  Mail, 
  MessageSquare, 
  HelpCircle, 
  Star, 
  Music, 
  Gift, 
  Newspaper,
  Menu,
  ArrowRight,
  Home,
  User,
  FileText,
  Headphones,
  Sparkles,
  Globe,
  CreditCard,
  ShoppingCart,
  Package,
  BookOpen,
  Tag,
  Settings
} from "lucide-react";

const pageCategories = [
  {
    name: "Navigation & Headers",
    icon: Menu,
    color: "from-blue-500 to-blue-600",
    pages: [
      { name: "Header 1", path: "/header-1" },
      { name: "Header 2", path: "/header-2" },
      { name: "Header 3", path: "/header-3" },
      { name: "Topbar 1", path: "/topbar-1" },
      { name: "Nav 1", path: "/nav-1" },
    ]
  },
  {
    name: "Hero Sections",
    icon: Sparkles,
    color: "from-purple-500 to-purple-600",
    pages: [
      { name: "Hero 1", path: "/hero-1" },
    ]
  },
  {
    name: "Products",
    icon: ShoppingBag,
    color: "from-green-500 to-green-600",
    pages: [
      { name: "Products 1", path: "/products-1" },
      { name: "Products 2", path: "/products-2" },
      { name: "Products 3", path: "/products-3" },
      { name: "Products 4", path: "/products-4" },
    ]
  },
  {
    name: "Categories",
    icon: Layout,
    color: "from-orange-500 to-orange-600",
    pages: [
      { name: "Categories 1", path: "/categories-1" },
      { name: "Categories 2", path: "/categories-2" },
      { name: "Categories 3", path: "/categories-3" },
    ]
  },
  {
    name: "Promotions",
    icon: Gift,
    color: "from-pink-500 to-pink-600",
    pages: [
      { name: "Promo 1", path: "/promo-1" },
      { name: "Promotions 1", path: "/promotions-1" },
      { name: "Promotions 2", path: "/promotions-2" },
      { name: "Promotions 3", path: "/promotions-3" },
    ]
  },
  {
    name: "Content Pages",
    icon: FileText,
    color: "from-indigo-500 to-indigo-600",
    pages: [
      { name: "About 1", path: "/about-1" },
      { name: "Blog 1", path: "/blog-1" },
      { name: "FAQ 1", path: "/faq-1" },
      { name: "Features 1", path: "/features-1" },
      { name: "Breadcrumb 1", path: "/breadcrumb-1" },
    ]
  },
  {
    name: "Contact & Forms",
    icon: Mail,
    color: "from-teal-500 to-teal-600",
    pages: [
      { name: "Contact 1", path: "/contact-1" },
      { name: "Contact 2", path: "/contact-2" },
    ]
  },
  {
    name: "Newsletter",
    icon: Newspaper,
    color: "from-cyan-500 to-cyan-600",
    pages: [
      { name: "Newsletter 1", path: "/newsletter-1" },
      { name: "Newsletter 2", path: "/newsletter-2" },
    ]
  },
  {
    name: "Testimonials",
    icon: Star,
    color: "from-yellow-500 to-yellow-600",
    pages: [
      { name: "Testimonials 1", path: "/testimonials-1" },
      { name: "Testimonials 2", path: "/testimonials-2" },
    ]
  },
  {
    name: "Music",
    icon: Music,
    color: "from-red-500 to-red-600",
    pages: [
      { name: "Music 1", path: "/music-1" },
      { name: "Music 2", path: "/music-2" },
    ]
  },
  {
    name: "Footers",
    icon: Layout,
    color: "from-gray-500 to-gray-600",
    pages: [
      { name: "Footer 1", path: "/footer-1" },
      { name: "Footer 2", path: "/footer-2" },
    ]
  },
  {
    name: "Ecomus - Homepage Sections",
    icon: Sparkles,
    color: "from-emerald-500 to-emerald-600",
    pages: [
      { name: "Topbar", path: "/ecomus-topbar" },
      { name: "Header", path: "/ecomus-header" },
      { name: "Hero Carousel", path: "/ecomus-hero" },
      { name: "Promo Banner", path: "/ecomus-promo-banner" },
      { name: "Categories", path: "/ecomus-categories" },
      { name: "Best Seller", path: "/ecomus-best-seller" },
      { name: "Shop the Look", path: "/ecomus-shop-look" },
      { name: "Testimonials", path: "/ecomus-testimonials" },
      { name: "Newsletter", path: "/ecomus-newsletter" },
      { name: "Footer", path: "/ecomus-footer" },
    ]
  },
  {
    name: "Ecomus - Shop Layouts",
    icon: ShoppingBag,
    color: "from-violet-500 to-violet-600",
    pages: [
      { name: "Shop Default", path: "/ecomus-shop-default" },
      { name: "Shop Left Sidebar", path: "/ecomus-shop-left-sidebar" },
      { name: "Shop Right Sidebar", path: "/ecomus-shop-right-sidebar" },
      { name: "Shop Fullwidth", path: "/ecomus-shop-fullwidth" },
      { name: "Shop Sub Collection", path: "/ecomus-shop-sub-collection" },
      { name: "Shop Collections List", path: "/ecomus-shop-collections-list" },
      { name: "Shop Filter Hidden", path: "/ecomus-shop-filter-hidden" },
      { name: "Pagination Links", path: "/ecomus-shop-pagination-links" },
      { name: "Pagination Load More", path: "/ecomus-shop-pagination-loadmore" },
      { name: "Pagination Infinite", path: "/ecomus-shop-pagination-infinite" },
    ]
  },
  {
    name: "Ecomus - Product Styles",
    icon: Package,
    color: "from-indigo-500 to-indigo-600",
    pages: [
      { name: "Product Style 01", path: "/ecomus-product-style-01" },
      { name: "Product Style 02", path: "/ecomus-product-style-02" },
      { name: "Product Style 03", path: "/ecomus-product-style-03" },
      { name: "Product Style 04", path: "/ecomus-product-style-04" },
      { name: "Product Style 05", path: "/ecomus-product-style-05" },
      { name: "Product Style 06", path: "/ecomus-product-style-06" },
      { name: "Product Style 07", path: "/ecomus-product-style-07" },
    ]
  },
  {
    name: "Ecomus - Product Details",
    icon: ShoppingBag,
    color: "from-blue-500 to-blue-600",
    pages: [
      { name: "Product Default", path: "/ecomus-product-default" },
      { name: "Product Detail", path: "/ecomus-product-detail" },
      { name: "Product Grid 1", path: "/ecomus-product-grid-1" },
      { name: "Product Grid 2", path: "/ecomus-product-grid-2" },
      { name: "Product Stacked", path: "/ecomus-product-stacked" },
      { name: "Product Right Thumbnails", path: "/ecomus-product-right-thumbnails" },
      { name: "Product Bottom Thumbnails", path: "/ecomus-product-bottom-thumbnails" },
      { name: "Product Drawer Sidebar", path: "/ecomus-product-drawer-sidebar" },
      { name: "Product Description Accordion", path: "/ecomus-product-description-accordion" },
      { name: "Product Description List", path: "/ecomus-product-description-list" },
      { name: "Product Description Vertical", path: "/ecomus-product-description-vertical" },
    ]
  },
  {
    name: "Ecomus - Product Zoom & Media",
    icon: Sparkles,
    color: "from-purple-500 to-purple-600",
    pages: [
      { name: "Product Inner Zoom", path: "/ecomus-product-inner-zoom" },
      { name: "Product Zoom Magnifier", path: "/ecomus-product-zoom-magnifier" },
      { name: "Product No Zoom", path: "/ecomus-product-no-zoom" },
      { name: "Product PhotoSwipe Popup", path: "/ecomus-product-photoswipe-popup" },
      { name: "Product External Zoom", path: "/ecomus-product-external-zoom" },
      { name: "Product Video", path: "/ecomus-product-video" },
      { name: "Product 3D AR", path: "/ecomus-product-3d-ar" },
    ]
  },
  {
    name: "Ecomus - Product Swatches",
    icon: Tag,
    color: "from-pink-500 to-pink-600",
    pages: [
      { name: "Product Color Swatch", path: "/ecomus-product-color-swatch" },
      { name: "Product Rectangle", path: "/ecomus-product-rectangle" },
      { name: "Product Rectangle Color", path: "/ecomus-product-rectangle-color" },
      { name: "Product Swatch Image", path: "/ecomus-product-swatch-image" },
      { name: "Product Swatch Image Rounded", path: "/ecomus-product-swatch-image-rounded" },
      { name: "Product Swatch Dropdown", path: "/ecomus-product-swatch-dropdown" },
      { name: "Product Swatch Dropdown Color", path: "/ecomus-product-swatch-dropdown-color" },
    ]
  },
  {
    name: "Ecomus - Product Features",
    icon: Gift,
    color: "from-orange-500 to-orange-600",
    pages: [
      { name: "Frequently Bought Together", path: "/ecomus-frequently-bought-together" },
      { name: "Frequently Bought Together 2", path: "/ecomus-frequently-bought-together-2" },
      { name: "Product Upsell", path: "/ecomus-product-upsell" },
      { name: "Product Pre-Order", path: "/ecomus-product-preorder" },
      { name: "Back in Stock", path: "/ecomus-back-in-stock" },
      { name: "Product Pickup", path: "/ecomus-product-pickup" },
      { name: "Variant Images Grouped", path: "/ecomus-variant-images-grouped" },
      { name: "Complimentary Products", path: "/ecomus-complimentary-products" },
      { name: "Quick Order List", path: "/ecomus-quick-order-list" },
      { name: "Volume Discount", path: "/ecomus-volume-discount" },
      { name: "Volume Discount Grid", path: "/ecomus-volume-discount-grid" },
      { name: "Buy X Get Y", path: "/ecomus-buy-x-get-y" },
    ]
  },
  {
    name: "Ecomus - Advanced Products",
    icon: Settings,
    color: "from-cyan-500 to-cyan-600",
    pages: [
      { name: "Product Options Customizer", path: "/ecomus-product-options-customizer" },
      { name: "Advanced Product Types", path: "/ecomus-advanced-product-types" },
      { name: "Gift Card Form", path: "/ecomus-gift-card-form" },
    ]
  },
  {
    name: "Ecomus - Checkout Flow",
    icon: ShoppingCart,
    color: "from-rose-500 to-rose-600",
    pages: [
      { name: "Cart", path: "/ecomus-cart" },
      { name: "Checkout", path: "/ecomus-checkout" },
      { name: "Payment Confirmation", path: "/ecomus-payment-confirmation" },
      { name: "Payment Failure", path: "/ecomus-payment-failure" },
      { name: "Buy Now", path: "/ecomus-buy-now" },
    ]
  },
  {
    name: "Ecomus - Account Pages",
    icon: User,
    color: "from-amber-500 to-amber-600",
    pages: [
      { name: "My Account", path: "/ecomus-account" },
      { name: "My Orders", path: "/ecomus-my-orders" },
      { name: "Order Details", path: "/ecomus-order-details" },
      { name: "My Addresses", path: "/ecomus-my-addresses" },
      { name: "Add Address", path: "/ecomus-add-address" },
      { name: "My Account Details", path: "/ecomus-my-account-details" },
      { name: "Wishlist", path: "/ecomus-wishlist" },
      { name: "Payment Methods", path: "/ecomus-payment-methods" },
      { name: "Edit Payment Method", path: "/ecomus-edit-payment-method" },
      { name: "Support Tickets", path: "/ecomus-support-tickets" },
      { name: "Ticket Details", path: "/ecomus-ticket-details" },
    ]
  },
  {
    name: "Ecomus - Blog Pages",
    icon: BookOpen,
    color: "from-teal-500 to-teal-600",
    pages: [
      { name: "Blog Grid", path: "/ecomus-blog" },
      { name: "Blog Left Sidebar", path: "/ecomus-blog-left-sidebar" },
      { name: "Blog Right Sidebar", path: "/ecomus-blog-right-sidebar" },
      { name: "Blog List", path: "/ecomus-blog-list" },
      { name: "Blog Single Post", path: "/ecomus-blog-single" },
    ]
  },
  {
    name: "Ecomus - Other Pages",
    icon: FileText,
    color: "from-slate-500 to-slate-600",
    pages: [
      { name: "About", path: "/ecomus-about" },
      { name: "Brands", path: "/ecomus-brands" },
      { name: "Brands V2", path: "/ecomus-brands-v2" },
      { name: "Contact 1", path: "/ecomus-contact-1" },
      { name: "Contact 2", path: "/ecomus-contact-2" },
      { name: "FAQ 01", path: "/ecomus-faq-01" },
      { name: "FAQ 02", path: "/ecomus-faq-02" },
      { name: "Our Store", path: "/ecomus-our-store" },
      { name: "Store Locator", path: "/ecomus-store-locator" },
      { name: "Timeline", path: "/ecomus-timeline" },
      { name: "Invoice", path: "/ecomus-invoice" },
      { name: "404 Page", path: "/ecomus-404" },
      { name: "Terms", path: "/ecomus-terms" },
    ]
  },
];

export default function HomePage() {
  const totalPages = pageCategories.reduce((sum, category) => sum + category.pages.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Theme Gallery
                </h1>
                <p className="text-sm text-gray-500">Browse and preview all sections</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">{totalPages}</div>
              <div className="text-xs text-gray-500">Total Pages</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Total Categories</p>
                <p className="text-3xl font-bold text-gray-900">{pageCategories.length}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <Layout className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Total Pages</p>
                <p className="text-3xl font-bold text-gray-900">{totalPages}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Ready to Use</p>
                <p className="text-3xl font-bold text-gray-900">100%</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-8">
          {pageCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Category Header */}
                <div className={`bg-gradient-to-r ${category.color} p-6`}>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">{category.name}</h2>
                      <p className="text-sm text-white/80">{category.pages.length} pages</p>
                    </div>
                  </div>
                </div>

                {/* Pages Grid */}
                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {category.pages.map((page, pageIndex) => (
                      <Link
                        key={pageIndex}
                        href={page.path}
                        className="group relative p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {page.name}
                          </h3>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-xs text-gray-500 group-hover:text-gray-600">
                          {page.path}
                        </p>
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center py-8">
          <p className="text-gray-500 text-sm">
            Click on any page to preview and inspect the design
          </p>
        </footer>
      </main>
    </div>
  );
}

