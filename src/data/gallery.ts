export interface GalleryImage {
  src: string;
  alt: string;
  portrait?: boolean;
}

// Single source of truth for the gallery. The Gallery grid AND the Lightbox
// both read from this exact array in the same order — so opening, navigating,
// and (if you later edit/remove entries) always map to the correct image.
export const galleryImages: GalleryImage[] = [
{
  src: '/assets/img/ademola-abiola-table-tennis-coach-dubai-3.jpg',
  alt: 'Sprint action',
  portrait: true
},
{
  src: '/assets/img/kids-table-tennis-training-dubai.jpg',
  alt: 'Kids table tennis training'
},
{
  src: '/assets/img/ping-perfect-home-table-tennis-training-dubai.jpg',
  alt: 'Home table tennis training'
},
{
  src: '/assets/img/ping-perfect-table-tennis-coaching-dubai.jpg',
  alt: 'Table tennis coaching'
},
{
  src: '/assets/img/private-table-tennis-training-dubai.jpg',
  alt: 'Private table tennis training'
},
{
  src: '/assets/img/dubai-home-table-tennis-coaching.jpg',
  alt: 'Dubai Home table tennis coaching'
},
{
  src: '/assets/img/structured-table-tennis-training-dubai.jpg',
  alt: 'Structured table tennis training'
},
{
  src: '/assets/img/ping-perfect-private-coaching-dubai.jpg',
  alt: 'Ping Perfect private coaching'
},
{
  src: '/assets/img/table-tennis-lessons-for-kids-dubai.jpg',
  alt: 'Table tennis lessons for kids'
},
{
  src: '/assets/img/professional-home-coaching-dubai.jpg',
  alt: 'Professional home coaching'
},
{
  src: '/assets/img/professional-table-tennis-coach-dubai.jpg',
  alt: 'Professional table tennis coach'
},
{
  src: '/assets/img/coach-ademola-table-tennis-coaching-dubai.jpg',
  alt: 'Coach Ademola table tennis coaching'
},
{ src: '/assets/img/img1.jpg', alt: 'Coach Ademola' },
{ src: '/assets/img/img3.jpg', alt: 'Training session' },
{ src: '/assets/img/img4.jpg', alt: 'Podium moment' },
{ src: '/assets/img/img5.jpg', alt: 'Starting blocks' },
{ src: '/assets/img/img6.jpg', alt: 'Team celebration' },
{ src: '/assets/img/img7.jpg', alt: 'Coaching session' },
{ src: '/assets/img/img8.jpg', alt: 'Award ceremony' },
{ src: '/assets/img/img9.jpg', alt: 'Student achievement' }];