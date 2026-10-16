const App = window.App || {};
window.App = App;

App.DATA = {
  destinations: [
    { id: 'bali', name: 'Bali', country: 'Indonesia', region: 'asia', desc: 'Tropical paradise with ancient temples and lush rice terraces.', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&fit=crop', rating: 4.8, attractions: 45, price: 45000, popularity: 95 },
    { id: 'paris', name: 'Paris', country: 'France', region: 'europe', desc: 'The city of lights, love, art, and world-class cuisine.', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop', rating: 4.9, attractions: 62, price: 85000, popularity: 98 },
    { id: 'dubai', name: 'Dubai', country: 'UAE', region: 'middle-east', desc: 'Futuristic skyline meets luxury shopping and desert adventures.', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop', rating: 4.7, attractions: 38, price: 75000, popularity: 92 },
    { id: 'switzerland', name: 'Switzerland', country: 'Switzerland', region: 'europe', desc: 'Alpine wonderland with pristine lakes and charming villages.', img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=600&h=400&fit=crop', rating: 4.9, attractions: 40, price: 120000, popularity: 90 },
    { id: 'tokyo', name: 'Tokyo', country: 'Japan', region: 'asia', desc: 'A dazzling blend of ultramodern and traditional culture.', img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop', rating: 4.8, attractions: 55, price: 90000, popularity: 93 },
    { id: 'maldives', name: 'Maldives', country: 'Maldives', region: 'asia', desc: 'Crystal-clear waters and overwater bungalows in paradise.', img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&h=400&fit=crop', rating: 4.9, attractions: 20, price: 150000, popularity: 88 },
    { id: 'goa', name: 'Goa', country: 'India', region: 'india', desc: 'Sun-kissed beaches, vibrant nightlife, and Portuguese heritage.', img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&h=400&fit=crop', rating: 4.5, attractions: 30, price: 25000, popularity: 85 },
    { id: 'kerala', name: 'Kerala', country: 'India', region: 'india', desc: 'God\'s own country with backwaters, spices, and serenity.', img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop', rating: 4.7, attractions: 35, price: 30000, popularity: 82 }
  ],
  packages: [
    { id: 0, name: 'Bali Escape', dest: 'Bali', duration: '5 Days / 4 Nights', rating: 4.8, price: 39999, category: ['budget', 'romantic'], img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&fit=crop', activities: ['Temple Tour', 'Beach Day', 'Rice Terrace Trek', 'Spa Session'], desc: 'Experience the magic of Bali with this carefully curated escape package including temple visits, beach relaxation, and cultural immersion.', itinerary: ['Arrival & Beach Check-in', 'Ubud Temple & Rice Terraces', 'Water Sports & Snorkeling', 'Spa Day & Cultural Show', 'Departure'], included: ['Hotel Stay', 'Breakfast Daily', 'Airport Transfers', 'Guided Tours'], excluded: ['International Flights', 'Travel Insurance', 'Personal Expenses'] },
    { id: 1, name: 'Swiss Adventure', dest: 'Switzerland', duration: '8 Days / 7 Nights', rating: 4.9, price: 149999, category: ['luxury', 'adventure'], img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=600&h=400&fit=crop', activities: ['Skiing', 'Lake Cruise', 'Mountain Train', 'Chocolate Tour'], desc: 'An unforgettable Swiss journey through alpine peaks, crystal lakes, and charming towns with world-class hospitality.', itinerary: ['Zurich Arrival', 'Lucerne City Tour', 'Interlaken Adventure', 'Jungfrau Excursion', 'Bern Old Town', 'Geneva Lake Cruise', 'Zermatt & Matterhorn', 'Departure'], included: ['4-Star Hotels', 'All Meals', 'Swiss Pass', 'Guided Tours'], excluded: ['Flights', 'Visa Fees', 'Optional Activities'] },
    { id: 2, name: 'Dubai Luxury', dest: 'Dubai', duration: '6 Days / 5 Nights', rating: 4.7, price: 89999, category: ['luxury', 'family'], img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop', activities: ['Desert Safari', 'Burj Khalifa', 'Shopping', 'Dhow Cruise'], desc: 'Indulge in Dubai\'s opulence with luxury stays, thrilling desert safaris, and world-class shopping experiences.', itinerary: ['Arrival & Marina Walk', 'Burj Khalifa & Mall', 'Desert Safari', 'Old Dubai & Souks', 'Dhow Cruise Dinner', 'Departure'], included: ['5-Star Hotel', 'Breakfast & Dinner', 'Desert Safari', 'City Tours'], excluded: ['Flights', 'Visa', 'Personal Shopping'] },
    { id: 3, name: 'Kerala Experience', dest: 'Kerala', duration: '6 Days / 5 Nights', rating: 4.7, price: 29999, category: ['budget', 'family', 'romantic'], img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop', activities: ['Houseboat', 'Spice Garden', 'Backwater Cruise', 'Yoga'], desc: 'Discover Kerala\'s tranquil backwaters, aromatic spice gardens, and rejuvenating Ayurvedic traditions.', itinerary: ['Cochin Arrival', 'Munnar Tea Gardens', 'Thekkady Wildlife', 'Alleppey Houseboat', 'Kovalam Beach', 'Departure'], included: ['Hotels & Houseboat', 'All Meals', 'Houseboat Cruise', 'Guided Tours'], excluded: ['Flights', 'Ayurvedic Spa', 'Tips'] },
    { id: 4, name: 'Tokyo Explorer', dest: 'Tokyo', duration: '7 Days / 6 Nights', rating: 4.8, price: 109999, category: ['adventure', 'family'], img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop', activities: ['Shibuya', 'Mt. Fuji Trip', 'Sushi Making', 'Anime District'], desc: 'Immerse yourself in Tokyo\'s electrifying energy from ancient shrines to neon-lit streets and culinary wonders.', itinerary: ['Shinjuku Arrival', 'Asakusa & Senso-ji', 'Harajuku & Shibuya', 'Mt. Fuji Day Trip', 'Akihabara & Ueno', 'Tsukiji & Ginza', 'Departure'], included: ['Hotel Stay', 'Rail Pass', 'Guided Tours', 'Sushi Class'], excluded: ['Flights', 'Travel Insurance', 'Meals not listed'] }
  ],
  experiences: [
    { name: 'Adventure', count: 120, img: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=500&h=400&fit=crop', desc: 'Thrilling activities for adrenaline seekers' },
    { name: 'Beaches', count: 85, img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=400&fit=crop', desc: 'Sun, sand, and crystal-clear waters' },
    { name: 'Mountains', count: 65, img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&h=400&fit=crop', desc: 'Majestic peaks and breathtaking views' },
    { name: 'Wildlife', count: 45, img: 'https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=500&h=400&fit=crop', desc: 'Encounter exotic animals in their habitat' },
    { name: 'Culture', count: 95, img: 'https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=500&h=400&fit=crop', desc: 'Immerse in local traditions and heritage' },
    { name: 'Food & Cuisine', count: 75, img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=400&fit=crop', desc: 'Savor authentic flavors worldwide' },
    { name: 'Luxury', count: 50, img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=400&fit=crop', desc: 'Premium stays and exclusive experiences' },
    { name: 'Family', count: 80, img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=500&h=400&fit=crop', desc: 'Fun-filled trips for all ages' }
  ],
  gallery: [
    { src: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&h=800&fit=crop', cat: 'beaches', alt: 'Tropical beach' },
    { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=400&fit=crop', cat: 'mountains', alt: 'Mountain peak' },
    { src: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=700&fit=crop', cat: 'cities', alt: 'Paris skyline' },
    { src: 'https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=600&h=500&fit=crop', cat: 'wildlife', alt: 'Wildlife safari' },
    { src: 'https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=600&h=600&fit=crop', cat: 'culture', alt: 'Cultural festival' },
    { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=450&fit=crop', cat: 'nature', alt: 'Nature landscape' },
    { src: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=750&fit=crop', cat: 'cities', alt: 'Tokyo night' },
    { src: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&h=400&fit=crop', cat: 'beaches', alt: 'Maldives water' },
    { src: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=600&h=500&fit=crop', cat: 'mountains', alt: 'Swiss Alps' },
    { src: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=600&h=650&fit=crop', cat: 'nature', alt: 'Forest trail' },
    { src: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&h=400&fit=crop', cat: 'beaches', alt: 'Goa sunset' },
    { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=500&fit=crop', cat: 'culture', alt: 'Fine dining' }
  ],
  testimonials: [
    { name: 'Priya Sharma', location: 'India', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face', rating: 5, text: 'WanderVista made our Bali trip absolutely unforgettable. Every detail was perfectly planned and the experiences were beyond our expectations.' },
    { name: 'James Mitchell', location: 'United Kingdom', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face', rating: 5, text: 'The Swiss adventure package was incredible. From the mountain trains to the lake cruises, everything was seamlessly organized.' },
    { name: 'Maria Garcia', location: 'Spain', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face', rating: 5, text: 'Our family trip to Kerala was magical. The houseboat experience and backwater tours created memories we will cherish forever.' },
    { name: 'Kenji Tanaka', location: 'Japan', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face', rating: 4, text: 'Exploring Dubai with WanderVista was a dream. The desert safari and luxury experiences were top-notch. Highly recommended!' },
    { name: 'Sophie Laurent', location: 'France', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face', rating: 5, text: 'The Tokyo explorer package gave us an authentic taste of Japan. Perfect balance of guided tours and free exploration time.' }
  ],
  tips: [
    { title: '10 Things to Do in Bali', category: 'Guide', date: 'Sep 5, 2026', readTime: '5 min', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&fit=crop', desc: 'From sacred temples to hidden waterfalls, discover the must-do experiences in Bali.', content: '<h2>Top 10 Bali Experiences</h2><p>Bali is a destination that offers something for every traveler. Here are the top experiences you should not miss.</p><ul><li>Visit the iconic Tanah Lot Temple at sunset</li><li>Trek through the Tegallalang Rice Terraces</li><li>Snorkel in the crystal-clear waters of Nusa Penida</li><li>Explore the Ubud Monkey Forest</li><li>Take a traditional Balinese cooking class</li><li>Watch a Kecak fire dance performance</li><li>Surf the legendary waves at Uluwatu</li><li>Relax at a world-class spa</li><li>Visit the Tirta Empul water temple</li><li>Explore the vibrant Seminyak nightlife</li></ul><p>Bali truly is a paradise that caters to adventurers, culture enthusiasts, and those seeking pure relaxation alike.</p>' },
    { title: 'Best Time to Visit Switzerland', category: 'Tips', date: 'Aug 28, 2026', readTime: '4 min', img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=600&h=400&fit=crop', desc: 'Plan your Swiss trip perfectly with our seasonal guide to weather and events.', content: '<h2>When to Visit Switzerland</h2><p>Switzerland is beautiful year-round, but each season offers unique experiences.</p><ul><li><strong>Spring (Mar-May):</strong> Mild weather, blooming flowers, fewer crowds</li><li><strong>Summer (Jun-Aug):</strong> Perfect for hiking, lake swimming, and festivals</li><li><strong>Autumn (Sep-Nov):</strong> Stunning fall colors, wine harvest season</li><li><strong>Winter (Dec-Feb):</strong> World-class skiing, Christmas markets, cozy chalets</li></ul><p>For most travelers, June through September offers the best overall experience with pleasant temperatures and accessible mountain trails.</p>' },
    { title: 'Hidden Places in Kerala', category: 'Discovery', date: 'Aug 15, 2026', readTime: '6 min', img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop', desc: 'Go beyond the tourist trail and discover Kerala\'s best-kept secrets.', content: '<h2>Kerala\'s Hidden Gems</h2><p>Beyond the popular backwaters and beaches, Kerala hides many treasures.</p><ul><li>Athirappilly Waterfalls - the Niagara of India</li><li>Varkala Cliff - dramatic cliffs meeting the Arabian Sea</li><li>Wayanad - misty mountains and tribal heritage</li><li>Bekal Fort - a majestic fort on the coast</li><li>Silent Valley National Park - untouched tropical forest</li></ul><p>These lesser-known spots offer authentic experiences away from the crowds.</p>' },
    { title: 'Complete Dubai Travel Guide', category: 'Guide', date: 'Jul 30, 2026', readTime: '7 min', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop', desc: 'Everything you need to know before visiting the futuristic city of Dubai.', content: '<h2>Dubai Travel Guide</h2><p>Dubai is a city of superlatives. Here is your complete guide.</p><ul><li>Best time to visit: November to March for pleasant weather</li><li>Must-visit: Burj Khalifa, Dubai Mall, Palm Jumeirah</li><li>Don\'t miss: Desert safari, Gold Souk, Dubai Frame</li><li>Getting around: Metro is efficient and affordable</li><li>Dress code: Modest clothing recommended in public areas</li><li>Currency: UAE Dirham (AED)</li></ul><p>Dubai blends tradition with innovation, creating an unforgettable travel experience.</p>' },
    { title: 'Japan Travel Tips', category: 'Tips', date: 'Jul 10, 2026', readTime: '5 min', img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop', desc: 'Essential tips for navigating Japan like a pro on your first visit.', content: '<h2>Essential Japan Tips</h2><p>Japan can be overwhelming for first-time visitors. These tips will help.</p><ul><li>Get a Japan Rail Pass before arrival for unlimited train travel</li><li>Carry cash - many places don\'t accept cards</li><li>Learn basic phrases: Arigatou (thank you), Sumimasen (excuse me)</li><li>Remove shoes when entering homes and some restaurants</li><li>Try conveyor belt sushi for affordable, delicious meals</li><li>Visit during cherry blossom season (late March-April) for magical scenery</li></ul><p>Japan rewards curious travelers with extraordinary experiences at every turn.</p>' }
  ],
  mapData: {
    india: { name: 'India', info: 'Incredible diversity of culture, landscapes, and cuisines.', rating: 4.6 },
    bali: { name: 'Bali', info: 'Tropical paradise known for temples, beaches, and rice terraces.', rating: 4.8 },
    dubai: { name: 'Dubai', info: 'Ultra-modern city with luxury shopping and desert adventures.', rating: 4.7 },
    paris: { name: 'Paris', info: 'The romantic capital of the world with iconic landmarks.', rating: 4.9 },
    tokyo: { name: 'Tokyo', info: 'A mesmerizing blend of ancient tradition and cutting-edge technology.', rating: 4.8 },
    switzerland: { name: 'Switzerland', info: 'Alpine beauty with pristine lakes and world-class skiing.', rating: 4.9 },
    maldives: { name: 'Maldives', info: 'Overwater villas and crystal-clear turquoise lagoons.', rating: 4.9 }
  },
  currencyRates: { INR: 1, USD: 0.012, EUR: 0.011, GBP: 0.0095, AED: 0.044 },
  currencySymbols: { INR: '\u20B9', USD: '$', EUR: '\u20AC', GBP: '\u00A3', AED: '\u062F.\u0625' },
  translations: {
    en: { nav_home: 'Home', nav_destinations: 'Destinations', nav_experiences: 'Experiences', nav_packages: 'Packages', nav_gallery: 'Gallery', nav_about: 'About', nav_contact: 'Contact', nav_plan: 'Plan Your Trip', hero_title: 'Discover Places That Stay With You', hero_subtitle: 'Explore breathtaking destinations, unforgettable experiences, and journeys designed around you.', hero_explore: 'Explore Destinations', hero_plan: 'Plan Your Journey', dest_title: 'Explore Popular Destinations', dest_subtitle: 'Handpicked destinations loved by travelers worldwide', exp_title: 'Travel Your Way', pkg_title: 'Travel Packages', gal_title: 'Travel Gallery', contact_title: 'Contact Us', news_title: 'Get Travel Inspiration in Your Inbox', planner_where: 'Where do you want to go?', planner_dest: 'Destination', planner_date: 'Travel Date', planner_travelers: 'Travelers', planner_type: 'Travel Type', planner_search: 'Search Trips', scroll_down: 'Scroll to explore', trip_title: 'Trip Planner', explorer_title: 'Destination Explorer' },
    hi: { nav_home: '\u0939\u094B\u092E', nav_destinations: '\u0917\u0902\u0924\u0935\u094D\u092F', nav_experiences: '\u0905\u0928\u0941\u092D\u0935', nav_packages: '\u092A\u0948\u0915\u0947\u091C', nav_gallery: '\u0917\u0948\u0932\u0930\u0940', nav_about: '\u0939\u092E\u093E\u0930\u0947 \u092C\u093E\u0930\u0947 \u092E\u0947\u0902', nav_contact: '\u0938\u0902\u092A\u0930\u094D\u0915', nav_plan: '\u092F\u093E\u0924\u094D\u0930\u093E \u092F\u094B\u091C\u0928\u093E', hero_title: '\u0910\u0938\u0940 \u091C\u0917\u0939\u0947\u0902 \u0916\u094B\u091C\u0947\u0902 \u091C\u094B \u0906\u092A\u0915\u0947 \u0938\u093E\u0925 \u0930\u0939\u0947\u0902', hero_subtitle: '\u0932\u0941\u0915\u0938\u092E\u093E\u0928 \u0917\u0902\u0924\u0935\u094D\u092F\u094B\u0902 \u0914\u0930 \u0905\u0926\u094D\u0935\u093F\u0924\u0940\u092F \u0905\u0928\u0941\u092D\u0935\u094B\u0902 \u0915\u0940 \u0916\u094B\u091C \u0915\u0930\u0947\u0902\u0964', hero_explore: '\u0917\u0902\u0924\u0935\u094D\u092F \u0916\u094B\u091C\u0947\u0902', hero_plan: '\u092F\u093E\u0924\u094D\u0930\u093E \u092F\u094B\u091C\u0928\u093E \u092C\u0928\u093E\u090F\u0902', dest_title: '\u0932\u094B\u0915\u092A\u094D\u0930\u093F\u092F \u0917\u0902\u0924\u0935\u094D\u092F', dest_subtitle: '\u092F\u093E\u0924\u094D\u0930\u093F\u092F\u094B\u0902 \u0926\u094D\u0935\u093E\u0930\u093E \u092A\u0938\u0902\u0926 \u0915\u0940 \u0917\u0908 \u091C\u0917\u0939\u0947\u0902', exp_title: '\u0905\u092A\u0928\u0947 \u0924\u0930\u0940\u0915\u0947 \u0938\u0947 \u092F\u093E\u0924\u094D\u0930\u093E \u0915\u0930\u0947\u0902', pkg_title: '\u092F\u093E\u0924\u094D\u0930\u093E \u092A\u0948\u0915\u0947\u091C', gal_title: '\u092F\u093E\u0924\u094D\u0930\u093E \u0917\u0948\u0932\u0930\u0940', contact_title: '\u0938\u0902\u092A\u0930\u094D\u0915 \u0915\u0930\u0947\u0902', news_title: '\u0905\u092A\u0928\u0947 \u0907\u0928\u092C\u0949\u0915\u094D\u0938 \u092E\u0947\u0902 \u092F\u093E\u0924\u094D\u0930\u093E \u092A\u094D\u0930\u0947\u0930\u0923\u093E \u092A\u094D\u0930\u093E\u092A\u094D\u0924 \u0915\u0930\u0947\u0902', planner_where: '\u0906\u092A \u0915\u0939\u093E\u0901 \u091C\u093E\u0928\u093E \u091A\u093E\u0939\u0924\u0947 \u0939\u0948\u0902?', planner_dest: '\u0917\u0902\u0924\u0935\u094D\u092F', planner_date: '\u092F\u093E\u0924\u094D\u0930\u093E \u0924\u093F\u0925\u093F', planner_travelers: '\u092F\u093E\u0924\u094D\u0930\u0940', planner_type: '\u092F\u093E\u0924\u094D\u0930\u093E \u092A\u094D\u0930\u0915\u093E\u0930', planner_search: '\u092F\u093E\u0924\u094D\u0930\u093E\u090F\u0901 \u0916\u094B\u091C\u0947\u0902', scroll_down: '\u0905\u0928\u094D\u0935\u0947\u0937\u0923 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0938\u094D\u0915\u094D\u0930\u0949\u0932 \u0915\u0930\u0947\u0902', trip_title: '\u092F\u093E\u0924\u094D\u0930\u093E \u092F\u094B\u091C\u0928\u093E\u0915\u093E\u0930', explorer_title: '\u0917\u0902\u0924\u0935\u094D\u092F \u0905\u0928\u094D\u0935\u0947\u0937\u0915' },
    es: { nav_home: 'Inicio', nav_destinations: 'Destinos', nav_experiences: 'Experiencias', nav_packages: 'Paquetes', nav_gallery: 'Galer\u00EDa', nav_about: 'Nosotros', nav_contact: 'Contacto', nav_plan: 'Planifica Tu Viaje', hero_title: 'Descubre Lugares Que Se Quedan Contigo', hero_subtitle: 'Explora destinos impresionantes y experiencias inolvidables.', hero_explore: 'Explorar Destinos', hero_plan: 'Planifica Tu Viaje', dest_title: 'Explora Destinos Populares', dest_subtitle: 'Destinos seleccionados amados por viajeros de todo el mundo', exp_title: 'Viaja A Tu Manera', pkg_title: 'Paquetes De Viaje', gal_title: 'Galer\u00EDa De Viajes', contact_title: 'Cont\u00E1ctanos', news_title: 'Recibe Inspiraci\u00F3n De Viaje En Tu Bandeja', planner_where: '\u00BFA d\u00F3nde quieres ir?', planner_dest: 'Destino', planner_date: 'Fecha', planner_travelers: 'Viajeros', planner_type: 'Tipo', planner_search: 'Buscar Viajes', scroll_down: 'Desplaza para explorar', trip_title: 'Planificador De Viajes', explorer_title: 'Explorador De Destinos' },
    fr: { nav_home: 'Accueil', nav_destinations: 'Destinations', nav_experiences: 'Exp\u00E9riences', nav_packages: 'Forfaits', nav_gallery: 'Galerie', nav_about: '\u00C0 Propos', nav_contact: 'Contact', nav_plan: 'Planifiez Votre Voyage', hero_title: 'D\u00E9couvrez Des Lieux Qui Restent Avec Vous', hero_subtitle: 'Explorez des destinations \u00E0 couper le souffle et des exp\u00E9riences inoubliables.', hero_explore: 'Explorer', hero_plan: 'Planifier', dest_title: 'Destinations Populaires', dest_subtitle: 'Des destinations s\u00E9lectionn\u00E9es ador\u00E9es par les voyageurs', exp_title: 'Voyagez \u00C0 Votre Fa\u00E7on', pkg_title: 'Forfaits Voyage', gal_title: 'Galerie', contact_title: 'Contactez-Nous', news_title: 'Recevez L\'inspiration Voyage Dans Votre Bo\u00EEte', planner_where: 'O\u00F9 voulez-vous aller?', planner_dest: 'Destination', planner_date: 'Date', planner_travelers: 'Voyageurs', planner_type: 'Type', planner_search: 'Rechercher', scroll_down: 'D\u00E9filez pour explorer', trip_title: 'Planificateur De Voyage', explorer_title: 'Explorateur De Destinations' }
  }
};

App.currentCurrency = localStorage.getItem('wv_currency') || 'INR';
App.currentLang = localStorage.getItem('wv_lang') || 'en';

App.formatPrice = (basePriceINR) => {
  const rate = App.DATA.currencyRates[App.currentCurrency] || 1;
  const symbol = App.DATA.currencySymbols[App.currentCurrency] || '\u20B9';
  const converted = Math.round(basePriceINR * rate);
  return `${symbol}${converted.toLocaleString()}`;
};

App.initTheme = () => {
  const saved = localStorage.getItem('wv_theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);
  App.updateThemeIcon();
};

App.toggleTheme = () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('wv_theme', next);
  App.updateThemeIcon();
};

App.updateThemeIcon = () => {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  btn.innerHTML = isDark ? '\u2600' : '\u263E';
};

App.applyLanguage = (lang) => {
  App.currentLang = lang;
  localStorage.setItem('wv_lang', lang);
  const t = App.DATA.translations[lang] || App.DATA.translations.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });
};

App.updatePrices = () => {
  document.querySelectorAll('[data-base-price]').forEach(el => {
    const base = parseInt(el.getAttribute('data-base-price'));
    el.textContent = App.formatPrice(base);
  });
  if (typeof App.renderDestinations === 'function') App.renderDestinations();
  if (typeof App.renderExplorer === 'function') App.renderExplorer();
  if (typeof App.renderPackages === 'function') App.renderPackages();
};

App.initScrollFeatures = () => {
  const progress = document.getElementById('scroll-progress');
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('backToTop');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    if (progress) progress.style.width = `${scrollPercent}%`;
    if (navbar) {
      if (scrollTop > 80) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    }
    if (backToTop) {
      if (scrollTop > 500) backToTop.classList.add('visible');
      else backToTop.classList.remove('visible');
    }
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (scrollTop >= top) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
    });
  });

  if (backToTop) {
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
};

App.initRevealAnimations = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
};

App.initLoader = () => {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const loader = document.getElementById('loader');
      if (loader) {
        loader.classList.add('fade-out');
        setTimeout(() => loader.style.display = 'none', 600);
      }
    }, 1600);
  });
};

App.openModal = (id) => {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
};

App.closeModal = (id) => {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
};

App.initModals = () => {
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.classList.contains('modal-close')) App.closeModal(modal.id);
    });
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.open').forEach(m => App.closeModal(m.id));
      const lb = document.getElementById('lightbox');
      if (lb && lb.classList.contains('open')) App.closeLightbox();
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  App.initTheme();
  App.initLoader();
  App.initScrollFeatures();
  App.initRevealAnimations();
  App.initModals();

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !expanded);
    });
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const searchToggle = document.getElementById('searchToggle');
  const searchDropdown = document.getElementById('searchDropdown');
  if (searchToggle && searchDropdown) {
    searchToggle.addEventListener('click', () => searchDropdown.classList.toggle('open'));
    document.addEventListener('click', (e) => {
      if (!searchDropdown.contains(e.target) && e.target !== searchToggle) searchDropdown.classList.remove('open');
    });
  }

  const globalSearch = document.getElementById('globalSearch');
  if (globalSearch) {
    globalSearch.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      if (q.length > 0) {
        document.getElementById('explorer').scrollIntoView({ behavior: 'smooth' });
        const explorerSearch = document.getElementById('explorerSearch');
        if (explorerSearch) { explorerSearch.value = q; App.renderExplorer(); }
      }
    });
  }

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) themeToggle.addEventListener('click', App.toggleTheme);

  const currencySelector = document.getElementById('currencySelector');
  if (currencySelector) {
    currencySelector.value = App.currentCurrency;
    currencySelector.addEventListener('change', (e) => {
      App.currentCurrency = e.target.value;
      localStorage.setItem('wv_currency', App.currentCurrency);
      App.updatePrices();
    });
  }

  const languageSelector = document.getElementById('languageSelector');
  if (languageSelector) {
    languageSelector.value = App.currentLang;
    languageSelector.addEventListener('change', (e) => App.applyLanguage(e.target.value));
  }

  const heroForm = document.getElementById('heroSearchForm');
  if (heroForm) {
    heroForm.addEventListener('submit', (e) => {
      e.preventDefault();
      document.getElementById('planner').scrollIntoView({ behavior: 'smooth' });
    });
  }

  App.applyLanguage(App.currentLang);
});