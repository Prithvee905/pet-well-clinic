import {
  Syringe,
  Stethoscope,
  HeartPulse,
  Scissors,
  ScanLine,
  Bone,
  ShieldPlus,
  Sparkles,
} from 'lucide-react';

export const services = [
  {
    id: 'vaccination',
    icon: Syringe,
    title: 'Vaccination & Preventive Care',
    shortDesc: 'Keep your pet protected with timely vaccinations and preventive health plans tailored to their needs.',
    fullDesc: 'Our comprehensive vaccination programs protect your pet against common and dangerous diseases. We create personalized prevention schedules based on your pet\'s age, breed, and lifestyle, ensuring they stay healthy year-round.',
  },
  {
    id: 'checkups',
    icon: Stethoscope,
    title: 'General Health Checkups',
    shortDesc: 'Regular wellness exams to monitor your pet\'s health and catch potential issues early.',
    fullDesc: 'Routine health checkups are the foundation of your pet\'s well-being. Our thorough examinations include weight monitoring, dental assessment, heart and lung evaluation, and age-appropriate screenings to keep your companion in optimal health.',
  },
  {
    id: 'surgery',
    icon: HeartPulse,
    title: 'Surgery Support',
    shortDesc: 'Safe and compassionate surgical care with modern techniques and attentive post-operative support.',
    fullDesc: 'From routine spaying and neutering to more complex procedures, our surgical suite is equipped with modern technology. We prioritize your pet\'s comfort with careful anesthesia protocols and dedicated post-operative recovery monitoring.',
  },
  {
    id: 'grooming',
    icon: Scissors,
    title: 'Grooming & Bathing',
    shortDesc: 'Professional grooming services to keep your pet looking and feeling their best.',
    fullDesc: 'Our gentle grooming team provides bathing, brushing, nail trimming, ear cleaning, and breed-specific styling. We use pet-safe products and create a calm, stress-free grooming experience your pet will actually enjoy.',
  },
  {
    id: 'ultrasound',
    icon: ScanLine,
    title: 'Ultrasound & Diagnostics',
    shortDesc: 'Advanced imaging and diagnostic tools for accurate and timely health assessments.',
    fullDesc: 'Our diagnostic capabilities include ultrasound imaging, allowing us to visualize internal organs in real-time. This non-invasive technology helps us diagnose conditions quickly and develop effective treatment plans without unnecessary procedures.',
  },
  {
    id: 'xray',
    icon: Bone,
    title: 'X-Ray & Cytology',
    shortDesc: 'Detailed X-ray imaging and cytological analysis for comprehensive diagnosis.',
    fullDesc: 'Digital X-ray technology provides clear, detailed images of bones, joints, and internal structures. Combined with cytology services, we can examine cell samples to identify infections, inflammation, and other conditions with precision.',
  },
  {
    id: 'emergency',
    icon: ShieldPlus,
    title: 'Emergency Pet Care',
    shortDesc: 'Responsive emergency support when your pet needs urgent medical attention.',
    fullDesc: 'When emergencies happen, every minute counts. Our team is prepared to provide rapid assessment and stabilization for urgent conditions including trauma, poisoning, difficulty breathing, and sudden illness. Your pet\'s safety is our priority.',
  },
];

export const serviceCategories = [
  { id: 'all', label: 'All Services' },
  { id: 'preventive', label: 'Preventive' },
  { id: 'diagnostic', label: 'Diagnostic' },
  { id: 'care', label: 'Care & Grooming' },
  { id: 'emergency', label: 'Emergency' },
];
