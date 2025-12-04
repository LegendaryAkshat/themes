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
  Settings,
  Camera,
  AlertCircle,
  Scale,
  Zap,
  MoreHorizontal,
  Heart,
  Users
} from "lucide-react";

const pageCategories = [
  {
    name: "Headers & Navigation",
    icon: Menu,
    color: "from-blue-500 to-blue-600",
    pages: [
      { name: "Header 1", path: "/header-1" },
      { name: "Header 2", path: "/header-2" },
      { name: "Header 3", path: "/header-3" },
      { name: "Ecomus Header", path: "/ecomus-header" },
      { name: "Topbar 1", path: "/topbar-1" },
      { name: "Ecomus Topbar", path: "/ecomus-topbar" },
      { name: "Nav 1", path: "/nav-1" },
    ]
  },
  {
    name: "Hero Sections",
    icon: Sparkles,
    color: "from-purple-500 to-purple-600",
    pages: [
      { name: "Hero 1", path: "/hero-1" },
      { name: "Hero 2", path: "/hero-2" },
      { name: "Hero 3", path: "/hero-3" },
      { name: "Ecomus Hero Carousel", path: "/ecomus-hero" },
    ]
  },
  {
    name: "Category Sections",
    icon: Layout,
    color: "from-orange-500 to-orange-600",
    pages: [
      { name: "Categories 1", path: "/categories-1" },
      { name: "Categories 2", path: "/categories-2" },
      { name: "Categories 3", path: "/categories-3" },
      { name: "Ecomus Categories", path: "/ecomus-categories" },
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
      { name: "Ecomus Best Seller", path: "/ecomus-best-seller" },
    ]
  },
  {
    name: "Product Styles",
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
    name: "Product Details",
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
    name: "Product Zoom & Media",
    icon: Camera,
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
    name: "Product Swatches",
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
    name: "Product Features",
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
    name: "Advanced Products",
    icon: Settings,
    color: "from-cyan-500 to-cyan-600",
    pages: [
      { name: "Product Options Customizer", path: "/ecomus-product-options-customizer" },
      { name: "Advanced Product Types", path: "/ecomus-advanced-product-types" },
      { name: "Gift Card Form", path: "/ecomus-gift-card-form" },
      { name: "Product Bundles", path: "/ecomus-product-bundles" },
    ]
  },
  {
    name: "Shop Layouts",
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
      { name: "Shop the Look", path: "/ecomus-shop-look" },
    ]
  },
  {
    name: "Pagination",
    icon: MoreHorizontal,
    color: "from-violet-400 to-violet-500",
    pages: [
      { name: "Pagination Links", path: "/ecomus-shop-pagination-links" },
      { name: "Pagination Load More", path: "/ecomus-shop-pagination-loadmore" },
      { name: "Pagination Infinite", path: "/ecomus-shop-pagination-infinite" },
      { name: "Pagination Numbers", path: "/ecomus-shop-pagination-numbers" },
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
      { name: "Ecomus Promo Banner", path: "/ecomus-promo-banner" },
    ]
  },
  {
    name: "Home Pages",
    icon: Home,
    color: "from-blue-500 to-blue-600",
    pages: [
      { name: "Blazity Home", path: "/blazity-home" },
      { name: "Catalyst Home", path: "/catalyst-home" },
      { name: "Headless Home", path: "/headless-home" },
      { name: "Headless Home 2", path: "/headless-home-2" },
      { name: "Headless Home 3", path: "/headless-home-3" },
      { name: "Headless Spring", path: "/headless-spring" },
      { name: "Vercel Store Home", path: "/vercel-store-home" },
      { name: "Vercel Store Home 2", path: "/vercel-store-home-2" },
      { name: "Vercel Store Home 3", path: "/vercel-store-home-3" },
      { name: "Vercel Store Home 4", path: "/vercel-store-home-4" },
    ]
  },
  {
    name: "Founder Words",
    icon: FileText,
    color: "from-purple-500 to-pink-500",
    pages: [
      { name: "Founder Words 1", path: "/founder-words-1" },
      { name: "Founder Words 2", path: "/founder-words-2" },
      { name: "Founder Words 3", path: "/founder-words-3" },
      { name: "Founder Words 4", path: "/founder-words-4" },
    ]
  },
  {
    name: "Our Values",
    icon: Heart,
    color: "from-blue-500 to-cyan-500",
    pages: [
      { name: "Our Values 1", path: "/our-values-1" },
      { name: "Our Values 2", path: "/our-values-2" },
      { name: "Our Values 3", path: "/our-values-3" },
      { name: "Our Values 4", path: "/our-values-4" },
    ]
  },
  {
    name: "What We Offer",
    icon: Gift,
    color: "from-green-500 to-emerald-500",
    pages: [
      { name: "What We Offer 1", path: "/what-we-offer-1" },
      { name: "What We Offer 2", path: "/what-we-offer-2" },
      { name: "What We Offer 3", path: "/what-we-offer-3" },
      { name: "What We Offer 4", path: "/what-we-offer-4" },
    ]
  },
  {
    name: "Our Team",
    icon: Users,
    color: "from-orange-500 to-red-500",
    pages: [
      { name: "Our Team 1", path: "/our-team-1" },
      { name: "Our Team 2", path: "/our-team-2" },
      { name: "Our Team 3", path: "/our-team-3" },
      { name: "Our Team 4", path: "/our-team-4" },
    ]
  },
  {
    name: "Our Belief",
    icon: Sparkles,
    color: "from-indigo-500 to-purple-500",
    pages: [
      { name: "Our Belief 1", path: "/our-belief-1" },
      { name: "Our Belief 2", path: "/our-belief-2" },
      { name: "Our Belief 3", path: "/our-belief-3" },
      { name: "Our Belief 4", path: "/our-belief-4" },
    ]
  },
  {
    name: "About Pages",
    icon: User,
    color: "from-amber-500 to-amber-600",
    pages: [
      { name: "About 1", path: "/about-1" },
      { name: "Catalyst About", path: "/catalyst-about" },
      { name: "Ecomus About", path: "/ecomus-about" },
      { name: "Headless About", path: "/headless-about" },
      { name: "Vercel Store About", path: "/vercel-store-about" },
    ]
  },
  {
    name: "Login Pages",
    icon: Settings,
    color: "from-indigo-500 to-indigo-600",
    pages: [
      { name: "Blazity Login", path: "/blazity-login" },
      { name: "Catalyst Login", path: "/catalyst-login" },
      { name: "Headless Login", path: "/headless-login" },
      { name: "Headless Login 2", path: "/headless-login-2" },
      { name: "Vercel Store Login", path: "/vercel-store-login" },
    ]
  },
  {
    name: "Register & Signup Pages",
    icon: User,
    color: "from-purple-500 to-purple-600",
    pages: [
      { name: "Blazity Register", path: "/blazity-register" },
      { name: "Catalyst Register", path: "/catalyst-register" },
      { name: "Headless Sign Up", path: "/headless-signup" },
      { name: "Headless Sign Up 2", path: "/headless-signup-2" },
      { name: "Vercel Store Sign Up", path: "/vercel-store-signup" },
    ]
  },
  {
    name: "Blog Pages",
    icon: BookOpen,
    color: "from-teal-500 to-teal-600",
    pages: [
      { name: "Blog 1", path: "/blog-1" },
      { name: "Catalyst Blog", path: "/catalyst-blog" },
      { name: "Catalyst Blog Post", path: "/catalyst-blog-post" },
      { name: "Blog Grid", path: "/ecomus-blog" },
      { name: "Blog Left Sidebar", path: "/ecomus-blog-left-sidebar" },
      { name: "Blog Right Sidebar", path: "/ecomus-blog-right-sidebar" },
      { name: "Blog List", path: "/ecomus-blog-list" },
      { name: "Blog Single Post", path: "/ecomus-blog-single" },
      { name: "Headless Blog", path: "/headless-blog" },
      { name: "Headless Blog Post", path: "/headless-blog-post" },
      { name: "Vercel Store Blog", path: "/vercel-store-blog" },
    ]
  },
  {
    name: "Contact Pages",
    icon: Mail,
    color: "from-blue-500 to-blue-600",
    pages: [
      { name: "Contact 1", path: "/contact-1" },
      { name: "Contact 2", path: "/contact-2" },
      { name: "Catalyst Contact", path: "/catalyst-contact" },
      { name: "Ecomus Contact 1", path: "/ecomus-contact-1" },
      { name: "Ecomus Contact 2", path: "/ecomus-contact-2" },
    ]
  },
  {
    name: "FAQ Pages",
    icon: HelpCircle,
    color: "from-yellow-500 to-yellow-600",
    pages: [
      { name: "FAQ 1", path: "/faq-1" },
      { name: "Catalyst FAQ", path: "/catalyst-faq" },
      { name: "FAQ 01", path: "/ecomus-faq-01" },
      { name: "FAQ 02", path: "/ecomus-faq-02" },
      { name: "Headless FAQ", path: "/headless-faq" },
      { name: "Vercel Store FAQ", path: "/vercel-store-faq" },
    ]
  },
  {
    name: "Newsletter Pages",
    icon: Newspaper,
    color: "from-cyan-500 to-cyan-600",
    pages: [
      { name: "Newsletter 1", path: "/newsletter-1" },
      { name: "Newsletter 2", path: "/newsletter-2" },
      { name: "Newsletter 3", path: "/newsletter-3" },
      { name: "Ecomus Newsletter", path: "/ecomus-newsletter" },
    ]
  },
  {
    name: "Testimonials",
    icon: Star,
    color: "from-yellow-500 to-yellow-600",
    pages: [
      { name: "Testimonials 1", path: "/testimonials-1" },
      { name: "Testimonials 2", path: "/testimonials-2" },
      { name: "Testimonials 3", path: "/testimonials-3" },
      { name: "Ecomus Testimonials", path: "/ecomus-testimonials" },
    ]
  },
  {
    name: "Footers",
    icon: Layout,
    color: "from-gray-500 to-gray-600",
    pages: [
      { name: "Footer 1", path: "/footer-1" },
      { name: "Footer 2", path: "/footer-2" },
      { name: "Footer 3", path: "/footer-3" },
      { name: "Ecomus Footer", path: "/ecomus-footer" },
    ]
  },
  {
    name: "Cart Pages",
    icon: ShoppingCart,
    color: "from-rose-500 to-rose-600",
    pages: [
      { name: "Blazity Cart", path: "/blazity-cart" },
      { name: "Catalyst Cart", path: "/catalyst-cart" },
      { name: "Ecomus Cart", path: "/ecomus-cart" },
      { name: "Headless Cart", path: "/headless-cart" },
      { name: "Vercel Store Cart", path: "/vercel-store-cart" },
    ]
  },
  {
    name: "Checkout Pages",
    icon: CreditCard,
    color: "from-pink-500 to-pink-600",
    pages: [
      { name: "Blazity Checkout", path: "/blazity-checkout" },
      { name: "Blazity Checkout Success", path: "/blazity-checkout-success" },
      { name: "Blazity Checkout Cancelled", path: "/blazity-checkout-cancelled" },
      { name: "Catalyst Checkout", path: "/catalyst-checkout" },
      { name: "Catalyst Checkout Success", path: "/catalyst-checkout-success" },
      { name: "Catalyst Checkout Cancelled", path: "/catalyst-checkout-cancelled" },
      { name: "Ecomus Checkout", path: "/ecomus-checkout" },
      { name: "Ecomus Payment Confirmation", path: "/ecomus-payment-confirmation" },
      { name: "Ecomus Payment Failure", path: "/ecomus-payment-failure" },
      { name: "Ecomus Buy Now", path: "/ecomus-buy-now" },
      { name: "Headless Checkout", path: "/headless-checkout" },
      { name: "Headless Checkout Success", path: "/headless-checkout-success" },
      { name: "Headless Checkout Failure", path: "/headless-checkout-failure" },
      { name: "Vercel Store Checkout", path: "/vercel-store-checkout" },
      { name: "Vercel Store Checkout Success", path: "/vercel-store-checkout-success" },
      { name: "Vercel Store Checkout Cancelled", path: "/vercel-store-checkout-cancelled" },
    ]
  },
  {
    name: "Account Pages",
    icon: User,
    color: "from-amber-500 to-amber-600",
    pages: [
      { name: "Blazity Account", path: "/blazity-account" },
      { name: "Blazity Account Orders", path: "/blazity-account-orders" },
      { name: "Blazity Account Order Detail", path: "/blazity-account-order-detail" },
      { name: "Blazity Account Profile", path: "/blazity-account-profile" },
      { name: "Blazity Account Addresses", path: "/blazity-account-addresses" },
      { name: "Catalyst Account", path: "/catalyst-account" },
      { name: "Catalyst Account Orders", path: "/catalyst-account-orders" },
      { name: "Catalyst Account Order Detail", path: "/catalyst-account-order-detail" },
      { name: "Catalyst Account Addresses", path: "/catalyst-account-addresses" },
      { name: "Catalyst Account Profile", path: "/catalyst-account-profile" },
      { name: "Ecomus Account", path: "/ecomus-account" },
      { name: "Ecomus My Orders", path: "/ecomus-my-orders" },
      { name: "Ecomus Order Details", path: "/ecomus-order-details" },
      { name: "Ecomus My Addresses", path: "/ecomus-my-addresses" },
      { name: "Ecomus Add Address", path: "/ecomus-add-address" },
      { name: "Ecomus My Account Details", path: "/ecomus-my-account-details" },
      { name: "Ecomus Wishlist", path: "/ecomus-wishlist" },
      { name: "Ecomus Payment Methods", path: "/ecomus-payment-methods" },
      { name: "Ecomus Edit Payment Method", path: "/ecomus-edit-payment-method" },
      { name: "Ecomus Support Tickets", path: "/ecomus-support-tickets" },
      { name: "Ecomus Ticket Details", path: "/ecomus-ticket-details" },
      { name: "Headless Account", path: "/headless-account" },
      { name: "Headless Account Orders", path: "/headless-account-orders" },
      { name: "Headless Account Order Detail", path: "/headless-account-order-detail" },
      { name: "Headless Account Addresses", path: "/headless-account-addresses" },
      { name: "Vercel Store Account", path: "/vercel-store-account" },
      { name: "Vercel Store Account Orders", path: "/vercel-store-account-orders" },
      { name: "Vercel Store Account Profile", path: "/vercel-store-account-profile" },
      { name: "Vercel Store Account Addresses", path: "/vercel-store-account-addresses" },
      { name: "Vercel Store Account Wishlist", path: "/vercel-store-account-wishlist" },
    ]
  },
  {
    name: "Music",
    icon: Music,
    color: "from-red-500 to-red-600",
    pages: [
      { name: "Music 1", path: "/music-1" },
      { name: "Music 2", path: "/music-2" },
      { name: "Music 3", path: "/music-3" },
      { name: "Music 4", path: "/music-4" },
    ]
  },
  {
    name: "Features",
    icon: Zap,
    color: "from-indigo-500 to-indigo-600",
    pages: [
      { name: "Features 1", path: "/features-1" },
      { name: "Features 2", path: "/features-2" },
      { name: "Features 3", path: "/features-3" },
      { name: "Features 4", path: "/features-4" },
    ]
  },
  {
    name: "Breadcrumbs",
    icon: FileText,
    color: "from-slate-500 to-slate-600",
    pages: [
      { name: "Breadcrumb 1", path: "/breadcrumb-1" },
      { name: "Breadcrumb 2", path: "/breadcrumb-2" },
      { name: "Breadcrumb 3", path: "/breadcrumb-3" },
      { name: "Breadcrumb 4", path: "/breadcrumb-4" },
    ]
  },
  {
    name: "Error Pages",
    icon: AlertCircle,
    color: "from-red-500 to-red-600",
    pages: [
      { name: "Blazity 404", path: "/blazity-404" },
      { name: "Blazity 500", path: "/blazity-500" },
      { name: "Catalyst 404", path: "/catalyst-404" },
      { name: "Ecomus 404", path: "/ecomus-404" },
      { name: "Headless 403", path: "/headless-403" },
      { name: "Headless 404", path: "/headless-404" },
      { name: "Headless 500", path: "/headless-500" },
      { name: "Headless 503", path: "/headless-503" },
      { name: "Vercel Store 404", path: "/vercel-store-404" },
    ]
  },
  {
    name: "Legal Pages",
    icon: Scale,
    color: "from-slate-600 to-slate-700",
    pages: [
      { name: "Catalyst Privacy Policy", path: "/catalyst-privacy" },
      { name: "Catalyst Terms of Service", path: "/catalyst-terms" },
      { name: "Ecomus Terms", path: "/ecomus-terms" },
      { name: "Headless Privacy Policy", path: "/headless-privacy" },
      { name: "Headless Terms of Use", path: "/headless-terms" },
      { name: "Vercel Store Terms", path: "/vercel-store-terms" },
      { name: "Vercel Store Privacy", path: "/vercel-store-privacy" },
      { name: "Vercel Store Shipping & Return", path: "/vercel-store-shipping-return" },
    ]
  },
  {
    name: "Other Pages",
    icon: FileText,
    color: "from-slate-500 to-slate-600",
    pages: [
      { name: "Brands", path: "/ecomus-brands" },
      { name: "Brands V2", path: "/ecomus-brands-v2" },
      { name: "Our Store", path: "/ecomus-our-store" },
      { name: "Store Locator", path: "/ecomus-store-locator" },
      { name: "Timeline", path: "/ecomus-timeline" },
      { name: "Invoice", path: "/ecomus-invoice" },
    ]
  },
  {
    name: "Product Detail Pages",
    icon: ShoppingBag,
    color: "from-green-500 to-green-600",
    pages: [
      { name: "Blazity Product Detail", path: "/blazity-product-detail" },
      { name: "Catalyst Product Detail", path: "/catalyst-product-detail" },
      { name: "Headless Product Detail", path: "/headless-product-detail" },
      { name: "Vercel Store Product Detail", path: "/vercel-store-product-detail" },
    ]
  },
  {
    name: "Product List & Grid Pages",
    icon: Package,
    color: "from-emerald-500 to-emerald-600",
    pages: [
      { name: "Blazity Product Grid", path: "/blazity-product-grid" },
      { name: "Blazity Product List", path: "/blazity-product-list" },
      { name: "Catalyst Product Grid", path: "/catalyst-product-grid" },
      { name: "Catalyst Product List", path: "/catalyst-product-list" },
      { name: "Headless Product List", path: "/headless-product-list" },
      { name: "Vercel Store Product Grid", path: "/vercel-store-product-grid" },
      { name: "Vercel Store Product List", path: "/vercel-store-product-list" },
    ]
  },
  {
    name: "Product Compare Pages",
    icon: ShoppingBag,
    color: "from-teal-500 to-teal-600",
    pages: [
      { name: "Blazity Product Compare", path: "/blazity-product-compare" },
      { name: "Catalyst Product Compare", path: "/catalyst-product-compare" },
    ]
  },
  {
    name: "Category & Collection Pages",
    icon: Layout,
    color: "from-orange-500 to-orange-600",
    pages: [
      { name: "Blazity Category", path: "/blazity-category" },
      { name: "Catalyst Category", path: "/catalyst-category" },
      { name: "Headless Collection", path: "/headless-collection" },
    ]
  },
  {
    name: "Search Pages",
    icon: Globe,
    color: "from-cyan-500 to-cyan-600",
    pages: [
      { name: "Blazity Search", path: "/blazity-search" },
      { name: "Catalyst Search", path: "/catalyst-search" },
      { name: "Headless Search", path: "/headless-search" },
      { name: "Vercel Store Search", path: "/vercel-store-search" },
    ]
  },
  {
    name: "Brand Pages",
    icon: Tag,
    color: "from-violet-500 to-violet-600",
    pages: [
      { name: "Catalyst Brand", path: "/catalyst-brand" },
    ]
  },
  {
    name: "Password Pages",
    icon: Settings,
    color: "from-slate-500 to-slate-600",
    pages: [
      { name: "Vercel Store Forgot Password", path: "/vercel-store-forgot-password" },
      { name: "Vercel Store Reset Password", path: "/vercel-store-reset-password" },
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

