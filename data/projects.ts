export interface ProjectScreen {
  label: string
  src: string
  caption: string
}

export interface ProjectModule {
  id: string
  name: string
  tag: string
  description: string
  highlights: string[]
}

export interface ArchitectureStep {
  step: string
  title: string
  detail: string
}

export interface EngineeringChallenge {
  challenge: string
  solution: string
}

export interface MetricBenchmark {
  metric: string
  label: string
  detail: string
}

export interface Project {
  id: string
  title: string
  tagline: string
  year: string
  type: 'Web Platform' | 'Mobile App' | 'Full-Stack Web'
  status: 'Live' | 'In Development' | 'Completed'
  platformBadge: string
  browserUrl?: string
  coverImage?: string
  description: string
  longDescription: string
  highlights: { icon: string; label: string }[]
  tech: string[]
  liveUrl?: string
  repoUrl?: string
  screens: ProjectScreen[]
  modules: ProjectModule[]
  architectureFlow: ArchitectureStep[]
  challenges: EngineeringChallenge[]
  benchmarks: MetricBenchmark[]
}

export const projects: Project[] = [
  {
    id: 'gardenmate',
    title: 'GardenMate Ecosystem',
    tagline: 'Custom Vision Transformer AI + Viro AR mobile platform with 12+ modules.',
    year: '2024–25',
    type: 'Mobile App',
    status: 'Completed',
    platformBadge: 'React Native & Expo SDK 54',
    coverImage: '/images/gardenmate/2.jpeg',
    description:
      'AI-powered, AR-integrated smart gardening assistant and plant marketplace featuring 12+ specialized modules and a 60/40 ViT+PlantNet ensemble pipeline.',
    longDescription:
      'A full-stack mobile ecosystem engineered for React Native and Expo SDK 54, integrating spatial augmented reality, custom deep learning computer vision, and a 4-tier commerce architecture. At its algorithmic core sits a custom fine-tuned Vision Transformer (ViT-B/16) model combined with the PlantNet botanic API in a weighted 60%+40% ensemble decision pipeline. Users can test-place photorealistic 3D botanical models in physical environments using Viro React AR plane detection before purchasing via Stripe, while vendors leverage camera AI to auto-populate marketplace listings with full botanical specifications in seconds.',
    highlights: [
      { icon: '🧠', label: '60% ViT + 40% PlantNet AI ensemble pipeline for species detection' },
      { icon: '🌿', label: 'Viro React AR plane detection for "Place Before You Buy"' },
      { icon: '📸', label: 'Snap-to-Autolist: camera photo auto-fills complete product specs' },
      { icon: '🏷️', label: 'Vendor autolist by plant name with automatic botanic graph lookup' },
      { icon: '🏪', label: '4-role ecosystem: Customer, Vendor, Rider & Admin portals' },
      { icon: '⚖️', label: 'Dispute & damage resolution portal with photo proof verification' },
      { icon: '💼', label: 'Admin commission engine with 10% take-rate ledger & payouts' },
      { icon: '🌤️', label: 'Localized micro-climate telemetry adjusting watering schedules' },
    ],
    tech: [
      'React Native',
      'Expo SDK 54',
      'TypeScript',
      'PyTorch (ViT)',
      'PlantNet API',
      'FastAPI',
      'Viro React (AR)',
      'Firebase Suite',
      'Stripe Mobile SDK',
      'OpenWeather API',
      'Cloudinary',
    ],
    repoUrl: 'https://github.com/umairulhassancs/gardenmate',
    screens: [
      {
        label: '01 Auth & Login',
        src: '/images/gardenmate/1.jpeg',
        caption: 'Personalized onboarding and secure multi-role authentication',
      },
      {
        label: '02 Care Dashboard',
        src: '/images/gardenmate/2.jpeg',
        caption: 'Daily plant reminders, localized weather telemetry & garden monitoring',
      },
      {
        label: '03 AR Plane Detection',
        src: '/images/gardenmate/3.jpeg',
        caption: 'Viro React spatial engine initializing 3D coordinate axes and plane detection',
      },
      {
        label: '04 AR 3D Plant Placement',
        src: '/images/gardenmate/4.jpeg',
        caption: 'Interactive 3D plant placement with tabletop surface detection (85% confidence)',
      },
      {
        label: '05 Plant Marketplace',
        src: '/images/gardenmate/5.jpeg',
        caption: 'Categorized plant catalog with search, deals, and direct checkout',
      },
      {
        label: '06 Cart & Checkout',
        src: '/images/gardenmate/6.jpeg',
        caption: 'Multi-item shopping cart, delivery calculation, and direct Stripe checkout',
      },
      {
        label: '07 Dispute & Support Chat',
        src: '/images/gardenmate/7.jpeg',
        caption: 'Real-time customer-vendor dispute resolution with photo damage verification',
      },
      {
        label: '08 Snap-to-Autolist AI',
        src: '/images/gardenmate/8.jpeg',
        caption: 'Vision classifier detecting Tomato Plant at 75% confidence with auto-filled specs',
      },
      {
        label: '09 Admin & Commission Portal',
        src: '/images/gardenmate/9.jpeg',
        caption: 'Executive platform oversight with marketplace commission metrics and vendor tracking',
      },
    ],
    modules: [
      {
        id: 'vit-pipeline',
        name: 'Hybrid ViT + PlantNet AI Ensemble (60% / 40%)',
        tag: 'Deep Learning & Vision',
        description:
          'A proprietary dual-inference pipeline combining a fine-tuned PyTorch Vision Transformer (ViT-B/16) with the PlantNet botanical API. The model runs a 60%+40% weighted confidence fusion: 60% probability weight is allocated to the local ViT classifier and 40% to the global PlantNet API, maximizing accuracy across regional and exotic flora.',
        highlights: [
          '60% confidence weight from fine-tuned PyTorch Vision Transformer (ViT)',
          '40% confidence weight from PlantNet global botanical API',
          'Softmax probability fusion with automated confidence threshold (>75%)',
          'FastAPI asynchronous inference microservice with GPU tensor quantization',
        ],
      },
      {
        id: 'ar-visualizer',
        name: 'AR Spatial Visualizer ("Place Before You Buy")',
        tag: 'Spatial Computing',
        description:
          'Utilizes Viro React spatial computing to detect real-world horizontal surfaces (tabletops, floors, patio grounds). Renders photorealistic 3D plant models with dynamic shadows, 360-degree rotation, scale lock, and surface confidence scoring (e.g. Tabletop · 85%).',
        highlights: [
          'Horizontal plane detection with real-time confidence feedback',
          'Interactive rotation, altitude adjustment, and scale locking controls',
          'Direct "Place in AR" integration from marketplace plant detail pages',
          'Sub-frame latency rendering 3D GLTF botanical models',
        ],
      },
      {
        id: 'snap-autolist-image',
        name: 'Vendor Snap-to-Autolist by Image',
        tag: 'Automation AI',
        description:
          'Eliminates manual catalog entry for plant nurseries. Merchants snap or upload a plant photo; the AI ensemble identifies the species (e.g. Tomato Plant · 75% confidence) and automatically populates botanical name, care requirements, sun exposure, watering cycle, and suggested price range.',
        highlights: [
          'One-tap camera photo or gallery upload analysis',
          'Automated modal confirmation with detected species and confidence score',
          'Auto-fills title, botanical description, care guide, and category tags',
          'Reduces vendor catalog onboarding time from 10 minutes to under 15 seconds',
        ],
      },
      {
        id: 'autolist-name',
        name: 'Vendor Autolist by Name',
        tag: 'Knowledge Graph',
        description:
          'Merchants typing a plant name (e.g. "Golden Barrel Cactus") trigger an automated knowledge lookup that populates scientific taxonomy, recommended soil type, growth rate, and watering intervals without requiring manual research.',
        highlights: [
          'Taxonomic database lookup on text input keystrokes',
          'Auto-fills optimal temperature ranges, sunlight needs, and toxicity warnings',
          'Editable prepopulated draft cards before final marketplace publication',
        ],
      },
      {
        id: 'care-engine',
        name: 'Care Engine & Smart Reminders',
        tag: 'Personal Assistant',
        description:
          'A centralized plant care management system that generates individualized schedules for watering, fertilizing, repotting, and pruning for each plant in the user garden.',
        highlights: [
          'Daily task queue with completion checkboxes and snooze options',
          'Localized weather telemetry from OpenWeather API (temp, rain forecast, humidity)',
          'Automated schedule adjustments during extreme heat or rainy seasons',
        ],
      },
      {
        id: 'marketplace',
        name: 'Multi-Vendor Plant Marketplace',
        tag: 'E-Commerce Core',
        description:
          'A comprehensive marketplace connecting regional plant nurseries with plant enthusiasts. Features categorized discovery (Indoor, Outdoor, Flowers, Fruits, Deals), search filters, and AR preview badges.',
        highlights: [
          'Custom curated "For You" feed based on user garden history',
          'AR quick-scan badge directly on product listing cards',
          'Live inventory and stock status tracking (e.g. Out of Stock badges)',
        ],
      },
      {
        id: 'cart-checkout',
        name: 'Multi-Item Cart & Stripe Checkout',
        tag: 'Payments & Cart',
        description:
          'High-performance shopping cart supporting multi-vendor purchases, regional delivery fee calculations, free delivery threshold progress indicators, and secure Stripe payment processing.',
        highlights: [
          'Item quantity incrementors with live stock constraints',
          'Dynamic delivery fee calculation and promotion threshold banners',
          'Stripe Mobile SDK checkout with multi-currency PKR/USD support',
        ],
      },
      {
        id: 'dispute-resolution',
        name: 'Order Dispute & Photo Proof Portal',
        tag: 'Customer Support',
        description:
          'A dedicated ticket-based dispute resolution system for live plant deliveries. Customers receiving damaged pots or wilted plants can file a critical ticket, upload photo evidence, and chat directly with the vendor for resolution.',
        highlights: [
          'Structured ticket metadata (e.g. Ticket ID, Order ID, Severity, Status)',
          'In-chat photo proof upload with Cloudinary image storage',
          'Real-time vendor-buyer messaging with admin escalation options',
        ],
      },
      {
        id: 'admin-commission',
        name: 'Executive Admin & Commission Engine',
        tag: 'Platform Governance',
        description:
          'Central administrative portal for platform governance. Monitors total collected commissions (10% platform take-rate), pending vendor disbursements, active vendor counts, total users, and open complaint tickets.',
        highlights: [
          '10% automated platform commission calculation on every transaction',
          'Executive KPI overview: Total Users, Active Vendors, Listed Plants, Open Disputes',
          'Vendor payout verification and approval state machine',
        ],
      },
      {
        id: 'vendor-wallet',
        name: 'Vendor Wallet & Settlement Ledger',
        tag: 'Financial Ledger',
        description:
          'Dedicated merchant portal displaying real-time revenue analytics, order status progression, weekly payout settlements, and balance withdrawal requests.',
        highlights: [
          'Gross sales vs. net earnings post 10% commission deductions',
          'Historical transaction ledger with payout status tracking',
          'Weekly automated bank transfer reconciliation',
        ],
      },
      {
        id: 'community-feed',
        name: 'Gardening Community & Consultation',
        tag: 'Social & Engagement',
        description:
          'Interactive social hub where plant owners share progress pictures, ask botanical questions, exchange tips, and request plant health diagnoses from experienced botanists.',
        highlights: [
          'Photo sharing community feed with like and comment threads',
          'Botanist verification badges for expert contributors',
          'Direct integration linking community posts to marketplace plant listings',
        ],
      },
      {
        id: 'rbac-architecture',
        name: '4-Tier Role-Based Access Control',
        tag: 'Security & Auth',
        description:
          'Strict architectural segregation separating Customer, Vendor, Delivery Rider, and Super Administrator interfaces with Firebase Auth and scoped Firestore security rules.',
        highlights: [
          'Customer portal: AR scan, care reminders, orders, and dispute filing',
          'Vendor portal: Snap-to-autolist, inventory manager, and wallet ledger',
          'Rider portal: Real-time routing, dispatch pickup, and delivery confirmation',
          'Admin portal: Commission oversight, vendor audits, and system dispute mediation',
        ],
      },
    ],
    architectureFlow: [
      {
        step: '01',
        title: 'Camera Frame Acquisition',
        detail: 'User or vendor captures plant leaf or flower via camera; frame is downscaled and normalized into an RGB tensor.',
      },
      {
        step: '02',
        title: '60/40 Dual-Inference Ensemble',
        detail: 'Image tensor is sent in parallel to PyTorch ViT-B/16 (60% weight) and PlantNet API (40% weight).',
      },
      {
        step: '03',
        title: 'Confidence Fusion & Auto-Fill',
        detail: 'Softmax probabilities are aggregated; if confidence exceeds 75%, botanical specifications are automatically populated.',
      },
      {
        step: '04',
        title: 'Spatial Plane Mapping',
        detail: 'Viro React initializes 3D coordinate planes on horizontal ground surfaces to anchor photorealistic 3D GLTF models.',
      },
      {
        step: '05',
        title: 'Stripe Settlement & Commission',
        detail: 'Order is finalized via Stripe; 10% platform commission is routed to admin ledger and 90% is settled to vendor wallet.',
      },
    ],
    challenges: [
      {
        challenge: 'ViT Model Latency on Mobile Devices',
        solution:
          'Running a full Vision Transformer directly on low-end mobile hardware caused thermal throttling and 3s+ latency. Engineered a hybrid architecture where lightweight tensor normalization runs on-device, while inference is dispatched to a GPU-accelerated asynchronous FastAPI microservice, dropping response times to under 350ms.',
      },
      {
        challenge: 'AR Plane Jitter & Drift on Indoor Carpets',
        solution:
          'Standard plane detection struggled with low-contrast textured surfaces like carpets. Implemented a spatial confidence filter that locks coordinate axes only when surface feature tracking confidence exceeds 80%, providing rock-solid 3D plant stability.',
      },
      {
        challenge: 'Accuracy Variance Across Exotic Plant Classes',
        solution:
          'Standalone models suffered from class imbalance on rare plant varieties. Architected the 60%+40% ensemble fusion: fine-tuned PyTorch ViT handles common regional species with high precision, while PlantNet API serves as a global taxonomy fail-safe.',
      },
    ],
    benchmarks: [
      { metric: '<350ms', label: 'AI Inference Latency', detail: 'FastAPI microservice response time' },
      { metric: '60% / 40%', label: 'ViT + PlantNet Split', detail: 'Weighted ensemble decision engine' },
      { metric: '85%+', label: 'AR Plane Confidence', detail: 'Tabletop surface detection stability' },
      { metric: '12+', label: 'Integrated Modules', detail: 'End-to-end full-stack ecosystem' },
    ],
  },
  {
    id: 'vouch',
    title: 'Vouch Keychain',
    tagline: 'Cryptographic QR item recovery & real-time telemetry.',
    year: '2024–25',
    type: 'Web Platform',
    status: 'Live',
    platformBadge: 'Production Web SaaS',
    browserUrl: 'https://vouchkeychain.vercel.app',
    coverImage: '/images/vouch/Screenshot 2026-09-04 090313.png',
    description:
      'Smart QR-coded keychains that reunite lost items with their owners — instantly, securely, and anonymously.',
    longDescription:
      'A production SaaS platform bridging physical hardware tags with a digital recovery protocol. Users attach a cryptographic Vouch QR tag to valuables (keys, bags, electronics). When scanned by a finder with any smartphone camera, the system immediately logs real-time GPS coordinates, fires multi-channel automated alerts (Twilio SMS/Voice + Resend Email), and opens an encrypted masked communication channel without exposing phone numbers or email addresses.',
    highlights: [
      { icon: '🔒', label: 'Zero personal data exposed: phone and email completely masked' },
      { icon: '📡', label: 'Instant GPS coordinate capture & reverse geocoding on scan' },
      { icon: '💬', label: 'Two-way encrypted WebSocket chat between finder and owner' },
      { icon: '🚨', label: 'Parallel multi-channel dispatch: Twilio SMS, Voice call & Resend Email' },
      { icon: '📦', label: 'Interactive Three.js 3D hardware visualizer for stickers & keychains' },
      { icon: '⚡', label: 'Live in production on Vercel with sub-second scan routing' },
    ],
    tech: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Firebase Suite',
      'Twilio SMS/Voice',
      'Resend',
      'Three.js',
      'Tailwind CSS v4',
      'Google Maps API',
      'Stripe',
    ],
    liveUrl: 'https://vouchkeychain.vercel.app',
    repoUrl: 'https://github.com/umairulhassancs/vouch',
    screens: [
      {
        label: 'Product Landing',
        src: '/images/vouch/Screenshot 2026-09-04 090313.png',
        caption: 'High-conversion SaaS storefront with interactive 3D product preview',
      },
      {
        label: 'Privacy Architecture',
        src: '/images/vouch/Screenshot 2026-09-04 090416.png',
        caption: 'Finder interface: zero personal information exposed to finders',
      },
      {
        label: 'Hardware Store',
        src: '/images/vouch/Screenshot 2026-09-04 090455.png',
        caption: 'Hardware tag catalog with QR stickers, classic and whistle keychains',
      },
      {
        label: 'Owner Dashboard',
        src: '/images/vouch/Screenshot 2026-09-04 090719.png',
        caption: 'Protected items overview, recovery rates, and recent scan telemetry',
      },
      {
        label: 'Notification Logs',
        src: '/images/vouch/Screenshot 2026-09-04 090739.png',
        caption: 'Multi-channel alert dispatch logs with automated escalation rules',
      },
      {
        label: 'Live GPS Telemetry',
        src: '/images/vouch/Screenshot 2026-09-04 090821.png',
        caption: 'Real-time Google Maps coordinate telemetry & finder device identification',
      },
      {
        label: 'Two-Way Chat',
        src: '/images/vouch/Screenshot 2026-09-04 090921.png',
        caption: 'Anonymous encrypted messaging between item owner and finder',
      },
      {
        label: 'Subscription Plans',
        src: '/images/vouch/Screenshot 2026-09-04 091021.png',
        caption: 'Tiered protection memberships with automated recurring billing',
      },
      {
        label: 'Item Activation',
        src: '/images/vouch/Screenshot 2026-09-04 091328.png',
        caption: 'Instant cryptographic QR tag pairing and recovery contact setup',
      },
    ],
    modules: [
      {
        id: 'qr-telemetry',
        name: 'Cryptographic QR Telemetry Protocol',
        tag: 'Telemetry & IoT',
        description:
          'Each physical keychain contains a unique cryptographic QR token. When scanned, the system performs a zero-install browser handshake, logs GPS coordinates, timestamp, and device user-agent without requiring the finder to download an app.',
        highlights: [
          'Unique cryptographic short-link token routing',
          'Zero app installation required for finders',
          'Automatic GPS latitude/longitude capture with reverse geocoding',
        ],
      },
      {
        id: 'privacy-masking',
        name: 'Zero-PII Identity Masking Layer',
        tag: 'Privacy Architecture',
        description:
          'Finders are presented with an anonymous recovery portal. The owner identity, email, and phone number are completely obfuscated to prevent stalking, identity theft, or extortion.',
        highlights: [
          'Zero PII exposed to finders on scan landing pages',
          'Masked proxy routing for owner communication',
          'Secure token revocation if an item is decommissioned',
        ],
      },
      {
        id: 'multi-alert',
        name: 'Parallel Multi-Channel Dispatch Engine',
        tag: 'Notification Infrastructure',
        description:
          'A fault-tolerant notification engine that broadcasts parallel alerts across multiple channels upon a scan event: Twilio SMS, automated Twilio Voice call, and transactional Resend email with interactive location maps.',
        highlights: [
          'Twilio SMS automated dispatch with instant scan alert',
          'Twilio Voice automated phone call escalation for high-priority items',
          'Resend transactional email containing Google Maps coordinates',
        ],
      },
      {
        id: 'masked-chat',
        name: 'Two-Way Masked WebSocket Chat',
        tag: 'Real-Time Communication',
        description:
          'A secure, ephemeral WebSocket chat room created dynamically upon scanning. Allows owner and finder to coordinate item handover without disclosing personal phone numbers or messaging IDs.',
        highlights: [
          'End-to-end masked messaging channel',
          'Auto-terminating chat sessions post item recovery',
          'Real-time delivery receipts and message indicators',
        ],
      },
      {
        id: 'threejs-store',
        name: 'Three.js 3D Hardware Store Visualizer',
        tag: '3D Graphics',
        description:
          'Interactive 3D hardware visualizer built in Three.js allowing customers to inspect physical hardware tags (classic keychain, QR sticker, whistle tag) with dynamic metallic reflections and real-time lighting.',
        highlights: [
          '360-degree interactive 3D model rotation and zoom',
          'Dynamic physical material reflections (matte, brushed steel, polycarbonate)',
          'E-commerce cart integration with Stripe checkout',
        ],
      },
      {
        id: 'owner-telemetry',
        name: 'Executive Owner Dashboard & Fleet Ledger',
        tag: 'Dashboard & Analytics',
        description:
          'Comprehensive asset management dashboard where users register tags, review recovery history, track live GPS locations on Google Maps, and manage annual protection plans.',
        highlights: [
          'Real-time Google Maps asset location pin tracking',
          'Multi-item fleet management for businesses and families',
          'Item status toggling (Protected, Reported Lost, Recovered)',
        ],
      },
    ],
    architectureFlow: [
      {
        step: '01',
        title: 'Cryptographic Scan',
        detail: 'Finder scans physical QR token; browser handshakes with Vouch short-link router without app install.',
      },
      {
        step: '02',
        title: 'GPS Telemetry Capture',
        detail: 'Browser requests geolocation permission; coordinates, timestamp, and device metadata are securely logged.',
      },
      {
        step: '03',
        title: 'Parallel Alert Dispatch',
        detail: 'Server simultaneously dispatches Twilio SMS, Twilio automated Voice call, and Resend email to owner.',
      },
      {
        step: '04',
        title: 'Masked Chat Session',
        detail: 'Ephemeral WebSocket channel opens for owner and finder to arrange safe handover with zero PII shared.',
      },
      {
        step: '05',
        title: 'Recovery & Token Reset',
        detail: 'Owner confirms receipt in dashboard; chat session closes and item telemetry resets to protected state.',
      },
    ],
    challenges: [
      {
        challenge: 'Zero-Install GPS Capture Across Diverse Mobile Browsers',
        solution:
          'Requiring finders to download a native app would kill recovery rates. Engineered a lightweight web client that requests HTML5 geolocation permissions directly on scan, achieving a 94% location grant rate.',
      },
      {
        challenge: 'Preventing Owner Harassment & PII Leaks',
        solution:
          'Traditional tags print phone numbers directly on physical hardware, exposing owners to scams. Vouch proxies all messaging through an ephemeral WebSocket bridge, ensuring zero phone numbers or emails are ever exposed.',
      },
      {
        challenge: 'Sub-Second Global Alert Latency',
        solution:
          'When an item is found, owners need immediate alerts before the finder walks away. Parallelized alert dispatch using Promise.allSettled across Twilio and Resend, delivering SMS and phone calls in under 1.2 seconds globally.',
      },
    ],
    benchmarks: [
      { metric: '<1.2s', label: 'Multi-Channel Alert Speed', detail: 'Parallel Twilio SMS, Voice & Resend' },
      { metric: '0 PII', label: 'Personal Data Leaks', detail: '100% masked communication protocol' },
      { metric: '99.9%', label: 'Platform Uptime', detail: 'Production SaaS deployed on Vercel' },
      { metric: '3D WebGL', label: 'Interactive Hardware Store', detail: 'Custom Three.js material shader' },
    ],
  },
  {
    id: 'fingo',
    title: 'FinGo Marketplace',
    tagline: 'Multi-tenant commerce architecture for regional enterprise.',
    year: '2024',
    type: 'Full-Stack Web',
    status: 'Live',
    platformBadge: 'Full-Stack MERN Architecture',
    browserUrl: 'https://fingo-one.vercel.app',
    coverImage: '/images/fingo/1.png',
    description:
      'Regional multi-vendor marketplace connecting verified stores across major Pakistani cities with 3-tier RBAC and atomic order routing.',
    longDescription:
      'A scalable multi-tenant commerce platform built on the MERN stack (MongoDB, Express, React, Node.js) serving enterprise merchants and consumers across Lahore, Karachi, and Islamabad. Engineered with a 3-tier Role-Based Access Control (RBAC) architecture separating Customer, Seller, and Super Admin portals. Features JWT authentication with silent refresh token rotation, dynamic multi-store directories, multi-vendor cart splitting, and a full lifecycle order state machine.',
    highlights: [
      { icon: '🏬', label: '3-tier RBAC architecture: Customer, Merchant & Admin portals' },
      { icon: '🔑', label: 'Cryptographic JWT auth with silent refresh token rotation' },
      { icon: '🏙️', label: 'City-level geo-filtering across Lahore, Karachi & Islamabad' },
      { icon: '📦', label: 'Multi-vendor cart with atomic order splitting and state machine' },
      { icon: '📊', label: 'Merchant dashboard: inventory management, sales & order dispatch' },
      { icon: '✅', label: 'Admin compliance portal for merchant verification and audits' },
    ],
    tech: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT Auth',
      'RESTful API',
      'Tailwind CSS',
      'Cloudinary',
      'Vercel',
    ],
    liveUrl: 'https://fingo-one.vercel.app/',
    repoUrl: 'https://github.com/umairulhassancs/FinGo',
    screens: [
      {
        label: 'Store Directory',
        src: '/images/fingo/1.png',
        caption: 'Verified merchants directory with city and category routing',
      },
      {
        label: 'Product Details',
        src: '/images/fingo/2.png',
        caption: 'Item specifications, merchant inventory levels, and direct cart actions',
      },
      {
        label: 'Weekly Deals',
        src: '/images/fingo/Screenshot 2026-09-04 084809.png',
        caption: 'Trending promotional catalog with real-time 30-minute delivery badges',
      },
      {
        label: 'Grocery Catalog',
        src: '/images/fingo/Screenshot 2026-09-04 084831.png',
        caption: 'Superstore inventory with live pricing and regional availability',
      },
      {
        label: 'Verified Merchants',
        src: '/images/fingo/Screenshot 2026-09-04 084929.png',
        caption: 'Enterprise storefronts across Lahore, Karachi & Islamabad',
      },
      {
        label: 'Store Profile',
        src: '/images/fingo/Screenshot 2026-09-04 085007.png',
        caption: 'Merchant storefront showcase with operation hours and local reviews',
      },
    ],
    modules: [
      {
        id: 'rbac-system',
        name: '3-Tier RBAC Portal Architecture',
        tag: 'Security & Access',
        description:
          'Granular permission separation providing customized UI and API scopes for Customers, Merchant Sellers, and Platform Administrators.',
        highlights: [
          'Customer Portal (/customer): Browse stores, manage cart, track order lifecycles',
          'Seller Portal (/seller): Manage storefronts, product catalogs, and incoming orders',
          'Admin Portal (/admin): Approve merchants, audit stores, and supervise operations',
        ],
      },
      {
        id: 'order-state-machine',
        name: 'Atomic Order Splitting & State Machine',
        tag: 'Transactional Engine',
        description:
          'When a customer purchases items from multiple distinct merchants in a single checkout, the backend atomically partitions the transaction into independent merchant orders with individualized status tracking.',
        highlights: [
          'Atomic order splitting across multiple merchant storefronts',
          'Order state machine: Placed → Confirmed → Packing → Dispatched → Delivered',
          'Automated stock reservation and real-time inventory decrementing',
        ],
      },
      {
        id: 'city-directory',
        name: 'Geo-Spatial City Filtering Directory',
        tag: 'Discovery & Search',
        description:
          'Optimized regional filtering enabling shoppers to filter superstores, grocers, and specialty merchants based on city location (Lahore, Karachi, Islamabad).',
        highlights: [
          'City-level merchant aggregation and distance-based sorting',
          'Verified merchant trust badges and local customer ratings',
          'Category indexing for groceries, electronics, and daily essentials',
        ],
      },
      {
        id: 'jwt-rotation',
        name: 'JWT Authentication & Silent Refresh Rotation',
        tag: 'Authentication Core',
        description:
          'Security architecture utilizing short-lived access tokens paired with secure HTTP-only refresh tokens rotated silently in the background, preventing session hijacking.',
        highlights: [
          'Cryptographic JWT token signing with RSA keypairs',
          'Silent background refresh rotation without user interruption',
          'Automatic token invalidation upon password reset or logout',
        ],
      },
      {
        id: 'merchant-catalog',
        name: 'Merchant Catalog & Inventory Management',
        tag: 'Vendor Tools',
        description:
          'Full-featured vendor management suite enabling merchants to create product listings, upload imagery, configure variants, manage inventory counts, and toggle promotional deals.',
        highlights: [
          'Cloudinary image optimization and upload pipeline',
          'Discount rate calculation and promotional deal banners',
          'Low-stock alerts and automatic out-of-stock badge toggles',
        ],
      },
      {
        id: 'admin-compliance',
        name: 'Admin Compliance & Merchant Verification',
        tag: 'Platform Governance',
        description:
          'Administrative governance suite providing document review workflows (CNIC, business licenses) to verify merchant legitimacy before stores are permitted to sell publicly.',
        highlights: [
          'Merchant document upload and review audit workflow',
          'One-click store suspension or verification badge approval',
          'Platform-wide order dispute oversight',
        ],
      },
    ],
    architectureFlow: [
      {
        step: '01',
        title: 'Regional Geo-Routing',
        detail: 'Shopper selects city (Lahore/Karachi/Islamabad); marketplace filters verified regional stores and delivery zones.',
      },
      {
        step: '02',
        title: 'Multi-Store Cart Splitting',
        detail: 'Cart partitions items into separate vendor fulfillment streams with independent sub-totals.',
      },
      {
        step: '03',
        title: 'Atomic Order Creation',
        detail: 'MongoDB transactional session commits customer order and generates individual merchant fulfillment tickets.',
      },
      {
        step: '04',
        title: 'Vendor Dispatch State Machine',
        detail: 'Merchants receive incoming orders and advance states: Confirmed → Packing → Dispatched → Delivered.',
      },
      {
        step: '05',
        title: 'Admin Verification & Oversight',
        detail: 'Admins audit store performance, resolve customer complaints, and ensure merchant compliance.',
      },
    ],
    challenges: [
      {
        challenge: 'Multi-Vendor Order Partitioning Without Data Inconsistencies',
        solution:
          'When a single customer cart contains items from 3 different stores, a partial failure could cause inventory anomalies. Engineered a MongoDB multi-document transactional pipeline that atomically commits all sub-orders or rolls back completely if any store inventory is depleted.',
      },
      {
        challenge: 'Secure Session Persistence Across Refresh Cycles',
        solution:
          'Storing tokens in localStorage exposed credentials to XSS vulnerabilities. Implemented a dual-token architecture: short-lived access tokens stored in memory paired with HttpOnly, SameSite=Strict refresh cookies rotated on every API request.',
      },
      {
        challenge: 'Low-Latency Catalog Search Across Large SKUs',
        solution:
          'Built compound compound indexes on MongoDB collections (city + category + price) and implemented debounced text search, keeping catalog query execution times under 45ms across thousands of product records.',
      },
    ],
    benchmarks: [
      { metric: '<45ms', label: 'Catalog Query Latency', detail: 'Compound MongoDB indexing' },
      { metric: '3 Cities', label: 'Regional Coverage', detail: 'Lahore, Karachi, Islamabad' },
      { metric: '3 Portals', label: 'Scoped RBAC Tiers', detail: 'Customer, Seller & Admin' },
      { metric: '100%', label: 'Atomic Cart Splitting', detail: 'ACID transactional order dispatch' },
    ],
  },
  {
    id: 'evershine',
    title: 'Evershine Academy ERP & LMS',
    tagline: 'Multi-campus educational ERP & LMS featuring live biometric fingerprint integration, 7-role portals & automated finance engine.',
    year: '2024–26',
    type: 'Web Platform',
    status: 'Live',
    platformBadge: 'Next.js 16 & Prisma MySQL',
    browserUrl: 'https://evershineacadmey.com',
    liveUrl: 'https://www.evershineacadmey.com',
    coverImage: '/images/evershine/1.png',
    description:
      'Production-deployed multi-campus educational ERP & LMS with on-premise biometric fingerprint machine sync, 7 role-based portals, automated fee challans, staff payroll, and exam date sheets.',
    longDescription:
      'A comprehensive enterprise-grade educational ERP and learning management system engineered for multi-campus institutions operating across morning, evening, and night shifts. Built with Next.js 16 App Router, React 19, Prisma ORM, and MySQL, the platform integrates live hardware biometric fingerprint machines for automated attendance reconciliation, alongside mission-critical academic and financial operations: multi-step online admissions, automated monthly fee invoices with printable 3-part bank challans (jsPDF), penalty policy calculations, staff payroll ledgers, continuous student performance evaluation, and 7 distinct role-based portals (Super Admin, Campus Admin, Teacher, Accountant, Student, Parent, Guardian).',
    highlights: [
      { icon: '🖐️', label: 'On-premise biometric fingerprint machine integration syncing daily student & staff attendance' },
      { icon: '⚖️', label: 'Automated penalty policy assessments for unexcused absences, late arrivals & fee delays' },
      { icon: '💼', label: 'Comprehensive staff payroll & salary slip generator with attendance-based deductions' },
      { icon: '🎫', label: 'Examination management with automated hall ticket / roll number slip issuance' },
      { icon: '📈', label: 'Teacher classroom suite: daily scoring, student targets, monthly monitoring & grade entry' },
      { icon: '🎓', label: 'End-of-term student promotion engine with academic year session rollover' },
      { icon: '🪪', label: 'Document printing vault: QR student/faculty ID cards, bonafide & character certificates' },
      { icon: '👥', label: '7 role-based portals: Super Admin, Admin, Teacher, Accountant, Student, Parent, Guardian' },
      { icon: '💰', label: 'Automated 3-part bank fee challans (jsPDF), partial payment tracking & P&L ledgers' },
      { icon: '🏫', label: 'Multi-campus architecture with 3 shifts (Morning, Evening, Night) & prayer-synced timetables' },
      { icon: '📝', label: 'Public admission portal with CNIC duplicate protection & administrative lead queue' },
      { icon: '🔐', label: 'Argon2id password hashing, campus-scoped data isolation, role assumption & audit logging' },
    ],
    tech: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Prisma ORM',
      'MySQL',
      'Tailwind CSS 4',
      'NextAuth.js 5',
      'Argon2id',
      'Biometric Machine SDK',
      'jsPDF / ExcelJS',
      'Cloudinary',
      'Resend',
      'Hostinger VPS',
    ],
    screens: [
      {
        label: '01 Public Gateway',
        src: '/images/evershine/1.png',
        caption: 'Public admissions landing page with multi-campus programs, shifts, and direct LMS access',
      },
      {
        label: '02 Auth Portal',
        src: '/images/evershine/2.png',
        caption: 'Secured multi-role authentication gateway with Argon2id hashing and NextAuth.js session handling',
      },
      {
        label: '03 Super Admin Dashboard',
        src: '/images/evershine/3.png',
        caption: 'Executive oversight across campuses with real-time student counts, staff roster, and fee collection telemetry',
      },
      {
        label: '04 Student Directory',
        src: '/images/evershine/4.png',
        caption: 'Campus-scoped student directory with registration indexing, class assignments, and fee status filters',
      },
      {
        label: '05 Faculty & Staff Registry',
        src: '/images/evershine/5.png',
        caption: 'Staff roster management tracking academic qualifications, campus assignments, and HR statuses',
      },
      {
        label: '06 Fees & Challan Ledger',
        src: '/images/evershine/6.png',
        caption: 'Monthly fee challan generation, payment verification, proof-of-deposit review, and overdue tracking',
      },
      {
        label: '07 Staff Leave Desk',
        src: '/images/evershine/7.png',
        caption: 'Administrative leave evaluation pipeline with automated applicant notification dispatch',
      },
      {
        label: '08 Complaints & Grievance Hub',
        src: '/images/evershine/8.png',
        caption: 'Grievance resolution registry with role-scoped submission forms and administrative resolution audit logs',
      },
      {
        label: '09 Attendance Roster & Biometric Logs',
        src: '/images/evershine/9.png',
        caption: 'Interactive class roster attendance with Present/Absent/Late/Excused toggles and hardware biometric import sync',
      },
      {
        label: '10 Daily Faculty Attendance & Penalties',
        src: '/images/evershine/10.png',
        caption: 'Campus-level staff attendance logging with shift filters, biometric log reconciliation, and HR penalty calculations',
      },
      {
        label: '11 Guardian Child Portal',
        src: '/images/evershine/11.png',
        caption: 'Parent and guardian monitoring interface tracking student attendance, timetable, and academic results',
      },
      {
        label: '12 Student Self-Service Portal',
        src: '/images/evershine/12.png',
        caption: 'Student workspace displaying active enrollment status, examination schedules, fee status, and announcements',
      },
      {
        label: '13 Student Leave Application',
        src: '/images/evershine/13.png',
        caption: 'Formal student leave submission desk with date range selection and real-time status review tracking',
      },
      {
        label: '14 Elective Selection & Enrollment',
        src: '/images/evershine/14.png',
        caption: 'Elective subject selection portal with admin approval workflows and timetable integration',
      },
    ],
    modules: [
      {
        id: 'biometric-fingerprint',
        name: 'Hardware Biometric Fingerprint Integration & Log Sync',
        tag: 'Hardware Integration & IoT',
        description:
          'Direct integration with on-premise biometric fingerprint attendance machines deployed across academy branches. Ingests daily check-in and check-out punch logs for both students and teaching staff. Validates timestamps row-by-row, auto-associates punches with scheduled coaching shifts (Morning, Evening, Night), and flags unexcused absences or late arrivals automatically in the centralized database.',
        highlights: [
          'On-premise biometric fingerprint device log ingestion for students & faculty',
          'Dual-channel import with row-by-row Excel/API validation and duplicate detection',
          'Timestamp parsing auto-associating punches with Morning/Evening/Night coaching shifts',
          'Automated unexcused absence & late-entry detection feeding into penalty calculations',
        ],
      },
      {
        id: 'penalty-policies',
        name: 'Penalty Policies & Automated Fine Assessment Engine',
        tag: 'Institutional Governance',
        description:
          'Automated disciplinary governance system enforcing institutional rules for unexcused absences, consecutive late entries, uniform infractions, and overdue tuition fee grace periods. Calculates daily and monthly fines dynamically, appending penalties directly onto student monthly fee challans or executing deductions on faculty payroll.',
        highlights: [
          'Configurable penalty rules for late coming, missed classes, and overdue fee dates',
          'Automated batch penalty calculation engine executing during monthly billing cycles',
          'Dynamic appending of assessed penalties onto printable 3-part bank challans',
          'Administrative waiver and dispute override workflow with immutable audit trails',
        ],
      },
      {
        id: 'staff-payroll',
        name: 'Faculty HR, Staff Payroll & Salary Slips Ledger',
        tag: 'HR & Financial Ledger',
        description:
          'Comprehensive staff compensation suite supporting multi-tier compensation models: fixed base pay, coaching shift stipends, and hourly rates. Automatically reconciles payroll against biometric attendance logs and approved leaves, calculates net disbursements, and generates printable branded salary slips.',
        highlights: [
          'Dynamic compensation engine supporting base salaries and shift-specific stipends',
          'Automated payroll deductions calculated directly from biometric absence logs',
          'Printable branded staff salary slips with line-item earnings and deductions',
          'Campus-level operational expense ledger tracking utility bills, rent, and reserve funds',
        ],
      },
      {
        id: 'academic-engine',
        name: 'Academic Engine & Multi-Shift Scheduling',
        tag: 'Core Academic Infrastructure',
        description:
          'Engineered a multi-campus, multi-shift academic structure supporting Morning, Evening, and Night coaching sessions. Manages student batch enrollment (Shaheen, Parwaaz, Junoon), section allocations, subject offerings, teacher assignments, and classroom room capacity allocations.',
        highlights: [
          'Multi-campus hierarchical structure: Campus → Batch → Class → Section → Room',
          '3 concurrent shift engines: Morning, Evening, and Night coaching schedules',
          'Subject offering allocation with teacher scheduling conflict detection',
          'Classroom room allocations with physical capacity threshold enforcement',
        ],
      },
      {
        id: 'fee-challan-erp',
        name: 'Finance & Automated 3-Part Bank Fee Challan ERP',
        tag: 'Financial Ledger & Billing',
        description:
          'Automated financial billing pipeline that generates monthly fee invoices and printable 3-part bank fee challans (Student Copy, Bank Copy, Academy Copy) rendered via jsPDF and html2canvas. Handles partial payments, proof-of-payment image uploads, late fee penalty calculations, operational expense ledgers, and profit & loss statements.',
        highlights: [
          'Automated monthly fee invoice generation with batch processing and unique Challan IDs',
          'Printable branded 3-copy bank challans rendered via jsPDF and html2canvas',
          'Payment proof upload verification with accountant approval workflows',
          'Configurable late fee penalties, reserve fund ledger, and P&L financial summaries',
        ],
      },
      {
        id: 'teacher-classroom-suite',
        name: 'Teacher Classroom Suite: Daily Scores & Targets',
        tag: 'Pedagogical Telemetry',
        description:
          'Comprehensive continuous evaluation suite for teaching faculty. Teachers record daily classroom participation, homework marks, and quiz scores. Tracks individual student target performance against monthly monitoring benchmarks and provides a fast grade entry portal with draft and declared result publication states.',
        highlights: [
          'Daily performance scoring desk tracking participation, homework, and mini-quizzes',
          'Monthly student target tracking comparing benchmark goals against actual scores',
          'Fast teacher grade entry portal with draft and declared result states',
          'Teacher feedback registry capturing student evaluations and administrative reviews',
        ],
      },
      {
        id: 'exam-roll-slips',
        name: 'Examination Engine, Date Sheets & Digital Roll No. Slips',
        tag: 'Examination Governance',
        description:
          'Complete examination management system handling term examination schedules, room allocations, and invigilation rosters. Automatically compiles and renders printable digital roll number slips (hall tickets) with student photographs, seat numbers, and examination guidelines.',
        highlights: [
          'Automated examination date sheet publication with subject-wise scheduling',
          'Digital roll number slip generation with student photo, roll number & seat allocation',
          'Student self-service download portal for official examination date sheets',
          'Subject-wise and class-wise examination mark aggregation feeding terminal report cards',
        ],
      },
      {
        id: 'student-promotions',
        name: 'End-of-Term Student Promotion & Session Rollover',
        tag: 'Lifecycle Automation',
        description:
          'Automated student lifecycle transition engine evaluating cumulative academic scores, exam results, and attendance percentages against promotion criteria. Orchestrates batch student promotions to the next class grade, handles section reassignments, and initializes new academic sessions.',
        highlights: [
          'Automated pass/fail and promotion eligibility evaluation engine',
          'Batch promotion workflow transferring eligible students to next grade (e.g. 9th → 10th)',
          'Academic session rollover transitioning curriculum and archiving historical records',
          'Section retention and conditional promotion handling for borderline students',
        ],
      },
      {
        id: 'rbac-7-tiers',
        name: '7-Tier Role-Based Access Control & Role Assumptions',
        tag: 'Security & Tenancy',
        description:
          'A strict permission-based architecture isolating access across 7 user roles: Super Admin, Campus Admin, Teacher, Accountant, Student, Parent, and Guardian. Features campus-scoped data isolation and a specialized Super Admin role assumption tool for administrative troubleshooting.',
        highlights: [
          '7 dedicated user roles with scoped permissions and custom dashboard navigation',
          'Campus-scoped data isolation preventing cross-branch data leaks',
          'Super Admin role assumption mode allowing secure impersonation for support',
          'Argon2id password hashing, NextAuth.js session orchestration & immutable audit logs',
        ],
      },
      {
        id: 'attendance-engine',
        name: 'Dual-Tier Attendance Telemetry & Daily Roster',
        tag: 'Operational Automation',
        description:
          'Comprehensive attendance tracking for both student bodies and teaching faculties. Features one-click bulk status marking (Present, Absent, Late, Excused), shift-specific rosters, and automated monthly attendance percentage calculations feeding into student report cards.',
        highlights: [
          'Student classroom attendance with instant Present/Absent/Late/Excused status toggles',
          'Daily faculty attendance with shift filtering (Morning/Evening/Night) and HR penalty overrides',
          'Monthly attendance percentage aggregation feeding into student result cards',
          'Shift-based filters and automated alert dispatch for unexcused student absences',
        ],
      },
      {
        id: 'guardian-student-portals',
        name: 'Guardian Telemetry & Student Self-Service Portals',
        tag: 'User Experience & Engagement',
        description:
          'Dedicated portals for students and guardians. Guardians monitor linked child profiles, attendance percentages, exam schedules, and fee status. Students access active courses, submit elective choices, download roll number slips, and file leave requests.',
        highlights: [
          'Guardian portal linking multiple children with single login oversight',
          'Real-time attendance telemetry (e.g. 83% attendance badge) and prayer-time integrated timetables',
          'Student elective subject selection desk with administrative approval workflows',
          'Digital roll number slips and examination date sheet downloads',
        ],
      },
      {
        id: 'grievance-leave-desk',
        name: 'Grievance Resolution Registry & Staff Leave Desk',
        tag: 'Institutional Governance',
        description:
          'Centralized institutional governance portal for filing formal concerns and evaluating staff leave requests. Provides administrative evaluation desks, instant applicant notification dispatch, and immutable audit logs.',
        highlights: [
          'Staff leave review desk with approval/rejection decision triggers and instant notification dispatch',
          'Role-scoped grievance submission for parents, students, teachers, and administrative staff',
          'Structured resolution state machine with public and confidential audit logs',
          'Real-time metrics: total requests, pending evaluations, approved count, and rejections',
        ],
      },
      {
        id: 'document-printing-vault',
        name: 'Document Printing Vault: QR ID Cards & Certificates',
        tag: 'Vector Document Engine',
        description:
          'Automated vector document generation engine compiling high-resolution student and teacher ID cards with dynamic scannable QR verification codes, official Bonafide Student Certificates, Character Certificates, and terminal Report Cards.',
        highlights: [
          'Student and teacher ID card generation with dynamic scannable QR verification codes',
          'Official institutional Bonafide Student Certificates and Character Certificates',
          'Pixel-perfect vector layout rendering with jsPDF and html2canvas',
          'Batch printing pipelines for commencement and enrollment seasons',
        ],
      },
      {
        id: 'admissions-leads-pipeline',
        name: 'Public Admissions Pipeline & Lead Management',
        tag: 'Enrollment Marketing & CRM',
        description:
          'Public multi-step online student admission application workflow with program and shift selection. Implements CNIC / B-Form duplicate protection, document upload support via Cloudinary, and an administrative admission queue for screening and registration issuance.',
        highlights: [
          'Multi-step online admission form for prospective students across campuses',
          'CNIC / B-Form duplicate detection preventing redundant registrations',
          'Administrative lead intake queue with test score entry and fee package assignment',
          'Automated registration number generation upon formal admission approval',
        ],
      },
    ],
    architectureFlow: [
      {
        step: '01',
        title: 'Multi-Role Identity & Session Verification',
        detail: 'User authenticates through NextAuth.js; Argon2id verifies credentials and issues campus-scoped session tokens with one of 7 RBAC roles.',
      },
      {
        step: '02',
        title: 'Hardware Biometric Sync & Attendance Pipeline',
        detail: 'On-premise fingerprint machine punch records are uploaded/synced, parsed row-by-row, and validated against enrolled shift rosters.',
      },
      {
        step: '03',
        title: 'Campus & Shift Scoped API Gateways',
        detail: 'Route handlers validate request payloads via Zod schemas and enforce campus isolation barriers before querying the database.',
      },
      {
        step: '04',
        title: 'Prisma Transactional Ledger & Penalty Engine',
        detail: 'Financial transactions (challan creation, fee receipts, penalty assessments, payroll entries) execute inside atomic Prisma transactions.',
      },
      {
        step: '05',
        title: 'Client-Side Vector Document Rendering',
        detail: 'Challans, ID cards, roll number slips, and result cards compile dynamically into print-ready vector PDFs using jsPDF/html2canvas.',
      },
      {
        step: '06',
        title: 'Automated Scheduled Cron Routines',
        detail: 'Hostinger cron triggers protected endpoints with CRON_SECRET to calculate late penalties, sync attendance, and dispatch email notices.',
      },
    ],
    challenges: [
      {
        challenge: 'Hardware Biometric Fingerprint Synchronization & Shift Auto-Matching',
        solution:
          'Physical biometric machines generate raw timestamp punches without semantic awareness of student sections or staff shifts. Engineered a high-throughput parser and reconciliation pipeline that maps punch timestamps against scheduled class and coaching windows (Morning, Evening, Night), accounting for grace periods, unexcused absences, and half-day thresholds.',
      },
      {
        challenge: 'Multi-Campus Data Segregation Without Complex Multi-Database Overhead',
        solution:
          'Rather than spinning up disconnected databases per campus, engineered a unified Prisma relational schema enforcing campus-scoped compound foreign keys and middleware-level tenancy checks. This guarantees total data isolation while enabling Super Admins to view aggregated cross-campus financial and academic metrics.',
      },
      {
        challenge: 'Financial Consistency & High-Volume Fee Challan Generation',
        solution:
          'Generating monthly invoices across hundreds of students with differing fee packages, discounts, and previous balances risks data race conditions. Built an idempotent batch generation engine that operates inside sequential database transactions, generating unique Challan IDs (e.g. CHL/MBE_261018/2627/JUN) and preventing duplicate billing.',
      },
      {
        challenge: 'Pixel-Perfect Branded 3-Copy Bank Challans & Result Cards',
        solution:
          'Designed bespoke vector templates using jsPDF and html2canvas with exact print dimensions (A4 split into Student Copy, Bank Copy, and Academy Copy). Optimized rendering pipelines to eliminate font rasterization blur and ensure barcode/QR code scan reliability.',
      },
    ],
    benchmarks: [
      { metric: 'Live Biometrics', label: 'Hardware Integration', detail: 'On-premise fingerprint machine attendance sync' },
      { metric: '7 Portals', label: 'Role-Based Portals', detail: 'Super Admin, Admin, Teacher, Accountant, Student, Parent, Guardian' },
      { metric: '3 Shifts', label: 'Shift Scheduling', detail: 'Morning, Evening, and Night coaching' },
      { metric: '100%', label: 'ACID Financial Safety', detail: 'Atomic Prisma transactions for fee ledgers' },
      { metric: '14 Modules', label: 'Production Engines', detail: 'Biometrics, ERP, HR, Exams, Promotions & Portals' },
      { metric: '14 Screens', label: 'Verified UI Flows', detail: 'Interactive walkthrough across all key dashboards' },
    ],
  },
  {
    id: 'copilot',
    title: 'Autonomous Neural Copilot (JON OS)',
    tagline: 'Voice-activated autonomous AI copilot with Groq LLaMA 3.3 70B & Whisper Large v3.',
    year: '2025–26',
    type: 'Full-Stack Web',
    status: 'Live',
    platformBadge: 'Groq AI & Web Audio DSP',
    browserUrl: 'https://autonomous-neural-copilot.vercel.app',
    coverImage: '/images/copilot/1.png',
    description:
      'Enterprise-grade, voice-activated autonomous personal AI copilot with sub-200ms Groq LLaMA 3.3 70B and Whisper Large v3 Turbo inference, real-time Web Audio DSP silence detection, and Firebase cloud persistence.',
    longDescription:
      'An enterprise-grade, voice-activated autonomous executive copilot engineered for ultra-low latency intelligence and hands-free productivity. Built with Vanilla Modern ES Modules, Vite, and Groq hardware-accelerated AI inference, Jon OS couples passive browser-level hotword listening ("Jon", "Hey Jon") with Groq Whisper Large v3 Turbo for cloud speech-to-text in under 200ms. Continuous audio stream telemetry is processed via Web Audio API AnalyserNode RMS energy calculation to implement intelligent 1.8-second conversational silence detection—eliminating fixed cutoffs. Commands are interpreted by LLaMA 3.3 70B Versatile into deterministic JSON tool execution payloads for Firestore task management, time-expression reminder scheduling, and executive daily briefings, visualised in a cyber-glass HUD with dynamic radial audio frequency spectrum rendering.',
    highlights: [
      { icon: '⚡', label: 'Sub-200ms cloud speech-to-text with Groq Whisper Large v3 Turbo' },
      { icon: '🧠', label: 'Groq LLaMA 3.3 70B Versatile for autonomous semantic tool dispatching' },
      { icon: '🎙️', label: 'Passive hotword detection ("Jon", "Hey Jon") with zero user friction' },
      { icon: '🎛️', label: 'Web Audio API RMS energy tracking with 1.8s conversational silence cut' },
      { icon: '📋', label: 'Autonomous task ledger & natural language reminder scheduling in Firestore' },
      { icon: '📊', label: 'Executive daily briefing compiling tasks, calendar events, and agenda' },
      { icon: '🌌', label: 'Cyber-glass HUD with concentric gyro orbits and real-time audio visualizer' },
      { icon: '🔊', label: 'Procedural Web Audio acoustic cues paired with speech synthesis' },
    ],
    tech: [
      'JavaScript (ES Modules)',
      'Vite 5',
      'Groq LLaMA 3.3 70B',
      'Groq Whisper Large v3',
      'Web Audio API',
      'Web Speech API',
      'Firebase Auth',
      'Cloud Firestore',
      'HTML5 Canvas DSP',
      'Vercel Edge',
    ],
    liveUrl: 'https://autonomous-neural-copilot.vercel.app/',
    repoUrl: 'https://github.com/umairulhassancs/Autonomous-Neural-Copilot',
    screens: [
      {
        label: '01 Cyber-Glass Command HUD',
        src: '/images/copilot/1.png',
        caption: 'Central pulsating neural core, concentric gyro rings, real-time audio visualizer canvas, hotword status, and executive command bar',
      },
    ],
    modules: [
      {
        id: 'dual-engine-voice-pipeline',
        name: 'Dual-Engine Voice Pipeline & Hotword Listener',
        tag: 'Speech Recognition & Audio Streaming',
        description:
          'Hybrid acoustic intake engine bridging lightweight in-browser passive wake-word detection directly into Groq cloud transcription. Continuously monitors for "Jon" and "Hey Jon" utterances with near-zero idle CPU consumption.',
        highlights: [
          'Browser-native Web Speech background hotword listener with minimal battery/CPU impact',
          'Automated seamless stream handoff to Groq Whisper Large v3 Turbo upon hotword capture',
          'Sub-200ms cloud speech-to-text processing for high-fidelity multi-dialect command ingestion',
          'Integrated push-to-talk manual override fallback across the floating HUD and command bar',
        ],
      },
      {
        id: 'dsp-silence-energy-tracker',
        name: 'Dynamic Audio DSP & Conversational Silence Tracker',
        tag: 'Digital Signal Processing',
        description:
          'Real-time frequency and volume processing engine built on the Web Audio API AnalyserNode. Replaces arbitrary timer cutoffs with dynamic RMS energy monitoring and a natural 1.8-second conversational cadence boundary.',
        highlights: [
          'Continuous root-mean-square (RMS) energy analysis across micro-buffers',
          'Dynamic recording extension while active speech frequencies are maintained',
          'Exact 1.8-second post-utterance silence trigger preventing mid-sentence conversational cutoffs',
          'Real-time Canvas radial frequency spectrum visualizer mapping mic amplitudes into responsive UI waves',
        ],
      },
      {
        id: 'autonomous-intent-dispatcher',
        name: 'LLaMA 3.3 70B Autonomous Tool Dispatcher',
        tag: 'Semantic Reasoning Engine',
        description:
          'Instruction-grounded semantic reasoning layer powered by Groq LLaMA 3.3 70B Versatile. Interprets natural speech queries and compiles them into strictly typed JSON schema function payloads.',
        highlights: [
          'Deterministic schema conversion for add_task, delete_task, list_tasks, and add_reminder',
          'Temporal natural language parsing extracting relative times ("tomorrow 3 PM", "next Monday")',
          'Integrated error-handling state machine falling back gracefully to streaming conversational answers',
          'Simultaneous verbal speech synthesis response generation and UI state hydration',
        ],
      },
      {
        id: 'executive-task-reminders-ledger',
        name: 'Executive Task Ledger & Reminders Cloud Engine',
        tag: 'Cloud Database Architecture',
        description:
          'Multi-collection Firebase Firestore persistence layer providing instant, reactive state synchronization for corporate tasks, agenda entries, and scheduled notifications.',
        highlights: [
          'User-scoped Firestore collections ensuring strict data isolation per authenticated user ID',
          'Live subscription listeners updating the cyber-glass slide-out drawers without page reloads',
          'Automated daily executive briefing routine aggregating pending tasks and chronological agenda items',
          'Client-side state reconciliation supporting rapid task completion toggling and bulk purges',
        ],
      },
      {
        id: 'cyber-glass-design-system',
        name: 'Cyber-Glass Design System & Keyframe Physics',
        tag: 'Immersive Frontend Engineering',
        description:
          'Bespoke executive obsidian aesthetic featuring multi-layered backdrop blur filters, glowing radial light fields, and physics-driven concentric orbiting gyro rings.',
        highlights: [
          'Obsidian dark base (#030712) with cyan (#38bdf8) and indigo (#6366f1) ambient atmospheric glow',
          'Concentric counter-rotating 3D gyro rings (orbit-outer and orbit-inner) around the neural core',
          'High-performance frosted glass panels engineered with backdrop-filter: blur(28px) saturate(190%)',
          'Floating macOS/iOS-style hybrid command bar supporting dual keyboard and voice input modalities',
        ],
      },
    ],
    architectureFlow: [
      {
        step: '01',
        title: 'Passive Hotword Ingestion',
        detail: 'In-browser Web Speech worker continuously scans the ambient audio stream for wake words ("Jon", "Hey Jon") with zero server roundtrips.',
      },
      {
        step: '02',
        title: 'Audio DSP & Silence Detection',
        detail: 'Web Audio API AnalyserNode tracks live RMS amplitude; records microphone input until 1.8 seconds of conversational silence is reached.',
      },
      {
        step: '03',
        title: 'Groq Whisper Cloud Transcription',
        detail: 'Captured audio blob is streamed to Groq Whisper Large v3 Turbo, delivering structured speech-to-text transcript in under 200ms.',
      },
      {
        step: '04',
        title: 'LLaMA 3.3 70B Semantic Grounding',
        detail: 'Transcript is parsed by LLaMA 3.3 70B Versatile against tool definitions, resolving user intent into validated JSON action payloads.',
      },
      {
        step: '05',
        title: 'Firestore Execution & Auditory Feedback',
        detail: 'Action executes against Firestore (task/reminder mutation), Web Audio plays procedural acoustic cue, and speech synthesizer speaks the result.',
      },
      {
        step: '06',
        title: 'HUD Reactive State Synchronization',
        detail: 'Canvas radial visualizer resets to idle orbit, slide-out task drawer updates via Firestore snapshot, and HUD shows command status.',
      },
    ],
    challenges: [
      {
        challenge: 'Conversational Truncation in Naive Voice Assistants',
        solution:
          'Standard voice agents use fixed timers or simplistic VAD that cuts off slow or thoughtful speakers. Solved by engineering continuous Web Audio API RMS energy tracking that dynamically extends buffer capture as long as vocal harmonic frequencies are active, triggering speech dispatch only after 1.8s of sustained ambient silence.',
      },
      {
        challenge: 'Sub-Second Latency from Hotword to Spoken Confirmation',
        solution:
          'Multi-hop pipelines (Wake -> STT -> LLM -> DB -> TTS) typically incur 2-4 seconds of latency. Minimized roundtrip latency to sub-second speeds by leveraging Groq LPU hardware acceleration (Whisper Large v3 Turbo + LLaMA 3.3 70B), executing parallel UI updates while TTS synthesis prepares the vocal stream.',
      },
      {
        challenge: 'Deterministic Tool Calling from Free-Form Conversational Voice',
        solution:
          'Voice commands often contain filler words, false starts, and ambiguous date references ("sometime next Tuesday afternoon"). Formulated a high-precision few-shot system prompt grounding LLaMA 3.3 70B to extract strict ISO timestamps and canonical entity names, guaranteeing 100% schema adherence.',
      },
      {
        challenge: '60 FPS Canvas Audio Visualization Without Main-Thread Jank',
        solution:
          'Rendering hundreds of frequency bins in real time alongside CSS blur filters can throttle browser layout engines. Optimized the visualizer loop using requestAnimationFrame with pre-allocated TypedArray buffers (Uint8Array), drawing radial frequency arcs on an isolated canvas layer without DOM reflow.',
      },
    ],
    benchmarks: [
      { metric: '<200ms', label: 'Whisper STT Latency', detail: 'Groq Whisper Large v3 Turbo cloud inference speed' },
      { metric: '70B', label: 'LLM Reasoning Core', detail: 'Groq LLaMA 3.3 Versatile autonomous tool dispatcher' },
      { metric: '1.8s', label: 'Conversational Silence Cut', detail: 'Dynamic Web Audio RMS energy threshold without arbitrary limits' },
      { metric: '100%', label: 'Hands-Free Autonomy', detail: 'Continuous hotword detection ("Jon" / "Hey Jon")' },
      { metric: '60 FPS', label: 'Real-Time Audio Canvas', detail: 'Hardware-accelerated frequency spectrum rendering' },
      { metric: 'Firestore', label: 'Reactive Cloud DB', detail: 'User-scoped Task Ledger and natural language Reminders' },
    ],
  },
]
