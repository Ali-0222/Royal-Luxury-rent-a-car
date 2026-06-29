'use client';

export interface FleetCar {
  name: string;
  image: string;
}

export const fleet: FleetCar[] = [
  { name: 'Rolls Royce', image: '/images/1 Rolls Royce.jpeg' },
  { name: 'Mercedes-Benz G-Wagon', image: '/images/2 Mercedes-Benz G-Wagon.jpeg' },
  { name: 'Mercedes-Benz', image: '/images/3 Mercedes-Benz.jpeg' },
  { name: 'BMW 7 Series', image: '/images/4 BMW 7 Series.jpg' },
  { name: 'Audi A6', image: '/images/5 Audi A6.jpg' },
  { name: 'Toyota Land Cruiser LC300', image: '/images/6 Toyota Land Cruiser LC300.jpg' },
  { name: 'Toyota Land cruiser ZX V8', image: '/images/7 Toyota Land cruiser ZX V8.jpg' },
  { name: 'Toyota Land cruiser Prado TX', image: '/images/8 Toyota Land cruiser Prado TX.jpg' },
  { name: 'Toyota Fortuner', image: '/images/9 Toyota Fortuner.jpg' },
  { name: 'Toyota Hilux Revo', image: '/images/10 Toyota Hilux Revo.jpg' },
  { name: 'Honda Civic RS Turbo', image: '/images/11 Honda Civic RS Turbo.jpg' },
  { name: 'Toyota Altis Grande', image: '/images/12 Toyota Altis Grande.jpg' },
  { name: 'Haval', image: '/images/13 Haval.jpg' },
  { name: 'Kia Sportage', image: '/images/14 Kia Sportage.jpg' },
];

export const galleryImages = fleet.map((car) => car.image);
