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
          'A dual-inference pipeline combining a fine-tuned PyTorch Vision Transformer (ViT-B/16) with the PlantNet botanical API. The system uses a 60/40 weighted confidence fusion: 60% probability weight is allocated to the local ViT classifier and 40% to the PlantNet API to improve classification robustness across local and less common flora.',
        highlights: [
          '60% confidence weight from fine-tuned PyTorch Vision Transformer (ViT)',
          '40% confidence weight from PlantNet botanical API',
          'Softmax probability fusion with automated confidence threshold (>75%)',
          'FastAPI asynchronous inference microservice with tensor normalization',
        ],
      },
      {
        id: 'ar-visualizer',
        name: 'AR Spatial Visualizer ("Place Before You Buy")',
        tag: 'Spatial Computing',
        description:
          'Utilizes Viro React spatial computing to detect real-world horizontal surfaces (tabletops, floors, patio grounds). Renders 3D plant models with dynamic shadows, 360-degree rotation, scale lock, and surface confidence scoring (e.g. Tabletop · 85%).',
        highlights: [
          'Horizontal plane detection with real-time confidence feedback',
          'Interactive rotation, altitude adjustment, and scale locking controls',
          'Direct "Place in AR" integration from marketplace plant detail pages',
          'Interactive rendering for 3D GLTF botanical models',
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
          'Significantly accelerates vendor catalog onboarding',
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
          'A marketplace connecting regional plant nurseries with plant enthusiasts. Features categorized discovery (Indoor, Outdoor, Flowers, Fruits, Deals), search filters, and AR preview badges.',
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
          'Shopping cart supporting multi-vendor purchases, regional delivery fee calculations, free delivery threshold progress indicators, and secure Stripe payment processing.',
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
          'A dedicated ticket-based dispute resolution system for live plant deliveries. Customers receiving damaged pots or wilted plants can file a ticket, upload photo evidence, and chat directly with the vendor for resolution.',
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
          'Central administrative portal for platform governance. Monitors collected commissions (10% platform take-rate), pending vendor disbursements, active vendor counts, total users, and open complaint tickets.',
        highlights: [
          '10% automated platform commission calculation on transactions',
          'Platform KPI overview: Total Users, Active Vendors, Listed Plants, Open Disputes',
          'Vendor payout verification and approval state machine',
        ],
      },
      {
        id: 'vendor-wallet',
        name: 'Vendor Wallet & Settlement Ledger',
        tag: 'Financial Ledger',
        description:
          'Merchant portal displaying revenue analytics, order status progression, weekly payout settlements, and balance withdrawal requests.',
        highlights: [
          'Gross sales vs. net earnings post 10% commission deductions',
          'Historical transaction ledger with payout status tracking',
          'Weekly bank transfer reconciliation',
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
          'Architectural segregation separating Customer, Vendor, Delivery Rider, and Administrator interfaces with Firebase Auth and scoped Firestore security rules.',
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
        detail: 'Image tensor is evaluated in parallel with PyTorch ViT-B/16 (60% weight) and PlantNet API (40% weight).',
      },
      {
        step: '03',
        title: 'Confidence Fusion & Auto-Fill',
        detail: 'Softmax probabilities are aggregated; when confidence exceeds 75%, botanical specifications are automatically populated.',
      },
      {
        step: '04',
        title: 'Spatial Plane Mapping',
        detail: 'Viro React initializes 3D coordinate planes on horizontal ground surfaces to anchor 3D GLTF models.',
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
          'Running a full Vision Transformer directly on mobile hardware caused high latency and battery drain. Engineered a hybrid approach where lightweight image preprocessing runs on-device, while inference is dispatched to an asynchronous FastAPI microservice, maintaining response times around 350ms in testing.',
      },
      {
        challenge: 'AR Plane Jitter on Low-Contrast Surfaces',
        solution:
          'Standard plane detection struggled with low-contrast textured surfaces like carpets. Implemented a spatial confidence filter that locks coordinate axes only when surface feature tracking confidence exceeds 80%, providing improved plane stability on low-contrast surfaces.',
      },
      {
        challenge: 'Classification Variance Across Diverse Flora',
        solution:
          'Standalone models suffered from class imbalance on rare plant varieties. Architected a 60/40 weighted confidence fusion: the fine-tuned PyTorch ViT handles common regional species, while the PlantNet botanical API acts as a knowledge fail-safe.',
      },
    ],
    benchmarks: [
      { metric: '~350ms', label: 'AI Inference Time', detail: 'FastAPI microservice inference benchmark' },
      { metric: '60% / 40%', label: 'ViT + PlantNet Fusion', detail: 'Weighted confidence decision engine' },
      { metric: '85%+', label: 'AR Plane Confidence', detail: 'Horizontal surface detection stability' },
      { metric: '12+', label: 'Integrated Modules', detail: 'Comprehensive mobile application ecosystem' },
    ],
  },
  {
    id: 'vouch',
    title: 'Vouch Keychain',
    tagline: 'Cryptographic QR item recovery & real-time telemetry.',
    year: '2024–25',
    type: 'Web Platform',
    status: 'Live',
    platformBadge: 'Full-Stack Web SaaS',
    browserUrl: 'https://vouchkeychain.vercel.app',
    coverImage: '/images/vouch/Screenshot 2026-09-04 090313.png',
    description:
      'Smart QR-coded keychains that reunite lost items with their owners through privacy-preserving communication and location telemetry.',
    longDescription:
      'A web SaaS platform connecting physical hardware QR tags with privacy-preserving communication between finders and owners. When scanned by a finder with a smartphone camera, the system captures location coordinates with browser permission, sends automated alerts (Twilio SMS/Voice + Resend Email) to the owner, and opens a masked communication channel where finders and owners communicate without directly exposing personal contact information.',
    highlights: [
      { icon: '🔒', label: 'Privacy-preserving communication: phone & email kept masked' },
      { icon: '📡', label: 'Location coordinate capture & reverse geocoding on scan' },
      { icon: '💬', label: 'Two-way masked communication channel between finder and owner' },
      { icon: '🚨', label: 'Multi-channel dispatch: Twilio SMS, Voice call & Resend Email' },
      { icon: '📦', label: 'Interactive Three.js 3D hardware visualizer for keychains' },
      { icon: '⚡', label: 'Deployed on Vercel with responsive short-link routing' },
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
        caption: 'SaaS storefront with interactive 3D product preview',
      },
      {
        label: 'Privacy Architecture',
        src: '/images/vouch/Screenshot 2026-09-04 090416.png',
        caption: 'Finder interface: owner personal contact information is masked',
      },
      {
        label: 'Hardware Store',
        src: '/images/vouch/Screenshot 2026-09-04 090455.png',
        caption: 'Hardware tag catalog with QR stickers, classic and whistle keychains',
      },
      {
        label: 'Owner Dashboard',
        src: '/images/vouch/Screenshot 2026-09-04 090719.png',
        caption: 'Protected items overview, recovery status, and recent scan telemetry',
      },
      {
        label: 'Notification Logs',
        src: '/images/vouch/Screenshot 2026-09-04 090739.png',
        caption: 'Multi-channel alert dispatch logs with automated notification rules',
      },
      {
        label: 'Live GPS Telemetry',
        src: '/images/vouch/Screenshot 2026-09-04 090821.png',
        caption: 'Google Maps coordinate telemetry and scan event details',
      },
      {
        label: 'Two-Way Chat',
        src: '/images/vouch/Screenshot 2026-09-04 090921.png',
        caption: 'Masked messaging channel between item owner and finder',
      },
      {
        label: 'Subscription Plans',
        src: '/images/vouch/Screenshot 2026-09-04 091021.png',
        caption: 'Tiered protection plans with recurring billing integration',
      },
      {
        label: 'Item Activation',
        src: '/images/vouch/Screenshot 2026-09-04 091328.png',
        caption: 'QR tag pairing and recovery contact setup',
      },
    ],
    modules: [
      {
        id: 'qr-telemetry',
        name: 'QR Telemetry & Routing Protocol',
        tag: 'Telemetry & IoT',
        description:
          'Each physical keychain contains a unique QR token. When scanned, the system performs a zero-install browser handshake, logs coordinates with user permission, timestamp, and device user-agent without requiring the finder to download an app.',
        highlights: [
          'Unique short-link token routing',
          'Zero app installation required for finders',
          'Location capture with reverse geocoding',
        ],
      },
      {
        id: 'privacy-masking',
        name: 'Identity Masking Layer',
        tag: 'Privacy Architecture',
        description:
          'Finders are presented with an anonymous recovery portal. The owner personal email and phone number are masked to prevent spam or misuse.',
        highlights: [
          'Contact info masked from finder scan views',
          'Proxy routing for owner communication',
          'Secure token revocation if an item is decommissioned',
        ],
      },
      {
        id: 'multi-alert',
        name: 'Multi-Channel Alert Dispatch Engine',
        tag: 'Notification Infrastructure',
        description:
          'A notification engine that broadcasts parallel alerts across multiple channels upon a scan event: Twilio SMS, automated Twilio Voice call, and transactional Resend email with location coordinates.',
        highlights: [
          'Twilio SMS automated dispatch with instant scan alert',
          'Twilio Voice automated phone call notification',
          'Resend transactional email containing coordinates map link',
        ],
      },
      {
        id: 'masked-chat',
        name: 'Two-Way Masked Messaging Channel',
        tag: 'Real-Time Communication',
        description:
          'A secure communication channel created upon scanning. Allows owner and finder to coordinate item handover without disclosing personal phone numbers or messaging handles.',
        highlights: [
          'Masked messaging channel',
          'Auto-terminating chat sessions post item recovery',
          'Real-time message indicators',
        ],
      },
      {
        id: 'threejs-store',
        name: 'Three.js 3D Hardware Store Visualizer',
        tag: '3D Graphics',
        description:
          'Interactive 3D hardware visualizer built in Three.js allowing customers to inspect physical hardware tags (classic keychain, QR sticker, whistle tag) with metallic reflections and real-time lighting.',
        highlights: [
          '360-degree interactive 3D model rotation and zoom',
          'Physical material simulations (matte, brushed steel, polycarbonate)',
          'E-commerce cart integration with Stripe checkout',
        ],
      },
      {
        id: 'owner-telemetry',
        name: 'Owner Dashboard & Asset Ledger',
        tag: 'Dashboard & Analytics',
        description:
          'Asset management dashboard where users register tags, review recovery history, track reported locations on Google Maps, and manage protection plans.',
        highlights: [
          'Google Maps asset location pin tracking',
          'Multi-item management for individuals and families',
          'Item status toggling (Protected, Reported Lost, Recovered)',
        ],
      },
    ],
    architectureFlow: [
      {
        step: '01',
        title: 'QR Scan Handshake',
        detail: 'Finder scans physical QR token; browser handshakes with Vouch short-link router without app install.',
      },
      {
        step: '02',
        title: 'Location Capture',
        detail: 'Browser requests geolocation permission; coordinates, timestamp, and device metadata are securely recorded.',
      },
      {
        step: '03',
        title: 'Alert Dispatch',
        detail: 'Server dispatches Twilio SMS, automated Voice call, and Resend email to owner in parallel.',
      },
      {
        step: '04',
        title: 'Masked Chat Session',
        detail: 'Masked communication channel opens for owner and finder to arrange safe handover without sharing direct contact info.',
      },
      {
        step: '05',
        title: 'Recovery & Status Reset',
        detail: 'Owner confirms receipt in dashboard; chat session closes and item telemetry resets to protected state.',
      },
    ],
    challenges: [
      {
        challenge: 'Zero-Install Location Capture Across Mobile Browsers',
        solution:
          'Requiring finders to download an application causes high abandonment. Engineered a lightweight web client that requests standard browser geolocation permissions directly upon scan.',
      },
      {
        challenge: 'Protecting Owner Privacy & Preventing Direct Exposure',
        solution:
          'Traditional tags print phone numbers directly on physical hardware, exposing owners to harassment. Vouch proxies all communication through a masked messaging bridge, keeping owner phone numbers and emails private.',
      },
      {
        challenge: 'Multi-Channel Alert Delivery Speed',
        solution:
          'When an item is found, owners need prompt notification. Parallelized alert dispatch using Promise.allSettled across Twilio SMS, voice, and Resend transactional email to ensure reliable notification delivery.',
      },
    ],
    benchmarks: [
      { metric: 'Parallel', label: 'Multi-Channel Alerts', detail: 'Twilio SMS, Voice & Resend Email' },
      { metric: 'Masked', label: 'Privacy Protocol', detail: 'Contact info masked between parties' },
      { metric: 'Next.js 16', label: 'Modern Framework', detail: 'Production SaaS deployed on Vercel' },
      { metric: 'Three.js', label: 'Interactive Hardware Store', detail: 'Custom 3D WebGL material shader' },
    ],
  },
  {
    id: 'nutrilens',
    title: 'NutriLens AI',
    tagline: 'Multimodal vision nutrition & clinical metabolic intelligence mobile engine.',
    year: '2025–26',
    type: 'Mobile App',
    status: 'Completed',
    platformBadge: 'React Native & Expo SDK 54',
    coverImage: '/images/nutrilens/2.jpeg',
    description:
      'Enterprise-grade mobile intelligence platform converting food photography and grocery barcodes into real-time macronutrient telemetry and clinical metabolic coaching.',
    longDescription:
      'A full-stack cross-platform mobile intelligence engine built with React Native and Expo SDK 54, integrating multimodal AI vision, zero-latency grocery barcode scanning, and dynamic Mifflin-St Jeor metabolic expenditure calculations. Designed to eliminate calorie logging friction, NutriLens routes in-memory Base64 image buffers through OpenRouter with an automated offline heuristic dataset fallback. Daily caloric expenditure, BMR, and TDEE adapt dynamically to activity levels and goal pacing, while an embedded clinical nutrition AI coach analyzes real-time daily intake to provide actionable dietary guidance without syntax clutter.',
    highlights: [
      { icon: '📸', label: 'In-memory camera vision pipeline with zero-latency Base64 streaming' },
      { icon: '🧠', label: 'Multimodal food segmentation with offline heuristic knowledge fallback' },
      { icon: '⚡', label: 'Zero-latency UPC/EAN barcode scanner backed by OpenFoodFacts API (3M+ items)' },
      { icon: '🔥', label: 'Clinically validated Mifflin-St Jeor metabolic physics engine (BMR & TDEE)' },
      { icon: '🤖', label: 'NutriLens AI Dietitian: goal-oriented nutrition chatbot with live context injection' },
      { icon: '🛡️', label: 'Native markdown regex sanitizer eliminating asterisks and raw formatting' },
      { icon: '📊', label: '90-day interactive compliance calendar, trajectory charts & meal telemetry' },
      { icon: '🔒', label: 'Zustand 5 reactive state orchestration with user-partitioned Firebase RTDB' },
    ],
    tech: [
      'React Native',
      'Expo SDK 54',
      'TypeScript',
      'Zustand 5',
      'OpenRouter AI',
      'Firebase RTDB',
      'OpenFoodFacts API',
      'Mifflin-St Jeor Engine',
      'Reanimated',
      'Expo Camera',
    ],
    repoUrl: 'https://github.com/umairulhassancs/Nutrilens-',
    screens: [
      {
        label: '01 Auth & Access',
        src: '/images/nutrilens/1.jpeg',
        caption: 'Secure multi-session authentication with credential caching and partitioned profile binding',
      },
      {
        label: '02 Metabolic Dashboard',
        src: '/images/nutrilens/2.jpeg',
        caption: 'Executive energy dashboard with remaining kcal gauge, macro progress, and AI briefing card',
      },
      {
        label: '03 Calorie Surplus Alert',
        src: '/images/nutrilens/3.jpeg',
        caption: 'Dynamic surplus state indicator with threshold warning telemetry and deficit pacing alerts',
      },
      {
        label: '04 AI Vision Recognition',
        src: '/images/nutrilens/4.jpeg',
        caption: 'In-memory multimodal food segmentation, detected portion weighting, and drafted meal items',
      },
      {
        label: '05 Portion Confirmation',
        src: '/images/nutrilens/5.jpeg',
        caption: 'Itemized macro confirmation with real-time budget impact analysis and atomic log commit',
      },
      {
        label: '06 NutriLens AI Coach',
        src: '/images/nutrilens/6.jpeg',
        caption: 'Goal-oriented clinical nutrition chatbot with live metabolic state injection and clean markdown',
      },
      {
        label: '07 Compliance Tracker',
        src: '/images/nutrilens/7.jpeg',
        caption: '7-day and 14-day compliance telemetry tracking in-plan vs overeat adherence cycles',
      },
      {
        label: '08 Energy & Macro Analytics',
        src: '/images/nutrilens/8.jpeg',
        caption: 'Daily calorie trajectory bar charts and macronutrient distribution breakdown (P/C/F)',
      },
      {
        label: '09 90-Day Calendar Modal',
        src: '/images/nutrilens/9.jpeg',
        caption: 'Interactive monthly compliance calendar with color-coded daily goal status dots',
      },
      {
        label: '10 Nutritional Telemetry',
        src: '/images/nutrilens/10.jpeg',
        caption: 'Itemized meal inspection displaying gram-level protein, carbohydrate, fat, and calorie counts',
      },
      {
        label: '11 Settings & Recalibration',
        src: '/images/nutrilens/11.jpeg',
        caption: 'Biometric adjustments instantly recalibrating BMR, TDEE, and macro distribution targets',
      },
      {
        label: '12 Historical Meal Stream',
        src: '/images/nutrilens/12.jpeg',
        caption: 'Timestamped chronological nutrition journal with multi-tier date filters and log deletion',
      },
    ],
    modules: [
      {
        id: 'vision-engine',
        name: 'Multimodal AI Food Vision',
        tag: 'Computer Vision & Inference',
        description:
          'In-memory image capture and segmentation pipeline converting plate photography into structured macronutrient telemetry without intermediate disk I/O.',
        highlights: [
          'Direct Base64 memory buffer piping via expo-camera eliminating filesystem caching latency',
          'Dynamic OpenRouter AI routing with structured JSON extraction and portion estimation',
          'Automated fallback to embedded 180KB verified nutritional dataset on network drops',
        ],
      },
      {
        id: 'barcode-scanner',
        name: 'Zero-Latency Barcode Scanner',
        tag: 'Hardware Integration & Telemetry',
        description:
          'High-throughput barcode scanning engine utilizing native camera sensors to identify packaged grocery items and fetch official nutrition facts.',
        highlights: [
          'Instant UPC-A, UPC-E, EAN-8, and EAN-13 hardware symbology recognition',
          'Direct OpenFoodFacts REST API integration querying over 3,000,000 global products',
          'Automated per-100g to custom serving size conversion with proportional macro scaling',
        ],
      },
      {
        id: 'metabolic-engine',
        name: 'Mifflin-St Jeor Physics Engine',
        tag: 'Metabolic Science & Calculations',
        description:
          'Clinically validated mathematical engine computing exact Basal Metabolic Rate and Total Daily Energy Expenditure based on dynamic biometrics.',
        highlights: [
          'Gender-specific BMR computation incorporating current weight, height, and age',
          '5-tier physical activity multipliers scaling total daily expenditure from 1.2x to 1.9x',
          'Dynamic goal pacing allocating 2.0g/kg protein and 25% fats with remaining calories to carbs',
        ],
      },
      {
        id: 'ai-dietitian',
        name: 'Clinical AI Nutritionist Coach',
        tag: 'Conversational Intelligence',
        description:
          'Goal-oriented clinical sports nutrition assistant injecting real-time metabolic context into every query for highly targeted dietary advice.',
        highlights: [
          'Automated context injection with remaining calories, consumed macros, and meal logs',
          'Custom regex markdown sanitizer stripping asterisks for clean native mobile typography',
          'Session-persistent chat histories synchronized to Firebase Realtime Database',
        ],
      },
      {
        id: 'compliance-analytics',
        name: '90-Day Compliance & Trajectory',
        tag: 'Data Visualization & Tracking',
        description:
          'Long-term metabolic adherence engine visualizing adherence trends, caloric trajectories, and multi-week macro distribution splits.',
        highlights: [
          'Interactive monthly compliance calendar with color-coded target adherence dots',
          'Dynamic React Native Chart Kit bar charts plotting daily intake against targets',
          'Multi-tier time filters: 7-day, 14-day, monthly, and full 90-day historical logs',
        ],
      },
      {
        id: 'state-architecture',
        name: 'Reactive State & Cloud Isolation',
        tag: 'State Management & Security',
        description:
          'Zustand 5 reactive store architecture combined with strictly partitioned Firebase Realtime Database isolation.',
        highlights: [
          'Synchronous, leak-free state transitions replacing legacy event-bus listeners',
          'User-partitioned Firebase security rules strictly isolating records to authenticated UIDs',
          'Atomic account deletion cascade permanently removing profile, meal logs, and chats',
        ],
      },
    ],
    architectureFlow: [
      {
        step: '01',
        title: 'In-Memory Image Ingestion',
        detail:
          'Camera or gallery captures photo with direct base64: true buffer generation, bypassing local disk I/O and eliminating file latency.',
      },
      {
        step: '02',
        title: 'OpenRouter Vision Routing',
        detail:
          'Multimodal payload dispatches to AI vision models, with automated circuit-breaker fallback to local clinical dataset if network drops.',
      },
      {
        step: '03',
        title: 'Segmented Nutrition Normalization',
        detail:
          'AI-detected food items and portion weights are normalized into standard grams, caloric values, and precise P/C/F splits.',
      },
      {
        step: '04',
        title: 'Mifflin-St Jeor Budget Validation',
        detail:
          'Metabolic engine computes meal impact against dynamic BMR/TDEE targets, updating remaining budget and surplus warning states.',
      },
      {
        step: '05',
        title: 'Zustand & Cloud State Synchronization',
        detail:
          'Meal draft commits to Zustand reactive store and synchronously syncs to Firebase Realtime Database under partitioned user path.',
      },
    ],
    challenges: [
      {
        challenge: 'Memory Leaks and Navigation Race Conditions in Legacy Event Emitters',
        solution:
          'Migrated the entire global event bus (EventRegister) to Zustand v5 reactive stores (useMealDraftStore, useUserStore). State updates became synchronous, predictable, and cleanly bound to React component lifecycles without dangling unmount listeners.',
      },
      {
        challenge: 'Filesystem I/O Latency in Mobile Camera Capture',
        solution:
          'Configured CameraView.takePictureAsync and ImagePicker with direct base64: true in-memory buffers. This eliminated intermediate file system cache reads/writes, avoided deprecated Expo SDK 54 file-system APIs, and cut vision payload dispatch time by over 400ms.',
      },
      {
        challenge: 'API Rate Limits and Offline Single-Point-of-Failure',
        solution:
          'Engineered a dual-layer resilience architecture. If OpenRouter returns HTTP 429 or network timeouts occur, the ingestion pipeline immediately routes to a bundled 180KB verified clinical nutrition dataset, ensuring users can always log meals.',
      },
      {
        challenge: 'Unstyled Markdown Syntax Clutter in Native Mobile UI',
        solution:
          'Built a lightweight regex-based cleanMarkdownText sanitizer in lib/ai.ts that strips markdown asterisks, bold/italic markers, and hash headers while preserving native line breaks and list bullets, delivering clean native mobile typography.',
      },
    ],
    benchmarks: [
      {
        metric: '< 2.2s',
        label: 'Vision Inference Latency',
        detail: 'End-to-end photo capture to itemized meal segmentation and macro breakdown.',
      },
      {
        metric: '3M+',
        label: 'Grocery Barcode Database',
        detail: 'Instant OpenFoodFacts lookup across global UPC, EAN-8, and EAN-13 barcodes.',
      },
      {
        metric: '100%',
        label: 'Offline Availability',
        detail: 'Guaranteed heuristic dataset fallback during connectivity interruptions.',
      },
      {
        metric: '0ms',
        label: 'Filesystem Cache Overhead',
        detail: 'Direct in-memory Base64 streaming bypassing temporary storage writes.',
      },
    ],
  },
  {
    id: 'fingo',
    title: 'FinGo Marketplace',
    tagline: 'Multi-vendor commerce platform with role-based merchant operations.',
    year: '2024',
    type: 'Full-Stack Web',
    status: 'Live',
    platformBadge: 'Full-Stack MERN Architecture',
    browserUrl: 'https://fingo-one.vercel.app',
    coverImage: '/images/fingo/1.png',
    description:
      'Multi-vendor marketplace connecting verified retail stores with customers across major Pakistani cities with 3-tier RBAC and multi-vendor order routing.',
    longDescription:
      'A multi-vendor commerce platform built on the MERN stack (MongoDB, Express, React, Node.js) designed to connect merchants and consumers across Lahore, Karachi, and Islamabad. Engineered with a 3-tier Role-Based Access Control (RBAC) architecture separating Customer, Seller, and Admin portals. Features JWT authentication with refresh token rotation, dynamic store directories, multi-vendor cart splitting, and a full lifecycle order state machine.',
    highlights: [
      { icon: '🏬', label: '3-tier RBAC architecture: Customer, Merchant & Admin portals' },
      { icon: '🔑', label: 'JWT auth with silent refresh token rotation' },
      { icon: '🏙️', label: 'City-level filtering across Lahore, Karachi & Islamabad' },
      { icon: '📦', label: 'Multi-vendor cart with order splitting and state machine' },
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
        caption: 'Promotional catalog with delivery badges and discount filters',
      },
      {
        label: 'Grocery Catalog',
        src: '/images/fingo/Screenshot 2026-09-04 084831.png',
        caption: 'Store inventory with live pricing and regional availability',
      },
      {
        label: 'Verified Merchants',
        src: '/images/fingo/Screenshot 2026-09-04 084929.png',
        caption: 'Regional storefronts across Lahore, Karachi & Islamabad',
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
        name: 'Order Splitting & State Machine',
        tag: 'Transactional Engine',
        description:
          'When a customer purchases items from multiple distinct merchants in a single checkout, the backend partitions the transaction into independent merchant orders with individualized status tracking.',
        highlights: [
          'Order splitting across multiple merchant storefronts',
          'Order state machine: Placed → Confirmed → Packing → Dispatched → Delivered',
          'Automated stock reservation and inventory decrementing',
        ],
      },
      {
        id: 'city-directory',
        name: 'City-Based Filtering Directory',
        tag: 'Discovery & Search',
        description:
          'Regional filtering enabling shoppers to browse stores and merchants based on city location (Lahore, Karachi, Islamabad).',
        highlights: [
          'City-level merchant aggregation and distance sorting',
          'Verified merchant trust badges and local customer ratings',
          'Category indexing for groceries, electronics, and essentials',
        ],
      },
      {
        id: 'jwt-rotation',
        name: 'JWT Authentication & Refresh Token Rotation',
        tag: 'Authentication Core',
        description:
          'Authentication using short-lived access tokens paired with secure HTTP-only refresh tokens rotated in the background.',
        highlights: [
          'JWT token signing with secure secrets',
          'Silent background refresh rotation without user interruption',
          'Automatic token invalidation upon logout',
        ],
      },
      {
        id: 'merchant-catalog',
        name: 'Merchant Catalog & Inventory Management',
        tag: 'Vendor Tools',
        description:
          'Vendor management suite enabling merchants to create product listings, upload imagery, configure variants, manage inventory counts, and toggle promotional deals.',
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
          'Administrative review tools to verify merchant information before stores are permitted to sell publicly.',
        highlights: [
          'Merchant document upload and review audit workflow',
          'Store suspension or verification badge approval',
          'Platform-wide order dispute oversight',
        ],
      },
    ],
    architectureFlow: [
      {
        step: '01',
        title: 'Regional Geo-Routing',
        detail: 'Shopper selects city (Lahore/Karachi/Islamabad); marketplace filters regional stores and delivery zones.',
      },
      {
        step: '02',
        title: 'Multi-Store Cart Splitting',
        detail: 'Cart partitions items into separate vendor fulfillment streams with independent sub-totals.',
      },
      {
        step: '03',
        title: 'Order Creation Transaction',
        detail: 'Database transaction commits customer order and generates individual merchant fulfillment tickets.',
      },
      {
        step: '04',
        title: 'Vendor Dispatch State Machine',
        detail: 'Merchants receive incoming orders and advance states: Confirmed → Packing → Dispatched → Delivered.',
      },
      {
        step: '05',
        title: 'Admin Verification & Oversight',
        detail: 'Admins audit store performance, resolve customer complaints, and oversee platform activity.',
      },
    ],
    challenges: [
      {
        challenge: 'Multi-Vendor Order Partitioning Without Inconsistencies',
        solution:
          'When a single customer cart contains items from multiple stores, a partial failure could cause inventory anomalies. Engineered a database transactional pipeline that commits all sub-orders or rolls back if any store inventory is depleted.',
      },
      {
        challenge: 'Secure Session Persistence Across Refresh Cycles',
        solution:
          'Storing tokens in localStorage exposed credentials to XSS vulnerabilities. Implemented a dual-token architecture: short-lived access tokens stored in memory paired with HttpOnly refresh cookies rotated on API requests.',
      },
      {
        challenge: 'Catalog Search Efficiency Across Large Catalogs',
        solution:
          'Built compound indexes on MongoDB collections (city + category + price) and debounced search inputs, keeping catalog query benchmark times around 45ms in development testing across product records.',
      },
    ],
    benchmarks: [
      { metric: '~45ms', label: 'Query Benchmark', detail: 'Indexed MongoDB query response' },
      { metric: '3 Cities', label: 'Regional Coverage', detail: 'Lahore, Karachi, Islamabad' },
      { metric: '3 Portals', label: 'Scoped RBAC Tiers', detail: 'Customer, Seller & Admin' },
      { metric: 'ACID', label: 'Transactional Cart', detail: 'Atomic multi-store order splitting' },
    ],
  },
  {
    id: 'evershine',
    title: 'Evershine Academy ERP & LMS',
    tagline: 'Multi-campus educational ERP & LMS featuring live biometric fingerprint integration, 7-role portals & automated finance engine.',
    year: '2026',
    type: 'Web Platform',
    status: 'Live',
    platformBadge: 'Next.js 16 & Prisma MySQL',
    browserUrl: 'https://evershineacadmey.com',
    liveUrl: 'https://www.evershineacadmey.com',
    coverImage: '/images/evershine/1.png',
    description:
      'Multi-campus educational ERP & LMS with on-premise biometric fingerprint machine sync, 7 role-based portals, automated fee challans, staff payroll, and exam date sheets.',
    longDescription:
      'An educational ERP and learning management system built for multi-campus institutions operating across morning, evening, and night shifts. Built with Next.js 16 App Router, React 19, Prisma ORM, and MySQL, the platform integrates on-premise hardware biometric fingerprint machines for automated attendance reconciliation, alongside core academic, attendance, HR, and financial workflows: admissions, monthly fee invoices with printable 3-part bank challans (jsPDF), penalty policy calculations, staff payroll ledgers, continuous student evaluation, and 7 role-based portals (Super Admin, Campus Admin, Teacher, Accountant, Student, Parent, Guardian).',
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
      { metric: 'Transactional', label: 'Financial Ledgers', detail: 'Atomic Prisma transactions for fee ledgers' },
      { metric: '14 Modules', label: 'Functional Modules', detail: 'Biometrics, ERP, HR, Exams, Promotions & Portals' },
      { metric: '14 Screens', label: 'Verified UI Flows', detail: 'Interactive walkthrough across all key dashboards' },
    ],
  },
  {
    id: 'copilot',
    title: 'Voice AI Copilot',
    tagline: 'Voice AI copilot with speech recognition, LLM tool calling & Web Audio DSP.',
    year: '2025–26',
    type: 'Full-Stack Web',
    status: 'Live',
    platformBadge: 'Voice AI & Web Audio',
    browserUrl: 'https://autonomous-neural-copilot.vercel.app',
    coverImage: '/images/copilot/1.png',
    description:
      'Browser-based voice assistant using speech recognition, an LLM, Web Audio API, and Firebase to convert spoken commands into structured task and reminder actions.',
    longDescription:
      'A browser-based voice assistant engineered for hands-free task management and low-latency interaction. Built with modern JavaScript ES Modules, Vite, and cloud-accelerated AI inference, the application couples browser hotword listening with speech-to-text transcription. Ambient audio is processed via Web Audio API AnalyserNode RMS energy calculation to detect conversational pauses naturally. Spoken commands are interpreted by an LLM into structured JSON tool execution payloads for Firestore task management, reminder scheduling, and daily agenda briefings, visualised in an interactive HUD with a radial audio frequency visualizer.',
    highlights: [
      { icon: '⚡', label: 'Cloud speech-to-text with Whisper model transcription' },
      { icon: '🧠', label: 'LLM tool calling resolving natural voice commands into structured JSON actions' },
      { icon: '🎙️', label: 'Browser hotword detection ("Jon", "Hey Jon") for hands-free activation' },
      { icon: '🎛️', label: 'Web Audio API RMS energy tracking with conversational silence detection' },
      { icon: '📋', label: 'Task management & natural language reminder scheduling in Firestore' },
      { icon: '📊', label: 'Daily briefing compiling pending tasks, agenda items, and schedule' },
      { icon: '🌌', label: 'Interactive HUD with real-time radial audio canvas visualizer' },
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
      'HTML5 Canvas',
      'Vercel Edge',
    ],
    liveUrl: 'https://autonomous-neural-copilot.vercel.app/',
    repoUrl: 'https://github.com/umairulhassancs/Autonomous-Neural-Copilot',
    screens: [
      {
        label: '01 Voice Command HUD',
        src: '/images/copilot/1.png',
        caption: 'Central voice interface with real-time audio visualizer canvas, hotword status, and command bar',
      },
    ],
    modules: [
      {
        id: 'dual-engine-voice-pipeline',
        name: 'Voice Pipeline & Hotword Listener',
        tag: 'Speech Recognition & Audio',
        description:
          'Acoustic intake engine bridging in-browser wake-word detection into cloud transcription. Monitors for wake utterances and captures microphone audio for transcription.',
        highlights: [
          'Browser-native Web Speech background hotword listener',
          'Stream handoff to Whisper cloud speech-to-text',
          'Fast response times for conversational command ingestion',
          'Push-to-talk manual override fallback across the HUD',
        ],
      },
      {
        id: 'executive-task-reminders-ledger',
        name: 'Task Ledger & Reminders Engine',
        tag: 'Cloud Database',
        description:
          'Firebase Firestore persistence layer providing reactive state synchronization for user tasks, agenda items, and scheduled notifications.',
        highlights: [
          'User-scoped Firestore collections ensuring data isolation per authenticated user ID',
          'Live subscription listeners updating the slide-out drawers without page reloads',
          'Daily briefing routine aggregating pending tasks and chronological agenda items',
          'Task completion toggling and bulk action handlers',
        ],
      },
      {
        id: 'cyber-glass-design-system',
        name: 'Interactive HUD & Audio Canvas',
        tag: 'Frontend Interface',
        description:
          'Modern interface featuring multi-layered backdrop blur filters, glowing light fields, and canvas-rendered audio frequency visualizers.',
        highlights: [
          'Dark-themed base with ambient blue and violet glow accents',
          'Concentric rotating rings around the central voice core',
          'Frosted glass panels engineered with CSS backdrop filters',
          'Floating command bar supporting dual keyboard and voice input modalities',
        ],
      },
    ],
    architectureFlow: [
      {
        step: '01',
        title: 'Hotword Listening',
        detail: 'In-browser Web Speech listener scans ambient audio for wake words ("Jon", "Hey Jon") without continuous server calls.',
      },
      {
        step: '02',
        title: 'Audio DSP & Silence Detection',
        detail: 'Web Audio API AnalyserNode tracks live RMS amplitude; records microphone input until conversational silence is reached.',
      },
      {
        step: '03',
        title: 'Cloud Speech-to-Text',
        detail: 'Captured audio is sent to cloud Whisper inference, returning structured speech transcription.',
      },
      {
        step: '04',
        title: 'LLM Intent Parsing',
        detail: 'Transcript is evaluated by the LLM against defined tool schemas, resolving intent into validated JSON actions.',
      },
      {
        step: '05',
        title: 'Firestore Mutation & Voice Feedback',
        detail: 'Action executes against Firestore (task/reminder), an acoustic cue plays, and synthesized speech confirms the result.',
      },
      {
        step: '06',
        title: 'Reactive State Update',
        detail: 'Canvas visualizer resets to idle state, task drawer updates via Firestore snapshot, and HUD updates status.',
      },
    ],
    challenges: [
      {
        challenge: 'Conversational Truncation in Voice Capture',
        solution:
          'Fixed-length audio recording cuts off slower speakers. Solved by implementing continuous Web Audio API RMS energy tracking that extends recording while vocal frequencies remain active, finalizing only after sustained silence.',
      },
      {
        challenge: 'End-to-End Latency from Voice to Spoken Output',
        solution:
          'Multi-hop pipelines (Wake -> STT -> LLM -> DB -> TTS) can introduce noticeable latency. Minimized roundtrip delay by leveraging fast cloud inference and executing database mutations concurrently while synthesis prepares audio.',
      },
      {
        challenge: 'Structured Tool Calling from Conversational Voice',
        solution:
          'Voice commands frequently contain ambiguous phrasing or informal time references. Used structured tool schemas and prompt grounding to enforce clean JSON payload formatting with schema validation and fallback handling.',
      },
      {
        challenge: 'Real-Time Canvas Audio Visualization Performance',
        solution:
          'Rendering frequency bins in real time alongside CSS blur effects can impact browser performance. Optimized the animation loop using requestAnimationFrame with pre-allocated TypedArray buffers (Uint8Array) on an isolated canvas layer.',
      },
    ],
    benchmarks: [
      { metric: 'Whisper', label: 'Cloud STT', detail: 'Cloud speech-to-text inference' },
      { metric: 'LLM Tools', label: 'Intent Parsing', detail: 'Structured tool schema extraction' },
      { metric: 'Web Audio', label: 'Silence Detection', detail: 'Dynamic RMS energy monitoring' },
      { metric: 'Hands-Free', label: 'Hotword Listening', detail: 'In-browser wake-word detection' },
      { metric: 'Canvas', label: 'Audio Visualizer', detail: 'Real-time frequency spectrum rendering' },
      { metric: 'Firestore', label: 'Cloud Database', detail: 'User-scoped task and reminder sync' },
    ],
  },
]
